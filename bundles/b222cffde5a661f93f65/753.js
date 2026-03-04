"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[753,1614,8068],{

/***/ "./src/components/views/location/LocationViewDialog.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationViewDialog)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
/* harmony import */ var _utils_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/location/index.ts");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/views/location/Map.tsx");
/* harmony import */ var _SmartMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/views/location/SmartMarker.tsx");
/* harmony import */ var _ZoomButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/views/location/ZoomButtons.tsx");

/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







/**
 * Dialog to view m.location events maximised
 */
class LocationViewDialog extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "getBodyId", () => {
      return `mx_LocationViewDialog_${this.props.mxEvent.getId()}`;
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "onError", error => {
      this.setState({
        error
      });
    });
    this.state = {
      error: undefined
    };
  }
  render() {
    const {
      mxEvent
    } = this.props;

    // only pass member to marker when should render avatar marker
    const markerRoomMember = (0,_utils_location__WEBPACK_IMPORTED_MODULE_3__/* .isSelfLocation */ .qy)(mxEvent.getContent()) && mxEvent.sender || undefined;
    const geoUri = (0,_utils_location__WEBPACK_IMPORTED_MODULE_3__/* .locationEventGeoUri */ .jm)(mxEvent);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_dialogs_BaseDialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      className: "mx_LocationViewDialog",
      onFinished: this.props.onFinished,
      fixedWidth: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Map__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: this.getBodyId(),
      centerGeoUri: geoUri,
      onError: this.onError,
      interactive: true,
      className: "mx_LocationViewDialog_map",
      allowGeolocate: true
    }, ({
      map
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SmartMarker__WEBPACK_IMPORTED_MODULE_5__["default"], {
      map: map,
      id: `${this.getBodyId()}-marker`,
      geoUri: geoUri,
      roomMember: markerRoomMember
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ZoomButtons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
      map: map
    }))));
  }
}

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

/***/ "./src/components/views/location/SmartMarker.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _utils_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/location/index.ts");
/* harmony import */ var _utils_location_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/location/map.ts");
/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/views/location/Marker.tsx");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const useMapMarker = (map, geoUri) => {
  const [marker, setMarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const onElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (marker || !element) {
      return;
    }
    const coords = (0,_utils_location__WEBPACK_IMPORTED_MODULE_1__/* .parseGeoUri */ .XB)(geoUri);
    if (coords) {
      const newMarker = (0,_utils_location_map__WEBPACK_IMPORTED_MODULE_2__/* .createMarker */ .h)(coords, element);
      newMarker.addTo(map);
      setMarker(newMarker);
    }
  }, [marker, geoUri, map]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (marker) {
      const coords = (0,_utils_location__WEBPACK_IMPORTED_MODULE_1__/* .parseGeoUri */ .XB)(geoUri);
      if (coords) {
        marker.setLngLat({
          lon: coords.longitude,
          lat: coords.latitude
        });
      }
    }
  }, [marker, geoUri]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => {
    if (marker) {
      marker.remove();
    }
  }, [marker]);
  return {
    marker,
    onElementRef
  };
};
/**
 * Generic location marker
 */
const SmartMarker = ({
  id,
  map,
  geoUri,
  roomMember,
  useMemberColor,
  tooltip
}) => {
  const {
    onElementRef
  } = useMapMarker(map, geoUri);
  return (
    /*#__PURE__*/
    // maplibregl hijacks the Marker dom element
    // and removes it from the dom when the maplibregl.Marker instance
    // is removed
    // wrap in a span so that react doesn't get confused
    // when trying to unmount this component
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Marker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      ref: onElementRef,
      id: id,
      roomMember: roomMember,
      useMemberColor: useMemberColor,
      tooltip: tooltip
    }))
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmartMarker);

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
//# sourceMappingURL=753.js.map