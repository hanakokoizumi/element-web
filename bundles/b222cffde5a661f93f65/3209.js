"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[3209],{

/***/ "./src/components/views/location/LocationButton.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ location_LocationButton)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js");
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin.js


function LocationPinIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M12 19.35q3.05-2.8 4.525-5.088Q18 11.976 18 10.2q0-2.725-1.738-4.462Q14.526 4 12 4T7.738 5.737Q6 7.476 6 10.2q0 1.775 1.475 4.063Q8.95 16.549 12 19.35m0 1.975a2.1 2.1 0 0 1-.7-.125 1.8 1.8 0 0 1-.625-.375A39 39 0 0 1 7.8 17.9q-1.25-1.425-2.087-2.762-.838-1.338-1.275-2.575Q4 11.325 4 10.2q0-3.75 2.412-5.975T12 2t5.587 2.225T20 10.2q0 1.125-.437 2.363-.438 1.237-1.275 2.574A22 22 0 0 1 16.2 17.9a39 39 0 0 1-2.875 2.925 1.8 1.8 0 0 1-.625.375 2.1 2.1 0 0 1-.7.125M12 12q.825 0 1.412-.588Q14 10.826 14 10t-.588-1.412A1.93 1.93 0 0 0 12 8q-.825 0-1.412.588A1.93 1.93 0 0 0 10 10q0 .825.588 1.412Q11.175 12 12 12"
    })
  });
}
;
LocationPinIcon.displayName = "LocationPinIcon";
/* harmony default export */ const location_pin = ((0,react.forwardRef)(LocationPinIcon));
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/CollapsibleButton.tsx
var CollapsibleButton = __webpack_require__("./src/components/views/rooms/CollapsibleButton.tsx");
// EXTERNAL MODULE: ./src/components/structures/ContextMenu.tsx + 4 modules
var ContextMenu = __webpack_require__("./src/components/structures/ContextMenu.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/MessageComposerButtons.tsx
var MessageComposerButtons = __webpack_require__("./src/components/views/rooms/MessageComposerButtons.tsx");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/maplibre-gl/dist/maplibre-gl.js
var maplibre_gl = __webpack_require__("../../node_modules/maplibre-gl/dist/maplibre-gl.js");
var maplibre_gl_default = /*#__PURE__*/__webpack_require__.n(maplibre_gl);
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./src/Modal.tsx + 1 modules
var Modal = __webpack_require__("./src/Modal.tsx");
// EXTERNAL MODULE: ./src/utils/WellKnownUtils.ts
var WellKnownUtils = __webpack_require__("./src/utils/WellKnownUtils.ts");
// EXTERNAL MODULE: ./src/utils/beacon/index.ts + 4 modules
var beacon = __webpack_require__("./src/utils/beacon/index.ts");
// EXTERNAL MODULE: ./src/utils/location/index.ts + 5 modules
var utils_location = __webpack_require__("./src/utils/location/index.ts");
// EXTERNAL MODULE: ./src/components/views/dialogs/ErrorDialog.tsx
var ErrorDialog = __webpack_require__("./src/components/views/dialogs/ErrorDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
// EXTERNAL MODULE: ./src/components/views/location/MapError.tsx
var MapError = __webpack_require__("./src/components/views/location/MapError.tsx");
// EXTERNAL MODULE: ./src/DateUtils.ts
var DateUtils = __webpack_require__("./src/DateUtils.ts");
// EXTERNAL MODULE: ./src/components/views/elements/Dropdown.tsx
var Dropdown = __webpack_require__("./src/components/views/elements/Dropdown.tsx");
;// ./src/components/views/location/LiveDurationDropdown.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const DURATION_MS = {
  fifteenMins: 900000,
  oneHour: 3600000,
  eightHours: 28800000
};
const DEFAULT_DURATION_MS = DURATION_MS.fifteenMins;
const getLabel = durationMs => {
  return (0,languageHandler._t)("location_sharing|live_share_button", {
    duration: (0,DateUtils/* formatDuration */.a3)(durationMs)
  });
};
const LiveDurationDropdown = ({
  timeout,
  onChange
}) => {
  const options = Object.values(DURATION_MS).map(duration => ({
    key: duration.toString(),
    duration,
    label: getLabel(duration)
  }));

  // timeout is not one of our default values
  // eg it was set by another client
  if (!Object.values(DURATION_MS).includes(timeout)) {
    options.push({
      key: timeout.toString(),
      duration: timeout,
      label: getLabel(timeout)
    });
  }
  const onOptionChange = key => {
    // stringified value back to number
    onChange(+key);
  };
  return /*#__PURE__*/react.createElement(Dropdown/* default */.A, {
    id: "live-duration",
    "data-testid": "live-duration-dropdown",
    label: getLabel(timeout),
    value: timeout.toString(),
    onOptionChange: onOptionChange,
    className: "mx_LiveDurationDropdown"
  }, options.map(({
    key,
    label
  }) => /*#__PURE__*/react.createElement("div", {
    "data-testid": `live-duration-option-${key}`,
    key: key
  }, label)));
};
/* harmony default export */ const location_LiveDurationDropdown = (LiveDurationDropdown);
// EXTERNAL MODULE: ./src/components/views/dialogs/QuestionDialog.tsx
var QuestionDialog = __webpack_require__("./src/components/views/dialogs/QuestionDialog.tsx");
// EXTERNAL MODULE: ./src/SdkConfig.ts
var SdkConfig = __webpack_require__("./src/SdkConfig.ts");
// EXTERNAL MODULE: ./src/stores/OwnBeaconStore.ts
var OwnBeaconStore = __webpack_require__("./src/stores/OwnBeaconStore.ts");
// EXTERNAL MODULE: ./src/utils/local-room.ts + 1 modules
var local_room = __webpack_require__("./src/utils/local-room.ts");
;// ./src/components/views/location/shareLocation.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









let LocationShareType = /*#__PURE__*/function (LocationShareType) {
  LocationShareType["Own"] = "Own";
  LocationShareType["Pin"] = "Pin";
  LocationShareType["Live"] = "Live";
  return LocationShareType;
}({});
// default duration to 5min for now
const DEFAULT_LIVE_DURATION = 300000;
const getPermissionsErrorParams = shareType => {
  const errorMessage = shareType === LocationShareType.Live ? "Insufficient permissions to start sharing your live location" : "Insufficient permissions to send your location";
  const modalParams = {
    title: (0,languageHandler._t)("location_sharing|error_no_perms_title"),
    description: (0,languageHandler._t)("location_sharing|error_no_perms_description"),
    button: (0,languageHandler._t)("action|ok"),
    hasCancelButton: false,
    onFinished: () => {} // NOOP
  };
  return {
    modalParams,
    errorMessage
  };
};
const getDefaultErrorParams = (shareType, openMenu) => {
  const errorMessage = shareType === LocationShareType.Live ? "We couldn't start sharing your live location" : "We couldn't send your location";
  const modalParams = {
    title: (0,languageHandler._t)("location_sharing|error_send_title"),
    description: (0,languageHandler._t)("location_sharing|error_send_description", {
      brand: SdkConfig/* default */.A.get().brand
    }),
    button: (0,languageHandler._t)("action|try_again"),
    cancelButton: (0,languageHandler._t)("action|cancel"),
    onFinished: tryAgain => {
      if (tryAgain) {
        openMenu();
      }
    }
  };
  return {
    modalParams,
    errorMessage
  };
};
const handleShareError = (error, openMenu, shareType) => {
  const {
    modalParams,
    errorMessage
  } = error.errcode === "M_FORBIDDEN" ? getPermissionsErrorParams(shareType) : getDefaultErrorParams(shareType, openMenu);
  logger/* logger */.vF.error(errorMessage, error);
  Modal/* default */.Ay.createDialog(QuestionDialog/* default */.A, modalParams);
};
const shareLiveLocation = (client, roomId, displayName, openMenu) => async ({
  timeout
}) => {
  const description = (0,languageHandler._t)("location_sharing|live_description", {
    displayName
  });
  try {
    await OwnBeaconStore/* OwnBeaconStore */.g.instance.createLiveBeacon(roomId, matrix.ContentHelpers.makeBeaconInfoContent(timeout !== null && timeout !== void 0 ? timeout : DEFAULT_LIVE_DURATION, true /* isLive */, description, matrix.LocationAssetType.Self));
  } catch (error) {
    handleShareError(error, openMenu, LocationShareType.Live);
  }
};
const shareLocation = (client, roomId, shareType, relation, openMenu) => async ({
  uri,
  timestamp
}) => {
  if (!uri) return;
  try {
    const threadId = (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix.THREAD_RELATION_TYPE.name && (relation === null || relation === void 0 ? void 0 : relation.event_id) || null;
    const assetType = shareType === LocationShareType.Pin ? matrix.LocationAssetType.Pin : matrix.LocationAssetType.Self;
    const content = matrix.ContentHelpers.makeLocationContent(undefined, uri, timestamp, undefined, assetType);
    await (0,local_room/* doMaybeLocalRoomAction */.Y)(roomId, actualRoomId => client.sendMessage(actualRoomId, threadId, content), client);
  } catch (error) {
    handleShareError(error, openMenu, shareType);
  }
};
// EXTERNAL MODULE: ./src/components/views/location/Marker.tsx
var Marker = __webpack_require__("./src/components/views/location/Marker.tsx");
;// ./src/components/views/location/LocationPicker.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

















const isSharingOwnLocation = shareType => shareType === LocationShareType.Own || shareType === LocationShareType.Live;
class LocationPicker extends react.Component {
  constructor(props) {
    super(props);
    (0,defineProperty/* default */.A)(this, "map", void 0);
    (0,defineProperty/* default */.A)(this, "geolocate", void 0);
    (0,defineProperty/* default */.A)(this, "marker", void 0);
    (0,defineProperty/* default */.A)(this, "getMarkerId", () => {
      return "mx_MLocationPicker_marker";
    });
    (0,defineProperty/* default */.A)(this, "addMarkerToMap", () => {
      var _document$getElementB;
      this.marker = new (maplibre_gl_default()).Marker({
        element: (_document$getElementB = document.getElementById(this.getMarkerId())) !== null && _document$getElementB !== void 0 ? _document$getElementB : undefined,
        anchor: "bottom",
        offset: [0, -1]
      }).setLngLat(new (maplibre_gl_default()).LngLat(0, 0)).addTo(this.map);
    });
    (0,defineProperty/* default */.A)(this, "updateStyleUrl", clientWellKnown => {
      var _tileServerFromWellKn;
      const style = (_tileServerFromWellKn = (0,WellKnownUtils/* tileServerFromWellKnown */.XP)(clientWellKnown)) === null || _tileServerFromWellKn === void 0 ? void 0 : _tileServerFromWellKn["map_style_url"];
      if (style) {
        var _this$map;
        (_this$map = this.map) === null || _this$map === void 0 || _this$map.setStyle(style);
      }
    });
    (0,defineProperty/* default */.A)(this, "onGeolocate", position => {
      var _this$marker;
      if (!this.marker) {
        this.addMarkerToMap();
      }
      this.setState({
        position: (0,beacon/* genericPositionFromGeolocation */.v9)(position)
      });
      (_this$marker = this.marker) === null || _this$marker === void 0 || _this$marker.setLngLat(new (maplibre_gl_default()).LngLat(position.coords.longitude, position.coords.latitude));
    });
    (0,defineProperty/* default */.A)(this, "onClick", event => {
      var _this$marker2;
      if (!this.marker) {
        this.addMarkerToMap();
      }
      (_this$marker2 = this.marker) === null || _this$marker2 === void 0 || _this$marker2.setLngLat(event.lngLat);
      this.setState({
        position: {
          timestamp: Date.now(),
          latitude: event.lngLat.lat,
          longitude: event.lngLat.lng
        }
      });
    });
    (0,defineProperty/* default */.A)(this, "onGeolocateError", e => {
      logger/* logger */.vF.error("Could not fetch location", e);
      // close the dialog and show an error when trying to share own location
      // pin drop location without permissions is ok
      if (isSharingOwnLocation(this.props.shareType)) {
        this.props.onFinished();
        Modal/* default */.Ay.createDialog(ErrorDialog/* default */.A, {
          title: (0,languageHandler._t)("location_sharing|error_fetch_location"),
          description: (0,utils_location/* positionFailureMessage */.Ff)(e.code)
        });
      }
      if (this.geolocate) {
        var _this$map2;
        (_this$map2 = this.map) === null || _this$map2 === void 0 || _this$map2.removeControl(this.geolocate);
      }
    });
    (0,defineProperty/* default */.A)(this, "onTimeoutChange", timeout => {
      this.setState({
        timeout
      });
    });
    (0,defineProperty/* default */.A)(this, "onOk", () => {
      const {
        timeout,
        position
      } = this.state;
      this.props.onChoose(position ? {
        uri: (0,beacon/* getGeoUri */.mt)(position),
        timestamp: position.timestamp,
        timeout
      } : {
        timeout
      });
      this.props.onFinished();
    });
    this.state = {
      position: undefined,
      timeout: DEFAULT_DURATION_MS,
      error: undefined
    };
  }
  componentDidMount() {
    this.context.on(matrix.ClientEvent.ClientWellKnown, this.updateStyleUrl);
    try {
      this.map = new (maplibre_gl_default()).Map({
        container: "mx_LocationPicker_map",
        style: (0,utils_location/* findMapStyleUrl */.M0)(this.context),
        center: [0, 0],
        zoom: 1
      });

      // Add geolocate control to the map.
      this.geolocate = new (maplibre_gl_default()).GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      });
      this.map.addControl(this.geolocate);
      this.map.on("error", e => {
        logger/* logger */.vF.error("Failed to load map: check map_style_url in config.json has a valid URL and API key", e.error);
        this.setState({
          error: utils_location/* LocationShareError */.$X.MapStyleUrlNotReachable
        });
      });
      this.map.on("load", () => {
        var _this$geolocate;
        (_this$geolocate = this.geolocate) === null || _this$geolocate === void 0 || _this$geolocate.trigger();
      });
      this.geolocate.on("error", this.onGeolocateError);
      if (isSharingOwnLocation(this.props.shareType)) {
        this.geolocate.on("geolocate", this.onGeolocate);
      }
      if (this.props.shareType === LocationShareType.Pin) {
        const navigationControl = new (maplibre_gl_default()).NavigationControl({
          showCompass: false,
          showZoom: true
        });
        this.map.addControl(navigationControl, "bottom-right");
        this.map.on("click", this.onClick);
      }
    } catch (e) {
      logger/* logger */.vF.error("Failed to render map", e);
      const errorMessage = e === null || e === void 0 ? void 0 : e.message;
      let errorType;
      if (errorMessage === utils_location/* LocationShareError */.$X.MapStyleUrlNotConfigured) errorType = utils_location/* LocationShareError */.$X.MapStyleUrlNotConfigured;else if (errorMessage.includes("Failed to initialize WebGL")) errorType = utils_location/* LocationShareError */.$X.WebGLNotEnabled;else errorType = utils_location/* LocationShareError */.$X.Default;
      this.setState({
        error: errorType
      });
    }
  }
  componentWillUnmount() {
    var _this$geolocate2, _this$geolocate3, _this$map3;
    (_this$geolocate2 = this.geolocate) === null || _this$geolocate2 === void 0 || _this$geolocate2.off("error", this.onGeolocateError);
    (_this$geolocate3 = this.geolocate) === null || _this$geolocate3 === void 0 || _this$geolocate3.off("geolocate", this.onGeolocate);
    (_this$map3 = this.map) === null || _this$map3 === void 0 || _this$map3.off("click", this.onClick);
    this.context.off(matrix.ClientEvent.ClientWellKnown, this.updateStyleUrl);
  }
  render() {
    if (this.state.error) {
      return /*#__PURE__*/react.createElement("div", {
        className: "mx_LocationPicker mx_LocationPicker_hasError"
      }, /*#__PURE__*/react.createElement(MapError/* MapError */.p, {
        error: this.state.error,
        onFinished: this.props.onFinished
      }));
    }
    return /*#__PURE__*/react.createElement("div", {
      className: "mx_LocationPicker"
    }, /*#__PURE__*/react.createElement("div", {
      id: "mx_LocationPicker_map"
    }), this.props.shareType === LocationShareType.Pin && /*#__PURE__*/react.createElement("div", {
      className: "mx_LocationPicker_pinText"
    }, /*#__PURE__*/react.createElement("span", null, this.state.position ? (0,languageHandler._t)("location_sharing|click_move_pin") : (0,languageHandler._t)("location_sharing|click_drop_pin"))), /*#__PURE__*/react.createElement("div", {
      className: "mx_LocationPicker_footer"
    }, /*#__PURE__*/react.createElement("form", {
      onSubmit: this.onOk
    }, this.props.shareType === LocationShareType.Live && /*#__PURE__*/react.createElement(location_LiveDurationDropdown, {
      onChange: this.onTimeoutChange,
      timeout: this.state.timeout
    }), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
      "data-testid": "location-picker-submit-button",
      type: "submit",
      element: "button",
      kind: "primary",
      className: "mx_LocationPicker_submitButton",
      disabled: !this.state.position,
      onClick: this.onOk
    }, (0,languageHandler._t)("location_sharing|share_button")))), /*#__PURE__*/react.createElement("div", {
      id: this.getMarkerId()
    }, !!this.marker && /*#__PURE__*/react.createElement(Marker/* default */.A, {
      roomMember: isSharingOwnLocation(this.props.shareType) ? this.props.sender : undefined,
      useMemberColor: this.props.shareType === LocationShareType.Live
    })));
  }
}
(0,defineProperty/* default */.A)(LocationPicker, "contextType", MatrixClientContext/* default */.Ay);
/* harmony default export */ const location_LocationPicker = (LocationPicker);
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
var icons_close = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js
var chevron_left = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/chevron-left.js");
;// ./src/components/views/location/ShareDialogButtons.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






