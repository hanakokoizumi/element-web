"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[7458],{

/***/ "./node_modules/matrix-js-sdk/src/rendezvous/index.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fF: () => (/* reexport */ ClientRendezvousFailureReason),
  n$: () => (/* reexport */ MSC4108FailureReason),
  _T: () => (/* reexport */ MSC4108RendezvousSession),
  NF: () => (/* reexport */ MSC4108SecureChannel),
  G_: () => (/* reexport */ MSC4108SignInWithQR),
  Qd: () => (/* reexport */ RendezvousError),
  E$: () => (/* reexport */ RendezvousIntent)
});

// UNUSED EXPORTS: PayloadType

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/@matrix-org/matrix-sdk-crypto-wasm/index-wasm-esm.mjs
var index_wasm_esm = __webpack_require__("../../node_modules/@matrix-org/matrix-sdk-crypto-wasm/index-wasm-esm.mjs");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/http-api/index.ts
var http_api = __webpack_require__("./node_modules/matrix-js-sdk/src/http-api/index.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("./node_modules/matrix-js-sdk/src/utils.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/oidc/index.ts + 2 modules
var oidc = __webpack_require__("./node_modules/matrix-js-sdk/src/oidc/index.ts");
;// ./node_modules/matrix-js-sdk/src/rendezvous/MSC4108SignInWithQR.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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







/**
 * Enum representing the payload types transmissible over [MSC4108](https://github.com/matrix-org/matrix-spec-proposals/pull/4108)
 * secure channels.
 * @experimental Note that this is UNSTABLE and may have breaking changes without notice.
 */
let PayloadType = /*#__PURE__*/function (PayloadType) {
  PayloadType["Protocols"] = "m.login.protocols";
  PayloadType["Protocol"] = "m.login.protocol";
  PayloadType["Failure"] = "m.login.failure";
  PayloadType["Success"] = "m.login.success";
  PayloadType["Secrets"] = "m.login.secrets";
  PayloadType["ProtocolAccepted"] = "m.login.protocol_accepted";
  PayloadType["Declined"] = "m.login.declined";
  return PayloadType;
}({});

/**
 * Type representing the base payload format for [MSC4108](https://github.com/matrix-org/matrix-spec-proposals/pull/4108)
 * messages sent over the secure channel.
 * @experimental Note that this is UNSTABLE and may have breaking changes without notice.
 */

function isDeviceAuthorizationGrantProtocolPayload(payload) {
  return payload.protocol === "device_authorization_grant";
}
/**
 * Prototype of the unstable [MSC4108](https://github.com/matrix-org/matrix-spec-proposals/pull/4108)
 * sign in with QR + OIDC flow.
 * @experimental Note that this is UNSTABLE and may have breaking changes without notice.
 */
class MSC4108SignInWithQR {
  /**
   * Returns the check code for the secure channel or undefined if not generated yet.
   */
  get checkCode() {
    var _this$channel;
    return (_this$channel = this.channel) === null || _this$channel === void 0 ? void 0 : _this$channel.getCheckCode();
  }

  /**
   * @param channel - The secure channel used for communication
   * @param client - The Matrix client in used on the device already logged in
   * @param didScanCode - Whether this side of the channel scanned the QR code from the other party
   * @param onFailure - Callback for when the rendezvous fails
   */
  constructor(channel, didScanCode, client, onFailure) {
    (0,defineProperty/* default */.A)(this, "ourIntent", void 0);
    (0,defineProperty/* default */.A)(this, "_code", void 0);
    (0,defineProperty/* default */.A)(this, "expectingNewDeviceId", void 0);
    this.channel = channel;
    this.didScanCode = didScanCode;
    this.client = client;
    this.onFailure = onFailure;
    this.ourIntent = client ? index_wasm_esm/* QrCodeMode */.qqN.Reciprocate : index_wasm_esm/* QrCodeMode */.qqN.Login;
  }

  /**
   * Returns the code representing the rendezvous suitable for rendering in a QR code or undefined if not generated yet.
   */
  get code() {
    return this._code;
  }

  /**
   * Generate the code including doing partial set up of the channel where required.
   */
  async generateCode() {
    if (this._code) {
      return;
    }
    if (this.ourIntent === index_wasm_esm/* QrCodeMode */.qqN.Reciprocate && this.client) {
      this._code = await this.channel.generateCode(this.ourIntent, this.client.getDomain());
    } else if (this.ourIntent === index_wasm_esm/* QrCodeMode */.qqN.Login) {
      this._code = await this.channel.generateCode(this.ourIntent);
    }
  }

  /**
   * Returns true if the device is the already logged in device reciprocating a new login on the other side of the channel.
   */
  get isExistingDevice() {
    return this.ourIntent === index_wasm_esm/* QrCodeMode */.qqN.Reciprocate;
  }

  /**
   * Returns true if the device is the new device logging in being reciprocated by the device on the other side of the channel.
   */
  get isNewDevice() {
    return !this.isExistingDevice;
  }

  /**
   * The first step in the OIDC QR login process.
   * To be called after the QR code has been rendered or scanned.
   * The scanning device has to discover the homeserver details, if they scanned the code then they already have it.
   * If the new device is the one rendering the QR code then it has to wait be sent the homeserver details via the rendezvous channel.
   */
  async negotiateProtocols() {
    logger/* logger */.vF.info(`negotiateProtocols(isNewDevice=${this.isNewDevice} didScanCode=${this.didScanCode})`);
    await this.channel.connect();
    if (this.didScanCode) {
      // Secure Channel step 6 completed, we trust the channel

      if (this.isNewDevice) {
        // MSC4108-Flow: ExistingScanned - take homeserver from QR code which should already be set
      } else {
        var _oidcClientConfig;
        // MSC4108-Flow: NewScanned -send protocols message
        let oidcClientConfig;
        try {
          oidcClientConfig = await this.client.getAuthMetadata();
        } catch (e) {
          logger/* logger */.vF.error("Failed to discover OIDC metadata", e);
        }
        if ((_oidcClientConfig = oidcClientConfig) !== null && _oidcClientConfig !== void 0 && _oidcClientConfig.grant_types_supported.includes(oidc/* OAuthGrantType */.gu.DeviceAuthorization)) {
          await this.send({
            type: PayloadType.Protocols,
            protocols: ["device_authorization_grant"],
            homeserver: this.client.getDomain()
          });
        } else {
          await this.send({
            type: PayloadType.Failure,
            reason: MSC4108FailureReason.UnsupportedProtocol
          });
          throw new RendezvousError("Device code grant unsupported", MSC4108FailureReason.UnsupportedProtocol);
        }
      }
    } else if (this.isNewDevice) {
      // MSC4108-Flow: ExistingScanned - wait for protocols message
      logger/* logger */.vF.info("Waiting for protocols message");
      const payload = await this.receive();
      if ((payload === null || payload === void 0 ? void 0 : payload.type) === PayloadType.Failure) {
        throw new RendezvousError("Failed", payload.reason);
      }
      if ((payload === null || payload === void 0 ? void 0 : payload.type) !== PayloadType.Protocols) {
        await this.send({
          type: PayloadType.Failure,
          reason: MSC4108FailureReason.UnexpectedMessageReceived
        });
        throw new RendezvousError("Unexpected message received", MSC4108FailureReason.UnexpectedMessageReceived);
      }
      return {
        serverName: payload.homeserver
      };
    } else {
      // MSC4108-Flow: NewScanned - nothing to do
    }
    return {};
  }

  /**
   * The second & third step in the OIDC QR login process.
   * To be called after `negotiateProtocols` for the existing device.
   * To be called after OIDC negotiation for the new device. (Currently unsupported)
   */
  async deviceAuthorizationGrant() {
    if (this.isNewDevice) {
      throw new Error("New device flows around OIDC are not yet implemented");
    } else {
      // The user needs to do step 7 for the out-of-band confirmation
      // but, first we receive the protocol chosen by the other device so that
      // the confirmation_uri is ready to go
      logger/* logger */.vF.info("Waiting for protocol message");
      const payload = await this.receive();
      if ((payload === null || payload === void 0 ? void 0 : payload.type) === PayloadType.Failure) {
        throw new RendezvousError("Failed", payload.reason);
      }
      if ((payload === null || payload === void 0 ? void 0 : payload.type) !== PayloadType.Protocol) {
        await this.send({
          type: PayloadType.Failure,
          reason: MSC4108FailureReason.UnexpectedMessageReceived
        });
        throw new RendezvousError("Unexpected message received", MSC4108FailureReason.UnexpectedMessageReceived);
      }
      if (isDeviceAuthorizationGrantProtocolPayload(payload)) {
        const {
          device_authorization_grant: dag,
          device_id: expectingNewDeviceId
        } = payload;
        const {
          verification_uri: verificationUri,
          verification_uri_complete: verificationUriComplete
        } = dag;
        let deviceAlreadyExists = true;
        try {
          var _this$client;
          await ((_this$client = this.client) === null || _this$client === void 0 ? void 0 : _this$client.getDevice(expectingNewDeviceId));
        } catch (err) {
          if (err instanceof http_api/* MatrixError */.up && err.httpStatus === 404) {
            deviceAlreadyExists = false;
          }
        }
        if (deviceAlreadyExists) {
          await this.send({
            type: PayloadType.Failure,
            reason: MSC4108FailureReason.DeviceAlreadyExists
          });
          throw new RendezvousError("Specified device ID already exists", MSC4108FailureReason.DeviceAlreadyExists);
        }
        this.expectingNewDeviceId = expectingNewDeviceId;
        return {
          verificationUri: verificationUriComplete !== null && verificationUriComplete !== void 0 ? verificationUriComplete : verificationUri
        };
      }
      await this.send({
        type: PayloadType.Failure,
        reason: MSC4108FailureReason.UnsupportedProtocol
      });
      throw new RendezvousError("Received a request for an unsupported protocol", MSC4108FailureReason.UnsupportedProtocol);
    }
  }

  /**
   * The fifth (and final) step in the OIDC QR login process.
   * To be called after the new device has completed authentication.
   */
  async shareSecrets() {
    if (this.isNewDevice) {
      await this.send({
        type: PayloadType.Success
      });
      // then wait for secrets
      logger/* logger */.vF.info("Waiting for secrets message");
      const payload = await this.receive();
      if ((payload === null || payload === void 0 ? void 0 : payload.type) === PayloadType.Failure) {
        throw new RendezvousError("Failed", payload.reason);
      }
      if ((payload === null || payload === void 0 ? void 0 : payload.type) !== PayloadType.Secrets) {
        await this.send({
          type: PayloadType.Failure,
          reason: MSC4108FailureReason.UnexpectedMessageReceived
        });
        throw new RendezvousError("Unexpected message received", MSC4108FailureReason.UnexpectedMessageReceived);
      }
      return {
        secrets: payload
      };
      // then done?
    } else {
      if (!this.expectingNewDeviceId) {
        throw new Error("No new device ID expected");
      }
      await this.send({
        type: PayloadType.ProtocolAccepted
      });
      logger/* logger */.vF.info("Waiting for outcome message");
      const payload = await this.receive();
      if ((payload === null || payload === void 0 ? void 0 : payload.type) === PayloadType.Failure) {
        throw new RendezvousError("Failed", payload.reason);
      }
      if ((payload === null || payload === void 0 ? void 0 : payload.type) === PayloadType.Declined) {
        throw new RendezvousError("User declined", ClientRendezvousFailureReason.UserDeclined);
      }
      if ((payload === null || payload === void 0 ? void 0 : payload.type) !== PayloadType.Success) {
        await this.send({
          type: PayloadType.Failure,
          reason: MSC4108FailureReason.UnexpectedMessageReceived
        });
        throw new RendezvousError("Unexpected message", MSC4108FailureReason.UnexpectedMessageReceived);
      }
      const timeout = Date.now() + 10000; // wait up to 10 seconds
      do {
        // is the device visible via the Homeserver?
        try {
          var _this$client2;
          const device = await ((_this$client2 = this.client) === null || _this$client2 === void 0 ? void 0 : _this$client2.getDevice(this.expectingNewDeviceId));
          if (device) {
            // if so, return the secrets
            const secretsBundle = await this.client.getCrypto().exportSecretsBundle();
            if (this.channel.cancelled) {
              throw new RendezvousError("User cancelled", MSC4108FailureReason.UserCancelled);
            }
            // send secrets
            await this.send(_objectSpread({
              type: PayloadType.Secrets
            }, secretsBundle));
            return {
              secrets: secretsBundle
            };
            // let the other side close the rendezvous session
          }
        } catch (err) {
          if (err instanceof http_api/* MatrixError */.up && err.httpStatus === 404) {
            // not found, so keep waiting until timeout
          } else {
            throw err;
          }
        }
        await (0,utils/* sleep */.yy)(1000);
      } while (Date.now() < timeout);
      await this.send({
        type: PayloadType.Failure,
        reason: MSC4108FailureReason.DeviceNotFound
      });
      throw new RendezvousError("New device not found", MSC4108FailureReason.DeviceNotFound);
    }
  }
  async receive() {
    return await this.channel.secureReceive();
  }
  async send(payload) {
    await this.channel.secureSend(payload);
  }

  /**
   * Decline the login on the existing device.
   */
  async declineLoginOnExistingDevice() {
    if (!this.isExistingDevice) {
      throw new Error("Can only decline login on existing device");
    }
    await this.send({
      type: PayloadType.Failure,
      reason: MSC4108FailureReason.UserCancelled
    });
  }

  /**
   * Cancels the rendezvous session.
   * @param reason the reason for the cancellation
   */
  async cancel(reason) {
    var _this$onFailure;
    (_this$onFailure = this.onFailure) === null || _this$onFailure === void 0 || _this$onFailure.call(this, reason);
    await this.channel.cancel(reason);
  }

  /**
   * Closes the rendezvous session.
   */
  async close() {
    await this.channel.close();
  }
}
;// ./node_modules/matrix-js-sdk/src/rendezvous/RendezvousError.ts
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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

class RendezvousError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
}
;// ./node_modules/matrix-js-sdk/src/rendezvous/RendezvousFailureReason.ts
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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

