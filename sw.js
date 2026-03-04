/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/loglevel/lib/loglevel.js"
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    "use strict";
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else // removed by dead control flow
{}
}(this, function () {
    "use strict";

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    var _loggersByName = {};
    var defaultLogger = null;

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods() {
        /*jshint validthis:true */
        var level = this.getLevel();

        // Replace the actual methods.
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, this.name);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;

        // Return any important warnings.
        if (typeof console === undefinedType && level < this.levels.SILENT) {
            return "No console available for logging";
        }
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, _level, _loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, factory) {
      // Private instance variables.
      var self = this;
      /**
       * The level inherited from a parent logger (or a global default). We
       * cache this here rather than delegating to the parent so that it stays
       * in sync with the actual logging methods that we have installed (the
       * parent could change levels but we might not have rebuilt the loggers
       * in this child yet).
       * @type {number}
       */
      var inheritedLevel;
      /**
       * The default level for this logger, if any. If set, this overrides
       * `inheritedLevel`.
       * @type {number|null}
       */
      var defaultLevel;
      /**
       * A user-specific level for this logger. If set, this overrides
       * `defaultLevel`.
       * @type {number|null}
       */
      var userLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var cookieName = encodeURIComponent(storageKey);
                  var location = cookie.indexOf(cookieName + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(
                          cookie.slice(location + cookieName.length + 1)
                      )[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      function clearPersistedLevel() {
          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage.removeItem(storageKey);
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {}
      }

      function normalizeLevel(input) {
          var level = input;
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              return level;
          } else {
              throw new TypeError("log.setLevel() called with invalid level: " + input);
          }
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          if (userLevel != null) {
            return userLevel;
          } else if (defaultLevel != null) {
            return defaultLevel;
          } else {
            return inheritedLevel;
          }
      };

      self.setLevel = function (level, persist) {
          userLevel = normalizeLevel(level);
          if (persist !== false) {  // defaults to true
              persistLevelIfPossible(userLevel);
          }

          // NOTE: in v2, this should call rebuild(), which updates children.
          return replaceLoggingMethods.call(self);
      };

      self.setDefaultLevel = function (level) {
          defaultLevel = normalizeLevel(level);
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.resetLevel = function () {
          userLevel = null;
          clearPersistedLevel();
          replaceLoggingMethods.call(self);
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      self.rebuild = function () {
          if (defaultLogger !== self) {
              inheritedLevel = normalizeLevel(defaultLogger.getLevel());
          }
          replaceLoggingMethods.call(self);

          if (defaultLogger === self) {
              for (var childName in _loggersByName) {
                _loggersByName[childName].rebuild();
              }
          }
      };

      // Initialize all the internal levels.
      inheritedLevel = normalizeLevel(
          defaultLogger ? defaultLogger.getLevel() : "WARN"
      );
      var initialLevel = getPersistedLevel();
      if (initialLevel != null) {
          userLevel = normalizeLevel(initialLevel);
      }
      replaceLoggingMethods.call(self);
    }

    /*
     *
     * Top-level API
     *
     */

    defaultLogger = new Logger();

    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
            throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
            logger = _loggersByName[name] = new Logger(
                name,
                defaultLogger.methodFactory
            );
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	(() => {
/******/ 	  if (typeof __webpack_require__ !== 'undefined') {
/******/ 	    var oldGetScript = __webpack_require__.u;
/******/ 	    var oldLoadScript = __webpack_require__.e;
/******/ 	    var queryMap = {};
/******/ 	    var countMap = {};
/******/ 	    var getRetryDelay = function () {
/******/ 	      return 500;
/******/ 	    };
/******/ 	    __webpack_require__.u = function (chunkId) {
/******/ 	      var result = oldGetScript(chunkId);
/******/ 	      return (
/******/ 	        result +
/******/ 	        (queryMap.hasOwnProperty(chunkId) ? '?' + queryMap[chunkId] : '')
/******/ 	      );
/******/ 	    };
/******/ 	    __webpack_require__.e = function (chunkId) {
/******/ 	      var result = oldLoadScript(chunkId);
/******/ 	      return result.catch(function (error) {
/******/ 	        var retries = countMap.hasOwnProperty(chunkId) ? countMap[chunkId] : 3;
/******/ 	        if (retries < 1) {
/******/ 	          var realSrc = oldGetScript(chunkId);
/******/ 	          error.message =
/******/ 	            'Loading chunk ' +
/******/ 	            chunkId +
/******/ 	            ' failed after 3 retries.\n(' +
/******/ 	            realSrc +
/******/ 	            ')';
/******/ 	          error.request = realSrc;
/******/ 	          throw error;
/******/ 	        }
/******/ 	        return new Promise(function (resolve) {
/******/ 	          var retryAttempt = 3 - retries + 1;
/******/ 	          setTimeout(function () {
/******/ 	            var retryAttemptString = '&retry-attempt=' + retryAttempt;
/******/ 	            var cacheBust = (() => Date.now())();
/******/ 	            +retryAttemptString;
/******/ 	            queryMap[chunkId] = cacheBust;
/******/ 	            countMap[chunkId] = retries - 1;
/******/ 	            resolve(__webpack_require__.e(chunkId));
/******/ 	          }, getRetryDelay(retryAttempt));
/******/ 	        });
/******/ 	      });
/******/ 	    };
/******/ 	  }
/******/ 	})();
/******/ 	
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/utils/StorageAccess.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2019-2021 , 2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * Retrieves the IndexedDB factory object.
 *
 * @returns {IDBFactory | undefined} The IndexedDB factory object if available, or undefined if it is not supported.
 */
function getIDBFactory() {
  // IndexedDB loading is lazy for easier testing.

  // just *accessing* _indexedDB throws an exception in firefox with
  // indexeddb disabled.
  try {
    var _self;
    // `self` is preferred for service workers, which access this file's functions.
    // We check `self` first because `window` returns something which doesn't work for service workers.
    // Note: `self?.indexedDB ?? window.indexedDB` breaks in service workers for unknown reasons.
    return (_self = self) !== null && _self !== void 0 && _self.indexedDB ? self.indexedDB : window.indexedDB;
  } catch {}
}
let idb = null;
async function idbInit() {
  if (!getIDBFactory()) {
    throw new Error("IndexedDB not available");
  }
  idb = await new Promise((resolve, reject) => {
    const request = getIDBFactory().open("matrix-react-sdk", 1);
    request.onerror = reject;
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore("pickleKey");
      db.createObjectStore("account");
    };
  });
}
async function idbTransaction(table, mode, fn) {
  if (!idb) {
    await idbInit();
  }
  return new Promise((resolve, reject) => {
    const txn = idb.transaction([table], mode);
    txn.onerror = reject;
    const objectStore = txn.objectStore(table);
    const request = fn(objectStore);
    request.onerror = reject;
    request.onsuccess = () => {
      resolve(request.result);
    };
  });
}

/**
 * Loads an item from an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store in IndexedDB.
 * @param {string | string[]} key The key where the data is stored.
 * @returns {Promise<any>} A promise that resolves with the retrieved item from the table.
 */
async function idbLoad(table, key) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readonly", objectStore => objectStore.get(key));
}

/**
 * Saves data to an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store in the IndexedDB.
 * @param {string|string[]} key The key to use for storing the data.
 * @param {*} data The data to be saved.
 * @returns {Promise<void>} A promise that resolves when the data is saved successfully.
 */
async function idbSave(table, key, data) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readwrite", objectStore => objectStore.put(data, key));
}

/**
 * Deletes a record from an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store where the record is stored.
 * @param {string|string[]} key The key of the record to be deleted.
 * @returns {Promise<void>} A Promise that resolves when the record(s) have been successfully deleted.
 */
async function idbDelete(table, key) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readwrite", objectStore => objectStore.delete(key));
}