const ShareDialogButtons = ({
  onBack,
  onCancel,
  displayBack
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_ShareDialogButtons"
  }, displayBack && /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    className: "mx_ShareDialogButtons_button left",
    "data-testid": "share-dialog-buttons-back",
    "aria-label": (0,languageHandler._t)("action|back"),
    onClick: onBack,
    element: "button"
  }, /*#__PURE__*/react.createElement(chevron_left/* default */.A, {
    className: "mx_ShareDialogButtons_button-icon"
  })), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    className: "mx_ShareDialogButtons_button right",
    "data-testid": "share-dialog-buttons-cancel",
    "aria-label": (0,languageHandler._t)("action|close"),
    onClick: onCancel,
    element: "button"
  }, /*#__PURE__*/react.createElement(icons_close/* default */.A, {
    className: "mx_ShareDialogButtons_button-icon"
  })));
};
/* harmony default export */ const location_ShareDialogButtons = (ShareDialogButtons);
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin-solid.js
var location_pin_solid = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin-solid.js");
// EXTERNAL MODULE: ./src/stores/OwnProfileStore.ts
var OwnProfileStore = __webpack_require__("./src/stores/OwnProfileStore.ts");
// EXTERNAL MODULE: ./src/components/views/avatars/BaseAvatar.tsx
var BaseAvatar = __webpack_require__("./src/components/views/avatars/BaseAvatar.tsx");
// EXTERNAL MODULE: ./src/components/views/typography/Heading.tsx
var Heading = __webpack_require__("./src/components/views/typography/Heading.tsx");
// EXTERNAL MODULE: ./src/components/views/beacon/StyledLiveBeaconIcon.tsx
var StyledLiveBeaconIcon = __webpack_require__("./src/components/views/beacon/StyledLiveBeaconIcon.tsx");
;// ./src/components/views/location/ShareType.tsx