let MSC4108FailureReason = /*#__PURE__*/function (MSC4108FailureReason) {
  MSC4108FailureReason["AuthorizationExpired"] = "authorization_expired";
  MSC4108FailureReason["DeviceAlreadyExists"] = "device_already_exists";
  MSC4108FailureReason["DeviceNotFound"] = "device_not_found";
  MSC4108FailureReason["UnexpectedMessageReceived"] = "unexpected_message_received";
  MSC4108FailureReason["UnsupportedProtocol"] = "unsupported_protocol";
  MSC4108FailureReason["UserCancelled"] = "user_cancelled";
  return MSC4108FailureReason;
}({});
let ClientRendezvousFailureReason = /*#__PURE__*/function (ClientRendezvousFailureReason) {
  /** The sign in request has expired */
  ClientRendezvousFailureReason["Expired"] = "expired";
  /** The homeserver is lacking support for the required features */
  ClientRendezvousFailureReason["HomeserverLacksSupport"] = "homeserver_lacks_support";
  /** The secure channel verification failed meaning that it might be compromised */
  ClientRendezvousFailureReason["InsecureChannelDetected"] = "insecure_channel_detected";
  /** An invalid/incompatible QR code was scanned */
  ClientRendezvousFailureReason["InvalidCode"] = "invalid_code";
  /** The other device is not signed in */
  ClientRendezvousFailureReason["OtherDeviceNotSignedIn"] = "other_device_not_signed_in";
  /** The other device is already signed in */
  ClientRendezvousFailureReason["OtherDeviceAlreadySignedIn"] = "other_device_already_signed_in";
  /** Other */
  ClientRendezvousFailureReason["Unknown"] = "unknown";
  /** The user declined the sign in request */
  ClientRendezvousFailureReason["UserDeclined"] = "user_declined";
  /** The rendezvous request is missing an ETag header */
  ClientRendezvousFailureReason["ETagMissing"] = "etag_missing";
  return ClientRendezvousFailureReason;
}({});
;// ./node_modules/matrix-js-sdk/src/rendezvous/RendezvousIntent.ts
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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