/**
 * Clears all records from an IndexedDB table within the underlying `matrix-react-sdk` database.
 *
 * If IndexedDB access is not supported in the environment, an error is thrown.
 *
 * @param {string} table The name of the object store where the records are stored.
 * @returns {Promise<void>} A Promise that resolves when the record(s) have been successfully deleted.
 */
async function idbClear(table) {
  if (!idb) {
    await idbInit();
  }
  return idbTransaction(table, "readwrite", objectStore => objectStore.clear());
}
// EXTERNAL MODULE: ../../node_modules/loglevel/lib/loglevel.js
var loglevel = __webpack_require__("../../node_modules/loglevel/lib/loglevel.js");
var loglevel_default = /*#__PURE__*/__webpack_require__.n(loglevel);
;// ./node_modules/matrix-js-sdk/src/logger.ts
/* unused harmony import specifier */ var _defineProperty;

/*
Copyright 2018 André Jaenisch
Copyright 2019-2025 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/



/** Backwards-compatibility hack to expose `log` to applications that might still be relying on it. */

/** Logger interface used within the js-sdk codebase */

/** The basic interface for a logger which doesn't support children */

// This is to demonstrate, that you can use any namespace you want.
// Namespaces allow you to turn on/off the logging for specific parts of the
// application.
// An idea would be to control this via an environment variable (on Node.js).
// See https://www.npmjs.com/package/debug to see how this could be implemented
// Part of #332 is introducing a logging library in the first place.
const DEFAULT_NAMESPACE = "matrix";

// because rageshakes in react-sdk hijack the console log, also at module load time,
// initializing the logger here races with the initialization of rageshakes.
// to avoid the issue, we override the methodFactory of loglevel that binds to the
// console methods at initialization time by a factory that looks up the console methods
// when logging so we always get the current value of console methods.
(loglevel_default()).methodFactory = function (methodName, logLevel, loggerName) {
  return function (...args) {
    /* eslint-disable @typescript-eslint/no-invalid-this */
    if (this.prefix) {
      args.unshift(this.prefix);
    }
    /* eslint-enable @typescript-eslint/no-invalid-this */
    const supportedByConsole = methodName === "error" || methodName === "warn" || methodName === "trace" || methodName === "info" || methodName === "debug";
    /* eslint-disable no-console */
    if (supportedByConsole) {
      return console[methodName](...args);
    } else {
      return console.log(...args);
    }
    /* eslint-enable no-console */
  };
};

/**
 * Implementation of {@link Logger} based on `loglevel`.
 */

/**
 * Internal utility function: gets a {@link Logger} based on `loglevel`.
 *
 * Child loggers produced by {@link Logger.getChild} add the name of the child logger as a prefix on each log line.
 *
 * @param prefix Prefix to add to each logged line. If undefined, no prefix will be added.
 */
