"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[4807],{

/***/ "./src/async-components/views/dialogs/security/RecoveryMethodRemovedDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RecoveryMethodRemovedDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js");
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/dispatcher/dispatcher.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _dispatcher_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/dispatcher/actions.ts");
/* harmony import */ var _components_views_dialogs_UserTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/views/dialogs/UserTab.ts");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");

/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.
Copyright 2019 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









class RecoveryMethodRemovedDialog extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(...args) {
    super(...args);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onGoToSettingsClick", () => {
      this.props.onFinished();
      _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fire(_dispatcher_actions__WEBPACK_IMPORTED_MODULE_5__/* .Action */ .r.ViewUserSettings);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onSetupClick", () => {
      this.props.onFinished();
      // Open the user settings dialog to the encryption tab and start the flow to reset encryption
      const payload = {
        action: _dispatcher_actions__WEBPACK_IMPORTED_MODULE_5__/* .Action */ .r.ViewUserSettings,
        initialTabId: _components_views_dialogs_UserTab__WEBPACK_IMPORTED_MODULE_6__/* .UserTab */ .v.Encryption
      };
      _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.dispatch(payload);
    });
  }
  render() {
    const title = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: "mx_KeyBackupFailedDialog_title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null), (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("encryption|recovery_method_removed|title"));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      className: "mx_KeyBackupFailedDialog",
      onFinished: this.props.onFinished,
      title: title
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("encryption|recovery_method_removed|description_1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("encryption|recovery_method_removed|description_2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", {
      className: "warning"
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("encryption|recovery_method_removed|warning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("common|setup_secure_messages"),
      onPrimaryButtonClick: this.onSetupClick,
      cancelButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("common|go_to_settings"),
      onCancel: this.onGoToSettingsClick
    })));
  }
}

/***/ }

}]);
//# sourceMappingURL=4807.js.map