let RendezvousIntent = /*#__PURE__*/function (RendezvousIntent) {
  RendezvousIntent["LOGIN_ON_NEW_DEVICE"] = "login.start";
  RendezvousIntent["RECIPROCATE_LOGIN_ON_EXISTING_DEVICE"] = "login.reciprocate";
  return RendezvousIntent;
}({});
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
;// ./node_modules/matrix-js-sdk/src/rendezvous/transports/MSC4108RendezvousSession.ts

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







/**
 * Prototype of the unstable [MSC4108](https://github.com/matrix-org/matrix-spec-proposals/pull/4108)
 * insecure rendezvous session protocol.
 * @experimental Note that this is UNSTABLE and may have breaking changes without notice.
 */
class MSC4108RendezvousSession {
  constructor({
    fetchFn,
    onFailure,
    url,
    client,
    fallbackRzServer
  }) {
    (0,defineProperty/* default */.A)(this, "url", void 0);
    (0,defineProperty/* default */.A)(this, "client", void 0);
    (0,defineProperty/* default */.A)(this, "fallbackRzServer", void 0);
    (0,defineProperty/* default */.A)(this, "fetchFn", void 0);
    (0,defineProperty/* default */.A)(this, "onFailure", void 0);
    (0,defineProperty/* default */.A)(this, "etag", void 0);
    (0,defineProperty/* default */.A)(this, "expiresAt", void 0);
    (0,defineProperty/* default */.A)(this, "expiresTimer", void 0);
    (0,defineProperty/* default */.A)(this, "_cancelled", false);
    (0,defineProperty/* default */.A)(this, "_ready", false);
    this.fetchFn = fetchFn;
    this.onFailure = onFailure;
    this.client = client;
    this.fallbackRzServer = fallbackRzServer;
    this.url = url;
  }

