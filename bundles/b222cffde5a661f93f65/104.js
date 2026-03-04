"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[104,8068],{

/***/ "./src/components/views/beacon/BeaconViewDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ beacon_BeaconViewDialog)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ./res/img/location/live-location.svg
var live_location = __webpack_require__("./res/img/location/live-location.svg");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./src/hooks/useEventEmitter.ts
var useEventEmitter = __webpack_require__("./src/hooks/useEventEmitter.ts");
;// ./src/utils/beacon/useLiveBeacons.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




/**
 * Returns an array of all live beacon ids for a given room
 *
 * Beacons are removed from array when they become inactive
 */
const useLiveBeacons = (roomId, matrixClient) => {
  const room = matrixClient.getRoom(roomId);
  const liveBeacons = (0,useEventEmitter/* useEventEmitterState */.dF)(room === null || room === void 0 ? void 0 : room.currentState, matrix.RoomStateEvent.BeaconLiveness, () => {
    var _room$currentState;
    return (room === null || room === void 0 || (_room$currentState = room.currentState) === null || _room$currentState === void 0 ? void 0 : _room$currentState.liveBeaconIds.map(beaconIdentifier => room.currentState.beacons.get(beaconIdentifier))) || [];
  });
  return liveBeacons;
};
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ./src/components/views/dialogs/BaseDialog.tsx
var BaseDialog = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/location/Map.tsx + 1 modules
var Map = __webpack_require__("./src/components/views/location/Map.tsx");
// EXTERNAL MODULE: ./src/components/views/location/ZoomButtons.tsx
var ZoomButtons = __webpack_require__("./src/components/views/location/ZoomButtons.tsx");
// EXTERNAL MODULE: ./src/components/views/location/index.tsx
var views_location = __webpack_require__("./src/components/views/location/index.tsx");
;// ./src/components/views/beacon/BeaconMarker.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/**
 * Updates a map SmartMarker with latest location from given beacon
 */
const BeaconMarker = ({
  map,
  beacon,
  tooltip
}) => {
  var _beacon$beaconInfo;
  const latestLocationState = (0,useEventEmitter/* useEventEmitterState */.dF)(beacon, matrix.BeaconEvent.LocationUpdate, () => beacon.latestLocationState);
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const room = matrixClient.getRoom(beacon.roomId);
  if (!latestLocationState || !beacon.isLive) {
    return null;
  }
  const geoUri = latestLocationState.uri || "";
  const assetTypeIsSelf = ((_beacon$beaconInfo = beacon.beaconInfo) === null || _beacon$beaconInfo === void 0 ? void 0 : _beacon$beaconInfo.assetType) === matrix.LocationAssetType.Self;
  const _member = room === null || room === void 0 ? void 0 : room.getMember(beacon.beaconInfoOwner);
  const markerRoomMember = assetTypeIsSelf && _member ? _member : undefined;
  return /*#__PURE__*/react.createElement(views_location/* SmartMarker */.U3, {
    map: map,
    id: beacon.identifier,
    geoUri: geoUri,
    roomMember: markerRoomMember,
    tooltip: tooltip,
    useMemberColor: true
  });
};
/* harmony default export */ const beacon_BeaconMarker = (BeaconMarker);
// EXTERNAL MODULE: ./src/utils/arrays.ts
var arrays = __webpack_require__("./src/utils/arrays.ts");
// EXTERNAL MODULE: ./src/utils/location/index.ts + 5 modules
var utils_location = __webpack_require__("./src/utils/location/index.ts");
;// ./src/utils/beacon/bounds.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Get the geo bounds of given list of beacons
 *
 * Latitude:
 * equator: 0, North pole: 90, South pole -90
 * Longitude:
 * Prime Meridian (Greenwich): 0
 * east of Greenwich has a positive longitude, max 180
 * west of Greenwich has a negative longitude, min -180
 */
