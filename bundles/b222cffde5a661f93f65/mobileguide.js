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
;// ./src/vector/getconfig.ts
/*
Copyright 2018-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

// Load the config file. First try to load up a domain-specific config of the
// form "config.$domain.json" and if that fails, fall back to config.json.
async function getVectorConfig(relativeLocation = "") {
  if (relativeLocation !== "" && !relativeLocation.endsWith("/")) relativeLocation += "/";

  // Handle trailing dot FQDNs
  let domain = window.location.hostname.trimEnd();
  if (domain.endsWith(".")) {
    domain = domain.slice(0, -1);
  }
  const specificConfigPromise = getConfig(`${relativeLocation}config.${domain}.json`);
  const generalConfigPromise = getConfig(relativeLocation + "config.json");
  try {
    const configJson = await specificConfigPromise;
    // 404s succeed with an empty json config, so check that there are keys
    if (!configJson || Object.keys(configJson).length === 0) {
      throw new Error(); // throw to enter the catch
    }
    return configJson;
  } catch {
    return generalConfigPromise;
  }
}
async function getConfig(configJsonFilename) {
  const url = new URL(configJsonFilename, window.location.href);
  url.searchParams.set("cachebuster", Date.now().toString());
  const res = await fetch(url, {
    cache: "no-cache",
    method: "GET"
  });
  if (res.status === 404 || res.status === 0) {
    // Lack of a config isn't an error, we should just use the defaults.
    // Also treat a blank config as no config, assuming the status code is 0, because we don't get 404s from file:
    // URIs so this is the only way we can not fail if the file doesn't exist when loading from a file:// URI.
    return {};
  }
  if (res.ok) {
    return res.json();
  }
}
;// ./src/vector/mobile_guide/mobile-apps.ts
/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/*
 * Shared code that is used by the mobile guide and the mobile.element.io site.
 */

let MobileAppVariant = /*#__PURE__*/function (MobileAppVariant) {
  MobileAppVariant["Classic"] = "element-classic";
  MobileAppVariant["X"] = "element";
  MobileAppVariant["Pro"] = "element-pro";
  return MobileAppVariant;
}({});
const mobileApps = {
  [MobileAppVariant.Classic]: {
    name: "Element",
    appleAppId: "id1083446067",
    appStoreUrl: "https://apps.apple.com/app/element-messenger/id1083446067",
    playStoreUrl: "https://play.google.com/store/apps/details?id=im.vector.app",
    fDroidUrl: "https://f-droid.org/packages/im.vector.app",
    deepLinkPath: "",
    usesLegacyDeepLink: true,
    isProApp: false
  },
  [MobileAppVariant.X]: {
    name: "Element X",
    appleAppId: "id1631335820",
    appStoreUrl: "https://apps.apple.com/app/element-x-secure-chat-call/id1631335820",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.element.android.x",
    fDroidUrl: "https://f-droid.org/packages/io.element.android.x",
    deepLinkPath: "/element",
    usesLegacyDeepLink: false,
    isProApp: false
  },
  [MobileAppVariant.Pro]: {
    name: "Element Pro",
    appleAppId: "id6502951615",
    appStoreUrl: "https://apps.apple.com/app/element-pro-for-work/id6502951615",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.element.enterprise",
    deepLinkPath: "/element-pro",
    usesLegacyDeepLink: false,
    isProApp: true
  }
};
function updateMobilePage(metadata, deepLinkUrl, server) {
  const appleMeta = document.querySelector('meta[name="apple-itunes-app"]');
  appleMeta.setAttribute("content", `app-id=${metadata.appleAppId}`);
  if (server) {
    document.getElementById("header_title").innerText = `Join ${server} on Element`;
  }
  document.getElementById("app_store_link").href = metadata.appStoreUrl;
  document.getElementById("play_store_link").href = metadata.playStoreUrl;
  if (metadata.fDroidUrl) {
    document.getElementById("f_droid_link").href = metadata.fDroidUrl;
  } else {
    document.getElementById("f_droid_section").style.display = "none";
  }
  const step1Heading = document.getElementById("step1_heading");
  step1Heading.innerHTML = step1Heading.innerHTML.replace("Element", metadata.name);

  // Step 2 is only shown on the mobile guide, not on mobile.element.io
  if (document.getElementById("step2_container")) {
    document.getElementById("step2_container").style.display = "block";
    if (metadata.isProApp) {
      document.getElementById("step2_description").innerHTML = "Use your work email to join";
    }
    document.getElementById("deep_link_button").href = deepLinkUrl;
  }
}
;// ./src/vector/mobile_guide/index.ts
/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







function onBackToElementClick() {
  // Cookie should expire in 4 hours
  document.cookie = "element_mobile_redirect_to_guide=false;path=/;max-age=14400";
  window.location.href = "../";
}