  /**
   * Returns whether the channel is ready to be used.
   */
  get ready() {
    return this._ready;
  }

  /**
   * Returns whether the channel has been cancelled.
   */
  get cancelled() {
    return this._cancelled;
  }
  fetch(resource, options) {
    if (this.fetchFn) {
      return this.fetchFn(resource, options);
    }
    return globalThis.fetch(resource, options);
  }
  async getPostEndpoint() {
    if (this.client) {
      try {
        if (await this.client.doesServerSupportUnstableFeature("org.matrix.msc4108")) {
          return this.client.http.getUrl("/org.matrix.msc4108/rendezvous", undefined, http_api/* ClientPrefix */.iD.Unstable).toString();
        }
      } catch (err) {
        logger/* logger */.vF.warn("Failed to get unstable features", err);
      }
    }
    return this.fallbackRzServer;
  }

  /**
   * Sends data via the rendezvous channel.
   * @param data the payload to send
   */
  async send(data) {
    var _this$url, _res$headers$get;
    if (this._cancelled) {
      return;
    }
    const method = this.url ? matrix.Method.Put : matrix.Method.Post;
    const uri = (_this$url = this.url) !== null && _this$url !== void 0 ? _this$url : await this.getPostEndpoint();
    if (!uri) {
      throw new Error("Invalid rendezvous URI");
    }
    const headers = {
      "content-type": "text/plain"
    };

    // if we didn't create the rendezvous channel, we need to fetch the first etag if needed
    if (!this.etag && this.url) {
      await this.receive();
    }
    if (this.etag) {
      headers["if-match"] = this.etag;
    }
    logger/* logger */.vF.info(`=> ${method} ${uri} with ${data} if-match: ${this.etag}`);
    const res = await this.fetch(uri, {
      method,
      headers,
      body: data,
      redirect: "follow"
    });
    if (res.status === 404) {
      return this.cancel(ClientRendezvousFailureReason.Unknown);
    }
    this.etag = (_res$headers$get = res.headers.get("etag")) !== null && _res$headers$get !== void 0 ? _res$headers$get : undefined;
    logger/* logger */.vF.info(`Received etag: ${this.etag}`);
    if (method === matrix.Method.Post) {
      const expires = res.headers.get("expires");
      if (expires) {
        if (this.expiresTimer) {
          clearTimeout(this.expiresTimer);
          this.expiresTimer = undefined;
        }
        this.expiresAt = new Date(expires);
        this.expiresTimer = setTimeout(() => {
          this.expiresTimer = undefined;
          this.cancel(ClientRendezvousFailureReason.Expired);
        }, this.expiresAt.getTime() - Date.now());
      }
      // MSC4108: we expect a JSON response with a rendezvous URL
      const json = await res.json();
      if (typeof json.url !== "string") {
        throw new Error("No rendezvous URL given");
      }
      this.url = json.url;
      this._ready = true;
    }
  }

