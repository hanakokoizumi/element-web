"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[1614],{

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

/***/ }

}]);
//# sourceMappingURL=1614.js.map