function getPrefixedLogger(prefix) {
  const loggerName = DEFAULT_NAMESPACE + (prefix === undefined ? "" : `-${prefix}`);
  const prefixLogger = loglevel_default().getLogger(loggerName);
  if (prefixLogger.getChild === undefined) {
    // This is a new loglevel Logger which has not been turned into a PrefixedLogger yet.
    prefixLogger.prefix = prefix;
    prefixLogger.getChild = childPrefix => {
      // create the new child logger
      const childLogger = getPrefixedLogger((prefix !== null && prefix !== void 0 ? prefix : "") + childPrefix);
      // Assign the methodFactory from the parent logger.
      // This is useful if we add extensions to the parent logger that modifies
      // its methodFactory. (An example extension is: storing each log to a rageshake db)
      childLogger.methodFactory = prefixLogger.methodFactory;
      // Rebuild the child logger with the new methodFactory.
      childLogger.rebuild();
      return childLogger;
    };
    prefixLogger.setLevel((loglevel_default()).levels.DEBUG, false);
  }
  return prefixLogger;
}

/**
 * Drop-in replacement for `console` using {@link https://www.npmjs.com/package/loglevel|loglevel}.
 * Can be tailored down to specific use cases if needed.
 *
 * @deprecated avoid the use of this unless you are the constructor of `MatrixClient`: you should be using the logger
 *    associated with `MatrixClient`.
 */
const logger = getPrefixedLogger();

/**
 * A "span" for grouping related log lines together.
 *
 * The current implementation just adds the name at the start of each log line.
 *
 * This offers a lighter-weight alternative to 'child' loggers returned by {@link Logger#getChild}. In particular,
 * it's not possible to apply individual filters to the LogSpan such as setting the verbosity level. On the other hand,
 * no reference to the LogSpan is retained in the logging framework, so it is safe to make lots of them over the course
 * of an application's life and just drop references to them when the job is done.
 */
class LogSpan {
  constructor(parent, name) {
    _defineProperty(this, "name", void 0);
    this.parent = parent;
    this.name = name + ":";
  }
  trace(...msg) {
    this.parent.trace(this.name, ...msg);
  }
  debug(...msg) {
    this.parent.debug(this.name, ...msg);
  }
  info(...msg) {
    this.parent.info(this.name, ...msg);
  }
  warn(...msg) {
    this.parent.warn(this.name, ...msg);
  }
  error(...msg) {
    this.parent.error(this.name, ...msg);
  }
}

/**
 * A simplification of the `Debugger` type exposed by the `debug` library. We reimplement the bits we need here
 * to avoid a dependency on `debug`.
 */

/**
 * A `Logger` instance, suitable for use in {@link ICreateClientOpts.logger}, which will write to the `debug` library.
 *
 * @example
 * ```js
 *     import debug from "debug";
 *
 *     const client = createClient({
 *         baseUrl: homeserverUrl,
 *         userId: userId,
 *         accessToken: "akjgkrgjs",
 *         deviceId: "xzcvb",
 *         logger: new DebugLogger(debug(`matrix-js-sdk:${userId}`)),
 *     });
 * ```
 */
class DebugLogger {
  constructor(debugInstance) {
    this.debugInstance = debugInstance;
  }
  trace(...msg) {
    this.debugWithPrefix("[TRACE]", ...msg);
  }
  debug(...msg) {
    this.debugWithPrefix("[DEBUG]", ...msg);
  }
  info(...msg) {
    this.debugWithPrefix("[INFO]", ...msg);
  }
  warn(...msg) {
    this.debugWithPrefix("[WARN]", ...msg);
  }
  error(...msg) {
    this.debugWithPrefix("[ERROR]", ...msg);
  }
  getChild(namespace) {
    return new DebugLogger(this.debugInstance.extend(namespace));
  }
  debugWithPrefix(prefix, ...msg) {
    let formatter;

    // Convert the first argument to a string, so that we can safely add a prefix. This is much the same logic that
    // `debug()` uses.
    if (msg.length === 0) {
      formatter = "";
    } else if (msg[0] instanceof Error) {
      const err = msg.shift();
      formatter = err.stack || err.message;
    } else if (typeof msg[0] == "string") {
      formatter = msg.shift();
    } else {
      formatter = "%O";
    }
    this.debugInstance(prefix + " " + formatter, ...msg);
  }
}
;// ./node_modules/matrix-js-sdk/src/base64.ts
/*
Copyright 2023 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/**
 * Base64 encoding and decoding utilities
 */

function toBase64(uint8Array, options) {
  if (typeof uint8Array.toBase64 === "function") {
    // Currently this is only supported in Firefox,
    // but we match the options in the hope in the future we can rely on it for all environments.
    // https://tc39.es/proposal-arraybuffer-base64/spec/#sec-uint8array.prototype.tobase64
    return uint8Array.toBase64(options);
  }
  let base64 = btoa(uint8Array.reduce((acc, current) => acc + String.fromCharCode(current), ""));
  if (options.omitPadding) {
    base64 = base64.replace(/={1,2}$/, "");
  }
  if (options.alphabet === "base64url") {
    base64 = base64.replace(/\+/g, "-").replace(/\//g, "_");
  }
  return base64;
}

/**
 * Encode a typed array of uint8 as base64.
 * @param uint8Array - The data to encode.
 * @returns The base64.
 */
function encodeBase64(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64",
    omitPadding: false
  });
}

