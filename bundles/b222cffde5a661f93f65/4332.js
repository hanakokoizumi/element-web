"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[4332],{

/***/ "./node_modules/matrix-js-sdk/src/crypto/store/base.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Il: () => (/* binding */ MigrationState),
/* harmony export */   Nv: () => (/* binding */ ACCOUNT_OBJECT_KEY_MIGRATION_STATE),
/* harmony export */   oT: () => (/* binding */ SESSION_BATCH_SIZE)
/* harmony export */ });
/* unused harmony exports TrackingStatus, RoomKeyRequestState, DeviceVerification */
/*
Copyright 2021 The Matrix.org Foundation C.I.C.

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
 * Internal module. Definitions for storage for the crypto module
 */

/**
 * Abstraction of things that can store data required for end-to-end encryption
 */

/** Data on a Megolm session */

/** Extended data on a Megolm session */

/** Data on an Olm session */

/**
 * Represents an outgoing room key request
 */

/**
 * Keys for the `account` object store to store the migration state.
 * Values are defined in `MigrationState`.
 * @internal
 */
const ACCOUNT_OBJECT_KEY_MIGRATION_STATE = "migrationState";

/**
 * A record of which steps have been completed in the libolm to Rust Crypto migration.
 *
 * Used by {@link CryptoStore#getMigrationState} and {@link CryptoStore#setMigrationState}.
 *
 * @internal
 */
let MigrationState = /*#__PURE__*/function (MigrationState) {
  /** No migration steps have yet been completed. */
  MigrationState[MigrationState["NOT_STARTED"] = 0] = "NOT_STARTED";
  /** We have migrated the account data, cross-signing keys, etc. */
  MigrationState[MigrationState["INITIAL_DATA_MIGRATED"] = 1] = "INITIAL_DATA_MIGRATED";
  /** INITIAL_DATA_MIGRATED, and in addition, we have migrated all the Olm sessions. */
  MigrationState[MigrationState["OLM_SESSIONS_MIGRATED"] = 2] = "OLM_SESSIONS_MIGRATED";
  /** OLM_SESSIONS_MIGRATED, and in addition, we have migrated all the Megolm sessions. */
  MigrationState[MigrationState["MEGOLM_SESSIONS_MIGRATED"] = 3] = "MEGOLM_SESSIONS_MIGRATED";
  /** MEGOLM_SESSIONS_MIGRATED, and in addition, we have migrated all the room settings. */
  MigrationState[MigrationState["ROOM_SETTINGS_MIGRATED"] = 4] = "ROOM_SETTINGS_MIGRATED";
  /** ROOM_SETTINGS_MIGRATED, and in addition, we have done the first own keys query in order to
   * load the public part of the keys that have been migrated */
  MigrationState[MigrationState["INITIAL_OWN_KEY_QUERY_DONE"] = 5] = "INITIAL_OWN_KEY_QUERY_DONE";
  return MigrationState;
}({});

/**
 * The size of batches to be returned by {@link CryptoStore#getEndToEndSessionsBatch} and
 * {@link CryptoStore#getEndToEndInboundGroupSessionsBatch}.
 */
const SESSION_BATCH_SIZE = 50;

/* eslint-disable camelcase */

/* eslint-enable camelcase */

let TrackingStatus = /*#__PURE__*/function (TrackingStatus) {
  TrackingStatus[TrackingStatus["NotTracked"] = 0] = "NotTracked";
  TrackingStatus[TrackingStatus["PendingDownload"] = 1] = "PendingDownload";
  TrackingStatus[TrackingStatus["DownloadInProgress"] = 2] = "DownloadInProgress";
  TrackingStatus[TrackingStatus["UpToDate"] = 3] = "UpToDate";
  return TrackingStatus;
}({});

/**
 *  possible states for a room key request
 *
 * The state machine looks like:
 * ```
 *
 *     |         (cancellation sent)
 *     | .-------------------------------------------------.
 *     | |                                                 |
 *     V V       (cancellation requested)                  |
 *   UNSENT  -----------------------------+                |
 *     |                                  |                |
 *     |                                  |                |
 *     | (send successful)                |  CANCELLATION_PENDING_AND_WILL_RESEND
 *     V                                  |                Λ
 *    SENT                                |                |
 *     |--------------------------------  |  --------------'
 *     |                                  |  (cancellation requested with intent
 *     |                                  |   to resend the original request)
 *     |                                  |
 *     | (cancellation requested)         |
 *     V                                  |
 * CANCELLATION_PENDING                   |
 *     |                                  |
 *     | (cancellation sent)              |
 *     V                                  |
 * (deleted)  <---------------------------+
 * ```
 */
let RoomKeyRequestState = /*#__PURE__*/function (RoomKeyRequestState) {
  /** request not yet sent */
  RoomKeyRequestState[RoomKeyRequestState["Unsent"] = 0] = "Unsent";
  /** request sent, awaiting reply */
  RoomKeyRequestState[RoomKeyRequestState["Sent"] = 1] = "Sent";
  /** reply received, cancellation not yet sent */
  RoomKeyRequestState[RoomKeyRequestState["CancellationPending"] = 2] = "CancellationPending";
  /**
   * Cancellation not yet sent and will transition to UNSENT instead of
   * being deleted once the cancellation has been sent.
   */
  RoomKeyRequestState[RoomKeyRequestState["CancellationPendingAndWillResend"] = 3] = "CancellationPendingAndWillResend";
  return RoomKeyRequestState;
}({});

/* eslint-disable camelcase */

/**
 * The parameters of a room key request. The details of the request may
 * vary with the crypto algorithm, but the management and storage layers for
 * outgoing requests expect it to have 'room_id' and 'session_id' properties.
 */

/* eslint-enable camelcase */

/** State of the verification of the device. */
let DeviceVerification = /*#__PURE__*/function (DeviceVerification) {
  DeviceVerification[DeviceVerification["Blocked"] = -1] = "Blocked";
  DeviceVerification[DeviceVerification["Unverified"] = 0] = "Unverified";
  DeviceVerification[DeviceVerification["Verified"] = 1] = "Verified";
  return DeviceVerification;
}({});

/***/ },