  /**
   * Receives data from the rendezvous channel.
   * @return the returned promise won't resolve until new data is acquired or the channel is closed either by the server or the other party.
   */
  async receive() {
    if (!this.url) {
      throw new Error("Rendezvous not set up");
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
      var _poll$headers$get;
      if (this._cancelled) {
        return undefined;
      }
      const headers = {};
      if (this.etag) {
        headers["if-none-match"] = this.etag;
      }
      logger/* logger */.vF.info(`=> GET ${this.url} if-none-match: ${this.etag}`);
      const poll = await this.fetch(this.url, {
        method: matrix.Method.Get,
        headers
      });
      if (poll.status === 404) {
        await this.cancel(ClientRendezvousFailureReason.Unknown);
        return undefined;
      }

      // rely on server expiring the channel rather than checking ourselves

      const etag = (_poll$headers$get = poll.headers.get("etag")) !== null && _poll$headers$get !== void 0 ? _poll$headers$get : undefined;
      if (poll.headers.get("content-type") !== "text/plain") {
        this.etag = etag;
      } else if (poll.status === 200) {
        if (!etag) {
          // Some browsers & extensions block the ETag header for anti-tracking purposes
          // We try and detect this so the client can give the user a somewhat helpful message
          await this.cancel(ClientRendezvousFailureReason.ETagMissing);
          return undefined;
        }
        this.etag = etag;
        const text = await poll.text();
        logger/* logger */.vF.info(`Received: ${text} with etag ${this.etag}`);
        return text;
      }
      await (0,utils/* sleep */.yy)(1000);
    }
  }