const getBeaconBounds = beacons => {
  const coords = (0,arrays/* filterBoolean */.Bo)(beacons.map(beacon => {
    var _beacon$latestLocatio;
    return !!((_beacon$latestLocatio = beacon.latestLocationState) !== null && _beacon$latestLocatio !== void 0 && _beacon$latestLocatio.uri) ? (0,utils_location/* parseGeoUri */.XB)(beacon.latestLocationState.uri) : undefined;
  }));
  if (!coords.length) {
    return;
  }

  // sort descending
  const sortedByLat = [...coords].sort((left, right) => right.latitude - left.latitude);
  const sortedByLong = [...coords].sort((left, right) => right.longitude - left.longitude);
  if (sortedByLat.length < 1 || sortedByLong.length < 1) return;
  return {
    north: sortedByLat[0].latitude,
    south: sortedByLat[sortedByLat.length - 1].latitude,
    east: sortedByLong[0].longitude,
    west: sortedByLong[sortedByLong.length - 1].longitude
  };
};
// EXTERNAL MODULE: ./src/utils/beacon/index.ts + 4 modules
var beacon = __webpack_require__("./src/utils/beacon/index.ts");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js
var icons_close = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/close.js");
// EXTERNAL MODULE: ./src/components/views/typography/Heading.tsx
var Heading = __webpack_require__("./src/components/views/typography/Heading.tsx");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../packages/shared-components/dist/element-web-shared-components.js
var element_web_shared_components = __webpack_require__("../../packages/shared-components/dist/element-web-shared-components.js");
// EXTERNAL MODULE: ./src/utils/NativeEventUtils.ts
var NativeEventUtils = __webpack_require__("./src/utils/NativeEventUtils.ts");
// EXTERNAL MODULE: ./src/components/views/avatars/MemberAvatar.tsx
var MemberAvatar = __webpack_require__("./src/components/views/avatars/MemberAvatar.tsx");
// EXTERNAL MODULE: ./src/components/views/beacon/BeaconStatus.tsx + 1 modules
var BeaconStatus = __webpack_require__("./src/components/views/beacon/BeaconStatus.tsx");
// EXTERNAL MODULE: ./src/components/views/beacon/displayStatus.ts
var displayStatus = __webpack_require__("./src/components/views/beacon/displayStatus.ts");
// EXTERNAL MODULE: ./src/components/views/beacon/StyledLiveBeaconIcon.tsx
var StyledLiveBeaconIcon = __webpack_require__("./src/components/views/beacon/StyledLiveBeaconIcon.tsx");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Tooltip/Tooltip.js + 3 modules
var Tooltip = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Tooltip/Tooltip.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pop-out.js
var pop_out = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pop-out.js");
// EXTERNAL MODULE: ./src/components/views/elements/CopyableText.tsx
var CopyableText = __webpack_require__("./src/components/views/elements/CopyableText.tsx");
;// ./src/components/views/beacon/ShareLatestLocation.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







const ShareLatestLocation = ({
  latestLocationState
}) => {
  const [coords, setCoords] = (0,react.useState)();
  (0,react.useEffect)(() => {
    if (!(latestLocationState !== null && latestLocationState !== void 0 && latestLocationState.uri)) {
      return;
    }
    const coords = (0,utils_location/* parseGeoUri */.XB)(latestLocationState.uri);
    setCoords(coords);
  }, [latestLocationState]);
  if (!latestLocationState || !coords) {
    return null;
  }
  const latLonString = `${coords.latitude},${coords.longitude}`;
  const mapLink = (0,utils_location/* makeMapSiteLink */.eC)(coords);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Tooltip/* Tooltip */.m, {
    label: (0,languageHandler._t)("timeline|context_menu|open_in_osm")
  }, /*#__PURE__*/react.createElement("a", {
    "data-testid": "open-location-in-osm",
    href: mapLink,
    target: "_blank",
    rel: "noreferrer noopener"
  }, /*#__PURE__*/react.createElement(pop_out/* default */.A, {
    className: "mx_ShareLatestLocation_icon"
  }))), /*#__PURE__*/react.createElement(CopyableText/* default */.A, {
    className: "mx_ShareLatestLocation_copy",
    border: false,
    getTextToCopy: () => latLonString
  }));
};
/* harmony default export */ const beacon_ShareLatestLocation = (ShareLatestLocation);
;// ./src/components/views/beacon/BeaconListItem.tsx