const _excluded = ["onClick", "label", "shareType"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











const UserAvatar = () => {
  var _OwnProfileStore$inst, _OwnProfileStore$inst2;
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const userId = matrixClient.getSafeUserId();
  const displayName = (_OwnProfileStore$inst = OwnProfileStore/* OwnProfileStore */.V.instance.displayName) !== null && _OwnProfileStore$inst !== void 0 ? _OwnProfileStore$inst : undefined;
  // 40 - 2px border
  const avatarSize = "36px";
  const avatarUrl = (_OwnProfileStore$inst2 = OwnProfileStore/* OwnProfileStore */.V.instance.getHttpAvatarUrl(parseInt(avatarSize, 10))) !== null && _OwnProfileStore$inst2 !== void 0 ? _OwnProfileStore$inst2 : undefined;
  return /*#__PURE__*/react.createElement("div", {
    className: `mx_ShareType_option-icon ${LocationShareType.Own}`
  }, /*#__PURE__*/react.createElement(BaseAvatar/* default */.A, {
    idName: userId,
    name: displayName,
    url: avatarUrl,
    size: avatarSize,
    className: "mx_UserMenu_userAvatar_BaseAvatar"
  }));
};
const ShareTypeOption = _ref => {
  let {
      onClick,
      label,
      shareType
    } = _ref,
    rest = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  return /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, (0,esm_extends/* default */.A)({
    element: "button",
    className: "mx_ShareType_option",
    onClick: onClick !== null && onClick !== void 0 ? onClick : null
  }, rest), shareType === LocationShareType.Own && /*#__PURE__*/react.createElement(UserAvatar, null), shareType === LocationShareType.Pin && /*#__PURE__*/react.createElement(location_pin_solid/* default */.A, {
    className: `mx_ShareType_option-icon ${LocationShareType.Pin}`
  }), shareType === LocationShareType.Live && /*#__PURE__*/react.createElement(StyledLiveBeaconIcon/* default */.A, {
    className: `mx_ShareType_option-icon ${LocationShareType.Live}`
  }), label);
};
const ShareType = ({
  setShareType,
  enabledShareTypes
}) => {
  const labels = {
    [LocationShareType.Own]: (0,languageHandler._t)("location_sharing|share_type_own"),
    [LocationShareType.Live]: (0,languageHandler._t)("location_sharing|share_type_live"),
    [LocationShareType.Pin]: (0,languageHandler._t)("location_sharing|share_type_pin")
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_ShareType"
  }, /*#__PURE__*/react.createElement(location_pin_solid/* default */.A, {
    className: "mx_ShareType_badge"
  }), /*#__PURE__*/react.createElement(Heading/* default */.A, {
    className: "mx_ShareType_heading",
    size: "3"
  }, (0,languageHandler._t)("location_sharing|share_type_prompt")), /*#__PURE__*/react.createElement("div", {
    className: "mx_ShareType_wrapper_options"
  }, enabledShareTypes.map(type => /*#__PURE__*/react.createElement(ShareTypeOption, {
    key: type,
    onClick: () => setShareType(type),
    label: labels[type],
    shareType: type,
    "data-testid": `share-location-option-${type}`
  }))));
};
/* harmony default export */ const location_ShareType = (ShareType);
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Form/Root.js
var Root = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Form/Root.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/SettingsToggle/SettingsToggle.js
var SettingsToggle = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/SettingsToggle/SettingsToggle.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Button/Button.js");
;// ./src/components/views/location/EnableLiveShare.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






