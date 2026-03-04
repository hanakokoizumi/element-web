"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[2608],{

/***/ "./src/effects/rainfall/index.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rainfall)
/* harmony export */ });
/* unused harmony export DefaultOptions */
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/arrays.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2020-2023 The Matrix.org Foundation C.I.C.
Copyright 2021 Josias Allestad

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
 */


const DefaultOptions = {
  maxCount: 600,
  speed: 12
};
const KEY_FRAME_INTERVAL = 15;
class Rainfall {
  constructor(options) {
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "options", void 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "context", null);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "particles", []);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "lastAnimationTime", 0);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "isRunning", false);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "start", async (canvas, timeout = 3000) => {
      if (!canvas) {
        return;
      }
      this.context = canvas.getContext("2d");
      this.particles = [];
      const count = this.options.maxCount;
      while (this.particles.length < count) {
        this.particles.push(this.resetParticle({}, canvas.width, canvas.height));
      }
      this.isRunning = true;
      requestAnimationFrame(this.renderLoop);
      if (timeout) {
        window.setTimeout(this.stop, timeout);
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "stop", async () => {
      this.isRunning = false;
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "resetParticle", (particle, width, height) => {
      particle.x = Math.random() * width;
      particle.y = Math.random() * -height;
      particle.width = Math.random() * 1.5;
      particle.height = particle.width * 15 + 4;
      particle.speed = Math.random() * this.options.speed * 4 / 5 + this.options.speed;
      return particle;
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "renderLoop", () => {
      if (!this.context || !this.context.canvas) {
        return;
      }
      if (this.particles.length === 0) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      } else {
        const timeDelta = Date.now() - this.lastAnimationTime;
        if (timeDelta >= KEY_FRAME_INTERVAL || !this.lastAnimationTime) {
          // Clear the screen first
          this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
          this.lastAnimationTime = Date.now();
          this.animateAndRenderRaindrops();
        }
        requestAnimationFrame(this.renderLoop);
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this, "animateAndRenderRaindrops", () => {
      if (!this.context || !this.context.canvas) {
        return;
      }
      const height = this.context.canvas.height;
      for (const particle of (0,_utils_arrays__WEBPACK_IMPORTED_MODULE_1__/* .arrayFastClone */ .PF)(this.particles)) {
        particle.y += particle.speed;
        this.context.save();
        this.context.beginPath();
        this.context.rect(particle.x, particle.y, particle.width, particle.height);
        this.context.fillStyle = "#5dadec"; // light blue
        this.context.fill();
        this.context.closePath();
        this.context.restore();

        // Remove dead raindrops
        const maxBounds = height * 2;
        if (particle.y > height + maxBounds) {
          const idx = this.particles.indexOf(particle);
          this.particles.splice(idx, 1);
        }
      }
    });
    this.options = _objectSpread(_objectSpread({}, DefaultOptions), options);
  }
}

/***/ }

}]);
//# sourceMappingURL=2608.js.map