const _excluded = ["beacon"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/













const BeaconListItem = _ref => {
  var _beacon$beaconInfo, _beacon$beaconInfo2;
  let {
      beacon
    } = _ref,
    rest = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  const latestLocationState = (0,useEventEmitter/* useEventEmitterState */.dF)(beacon, matrix.BeaconEvent.LocationUpdate, () => beacon.latestLocationState);
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const room = matrixClient.getRoom(beacon.roomId);
  if (!latestLocationState || !beacon.isLive || !room) {
    return null;
  }
  const isSelfLocation = ((_beacon$beaconInfo = beacon.beaconInfo) === null || _beacon$beaconInfo === void 0 ? void 0 : _beacon$beaconInfo.assetType) === matrix.LocationAssetType.Self;
  const beaconMember = isSelfLocation ? room.getMember(beacon.beaconInfoOwner) : null;
  const humanizedUpdateTime = latestLocationState.timestamp && (0,element_web_shared_components/* humanizeTime */.P5)(latestLocationState.timestamp) || "";
  return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.A)({
    className: "mx_BeaconListItem"
  }, rest), isSelfLocation ? /*#__PURE__*/react.createElement(MemberAvatar/* default */.A, {
    className: "mx_BeaconListItem_avatar",
    member: beaconMember,
    size: "32px"
  }) : /*#__PURE__*/react.createElement(StyledLiveBeaconIcon/* default */.A, {
    className: "mx_BeaconListItem_avatarIcon"
  }), /*#__PURE__*/react.createElement("div", {
    className: "mx_BeaconListItem_info"
  }, /*#__PURE__*/react.createElement(BeaconStatus/* default */.A, {
    className: "mx_BeaconListItem_status",
    beacon: beacon,
    label: (beaconMember === null || beaconMember === void 0 ? void 0 : beaconMember.name) || ((_beacon$beaconInfo2 = beacon.beaconInfo) === null || _beacon$beaconInfo2 === void 0 ? void 0 : _beacon$beaconInfo2.description) || beacon.beaconInfoOwner,
    displayStatus: displayStatus/* BeaconDisplayStatus */.T.Active
  }, /*#__PURE__*/react.createElement("div", {
    className: "mx_BeaconListItem_interactions",
    onClick: (0,NativeEventUtils/* preventDefaultWrapper */.Z)(() => {})
  }, /*#__PURE__*/react.createElement(beacon_ShareLatestLocation, {
    latestLocationState: latestLocationState
  }))), /*#__PURE__*/react.createElement("span", {
    className: "mx_BeaconListItem_lastUpdated"
  }, (0,languageHandler._t)("location_sharing|live_update_time", {
    humanizedUpdateTime
  }))));
};
/* harmony default export */ const beacon_BeaconListItem = (BeaconListItem);
;// ./src/components/views/beacon/DialogSidebar.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







const DialogSidebar = ({
  beacons,
  onBeaconClick,
  requestClose
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_DialogSidebar"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mx_DialogSidebar_header"
  }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
    size: "4"
  }, (0,languageHandler._t)("action|view_list")), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    className: "mx_DialogSidebar_closeButton",
    onClick: requestClose,
    title: (0,languageHandler._t)("location_sharing|close_sidebar"),
    "data-testid": "dialog-sidebar-close"
  }, /*#__PURE__*/react.createElement(icons_close/* default */.A, {
    className: "mx_DialogSidebar_closeButtonIcon",
    height: "24px",
    width: "24px"
  }))), beacons !== null && beacons !== void 0 && beacons.length ? /*#__PURE__*/react.createElement("ol", {
    className: "mx_DialogSidebar_list"
  }, beacons.map(beacon => /*#__PURE__*/react.createElement(beacon_BeaconListItem, {
    key: beacon.identifier,
    beacon: beacon,
    onClick: () => onBeaconClick(beacon)
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "mx_DialogSidebar_noResults"
  }, (0,languageHandler._t)("location_sharing|live_locations_empty")));
};
/* harmony default export */ const beacon_DialogSidebar = (DialogSidebar);
// EXTERNAL MODULE: ./src/stores/OwnBeaconStore.ts
var OwnBeaconStore = __webpack_require__("./src/stores/OwnBeaconStore.ts");
// EXTERNAL MODULE: ./src/components/views/beacon/OwnBeaconStatus.tsx
var OwnBeaconStatus = __webpack_require__("./src/components/views/beacon/OwnBeaconStatus.tsx");
;// ./src/components/views/beacon/DialogOwnBeaconStatus.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/










