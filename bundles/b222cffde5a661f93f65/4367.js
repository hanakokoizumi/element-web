"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[4367],{

/***/ "./src/async-components/views/dialogs/eventindex/DisableEventIndexDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisableEventIndexDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/views/elements/Spinner.tsx");
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/dispatcher/dispatcher.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/settings/SettingsStore.ts");
/* harmony import */ var _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/indexing/EventIndexPeg.ts");
/* harmony import */ var _dispatcher_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/dispatcher/actions.ts");
/* harmony import */ var _settings_SettingLevel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/settings/SettingLevel.ts");

/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











/*
 * Allows the user to disable the Event Index.
 */
class DisableEventIndexDialog extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onDisable", async () => {
      this.setState({
        disabling: true
      });
      await _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.setValue("enableEventIndexing", null, _settings_SettingLevel__WEBPACK_IMPORTED_MODULE_10__/* .SettingLevel */ .p.DEVICE, false);
      await _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.deleteEventIndex();
      this.props.onFinished(true);
      _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.fire(_dispatcher_actions__WEBPACK_IMPORTED_MODULE_9__/* .Action */ .r.ViewUserSettings);
    });
    this.state = {
      disabling: false
    };
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      onFinished: this.props.onFinished,
      title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_6__._t)("common|are_you_sure")
    }, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_6__._t)("settings|security|message_search_disable_warning"), this.state.disabling ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_Spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_6__._t)("action|disable"),
      onPrimaryButtonClick: this.onDisable,
      primaryButtonClass: "danger",
      cancelButtonClass: "warning",
      onCancel: this.props.onFinished,
      disabled: this.state.disabling
    }));
  }
}

/***/ }

}]);
//# sourceMappingURL=4367.js.map