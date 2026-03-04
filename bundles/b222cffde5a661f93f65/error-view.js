"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[5607],{

/***/ "./src/async-components/structures/ErrorView.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ErrorView: () => (/* binding */ ErrorView),
  UnsupportedBrowserView: () => (/* binding */ UnsupportedBrowserView)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Typography/Heading.js
var Heading = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Typography/Heading.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Typography/Text.js
var Text = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Typography/Text.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Button/Button.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Separator/Separator.js + 4 modules
var Separator = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Separator/Separator.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pop-out.js
var pop_out = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/pop-out.js");
// EXTERNAL MODULE: ../../packages/shared-components/dist/element-web-shared-components.js
var element_web_shared_components = __webpack_require__("../../packages/shared-components/dist/element-web-shared-components.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mac.js
var mac = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mac.js");
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js");
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/windows.js


function WindowsIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M12.589 2.4H21.6v9.011h-9.011zM2.4 12.588h9.011v9.011H2.4zM2.4 2.4h9.011v9.011H2.4zm10.189 10.188H21.6v9.011h-9.011z"
    })
  });
}
;
WindowsIcon.displayName = "WindowsIcon";
/* harmony default export */ const windows = ((0,react.forwardRef)(WindowsIcon));
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/linux.js


function LinuxIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
      clipPath: "url(#cpd_LinuxIcon_a)",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M13.206 20.644a2.7 2.7 0 0 1-1.097.248 2.8 2.8 0 0 1-1.567-.495c-.153.38-.392.723-.7 1a2.8 2.8 0 0 1-1.078.604h6.141a2.8 2.8 0 0 1-.99-.51 2.8 2.8 0 0 1-.709-.847M6.71 16.673a.2.2 0 0 0 .067-.03q.056-.49.13-.94c-.01-.169.017-.338.08-.495.348-1.904.834-3.24 1.504-4.052a.13.13 0 0 1 .18-.018.123.123 0 0 1 .018.174 4 4 0 0 0-.203.272q-.764 1.113-1.199 3.389h.03a.6.6 0 0 1 .166 0c.198.042.508.203.985.67.061-2.72 1.661-4.913 3.642-4.913 1.748 0 3.208 1.715 3.556 3.997a1.7 1.7 0 0 1 .762-.742.8.8 0 0 1 .254-.047 7.5 7.5 0 0 0-.948-2.342 4 4 0 0 0-.2-.272.12.12 0 0 1-.03-.09.12.12 0 0 1 .048-.083.13.13 0 0 1 .092-.028.13.13 0 0 1 .085.045c.508.624.93 1.557 1.245 2.822.678.247.696 1.361.71 2.267 0 .43 0 .877.105.99.104.114.325.09.635-.04.036-.393.053-.742.063-1.036v-1.082c0-2.475-3.266-6.755-3.266-6.755l-.378-3.218c0-2.953-2.733-2.926-2.733-2.926s-2.743-.027-2.743 2.914l-.365 3.23s-3.267 4.277-3.267 6.755v.31s-.012.299 0 .767v.227c.414.154.839.315.976.28m5.388-10.41c.761.068 1.975.247 2.031.613.04.282-.429.822-.523.926-.195.215-.876.92-1.49.92-.615 0-1.296-.705-1.49-.92-.093-.104-.563-.644-.525-.926.046-.374 1.273-.545 1.996-.614"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M12.111 8.475c.333 0 .843-.33 1.298-.837.348-.384.475-.666.465-.73-.064-.127-.894-.317-1.778-.401-.856.084-1.687.274-1.75.406.091.275.252.523.467.722.457.51.965.84 1.298.84m.684 10.664c-.292-2.607-.023-3.146.206-3.324a.42.42 0 0 1 .4-.057c.23.11.431.271.587.47.287.304.488.495.674.391.131-.077.32-.495.507-.879.097-.205.196-.425.305-.636-.254-2.33-1.65-4.126-3.355-4.126-1.872 0-3.393 2.166-3.393 4.827v.096c.31.317.68.743 1.133 1.3q.266.328.487.685a2.7 2.7 0 0 1 .29 2.258c.426.312.943.485 1.476.495.341-.002.679-.073.99-.21a2.6 2.6 0 0 1-.16-.46 7 7 0 0 1-.147-.83"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
        d: "M9.651 17.35c-.355-.44-.657-.789-.916-1.071l-.13-.139-.132-.138c-.587-.594-.897-.758-1.06-.785a.2.2 0 0 0-.068 0 .15.15 0 0 0-.114.082v.017a.9.9 0 0 0-.058.406v.327c.034.25-.019.505-.15.723a.4.4 0 0 1-.087.071l-.053.032a.6.6 0 0 1-.107.043H6.75c-.211.037-.554-.084-.988-.248l-.127-.05c-.544-.21-1.179-.452-1.644-.452a.63.63 0 0 0-.553.232c-.34.495.421 1.273 1.036 1.901.378.389.675.693.708.921.059.42-.393.582-.792.725a1.5 1.5 0 0 0-.564.278c-.06.069-.058.116-.045.15.055.191.507.61 2.897 1.285q.398.112.806.178c.49.073.992.01 1.448-.182a2.64 2.64 0 0 0 1.13-.902q.165-.245.271-.522l.05-.121c0-.042.024-.09.037-.131a2.48 2.48 0 0 0-.293-1.98 7 7 0 0 0-.475-.65m9.618-.17c-.212.02-.418.084-.604.186l-.277.117c-.305.113-.61.168-.807-.095a.6.6 0 0 1-.094-.227 3.6 3.6 0 0 1-.056-.592v-.322c0-.72-.026-1.586-.373-1.925a.5.5 0 0 0-.255-.14h-.038a.5.5 0 0 0-.254.035c-.3.12-.56.496-.79.936l-.109.215-.117.248-.104.225c-.223.495-.398.874-.601.99-.376.216-.704-.13-.991-.438a1.5 1.5 0 0 0-.48-.4.2.2 0 0 0-.076-.016q-.048 0-.084.03c-.158.124-.384.69-.112 3.104q.044.4.137.792.052.207.137.404.027.056.056.111c.02.037.033.074.054.111.208.377.51.696.879.928a2.66 2.66 0 0 0 2.504.171c.398-.18.743-.454 1.003-.8a7 7 0 0 0 .45-.675c1.218-2.116 1.241-2.722 1.147-2.896a.15.15 0 0 0-.144-.077"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("defs", {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("clipPath", {
        id: "cpd_LinuxIcon_a",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
          d: "M3.167 2.19H20.5V22H3.165z"
        })
      })
    })]
  });
}
;
LinuxIcon.displayName = "LinuxIcon";
/* harmony default export */ const linux = ((0,react.forwardRef)(LinuxIcon));
// EXTERNAL MODULE: ./src/SdkConfig.ts
var SdkConfig = __webpack_require__("./src/SdkConfig.ts");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
;// ./src/async-components/structures/ErrorView.tsx
/*
Copyright 2020-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









// directly import the style here as this layer does not support rethemedex at this time so no matrix-react-sdk
// PostCSS variables will be accessible.

const ErrorView = ({
  title,
  messages,
  footer,
  children
}) => {
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_ErrorView cpd-theme-light"
  }, /*#__PURE__*/react.createElement("img", {
    className: "mx_ErrorView_logo",
    height: "160",
    src: "themes/element/img/logos/element-app-logo.png",
    alt: "Element"
  }), /*#__PURE__*/react.createElement("div", {
    className: "mx_ErrorView_container"
  }, /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
    size: "md",
    weight: "semibold"
  }, title), messages === null || messages === void 0 ? void 0 : messages.map(message => /*#__PURE__*/react.createElement(Text/* Text */.E, {
    key: message,
    size: "lg"
  }, message)), children), footer);
};
const MobileAppLinks = ({
  appleAppStoreUrl,
  googlePlayUrl,
  fdroidUrl
}) => /*#__PURE__*/react.createElement(element_web_shared_components/* Flex */.so, {
  gap: "var(--cpd-space-6x)",
  className: "mx_ErrorView_flexContainer"
}, appleAppStoreUrl && /*#__PURE__*/react.createElement("a", {
  href: appleAppStoreUrl,
  target: "_blank",
  rel: "noreferrer noopener"
}, /*#__PURE__*/react.createElement("img", {
  height: "64",
  src: "themes/element/img/download/apple.svg",
  alt: "Apple App Store"
})), googlePlayUrl && /*#__PURE__*/react.createElement("a", {
  href: googlePlayUrl,
  target: "_blank",
  rel: "noreferrer noopener",
  key: "android"
}, /*#__PURE__*/react.createElement("img", {
  height: "64",
  src: "themes/element/img/download/google.svg",
  alt: "Google Play Store"
})), fdroidUrl && /*#__PURE__*/react.createElement("a", {
  href: fdroidUrl,
  target: "_blank",
  rel: "noreferrer noopener",
  key: "fdroid"
}, /*#__PURE__*/react.createElement("img", {
  height: "64",
  src: "themes/element/img/download/fdroid.svg",
  alt: "F-Droid"
})));
const DesktopAppLinks = ({
  macOsUrl,
  win64Url,
  win64ArmUrl,
  linuxUrl
}) => {
  return /*#__PURE__*/react.createElement(element_web_shared_components/* Flex */.so, {
    gap: "var(--cpd-space-4x)",
    className: "mx_ErrorView_flexContainer"
  }, macOsUrl && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    as: "a",
    href: macOsUrl,
    kind: "secondary",
    Icon: mac/* default */.A
  }, (0,languageHandler._t)("incompatible_browser|macos")), win64Url && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    as: "a",
    href: win64Url,
    kind: "secondary",
    Icon: windows
  }, (0,languageHandler._t)("incompatible_browser|windows_64bit")), win64ArmUrl && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    as: "a",
    href: win64ArmUrl,
    kind: "secondary",
    Icon: windows
  }, (0,languageHandler._t)("incompatible_browser|windows_arm_64bit")), linuxUrl && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    as: "a",
    href: linuxUrl,
    kind: "secondary",
    Icon: linux
  }, (0,languageHandler._t)("incompatible_browser|linux")));
};
const linkFactory = link => text => /*#__PURE__*/react.createElement("a", {
  href: link,
  target: "_blank",
  rel: "noreferrer noopener"
}, text);
const UnsupportedBrowserView = ({
  onAccept
}) => {
  var _config$brand, _config$desktop_build, _config$desktop_build2, _config$desktop_build3, _config$desktop_build4, _config$desktop_build5, _config$mobile_builds, _config$mobile_builds2, _config$mobile_builds3, _config$desktop_build6, _config$desktop_build7, _config$desktop_build8, _config$desktop_build9, _config$mobile_builds4, _config$mobile_builds5, _config$mobile_builds6, _config$mobile_builds7, _config$mobile_builds8, _config$mobile_builds9;
  const config = SdkConfig/* default */.A.get();
  const brand = (_config$brand = config.brand) !== null && _config$brand !== void 0 ? _config$brand : "Element";
  const hasDesktopBuilds = ((_config$desktop_build = config.desktop_builds) === null || _config$desktop_build === void 0 ? void 0 : _config$desktop_build.available) && (((_config$desktop_build2 = config.desktop_builds) === null || _config$desktop_build2 === void 0 ? void 0 : _config$desktop_build2.url_macos) || ((_config$desktop_build3 = config.desktop_builds) === null || _config$desktop_build3 === void 0 ? void 0 : _config$desktop_build3.url_win64) || ((_config$desktop_build4 = config.desktop_builds) === null || _config$desktop_build4 === void 0 ? void 0 : _config$desktop_build4.url_win64arm) || ((_config$desktop_build5 = config.desktop_builds) === null || _config$desktop_build5 === void 0 ? void 0 : _config$desktop_build5.url_linux));
  const hasMobileBuilds = Boolean(((_config$mobile_builds = config.mobile_builds) === null || _config$mobile_builds === void 0 ? void 0 : _config$mobile_builds.ios) || ((_config$mobile_builds2 = config.mobile_builds) === null || _config$mobile_builds2 === void 0 ? void 0 : _config$mobile_builds2.android) || ((_config$mobile_builds3 = config.mobile_builds) === null || _config$mobile_builds3 === void 0 ? void 0 : _config$mobile_builds3.fdroid));
  return /*#__PURE__*/react.createElement(ErrorView, {
    title: (0,languageHandler._t)("incompatible_browser|title", {
      brand
    }),
    messages: [(0,languageHandler._t)("incompatible_browser|description", {
      brand,
      detail: onAccept ? (0,languageHandler._t)("incompatible_browser|detail_can_continue") : (0,languageHandler._t)("incompatible_browser|detail_no_continue")
    })],
    footer: /*#__PURE__*/react.createElement(react.Fragment, null, (hasDesktopBuilds || hasMobileBuilds) && /*#__PURE__*/react.createElement(Separator/* Separator */.w, null), hasDesktopBuilds && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
      as: "h2",
      size: "sm",
      weight: "semibold"
    }, (0,languageHandler._t)("incompatible_browser|use_desktop_heading", {
      brand
    })), /*#__PURE__*/react.createElement(DesktopAppLinks, {
      macOsUrl: (_config$desktop_build6 = config.desktop_builds) === null || _config$desktop_build6 === void 0 ? void 0 : _config$desktop_build6.url_macos,
      win64Url: (_config$desktop_build7 = config.desktop_builds) === null || _config$desktop_build7 === void 0 ? void 0 : _config$desktop_build7.url_win64,
      win64ArmUrl: (_config$desktop_build8 = config.desktop_builds) === null || _config$desktop_build8 === void 0 ? void 0 : _config$desktop_build8.url_win64arm,
      linuxUrl: (_config$desktop_build9 = config.desktop_builds) === null || _config$desktop_build9 === void 0 ? void 0 : _config$desktop_build9.url_linux
    })), hasMobileBuilds && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Heading/* Heading */.D, {
      as: "h2",
      size: "sm",
      weight: "semibold"
    }, hasDesktopBuilds ? (0,languageHandler._t)("incompatible_browser|use_mobile_heading_after_desktop") : (0,languageHandler._t)("incompatible_browser|use_mobile_heading", {
      brand
    })), /*#__PURE__*/react.createElement(MobileAppLinks, {
      appleAppStoreUrl: (_config$mobile_builds4 = (_config$mobile_builds5 = config.mobile_builds) === null || _config$mobile_builds5 === void 0 ? void 0 : _config$mobile_builds5.ios) !== null && _config$mobile_builds4 !== void 0 ? _config$mobile_builds4 : undefined,
      googlePlayUrl: (_config$mobile_builds6 = (_config$mobile_builds7 = config.mobile_builds) === null || _config$mobile_builds7 === void 0 ? void 0 : _config$mobile_builds7.android) !== null && _config$mobile_builds6 !== void 0 ? _config$mobile_builds6 : undefined,
      fdroidUrl: (_config$mobile_builds8 = (_config$mobile_builds9 = config.mobile_builds) === null || _config$mobile_builds9 === void 0 ? void 0 : _config$mobile_builds9.fdroid) !== null && _config$mobile_builds8 !== void 0 ? _config$mobile_builds8 : undefined
    })))
  }, /*#__PURE__*/react.createElement(Text/* Text */.E, {
    size: "lg"
  }, (0,languageHandler._t)("incompatible_browser|supported_browsers", {}, {
    Chrome: linkFactory("https://google.com/chrome"),
    Firefox: linkFactory("https://firefox.com"),
    Edge: linkFactory("https://microsoft.com/edge"),
    Safari: linkFactory("https://apple.com/safari")
  })), /*#__PURE__*/react.createElement(element_web_shared_components/* Flex */.so, {
    gap: "var(--cpd-space-4x)",
    className: "mx_ErrorView_flexContainer mx_ErrorView_buttons"
  }, /*#__PURE__*/react.createElement(Button/* Button */.$, {
    Icon: pop_out/* default */.A,
    kind: "secondary",
    size: "sm"
  }, (0,languageHandler._t)("incompatible_browser|learn_more")), onAccept && /*#__PURE__*/react.createElement(Button/* Button */.$, {
    kind: "primary",
    size: "sm",
    onClick: onAccept
  }, (0,languageHandler._t)("incompatible_browser|continue"))));
};

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/mac.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function MacIcon(props, ref) {
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
      d: "M16.099 2.4a4.1 4.1 0 0 1-1.057 3.073c-.747.863-1.878 1.36-3.07 1.348-.075-1.081.315-2.146 1.085-2.96.78-.825 1.866-1.346 3.042-1.461m3.767 6.54c-1.37.783-2.214 2.163-2.234 3.657.002 1.69 1.092 3.215 2.768 3.873a9.4 9.4 0 0 1-1.44 2.723c-.848 1.178-1.737 2.329-3.149 2.35-.671.015-1.124-.165-1.596-.351-.493-.195-1.006-.398-1.809-.398-.852 0-1.388.21-1.905.412-.447.174-.88.343-1.49.367-1.343.046-2.37-1.258-3.25-2.425-1.756-2.383-3.124-6.716-1.29-9.664.86-1.437 2.471-2.349 4.241-2.402.763-.015 1.494.258 2.135.497.49.183.929.347 1.287.347.315 0 .74-.157 1.237-.34.78-.288 1.737-.64 2.71-.545 1.514.044 2.917.748 3.785 1.9",
      clipRule: "evenodd"
    })
  });
}
;
MacIcon.displayName = "MacIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(MacIcon));

/***/ }

}]);
//# sourceMappingURL=error-view.js.map