const useOwnBeacon = roomId => {
  const ownBeacon = (0,useEventEmitter/* useEventEmitterState */.dF)(OwnBeaconStore/* OwnBeaconStore */.g.instance, OwnBeaconStore/* OwnBeaconStoreEvent */.q.LivenessChange, () => {
    const [ownBeaconId] = OwnBeaconStore/* OwnBeaconStore */.g.instance.getLiveBeaconIds(roomId);
    return OwnBeaconStore/* OwnBeaconStore */.g.instance.getBeaconById(ownBeaconId);
  });
  return ownBeacon;
};
const DialogOwnBeaconStatus = ({
  roomId
}) => {
  var _beacon$beaconInfo;
  const beacon = useOwnBeacon(roomId);
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const room = matrixClient.getRoom(roomId);
  if (!(beacon !== null && beacon !== void 0 && beacon.isLive) || !room) {
    return null;
  }
  const isSelfLocation = ((_beacon$beaconInfo = beacon.beaconInfo) === null || _beacon$beaconInfo === void 0 ? void 0 : _beacon$beaconInfo.assetType) === matrix.LocationAssetType.Self;
  const beaconMember = isSelfLocation ? room.getMember(beacon.beaconInfoOwner) : null;
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_DialogOwnBeaconStatus"
  }, isSelfLocation ? /*#__PURE__*/react.createElement(MemberAvatar/* default */.A, {
    className: "mx_DialogOwnBeaconStatus_avatar",
    member: beaconMember,
    size: "32px"
  }) : /*#__PURE__*/react.createElement(StyledLiveBeaconIcon/* default */.A, {
    className: "mx_DialogOwnBeaconStatus_avatarIcon"
  }), /*#__PURE__*/react.createElement(OwnBeaconStatus/* default */.A, {
    className: "mx_DialogOwnBeaconStatus_status",
    beacon: beacon,
    displayStatus: displayStatus/* BeaconDisplayStatus */.T.Active
  }));
};
/* harmony default export */ const beacon_DialogOwnBeaconStatus = (DialogOwnBeaconStatus);
;// ./src/components/views/beacon/BeaconStatusTooltip.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







const useBeaconName = beacon => {
  var _beacon$beaconInfo;
  const matrixClient = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  if (((_beacon$beaconInfo = beacon.beaconInfo) === null || _beacon$beaconInfo === void 0 ? void 0 : _beacon$beaconInfo.assetType) !== matrix.LocationAssetType.Self) {
    var _beacon$beaconInfo2;
    return (_beacon$beaconInfo2 = beacon.beaconInfo) === null || _beacon$beaconInfo2 === void 0 ? void 0 : _beacon$beaconInfo2.description;
  }
  const room = matrixClient.getRoom(beacon.roomId);
  const member = room === null || room === void 0 ? void 0 : room.getMember(beacon.beaconInfoOwner);
  return (member === null || member === void 0 ? void 0 : member.rawDisplayName) || beacon.beaconInfoOwner;
};
const BeaconStatusTooltip = ({
  beacon
}) => {
  const label = useBeaconName(beacon);
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_BeaconStatusTooltip"
  }, /*#__PURE__*/react.createElement(BeaconStatus/* default */.A, {
    beacon: beacon,
    label: label,
    displayStatus: displayStatus/* BeaconDisplayStatus */.T.Active,
    displayLiveTimeRemaining: true,
    className: "mx_BeaconStatusTooltip_inner"
  }, /*#__PURE__*/react.createElement(beacon_ShareLatestLocation, {
    latestLocationState: beacon.latestLocationState
  })));
};
/* harmony default export */ const beacon_BeaconStatusTooltip = (BeaconStatusTooltip);
// EXTERNAL MODULE: ./src/components/views/location/MapFallback.tsx + 1 modules
var MapFallback = __webpack_require__("./src/components/views/location/MapFallback.tsx");
// EXTERNAL MODULE: ./src/components/views/location/MapError.tsx
var MapError = __webpack_require__("./src/components/views/location/MapError.tsx");
;// ./src/components/views/beacon/BeaconViewDialog.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



