const EnableLiveShare = ({
  onSubmit
}) => {
  const [isEnabled, setEnabled] = (0,react.useState)(false);
  const onEnabledChanged = (0,react.useCallback)(e => setEnabled(e.target.checked), [setEnabled]);
  const onSubmitForm = (0,react.useCallback)(evt => {
    evt.preventDefault();
    evt.stopPropagation();
    if (isEnabled) {
      onSubmit();
    }
  }, [isEnabled, onSubmit]);
  return /*#__PURE__*/react.createElement("div", {
    "data-testid": "location-picker-enable-live-share",
    className: "mx_EnableLiveShare"
  }, /*#__PURE__*/react.createElement(StyledLiveBeaconIcon/* default */.A, {
    className: "mx_EnableLiveShare_icon"
  }), /*#__PURE__*/react.createElement(Heading/* default */.A, {
    className: "mx_EnableLiveShare_heading",
    size: "3"
  }, (0,languageHandler._t)("location_sharing|live_enable_heading")), /*#__PURE__*/react.createElement("p", {
    className: "mx_EnableLiveShare_description"
  }, (0,languageHandler._t)("location_sharing|live_enable_description")), /*#__PURE__*/react.createElement(Root/* Root */.b, {
    onSubmit: onSubmitForm
  }, /*#__PURE__*/react.createElement(SettingsToggle/* SettingsToggleInput */.I, {
    name: "enable-live-share-toggle",
    checked: isEnabled,
    onChange: onEnabledChanged,
    label: (0,languageHandler._t)("location_sharing|live_toggle_label")
  }), /*#__PURE__*/react.createElement(Button/* Button */.$, {
    className: "mx_EnableLiveShare_button",
    kind: "primary",
    disabled: !isEnabled
  }, (0,languageHandler._t)("action|ok"))));
};
// EXTERNAL MODULE: ./src/hooks/useSettings.ts
var useSettings = __webpack_require__("./src/hooks/useSettings.ts");
// EXTERNAL MODULE: ./src/settings/SettingLevel.ts
var SettingLevel = __webpack_require__("./src/settings/SettingLevel.ts");
;// ./src/components/views/location/LocationShareMenu.tsx