/***/ "./node_modules/matrix-js-sdk/src/crypto/store/indexeddb-crypto-store.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ IndexedDBCryptoStore)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/crypto/store/localStorage-crypto-store.ts
var localStorage_crypto_store = __webpack_require__("./node_modules/matrix-js-sdk/src/crypto/store/localStorage-crypto-store.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/crypto/store/memory-crypto-store.ts
var memory_crypto_store = __webpack_require__("./node_modules/matrix-js-sdk/src/crypto/store/memory-crypto-store.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/crypto/store/base.ts
var base = __webpack_require__("./node_modules/matrix-js-sdk/src/crypto/store/base.ts");
;// ./node_modules/matrix-js-sdk/src/crypto/store/indexeddb-crypto-store-backend.ts

/*
Copyright 2017 - 2021 The Matrix.org Foundation C.I.C.

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




const PROFILE_TRANSACTIONS = false;

/**
 * Implementation of a CryptoStore which is backed by an existing
 * IndexedDB connection. Generally you want IndexedDBCryptoStore
 * which connects to the database and defers to one of these.
 *
 * @internal
 */
class Backend {
  /**
   */
  constructor(db) {
    (0,defineProperty/* default */.A)(this, "nextTxnId", 0);
    this.db = db;
    // make sure we close the db on `onversionchange` - otherwise
    // attempts to delete the database will block (and subsequent
    // attempts to re-create it will also block).
    db.onversionchange = () => {
      logger/* logger */.vF.log(`versionchange for indexeddb ${this.db.name}: closing`);
      db.close();
    };
  }
  async containsData() {
    throw Error("Not implemented for Backend");
  }
  async startup() {
    // No work to do, as the startup is done by the caller (e.g IndexedDBCryptoStore)
    // by passing us a ready IDBDatabase instance
    return this;
  }
  async deleteAllData() {
    throw Error("This is not implemented, call IDBFactory::deleteDatabase(dbName) instead.");
  }

  /**
   * Get data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.getMigrationState}.
   */
  async getMigrationState() {
    let migrationState = base/* MigrationState */.Il.NOT_STARTED;
    await this.doTxn("readonly", [IndexedDBCryptoStore.STORE_ACCOUNT], txn => {
      const objectStore = txn.objectStore(IndexedDBCryptoStore.STORE_ACCOUNT);
      const getReq = objectStore.get(base/* ACCOUNT_OBJECT_KEY_MIGRATION_STATE */.Nv);
      getReq.onsuccess = () => {
        var _getReq$result;
        migrationState = (_getReq$result = getReq.result) !== null && _getReq$result !== void 0 ? _getReq$result : base/* MigrationState */.Il.NOT_STARTED;
      };
    });
    return migrationState;
  }

  /**
   * Set data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.setMigrationState}.
   */
  async setMigrationState(migrationState) {
    await this.doTxn("readwrite", [IndexedDBCryptoStore.STORE_ACCOUNT], txn => {
      const objectStore = txn.objectStore(IndexedDBCryptoStore.STORE_ACCOUNT);
      objectStore.put(migrationState, base/* ACCOUNT_OBJECT_KEY_MIGRATION_STATE */.Nv);
    });
  }

  // Olm Account

  getAccount(txn, func) {
    const objectStore = txn.objectStore("account");
    const getReq = objectStore.get("-");
    getReq.onsuccess = function () {
      try {
        func(getReq.result || null);
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  storeAccount(txn, accountPickle) {
    const objectStore = txn.objectStore("account");
    objectStore.put(accountPickle, "-");
  }
  getCrossSigningKeys(txn, func) {
    const objectStore = txn.objectStore("account");
    const getReq = objectStore.get("crossSigningKeys");
    getReq.onsuccess = function () {
      try {
        func(getReq.result || null);
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  getSecretStorePrivateKey(txn, func, type) {
    const objectStore = txn.objectStore("account");
    const getReq = objectStore.get(`ssss_cache:${type}`);
    getReq.onsuccess = function () {
      try {
        func(getReq.result || null);
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  storeSecretStorePrivateKey(txn, type, key) {
    const objectStore = txn.objectStore("account");
    objectStore.put(key, `ssss_cache:${type}`);
  }

  // Olm Sessions

  countEndToEndSessions(txn, func) {
    const objectStore = txn.objectStore("sessions");
    const countReq = objectStore.count();
    countReq.onsuccess = function () {
      try {
        func(countReq.result);
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  getEndToEndSessions(deviceKey, txn, func) {
    const objectStore = txn.objectStore("sessions");
    const idx = objectStore.index("deviceKey");
    const getReq = idx.openCursor(deviceKey);
    const results = {};
    getReq.onsuccess = function () {
      const cursor = getReq.result;
      if (cursor) {
        results[cursor.value.sessionId] = {
          session: cursor.value.session,
          lastReceivedMessageTs: cursor.value.lastReceivedMessageTs
        };
        cursor.continue();
      } else {
        try {
          func(results);
        } catch (e) {
          abortWithException(txn, e);
        }
      }
    };
  }
  getEndToEndSession(deviceKey, sessionId, txn, func) {
    const objectStore = txn.objectStore("sessions");
    const getReq = objectStore.get([deviceKey, sessionId]);
    getReq.onsuccess = function () {
      try {
        if (getReq.result) {
          func({
            session: getReq.result.session,
            lastReceivedMessageTs: getReq.result.lastReceivedMessageTs
          });
        } else {
          func(null);
        }
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  storeEndToEndSession(deviceKey, sessionId, sessionInfo, txn) {
    const objectStore = txn.objectStore("sessions");
    objectStore.put({
      deviceKey,
      sessionId,
      session: sessionInfo.session,
      lastReceivedMessageTs: sessionInfo.lastReceivedMessageTs
    });
  }

  /**
   * Fetch a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndSessionsBatch}.
   */
  async getEndToEndSessionsBatch() {
    const result = [];
    await this.doTxn("readonly", [IndexedDBCryptoStore.STORE_SESSIONS], txn => {
      const objectStore = txn.objectStore(IndexedDBCryptoStore.STORE_SESSIONS);
      const getReq = objectStore.openCursor();
      getReq.onsuccess = function () {
        try {
          const cursor = getReq.result;
          if (cursor) {
            result.push(cursor.value);
            if (result.length < base/* SESSION_BATCH_SIZE */.oT) {
              cursor.continue();
            }
          }
        } catch (e) {
          abortWithException(txn, e);
        }
      };
    });
    if (result.length === 0) {
      // No sessions left.
      return null;
    }
    return result;
  }

  /**
   * Delete a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndSessionsBatch}.
   *
   * @internal
   */
  async deleteEndToEndSessionsBatch(sessions) {
    await this.doTxn("readwrite", [IndexedDBCryptoStore.STORE_SESSIONS], async txn => {
      try {
        const objectStore = txn.objectStore(IndexedDBCryptoStore.STORE_SESSIONS);
        for (const {
          deviceKey,
          sessionId
        } of sessions) {
          const req = objectStore.delete([deviceKey, sessionId]);
          await new Promise(resolve => {
            req.onsuccess = resolve;
          });
        }
      } catch (e) {
        abortWithException(txn, e);
      }
    });
  }

  // Inbound group sessions

  getEndToEndInboundGroupSession(senderCurve25519Key, sessionId, txn, func) {
    let session = false;
    let withheld = false;
    const objectStore = txn.objectStore("inbound_group_sessions");
    const getReq = objectStore.get([senderCurve25519Key, sessionId]);
    getReq.onsuccess = function () {
      try {
        if (getReq.result) {
          session = getReq.result.session;
        } else {
          session = null;
        }
        if (withheld !== false) {
          func(session, withheld);
        }
      } catch (e) {
        abortWithException(txn, e);
      }
    };
    const withheldObjectStore = txn.objectStore("inbound_group_sessions_withheld");
    const withheldGetReq = withheldObjectStore.get([senderCurve25519Key, sessionId]);
    withheldGetReq.onsuccess = function () {
      try {
        if (withheldGetReq.result) {
          withheld = withheldGetReq.result.session;
        } else {
          withheld = null;
        }
        if (session !== false) {
          func(session, withheld);
        }
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  storeEndToEndInboundGroupSession(senderCurve25519Key, sessionId, sessionData, txn) {
    const objectStore = txn.objectStore("inbound_group_sessions");
    objectStore.put({
      senderCurve25519Key,
      sessionId,
      session: sessionData
    });
  }

  /**
   * Count the number of Megolm sessions in the database.
   *
   * Implementation of {@link CryptoStore.countEndToEndInboundGroupSessions}.
   *
   * @internal
   */
  async countEndToEndInboundGroupSessions() {
    let result = 0;
    await this.doTxn("readonly", [IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS], txn => {
      const sessionStore = txn.objectStore(IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS);
      const countReq = sessionStore.count();
      countReq.onsuccess = () => {
        result = countReq.result;
      };
    });
    return result;
  }

  /**
   * Fetch a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndInboundGroupSessionsBatch}.
   */
  async getEndToEndInboundGroupSessionsBatch() {
    const result = [];
    await this.doTxn("readonly", [IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS, IndexedDBCryptoStore.STORE_BACKUP], txn => {
      const sessionStore = txn.objectStore(IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS);
      const backupStore = txn.objectStore(IndexedDBCryptoStore.STORE_BACKUP);
      const getReq = sessionStore.openCursor();
      getReq.onsuccess = function () {
        try {
          const cursor = getReq.result;
          if (cursor) {
            const backupGetReq = backupStore.get(cursor.key);
            backupGetReq.onsuccess = () => {
              result.push({
                senderKey: cursor.value.senderCurve25519Key,
                sessionId: cursor.value.sessionId,
                sessionData: cursor.value.session,
                needsBackup: backupGetReq.result !== undefined
              });
              if (result.length < base/* SESSION_BATCH_SIZE */.oT) {
                cursor.continue();
              }
            };
          }
        } catch (e) {
          abortWithException(txn, e);
        }
      };
    });
    if (result.length === 0) {
      // No sessions left.
      return null;
    }
    return result;
  }

  /**
   * Delete a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  async deleteEndToEndInboundGroupSessionsBatch(sessions) {
    await this.doTxn("readwrite", [IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS], async txn => {
      try {
        const objectStore = txn.objectStore(IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS);
        for (const {
          senderKey,
          sessionId
        } of sessions) {
          const req = objectStore.delete([senderKey, sessionId]);
          await new Promise(resolve => {
            req.onsuccess = resolve;
          });
        }
      } catch (e) {
        abortWithException(txn, e);
      }
    });
  }
  getEndToEndDeviceData(txn, func) {
    const objectStore = txn.objectStore("device_data");
    const getReq = objectStore.get("-");
    getReq.onsuccess = function () {
      try {
        func(getReq.result || null);
      } catch (e) {
        abortWithException(txn, e);
      }
    };
  }
  getEndToEndRooms(txn, func) {
    const rooms = {};
    const objectStore = txn.objectStore("rooms");
    const getReq = objectStore.openCursor();
    getReq.onsuccess = function () {
      const cursor = getReq.result;
      if (cursor) {
        rooms[cursor.key] = cursor.value;
        cursor.continue();
      } else {
        try {
          func(rooms);
        } catch (e) {
          abortWithException(txn, e);
        }
      }
    };
  }
  async markSessionsNeedingBackup(sessions, txn) {
    if (!txn) {
      txn = this.db.transaction("sessions_needing_backup", "readwrite");
    }
    const objectStore = txn.objectStore("sessions_needing_backup");
    await Promise.all(sessions.map(session => {
      return new Promise((resolve, reject) => {
        const req = objectStore.put({
          senderCurve25519Key: session.senderKey,
          sessionId: session.sessionId
        });
        req.onsuccess = resolve;
        req.onerror = reject;
      });
    }));
  }
  doTxn(mode, stores, func, log = logger/* logger */.vF) {
    let startTime;
    let description;
    if (PROFILE_TRANSACTIONS) {
      const txnId = this.nextTxnId++;
      startTime = Date.now();
      description = `${mode} crypto store transaction ${txnId} in ${stores}`;
      log.debug(`Starting ${description}`);
    }
    const txn = this.db.transaction(stores, mode);
    const promise = promiseifyTxn(txn);
    const result = func(txn);
    if (PROFILE_TRANSACTIONS) {
      promise.then(() => {
        const elapsedTime = Date.now() - startTime;
        log.debug(`Finished ${description}, took ${elapsedTime} ms`);
      }, () => {
        const elapsedTime = Date.now() - startTime;
        log.error(`Failed ${description}, took ${elapsedTime} ms`);
      });
    }
    return promise.then(() => {
      return result;
    });
  }
}
const DB_MIGRATIONS = [db => {
  createDatabase(db);
}, db => {
  db.createObjectStore("account");
}, db => {
  const sessionsStore = db.createObjectStore("sessions", {
    keyPath: ["deviceKey", "sessionId"]
  });
  sessionsStore.createIndex("deviceKey", "deviceKey");
}, db => {
  db.createObjectStore("inbound_group_sessions", {
    keyPath: ["senderCurve25519Key", "sessionId"]
  });
}, db => {
  db.createObjectStore("device_data");
}, db => {
  db.createObjectStore("rooms");
}, db => {
  db.createObjectStore("sessions_needing_backup", {
    keyPath: ["senderCurve25519Key", "sessionId"]
  });
}, db => {
  db.createObjectStore("inbound_group_sessions_withheld", {
    keyPath: ["senderCurve25519Key", "sessionId"]
  });
}, db => {
  const problemsStore = db.createObjectStore("session_problems", {
    keyPath: ["deviceKey", "time"]
  });
  problemsStore.createIndex("deviceKey", "deviceKey");
  db.createObjectStore("notified_error_devices", {
    keyPath: ["userId", "deviceId"]
  });
}, db => {
  db.createObjectStore("shared_history_inbound_group_sessions", {
    keyPath: ["roomId"]
  });
}, db => {
  db.createObjectStore("parked_shared_history", {
    keyPath: ["roomId"]
  });
}
// Expand as needed.
];
const VERSION = DB_MIGRATIONS.length;
function upgradeDatabase(db, oldVersion) {
  logger/* logger */.vF.log(`Upgrading IndexedDBCryptoStore from version ${oldVersion}` + ` to ${VERSION}`);
  DB_MIGRATIONS.forEach((migration, index) => {
    if (oldVersion <= index) migration(db);
  });
}
function createDatabase(db) {
  const outgoingRoomKeyRequestsStore = db.createObjectStore("outgoingRoomKeyRequests", {
    keyPath: "requestId"
  });

  // we assume that the RoomKeyRequestBody will have room_id and session_id
  // properties, to make the index efficient.
  outgoingRoomKeyRequestsStore.createIndex("session", ["requestBody.room_id", "requestBody.session_id"]);
  outgoingRoomKeyRequestsStore.createIndex("state", "state");
}
/*
 * Aborts a transaction with a given exception
 * The transaction promise will be rejected with this exception.
 */
function abortWithException(txn, e) {
  // We cheekily stick our exception onto the transaction object here
  // We could alternatively make the thing we pass back to the app
  // an object containing the transaction and exception.
  txn._mx_abortexception = e;
  try {
    txn.abort();
  } catch {
    // sometimes we won't be able to abort the transaction
    // (ie. if it's aborted or completed)
  }
}
function promiseifyTxn(txn) {
  return new Promise((resolve, reject) => {
    txn.oncomplete = () => {
      if (txn._mx_abortexception !== undefined) {
        reject(txn._mx_abortexception);
      }
      resolve(null);
    };
    txn.onerror = event => {
      if (txn._mx_abortexception !== undefined) {
        reject(txn._mx_abortexception);
      } else {
        logger/* logger */.vF.log("Error performing indexeddb txn", event);
        reject(txn.error);
      }
    };
    txn.onabort = event => {
      if (txn._mx_abortexception !== undefined) {
        reject(txn._mx_abortexception);
      } else {
        logger/* logger */.vF.log("Error performing indexeddb txn", event);
        reject(txn.error);
      }
    };
  });
}
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/errors.ts
var errors = __webpack_require__("./node_modules/matrix-js-sdk/src/errors.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/indexeddb-helpers.ts
var indexeddb_helpers = __webpack_require__("./node_modules/matrix-js-sdk/src/indexeddb-helpers.ts");
;// ./node_modules/matrix-js-sdk/src/crypto/store/indexeddb-crypto-store.ts

/*
Copyright 2017 - 2021 The Matrix.org Foundation C.I.C.

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








/*
 * Internal module. indexeddb storage for e2e.
 */

/**
 * An implementation of CryptoStore, which is normally backed by an indexeddb,
 * but with fallback to MemoryCryptoStore.
 */
class IndexedDBCryptoStore {
  static exists(indexedDB, dbName) {
    return indexeddb_helpers/* exists */.t(indexedDB, dbName);
  }

  /**
   * Utility to check if a legacy crypto store exists and has not been migrated.
   * Returns true if the store exists and has not been migrated, false otherwise.
   */
  static existsAndIsNotMigrated(indexedDb, dbName) {
    return new Promise((resolve, reject) => {
      let exists = true;
      const openDBRequest = indexedDb.open(dbName);
      openDBRequest.onupgradeneeded = () => {
        // Since we did not provide an explicit version when opening, this event
        // should only fire if the DB did not exist before at any version.
        exists = false;
      };
      openDBRequest.onblocked = () => reject(openDBRequest.error);
      openDBRequest.onsuccess = () => {
        const db = openDBRequest.result;
        if (!exists) {
          db.close();
          // The DB did not exist before, but has been created as part of this
          // existence check. Delete it now to restore previous state. Delete can
          // actually take a while to complete in some browsers, so don't wait for
          // it. This won't block future open calls that a store might issue next to
          // properly set up the DB.
          indexedDb.deleteDatabase(dbName);
          resolve(false);
        } else {
          const tx = db.transaction([IndexedDBCryptoStore.STORE_ACCOUNT], "readonly");
          const objectStore = tx.objectStore(IndexedDBCryptoStore.STORE_ACCOUNT);
          const getReq = objectStore.get(base/* ACCOUNT_OBJECT_KEY_MIGRATION_STATE */.Nv);
          getReq.onsuccess = () => {
            var _getReq$result;
            const migrationState = (_getReq$result = getReq.result) !== null && _getReq$result !== void 0 ? _getReq$result : base/* MigrationState */.Il.NOT_STARTED;
            resolve(migrationState === base/* MigrationState */.Il.NOT_STARTED);
          };
          getReq.onerror = () => {
            reject(getReq.error);
          };
          db.close();
        }
      };
      openDBRequest.onerror = () => reject(openDBRequest.error);
    });
  }
  /**
   * Create a new IndexedDBCryptoStore
   *
   * @param indexedDB -  global indexedDB instance
   * @param dbName -   name of db to connect to
   */
  constructor(indexedDB, dbName) {
    (0,defineProperty/* default */.A)(this, "backendPromise", void 0);
    (0,defineProperty/* default */.A)(this, "backend", void 0);
    this.indexedDB = indexedDB;
    this.dbName = dbName;
  }

  /**
   * Returns true if this CryptoStore has ever been initialised (ie, it might contain data).
   *
   * Implementation of {@link CryptoStore.containsData}.
   *
   * @internal
   */
  async containsData() {
    return IndexedDBCryptoStore.exists(this.indexedDB, this.dbName);
  }

  /**
   * Ensure the database exists and is up-to-date, or fall back to
   * a local storage or in-memory store.
   *
   * This must be called before the store can be used.
   *
   * @returns resolves to either an IndexedDBCryptoStoreBackend.Backend,
   * or a MemoryCryptoStore
   */
  startup() {
    if (this.backendPromise) {
      return this.backendPromise;
    }
    this.backendPromise = new Promise((resolve, reject) => {
      if (!this.indexedDB) {
        reject(new Error("no indexeddb support available"));
        return;
      }
      logger/* logger */.vF.log(`connecting to indexeddb ${this.dbName}`);
      const req = this.indexedDB.open(this.dbName, VERSION);
      req.onupgradeneeded = ev => {
        const db = req.result;
        const oldVersion = ev.oldVersion;
        upgradeDatabase(db, oldVersion);
      };
      req.onblocked = () => {
        logger/* logger */.vF.log(`can't yet open IndexedDBCryptoStore because it is open elsewhere`);
      };
      req.onerror = ev => {
        logger/* logger */.vF.log("Error connecting to indexeddb", ev);
        reject(req.error);
      };
      req.onsuccess = () => {
        const db = req.result;
        logger/* logger */.vF.log(`connected to indexeddb ${this.dbName}`);
        resolve(new Backend(db));
      };
    }).then(backend => {
      // Edge has IndexedDB but doesn't support compund keys which we use fairly extensively.
      // Try a dummy query which will fail if the browser doesn't support compund keys, so
      // we can fall back to a different backend.
      return backend.doTxn("readonly", [IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS, IndexedDBCryptoStore.STORE_INBOUND_GROUP_SESSIONS_WITHHELD], txn => {
        backend.getEndToEndInboundGroupSession("", "", txn, () => {});
      }).then(() => backend);
    }).catch(e => {
      if (e.name === "VersionError") {
        logger/* logger */.vF.warn("Crypto DB is too new for us to use!", e);
        // don't fall back to a different store: the user has crypto data
        // in this db so we should use it or nothing at all.
        throw new errors/* InvalidCryptoStoreError */.E5(errors/* InvalidCryptoStoreState */.hP.TooNew);
      }
      logger/* logger */.vF.warn(`unable to connect to indexeddb ${this.dbName}` + `: falling back to localStorage store: ${e}`);
      try {
        if (!(globalThis.localStorage instanceof Storage)) {
          throw new Error("localStorage is not available");
        }
        return new localStorage_crypto_store/* LocalStorageCryptoStore */.F(globalThis.localStorage);
      } catch (e) {
        logger/* logger */.vF.warn(`Unable to open localStorage: falling back to in-memory store: ${e}`);
        return new memory_crypto_store/* MemoryCryptoStore */._();
      }
    }).then(backend => {
      this.backend = backend;
      return backend;
    });
    return this.backendPromise;
  }

  /**
   * Delete all data from this store.
   *
   * @returns resolves when the store has been cleared.
   */
  deleteAllData() {
    return new Promise((resolve, reject) => {
      if (!this.indexedDB) {
        reject(new Error("no indexeddb support available"));
        return;
      }
      logger/* logger */.vF.log(`Removing indexeddb instance: ${this.dbName}`);
      const req = this.indexedDB.deleteDatabase(this.dbName);
      req.onblocked = () => {
        logger/* logger */.vF.log(`can't yet delete IndexedDBCryptoStore because it is open elsewhere`);
      };
      req.onerror = ev => {
        logger/* logger */.vF.log("Error deleting data from indexeddb", ev);
        reject(req.error);
      };
      req.onsuccess = () => {
        logger/* logger */.vF.log(`Removed indexeddb instance: ${this.dbName}`);
        resolve();
      };
    }).catch(e => {
      // in firefox, with indexedDB disabled, this fails with a
      // DOMError. We treat this as non-fatal, so that people can
      // still use the app.
      logger/* logger */.vF.warn(`unable to delete IndexedDBCryptoStore: ${e}`);
    });
  }

  /**
   * Get data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.getMigrationState}.
   *
   * @internal
   */
  getMigrationState() {
    return this.backend.getMigrationState();
  }

  /**
   * Set data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.setMigrationState}.
   *
   * @internal
   */
  setMigrationState(migrationState) {
    return this.backend.setMigrationState(migrationState);
  }

  // Olm Account

  /*
   * Get the account pickle from the store.
   * This requires an active transaction. See doTxn().
   *
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with the account pickle
   */
  getAccount(txn, func) {
    this.backend.getAccount(txn, func);
  }

  /**
   * Write the account pickle to the store.
   * This requires an active transaction. See doTxn().
   *
   * @param txn - An active transaction. See doTxn().
   * @param accountPickle - The new account pickle to store.
   */
  storeAccount(txn, accountPickle) {
    this.backend.storeAccount(txn, accountPickle);
  }

  /**
   * Get the public part of the cross-signing keys (eg. self-signing key,
   * user signing key).
   *
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with the account keys object:
   *        `{ key_type: base64 encoded seed }` where key type = user_signing_key_seed or self_signing_key_seed
   */
  getCrossSigningKeys(txn, func) {
    this.backend.getCrossSigningKeys(txn, func);
  }

  /**
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with the private key
   * @param type - A key type
   */
  getSecretStorePrivateKey(txn, func, type) {
    this.backend.getSecretStorePrivateKey(txn, func, type);
  }

  /**
   * Write the cross-signing private keys back to the store
   *
   * @param txn - An active transaction. See doTxn().
   * @param type - The type of cross-signing private key to store
   * @param key - keys object as getCrossSigningKeys()
   */
  storeSecretStorePrivateKey(txn, type, key) {
    this.backend.storeSecretStorePrivateKey(txn, type, key);
  }

  // Olm sessions

  /**
   * Returns the number of end-to-end sessions in the store
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with the count of sessions
   */
  countEndToEndSessions(txn, func) {
    this.backend.countEndToEndSessions(txn, func);
  }

  /**
   * Retrieve a specific end-to-end session between the logged-in user
   * and another device.
   * @param deviceKey - The public key of the other device.
   * @param sessionId - The ID of the session to retrieve
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with A map from sessionId
   *     to session information object with 'session' key being the
   *     Base64 end-to-end session and lastReceivedMessageTs being the
   *     timestamp in milliseconds at which the session last received
   *     a message.
   */
  getEndToEndSession(deviceKey, sessionId, txn, func) {
    this.backend.getEndToEndSession(deviceKey, sessionId, txn, func);
  }

  /**
   * Retrieve the end-to-end sessions between the logged-in user and another
   * device.
   * @param deviceKey - The public key of the other device.
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with A map from sessionId
   *     to session information object with 'session' key being the
   *     Base64 end-to-end session and lastReceivedMessageTs being the
   *     timestamp in milliseconds at which the session last received
   *     a message.
   */
  getEndToEndSessions(deviceKey, txn, func) {
    this.backend.getEndToEndSessions(deviceKey, txn, func);
  }

  /**
   * Store a session between the logged-in user and another device
   * @param deviceKey - The public key of the other device.
   * @param sessionId - The ID for this end-to-end session.
   * @param sessionInfo - Session information object
   * @param txn - An active transaction. See doTxn().
   */
  storeEndToEndSession(deviceKey, sessionId, sessionInfo, txn) {
    this.backend.storeEndToEndSession(deviceKey, sessionId, sessionInfo, txn);
  }

  /**
   * Count the number of Megolm sessions in the database.
   *
   * Implementation of {@link CryptoStore.countEndToEndInboundGroupSessions}.
   *
   * @internal
   */
  countEndToEndInboundGroupSessions() {
    return this.backend.countEndToEndInboundGroupSessions();
  }

  /**
   * Fetch a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndSessionsBatch}.
   *
   * @internal
   */
  getEndToEndSessionsBatch() {
    return this.backend.getEndToEndSessionsBatch();
  }

  /**
   * Delete a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndSessionsBatch}.
   *
   * @internal
   */
  deleteEndToEndSessionsBatch(sessions) {
    return this.backend.deleteEndToEndSessionsBatch(sessions);
  }

  // Inbound group sessions

  /**
   * Retrieve the end-to-end inbound group session for a given
   * server key and session ID
   * @param senderCurve25519Key - The sender's curve 25519 key
   * @param sessionId - The ID of the session
   * @param txn - An active transaction. See doTxn().
   * @param func - Called with A map from sessionId
   *     to Base64 end-to-end session.
   */
  getEndToEndInboundGroupSession(senderCurve25519Key, sessionId, txn, func) {
    this.backend.getEndToEndInboundGroupSession(senderCurve25519Key, sessionId, txn, func);
  }

  /**
   * Writes an end-to-end inbound group session to the store.
   * If there already exists an inbound group session with the same
   * senderCurve25519Key and sessionID, it will be overwritten.
   * @param senderCurve25519Key - The sender's curve 25519 key
   * @param sessionId - The ID of the session
   * @param sessionData - The session data structure
   * @param txn - An active transaction. See doTxn().
   */
  storeEndToEndInboundGroupSession(senderCurve25519Key, sessionId, sessionData, txn) {
    this.backend.storeEndToEndInboundGroupSession(senderCurve25519Key, sessionId, sessionData, txn);
  }

  /**
   * Fetch a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  getEndToEndInboundGroupSessionsBatch() {
    return this.backend.getEndToEndInboundGroupSessionsBatch();
  }

  /**
   * Delete a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  deleteEndToEndInboundGroupSessionsBatch(sessions) {
    return this.backend.deleteEndToEndInboundGroupSessionsBatch(sessions);
  }

  /**
   * Get an object of `roomId->roomInfo` for all e2e rooms in the store
   * @param txn - An active transaction. See doTxn().
   * @param func - Function called with the end-to-end encrypted rooms
   */
  getEndToEndRooms(txn, func) {
    this.backend.getEndToEndRooms(txn, func);
  }

  /**
   * Mark sessions as needing to be backed up.
   * @param sessions - The sessions that need to be backed up.
   * @param txn - An active transaction. See doTxn(). (optional)
   * @returns resolves when the sessions are marked
   */
  markSessionsNeedingBackup(sessions, txn) {
    return this.backend.markSessionsNeedingBackup(sessions, txn);
  }

  /**
   * Perform a transaction on the crypto store. Any store methods
   * that require a transaction (txn) object to be passed in may
   * only be called within a callback of either this function or
   * one of the store functions operating on the same transaction.
   *
   * @param mode - 'readwrite' if you need to call setter
   *     functions with this transaction. Otherwise, 'readonly'.
   * @param stores - List IndexedDBCryptoStore.STORE_*
   *     options representing all types of object that will be
   *     accessed or written to with this transaction.
   * @param func - Function called with the
   *     transaction object: an opaque object that should be passed
   *     to store functions.
   * @param log - A possibly customised log
   * @returns Promise that resolves with the result of the `func`
   *     when the transaction is complete. If the backend is
   *     async (ie. the indexeddb backend) any of the callback
   *     functions throwing an exception will cause this promise to
   *     reject with that exception. On synchronous backends, the
   *     exception will propagate to the caller of the getFoo method.
   */
  doTxn(mode, stores, func, log) {
    return this.backend.doTxn(mode, stores, func, log);
  }
}
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_ACCOUNT", "account");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_SESSIONS", "sessions");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_INBOUND_GROUP_SESSIONS", "inbound_group_sessions");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_INBOUND_GROUP_SESSIONS_WITHHELD", "inbound_group_sessions_withheld");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_SHARED_HISTORY_INBOUND_GROUP_SESSIONS", "shared_history_inbound_group_sessions");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_PARKED_SHARED_HISTORY", "parked_shared_history");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_DEVICE_DATA", "device_data");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_ROOMS", "rooms");
(0,defineProperty/* default */.A)(IndexedDBCryptoStore, "STORE_BACKUP", "sessions_needing_backup");

/***/ },

/***/ "./node_modules/matrix-js-sdk/src/crypto/store/localStorage-crypto-store.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ LocalStorageCryptoStore)
/* harmony export */ });
/* harmony import */ var _logger_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _memory_crypto_store_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/matrix-js-sdk/src/crypto/store/memory-crypto-store.ts");
/* harmony import */ var _base_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/matrix-js-sdk/src/crypto/store/base.ts");
/*
Copyright 2017 - 2021 The Matrix.org Foundation C.I.C.

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
 * Internal module. Partial localStorage backed storage for e2e.
 * This is not a full crypto store, just the in-memory store with
 * some things backed by localStorage. It exists because indexedDB
 * is broken in Firefox private mode or set to, "will not remember
 * history".
 */

const E2E_PREFIX = "crypto.";
const KEY_END_TO_END_MIGRATION_STATE = E2E_PREFIX + "migration";
const KEY_END_TO_END_ACCOUNT = E2E_PREFIX + "account";
const KEY_CROSS_SIGNING_KEYS = E2E_PREFIX + "cross_signing_keys";
const KEY_INBOUND_SESSION_PREFIX = E2E_PREFIX + "inboundgroupsessions/";
const KEY_INBOUND_SESSION_WITHHELD_PREFIX = E2E_PREFIX + "inboundgroupsessions.withheld/";
const KEY_ROOMS_PREFIX = E2E_PREFIX + "rooms/";
const KEY_SESSIONS_NEEDING_BACKUP = E2E_PREFIX + "sessionsneedingbackup";
function keyEndToEndSessions(deviceKey) {
  return E2E_PREFIX + "sessions/" + deviceKey;
}
function keyEndToEndInboundGroupSession(senderKey, sessionId) {
  return KEY_INBOUND_SESSION_PREFIX + senderKey + "/" + sessionId;
}
function keyEndToEndInboundGroupSessionWithheld(senderKey, sessionId) {
  return KEY_INBOUND_SESSION_WITHHELD_PREFIX + senderKey + "/" + sessionId;
}
function keyEndToEndRoomsPrefix(roomId) {
  return KEY_ROOMS_PREFIX + roomId;
}
class LocalStorageCryptoStore extends _memory_crypto_store_ts__WEBPACK_IMPORTED_MODULE_1__/* .MemoryCryptoStore */ ._ {
  static exists(store) {
    const length = store.length;
    for (let i = 0; i < length; i++) {
      var _store$key;
      if ((_store$key = store.key(i)) !== null && _store$key !== void 0 && _store$key.startsWith(E2E_PREFIX)) {
        return true;
      }
    }
    return false;
  }
  constructor(store) {
    super();
    this.store = store;
  }

  /**
   * Returns true if this CryptoStore has ever been initialised (ie, it might contain data).
   *
   * Implementation of {@link CryptoStore.containsData}.
   *
   * @internal
   */
  async containsData() {
    return LocalStorageCryptoStore.exists(this.store);
  }

  /**
   * Get data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.getMigrationState}.
   *
   * @internal
   */
  async getMigrationState() {
    var _getJsonItem;
    return (_getJsonItem = getJsonItem(this.store, KEY_END_TO_END_MIGRATION_STATE)) !== null && _getJsonItem !== void 0 ? _getJsonItem : _base_ts__WEBPACK_IMPORTED_MODULE_2__/* .MigrationState */ .Il.NOT_STARTED;
  }

  /**
   * Set data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.setMigrationState}.
   *
   * @internal
   */
  async setMigrationState(migrationState) {
    setJsonItem(this.store, KEY_END_TO_END_MIGRATION_STATE, migrationState);
  }

  // Olm Sessions

  countEndToEndSessions(txn, func) {
    let count = 0;
    for (let i = 0; i < this.store.length; ++i) {
      const key = this.store.key(i);
      if (key !== null && key !== void 0 && key.startsWith(keyEndToEndSessions(""))) {
        const sessions = getJsonItem(this.store, key);
        count += Object.keys(sessions !== null && sessions !== void 0 ? sessions : {}).length;
      }
    }
    func(count);
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  _getEndToEndSessions(deviceKey) {
    const sessions = getJsonItem(this.store, keyEndToEndSessions(deviceKey));
    const fixedSessions = {};

    // fix up any old sessions to be objects rather than just the base64 pickle
    for (const [sid, val] of Object.entries(sessions || {})) {
      if (typeof val === "string") {
        fixedSessions[sid] = {
          session: val
        };
      } else {
        fixedSessions[sid] = val;
      }
    }
    return fixedSessions;
  }
  getEndToEndSession(deviceKey, sessionId, txn, func) {
    var _sessions$sessionId;
    const sessions = this._getEndToEndSessions(deviceKey);
    func((_sessions$sessionId = sessions[sessionId]) !== null && _sessions$sessionId !== void 0 ? _sessions$sessionId : {});
  }
  getEndToEndSessions(deviceKey, txn, func) {
    var _this$_getEndToEndSes;
    func((_this$_getEndToEndSes = this._getEndToEndSessions(deviceKey)) !== null && _this$_getEndToEndSes !== void 0 ? _this$_getEndToEndSes : {});
  }
  storeEndToEndSession(deviceKey, sessionId, sessionInfo, txn) {
    const sessions = this._getEndToEndSessions(deviceKey) || {};
    sessions[sessionId] = sessionInfo;
    setJsonItem(this.store, keyEndToEndSessions(deviceKey), sessions);
  }

  /**
   * Fetch a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndSessionsBatch}.
   *
   * @internal
   */
  async getEndToEndSessionsBatch() {
    const result = [];
    for (let i = 0; i < this.store.length; ++i) {
      var _this$store$key;
      if ((_this$store$key = this.store.key(i)) !== null && _this$store$key !== void 0 && _this$store$key.startsWith(keyEndToEndSessions(""))) {
        const deviceKey = this.store.key(i).split("/")[1];
        for (const session of Object.values(this._getEndToEndSessions(deviceKey))) {
          result.push(session);
          if (result.length >= _base_ts__WEBPACK_IMPORTED_MODULE_2__/* .SESSION_BATCH_SIZE */ .oT) {
            return result;
          }
        }
      }
    }
    if (result.length === 0) {
      // No sessions left.
      return null;
    }

    // There are fewer sessions than the batch size; return the final batch of sessions.
    return result;
  }

  /**
   * Delete a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndSessionsBatch}.
   *
   * @internal
   */
  async deleteEndToEndSessionsBatch(sessions) {
    for (const {
      deviceKey,
      sessionId
    } of sessions) {
      const deviceSessions = this._getEndToEndSessions(deviceKey) || {};
      delete deviceSessions[sessionId];
      if (Object.keys(deviceSessions).length === 0) {
        // No more sessions for this device.
        this.store.removeItem(keyEndToEndSessions(deviceKey));
      } else {
        setJsonItem(this.store, keyEndToEndSessions(deviceKey), deviceSessions);
      }
    }
  }

  // Inbound Group Sessions

  getEndToEndInboundGroupSession(senderCurve25519Key, sessionId, txn, func) {
    func(getJsonItem(this.store, keyEndToEndInboundGroupSession(senderCurve25519Key, sessionId)), getJsonItem(this.store, keyEndToEndInboundGroupSessionWithheld(senderCurve25519Key, sessionId)));
  }
  storeEndToEndInboundGroupSession(senderCurve25519Key, sessionId, sessionData, txn) {
    setJsonItem(this.store, keyEndToEndInboundGroupSession(senderCurve25519Key, sessionId), sessionData);
  }

  /**
   * Count the number of Megolm sessions in the database.
   *
   * Implementation of {@link CryptoStore.countEndToEndInboundGroupSessions}.
   *
   * @internal
   */
  async countEndToEndInboundGroupSessions() {
    let count = 0;
    for (let i = 0; i < this.store.length; ++i) {
      const key = this.store.key(i);
      if (key !== null && key !== void 0 && key.startsWith(KEY_INBOUND_SESSION_PREFIX)) {
        count += 1;
      }
    }
    return count;
  }

  /**
   * Fetch a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  async getEndToEndInboundGroupSessionsBatch() {
    const sessionsNeedingBackup = getJsonItem(this.store, KEY_SESSIONS_NEEDING_BACKUP) || {};
    const result = [];
    for (let i = 0; i < this.store.length; ++i) {
      const key = this.store.key(i);
      if (key !== null && key !== void 0 && key.startsWith(KEY_INBOUND_SESSION_PREFIX)) {
        const key2 = key.slice(KEY_INBOUND_SESSION_PREFIX.length);

        // we can't use split, as the components we are trying to split out
        // might themselves contain '/' characters. We rely on the
        // senderKey being a (32-byte) curve25519 key, base64-encoded
        // (hence 43 characters long).

        result.push({
          senderKey: key2.slice(0, 43),
          sessionId: key2.slice(44),
          sessionData: getJsonItem(this.store, key),
          needsBackup: key2 in sessionsNeedingBackup
        });
        if (result.length >= _base_ts__WEBPACK_IMPORTED_MODULE_2__/* .SESSION_BATCH_SIZE */ .oT) {
          return result;
        }
      }
    }
    if (result.length === 0) {
      // No sessions left.
      return null;
    }

    // There are fewer sessions than the batch size; return the final batch of sessions.
    return result;
  }

  /**
   * Delete a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  async deleteEndToEndInboundGroupSessionsBatch(sessions) {
    for (const {
      senderKey,
      sessionId
    } of sessions) {
      const k = keyEndToEndInboundGroupSession(senderKey, sessionId);
      this.store.removeItem(k);
    }
  }
  getEndToEndRooms(txn, func) {
    const result = {};
    const prefix = keyEndToEndRoomsPrefix("");
    for (let i = 0; i < this.store.length; ++i) {
      const key = this.store.key(i);
      if (key !== null && key !== void 0 && key.startsWith(prefix)) {
        const roomId = key.slice(prefix.length);
        result[roomId] = getJsonItem(this.store, key);
      }
    }
    func(result);
  }
  markSessionsNeedingBackup(sessions) {
    const sessionsNeedingBackup = getJsonItem(this.store, KEY_SESSIONS_NEEDING_BACKUP) || {};
    for (const session of sessions) {
      sessionsNeedingBackup[session.senderKey + "/" + session.sessionId] = true;
    }
    setJsonItem(this.store, KEY_SESSIONS_NEEDING_BACKUP, sessionsNeedingBackup);
    return Promise.resolve();
  }

  /**
   * Delete all data from this store.
   *
   * @returns Promise which resolves when the store has been cleared.
   */
  deleteAllData() {
    this.store.removeItem(KEY_END_TO_END_ACCOUNT);
    return Promise.resolve();
  }

  // Olm account

  getAccount(txn, func) {
    const accountPickle = getJsonItem(this.store, KEY_END_TO_END_ACCOUNT);
    func(accountPickle);
  }
  storeAccount(txn, accountPickle) {
    setJsonItem(this.store, KEY_END_TO_END_ACCOUNT, accountPickle);
  }
  getCrossSigningKeys(txn, func) {
    const keys = getJsonItem(this.store, KEY_CROSS_SIGNING_KEYS);
    func(keys);
  }
  getSecretStorePrivateKey(txn, func, type) {
    const key = getJsonItem(this.store, E2E_PREFIX + `ssss_cache.${type}`);
    func(key);
  }
  storeSecretStorePrivateKey(txn, type, key) {
    setJsonItem(this.store, E2E_PREFIX + `ssss_cache.${type}`, key);
  }
  doTxn(mode, stores, func) {
    return Promise.resolve(func(null));
  }
}
function getJsonItem(store, key) {
  try {
    // if the key is absent, store.getItem() returns null, and
    // JSON.parse(null) === null, so this returns null.
    return JSON.parse(store.getItem(key));
  } catch (e) {
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.log("Error: Failed to get key %s: %s", key, e.message);
    _logger_ts__WEBPACK_IMPORTED_MODULE_0__/* .logger */ .vF.log(e.stack);
  }
  return null;
}
function setJsonItem(store, key, val) {
  store.setItem(key, JSON.stringify(val));
}

/***/ },

/***/ "./node_modules/matrix-js-sdk/src/crypto/store/memory-crypto-store.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ MemoryCryptoStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/matrix-js-sdk/src/utils.ts");
/* harmony import */ var _base_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/matrix-js-sdk/src/crypto/store/base.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2017 - 2021 The Matrix.org Foundation C.I.C.

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



function encodeSessionKey(senderCurve25519Key, sessionId) {
  return encodeURIComponent(senderCurve25519Key) + "/" + encodeURIComponent(sessionId);
}
function decodeSessionKey(key) {
  const keyParts = key.split("/");
  const senderKey = decodeURIComponent(keyParts[0]);
  const sessionId = decodeURIComponent(keyParts[1]);
  return {
    senderKey,
    sessionId
  };
}

/**
 * Internal module. in-memory storage for e2e.
 */

class MemoryCryptoStore {
  constructor() {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "migrationState", _base_ts__WEBPACK_IMPORTED_MODULE_2__/* .MigrationState */ .Il.NOT_STARTED);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "account", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "crossSigningKeys", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "privateKeys", {});
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "sessions", {});
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "inboundGroupSessions", {});
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "inboundGroupSessionsWithheld", {});
    // Opaque device data object
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "rooms", {});
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "sessionsNeedingBackup", {});
  }
  /**
   * Returns true if this CryptoStore has ever been initialised (ie, it might contain data).
   *
   * Implementation of {@link CryptoStore.containsData}.
   *
   * @internal
   */
  async containsData() {
    // If it contains anything, it should contain an account.
    return this.account !== null;
  }

  /**
   * Ensure the database exists and is up-to-date.
   *
   * This must be called before the store can be used.
   *
   * @returns resolves to the store.
   */
  async startup() {
    // No startup work to do for the memory store.
    return this;
  }

  /**
   * Delete all data from this store.
   *
   * @returns Promise which resolves when the store has been cleared.
   */
  deleteAllData() {
    return Promise.resolve();
  }

  /**
   * Get data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.getMigrationState}.
   *
   * @internal
   */
  async getMigrationState() {
    return this.migrationState;
  }

  /**
   * Set data on how much of the libolm to Rust Crypto migration has been done.
   *
   * Implementation of {@link CryptoStore.setMigrationState}.
   *
   * @internal
   */
  async setMigrationState(migrationState) {
    this.migrationState = migrationState;
  }

  // Olm Account

  getAccount(txn, func) {
    func(this.account);
  }
  storeAccount(txn, accountPickle) {
    this.account = accountPickle;
  }
  getCrossSigningKeys(txn, func) {
    func(this.crossSigningKeys);
  }
  getSecretStorePrivateKey(txn, func, type) {
    const result = this.privateKeys[type];
    func(result || null);
  }
  storeSecretStorePrivateKey(txn, type, key) {
    this.privateKeys[type] = key;
  }

  // Olm Sessions

  countEndToEndSessions(txn, func) {
    let count = 0;
    for (const deviceSessions of Object.values(this.sessions)) {
      count += Object.keys(deviceSessions).length;
    }
    func(count);
  }
  getEndToEndSession(deviceKey, sessionId, txn, func) {
    const deviceSessions = this.sessions[deviceKey] || {};
    func(deviceSessions[sessionId] || null);
  }
  getEndToEndSessions(deviceKey, txn, func) {
    func(this.sessions[deviceKey] || {});
  }
  storeEndToEndSession(deviceKey, sessionId, sessionInfo, txn) {
    let deviceSessions = this.sessions[deviceKey];
    if (deviceSessions === undefined) {
      deviceSessions = {};
      this.sessions[deviceKey] = deviceSessions;
    }
    (0,_utils_ts__WEBPACK_IMPORTED_MODULE_1__/* .safeSet */ .C6)(deviceSessions, sessionId, sessionInfo);
  }

  /**
   * Fetch a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndSessionsBatch}.
   *
   * @internal
   */
  async getEndToEndSessionsBatch() {
    const result = [];
    for (const deviceSessions of Object.values(this.sessions)) {
      for (const session of Object.values(deviceSessions)) {
        result.push(session);
        if (result.length >= _base_ts__WEBPACK_IMPORTED_MODULE_2__/* .SESSION_BATCH_SIZE */ .oT) {
          return result;
        }
      }
    }
    if (result.length === 0) {
      // No sessions left.
      return null;
    }

    // There are fewer sessions than the batch size; return the final batch of sessions.
    return result;
  }

  /**
   * Delete a batch of Olm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndSessionsBatch}.
   *
   * @internal
   */
  async deleteEndToEndSessionsBatch(sessions) {
    for (const {
      deviceKey,
      sessionId
    } of sessions) {
      const deviceSessions = this.sessions[deviceKey] || {};
      delete deviceSessions[sessionId];
      if (Object.keys(deviceSessions).length === 0) {
        // No more sessions for this device.
        delete this.sessions[deviceKey];
      }
    }
  }

  // Inbound Group Sessions

  getEndToEndInboundGroupSession(senderCurve25519Key, sessionId, txn, func) {
    const k = encodeSessionKey(senderCurve25519Key, sessionId);
    func(this.inboundGroupSessions[k] || null, this.inboundGroupSessionsWithheld[k] || null);
  }
  storeEndToEndInboundGroupSession(senderCurve25519Key, sessionId, sessionData, txn) {
    const k = encodeSessionKey(senderCurve25519Key, sessionId);
    this.inboundGroupSessions[k] = sessionData;
  }

  /**
   * Count the number of Megolm sessions in the database.
   *
   * Implementation of {@link CryptoStore.countEndToEndInboundGroupSessions}.
   *
   * @internal
   */
  async countEndToEndInboundGroupSessions() {
    return Object.keys(this.inboundGroupSessions).length;
  }

  /**
   * Fetch a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.getEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  async getEndToEndInboundGroupSessionsBatch() {
    const result = [];
    for (const [key, session] of Object.entries(this.inboundGroupSessions)) {
      result.push(_objectSpread(_objectSpread({}, decodeSessionKey(key)), {}, {
        sessionData: session,
        needsBackup: key in this.sessionsNeedingBackup
      }));
      if (result.length >= _base_ts__WEBPACK_IMPORTED_MODULE_2__/* .SESSION_BATCH_SIZE */ .oT) {
        return result;
      }
    }
    if (result.length === 0) {
      // No sessions left.
      return null;
    }

    // There are fewer sessions than the batch size; return the final batch of sessions.
    return result;
  }

  /**
   * Delete a batch of Megolm sessions from the database.
   *
   * Implementation of {@link CryptoStore.deleteEndToEndInboundGroupSessionsBatch}.
   *
   * @internal
   */
  async deleteEndToEndInboundGroupSessionsBatch(sessions) {
    for (const {
      senderKey,
      sessionId
    } of sessions) {
      const k = encodeSessionKey(senderKey, sessionId);
      delete this.inboundGroupSessions[k];
    }
  }

  // E2E rooms

  getEndToEndRooms(txn, func) {
    func(this.rooms);
  }
  markSessionsNeedingBackup(sessions) {
    for (const session of sessions) {
      const sessionKey = encodeSessionKey(session.senderKey, session.sessionId);
      this.sessionsNeedingBackup[sessionKey] = true;
    }
    return Promise.resolve();
  }

  // Session key backups

  doTxn(mode, stores, func) {
    return Promise.resolve(func(null));
  }
}