// track the 'focused time' as ts
// to make it possible to refocus the same beacon
// as the beacon location may change
// or the map may move around

const getBoundsCenter = bounds => {
  if (!bounds) {
    return;
  }
  return (0,beacon/* getGeoUri */.mt)({
    latitude: (bounds.north + bounds.south) / 2,
    longitude: (bounds.east + bounds.west) / 2,
    timestamp: Date.now()
  });
};
const useMapPosition = (liveBeacons, {
  beacon,
  ts
}) => {
  var _beacon$latestLocatio;
  const [bounds, setBounds] = (0,react.useState)(getBeaconBounds(liveBeacons));
  const [centerGeoUri, setCenterGeoUri] = (0,react.useState)((beacon === null || beacon === void 0 || (_beacon$latestLocatio = beacon.latestLocationState) === null || _beacon$latestLocatio === void 0 ? void 0 : _beacon$latestLocatio.uri) || getBoundsCenter(bounds));
  (0,react.useEffect)(() => {
    var _beacon$latestLocatio2;
    if (
    // this check ignores the first initial focused beacon state
    // as centering logic on map zooms to show everything
    // instead of focusing down
    ts !== 0 && // only set focus to a known location
    beacon !== null && beacon !== void 0 && (_beacon$latestLocatio2 = beacon.latestLocationState) !== null && _beacon$latestLocatio2 !== void 0 && _beacon$latestLocatio2.uri) {
      var _beacon$latestLocatio3;
      // append custom `mxTs` parameter to geoUri
      // so map is triggered to refocus on this uri
      // event if it was previously the center geouri
      // but the map have moved/zoomed
      setCenterGeoUri(`${beacon === null || beacon === void 0 || (_beacon$latestLocatio3 = beacon.latestLocationState) === null || _beacon$latestLocatio3 === void 0 ? void 0 : _beacon$latestLocatio3.uri};mxTs=${Date.now()}`);
      setBounds(getBeaconBounds([beacon]));
    }
  }, [beacon, ts]);
  return {
    bounds,
    centerGeoUri
  };
};

/**
 * Dialog to view live beacons maximised
 */
