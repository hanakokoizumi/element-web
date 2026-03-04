"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[8993],{

/***/ "./src/async-components/views/dialogs/security/NewRecoveryMethodDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewRecoveryMethodDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/error.js");
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/dispatcher/dispatcher.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Modal.tsx");
/* harmony import */ var _components_views_dialogs_security_RestoreKeyBackupDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/views/dialogs/security/RestoreKeyBackupDialog.tsx");
/* harmony import */ var _dispatcher_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/dispatcher/actions.ts");
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _contexts_MatrixClientContext_tsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.
Copyright 2018, 2019 New Vector Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/












/**
 * Properties for {@link NewRecoveryMethodDialog}.
 */

// Export as default instead of a named export so that it can be dynamically imported with React lazy

/**
 * Dialog to inform the user that a new recovery method has been detected.
 */
function NewRecoveryMethodDialog({
  onFinished
}) {
  const matrixClient = (0,_contexts_MatrixClientContext_tsx__WEBPACK_IMPORTED_MODULE_9__/* .useMatrixClientContext */ .nH)();
  const [isKeyBackupEnabled, setIsKeyBackupEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const checkBackupEnabled = async () => {
      const crypto = matrixClient.getCrypto();
      setIsKeyBackupEnabled(Boolean(crypto && (await crypto.getActiveSessionBackupVersion()) !== null));
    };
    checkBackupEnabled();
  }, [matrixClient]);
  function onClick() {
    if (isKeyBackupEnabled) {
      onFinished();
    } else {
      const {
        finished
      } = _Modal__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay.createDialog(_components_views_dialogs_security_RestoreKeyBackupDialog__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {}, undefined, false, true);
      finished.then(onFinished);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    className: "mx_KeyBackupFailedDialog",
    onFinished: onFinished,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "mx_KeyBackupFailedDialog_title"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null), (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("encryption|new_recovery_method_detected|title"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("encryption|new_recovery_method_detected|description_1")), isKeyBackupEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("encryption|new_recovery_method_detected|description_2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    className: "warning"
  }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("encryption|new_recovery_method_detected|warning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
    primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("common|setup_secure_messages"),
    onPrimaryButtonClick: onClick,
    cancelButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("common|go_to_settings"),
    onCancel: () => {
      onFinished();
      _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fire(_dispatcher_actions__WEBPACK_IMPORTED_MODULE_6__/* .Action */ .r.ViewUserSettings);
    }
  }));
}

/***/ }

}]);
//# sourceMappingURL=8993.js.map