(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[2074],{

/***/ "./src/async-components/views/dialogs/security/CreateSecretStorageDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateSecretStorageDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons_check__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/check.js");
/* harmony import */ var _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/MatrixClientPeg.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/Modal.tsx");
/* harmony import */ var _utils_strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/utils/strings.ts");
/* harmony import */ var _components_views_auth_InteractiveAuthEntryComponents__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/views/auth/InteractiveAuthEntryComponents.tsx");
/* harmony import */ var _components_views_auth_PassphraseField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/views/auth/PassphraseField.tsx");
/* harmony import */ var _components_views_elements_StyledRadioButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/views/elements/StyledRadioButton.tsx");
/* harmony import */ var _components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");
/* harmony import */ var _components_views_elements_InlineSpinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/views/elements/InlineSpinner.tsx");
/* harmony import */ var _modules_ModuleRunner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/modules/ModuleRunner.ts");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/components/views/elements/Spinner.tsx");
/* harmony import */ var _components_views_dialogs_InteractiveAuthDialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/components/views/dialogs/InteractiveAuthDialog.tsx");
/* harmony import */ var _components_views_auth_PassphraseConfirmField__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/components/views/auth/PassphraseConfirmField.tsx");
/* harmony import */ var _utils_device_dehydration__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/utils/device/dehydration.ts");

/*
Copyright 2024 New Vector Ltd.
Copyright 2019, 2020 , 2023 The Matrix.org Foundation C.I.C.
Copyright 2018, 2019 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






















var SecureBackupSetupMethod = /*#__PURE__*/function (SecureBackupSetupMethod) {
  SecureBackupSetupMethod["Key"] = "key";
  SecureBackupSetupMethod["Passphrase"] = "passphrase";
  return SecureBackupSetupMethod;
}(SecureBackupSetupMethod || {}); // I made a mistake while converting this and it has to be fixed!
var Phase = /*#__PURE__*/function (Phase) {
  Phase["Loading"] = "loading";
  Phase["LoadError"] = "load_error";
  Phase["ChooseKeyPassphrase"] = "choose_key_passphrase";
  Phase["Passphrase"] = "passphrase";
  Phase["PassphraseConfirm"] = "passphrase_confirm";
  Phase["ShowKey"] = "show_key";
  Phase["Storing"] = "storing";
  Phase["Stored"] = "stored";
  Phase["ConfirmSkip"] = "confirm_skip";
  return Phase;
}(Phase || {});
const PASSWORD_MIN_SCORE = 4; // So secure, many characters, much complex, wow, etc, etc.

/**
 * Walks the user through the process of creating a 4S passphrase and bootstrapping secret storage.
 *
 * If the user already has a key backup, follows a "migration" flow (aka "Upgrade your encryption") which
 * prompts the user to enter their backup decryption password (a Curve25519 private key, possibly derived
 * from a passphrase), and uses that as the (AES) 4S encryption key.
 *
 * @deprecated send the user to EncryptionUserSettingsTab instead
 */