const BeaconViewDialog = ({
  initialFocusedBeacon,
  roomId,
  matrixClient,
  onFinished
}) => {
  const liveBeacons = useLiveBeacons(roomId, matrixClient);
  const [focusedBeaconState, setFocusedBeaconState] = (0,react.useState)({
    beacon: initialFocusedBeacon,
    ts: 0
  });
  const [isSidebarOpen, setSidebarOpen] = (0,react.useState)(false);
  const {
    bounds,
    centerGeoUri
  } = useMapPosition(liveBeacons, focusedBeaconState);
  const [mapDisplayError, setMapDisplayError] = (0,react.useState)();

  // automatically open the sidebar if there is no map to see
  (0,react.useEffect)(() => {
    if (mapDisplayError) {
      setSidebarOpen(true);
    }
  }, [mapDisplayError]);
  const onBeaconListItemClick = beacon => {
    setFocusedBeaconState({
      beacon,
      ts: Date.now()
    });
  };
  const hasOwnBeacon = liveBeacons.filter(beacon => (beacon === null || beacon === void 0 ? void 0 : beacon.beaconInfoOwner) === matrixClient.getUserId()).length > 0;
  return /*#__PURE__*/react.createElement(BaseDialog/* default */.A, {
    className: "mx_BeaconViewDialog",
    onFinished: onFinished,
    fixedWidth: false
  }, /*#__PURE__*/react.createElement(MatrixClientContext/* default */.Ay.Provider, {
    value: matrixClient
  }, centerGeoUri && !mapDisplayError && /*#__PURE__*/react.createElement(Map["default"], {
    id: "mx_BeaconViewDialog",
    bounds: bounds,
    centerGeoUri: centerGeoUri,
    interactive: true,
    onError: setMapDisplayError,
    className: "mx_BeaconViewDialog_map",
    allowGeolocate: !hasOwnBeacon
  }, ({
    map
  }) => /*#__PURE__*/react.createElement(react.Fragment, null, liveBeacons.map(beacon => /*#__PURE__*/react.createElement(beacon_BeaconMarker, {
    key: beacon.identifier,
    map: map,
    beacon: beacon,
    tooltip: /*#__PURE__*/react.createElement(beacon_BeaconStatusTooltip, {
      beacon: beacon
    })
  })), /*#__PURE__*/react.createElement(ZoomButtons/* default */.A, {
    map: map
  }))), mapDisplayError instanceof Error && /*#__PURE__*/react.createElement(MapError/* MapError */.p, {
    error: mapDisplayError.message,
    isMinimised: true
  }), !centerGeoUri && !mapDisplayError && /*#__PURE__*/react.createElement(MapFallback/* default */.A, {
    "data-testid": "beacon-view-dialog-map-fallback",
    className: "mx_BeaconViewDialog_map"
  }, /*#__PURE__*/react.createElement("span", {
    className: "mx_BeaconViewDialog_mapFallbackMessage"
  }, (0,languageHandler._t)("location_sharing|live_locations_empty")), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    kind: "primary",
    onClick: onFinished,
    "data-testid": "beacon-view-dialog-fallback-close"
  }, (0,languageHandler._t)("action|close"))), isSidebarOpen ? /*#__PURE__*/react.createElement(beacon_DialogSidebar, {
    beacons: liveBeacons,
    onBeaconClick: onBeaconListItemClick,
    requestClose: () => setSidebarOpen(false)
  }) : /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    kind: "primary",
    onClick: () => setSidebarOpen(true),
    "data-testid": "beacon-view-dialog-open-sidebar",
    className: "mx_BeaconViewDialog_viewListButton"
  }, /*#__PURE__*/react.createElement(live_location/* Icon */.I, {
    height: 12
  }), "\xA0", (0,languageHandler._t)("action|view_list")), /*#__PURE__*/react.createElement(beacon_DialogOwnBeaconStatus, {
    roomId: roomId
  })));
};
/* harmony default export */ const beacon_BeaconViewDialog = (BeaconViewDialog);

/***/ },