/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/













const getEnabledShareTypes = relation => {
  const enabledShareTypes = [LocationShareType.Own];

  // live locations cannot have a relation
  // hide the option when composer has a relation
  if (!relation) {
    enabledShareTypes.push(LocationShareType.Live);
  }
  enabledShareTypes.push(LocationShareType.Pin);
  return enabledShareTypes;
};
const LocationShareMenu = ({
  menuPosition,
  onFinished,
  sender,
  roomId,
  openMenu,
  relation
}) => {
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const enabledShareTypes = getEnabledShareTypes(relation);
  const isLiveShareEnabled = (0,useSettings/* useFeatureEnabled */.ny)("feature_location_share_live");
  const multipleShareTypesEnabled = enabledShareTypes.length > 1;
  const [shareType, setShareType] = (0,react.useState)(multipleShareTypesEnabled ? undefined : LocationShareType.Own);
  const displayName = OwnProfileStore/* OwnProfileStore */.V.instance.displayName;
  const userId = matrixClient.getSafeUserId();
  const onLocationSubmit = shareType === LocationShareType.Live ? shareLiveLocation(matrixClient, roomId, displayName || userId, openMenu) : shareLocation(matrixClient, roomId, shareType !== null && shareType !== void 0 ? shareType : LocationShareType.Own, relation, openMenu);
  const onLiveShareEnableSubmit = () => {
    SettingsStore/* default */.A.setValue("feature_location_share_live", null, SettingLevel/* SettingLevel */.p.DEVICE, true);
  };
  const shouldAdvertiseLiveLabsFlag = shareType === LocationShareType.Live && !isLiveShareEnabled;
  return /*#__PURE__*/react.createElement(ContextMenu/* default */.Ay, (0,esm_extends/* default */.A)({}, menuPosition, {
    onFinished: onFinished,
    managed: false
  }), /*#__PURE__*/react.createElement("div", {
    className: "mx_LocationShareMenu"
  }, shouldAdvertiseLiveLabsFlag && /*#__PURE__*/react.createElement(EnableLiveShare, {
    onSubmit: onLiveShareEnableSubmit
  }), !shouldAdvertiseLiveLabsFlag && !!shareType && /*#__PURE__*/react.createElement(location_LocationPicker, {
    sender: sender,
    shareType: shareType,
    onChoose: onLocationSubmit,
    onFinished: onFinished
  }), !shareType && /*#__PURE__*/react.createElement(location_ShareType, {
    setShareType: setShareType,
    enabledShareTypes: enabledShareTypes
  }), /*#__PURE__*/react.createElement(location_ShareDialogButtons, {
    displayBack: !!shareType && multipleShareTypesEnabled,
    onBack: () => setShareType(undefined),
    onCancel: onFinished
  })));
};
/* harmony default export */ const location_LocationShareMenu = (LocationShareMenu);
;// ./src/components/views/location/LocationButton.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









const LocationButton = ({
  roomId,
  sender,
  menuPosition,
  relation
}) => {
  const overflowMenuCloser = (0,react.useContext)(MessageComposerButtons/* OverflowMenuContext */.ZF);
  const [menuDisplayed, button, openMenu, closeMenu] = (0,ContextMenu/* useContextMenu */.EF)();
  const _onFinished = ev => {
    closeMenu(ev);
    overflowMenuCloser === null || overflowMenuCloser === void 0 || overflowMenuCloser();
  };
  let contextMenu = null;
  if (menuDisplayed) {
    var _ref;
    const position = (_ref = menuPosition !== null && menuPosition !== void 0 ? menuPosition : button.current && (0,ContextMenu/* aboveLeftOf */.qv)(button.current.getBoundingClientRect())) !== null && _ref !== void 0 ? _ref : {};
    contextMenu = /*#__PURE__*/react.createElement(location_LocationShareMenu, {
      menuPosition: position,
      onFinished: _onFinished,
      sender: sender,
      roomId: roomId,
      openMenu: openMenu,
      relation: relation
    });
  }
  const className = classnames_default()("mx_MessageComposer_button", {
    mx_MessageComposer_button_highlight: menuDisplayed
  });
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(CollapsibleButton/* CollapsibleButton */.J, {
    className: className,
    onClick: openMenu,
    title: (0,languageHandler._t)("common|location"),
    inputRef: button
  }, /*#__PURE__*/react.createElement(location_pin, null)), contextMenu);
};
/* harmony default export */ const location_LocationButton = (LocationButton);

/***/ },

/***/ "./src/components/views/location/Marker.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons_location_pin_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/location-pin-solid.js");
/* harmony import */ var _utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/FormattingUtils.ts");
/* harmony import */ var _avatars_MemberAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/avatars/MemberAvatar.tsx");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/**
 * Wrap with tooltip handlers when
 * tooltip is truthy
 */
