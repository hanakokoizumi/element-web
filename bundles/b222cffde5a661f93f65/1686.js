"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[1686],{

/***/ "./src/async-components/views/dialogs/eventindex/ManageEventIndexDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageEventIndexDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _SdkConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/SdkConfig.ts");
/* harmony import */ var _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/settings/SettingsStore.ts");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/Modal.tsx");
/* harmony import */ var _utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/utils/FormattingUtils.ts");
/* harmony import */ var _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/indexing/EventIndexPeg.ts");
/* harmony import */ var _settings_SettingLevel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/settings/SettingLevel.ts");
/* harmony import */ var _components_views_elements_Field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/views/elements/Field.tsx");
/* harmony import */ var _components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");

/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/












/*
 * Allows the user to introspect the event index state and disable it.
 */
class ManageEventIndexDialog extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "updateCurrentRoom", async room => {
      var _stats$size, _stats, _stats$eventCount, _stats2, _stats$roomCount, _stats3;
      const eventIndex = _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.get();
      if (!eventIndex) return;
      let stats;
      try {
        stats = await eventIndex.getStats();
      } catch {
        // This call may fail if sporadically, not a huge issue as we will
        // try later again and probably succeed.
        return;
      }
      let currentRoom = null;
      if (room) currentRoom = room.name;
      const roomStats = eventIndex.crawlingRooms();
      const crawlingRoomsCount = roomStats.crawlingRooms.size;
      const roomCount = roomStats.totalRooms.size;
      this.setState({
        eventIndexSize: (_stats$size = (_stats = stats) === null || _stats === void 0 ? void 0 : _stats.size) !== null && _stats$size !== void 0 ? _stats$size : 0,
        eventCount: (_stats$eventCount = (_stats2 = stats) === null || _stats2 === void 0 ? void 0 : _stats2.eventCount) !== null && _stats$eventCount !== void 0 ? _stats$eventCount : 0,
        eventIndexRoomCount: (_stats$roomCount = (_stats3 = stats) === null || _stats3 === void 0 ? void 0 : _stats3.roomCount) !== null && _stats$roomCount !== void 0 ? _stats$roomCount : 0,
        crawlingRoomsCount: crawlingRoomsCount,
        roomCount: roomCount,
        currentRoom: currentRoom
      });
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onDisable", async () => {
      const DisableEventIndexDialog = (await __webpack_require__.e(/* import() */ 4367).then(__webpack_require__.bind(__webpack_require__, "./src/async-components/views/dialogs/eventindex/DisableEventIndexDialog.tsx"))).default;
      _Modal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.createDialog(DisableEventIndexDialog, undefined, undefined, /* priority = */false, /* static = */true);
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onCrawlerSleepTimeChange", e => {
      this.setState({
        crawlerSleepTime: parseInt(e.target.value, 10)
      });
      _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.setValue("crawlerSleepTime", null, _settings_SettingLevel__WEBPACK_IMPORTED_MODULE_8__/* .SettingLevel */ .p.DEVICE, e.target.value);
    });
    this.state = {
      eventIndexSize: 0,
      eventCount: 0,
      eventIndexRoomCount: 0,
      crawlingRoomsCount: 0,
      roomCount: 0,
      currentRoom: null,
      crawlerSleepTime: _settings_SettingsStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getValueAt(_settings_SettingLevel__WEBPACK_IMPORTED_MODULE_8__/* .SettingLevel */ .p.DEVICE, "crawlerSleepTime")
    };
  }
  componentWillUnmount() {
    const eventIndex = _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.get();
    if (eventIndex !== null) {
      eventIndex.removeListener("changedCheckpoint", this.updateCurrentRoom);
    }
  }
  async componentDidMount() {
    const eventIndex = _indexing_EventIndexPeg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.get();
    if (eventIndex !== null) {
      eventIndex.on("changedCheckpoint", this.updateCurrentRoom);
      const room = eventIndex.currentRoom();
      await this.updateCurrentRoom(room);
    }
  }
  render() {
    const brand = _SdkConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.get().brand;
    let crawlerState;
    if (this.state.currentRoom === null) {
      crawlerState = (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_indexing_idle");
    } else {
      crawlerState = (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_indexing", {
        currentRoom: this.state.currentRoom
      });
    }
    const doneRooms = Math.max(0, this.state.eventIndexRoomCount - this.state.crawlingRoomsCount);
    const eventIndexingSettings = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_intro", {
      brand
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: "mx_SettingsTab_subsectionText"
    }, crawlerState, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_space_used"), " ", (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_6__/* .formatBytes */ .z3)(this.state.eventIndexSize, 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_indexed_messages"), " ", (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_6__/* .formatCountLong */ .Zl)(this.state.eventCount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_indexed_rooms"), " ", (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_room_progress", {
      doneRooms: (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_6__/* .formatCountLong */ .Zl)(doneRooms),
      totalRooms: (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_6__/* .formatCountLong */ .Zl)(this.state.roomCount)
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_pending_rooms", {
      pendingRooms: (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_6__/* .formatCountLong */ .Zl)(this.state.crawlingRoomsCount)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_Field__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      label: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_sleep_time"),
      type: "number",
      value: this.state.crawlerSleepTime.toString(),
      onChange: this.onCrawlerSleepTimeChange
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      className: "mx_ManageEventIndexDialog",
      onFinished: this.props.onFinished,
      title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("settings|security|message_search_section")
    }, eventIndexingSettings, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_views_elements_DialogButtons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      primaryButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|done"),
      onPrimaryButtonClick: this.props.onFinished,
      primaryButtonClass: "primary",
      cancelButton: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|disable"),
      onCancel: this.onDisable,
      cancelButtonClass: "danger"
    }));
  }
}

/***/ }

}]);
//# sourceMappingURL=1686.js.map