/***/ "./src/components/views/location/Map.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Map)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/maplibre-gl/dist/maplibre-gl.js
var maplibre_gl = __webpack_require__("../../node_modules/maplibre-gl/dist/maplibre-gl.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ./src/hooks/useEventEmitter.ts
var useEventEmitter = __webpack_require__("./src/hooks/useEventEmitter.ts");
// EXTERNAL MODULE: ./src/utils/location/index.ts + 5 modules
var utils_location = __webpack_require__("./src/utils/location/index.ts");
// EXTERNAL MODULE: ./src/utils/WellKnownUtils.ts
var WellKnownUtils = __webpack_require__("./src/utils/WellKnownUtils.ts");
// EXTERNAL MODULE: ./src/utils/location/map.ts
var location_map = __webpack_require__("./src/utils/location/map.ts");
;// ./src/utils/location/useMap.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




/**
 * Create a map instance
 * Add listeners for errors
 * Make sure `onError` has a stable reference
 * As map is recreated on changes to it
 */
const useMap = ({
  interactive,
  bodyId,
  onError
}) => {
  const cli = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  const [map, setMap] = (0,react.useState)();
  (0,react.useEffect)(() => {
    let map;
    try {
      map = (0,location_map/* createMap */.p)(cli, !!interactive, bodyId, onError);
      setMap(map);
    } catch (error) {
      console.error("Error encountered in useMap", error);
      if (error instanceof Error) {
        onError === null || onError === void 0 || onError(error);
      }
    }
    return () => {
      if (map) {
        map.remove();
        setMap(undefined);
      }
    };
  },
  // map is excluded as a dependency
  [cli, interactive, bodyId, onError]);
  return map;
};
// EXTERNAL MODULE: ./src/Modal.tsx + 1 modules
var Modal = __webpack_require__("./src/Modal.tsx");
// EXTERNAL MODULE: ./src/components/views/dialogs/ErrorDialog.tsx
var ErrorDialog = __webpack_require__("./src/components/views/dialogs/ErrorDialog.tsx");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
;// ./src/components/views/location/Map.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/














const useMapWithStyle = ({
  id,
  centerGeoUri,
  onError,
  interactive,
  bounds,
  allowGeolocate
}) => {
  const bodyId = `mx_Map_${id}`;

  // style config
  const context = (0,react.useContext)(MatrixClientContext/* default */.Ay);
  const mapStyleUrl = (0,useEventEmitter/* useEventEmitterState */.dF)(context, matrix.ClientEvent.ClientWellKnown, clientWellKnown => {
    var _tileServerFromWellKn;
    return (_tileServerFromWellKn = (0,WellKnownUtils/* tileServerFromWellKnown */.XP)(clientWellKnown)) === null || _tileServerFromWellKn === void 0 ? void 0 : _tileServerFromWellKn["map_style_url"];
  });
  const map = useMap({
    interactive,
    bodyId,
    onError
  });
  (0,react.useEffect)(() => {
    if (mapStyleUrl && map) {
      map.setStyle(mapStyleUrl);
    }
  }, [mapStyleUrl, map]);
  (0,react.useEffect)(() => {
    if (map && centerGeoUri) {
      try {
        const coords = (0,utils_location/* parseGeoUri */.XB)(centerGeoUri);
        if (!coords) {
          throw new Error("Invalid geo URI");
        }
        map.setCenter({
          lon: coords.longitude,
          lat: coords.latitude
        });
      } catch (e) {
        logger/* logger */.vF.error("Could not set map center", e);
      }
    }
  }, [map, centerGeoUri]);
  (0,react.useEffect)(() => {
    if (map && bounds) {
      try {
        const lngLatBounds = new maplibre_gl.LngLatBounds([bounds.west, bounds.south], [bounds.east, bounds.north]);
        map.fitBounds(lngLatBounds, {
          padding: 100,
          maxZoom: 15
        });
      } catch (e) {
        logger/* logger */.vF.error("Invalid map bounds", e);
      }
    }
  }, [map, bounds]);
  const [geolocate, setGeolocate] = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    if (!map) {
      return;
    }
    if (allowGeolocate && !geolocate) {
      const geolocate = new maplibre_gl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: false
      });
      setGeolocate(geolocate);
      map.addControl(geolocate);
    }
    if (!allowGeolocate && geolocate) {
      map.removeControl(geolocate);
      setGeolocate(null);
    }
  }, [map, geolocate, allowGeolocate]);
  (0,react.useEffect)(() => {
    if (geolocate) {
      geolocate.on("error", onGeolocateError);
      return () => {
        geolocate.off("error", onGeolocateError);
      };
    }
  }, [geolocate]);
  return {
    map,
    bodyId
  };
};
const onGeolocateError = e => {
  var _positionFailureMessa;
  logger/* logger */.vF.error("Could not fetch location", e);
  Modal/* default */.Ay.createDialog(ErrorDialog/* default */.A, {
    title: (0,languageHandler._t)("location_sharing|error_fetch_location"),
    description: (_positionFailureMessa = (0,utils_location/* positionFailureMessage */.Ff)(e.code)) !== null && _positionFailureMessa !== void 0 ? _positionFailureMessa : ""
  });
};
const MapComponent = ({
  bounds,
  centerGeoUri,
  children,
  className,
  allowGeolocate,
  id,
  interactive,
  onError,
  onClick
}) => {
  const {
    map,
    bodyId
  } = useMapWithStyle({
    centerGeoUri,
    onError,
    id,
    interactive,
    bounds,
    allowGeolocate
  });
  const onMapClick = event => {
    // Eat click events when clicking the attribution button
    const target = event.target;
    if (target.classList.contains("maplibregl-ctrl-attrib-button")) {
      return;
    }
    onClick === null || onClick === void 0 || onClick();
  };
  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("mx_Map", className),
    id: bodyId,
    onClick: onMapClick
  }, !!children && !!map && children({
    map
  }));
};
/* harmony default export */ const Map = (MapComponent);