// NEVER pass user-controlled content to this function! Hardcoded strings only please.
function renderConfigError(message) {
  const contactMsg = "If this is unexpected, please contact your system administrator " + "or technical support representative.";
  message = `<h2>Error loading Element</h2><p>${message}</p><p>${contactMsg}</p>`;
  const toHide = document.getElementsByClassName("mx_HomePage_container");
  const errorContainers = document.getElementsByClassName("mx_HomePage_errorContainer");
  for (const e of toHide) {
    // We have to clear the content because .style.display='none'; doesn't work
    // due to an !important in the CSS.
    e.innerHTML = "";
  }
  for (const e of errorContainers) {
    e.style.display = "block";
    e.innerHTML = message;
  }
}
async function initPage() {
  var _ref, _mobileApps$appVarian, _wkConfig$mHomeserve;
  const config = await getVectorConfig("..");

  // We manually parse the config similar to how validateServerConfig works because
  // calling that function pulls in roughly 4mb of JS we don't use.

  const wkConfig = config === null || config === void 0 ? void 0 : config["default_server_config"]; // overwritten later under some conditions
  let serverName = config === null || config === void 0 ? void 0 : config["default_server_name"];
  const defaultHsUrl = config === null || config === void 0 ? void 0 : config["default_hs_url"];
  const defaultIsUrl = config === null || config === void 0 ? void 0 : config["default_is_url"];
  const appVariant = (_ref = config === null || config === void 0 ? void 0 : config["mobile_guide_app_variant"]) !== null && _ref !== void 0 ? _ref : MobileAppVariant.X;
  const metadata = (_mobileApps$appVarian = mobileApps[appVariant]) !== null && _mobileApps$appVarian !== void 0 ? _mobileApps$appVarian : mobileApps[MobileAppVariant.X]; // Additional fallback in case mobile_guide_app_variant has an unexpected value.

  const incompatibleOptions = [wkConfig, serverName, defaultHsUrl].filter(i => !!i);
  if (defaultHsUrl && (wkConfig || serverName)) {
    return renderConfigError("Invalid configuration: a default_hs_url can't be specified along with default_server_name " + "or default_server_config");
  }
  if (incompatibleOptions.length < 1) {
    return renderConfigError("Invalid configuration: no default server specified.");
  }
  let hsUrl;
  let isUrl;
  if (!serverName && typeof (wkConfig === null || wkConfig === void 0 || (_wkConfig$mHomeserve = wkConfig["m.homeserver"]) === null || _wkConfig$mHomeserve === void 0 ? void 0 : _wkConfig$mHomeserve["base_url"]) === "string") {
    var _wkConfig$mIdentity_;
    hsUrl = wkConfig["m.homeserver"]["base_url"];
    serverName = wkConfig["m.homeserver"]["server_name"];
    if (typeof ((_wkConfig$mIdentity_ = wkConfig["m.identity_server"]) === null || _wkConfig$mIdentity_ === void 0 ? void 0 : _wkConfig$mIdentity_["base_url"]) === "string") {
      isUrl = wkConfig["m.identity_server"]["base_url"];
    }
  }
  if (serverName) {
    // We also do our own minimal .well-known validation to avoid pulling in the js-sdk
    try {
      const result = await fetch(`https://${serverName}/.well-known/matrix/client`);
      const wkConfig = await result.json();
      if (wkConfig !== null && wkConfig !== void 0 && wkConfig["m.homeserver"]) {
        hsUrl = wkConfig["m.homeserver"]["base_url"];
        if (wkConfig["m.identity_server"]) {
          isUrl = wkConfig["m.identity_server"]["base_url"];
        }
      }
    } catch (e) {
      if (wkConfig !== null && wkConfig !== void 0 && wkConfig["m.homeserver"]) {
        hsUrl = wkConfig["m.homeserver"]["base_url"] || undefined;
        if (wkConfig["m.identity_server"]) {
          isUrl = wkConfig["m.identity_server"]["base_url"] || undefined;
        }
      } else {
        logger.error(e);
        return renderConfigError("Unable to fetch homeserver configuration");
      }
    }
  }
  if (defaultHsUrl) {
    hsUrl = defaultHsUrl;
    isUrl = defaultIsUrl;
  }
  if (!hsUrl) {
    return renderConfigError("Unable to locate homeserver");
  }
  if (hsUrl && !hsUrl.endsWith("/")) hsUrl += "/";
  if (isUrl && !isUrl.endsWith("/")) isUrl += "/";
  let deepLinkUrl = `https://mobile.element.io${metadata.deepLinkPath}`;
  if (metadata.usesLegacyDeepLink) {
    deepLinkUrl += `?hs_url=${encodeURIComponent(hsUrl)}`;
    if (isUrl) {
      deepLinkUrl += `&is_url=${encodeURIComponent(isUrl)}`;
    }
  } else if (serverName) {
    deepLinkUrl += `?account_provider=${serverName}`;
  }

  // Not part of updateMobilePage as the link is only shown on mobile_guide and not on mobile.element.io
  document.getElementById("back_to_element_button").onclick = onBackToElementClick;
  updateMobilePage(metadata, deepLinkUrl, serverName !== null && serverName !== void 0 ? serverName : hsUrl);
}
void initPage();
})();

/******/ })()
;
//# sourceMappingURL=mobileguide.js.map