/***/ },

/***/ "./node_modules/matrix-js-sdk/src/models/device.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ Device),
/* harmony export */   u: () => (/* binding */ DeviceVerification)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");

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

/** State of the verification of the device. */
let DeviceVerification = /*#__PURE__*/function (DeviceVerification) {
  DeviceVerification[DeviceVerification["Blocked"] = -1] = "Blocked";
  DeviceVerification[DeviceVerification["Unverified"] = 0] = "Unverified";
  DeviceVerification[DeviceVerification["Verified"] = 1] = "Verified";
  return DeviceVerification;
}({});

/** A map from user ID to device ID to Device */

/**
 *  Information on a user's device, as returned by {@link crypto-api!CryptoApi.getUserDeviceInfo}.
 */
class Device {
  constructor(opts) {
    /** id of the device */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "deviceId", void 0);
    /** id of the user that owns the device */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "userId", void 0);
    /** list of algorithms supported by this device */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "algorithms", void 0);
    /** a map from `<key type>:<id> -> <base64-encoded key>` */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "keys", void 0);
    /** whether the device has been verified/blocked by the user */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "verified", void 0);
    /** a map `<userId, map<algorithm:device_id, signature>>` */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "signatures", void 0);
    /** display name of the device */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "displayName", void 0);
    /** whether the device is a dehydrated device */
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "dehydrated", false);
    this.deviceId = opts.deviceId;
    this.userId = opts.userId;
    this.algorithms = opts.algorithms;
    this.keys = opts.keys;
    this.verified = opts.verified || DeviceVerification.Unverified;
    this.signatures = opts.signatures || new Map();
    this.displayName = opts.displayName;
    this.dehydrated = !!opts.dehydrated;
  }

  /**
   * Get the fingerprint for this device (ie, the Ed25519 key)
   *
   * @returns base64-encoded fingerprint of this device
   */
  getFingerprint() {
    return this.keys.get(`ed25519:${this.deviceId}`);
  }

  /**
   * Get the identity key for this device (ie, the Curve25519 key)
   *
   * @returns base64-encoded identity key of this device
   */
  getIdentityKey() {
    return this.keys.get(`curve25519:${this.deviceId}`);
  }
}