const OptionalTooltip = ({
  tooltip,
  children
}) => {
  const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  if (!tooltip) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
  }
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  const toggleVisibility = e => {
    // stop map from zooming in on click
    e.stopPropagation();
    setIsVisible(!isVisible);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onMouseEnter: show,
    onClick: toggleVisibility,
    onMouseLeave: hide
  }, children, isVisible && tooltip);
};

/**
 * Generic location marker
 */
const Marker = ({
  id,
  roomMember,
  useMemberColor,
  tooltip,
  ref
}) => {
  const memberColorClass = useMemberColor && roomMember ? (0,_utils_FormattingUtils__WEBPACK_IMPORTED_MODULE_3__/* .getUserNameColorClass */ .yJ)(roomMember.userId) : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: ref,
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mx_Marker", memberColorClass, {
      mx_Marker_defaultColor: !memberColorClass
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OptionalTooltip, {
    tooltip: tooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx_Marker_border"
  }, roomMember ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_avatars_MemberAvatar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    member: roomMember,
    size: "36px",
    viewUserOnClick: false
    // no mxid on hover when marker has tooltip
    ,
    hideTitle: !!tooltip
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vector_im_compound_design_tokens_assets_web_icons_location_pin_solid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    className: "mx_Marker_icon"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marker);

/***/ },

/***/ "./src/components/views/rooms/CollapsibleButton.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ CollapsibleButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
/* harmony import */ var _MessageComposerButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/rooms/MessageComposerButtons.tsx");
/* harmony import */ var _context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/views/context_menus/IconizedContextMenu.tsx");


const _excluded = ["title", "children", "className", "inputRef"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const CollapsibleButton = _ref => {
  let {
      title,
      children,
      className,
      inputRef
    } = _ref,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref, _excluded);
  const inOverflowMenu = !!(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_MessageComposerButtons__WEBPACK_IMPORTED_MODULE_4__/* .OverflowMenuContext */ .ZF);
  if (inOverflowMenu) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_5__/* .IconizedContextMenuOption */ .R$, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, props, {
      icon: children,
      label: title,
      inputRef: inputRef
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, props, {
    title: title,
    className: className,
    ref: inputRef
  }), children);
};

/***/ },

/***/ "./src/components/views/rooms/EmojiButton.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ EmojiButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _structures_ContextMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/structures/ContextMenu.tsx");
/* harmony import */ var _emojipicker_EmojiPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/views/emojipicker/EmojiPicker.tsx");
/* harmony import */ var _CollapsibleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/views/rooms/CollapsibleButton.tsx");
/* harmony import */ var _MessageComposerButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/views/rooms/MessageComposerButtons.tsx");

/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









function EmojiButton({
  addEmoji,
  menuPosition,
  className
}) {
  const overflowMenuCloser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_MessageComposerButtons__WEBPACK_IMPORTED_MODULE_8__/* .OverflowMenuContext */ .ZF);
  const [menuDisplayed, button, openMenu, closeMenu] = (0,_structures_ContextMenu__WEBPACK_IMPORTED_MODULE_5__/* .useContextMenu */ .EF)();
  let contextMenu = null;
  if (menuDisplayed && button.current) {
    const position = menuPosition !== null && menuPosition !== void 0 ? menuPosition : (0,_structures_ContextMenu__WEBPACK_IMPORTED_MODULE_5__/* .aboveLeftOf */ .qv)(button.current.getBoundingClientRect());
    const onFinished = () => {
      closeMenu();
      overflowMenuCloser === null || overflowMenuCloser === void 0 || overflowMenuCloser();
    };
    contextMenu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_structures_ContextMenu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, position, {
      onFinished: onFinished,
      managed: false,
      focusLock: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_emojipicker_EmojiPicker__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, {
      onChoose: addEmoji,
      onFinished: onFinished
    }));
  }
  const computedClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()("mx_EmojiButton", className, {
    mx_EmojiButton_highlight: menuDisplayed
  });

  // TODO: replace ContextMenuTooltipButton with a unified representation of
  // the header buttons and the right panel buttons
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CollapsibleButton__WEBPACK_IMPORTED_MODULE_7__/* .CollapsibleButton */ .J, {
    className: computedClassName,
    onClick: openMenu,
    title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_4__._t)("common|emoji"),
    inputRef: button
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)), contextMenu);
}

/***/ },

/***/ "./src/components/views/rooms/MessageComposerButtons.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ZF: () => (/* binding */ OverflowMenuContext)
/* harmony export */ });
/* unused harmony export UploadButtonContext */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/attachment.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mic-on.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/polls.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/sticker.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/text-formatting.js");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _CollapsibleButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/components/views/rooms/CollapsibleButton.tsx");
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/dispatcher/dispatcher.ts");
/* harmony import */ var _dialogs_ErrorDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/components/views/dialogs/ErrorDialog.tsx");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/components/views/location/index.tsx");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/Modal.tsx");
/* harmony import */ var _elements_PollCreateDialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/components/views/elements/PollCreateDialog.tsx");
/* harmony import */ var _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/MatrixClientPeg.ts");
/* harmony import */ var _ContentMessages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/ContentMessages.ts");
/* harmony import */ var _contexts_MatrixClientContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
/* harmony import */ var _hooks_useDispatcher__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/hooks/useDispatcher.ts");
/* harmony import */ var _utils_BrowserWorkarounds__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/utils/BrowserWorkarounds.ts");
/* harmony import */ var _context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/components/views/context_menus/IconizedContextMenu.tsx");
/* harmony import */ var _EmojiButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/components/views/rooms/EmojiButton.tsx");
/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/utils/arrays.ts");
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./src/hooks/useSettings.ts");
/* harmony import */ var _elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
/* harmony import */ var _contexts_ScopedRoomContext_tsx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./src/contexts/ScopedRoomContext.tsx");


/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/























const OverflowMenuContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)(null);
const MessageComposerButtons = props => {
  const matrixClient = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_MatrixClientContext__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay);
  const {
    room,
    narrow
  } = (0,_contexts_ScopedRoomContext_tsx__WEBPACK_IMPORTED_MODULE_28__/* .useScopedRoomContext */ .ME)("room", "narrow");
  const isWysiwygLabEnabled = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_26__/* .useSettingValue */ .ti)("feature_wysiwyg_composer");
  if (!matrixClient || !room || props.haveRecording) {
    return null;
  }
  let mainButtons;
  let moreButtons;
  if (narrow) {
    mainButtons = [isWysiwygLabEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ComposerModeButton, {
      key: "composerModeButton",
      isRichTextEnabled: props.isRichTextEnabled,
      onClick: props.onComposerModeClick
    }) : emojiButton(props)];
    moreButtons = [uploadButton(),
    // props passed via UploadButtonContext
    showStickersButton(props), voiceRecordingButton(props, narrow), props.showPollsButton ? pollButton(room, props.relation) : null, showLocationButton(props, room, matrixClient)];
  } else {
    mainButtons = [isWysiwygLabEnabled ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ComposerModeButton, {
      key: "composerModeButton",
      isRichTextEnabled: props.isRichTextEnabled,
      onClick: props.onComposerModeClick
    }) : emojiButton(props), uploadButton() // props passed via UploadButtonContext
    ];
    moreButtons = [showStickersButton(props), voiceRecordingButton(props, narrow), props.showPollsButton ? pollButton(room, props.relation) : null, showLocationButton(props, room, matrixClient)];
  }
  mainButtons = (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_25__/* .filterBoolean */ .Bo)(mainButtons);
  moreButtons = (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_25__/* .filterBoolean */ .Bo)(moreButtons);
  const moreOptionsClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    mx_MessageComposer_button: true,
    mx_MessageComposer_buttonMenu: true,
    mx_MessageComposer_closeButtonMenu: props.isMenuOpen
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(UploadButtonContextProvider, {
    roomId: room.roomId,
    relation: props.relation
  }, mainButtons, moreButtons.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A, {
    className: moreOptionsClasses,
    onClick: props.toggleButtonMenu,
    title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("quick_settings|sidebar_settings")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null)), props.isMenuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Ay, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    onFinished: props.toggleButtonMenu
  }, props.menuPosition, {
    wrapperClassName: "mx_MessageComposer_Menu",
    compact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(OverflowMenuContext.Provider, {
    value: props.toggleButtonMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_context_menus_IconizedContextMenu__WEBPACK_IMPORTED_MODULE_23__/* .IconizedContextMenuOptionList */ .tx, null, moreButtons))));
};
function emojiButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_EmojiButton__WEBPACK_IMPORTED_MODULE_24__/* .EmojiButton */ .h, {
    key: "emoji_button",
    addEmoji: props.addEmoji,
    menuPosition: props.menuPosition,
    className: "mx_MessageComposer_button"
  });
}
function uploadButton() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(UploadButton, {
    key: "controls_upload"
  });
}
const UploadButtonContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)(null);
// We put the file input outside the UploadButton component so that it doesn't get killed when the context menu closes.
const UploadButtonContextProvider = ({
  roomId,
  relation,
  children
}) => {
  const cli = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_MatrixClientContext__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Ay);
  const roomContext = (0,_contexts_ScopedRoomContext_tsx__WEBPACK_IMPORTED_MODULE_28__/* .useScopedRoomContext */ .ME)("timelineRenderingType", "replyToEvent");
  const uploadInput = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const onUploadClick = () => {
    var _uploadInput$current;
    if (cli !== null && cli !== void 0 && cli.isGuest()) {
      _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.dispatch({
        action: "require_registration"
      });
      return;
    }
    (_uploadInput$current = uploadInput.current) === null || _uploadInput$current === void 0 || _uploadInput$current.click();
  };
  (0,_hooks_useDispatcher__WEBPACK_IMPORTED_MODULE_21__/* .useDispatcher */ .F)(_dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, payload => {
    if (roomContext.timelineRenderingType === payload.context && payload.action === "upload_file") {
      onUploadClick();
    }
  });
  const onUploadFileInputChange = ev => {
    var _ev$target$files;
    if (((_ev$target$files = ev.target.files) === null || _ev$target$files === void 0 ? void 0 : _ev$target$files.length) === 0) return;

    // Take a copy, so we can safely reset the value of the form control
    _ContentMessages__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Ay.sharedInstance().sendContentListToRoom(Array.from(ev.target.files), roomId, relation, roomContext.replyToEvent, cli, roomContext.timelineRenderingType);

    // This is the onChange handler for a file form control, but we're
    // not keeping any state, so reset the value of the form control
    // to empty.
    // NB. we need to set 'value': the 'files' property is immutable.
    ev.target.value = "";
  };
  const uploadInputStyle = {
    display: "none"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(UploadButtonContext.Provider, {
    value: onUploadClick
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
    ref: uploadInput,
    type: "file",
    style: uploadInputStyle,
    multiple: true,
    onClick: _utils_BrowserWorkarounds__WEBPACK_IMPORTED_MODULE_22__/* .chromeFileInputFix */ .e,
    onChange: onUploadFileInputChange
  }));
};