class CreateSecretStorageDialog extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "recoveryKey", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "recoveryKeyNode", /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "passphraseField", /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onKeyPassphraseChange", e => {
      this.setState({
        passPhraseKeySelected: e.target.value
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onChooseKeyPassphraseFormSubmit", async () => {
      if (this.state.passPhraseKeySelected === SecureBackupSetupMethod.Key) {
        this.recoveryKey = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_6__/* .MatrixClientPeg */ .J.safeGet().getCrypto().createRecoveryKeyFromPassphrase();
        this.setState({
          copied: false,
          downloaded: false,
          setPassphrase: false,
          phase: Phase.ShowKey
        });
      } else {
        this.setState({
          copied: false,
          downloaded: false,
          phase: Phase.Passphrase
        });
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onCopyClick", () => {
      const successful = (0,_utils_strings__WEBPACK_IMPORTED_MODULE_9__/* .copyNode */ .Ud)(this.recoveryKeyNode.current);
      if (successful) {
        this.setState({
          copied: true
        });
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onDownloadClick", () => {
      if (!this.recoveryKey) return;
      const blob = new Blob([this.recoveryKey.encodedPrivateKey], {
        type: "text/plain;charset=us-ascii"
      });
      file_saver__WEBPACK_IMPORTED_MODULE_2___default().saveAs(blob, "security-key.txt");
      this.setState({
        downloaded: true
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "doBootstrapUIAuth", async makeRequest => {
      const dialogAesthetics = {
        [_components_views_auth_InteractiveAuthEntryComponents__WEBPACK_IMPORTED_MODULE_10__/* .SSOAuthEntry */ .av.PHASE_PREAUTH]: {
          title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("auth|uia|sso_title"),
          body: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("auth|uia|sso_preauth_body"),
          continueText: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("auth|sso"),
          continueKind: "primary"
        },
        [_components_views_auth_InteractiveAuthEntryComponents__WEBPACK_IMPORTED_MODULE_10__/* .SSOAuthEntry */ .av.PHASE_POSTAUTH]: {
          title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("encryption|confirm_encryption_setup_title"),
          body: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("encryption|confirm_encryption_setup_body"),
          continueText: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|confirm"),
          continueKind: "primary"
        }
      };
      const {
        finished
      } = _Modal__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay.createDialog(_components_views_dialogs_InteractiveAuthDialog__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
        title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("encryption|bootstrap_title"),
        matrixClient: _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_6__/* .MatrixClientPeg */ .J.safeGet(),
        makeRequest,
        aestheticsForStagePhases: {
          [_components_views_auth_InteractiveAuthEntryComponents__WEBPACK_IMPORTED_MODULE_10__/* .SSOAuthEntry */ .av.LOGIN_TYPE]: dialogAesthetics,
          [_components_views_auth_InteractiveAuthEntryComponents__WEBPACK_IMPORTED_MODULE_10__/* .SSOAuthEntry */ .av.UNSTABLE_LOGIN_TYPE]: dialogAesthetics
        }
      });
      const [confirmed] = await finished;
      if (!confirmed) {
        throw new Error("Cross-signing key upload auth canceled");
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "bootstrapSecretStorage", async () => {
      const cli = _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_6__/* .MatrixClientPeg */ .J.safeGet();
      const crypto = cli.getCrypto();
      const {
        forceReset
      } = this.props;
      let backupInfo;
      // First, unless we know we want to do a reset, we see if there is an existing key backup
      if (!forceReset) {
        try {
          this.setState({
            phase: Phase.Loading
          });
          backupInfo = await crypto.getKeyBackupInfo();
        } catch (e) {
          matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.error("Error fetching backup data from server", e);
          this.setState({
            phase: Phase.LoadError
          });
          return;
        }
      }
      this.setState({
        phase: Phase.Storing,
        error: undefined
      });
      try {
        if (forceReset) {
          /* Resetting cross-signing requires secret storage to be reset
           * (otherwise it will try to store the cross-signing keys in the
           * old secret storage, and may prompt for the old key, which is
           * probably not available), and resetting key backup requires
           * cross-signing to be reset (so that the new backup can be
           * signed by the new cross-signing key).  So we reset secret
           * storage first, then cross-signing, then key backup.
           */
          matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.log("Forcing secret storage reset");
          await crypto.bootstrapSecretStorage({
            createSecretStorageKey: async () => this.recoveryKey,
            setupNewSecretStorage: true
          });
          matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.log("Resetting key backup");
          await crypto.resetKeyBackup();
        } else {
          // For password authentication users after 2020-09, this cross-signing
          // step will be a no-op since it is now setup during registration or login
          // when needed. We should keep this here to cover other cases such as:
          //   * Users with existing sessions prior to 2020-09 changes
          //   * SSO authentication users which require interactive auth to upload
          //     keys (and also happen to skip all post-authentication flows at the
          //     moment via token login)
          await crypto.bootstrapCrossSigning({
            authUploadDeviceSigningKeys: this.doBootstrapUIAuth
          });
          await crypto.bootstrapSecretStorage({
            createSecretStorageKey: async () => this.recoveryKey,
            setupNewKeyBackup: !backupInfo
          });
        }
        await (0,_utils_device_dehydration__WEBPACK_IMPORTED_MODULE_21__/* .initialiseDehydrationIfEnabled */ .p)(cli, {
          createNewKey: true
        });
        this.setState({
          phase: Phase.Stored
        });
      } catch (e) {
        this.setState({
          error: true
        });
        matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.error("Error bootstrapping secret storage", e);
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onCancel", () => {
      this.props.onFinished(false);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onLoadRetryClick", () => {
      this.bootstrapSecretStorage();
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onShowKeyContinueClick", () => {
      this.bootstrapSecretStorage();
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onCancelClick", () => {
      this.setState({
        phase: Phase.ConfirmSkip
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onGoBackClick", () => {
      this.setState({
        phase: Phase.ChooseKeyPassphrase
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onPassPhraseNextClick", async e => {
      e.preventDefault();
      if (!this.passphraseField.current) return; // unmounting

      await this.passphraseField.current.validate({
        allowEmpty: false
      });
      if (!this.passphraseField.current.state.valid) {
        this.passphraseField.current.focus();
        this.passphraseField.current.validate({
          allowEmpty: false,
          focused: true
        });
        return;
      }
      this.setState({
        phase: Phase.PassphraseConfirm
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onPassPhraseConfirmNextClick", async e => {
      e.preventDefault();
      if (this.state.passPhrase !== this.state.passPhraseConfirm) return;
      this.recoveryKey = await _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_6__/* .MatrixClientPeg */ .J.safeGet().getCrypto().createRecoveryKeyFromPassphrase(this.state.passPhrase);
      this.setState({
        copied: false,
        downloaded: false,
        setPassphrase: true,
        phase: Phase.ShowKey
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onSetAgainClick", () => {
      this.setState({
        passPhrase: "",
        passPhraseValid: false,
        passPhraseConfirm: "",
        phase: Phase.Passphrase
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onPassPhraseValidate", result => {
      this.setState({
        passPhraseValid: !!result.valid
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onPassPhraseChange", e => {
      this.setState({
        passPhrase: e.target.value
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onPassPhraseConfirmChange", e => {
      this.setState({
        passPhraseConfirm: e.target.value
      });
    });
    const keyFromCustomisations = _modules_ModuleRunner__WEBPACK_IMPORTED_MODULE_16__/* .ModuleRunner */ .r.instance.extensions.cryptoSetup.createSecretStorageKey();
    const phase = keyFromCustomisations ? Phase.Loading : Phase.ChooseKeyPassphrase;
    this.state = {
      phase,
      passPhrase: "",
      passPhraseValid: false,
      passPhraseConfirm: "",
      copied: false,
      downloaded: false,
      setPassphrase: false,
      passPhraseKeySelected: SecureBackupSetupMethod.Key
    };
  }
  componentDidMount() {
    const keyFromCustomisations = _modules_ModuleRunner__WEBPACK_IMPORTED_MODULE_16__/* .ModuleRunner */ .r.instance.extensions.cryptoSetup.createSecretStorageKey();
    if (keyFromCustomisations) this.initExtension(keyFromCustomisations);
  }
  initExtension(keyFromCustomisations) {
    matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_3__/* .logger */ .vF.log("CryptoSetupExtension: Created key via extension, jumping to bootstrap step");
    this.recoveryKey = {
      privateKey: keyFromCustomisations
    };
    this.bootstrapSecretStorage();
  }
  renderOptionKey() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_StyledRadioButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      key: SecureBackupSetupMethod.Key,
      value: SecureBackupSetupMethod.Key,
      name: "keyPassphrase",
      checked: this.state.passPhraseKeySelected === SecureBackupSetupMethod.Key,
      onChange: this.onKeyPassphraseChange,
      outlined: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_optionTitle"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|generate_security_key_title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|generate_security_key_description")));
  }
  renderOptionPassphrase() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_StyledRadioButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      key: SecureBackupSetupMethod.Passphrase,
      value: SecureBackupSetupMethod.Passphrase,
      name: "keyPassphrase",
      checked: this.state.passPhraseKeySelected === SecureBackupSetupMethod.Passphrase,
      onChange: this.onKeyPassphraseChange,
      outlined: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_optionTitle"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|enter_phrase_title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|use_phrase_only_you_know")));
  }
  renderPhaseChooseKeyPassphrase() {
    const optionKey = this.renderOptionKey();
    const optionPassphrase = this.renderOptionPassphrase();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      onSubmit: this.onChooseKeyPassphraseFormSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "mx_CreateSecretStorageDialog_centeredBody"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_primaryContainer",
      role: "radiogroup"
    }, optionKey, optionPassphrase), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|continue"),
      onPrimaryButtonClick: this.onChooseKeyPassphraseFormSubmit,
      onCancel: this.onCancelClick
    }));
  }
  renderPhasePassPhrase() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      onSubmit: this.onPassPhraseNextClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|enter_phrase_description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_passPhraseContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_auth_PassphraseField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      id: "mx_passPhraseInput",
      className: "mx_CreateSecretStorageDialog_passPhraseField",
      onChange: this.onPassPhraseChange,
      minScore: PASSWORD_MIN_SCORE,
      value: this.state.passPhrase,
      onValidate: this.onPassPhraseValidate,
      fieldRef: this.passphraseField,
      autoFocus: true,
      label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|enter_phrase_title"),
      labelEnterPassword: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|enter_phrase_title"),
      labelStrongPassword: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|phrase_strong_enough"),
      labelAllowedButUnsafe: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|phrase_strong_enough")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|continue"),
      onPrimaryButtonClick: this.onPassPhraseNextClick,
      hasCancel: false,
      disabled: !this.state.passPhraseValid
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "button",
      onClick: this.onCancelClick,
      className: "danger"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|cancel"))));
  }
  renderPhasePassPhraseConfirm() {
    let matchText;
    let changeText;
    if (this.state.passPhraseConfirm === this.state.passPhrase) {
      matchText = (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|pass_phrase_match_success");
      changeText = (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|use_different_passphrase");
    } else if (!this.state.passPhrase.startsWith(this.state.passPhraseConfirm)) {
      // only tell them they're wrong if they've actually gone wrong.
      // Security conscious readers will note that if you left element-web unattended
      // on this screen, this would make it easy for a malicious person to guess
      // your passphrase one letter at a time, but they could get this faster by
      // just opening the browser's developer tools and reading it.
      // Note that not having typed anything at all will not hit this clause and
      // fall through so empty box === no hint.
      matchText = (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|pass_phrase_match_failed");
      changeText = (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|set_phrase_again");
    }
    let passPhraseMatch;
    if (matchText) {
      passPhraseMatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, matchText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
        kind: "link",
        onClick: this.onSetAgainClick
      }, changeText));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
      onSubmit: this.onPassPhraseConfirmNextClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|enter_phrase_to_confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_passPhraseContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_auth_PassphraseConfirmField__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      id: "mx_passPhraseInput",
      onChange: this.onPassPhraseConfirmChange,
      value: this.state.passPhraseConfirm,
      className: "mx_CreateSecretStorageDialog_passPhraseField",
      label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|confirm_security_phrase"),
      labelRequired: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|confirm_security_phrase"),
      labelInvalid: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__/* ._td */ .AO)("settings|key_backup|setup_secure_backup|pass_phrase_match_failed"),
      autoFocus: true,
      password: this.state.passPhrase
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_passPhraseMatch"
    }, passPhraseMatch)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|continue"),
      onPrimaryButtonClick: this.onPassPhraseConfirmNextClick,
      hasCancel: false,
      disabled: this.state.passPhrase !== this.state.passPhraseConfirm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "button",
      onClick: this.onCancelClick,
      className: "danger"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|skip"))));
  }
  renderPhaseShowKey() {
    var _this$recoveryKey;
    let continueButton;
    if (this.state.phase === Phase.ShowKey) {
      continueButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
        primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|continue"),
        disabled: !this.state.downloaded && !this.state.copied && !this.state.setPassphrase,
        onPrimaryButtonClick: this.onShowKeyContinueClick,
        hasCancel: false
      });
    } else {
      continueButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "mx_CreateSecretStorageDialog_continueSpinner"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_InlineSpinner__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|security_key_safety_reminder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_primaryContainer mx_CreateSecretStorageDialog_recoveryKeyPrimarycontainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_recoveryKeyContainer"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_recoveryKey"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      ref: this.recoveryKeyNode
    }, (_this$recoveryKey = this.recoveryKey) === null || _this$recoveryKey === void 0 ? void 0 : _this$recoveryKey.encodedPrivateKey)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_CreateSecretStorageDialog_recoveryKeyButtons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      kind: "primary",
      className: "mx_Dialog_primary",
      onClick: this.onDownloadClick,
      disabled: this.state.phase === Phase.Storing
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|download")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|download_or_copy", {
      downloadButton: "",
      copyButton: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      kind: "primary",
      className: "mx_Dialog_primary mx_CreateSecretStorageDialog_recoveryKeyButtons_copyBtn",
      onClick: this.onCopyClick,
      disabled: this.state.phase === Phase.Storing
    }, this.state.copied ? (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("common|copied") : (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|copy"))))), continueButton);
  }
  renderBusyPhase() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null));
  }
  renderStoredPhase() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: "mx_Dialog_content"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|backup_setup_success_description")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|done"),
      onPrimaryButtonClick: () => this.props.onFinished(true),
      hasCancel: false
    }));
  }
  renderPhaseLoadError() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|secret_storage_query_failure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_Dialog_buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|retry"),
      onPrimaryButtonClick: this.onLoadRetryClick,
      onCancel: this.onCancel
    })));
  }
  renderPhaseSkipConfirm() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|cancel_warning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|settings_reminder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|go_back"),
      onPrimaryButtonClick: this.onGoBackClick,
      hasCancel: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: "button",
      className: "danger",
      onClick: this.onCancel
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|cancel"))));
  }
  titleForPhase(phase) {
    switch (phase) {
      case Phase.ChooseKeyPassphrase:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("encryption|set_up_toast_title");
      case Phase.Passphrase:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|title_set_phrase");
      case Phase.PassphraseConfirm:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|title_confirm_phrase");
      case Phase.ConfirmSkip:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("common|are_you_sure");
      case Phase.ShowKey:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|title_save_key");
      case Phase.Storing:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("encryption|bootstrap_title");
      case Phase.Stored:
        return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|backup_setup_success_title");
      default:
        return "";
    }
  }
  get topComponent() {
    if (this.state.phase === Phase.Stored) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_vector_im_compound_design_tokens_assets_web_icons_check__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        className: "mx_Icon mx_Icon_circle-40 mx_Icon_accent mx_Icon_bg-accent-light"
      });
    }
    return null;
  }
  get classNames() {
    return classnames__WEBPACK_IMPORTED_MODULE_4___default()("mx_CreateSecretStorageDialog", {
      mx_SuccessDialog: this.state.phase === Phase.Stored
    });
  }
  render() {
    let content;
    if (this.state.error) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("settings|key_backup|setup_secure_backup|unable_to_setup")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: "mx_Dialog_buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
        primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_7__._t)("action|retry"),
        onPrimaryButtonClick: this.bootstrapSecretStorage,
        onCancel: this.onCancel
      })));
    } else {
      switch (this.state.phase) {
        case Phase.Loading:
          content = this.renderBusyPhase();
          break;
        case Phase.LoadError:
          content = this.renderPhaseLoadError();
          break;
        case Phase.ChooseKeyPassphrase:
          content = this.renderPhaseChooseKeyPassphrase();
          break;
        case Phase.Passphrase:
          content = this.renderPhasePassPhrase();
          break;
        case Phase.PassphraseConfirm:
          content = this.renderPhasePassPhraseConfirm();
          break;
        case Phase.ShowKey:
          content = this.renderPhaseShowKey();
          break;
        case Phase.Storing:
          content = this.renderBusyPhase();
          break;
        case Phase.Stored:
          content = this.renderStoredPhase();
          break;
        case Phase.ConfirmSkip:
          content = this.renderPhaseSkipConfirm();
          break;
      }
    }
    let titleClass;
    switch (this.state.phase) {
      case Phase.ChooseKeyPassphrase:
        titleClass = "mx_CreateSecretStorageDialog_centeredTitle";
        break;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      className: this.classNames,
      onFinished: this.props.onFinished,
      top: this.topComponent,
      title: this.titleForPhase(this.state.phase),
      titleClass: titleClass,
      hasCancel: false,
      fixedWidth: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, content));
  }
}
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(CreateSecretStorageDialog, "defaultProps", {
  forceReset: false
});