/***/ },

/***/ "./node_modules/matrix-js-sdk/src/types.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _types_membership_ts__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   V: () => (/* binding */ VerificationMethod)
/* harmony export */ });
/* harmony import */ var _types_membership_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/matrix-js-sdk/src/@types/membership.ts");
/*
Copyright 2024 The Matrix.org Foundation C.I.C.

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

/*
 * This file is a secondary entrypoint for the js-sdk library, for use by Typescript projects.
 * It exposes low-level types and interfaces reflecting structures defined in the Matrix specification.
 *
 * Remember to only export *public* types from this file.
 */


/** The different methods for device and user verification */
let VerificationMethod = /*#__PURE__*/function (VerificationMethod) {
  /** Short authentication string (emoji or decimals).
   *
   * @see https://spec.matrix.org/v1.9/client-server-api/#short-authentication-string-sas-verification
   */
  VerificationMethod["Sas"] = "m.sas.v1";
  /**
   * Verification by showing a QR code which is scanned by the other device.
   *
   * @see https://spec.matrix.org/v1.9/client-server-api/#qr-codes
   */
  VerificationMethod["ShowQrCode"] = "m.qr_code.show.v1";
  /**
   * Verification by scanning a QR code that is shown by the other device.
   *
   * @see https://spec.matrix.org/v1.9/client-server-api/#qr-codes
   */
  VerificationMethod["ScanQrCode"] = "m.qr_code.scan.v1";
  /**
   * Verification by confirming that we have scanned a QR code.
   *
   * @see https://spec.matrix.org/v1.9/client-server-api/#qr-codes
   */
  VerificationMethod["Reciprocate"] = "m.reciprocate.v1";
  return VerificationMethod;
}({});

/***/ }

}]);
//# sourceMappingURL=4332.js.map