// Must be rendered within an UploadButtonContextProvider
const UploadButton = () => {
  const overflowMenuCloser = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(OverflowMenuContext);
  const uploadButtonFn = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(UploadButtonContext);
  const onClick = () => {
    uploadButtonFn === null || uploadButtonFn === void 0 || uploadButtonFn();
    overflowMenuCloser === null || overflowMenuCloser === void 0 || overflowMenuCloser(); // close overflow menu
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollapsibleButton__WEBPACK_IMPORTED_MODULE_12__/* .CollapsibleButton */ .J, {
    className: "mx_MessageComposer_button",
    onClick: onClick,
    title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("common|attachment")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null));
};
function showStickersButton(props) {
  return props.showStickersButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollapsibleButton__WEBPACK_IMPORTED_MODULE_12__/* .CollapsibleButton */ .J, {
    id: "stickersButton",
    key: "controls_stickers",
    className: "mx_MessageComposer_button",
    onClick: () => props.setStickerPickerOpen(!props.isStickerPickerOpen),
    title: props.isStickerPickerOpen ? (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|close_sticker_picker") : (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("common|sticker")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null)) : null;
}
function voiceRecordingButton(props, narrow) {
  // XXX: recording UI does not work well in narrow mode, so hide for now
  return narrow ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollapsibleButton__WEBPACK_IMPORTED_MODULE_12__/* .CollapsibleButton */ .J, {
    key: "voice_message_send",
    className: "mx_MessageComposer_button",
    onClick: props.onRecordStartEndClick,
    title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|voice_message_button")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null));
}
function pollButton(room, relation) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(PollButton, {
    key: "polls",
    room: room,
    relation: relation
  });
}
class PollButton extends react__WEBPACK_IMPORTED_MODULE_4__.PureComponent {
  constructor(...args) {
    super(...args);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onCreateClick", () => {
      var _this$context;
      (_this$context = this.context) === null || _this$context === void 0 || _this$context.call(this); // close overflow menu
      const canSend = this.props.room.currentState.maySendEvent(matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_3__.M_POLL_START.name, _MatrixClientPeg__WEBPACK_IMPORTED_MODULE_18__/* .MatrixClientPeg */ .J.safeGet().getSafeUserId());
      if (!canSend) {
        _Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay.createDialog(_dialogs_ErrorDialog__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
          title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|poll_button_no_perms_title"),
          description: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|poll_button_no_perms_description")
        });
      } else {
        var _this$props$relation;
        const threadId = ((_this$props$relation = this.props.relation) === null || _this$props$relation === void 0 ? void 0 : _this$props$relation.rel_type) === matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_3__.THREAD_RELATION_TYPE.name ? this.props.relation.event_id : undefined;
        _Modal__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay.createDialog(_elements_PollCreateDialog__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          room: this.props.room,
          threadId
        }, "mx_CompoundDialog", false,
        // isPriorityModal
        true // isStaticModal
        );
      }
    });
  }
  render() {
    var _this$props$relation2;
    // do not allow sending polls within threads at this time
    if (((_this$props$relation2 = this.props.relation) === null || _this$props$relation2 === void 0 ? void 0 : _this$props$relation2.rel_type) === matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_3__.THREAD_RELATION_TYPE.name) return null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollapsibleButton__WEBPACK_IMPORTED_MODULE_12__/* .CollapsibleButton */ .J, {
      className: "mx_MessageComposer_button",
      onClick: this.onCreateClick,
      title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|poll_button")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null));
  }
}
(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(PollButton, "contextType", OverflowMenuContext);
function showLocationButton(props, room, matrixClient) {
  const sender = room.getMember(matrixClient.getSafeUserId());
  return props.showLocationButton && sender ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_location__WEBPACK_IMPORTED_MODULE_15__/* .LocationButton */ .Uo, {
    key: "location",
    roomId: room.roomId,
    relation: props.relation,
    sender: sender,
    menuPosition: props.menuPosition
  }) : null;
}
function ComposerModeButton({
  isRichTextEnabled,
  onClick
}) {
  const title = isRichTextEnabled ? (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|mode_plain") : (0,_languageHandler__WEBPACK_IMPORTED_MODULE_11__._t)("composer|mode_rich_text");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_CollapsibleButton__WEBPACK_IMPORTED_MODULE_12__/* .CollapsibleButton */ .J, {
    className: "mx_MessageComposer_button",
    onClick: onClick,
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageComposerButtons);

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mic-on.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function MicOnIcon(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 12a1 1 0 1 0-2 0 8 8 0 0 0 7 7.938V21a1 1 0 1 0 2 0v-1.062A8 8 0 0 0 20 12a1 1 0 1 0-2 0 6 6 0 0 1-12 0"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      d: "M14 12V6a2 2 0 1 0-4 0v6a2 2 0 1 0 4 0M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4",
      clipRule: "evenodd"
    })]
  });
}
;
MicOnIcon.displayName = "MicOnIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MicOnIcon));

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/reaction.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function ReactionIcon(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.536 15.536a1 1 0 0 0-1.415-1.415 3 3 0 0 1-2.12.879 3 3 0 0 1-2.122-.879 1 1 0 1 0-1.414 1.415A5 5 0 0 0 12 17c1.38 0 2.632-.56 3.536-1.464M10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0"
    })]
  });
}
;
ReactionIcon.displayName = "ReactionIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(ReactionIcon));

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/sticker.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function StickerIcon(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      fillRule: "evenodd",
      d: "M17 2a5 5 0 0 1 5 4.999v5.335a5 5 0 0 1-1.58 3.647l-4.978 4.667A5 5 0 0 1 12.023 22H7l-.258-.007A5 5 0 0 1 2 17V7a5 5 0 0 1 5-5zM7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 2.999 3H12v-4a4 4 0 0 1 4-4h4V6.999A3 3 0 0 0 17 4zm9 10a2 2 0 0 0-2 2v3.251l.074-.062 4.978-4.666q.252-.238.441-.523z",
      clipRule: "evenodd"
    })
  });
}
;
StickerIcon.displayName = "StickerIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(StickerIcon));

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/text-formatting.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function TextFormattingIcon(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 18q0-.424.287-.712A.97.97 0 0 1 6 17h12q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 18 19zm1.35-5.2 3.425-9.2a.9.9 0 0 1 .338-.437A.93.93 0 0 1 11.65 4h.7q.3 0 .537.162.238.163.338.438l3.425 9.225q.15.425-.1.8a.8.8 0 0 1-.7.375.9.9 0 0 1-.512-.162A.9.9 0 0 1 15 14.4l-.75-2.2H9.8L9 14.425a.84.84 0 0 1-.325.425q-.225.15-.5.15a.84.84 0 0 1-.738-.387.82.82 0 0 1-.087-.813m3-3.2h3.3l-1.6-4.55h-.1z"
    })
  });
}
;
TextFormattingIcon.displayName = "TextFormattingIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(TextFormattingIcon));

/***/ }

}]);
//# sourceMappingURL=3209.js.map