/***/ },

/***/ "./src/components/views/auth/PassphraseConfirmField.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _elements_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/views/elements/Field.tsx");
/* harmony import */ var _elements_Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/views/elements/Validation.tsx");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/languageHandler.tsx");

/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





class PassphraseConfirmField extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "validate", (0,_elements_Validation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
      rules: [{
        key: "required",
        test: ({
          value,
          allowEmpty
        }) => allowEmpty || !!value,
        invalid: () => (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)(this.props.labelRequired)
      }, {
        key: "match",
        test: ({
          value
        }) => !value || value === this.props.password,
        invalid: () => (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)(this.props.labelInvalid)
      }]
    }));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onValidate", async fieldState => {
      const result = await this.validate(fieldState);
      if (this.props.onValidate) {
        this.props.onValidate(result);
      }
      return result;
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_elements_Field__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      id: this.props.id,
      ref: this.props.fieldRef,
      type: "password",
      label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)(this.props.label),
      autoComplete: this.props.autoComplete,
      value: this.props.value,
      onChange: this.props.onChange,
      onValidate: this.onValidate,
      autoFocus: this.props.autoFocus,
      tooltipAlignment: this.props.tooltipAlignment
    });
  }
}
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(PassphraseConfirmField, "defaultProps", {
  label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__/* ._td */ .AO)("auth|change_password_confirm_label"),
  labelRequired: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__/* ._td */ .AO)("auth|change_password_confirm_label"),
  labelInvalid: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__/* ._td */ .AO)("auth|change_password_confirm_invalid")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassphraseConfirmField);