/***/ },

/***/ "./src/components/views/location/ZoomButtons.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js");
/* harmony import */ var _vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/plus.js");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const ZoomButtons = ({
  map
}) => {
  const onZoomIn = () => {
    map.zoomIn();
  };
  const onZoomOut = () => {
    map.zoomOut();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mx_ZoomButtons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: onZoomIn,
    "data-testid": "map-zoom-in-button",
    title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("action|zoom_in"),
    className: "mx_ZoomButtons_button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    className: "mx_ZoomButtons_icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_AccessibleButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    onClick: onZoomOut,
    "data-testid": "map-zoom-out-button",
    title: (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)("action|zoom_out"),
    className: "mx_ZoomButtons_button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_vector_im_compound_design_tokens_assets_web_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    className: "mx_ZoomButtons_icon"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ZoomButtons);

/***/ },

/***/ "./src/utils/location/map.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ createMarker),
/* harmony export */   p: () => (/* binding */ createMap)
/* harmony export */ });
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/maplibre-gl/dist/maplibre-gl.js");
/* harmony import */ var maplibre_gl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(maplibre_gl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/languageHandler.tsx");
/* harmony import */ var _findMapStyleUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/location/findMapStyleUrl.ts");
/* harmony import */ var _LocationShareErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/location/LocationShareErrors.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






const createMap = (client, interactive, bodyId, onError) => {
  try {
    const styleUrl = (0,_findMapStyleUrl__WEBPACK_IMPORTED_MODULE_3__/* .findMapStyleUrl */ .M)(client);
    const map = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.Map({
      container: bodyId,
      style: styleUrl,
      zoom: 15,
      interactive,
      attributionControl: false,
      locale: {
        "AttributionControl.ToggleAttribution": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|toggle_attribution"),
        "AttributionControl.MapFeedback": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|map_feedback"),
        "FullscreenControl.Enter": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|enter_fullscreen"),
        "FullscreenControl.Exit": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|exit_fullscreeen"),
        "GeolocateControl.FindMyLocation": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|find_my_location"),
        "GeolocateControl.LocationNotAvailable": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|location_not_available"),
        "LogoControl.Title": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|mapbox_logo"),
        "NavigationControl.ResetBearing": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("location_sharing|reset_bearing"),
        "NavigationControl.ZoomIn": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|zoom_in"),
        "NavigationControl.ZoomOut": (0,_languageHandler__WEBPACK_IMPORTED_MODULE_2__._t)("action|zoom_out")
      }
    });
    map.addControl(new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.AttributionControl(), "top-right");
    map.on("error", e => {
      matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error("Failed to load map: check map_style_url in config.json has a valid URL and API key", e.error);
      onError === null || onError === void 0 || onError(new Error(_LocationShareErrors__WEBPACK_IMPORTED_MODULE_4__/* .LocationShareError */ .$.MapStyleUrlNotReachable));
    });
    return map;
  } catch (e) {
    matrix_js_sdk_src_logger__WEBPACK_IMPORTED_MODULE_1__/* .logger */ .vF.error("Failed to render map", e);
    const errorMessage = e === null || e === void 0 ? void 0 : e.message;
    if (errorMessage.includes("Failed to initialize WebGL")) throw new Error(_LocationShareErrors__WEBPACK_IMPORTED_MODULE_4__/* .LocationShareError */ .$.WebGLNotEnabled);
    throw e;
  }
};
const createMarker = (coords, element) => {
  const marker = new maplibre_gl__WEBPACK_IMPORTED_MODULE_0__.Marker({
    element,
    anchor: "bottom",
    offset: [0, -1]
  }).setLngLat({
    lon: coords.longitude,
    lat: coords.latitude
  });
  return marker;
};

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/minus.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function MinusIcon(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 18 13z"
    })
  });
}
;
MinusIcon.displayName = "MinusIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MinusIcon));

/***/ }

}]);
//# sourceMappingURL=104.js.map