  /**
   * Cancels the rendezvous channel.
   * If the reason is user_declined or user_cancelled then the channel will also be closed.
   * @param reason the reason to cancel with
   */
  async cancel(reason) {
    var _this$onFailure;
    if (this._cancelled) return;
    if (this.expiresTimer) {
      clearTimeout(this.expiresTimer);
      this.expiresTimer = undefined;
    }
    if (reason === ClientRendezvousFailureReason.Unknown && this.expiresAt && this.expiresAt.getTime() < Date.now()) {
      reason = ClientRendezvousFailureReason.Expired;
    }
    this._cancelled = true;
    this._ready = false;
    (_this$onFailure = this.onFailure) === null || _this$onFailure === void 0 || _this$onFailure.call(this, reason);
    if (reason === ClientRendezvousFailureReason.UserDeclined || reason === MSC4108FailureReason.UserCancelled) {
      await this.close();
    }
  }

  /**
   * Closes the rendezvous channel.
   */
  async close() {
    if (this.expiresTimer) {
      clearTimeout(this.expiresTimer);
      this.expiresTimer = undefined;
    }
    if (!this.url) return;
    try {
      const method = matrix.Method.Delete;
      logger/* logger */.vF.info(`=> ${method} ${this.url}`);
      await this.fetch(this.url, {
        method
      });
    } catch (e) {
      logger/* logger */.vF.warn(e);
    }
  }
}
;// ./node_modules/matrix-js-sdk/src/rendezvous/transports/index.ts
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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


;// ./node_modules/matrix-js-sdk/src/rendezvous/channels/MSC4108SecureChannel.ts

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





/**
 * Prototype of the unstable [MSC4108](https://github.com/matrix-org/matrix-spec-proposals/pull/4108)
 * secure rendezvous session protocol.
 * @experimental Note that this is UNSTABLE and may have breaking changes without notice.
 * Imports @matrix-org/matrix-sdk-crypto-wasm so should be async-imported to avoid bundling the WASM into the main bundle.
 */
class MSC4108SecureChannel {
  constructor(rendezvousSession, theirPublicKey, onFailure) {
    (0,defineProperty/* default */.A)(this, "secureChannel", void 0);
    (0,defineProperty/* default */.A)(this, "establishedChannel", void 0);
    (0,defineProperty/* default */.A)(this, "connected", false);
    this.rendezvousSession = rendezvousSession;
    this.theirPublicKey = theirPublicKey;
    this.onFailure = onFailure;
    this.secureChannel = new index_wasm_esm/* Ecies */.SG1();
  }

  /**
   * Generate a QR code for the current session.
   * @param mode the mode to generate the QR code in, either `Login` or `Reciprocate`.
   * @param serverName the name of the homeserver to connect to, as defined by server discovery in the spec, required for `Reciprocate` mode.
   */

  async generateCode(mode, serverName) {
    const {
      url
    } = this.rendezvousSession;
    if (!url) {
      throw new Error("No rendezvous session URL");
    }
    return new index_wasm_esm/* QrCodeData */.dFo(this.secureChannel.public_key(), url, mode === index_wasm_esm/* QrCodeMode */.qqN.Reciprocate ? serverName : undefined).toBytes();
  }

  /**
   * Returns the check code for the secure channel or undefined if not generated yet.
   */
  getCheckCode() {
    var _this$establishedChan;
    const x = (_this$establishedChan = this.establishedChannel) === null || _this$establishedChan === void 0 ? void 0 : _this$establishedChan.check_code();
    if (!x) {
      return undefined;
    }
    return Array.from(x.as_bytes()).map(b => `${b % 10}`).join("");
  }

