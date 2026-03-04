"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[3911],{

/***/ "./src/components/views/auth/LoginWithQR.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LoginWithQRFailureReason: () => (/* binding */ LoginWithQRFailureReason),
  "default": () => (/* binding */ LoginWithQR)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/rendezvous/index.ts + 8 modules
var src_rendezvous = __webpack_require__("./node_modules/matrix-js-sdk/src/rendezvous/index.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./src/components/views/auth/LoginWithQR-types.ts
var LoginWithQR_types = __webpack_require__("./src/components/views/auth/LoginWithQR-types.ts");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle-solid.js
var check_circle_solid = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check-circle-solid.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js
var error_solid = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error-solid.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Typography/Text.js
var Text = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Typography/Text.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Typography/Heading.js
var Heading = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Typography/Heading.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.js + 1 modules
var MFA = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/MFA/MFA.js");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/qr-code.js
var qr_code = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/qr-code.js");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/QRCode.tsx
var QRCode = __webpack_require__("./src/components/views/elements/QRCode.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/Spinner.tsx
var Spinner = __webpack_require__("./src/components/views/elements/Spinner.tsx");
// EXTERNAL MODULE: ./src/SdkConfig.ts
var SdkConfig = __webpack_require__("./src/SdkConfig.ts");
// EXTERNAL MODULE: ./src/components/structures/ErrorMessage.tsx
var ErrorMessage = __webpack_require__("./src/components/structures/ErrorMessage.tsx");
;// ./src/components/views/auth/LoginWithQRFlow.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2022-2024 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

















/**
 * A component that implements the UI for sign in and E2EE set up with a QR code.
 *
 * This supports the unstable features of MSC4108
 */
class LoginWithQRFlow extends react.Component {
  constructor(...args) {
    super(...args);
    (0,defineProperty/* default */.A)(this, "checkCodeInput", /*#__PURE__*/(0,react.createRef)());
    (0,defineProperty/* default */.A)(this, "handleClick", type => {
      return async e => {
        var _this$checkCodeInput$;
        e.preventDefault();
        await this.props.onClick(type, type === LoginWithQR_types/* Click */.HY.Approve ? (_this$checkCodeInput$ = this.checkCodeInput.current) === null || _this$checkCodeInput$ === void 0 ? void 0 : _this$checkCodeInput$.value : undefined);
      };
    });
    (0,defineProperty/* default */.A)(this, "cancelButton", () => /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
      "data-testid": "cancel-button",
      kind: "primary_outline",
      onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Cancel)
    }, (0,languageHandler._t)("action|cancel")));
    (0,defineProperty/* default */.A)(this, "simpleSpinner", description => {
      return /*#__PURE__*/react.createElement("div", {
        className: "mx_LoginWithQR_spinner"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Spinner/* default */.A, null), description && /*#__PURE__*/react.createElement("p", null, description)));
    });
  }
  render() {
    let main;
    let buttons;
    let backButton = true;
    let className = "";
    switch (this.props.phase) {
      case LoginWithQR_types/* Phase */.a0.Error:
        {
          backButton = false;
          let Icon = error_solid/* default */.A;
          let success = false;
          let title;
          let message;
          switch (this.props.failureReason) {
            case src_rendezvous/* MSC4108FailureReason */.n$.UnsupportedProtocol:
              title = (0,languageHandler._t)("auth|qr_code_login|error_unsupported_protocol_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_unsupported_protocol");
              break;
            case src_rendezvous/* MSC4108FailureReason */.n$.UserCancelled:
              title = (0,languageHandler._t)("auth|qr_code_login|error_user_cancelled_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_user_cancelled");
              break;
            case src_rendezvous/* MSC4108FailureReason */.n$.AuthorizationExpired:
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.Expired:
              title = (0,languageHandler._t)("auth|qr_code_login|error_expired_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_expired");
              break;
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.InsecureChannelDetected:
              title = (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_title");
              message = /*#__PURE__*/react.createElement(react.Fragment, null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected"), /*#__PURE__*/react.createElement(Text/* Text */.E, {
                as: "h2",
                size: "lg",
                weight: "semibold",
                "data-testid": "cancellation-message"
              }, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions")), /*#__PURE__*/react.createElement("ol", null, /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions_1")), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions_2")), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|error_insecure_channel_detected_instructions_3"))));
              break;
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.OtherDeviceAlreadySignedIn:
              success = true;
              Icon = check_circle_solid/* default */.A;
              title = (0,languageHandler._t)("auth|qr_code_login|error_other_device_already_signed_in_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_other_device_already_signed_in");
              break;
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.UserDeclined:
              title = (0,languageHandler._t)("auth|qr_code_login|error_user_declined_title");
              message = (0,languageHandler._t)("auth|qr_code_login|error_user_declined");
              break;
            case LoginWithQRFailureReason.RateLimited:
              title = (0,languageHandler._t)("error|something_went_wrong");
              message = (0,languageHandler._t)("auth|qr_code_login|error_rate_limited");
              break;
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.ETagMissing:
              title = (0,languageHandler._t)("error|something_went_wrong");
              message = (0,languageHandler._t)("auth|qr_code_login|error_etag_missing");
              break;
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.HomeserverLacksSupport:
              success = null;
              Icon = qr_code/* default */.A;
              backButton = true;
              title = (0,languageHandler._t)("auth|qr_code_login|unsupported_heading");
              message = (0,languageHandler._t)("auth|qr_code_login|unsupported_explainer");
              break;
            case src_rendezvous/* MSC4108FailureReason */.n$.DeviceAlreadyExists:
            case src_rendezvous/* MSC4108FailureReason */.n$.DeviceNotFound:
            case src_rendezvous/* MSC4108FailureReason */.n$.UnexpectedMessageReceived:
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.OtherDeviceNotSignedIn:
            case src_rendezvous/* ClientRendezvousFailureReason */.fF.Unknown:
            default:
              title = (0,languageHandler._t)("error|something_went_wrong");
              message = (0,languageHandler._t)("auth|qr_code_login|error_unexpected");
              break;
          }
          className = "mx_LoginWithQR_error";
          main = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
            className: classnames_default()("mx_LoginWithQR_icon", {
              "mx_LoginWithQR_icon--critical": success === false,
              "mx_LoginWithQR_icon--success": success === true
            })
          }, /*#__PURE__*/react.createElement(Icon, {
            width: "32px",
            height: "32px"
          })), /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
            as: "h1",
            size: "sm",
            weight: "semibold"
          }, title), typeof message === "object" ? message : /*#__PURE__*/react.createElement("p", {
            "data-testid": "cancellation-message"
          }, message));
          break;
        }
      case LoginWithQR_types/* Phase */.a0.OutOfBandConfirmation:
        backButton = false;
        main = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
          as: "h1",
          size: "sm",
          weight: "semibold"
        }, (0,languageHandler._t)("auth|qr_code_login|check_code_heading")), /*#__PURE__*/react.createElement(Text/* Text */.E, {
          size: "md"
        }, (0,languageHandler._t)("auth|qr_code_login|check_code_explainer")), /*#__PURE__*/react.createElement("label", {
          htmlFor: "mx_LoginWithQR_checkCode"
        }, (0,languageHandler._t)("auth|qr_code_login|check_code_input_label")), /*#__PURE__*/react.createElement(MFA/* MFAInput */.f, {
          className: "mx_LoginWithQR_checkCode_input mx_no_textinput",
          ref: this.checkCodeInput,
          length: 2,
          autoFocus: true,
          id: "mx_LoginWithQR_checkCode",
          "data-invalid": this.props.failureReason === LoginWithQRFailureReason.CheckCodeMismatch ? true : undefined
        }), /*#__PURE__*/react.createElement(ErrorMessage/* ErrorMessage */.K, {
          message: this.props.failureReason === LoginWithQRFailureReason.CheckCodeMismatch ? (0,languageHandler._t)("auth|qr_code_login|check_code_mismatch") : null
        }));
        buttons = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
          "data-testid": "approve-login-button",
          kind: "primary",
          onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Approve)
        }, (0,languageHandler._t)("action|continue")), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
          "data-testid": "decline-login-button",
          kind: "primary_outline",
          onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Decline)
        }, (0,languageHandler._t)("action|cancel")));
        break;
      case LoginWithQR_types/* Phase */.a0.ShowingQR:
        if (this.props.code) {
          const data = this.props.code;
          main = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
            as: "h1",
            size: "sm",
            weight: "semibold"
          }, (0,languageHandler._t)("auth|qr_code_login|scan_code_instruction")), /*#__PURE__*/react.createElement("div", {
            className: "mx_LoginWithQR_qrWrapper"
          }, /*#__PURE__*/react.createElement(QRCode/* default */.A, {
            data: [{
              data,
              mode: "byte"
            }],
            className: "mx_QRCode"
          })), /*#__PURE__*/react.createElement("ol", null, /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|open_element_other_device", {
            brand: SdkConfig/* default */.A.get().brand
          })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|select_qr_code", {
            scanQRCode: /*#__PURE__*/react.createElement("strong", null, (0,languageHandler._t)("auth|qr_code_login|scan_qr_code"))
          })), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|point_the_camera")), /*#__PURE__*/react.createElement("li", null, (0,languageHandler._t)("auth|qr_code_login|follow_remaining_instructions"))));
        } else {
          main = this.simpleSpinner();
          buttons = this.cancelButton();
        }
        break;
      case LoginWithQR_types/* Phase */.a0.Loading:
        main = this.simpleSpinner();
        break;
      case LoginWithQR_types/* Phase */.a0.WaitingForDevice:
        main = /*#__PURE__*/react.createElement(react.Fragment, null, this.simpleSpinner((0,languageHandler._t)("auth|qr_code_login|waiting_for_device")), this.props.userCode ? /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", null, (0,languageHandler._t)("auth|qr_code_login|security_code")), /*#__PURE__*/react.createElement("p", null, (0,languageHandler._t)("auth|qr_code_login|security_code_prompt")), /*#__PURE__*/react.createElement("p", null, this.props.userCode)) : null);
        buttons = this.cancelButton();
        break;
      case LoginWithQR_types/* Phase */.a0.Verifying:
        main = this.simpleSpinner((0,languageHandler._t)("auth|qr_code_login|completing_setup"));
        break;
    }
    return /*#__PURE__*/react.createElement("div", {
      "data-testid": "login-with-qr",
      className: classnames_default()("mx_LoginWithQR", className)
    }, backButton ? /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_heading"
    }, /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
      "data-testid": "back-button",
      className: "mx_LoginWithQR_BackButton",
      onClick: this.handleClick(LoginWithQR_types/* Click */.HY.Back),
      title: (0,languageHandler._t)("action|back")
    }, /*#__PURE__*/react.createElement(chevron_left/* default */.A, null)), /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_breadcrumbs"
    }, (0,languageHandler._t)("settings|sessions|title"), " / ", (0,languageHandler._t)("settings|sessions|sign_in_with_qr"))) : null, /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_main"
    }, main), /*#__PURE__*/react.createElement("div", {
      className: "mx_LoginWithQR_buttons"
    }, buttons));
  }
}
;// ./src/components/views/auth/LoginWithQR.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