/**
 * Encode a typed array of uint8 as unpadded base64.
 * @param uint8Array - The data to encode.
 * @returns The unpadded base64.
 */
function encodeUnpaddedBase64(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64",
    omitPadding: true
  });
}

/**
 * Encode a typed array of uint8 as unpadded base64 using the URL-safe encoding.
 * @param uint8Array - The data to encode.
 * @returns The unpadded base64.
 */
function encodeUnpaddedBase64Url(uint8Array) {
  return toBase64(uint8Array, {
    alphabet: "base64url",
    omitPadding: true
  });
}
function fromBase64(base64, options) {
  if (typeof Uint8Array.fromBase64 === "function") {
    // Currently this is only supported in Firefox,
    // but we match the options in the hope in the future we can rely on it for all environments.
    // https://tc39.es/proposal-arraybuffer-base64/spec/#sec-uint8array.frombase64
    return Uint8Array.fromBase64(base64, options);
  }
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

/**
 * Decode a base64 (or base64url) string to a typed array of uint8.
 * @param base64 - The base64 to decode.
 * @returns The decoded data.
 */
function decodeBase64(base64) {
  // The function requires us to select an alphabet, but we don't know if base64url was used so we convert.
  return fromBase64(base64.replace(/-/g, "+").replace(/_/g, "/"), {
    alphabet: "base64",
    lastChunkHandling: "loose"
  });
}
;// ./node_modules/matrix-js-sdk/src/utils/internal/deriveKeys.ts
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// salt for HKDF, with 8 bytes of zeros
const zeroSalt = new Uint8Array(8);

/**
 * Derive AES and HMAC keys from a master key.
 *
 * This is used for deriving secret storage keys: see https://spec.matrix.org/v1.11/client-server-api/#msecret_storagev1aes-hmac-sha2 (step 1).
 *
 * @param key
 * @param name
 */
async function deriveKeys(key, name) {
  const hkdfkey = await globalThis.crypto.subtle.importKey("raw", key, {
    name: "HKDF"
  }, false, ["deriveBits"]);
  const keybits = await globalThis.crypto.subtle.deriveBits({
    name: "HKDF",
    salt: zeroSalt,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/879
    info: new TextEncoder().encode(name),
    hash: "SHA-256"
  }, hkdfkey, 512);
  const aesKey = keybits.slice(0, 32);
  const hmacKey = keybits.slice(32);
  const aesProm = globalThis.crypto.subtle.importKey("raw", aesKey, {
    name: "AES-CTR"
  }, false, ["encrypt", "decrypt"]);
  const hmacProm = globalThis.crypto.subtle.importKey("raw", hmacKey, {
    name: "HMAC",
    hash: {
      name: "SHA-256"
    }
  }, false, ["sign", "verify"]);
  return Promise.all([aesProm, hmacProm]);
}
;// ./node_modules/matrix-js-sdk/src/utils/decryptAESSecretStorageItem.ts
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Decrypt an AES-encrypted Secret Storage item.
 *
 * @param data - the encrypted data, returned by {@link utils/encryptAESSecretStorageItem.default | encryptAESSecretStorageItem}.
 * @param key - the encryption key to use as an input to the HKDF function which is used to derive the AES key. Must
 *    be the same as provided to {@link utils/encryptAESSecretStorageItem.default | encryptAESSecretStorageItem}.
 * @param name - the name of the secret. Also used as an input to the HKDF operation which is used to derive the AES
 *    key, so again must be the same as provided to {@link utils/encryptAESSecretStorageItem.default | encryptAESSecretStorageItem}.
 */
async function decryptAESSecretStorageItem(data, key, name) {
  const [aesKey, hmacKey] = await deriveKeys(key, name);
  const ciphertext = decodeBase64(data.ciphertext);
  if (!(await globalThis.crypto.subtle.verify({
    name: "HMAC"
  }, hmacKey, decodeBase64(data.mac), ciphertext))) {
    throw new Error(`Error decrypting secret ${name}: bad MAC`);
  }
  const plaintext = await globalThis.crypto.subtle.decrypt({
    name: "AES-CTR",
    counter: decodeBase64(data.iv),
    length: 64
  }, aesKey, ciphertext);
  return new TextDecoder().decode(new Uint8Array(plaintext));
}
;// ./node_modules/matrix-js-sdk/src/utils/encryptAESSecretStorageItem.ts
/* unused harmony import specifier */ var encryptAESSecretStorageItem_decodeBase64;
/* unused harmony import specifier */ var encryptAESSecretStorageItem_encodeBase64;
/* unused harmony import specifier */ var encryptAESSecretStorageItem_deriveKeys;
/*
 * Copyright 2024 The Matrix.org Foundation C.I.C.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



/**
 * Encrypt a string as a secret storage item, using AES-CTR.
 *
 * @param data - the plaintext to encrypt
 * @param key - the encryption key to use as an input to the HKDF function which is used to derive the AES key for
 *    encryption. Obviously, the same key must be provided when decrypting.
 * @param name - the name of the secret. Used as an input to the HKDF operation which is used to derive the AES key,
 *    so again the same value must be provided when decrypting.
 * @param ivStr - the base64-encoded initialization vector to use. If not supplied, a random one will be generated.
 *
 * @returns The encrypted result, including the ciphertext itself, the initialization vector (as supplied in `ivStr`,
 *   or generated), and an HMAC on the ciphertext — all base64-encoded.
 */
async function encryptAESSecretStorageItem(data, key, name, ivStr) {
  let iv;
  if (ivStr) {
    iv = encryptAESSecretStorageItem_decodeBase64(ivStr);
  } else {
    iv = new Uint8Array(16);
    globalThis.crypto.getRandomValues(iv);

    // clear bit 63 of the IV to stop us hitting the 64-bit counter boundary
    // (which would mean we wouldn't be able to decrypt on Android). The loss
    // of a single bit of iv is a price we have to pay.
    iv[8] &= 0x7f;
  }
  const [aesKey, hmacKey] = await encryptAESSecretStorageItem_deriveKeys(key, name);
  const encodedData = new TextEncoder().encode(data);
  const ciphertext = await globalThis.crypto.subtle.encrypt({
    name: "AES-CTR",
    counter: iv,
    length: 64
  }, aesKey, encodedData);
  const hmac = await globalThis.crypto.subtle.sign({
    name: "HMAC"
  }, hmacKey, ciphertext);
  return {
    iv: encryptAESSecretStorageItem_encodeBase64(iv),
    ciphertext: encryptAESSecretStorageItem_encodeBase64(new Uint8Array(ciphertext)),
    mac: encryptAESSecretStorageItem_encodeBase64(new Uint8Array(hmac))
  };
}
;// ./src/utils/tokens/tokens.ts
/* unused harmony import specifier */ var tokens_logger;
/* unused harmony import specifier */ var tokens_encryptAESSecretStorageItem;
/* unused harmony import specifier */ var StorageAccess;
/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/**
 * Utility functions related to the storage and retrieval of access tokens
 */

/*
 * Names used when storing the tokens in indexeddb or localstorage
 */
const ACCESS_TOKEN_STORAGE_KEY = "mx_access_token";
const REFRESH_TOKEN_STORAGE_KEY = "mx_refresh_token";
/*
 * Names of the tokens. Used as part of the calculation to derive AES keys during encryption in persistTokenInStorage,
 * and decryption in restoreSessionFromStorage.
 */
const ACCESS_TOKEN_IV = "access_token";
const REFRESH_TOKEN_IV = "refresh_token";
/*
 * Keys for localstorage items which indicate whether we expect a token in indexeddb.
 */
const HAS_ACCESS_TOKEN_STORAGE_KEY = "mx_has_access_token";
const HAS_REFRESH_TOKEN_STORAGE_KEY = "mx_has_refresh_token";

/**
 * The pickle key is a string of unspecified length and format.  For AES, we need a 256-bit Uint8Array. So we HKDF the pickle key to generate the AES key.  The AES key should be zeroed after it is used.
 * @param pickleKey
 * @returns AES key
 */
async function pickleKeyToAesKey(pickleKey) {
  const pickleKeyBuffer = new Uint8Array(pickleKey.length);
  for (let i = 0; i < pickleKey.length; i++) {
    pickleKeyBuffer[i] = pickleKey.charCodeAt(i);
  }
  const hkdfKey = await crypto.subtle.importKey("raw", pickleKeyBuffer, "HKDF", false, ["deriveBits"]);
  pickleKeyBuffer.fill(0);
  return new Uint8Array(await crypto.subtle.deriveBits({
    name: "HKDF",
    hash: "SHA-256",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/879
    salt: new Uint8Array(32),
    info: new Uint8Array(0)
  }, hkdfKey, 256));
}

/**
 * Try to decrypt a token retrieved from storage
 *
 * Where token is not encrypted (plain text) returns the plain text token.
 *
 * Where token is encrypted, attempts decryption. Returns successfully decrypted token, or throws if
 * decryption failed.
 *
 * @param pickleKey Pickle key: used to derive the encryption key, or undefined if the token is not encrypted.
 *   Must be the same as provided to {@link persistTokenInStorage}.
 * @param token token to be decrypted.
 * @param tokenName Name of the token. Used in logging, but also used as an input when generating the actual AES key,
 *    so the same value must be provided to {@link persistTokenInStorage}.
 *
 * @returns the decrypted token, or the plain text token.
 */
async function tryDecryptToken(pickleKey, token, tokenName) {
  if (typeof token === "string") {
    // Looks like an unencrypted token
    return token;
  }

  // Otherwise, it must be an encrypted token.
  if (!pickleKey) {
    throw new Error(`Error decrypting secret ${tokenName}: no pickle key found.`);
  }
  const encrKey = await pickleKeyToAesKey(pickleKey);
  const decryptedToken = await decryptAESSecretStorageItem(token, encrKey, tokenName);
  encrKey.fill(0);
  return decryptedToken;
}

/**
 * Persist a token in storage
 *
 * When pickle key is present, will attempt to encrypt the token. If encryption fails (typically because
 * WebCrypto is unavailable), the key will be stored unencrypted.
 *
 * Stores in IndexedDB, falling back to localStorage.
 *
 * @param storageKey key used to store the token. Note: not an encryption key; rather a localstorage or indexeddb key.
 * @param tokenName Name of the token. Used in logging, but also used as an input when generating the actual AES key,
 *    so the same value must be provided to {@link tryDecryptToken} when decrypting.
 * @param token the token to store. When undefined, any existing token at the `storageKey` is removed from storage.
 * @param pickleKey Pickle key: used to derive the key used to encrypt token. If `undefined`, the token will be stored
 *    unencrypted.
 * @param hasTokenStorageKey Localstorage key for an item which stores whether we expect to have a token in indexeddb,
 *    eg "mx_has_access_token".
 */
async function persistTokenInStorage(storageKey, tokenName, token, pickleKey, hasTokenStorageKey) {
  // store whether we expect to find a token, to detect the case
  // where IndexedDB is blown away
  if (token) {
    localStorage.setItem(hasTokenStorageKey, "true");
  } else {
    localStorage.removeItem(hasTokenStorageKey);
  }
  if (pickleKey) {
    let encryptedToken;
    if (token) {
      try {
        // try to encrypt the access token using the pickle key
        const encrKey = await pickleKeyToAesKey(pickleKey);
        encryptedToken = await tokens_encryptAESSecretStorageItem(token, encrKey, tokenName);
        encrKey.fill(0);
      } catch (e) {
        // This is likely due to the browser not having WebCrypto or somesuch.
        // Warn about it, but fall back to storing the unencrypted token.
        tokens_logger.warn(`Could not encrypt token for ${tokenName}`, e);
      }
    }
    try {
      // Save either the encrypted access token, or the plain access
      // token if there is no token or we were unable to encrypt (e.g. if the browser doesn't
      // have WebCrypto).
      await StorageAccess.idbSave("account", storageKey, encryptedToken || token);
    } catch {
      // if we couldn't save to indexedDB, fall back to localStorage.  We
      // store the access token unencrypted since localStorage only saves
      // strings.
      if (!!token) {
        localStorage.setItem(storageKey, token);
      } else {
        localStorage.removeItem(storageKey);
      }
    }
  } else {
    try {
      await StorageAccess.idbSave("account", storageKey, token);
    } catch {
      if (!!token) {
        localStorage.setItem(storageKey, token);
      } else {
        localStorage.removeItem(storageKey);
      }
    }
  }
}

/**
 * Wraps {@link persistTokenInStorage} with accessToken storage keys
 *
 * @param token - The token to store. When undefined, any existing accessToken is removed from storage.
 * @param pickleKey - Pickle key: used to derive the key used to encrypt token. If `undefined`, the token will be stored
 *    unencrypted.
 */
async function persistAccessTokenInStorage(token, pickleKey) {
  return persistTokenInStorage(ACCESS_TOKEN_STORAGE_KEY, ACCESS_TOKEN_IV, token, pickleKey, HAS_ACCESS_TOKEN_STORAGE_KEY);
}

/**
 * Wraps {@link persistTokenInStorage} with refreshToken storage keys.
 *
 * @param token - The token to store. When undefined, any existing refreshToken is removed from storage.
 * @param pickleKey - Pickle key: used to derive the key used to encrypt token. If `undefined`, the token will be stored
 *    unencrypted.
 */
async function persistRefreshTokenInStorage(token, pickleKey) {
  return persistTokenInStorage(REFRESH_TOKEN_STORAGE_KEY, REFRESH_TOKEN_IV, token, pickleKey, HAS_REFRESH_TOKEN_STORAGE_KEY);
}
;// ./src/utils/tokens/pickling.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2020-2024 The Matrix.org Foundation C.I.C.
Copyright 2018 New Vector Ltd
Copyright 2016 Aviral Dasgupta
Copyright 2016 OpenMarket Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// Note: we don't import the base64 utils from `matrix-js-sdk/src/matrix` because this file
// is used by Element Web's service worker, and importing `matrix` brings in ~1mb of stuff
// we don't need. Instead, we ignore the import restriction and only bring in what we actually
// need.
// Note: `base64` is not public in the js-sdk, so if it changes/breaks, that's on us. We should
// be okay with our frequent tests, locked versioning, etc though. We'll pick up problems well
// before release.
// eslint-disable-next-line no-restricted-imports



/**
 * Encrypted format of a pickle key, as stored in IndexedDB.
 */

/**
 * Calculates the `additionalData` for the AES-GCM key used by the pickling processes. This
 * additional data is *not* encrypted, but *is* authenticated. The additional data is constructed
 * from the user ID and device ID provided.
 *
 * The later-constructed pickle key is used to decrypt values, such as access tokens, from IndexedDB.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams for more information on
 * `additionalData`.
 *
 * @param {string} userId The user ID who owns the pickle key.
 * @param {string} deviceId The device ID which owns the pickle key.
 * @return {Uint8Array} The additional data as a Uint8Array.
 */
function getPickleAdditionalData(userId, deviceId) {
  const additionalData = new Uint8Array(userId.length + deviceId.length + 1);
  for (let i = 0; i < userId.length; i++) {
    additionalData[i] = userId.charCodeAt(i);
  }
  additionalData[userId.length] = 124; // "|"
  for (let i = 0; i < deviceId.length; i++) {
    additionalData[userId.length + 1 + i] = deviceId.charCodeAt(i);
  }
  return additionalData;
}

/**
 * Encrypt the given pickle key, ready for storage in the database.
 *
 * @param pickleKey - The key to be encrypted.
 * @param userId - The user ID the pickle key belongs to.
 * @param deviceId - The device ID the pickle key belongs to.
 *
 * @returns Data object ready for storing in indexeddb.
 */
async function encryptPickleKey(pickleKey, userId, deviceId) {
  var _crypto;
  if (!((_crypto = crypto) !== null && _crypto !== void 0 && _crypto.subtle)) {
    return undefined;
  }
  const cryptoKey = await crypto.subtle.generateKey({
    name: "AES-GCM",
    length: 256
  }, false, ["encrypt", "decrypt"]);
  const iv = new Uint8Array(32);
  crypto.getRandomValues(iv);
  const additionalData = getPickleAdditionalData(userId, deviceId);
  const encrypted = await crypto.subtle.encrypt({
    name: "AES-GCM",
    iv,
    additionalData
  }, cryptoKey, pickleKey);
  return {
    encrypted,
    iv,
    cryptoKey
  };
}

/**
 * Decrypts the provided data into a pickle key and base64-encodes it ready for use elsewhere.
 *
 * If `data` is undefined in part or in full, returns undefined.
 *
 *  If crypto functions are not available, returns undefined regardless of input.
 *
 * @param data An object containing the encrypted pickle key data: encrypted payload, initialization vector (IV), and crypto key. Typically loaded from indexedDB.
 * @param userId The user ID the pickle key belongs to.
 * @param deviceId The device ID the pickle key belongs to.
 * @returns A promise that resolves to the encoded pickle key, or undefined if the key cannot be built and encoded.
 */
async function buildAndEncodePickleKey(data, userId, deviceId) {
  var _crypto2;
  if (!((_crypto2 = crypto) !== null && _crypto2 !== void 0 && _crypto2.subtle)) {
    return undefined;
  }
  if (!data || !data.encrypted || !data.iv || !data.cryptoKey) {
    return undefined;
  }
  try {
    const additionalData = getPickleAdditionalData(userId, deviceId);
    const pickleKeyBuf = await crypto.subtle.decrypt({
      name: "AES-GCM",
      iv: data.iv,
      additionalData
    }, data.cryptoKey, data.encrypted);
    if (pickleKeyBuf) {
      return encodeUnpaddedBase64(new Uint8Array(pickleKeyBuf));
    }
  } catch {
    logger.error("Error decrypting pickle key");
  }
  return undefined;
}
;// ./src/serviceworker/index.ts
/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




const serverSupportMap = {};
__webpack_require__.g.addEventListener("install", event => {
  // We skipWaiting() to update the service worker more frequently, particularly in development environments.
  // @ts-expect-error - service worker types are not available. See 'fetch' event handler.
  event.waitUntil(skipWaiting());
});
__webpack_require__.g.addEventListener("activate", event => {
  // We force all clients to be under our control, immediately. This could be old tabs.
  // @ts-expect-error - service worker types are not available. See 'fetch' event handler.
  event.waitUntil(clients.claim());
});

// @ts-expect-error - the service worker types conflict with the DOM types available through TypeScript. Many hours
// have been spent trying to convince the type system that there's no actual conflict, but it has yet to work. Instead
// of trying to make it do the thing, we force-cast to something close enough where we can (and ignore errors otherwise).
__webpack_require__.g.addEventListener("fetch", event => {
  // This is the authenticated media (MSC3916) check, proxying what was unauthenticated to the authenticated variants.

  if (event.request.method !== "GET") {
    return; // not important to us
  }

  // Note: ideally we'd keep the request headers etc, but in practice we can't even see those details.
  // See https://stackoverflow.com/a/59152482
  const url = new URL(event.request.url);

  // We only intercept v3 download and thumbnail requests as presumably everything else is deliberate.
  // For example, `/_matrix/media/unstable` or `/_matrix/media/v3/preview_url` are something well within
  // the control of the application, and appear to be choices made at a higher level than us.
  if (!url.pathname.startsWith("/_matrix/media/v3/download") && !url.pathname.startsWith("/_matrix/media/v3/thumbnail")) {
    return; // not a URL we care about
  }

  // We need to call respondWith synchronously, otherwise we may never execute properly. This means
  // later on we need to proxy the request through if it turns out the server doesn't support authentication.
  event.respondWith((async _auth => {
    let auth;
    try {
      // Figure out which homeserver we're communicating with
      const csApi = url.origin;

      // Add jitter to reduce request spam, particularly to `/versions` on initial page load
      await new Promise(resolve => setTimeout(() => resolve(), Math.random() * 10));

      // Locate the access token and homeserver url
      // @ts-expect-error - service worker types are not available. See 'fetch' event handler.
      const client = await __webpack_require__.g.clients.get(event.clientId);
      auth = await getAuthData(client);

      // Is this request actually going to the homeserver?
      const isRequestToHomeServer = url.origin === new URL(auth.homeserver).origin;
      if (!isRequestToHomeServer) {
        throw new Error("Request appears to be for media endpoint but wrong homeserver!");
      }

      // Update or populate the server support map using a (usually) authenticated `/versions` call.
      await tryUpdateServerSupportMap(csApi, auth.accessToken);

      // If we have server support (and a means of authentication), rewrite the URL to use MSC3916 endpoints.
      if (serverSupportMap[csApi].supportsAuthedMedia && auth.accessToken) {
        url.href = url.href.replace(/\/media\/v3\/(.*)\//, "/client/v1/media/$1/");
      } // else by default we make no changes
    } catch (err) {
      // In case of some error, we stay safe by not adding the access-token to the request.
      auth = undefined;
      console.error("SW: Error in request rewrite.", err);
    }

    // Add authentication and send the request. We add authentication even if MSC3916 endpoints aren't
    // being used to ensure patches like this work:
    // https://github.com/matrix-org/synapse/commit/2390b66bf0ec3ff5ffb0c7333f3c9b239eeb92bb
    return fetch(url, fetchConfigForToken((_auth = auth) === null || _auth === void 0 ? void 0 : _auth.accessToken));
  })());
});
async function tryUpdateServerSupportMap(clientApiUrl, accessToken) {
  var _serverSupportMap$cli, _versions$versions;
  // only update if we don't know about it, or if the data is stale
  if (((_serverSupportMap$cli = serverSupportMap[clientApiUrl]) === null || _serverSupportMap$cli === void 0 ? void 0 : _serverSupportMap$cli.cacheExpiryTimeMs) > new Date().getTime()) {
    return; // up to date
  }
  const config = fetchConfigForToken(accessToken);
  const versions = await (await fetch(`${clientApiUrl}/_matrix/client/versions`, config)).json();
  console.log(`[ServiceWorker] /versions response for '${clientApiUrl}': ${JSON.stringify(versions)}`);
  serverSupportMap[clientApiUrl] = {
    supportsAuthedMedia: Boolean(versions === null || versions === void 0 || (_versions$versions = versions.versions) === null || _versions$versions === void 0 ? void 0 : _versions$versions.includes("v1.11")),
    cacheExpiryTimeMs: new Date().getTime() + 2 * 60 * 60 * 1000 // 2 hours from now
  };
  console.log(`[ServiceWorker] serverSupportMap update for '${clientApiUrl}': ${JSON.stringify(serverSupportMap[clientApiUrl])}`);
}

// Ideally we'd use the `Client` interface for `client`, but since it's not available (see 'fetch' listener), we use
// unknown for now and force-cast it to something close enough later.
async function getAuthData(client) {
  // Access tokens are encrypted at rest, so while we can grab the "access token", we'll need to do work to get the
  // real thing.
  const encryptedAccessToken = await idbLoad("account", "mx_access_token");

  // We need to extract a user ID and device ID from localstorage, which means calling WebPlatform for the
  // read operation. Service workers can't access localstorage.
  const {
    userId,
    deviceId,
    homeserver
  } = await askClientForUserIdParams(client);

  // ... and this is why we need the user ID and device ID: they're index keys for the pickle key table.
  const pickleKeyData = await idbLoad("pickleKey", [userId, deviceId]);
  if (pickleKeyData && (!pickleKeyData.encrypted || !pickleKeyData.iv || !pickleKeyData.cryptoKey)) {
    throw new Error("SW: Invalid pickle key loaded - ignoring");
  }

  // Finally, try decrypting the thing and return that. This may fail, but that's okay.
  try {
    const pickleKey = await buildAndEncodePickleKey(pickleKeyData, userId, deviceId);
    const accessToken = await tryDecryptToken(pickleKey, encryptedAccessToken, ACCESS_TOKEN_IV);
    return {
      accessToken,
      homeserver
    };
  } catch (e) {
    throw new Error("SW: Error decrypting access token.", {
      cause: e
    });
  }
}

// Ideally we'd use the `Client` interface for `client`, but since it's not available (see 'fetch' listener), we use
// unknown for now and force-cast it to something close enough inside the function.
async function askClientForUserIdParams(client) {
  return new Promise((resolve, reject) => {
    // Dev note: this uses postMessage, which is a highly insecure channel. postMessage is typically visible to other
    // tabs, windows, browser extensions, etc, making it far from ideal for sharing sensitive information. This is
    // why our service worker calculates/decrypts the access token manually: we don't want the user's access token
    // to be available to (potentially) malicious listeners. We do require some information for that decryption to
    // work though, and request that in the least sensitive way possible.
    //
    // We could also potentially use some version of TLS to encrypt postMessage, though that feels way more involved
    // than just reading IndexedDB ourselves.

    // Avoid stalling the tab in case something goes wrong.
    const timeoutId = setTimeout(() => reject(new Error("timeout in postMessage")), 1000);

    // We don't need particularly good randomness here - we just use this to generate a request ID, so we know
    // which postMessage reply is for our active request.
    const responseKey = Math.random().toString(36);

    // Add the listener first, just in case the tab is *really* fast.
    const listener = event => {
      var _event$data;
      if (((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.responseKey) !== responseKey) return; // not for us
      clearTimeout(timeoutId); // do this as soon as possible, avoiding a race between resolve and reject.
      resolve(event.data); // "unblock" the remainder of the thread, if that were such a thing in JavaScript.
      __webpack_require__.g.removeEventListener("message", listener); // cleanup, since we're not going to do anything else.
    };
    __webpack_require__.g.addEventListener("message", listener);

    // Ask the tab for the information we need. This is handled by WebPlatform.
    client.postMessage({
      responseKey,
      type: "userinfo"
    });
  });
}
function fetchConfigForToken(accessToken) {
  if (!accessToken) {
    return undefined; // no headers/config to specify
  }
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
}
})();

/******/ })()
;
//# sourceMappingURL=sw.js.map