  /**
   * Connects and establishes a secure channel with the other device.
   */
  async connect() {
    if (this.connected) {
      throw new Error("Channel already connected");
    }
    if (this.theirPublicKey) {
      // We are the scanning device
      const result = this.secureChannel.establish_outbound_channel(this.theirPublicKey, "MATRIX_QR_CODE_LOGIN_INITIATE");
      this.establishedChannel = result.channel;

      /*
       Secure Channel step 4. Device S sends the initial message
        Nonce := 0
       SH := ECDH(Ss, Gp)
       EncKey := HKDF_SHA256(SH, "MATRIX_QR_CODE_LOGIN|" || Gp || "|" || Sp, 0, 32)
       TaggedCiphertext := ChaCha20Poly1305_Encrypt(EncKey, Nonce, "MATRIX_QR_CODE_LOGIN_INITIATE")
       Nonce := Nonce + 2
       LoginInitiateMessage := UnpaddedBase64(TaggedCiphertext) || "|" || UnpaddedBase64(Sp)
       */
      {
        logger/* logger */.vF.info("Sending LoginInitiateMessage");
        await this.rendezvousSession.send(result.initial_message);
      }

      /*
      Secure Channel step 6. Verification by Device S
       Nonce_G := 1
      (TaggedCiphertext, Sp) := Unpack(Message)
      Plaintext := ChaCha20Poly1305_Decrypt(EncKey, Nonce_G, TaggedCiphertext)
      Nonce_G := Nonce_G + 2
       unless Plaintext == "MATRIX_QR_CODE_LOGIN_OK":
          FAIL
       */
      {
        logger/* logger */.vF.info("Waiting for LoginOkMessage");
        const ciphertext = await this.rendezvousSession.receive();
        if (!ciphertext) {
          throw new RendezvousError("No response from other device", MSC4108FailureReason.UnexpectedMessageReceived);
        }
        const candidateLoginOkMessage = await this.decrypt(ciphertext);
        if (candidateLoginOkMessage !== "MATRIX_QR_CODE_LOGIN_OK") {
          throw new RendezvousError("Invalid response from other device", ClientRendezvousFailureReason.InsecureChannelDetected);
        }

        // Step 6 is now complete. We trust the channel
      }
    } else {
      /*
      Secure Channel step 5. Device G confirms
       Nonce_S := 0
      (TaggedCiphertext, Sp) := Unpack(LoginInitiateMessage)
      SH := ECDH(Gs, Sp)
      EncKey := HKDF_SHA256(SH, "MATRIX_QR_CODE_LOGIN|" || Gp || "|" || Sp, 0, 32)
      Plaintext := ChaCha20Poly1305_Decrypt(EncKey, Nonce_S, TaggedCiphertext)
      Nonce_S := Nonce_S + 2
       */
      // wait for the other side to send us their public key
      logger/* logger */.vF.info("Waiting for LoginInitiateMessage");
      const loginInitiateMessage = await this.rendezvousSession.receive();
      if (!loginInitiateMessage) {
        throw new Error("No response from other device");
      }
      const {
        channel,
        message: candidateLoginInitiateMessage
      } = this.secureChannel.establish_inbound_channel(loginInitiateMessage);
      this.establishedChannel = channel;
      if (candidateLoginInitiateMessage !== "MATRIX_QR_CODE_LOGIN_INITIATE") {
        throw new RendezvousError("Invalid response from other device", ClientRendezvousFailureReason.InsecureChannelDetected);
      }
      logger/* logger */.vF.info("LoginInitiateMessage received");
      logger/* logger */.vF.info("Sending LoginOkMessage");
      const loginOkMessage = await this.encrypt("MATRIX_QR_CODE_LOGIN_OK");
      await this.rendezvousSession.send(loginOkMessage);

      // Step 5 is complete. We don't yet trust the channel

      // next step will be for the user to confirm the check code on the other device
    }
    this.connected = true;
  }
  async decrypt(ciphertext) {
    if (!this.establishedChannel) {
      throw new Error("Channel closed");
    }
    return this.establishedChannel.decrypt(ciphertext);
  }
  async encrypt(plaintext) {
    if (!this.establishedChannel) {
      throw new Error("Channel closed");
    }
    return this.establishedChannel.encrypt(plaintext);
  }