let LoginWithQRFailureReason = /*#__PURE__*/function (LoginWithQRFailureReason) {
  LoginWithQRFailureReason["RateLimited"] = "rate_limited";
  LoginWithQRFailureReason["CheckCodeMismatch"] = "check_code_mismatch";
  return LoginWithQRFailureReason;
}({});
/**
 * A component that allows sign in and E2EE set up with a QR code.
 *
 * It implements `login.reciprocate` capabilities and showing QR codes.
 *
 * This uses the unstable feature of MSC4108: https://github.com/matrix-org/matrix-spec-proposals/pull/4108
 */
class LoginWithQR extends react.Component {
  constructor(props) {
    super(props);
    (0,defineProperty/* default */.A)(this, "finished", false);
    (0,defineProperty/* default */.A)(this, "generateAndShowCode", async () => {
      let rendezvous;
      try {
        const transport = new src_rendezvous/* MSC4108RendezvousSession */._T({
          onFailure: this.onFailure,
          client: this.props.client
        });
        await transport.send("");
        const channel = new src_rendezvous/* MSC4108SecureChannel */.NF(transport, undefined, this.onFailure);
        rendezvous = new src_rendezvous/* MSC4108SignInWithQR */.G_(channel, false, this.props.client, this.onFailure);
        await rendezvous.generateCode();
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.ShowingQR,
          rendezvous,
          failureReason: undefined
        });
      } catch (e) {
        logger/* logger */.vF.error("Error whilst generating QR code", e);
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.Error,
          failureReason: src_rendezvous/* ClientRendezvousFailureReason */.fF.HomeserverLacksSupport
        });
        return;
      }
      try {
        if (this.ourIntent === src_rendezvous/* RendezvousIntent */.E$.RECIPROCATE_LOGIN_ON_EXISTING_DEVICE) {
          // MSC4108-Flow: NewScanned
          await rendezvous.negotiateProtocols();
          const {
            verificationUri
          } = await rendezvous.deviceAuthorizationGrant();
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.OutOfBandConfirmation,
            verificationUri
          });
        }

        // we ask the user to confirm that the channel is secure
      } catch (e) {
        var _rendezvous;
        logger/* logger */.vF.error("Error whilst approving login", e);
        await ((_rendezvous = rendezvous) === null || _rendezvous === void 0 ? void 0 : _rendezvous.cancel(e instanceof src_rendezvous/* RendezvousError */.Qd ? e.code : src_rendezvous/* ClientRendezvousFailureReason */.fF.Unknown));
      }
    });
    (0,defineProperty/* default */.A)(this, "approveLogin", async checkCode => {
      var _this$state$rendezvou;
      if (!(this.state.rendezvous instanceof src_rendezvous/* MSC4108SignInWithQR */.G_)) {
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.Error,
          failureReason: src_rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
        });
        throw new Error("Rendezvous not found");
      }
      if (((_this$state$rendezvou = this.state.rendezvous) === null || _this$state$rendezvou === void 0 ? void 0 : _this$state$rendezvou.checkCode) !== checkCode) {
        this.setState({
          failureReason: LoginWithQRFailureReason.CheckCodeMismatch
        });
        return;
      }
      try {
        if (this.ourIntent === src_rendezvous/* RendezvousIntent */.E$.RECIPROCATE_LOGIN_ON_EXISTING_DEVICE) {
          // MSC4108-Flow: NewScanned
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.Loading
          });
          if (this.state.verificationUri) {
            window.open(this.state.verificationUri, "_blank");
          }
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.WaitingForDevice
          });

          // send secrets
          await this.state.rendezvous.shareSecrets();

          // done
          this.onFinished(true);
        } else {
          this.setState({
            phase: LoginWithQR_types/* Phase */.a0.Error,
            failureReason: src_rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
          });
          throw new Error("New device flows around OIDC are not yet implemented");
        }
      } catch (e) {
        logger/* logger */.vF.error("Error whilst approving sign in", e);
        this.setState({
          phase: LoginWithQR_types/* Phase */.a0.Error,
          failureReason: e instanceof src_rendezvous/* RendezvousError */.Qd ? e.code : src_rendezvous/* ClientRendezvousFailureReason */.fF.Unknown
        });
      }
    });
    (0,defineProperty/* default */.A)(this, "onFailure", reason => {
      if (this.state.phase === LoginWithQR_types/* Phase */.a0.Error) return; // Already in failed state
      logger/* logger */.vF.info(`Rendezvous failed: ${reason}`);
      this.setState({
        phase: LoginWithQR_types/* Phase */.a0.Error,
        failureReason: reason
      });
    });
    (0,defineProperty/* default */.A)(this, "onClick", async (type, checkCode) => {
      var _this$state$rendezvou2, _this$state$rendezvou3, _this$state$rendezvou4;
      switch (type) {
        case LoginWithQR_types/* Click */.HY.Cancel:
          await ((_this$state$rendezvou2 = this.state.rendezvous) === null || _this$state$rendezvou2 === void 0 ? void 0 : _this$state$rendezvou2.cancel(src_rendezvous/* MSC4108FailureReason */.n$.UserCancelled));
          this.reset();
          this.onFinished(false);
          break;
        case LoginWithQR_types/* Click */.HY.Approve:
          await this.approveLogin(checkCode);
          break;
        case LoginWithQR_types/* Click */.HY.Decline:
          await ((_this$state$rendezvou3 = this.state.rendezvous) === null || _this$state$rendezvou3 === void 0 ? void 0 : _this$state$rendezvou3.declineLoginOnExistingDevice());
          this.reset();
          this.onFinished(false);
          break;
        case LoginWithQR_types/* Click */.HY.Back:
          await ((_this$state$rendezvou4 = this.state.rendezvous) === null || _this$state$rendezvou4 === void 0 ? void 0 : _this$state$rendezvou4.cancel(src_rendezvous/* MSC4108FailureReason */.n$.UserCancelled));
          this.onFinished(false);
          break;
        case LoginWithQR_types/* Click */.HY.ShowQr:
          await this.updateMode(LoginWithQR_types/* Mode */.Kt.Show);
          break;
      }
    });
    this.state = {
      phase: LoginWithQR_types/* Phase */.a0.Loading
    };
  }
  get ourIntent() {
    return src_rendezvous/* RendezvousIntent */.E$.RECIPROCATE_LOGIN_ON_EXISTING_DEVICE;
  }
  componentDidMount() {
    this.updateMode(this.props.mode).then(() => {});
  }
  componentDidUpdate(prevProps) {
    if (prevProps.mode !== this.props.mode) {
      this.updateMode(this.props.mode).then(() => {});
    }
  }
  async updateMode(mode) {
    this.setState({
      phase: LoginWithQR_types/* Phase */.a0.Loading
    });
    if (this.state.rendezvous) {
      const rendezvous = this.state.rendezvous;
      rendezvous.onFailure = undefined;
      this.setState({
        rendezvous: undefined
      });
    }
    if (mode === LoginWithQR_types/* Mode */.Kt.Show) {
      await this.generateAndShowCode();
    }
  }
  componentWillUnmount() {
    if (this.state.rendezvous && !this.finished) {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.rendezvous.onFailure = undefined;
      // calling cancel will call close() as well to clean up the resources
      this.state.rendezvous.cancel(src_rendezvous/* MSC4108FailureReason */.n$.UserCancelled);
    }
  }
  onFinished(success) {
    this.finished = true;
    this.props.onFinished(success);
  }
  reset() {
    this.setState({
      rendezvous: undefined,
      verificationUri: undefined,
      failureReason: undefined,
      userCode: undefined,
      checkCode: undefined,
      mediaPermissionError: false
    });
  }
  render() {
    var _this$state$rendezvou5;
    return /*#__PURE__*/react.createElement(LoginWithQRFlow, {
      onClick: this.onClick,
      phase: this.state.phase,
      code: this.state.phase === LoginWithQR_types/* Phase */.a0.ShowingQR ? (_this$state$rendezvou5 = this.state.rendezvous) === null || _this$state$rendezvou5 === void 0 ? void 0 : _this$state$rendezvou5.code : undefined,
      failureReason: this.state.failureReason,
      userCode: this.state.userCode,
      checkCode: this.state.checkCode
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=3911.js.map