/***/ },

/***/ "./src/components/views/auth/PassphraseField.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SdkConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/SdkConfig.ts");
/* harmony import */ var _elements_Validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/elements/Validation.tsx");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _elements_Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/views/elements/Field.tsx");
/* harmony import */ var _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/MatrixClientPeg.ts");

/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/








class PassphraseField extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "validate", (0,_elements_Validation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({
      description: function (complexity) {
        const score = complexity ? complexity.score : 0;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("progress", {
          className: "mx_PassphraseField_progress",
          max: 4,
          value: score
        });
      },
      deriveData: async ({
        value
      }) => {
        if (!value) return null;
        const {
          scorePassword
        } = await Promise.all(/* import() */[__webpack_require__.e(6685), __webpack_require__.e(344)]).then(__webpack_require__.bind(__webpack_require__, "./src/utils/PasswordScorer.ts"));
        return scorePassword(_MatrixClientPeg__WEBPACK_IMPORTED_MODULE_7__/* .MatrixClientPeg */ .J.get(), value, this.props.userInputs);
      },
      rules: [{
        key: "required",
        test: ({
          value,
          allowEmpty
        }) => allowEmpty || !!value,
        invalid: () => (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)(this.props.labelEnterPassword)
      }, {
        key: "complexity",
        test: async function ({
          value
        }, complexity) {
          if (!value || !complexity) {
            return false;
          }
          const safe = complexity.score >= this.props.minScore;
          const allowUnsafe = _SdkConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get("dangerously_allow_unsafe_and_insecure_passwords");
          return allowUnsafe || safe;
        },
        valid: function (complexity) {
          // Unsafe passwords that are valid are only possible through a
          // configuration flag. We'll print some helper text to signal
          // to the user that their password is allowed, but unsafe.
          if (complexity && complexity.score >= this.props.minScore) {
            return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)(this.props.labelStrongPassword);
          }
          return (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)(this.props.labelAllowedButUnsafe);
        },
        invalid: function (complexity) {
          if (!complexity) {
            return null;
          }
          const {
            feedback
          } = complexity;
          return feedback.warning || feedback.suggestions[0] || (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)("auth|password_field_keep_going_prompt");
        }
      }],
      memoize: true
    }));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onValidate", async fieldState => {
      const result = await this.validate(fieldState);
      if (this.props.onValidate) {
        this.props.onValidate(result);
      }
      return result;
    });
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_elements_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      id: this.props.id,
      autoFocus: this.props.autoFocus,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("mx_PassphraseField", this.props.className),
      ref: this.props.fieldRef,
      type: "password",
      autoComplete: "new-password",
      label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__._t)(this.props.label),
      value: this.props.value,
      onChange: this.props.onChange,
      onValidate: this.onValidate,
      tooltipAlignment: this.props.tooltipAlignment
    });
  }
}
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(PassphraseField, "defaultProps", {
  label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__/* ._td */ .AO)("common|password"),
  labelEnterPassword: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__/* ._td */ .AO)("auth|password_field_label"),
  labelStrongPassword: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__/* ._td */ .AO)("auth|password_field_strong_label"),
  labelAllowedButUnsafe: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_5__/* ._td */ .AO)("auth|password_field_weak_label")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PassphraseField);

/***/ },

/***/ "../../node_modules/file-saver/dist/FileSaver.min.js"
(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
{}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});



/***/ }

}]);
//# sourceMappingURL=2074.js.map