  /**
   * Sends a payload securely to the other device.
   * @param payload the payload to encrypt and send
   */
  async secureSend(payload) {
    if (!this.connected) {
      throw new Error("Channel closed");
    }
    const stringifiedPayload = JSON.stringify(payload);
    logger/* logger */.vF.debug(`=> {"type": ${JSON.stringify(payload.type)}, ...}`);
    await this.rendezvousSession.send(await this.encrypt(stringifiedPayload));
  }

  /**
   * Receives an encrypted payload from the other device and decrypts it.
   */
  async secureReceive() {
    if (!this.establishedChannel) {
      throw new Error("Channel closed");
    }
    const ciphertext = await this.rendezvousSession.receive();
    if (!ciphertext) {
      return undefined;
    }
    const plaintext = await this.decrypt(ciphertext);
    const json = JSON.parse(plaintext);
    logger/* logger */.vF.debug(`<= {"type": ${JSON.stringify(json.type)}, ...}`);
    return json;
  }

  /**
   * Closes the secure channel.
   */
  async close() {
    await this.rendezvousSession.close();
  }

  /**
   * Cancels the secure channel.
   * @param reason the reason for the cancellation
   */
  async cancel(reason) {
    try {
      var _this$onFailure;
      await this.rendezvousSession.cancel(reason);
      (_this$onFailure = this.onFailure) === null || _this$onFailure === void 0 || _this$onFailure.call(this, reason);
    } finally {
      await this.close();
    }
  }

  /**
   * Returns whether the rendezvous session has been cancelled.
   */
  get cancelled() {
    return this.rendezvousSession.cancelled;
  }
}
;// ./node_modules/matrix-js-sdk/src/rendezvous/channels/index.ts
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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


;// ./node_modules/matrix-js-sdk/src/rendezvous/index.ts
/*
Copyright 2022 The Matrix.org Foundation C.I.C.

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








/***/ },

/***/ "../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ MFAInput)
});

// UNUSED EXPORTS: MFAControl

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
;// ../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.module.css.js
const container = "_container_43om7_10";
const control = "_control_43om7_25";
const digit = "_digit_43om7_49";
const styles = {
  container,
  control,
  digit
};

// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
;// ../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.js
/* unused harmony import specifier */ var jsx;
/* unused harmony import specifier */ var forwardRef;
/* unused harmony import specifier */ var Control;


const _excluded = ["className", "length"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





const Digit = ({
  filled,
  selected
}) => /* @__PURE__ */(0,jsx_runtime.jsx)("div", {
  className: styles.digit,
  "aria-hidden": "true",
  "data-filled": filled ? "" : void 0,
  "data-selected": selected ? "" : void 0
});
const MFAInput = /*#__PURE__*/(0,react.forwardRef)(function MFAInput2(_ref, ref) {
  let {
      className,
      length = 6
    } = _ref,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  const classes = classnames(styles.container, className);
  const [currentLength, setCurrentLength] = react.useState(0);
  const [selection, setSelection] = react.useState(null);
  const update = event => {
    var _input$value;
    const input = event.currentTarget;
    setCurrentLength((_input$value = input.value) === null || _input$value === void 0 ? void 0 : _input$value.length);
    if (document.activeElement !== input || input.selectionStart === null || input.selectionEnd === null) {
      setSelection(null);
    } else {
      setSelection([input.selectionStart, input.selectionEnd]);
    }
  };
  return /* @__PURE__ */(0,jsx_runtime.jsxs)("div", {
    className: classes,
    children: [/* @__PURE__ */(0,jsx_runtime.jsx)("input", _objectSpread(_objectSpread({}, props), {}, {
      inputMode: "numeric",
      type: "text",
      minLength: 0,
      maxLength: length,
      className: styles.control,
      pattern: `\\d{${length}}`,
      autoComplete: "one-time-code",
      onSelect: update,
      onFocus: update,
      onBlur: update,
      onMouseDown: update,
      onMouseMove: update,
      onMouseUp: update,
      onChange: update,
      ref
    })), Array.from(Array(length).keys()).map(index => /* @__PURE__ */(0,jsx_runtime.jsx)(Digit, {
      filled: index < currentLength,
      selected: !!selection && index >= selection[0] && index < selection[1]
    }, index))]
  });
});
const MFAControl = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function ActionControl(props, ref) {
  return /* @__PURE__ */jsx(Control, {
    asChild: true,
    children: /* @__PURE__ */jsx(MFAInput, _objectSpread({
      ref
    }, props))
  });
})));


/***/ }

}]);
//# sourceMappingURL=7458.js.map