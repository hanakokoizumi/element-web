/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/workers/playback.worker.ts"
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Button/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Button/IconButton/IconButton.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/ChatFilter/ChatFilter.js + 1 modules
var ChatFilter = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/ChatFilter/ChatFilter.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/ActivityMarker/UnreadCounter.js + 1 modules
var UnreadCounter = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/ActivityMarker/UnreadCounter.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/ActivityMarker/Unread.js + 1 modules
var Unread = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/ActivityMarker/Unread.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Menu/Menu.js + 1 modules
var Menu = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Menu/Menu.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Menu/MenuItem.js + 2 modules
var MenuItem = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Menu/MenuItem.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Menu/ToggleMenuItem.js
var ToggleMenuItem = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Menu/ToggleMenuItem.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Separator/Separator.js + 4 modules
var Separator = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Separator/Separator.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Menu/ContextMenu.js + 1 modules
var ContextMenu = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Menu/ContextMenu.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-web/dist/components/Typography/Text.js
var Text = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Typography/Text.js");
;// ../../packages/shared-components/dist/element-web-shared-components.js
/* unused harmony import specifier */ var ge;
/* unused harmony import specifier */ var on;
/* unused harmony import specifier */ var ct;
/* unused harmony import specifier */ var p;
/* unused harmony import specifier */ var Ar;
/* unused harmony import specifier */ var Qe;
/* unused harmony import specifier */ var Zm;
/* unused harmony import specifier */ var me;
/* unused harmony import specifier */ var ua;
/* unused harmony import specifier */ var gt;
/* unused harmony import specifier */ var Xm;
/* unused harmony import specifier */ var un;
/* unused harmony import specifier */ var X;
/* unused harmony import specifier */ var Wc;
/* unused harmony import specifier */ var fa;
/* unused harmony import specifier */ var Yf;
/* unused harmony import specifier */ var Qm;
/* unused harmony import specifier */ var jo;
/* unused harmony import specifier */ var Fe;
/* unused harmony import specifier */ var i0;
/* unused harmony import specifier */ var a0;
/* unused harmony import specifier */ var dt;
/* unused harmony import specifier */ var Jm;
/* unused harmony import specifier */ var o0;
/* unused harmony import specifier */ var s0;
/* unused harmony import specifier */ var c0;
/* provided dependency */ var process = __webpack_require__("../../node_modules/process/browser.js");




class l0 {
  disposables = [];
  _isDisposed = !1;
  /**
   * Relinquish all tracked disposable values
   */
  dispose() {
    if (!this.isDisposed) {
      this._isDisposed = !0;
      for (const t of this.disposables)
        typeof t == "function" ? t() : t.dispose();
    }
  }
  /**
   * Track a value that needs to be eventually relinquished
   */
  track(t) {
    return this.throwIfDisposed(), this.disposables.push(t), t;
  }
  /**
   * Add an event listener that will be removed on dispose
   */
  trackListener(t, n, r) {
    this.throwIfDisposed(), t.on(n, r), this.track(() => {
      t.off(n, r);
    });
  }
  throwIfDisposed() {
    if (this.isDisposed) throw new Error("Disposable is already disposed");
  }
  /**
   * Whether this disposable has been disposed
   */
  get isDisposed() {
    return this._isDisposed;
  }
}
class u0 {
  constructor(t, n) {
    this.snapshot = t, this.emit = n;
  }
  /**
   * Replace current snapshot with a new snapshot value.
   * @param snapshot New snapshot value
   */
  set(t) {
    this.snapshot = t, this.emit();
  }
  /**
   * Update a part of the current snapshot by merging into the existing snapshot.
   * @param snapshot A subset of the snapshot to merge into the current snapshot.
   */
  merge(t) {
    this.snapshot = { ...this.snapshot, ...t }, this.emit();
  }
  /**
   * The current value of the snapshot.
   */
  get current() {
    return this.snapshot;
  }
}
class f0 {
  listeners = /* @__PURE__ */ new Set();
  /**
   * Subscribe to changes in the view model.
   * @param listener Will be called whenever the snapshot changes.
   * @returns A function to unsubscribe from the view model updates.
   */
  add = (t) => (this.listeners.add(t), () => {
    this.listeners.delete(t);
  });
  /**
   * Emit an update to all subscribed listeners.
   */
  emit = () => {
    for (const t of this.listeners)
      t();
  };
}
class u4 {
  subs;
  snapshot;
  props;
  disposables = new l0();
  constructor(t, n) {
    this.props = t, this.subs = new f0(), this.snapshot = new u0(n, () => {
      this.subs.emit();
    });
  }
  subscribe = (t) => this.subs.add(t);
  /**
   * Returns the current snapshot of the view model.
   */
  getSnapshot = () => this.snapshot.current;
  /**
   * Relinquish any resources held by this view-model.
   */
  dispose() {
    this.disposables.dispose();
  }
  /**
   * Whether this view-model has been disposed.
   */
  get isDisposed() {
    return this.disposables.isDisposed;
  }
}
class d0 {
  constructor(t) {
    this.snapshot = t;
  }
  getSnapshot = () => this.snapshot;
  subscribe(t) {
    return () => {
    };
  }
}
function f4(e) {
  const [t, n] = ge(e);
  return on(() => {
    let r = t;
    if (t.isDisposed) {
      const o = e();
      r = o, n(o);
    }
    return () => {
      r.dispose();
    };
  }, []), t;
}
function d4(e, t) {
  return ct(() => {
    const n = new d0(e);
    return Object.assign(n, t), n;
  }, [e, t]);
}
function se(e) {
  return (0,react.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot);
}
var Wf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof __webpack_require__.g < "u" ? __webpack_require__.g : typeof self < "u" ? self : {};
function Zf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var da = { exports: {} };
var Jc;
function p0() {
  return Jc || (Jc = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (a = o(a, r(s)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var i = "";
        for (var s in a)
          t.call(a, s) && a[s] && (i = o(i, s));
        return i;
      }
      function o(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(da)), da.exports;
}
var m0 = p0();
const re = /* @__PURE__ */ Zf(m0), h0 = "_mediaBody_11o4b_8", g0 = {
  mediaBody: h0
};
function y0({
  as: e,
  className: t,
  children: n,
  ...r
}) {
  const o = e || "div";
  return /* @__PURE__ */ p.createElement(o, { className: re("mx_MediaBody", g0.mediaBody, t), ...r }, n);
}
const v0 = "_flex_4dswl_9", b0 = {
  flex: v0
};
function Z({
  as: e = "div",
  display: t = "flex",
  direction: n = "row",
  align: r = "start",
  justify: o = "start",
  gap: a = "0",
  wrap: i = "nowrap",
  className: s,
  children: c,
  ...l
}) {
  const f = (0,react.useMemo)(
    () => ({
      "--mx-flex-display": t,
      "--mx-flex-direction": n,
      "--mx-flex-align": r,
      "--mx-flex-justify": o,
      "--mx-flex-gap": a,
      "--mx-flex-wrap": i
    }),
    [r, n, t, a, o, i]
  );
  return react.createElement(e, { ...l, className: re(b0.flex, s), style: f }, c);
}
const _0 = "_audioPlayer_1ly1h_8", w0 = "_mediaInfo_1ly1h_12", E0 = "_mediaName_1ly1h_17", A0 = "_byline_1ly1h_26", S0 = "_clock_1ly1h_30", T0 = "_error_1ly1h_34", wn = {
  audioPlayer: _0,
  mediaInfo: w0,
  mediaName: E0,
  byline: A0,
  clock: S0,
  error: T0
};
var Gr = { exports: {} }, Xn = {};
var Qc;
function k0() {
  if (Qc) return Xn;
  Qc = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(r, o, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      a = {};
      for (var s in o)
        s !== "key" && (a[s] = o[s]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return Xn.Fragment = t, Xn.jsx = n, Xn.jsxs = n, Xn;
}
var er = {};
var Xc;
function R0() {
  return Xc || (Xc = 1,  false && 0), er;
}
var el;
function I0() {
  return el || (el = 1,  true ? Gr.exports = k0() : 0), Gr.exports;
}
var P = I0();
function Jf(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "m8.98 4.677 9.921 5.58c1.36.764 1.36 2.722 0 3.486l-9.92 5.58C7.647 20.073 6 19.11 6 17.58V6.42c0-1.53 1.647-2.493 2.98-1.743"
    })
  });
}
Jf.displayName = "PlaySolidIcon";
const j0 = (0,react.forwardRef)(Jf);
function Qf(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M8 4a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2m8 0a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2"
    })
  });
}
Qf.displayName = "PauseSolidIcon";
const O0 = (0,react.forwardRef)(Qf), P0 = "_button_yfjla_8", C0 = {
  button: P0
}, Xf = (0,react.createContext)(null);
Xf.displayName = "I18nContext";
function de() {
  const e = (0,react.useContext)(Xf);
  if (!e)
    throw new Error("useI18n must be used within an I18nContext.Provider");
  return e;
}
function M0({
  disabled: e = !1,
  playing: t = !1,
  togglePlay: n,
  ...r
}) {
  const { translate: o } = de(), a = o(t ? "action|pause" : "action|play");
  return /* @__PURE__ */ p.createElement(
    dt,
    {
      size: "32px",
      "aria-label": a,
      tooltip: a,
      onClick: n,
      className: C0.button,
      disabled: e,
      ...r
    },
    t ? /* @__PURE__ */ p.createElement(O0, null) : /* @__PURE__ */ p.createElement(j0, null)
  );
}
function N0(e, t = 2) {
  if (e === 0) return "0 Bytes";
  const n = 1024, r = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(e) / Math.log(n));
  return parseFloat((e / Math.pow(n, a)).toFixed(r)) + " " + o[a];
}
function Me(e, t, n, r, o) {
  return Et(t, ((a, i) => {
    const s = a[i];
    if (s === void 0)
      throw new TypeError(Xs(i));
    return s;
  })(e, t), n, r, o);
}
function Et(e, t, n, r, o, a) {
  const i = mr(t, n, r);
  if (o && t !== i)
    throw new RangeError(p1(e, t, n, r, a));
  return i;
}
function Oe(e) {
  return e !== null && /object|function/.test(typeof e);
}
function qe(e, t = Map) {
  const n = new t();
  return (r, ...o) => {
    if (n.has(r))
      return n.get(r);
    const a = e(r, ...o);
    return n.set(r, a), a;
  };
}
function pr(e) {
  return Mn({
    name: e
  }, 1);
}
function Mn(e, t) {
  return At(((n) => ({
    value: n,
    configurable: 1,
    writable: !t
  })), e);
}
function x0(e) {
  return At(((t) => ({
    get: t,
    configurable: 1
  })), e);
}
function is(e) {
  return {
    [Symbol.toStringTag]: {
      value: e,
      configurable: 1
    }
  };
}
function zn(e, t) {
  const n = {};
  let r = e.length;
  for (const o of t)
    n[e[--r]] = o;
  return n;
}
function At(e, t, n) {
  const r = {};
  for (const o in t)
    r[o] = e(t[o], o, n);
  return r;
}
function Oo(e, t, n) {
  const r = {};
  for (let o = 0; o < t.length; o++) {
    const a = t[o];
    r[a] = e(a, o, n);
  }
  return r;
}
function ed(e, t, n) {
  const r = {};
  for (let o = 0; o < e.length; o++)
    r[t[o]] = n[e[o]];
  return r;
}
function Xe(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r of e)
    n[r] = t[r];
  return n;
}
function tl(e, t) {
  for (const n of t)
    if (n in e)
      return 1;
  return 0;
}
function td(e, t, n) {
  for (const r of e)
    if (t[r] !== n[r])
      return 0;
  return 1;
}
function nd(e, t, n) {
  const r = {
    ...n
  };
  for (let o = 0; o < t; o++)
    r[e[o]] = 0;
  return r;
}
function Q(e, ...t) {
  return (...n) => e(...t, ...n);
}
function nl(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Sr(e) {
  return e.slice().sort();
}
function po(e, t) {
  return String(t).padStart(e, "0");
}
function Dt(e, t) {
  return Math.sign(e - t);
}
function mr(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function vt(e, t) {
  return [Math.floor(e / t), ur(e, t)];
}
function ur(e, t) {
  return (e % t + t) % t;
}
function Lt(e, t) {
  return [Po(e, t), ss(e, t)];
}
function Po(e, t) {
  return Math.trunc(e / t) || 0;
}
function ss(e, t) {
  return e % t || 0;
}
function Yr(e) {
  return Math.abs(e % 1) === 0.5;
}
function rd(e, t, n) {
  let r = 0, o = 0;
  for (let s = 0; s <= t; s++) {
    const c = e[n[s]], l = ft[s], f = ue / l, [d, u] = Lt(c, f);
    r += u * l, o += d;
  }
  const [a, i] = Lt(r, ue);
  return [o + a, i];
}
function Co(e, t, n) {
  const r = {};
  for (let o = t; o >= 0; o--) {
    const a = ft[o];
    r[n[o]] = Po(e, a), e = ss(e, a);
  }
  return r;
}
function B0(e) {
  if (e !== void 0)
    return Te(e);
}
function D0(e) {
  if (e !== void 0)
    return yt(e);
}
function od(e) {
  if (e !== void 0)
    return cs(e);
}
function yt(e) {
  return sd(cs(e));
}
function cs(e) {
  return id(Gg(e));
}
function ad(e, t) {
  if (t == null)
    throw new RangeError(Xs(e));
  return t;
}
function Tr(e) {
  if (!Oe(e))
    throw new TypeError(vg);
  return e;
}
function ls(e, t, n = e) {
  if (typeof t !== e)
    throw new TypeError(Jt(n, t));
  return t;
}
function id(e, t = "number") {
  if (!Number.isInteger(e))
    throw new RangeError(dg(t, e));
  return e || 0;
}
function sd(e, t = "number") {
  if (e <= 0)
    throw new RangeError(pg(t, e));
  return e;
}
function us(e) {
  if (typeof e == "symbol")
    throw new TypeError(yg);
  return String(e);
}
function io(e, t) {
  return Oe(e) ? String(e) : Te(e, t);
}
function fs(e) {
  if (typeof e == "string")
    return BigInt(e);
  if (typeof e != "bigint")
    throw new TypeError(gg(e));
  return e;
}
function cd(e, t = "number") {
  if (typeof e == "bigint")
    throw new TypeError(hg(t));
  if (e = Number(e), !Number.isFinite(e))
    throw new RangeError(mg(t, e));
  return e;
}
function Ie(e, t) {
  return Math.trunc(cd(e, t)) || 0;
}
function ds(e, t) {
  return id(cd(e, t), t);
}
function rl(e, t) {
  return sd(Ie(e, t), t);
}
function ps(e, t) {
  let [n, r] = Lt(t, ue), o = e + n;
  const a = Math.sign(o);
  return a && a === -Math.sign(r) && (o -= a, r += a * ue), [o, r];
}
function Nn(e, t, n = 1) {
  return ps(e[0] + t[0] * n, e[1] + t[1] * n);
}
function an(e, t) {
  return ps(e[0], e[1] + t);
}
function lt(e, t) {
  return Nn(t, e, -1);
}
function $e(e, t) {
  return Dt(e[0], t[0]) || Dt(e[1], t[1]);
}
function ld(e, t, n) {
  return $e(e, t) === -1 || $e(e, n) === 1;
}
function ms(e, t = 1) {
  const n = BigInt(ue / t);
  return [Number(e / n), Number(e % n) * t];
}
function mo(e, t = 1) {
  const n = ue / t, [r, o] = Lt(e, n);
  return [r, o * t];
}
function ut(e, t = 1, n) {
  const [r, o] = e, [a, i] = Lt(o, t);
  return r * (ue / t) + (a + (n ? i / t : 0));
}
function hs(e, t, n = vt) {
  const [r, o] = e, [a, i] = n(o, t);
  return [r * (ue / t) + a, i];
}
function gs(e) {
  return Me(e, "isoYear", _r, br, 1), e.isoYear === _r ? Me(e, "isoMonth", 4, 12, 1) : e.isoYear === br && Me(e, "isoMonth", 1, 9, 1), e;
}
function We(e) {
  return Be({
    ...e,
    ...De,
    isoHour: 12
  }), e;
}
function Be(e) {
  const t = Me(e, "isoYear", _r, br, 1), n = t === _r ? 1 : t === br ? -1 : 0;
  return n && pt(Ee({
    ...e,
    isoDay: e.isoDay + n,
    isoNanosecond: e.isoNanosecond - n
  })), e;
}
function pt(e) {
  if (!e || ld(e, ey, Xg))
    throw new RangeError(Qt);
  return e;
}
function qt(e) {
  return rd(e, 5, nt)[1];
}
function Mo(e) {
  const [t, n] = vt(e, ue);
  return [Co(n, 5, nt), t];
}
function ol(e) {
  return hs(e, st);
}
function je(e) {
  return Fn(e.isoYear, e.isoMonth, e.isoDay, e.isoHour, e.isoMinute, e.isoSecond, e.isoMillisecond);
}
function Ee(e) {
  const t = je(e);
  if (t !== void 0) {
    const [n, r] = Lt(t, xe);
    return [n, r * It + (e.isoMicrosecond || 0) * Cr + (e.isoNanosecond || 0)];
  }
}
function ys(e, t) {
  const [n, r] = Mo(qt(e) - t);
  return pt(Ee({
    ...e,
    isoDay: e.isoDay + r,
    ...n
  }));
}
function ho(...e) {
  return Fn(...e) / E1;
}
function Fn(...e) {
  const [t, n] = ud(...e), r = t.valueOf();
  if (!isNaN(r))
    return r - n * xe;
}
function ud(e, t = 1, n = 1, r = 0, o = 0, a = 0, i = 0) {
  const s = e === _r ? 1 : e === br ? -1 : 0, c = /* @__PURE__ */ new Date();
  return c.setUTCHours(r, o, a, i), c.setUTCFullYear(e, t - 1, n + s), [c, s];
}
function Ln(e, t) {
  let [n, r] = an(e, t);
  r < 0 && (r += ue, n -= 1);
  const [o, a] = vt(r, It), [i, s] = vt(a, Cr);
  return No(n * xe + o, i, s);
}
function No(e, t = 0, n = 0) {
  const r = Math.ceil(Math.max(0, Math.abs(e) - fc) / xe) * Math.sign(e), o = new Date(e - r * xe);
  return zn(ta, [o.getUTCFullYear(), o.getUTCMonth() + 1, o.getUTCDate() + r, o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds(), t, n]);
}
function vs(e, t) {
  if (t < -fc)
    throw new RangeError(Qt);
  const n = e.formatToParts(t), r = {};
  for (const o of n)
    r[o.type] = o.value;
  return r;
}
function bs(e) {
  return [e.isoYear, e.isoMonth, e.isoDay];
}
function fd(e, t) {
  return [t, 0];
}
function dd() {
  return Mt;
}
function pd(e, t) {
  switch (t) {
    case 2:
      return _s(e) ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}
function md(e) {
  return _s(e) ? 366 : 365;
}
function _s(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function hd(e) {
  const [t, n] = ud(e.isoYear, e.isoMonth, e.isoDay);
  return ur(t.getUTCDay() - n, 7) || 7;
}
function gd(e) {
  return this.id === Yn ? (({ isoYear: t }) => t < 1 ? ["gregory-inverse", 1 - t] : ["gregory", t])(e) : this.id === Ut ? ry(e) : [];
}
function z0(e) {
  const t = je(e);
  if (t < ny) {
    const { isoYear: a } = e;
    return a < 1 ? ["japanese-inverse", 1 - a] : ["japanese", a];
  }
  const n = vs(wc(Ut), t), { era: r, eraYear: o } = n1(n, Ut);
  return [r, o];
}
function xo(e) {
  return fn(e), qn(e, 1), e;
}
function fn(e) {
  return yd(e, 1), e;
}
function al(e) {
  return td(cc, e, yd(e));
}
function yd(e, t) {
  const { isoYear: n } = e, r = Me(e, "isoMonth", 1, dd(), t);
  return {
    isoYear: n,
    isoMonth: r,
    isoDay: Me(e, "isoDay", 1, pd(n, r), t)
  };
}
function qn(e, t) {
  return zn(nt, [Me(e, "isoHour", 0, 23, t), Me(e, "isoMinute", 0, 59, t), Me(e, "isoSecond", 0, 59, t), Me(e, "isoMillisecond", 0, 999, t), Me(e, "isoMicrosecond", 0, 999, t), Me(e, "isoNanosecond", 0, 999, t)]);
}
function ne(e) {
  return e === void 0 ? 0 : D1(Tr(e));
}
function Bo(e, t = 0) {
  e = mt(e);
  const n = z1(e), r = py(e, t);
  return [D1(e), r, n];
}
function $n(e, t, n, r = 9, o = 0, a = 4) {
  t = mt(t);
  let i = B1(t, r, o), s = As(t), c = xr(t, a);
  const l = Nr(t, r, o, 1);
  return i == null ? i = Math.max(n, l) : wd(i, l), s = Ss(s, l, 1), e && (c = ((f) => f < 4 ? (f + 2) % 4 : f)(c)), [i, l, s, c];
}
function Do(e, t = 6, n) {
  let r = As(e = zo(e, wo));
  const o = xr(e, 7);
  let a = Nr(e, t);
  return a = ad(wo, a), r = Ss(r, a, void 0, n), [a, r, o];
}
function ws(e) {
  return dc(mt(e));
}
function vd(e, t) {
  return Es(mt(e), t);
}
function F0(e) {
  const t = zo(e, _a), n = Vt(_a, fy, t, 0);
  if (!n)
    throw new RangeError(Jt(_a, n));
  return n;
}
function Es(e, t = 4) {
  const n = _d(e);
  return [xr(e, 4), ...bd(Nr(e, t), n)];
}
function bd(e, t) {
  return e != null ? [ft[e], e < 4 ? 9 - 3 * e : -1] : [t === void 0 ? 1 : 10 ** (9 - t), t];
}
function As(e) {
  const t = e[fr];
  return t === void 0 ? 1 : Ie(t, fr);
}
function Ss(e, t, n, r) {
  const o = r ? ue : ft[t + 1];
  if (o) {
    const a = ft[t];
    if (o % ((e = Et(fr, e, 1, o / a - (r ? 0 : 1), 1)) * a))
      throw new RangeError(Jt(fr, e));
  } else
    e = Et(fr, e, 1, n ? 10 ** 9 : 1, 1);
  return e;
}
function _d(e) {
  let t = e[ba];
  if (t !== void 0) {
    if (typeof t != "number") {
      if (us(t) === "auto")
        return;
      throw new RangeError(Jt(ba, t));
    }
    t = Et(ba, Math.floor(t), 0, 9, 1);
  }
  return t;
}
function mt(e) {
  return e === void 0 ? {} : Tr(e);
}
function zo(e, t) {
  return typeof e == "string" ? {
    [t]: e
  } : Tr(e);
}
function Fo(e) {
  return {
    overflow: oy[e]
  };
}
function Ts(e, t, n = 9, r = 0, o) {
  let a = t[e];
  if (a === void 0)
    return o ? r : void 0;
  if (a = us(a), a === "auto")
    return o ? r : null;
  let i = Vi[a];
  if (i === void 0 && (i = Zg[a]), i === void 0)
    throw new RangeError(h1(e, a, Vi));
  return Et(e, i, r, n, 1, ec), i;
}
function Vt(e, t, n, r = 0) {
  const o = n[e];
  if (o === void 0)
    return r;
  const a = us(o), i = t[a];
  if (i === void 0)
    throw new RangeError(h1(e, a, t));
  return i;
}
function wd(e, t) {
  if (t > e)
    throw new RangeError(Fg);
}
function kt(e) {
  return {
    branding: gc,
    epochNanoseconds: e
  };
}
function et(e, t, n) {
  return {
    branding: Xt,
    calendar: n,
    timeZone: t,
    epochNanoseconds: e
  };
}
function tt(e, t = e.calendar) {
  return {
    branding: Wn,
    calendar: t,
    ...Xe(Jg, e)
  };
}
function Rt(e, t = e.calendar) {
  return {
    branding: Br,
    calendar: t,
    ...Xe(lc, e)
  };
}
function hr(e, t = e.calendar) {
  return {
    branding: pc,
    calendar: t,
    ...Xe(lc, e)
  };
}
function go(e, t = e.calendar) {
  return {
    branding: mc,
    calendar: t,
    ...Xe(lc, e)
  };
}
function ht(e) {
  return {
    branding: hc,
    ...Xe(C1, e)
  };
}
function _e(e) {
  return {
    branding: yc,
    sign: Gt(e),
    ...Xe(ac, e)
  };
}
function ks(e) {
  return hs(e.epochNanoseconds, It)[0];
}
function L0(e) {
  return ((t, n = 1) => {
    const [r, o] = t, a = Math.floor(o / n), i = ue / n;
    return BigInt(r) * BigInt(i) + BigInt(a);
  })(e.epochNanoseconds);
}
function Ed(e) {
  return e.epochNanoseconds;
}
function q0(e, t, n, r, o) {
  const a = sn(r), [i, s] = ((h, y) => {
    const S = y((h = zo(h, Wi))[N1]);
    let g = dy(h);
    return g = ad(Wi, g), [g, S];
  })(o, e), c = Math.max(i, a);
  if (!s && yr(c, s))
    return il(r, i);
  if (!s)
    throw new RangeError(Qo);
  if (!r.sign)
    return 0;
  const [l, f, d] = Uo(t, n, s), u = xs(d), v = Ko(d), m = Bs(d), w = v(f, l, r);
  xn(s) || (Be(l), Be(w));
  const E = m(f, l, w, i);
  return yr(i, s) ? il(E, i) : ((h, y, S, g, b, A, k) => {
    const O = Gt(h), [C, N] = Rs(g, sc(S, h), S, O, b, A, k), q = Is(y, C, N);
    return h[ae[S]] + q * O;
  })(E, u(w), i, f, l, u, v);
}
function il(e, t) {
  return ut(Ae(e), ft[t], 1);
}
function Rs(e, t, n, r, o, a, i) {
  const s = ae[n], c = {
    ...t,
    [s]: t[s] + r
  }, l = i(e, o, t), f = i(e, o, c);
  return [a(l), a(f)];
}
function Is(e, t, n) {
  const r = ut(lt(t, n));
  if (!r)
    throw new RangeError(Gn);
  return ut(lt(t, e)) / r;
}
function $0(e, t) {
  const [n, r, o] = Do(t, 5, 1);
  return kt(qo(e.epochNanoseconds, n, r, o, 1));
}
function H0(e, t, n) {
  let { epochNanoseconds: r, timeZone: o, calendar: a } = t;
  const [i, s, c] = Do(n);
  if (i === 0 && s === 1)
    return t;
  const l = e(o);
  if (i === 6)
    r = ((f, d, u, v) => {
      const m = Ue(u, d), [w, E] = f(m), h = u.epochNanoseconds, y = Ht(d, w), S = Ht(d, E);
      if (ld(h, y, S))
        throw new RangeError(Gn);
      return Rd(Is(h, y, S), v) ? S : y;
    })(Td, l, t, c);
  else {
    const f = l.R(r);
    r = Hn(l, Ad(Ln(r, f), i, s, c), f, 2, 0, 1);
  }
  return et(r, o, a);
}
function U0(e, t) {
  return tt(Ad(e, ...Do(t)), e.calendar);
}
function K0(e, t) {
  const [n, r, o] = Do(t, 5);
  var a;
  return ht((a = o, js(e, kr(n, r), a)[0]));
}
function V0(e, t) {
  const n = e(t.timeZone), r = Ue(t, n), [o, a] = Td(r), i = ut(lt(Ht(n, o), Ht(n, a)), ea, 1);
  if (i <= 0)
    throw new RangeError(Gn);
  return i;
}
function G0(e, t) {
  const { timeZone: n, calendar: r } = t, o = ((a, i, s) => Ht(i, a(Ue(s, i))))(kd, e(n), t);
  return et(o, n, r);
}
function Ad(e, t, n, r) {
  return Sd(e, kr(t, n), r);
}
function Sd(e, t, n) {
  const [r, o] = js(e, t, n);
  return Be({
    ...dn(e, o),
    ...r
  });
}
function js(e, t, n) {
  return Mo($t(qt(e), t, n));
}
function yo(e) {
  return $t(e, Xo, 7);
}
function kr(e, t) {
  return ft[e] * t;
}
function Td(e) {
  const t = kd(e);
  return [t, dn(t, 1)];
}
function kd(e) {
  return Qg(6, e);
}
function Y0(e, t, n) {
  const r = Math.min(sn(e), 6);
  return Un($o(Ae(e, r), t, n), r);
}
function Lo(e, t, n, r, o, a, i, s, c, l) {
  if (r === 0 && o === 1)
    return e;
  const f = yr(r, s) ? xn(s) && r < 6 && n >= 6 ? Z0 : W0 : J0;
  let [d, u, v] = f(e, t, n, r, o, a, i, s, c, l);
  return v && r !== 7 && (d = ((m, w, E, h, y, S, g, b) => {
    const A = Gt(m);
    for (let k = h + 1; k <= E; k++) {
      if (k === 7 && E !== 7)
        continue;
      const O = sc(k, m);
      O[ae[k]] += A;
      const C = ut(lt(g(b(y, S, O)), w));
      if (C && Math.sign(C) !== A)
        break;
      m = O;
    }
    return m;
  })(d, u, n, Math.max(6, r), i, s, c, l)), d;
}
function qo(e, t, n, r, o) {
  if (t === 6) {
    const a = ((i) => i[0] + i[1] / ue)(e);
    return [$t(a, n, r), 0];
  }
  return $o(e, kr(t, n), r, o);
}
function $o(e, t, n, r) {
  let [o, a] = e;
  r && a < 0 && (a += ue, o -= 1);
  const [i, s] = vt($t(a, t, n), ue);
  return ps(o + i, s);
}
function $t(e, t, n) {
  return Rd(e / t, n) * t;
}
function Rd(e, t) {
  return gy[t](e);
}
function W0(e, t, n, r, o, a) {
  const i = Gt(e), s = Ae(e), c = qo(s, r, o, a), l = lt(s, c), f = Math.sign(c[0] - s[0]) === i, d = Un(c, Math.min(n, 6));
  return [{
    ...e,
    ...d
  }, Nn(t, l), f];
}
function Z0(e, t, n, r, o, a, i, s, c, l) {
  const f = Gt(e) || 1, d = ut(Ae(e, 5)), u = kr(r, o);
  let v = $t(d, u, a);
  const [m, w] = Rs(i, {
    ...e,
    ...ic
  }, 6, f, s, c, l), E = v - ut(lt(m, w));
  let h = 0;
  E && Math.sign(E) !== f ? t = an(m, v) : (h += f, v = $t(E, u, a), t = an(w, v));
  const y = Vo(v);
  return [{
    ...e,
    ...y,
    days: e.days + h
  }, t, !!h];
}
function J0(e, t, n, r, o, a, i, s, c, l) {
  const f = Gt(e), d = ae[r], u = sc(r, e);
  r === 7 && (e = {
    ...e,
    weeks: e.weeks + Math.trunc(e.days / 7)
  });
  const v = Po(e[d], o) * o;
  u[d] = v;
  const [m, w] = Rs(i, u, r, o * f, s, c, l), E = v + Is(t, m, w) * f * o, h = $t(E, o, a), y = Math.sign(h - E) === f;
  return u[d] = h, [u, y ? w : m, y];
}
function sl(e, t, n, r) {
  const [o, a, i, s] = ((l) => {
    const f = Es(l = mt(l));
    return [l.timeZone, ...f];
  })(r), c = o !== void 0;
  return ((l, f, d, u, v, m) => {
    d = $o(d, v, u, 1);
    const w = f.R(d);
    return Os(Ln(d, w), m) + (l ? Rr(yo(w)) : "Z");
  })(c, t(c ? e(o) : gn), n.epochNanoseconds, a, i, s);
}
function cl(e, t, n) {
  const [r, o, a, i, s, c] = ((l) => {
    l = mt(l);
    const f = dc(l), d = _d(l), u = hy(l), v = xr(l, 4), m = Nr(l, 4);
    return [f, my(l), u, v, ...bd(m, d)];
  })(n);
  return ((l, f, d, u, v, m, w, E, h, y) => {
    u = $o(u, h, E, 1);
    const S = l(d).R(u);
    return Os(Ln(u, S), y) + Rr(yo(S), w) + ((g, b) => b !== 1 ? "[" + (b === 2 ? "!" : "") + g + "]" : "")(d, m) + Ps(f, v);
  })(e, t.calendar, t.timeZone, t.epochNanoseconds, r, o, a, i, s, c);
}
function ll(e, t) {
  const [n, r, o, a] = ((l) => (l = mt(l), [dc(l), ...Es(l)]))(t);
  return i = e.calendar, s = n, c = a, Os(Sd(e, o, r), c) + Ps(i, s);
  // removed by dead control flow
 var i, s, c; 
}
function ul(e, t) {
  return n = e.calendar, r = e, o = ws(t), vo(r) + Ps(n, o);
  // removed by dead control flow
 var n, r, o; 
}
function fl(e, t) {
  return Id(e.calendar, jd, e, ws(t));
}
function dl(e, t) {
  return Id(e.calendar, Q0, e, ws(t));
}
function pl(e, t) {
  const [n, r, o] = vd(t);
  return a = o, Od(js(e, r, n)[0], a);
  // removed by dead control flow
 var a; 
}
function pa(e, t) {
  const [n, r, o] = vd(t, 3);
  return r > 1 && pn(e = {
    ...e,
    ...Y0(e, r, n)
  }), ((a, i) => {
    const { sign: s } = a, c = s === -1 ? Pe(a) : a, { hours: l, minutes: f } = c, [d, u] = hs(Ae(c, 3), st, Lt);
    Nd(d);
    const v = Cs(u, i), m = i >= 0 || !s || v;
    return (s < 0 ? "-" : "") + "P" + ml({
      Y: rn(c.years),
      M: rn(c.months),
      W: rn(c.weeks),
      D: rn(c.days)
    }) + (l || f || d || m ? "T" + ml({
      H: rn(l),
      M: rn(f),
      S: rn(d, m) + v
    }) : "");
  })(e, o);
}
function Id(e, t, n, r) {
  const o = r > 1 || r === 0 && e !== ee;
  return r === 1 ? e === ee ? t(n) : vo(n) : o ? vo(n) + Pd(e, r === 2) : t(n);
}
function ml(e) {
  const t = [];
  for (const n in e) {
    const r = e[n];
    r && t.push(r, n);
  }
  return t.join("");
}
function Os(e, t) {
  return vo(e) + "T" + Od(e, t);
}
function vo(e) {
  return jd(e) + "-" + Ze(e.isoDay);
}
function jd(e) {
  const { isoYear: t } = e;
  return (t < 0 || t > 9999 ? Cd(t) + po(6, Math.abs(t)) : po(4, t)) + "-" + Ze(e.isoMonth);
}
function Q0(e) {
  return Ze(e.isoMonth) + "-" + Ze(e.isoDay);
}
function Od(e, t) {
  const n = [Ze(e.isoHour), Ze(e.isoMinute)];
  return t !== -1 && n.push(Ze(e.isoSecond) + ((r, o, a, i) => Cs(r * It + o * Cr + a, i))(e.isoMillisecond, e.isoMicrosecond, e.isoNanosecond, t)), n.join(":");
}
function Rr(e, t = 0) {
  if (t === 1)
    return "";
  const [n, r] = vt(Math.abs(e), ea), [o, a] = vt(r, Xo), [i, s] = vt(a, st);
  return Cd(e) + Ze(n) + ":" + Ze(o) + (i || s ? ":" + Ze(i) + Cs(s) : "");
}
function Ps(e, t) {
  return t !== 1 && (t > 1 || t === 0 && e !== ee) ? Pd(e, t === 2) : "";
}
function Pd(e, t) {
  return "[" + (t ? "!" : "") + "u-ca=" + e + "]";
}
function Cs(e, t) {
  let n = po(9, e);
  return n = t === void 0 ? n.replace(by, "") : n.slice(0, t), n ? "." + n : "";
}
function Cd(e) {
  return e < 0 ? "-" : "+";
}
function rn(e, t) {
  return e || t ? e.toLocaleString("fullwide", {
    useGrouping: 0
  }) : "";
}
function X0(e, t) {
  const { epochNanoseconds: n } = e, r = (t.R ? t : t(e.timeZone)).R(n), o = Ln(n, r);
  return {
    calendar: e.calendar,
    ...o,
    offsetNanoseconds: r
  };
}
function Hn(e, t, n, r = 0, o = 0, a, i) {
  if (n !== void 0 && r === 1 && (r === 1 || i))
    return ys(t, n);
  const s = e.I(t);
  if (n !== void 0 && r !== 3) {
    const c = ((l, f, d, u) => {
      const v = Ee(f);
      u && (d = yo(d));
      for (const m of l) {
        let w = ut(lt(m, v));
        if (u && (w = yo(w)), w === d)
          return m;
      }
    })(s, t, n, a);
    if (c !== void 0)
      return c;
    if (r === 0)
      throw new RangeError(Mg);
  }
  return i ? Ee(t) : Ir(e, t, o, s);
}
function Ir(e, t, n = 0, r = e.I(t)) {
  if (r.length === 1)
    return r[0];
  if (n === 1)
    throw new RangeError(Ng);
  if (r.length)
    return r[n === 3 ? 1 : 0];
  const o = Ee(t), a = ((s, c) => {
    const l = s.R(an(c, -ue));
    return ((f) => {
      if (f > ue)
        throw new RangeError(Cg);
      return f;
    })(s.R(an(c, ue)) - l);
  })(e, o), i = a * (n === 2 ? -1 : 1);
  return (r = e.I(Ln(o, i)))[n === 2 ? 0 : r.length - 1];
}
function Ht(e, t) {
  const n = e.I(t);
  if (n.length)
    return n[0];
  const r = an(Ee(t), -ue);
  return e.O(r, 1);
}
function hl(e, t, n) {
  return kt(pt(Nn(t.epochNanoseconds, ((r) => {
    if (xd(r))
      throw new RangeError(Dg);
    return Ae(r, 5);
  })(e ? Pe(n) : n))));
}
function gl(e, t, n, r, o, a = /* @__PURE__ */ Object.create(null)) {
  const i = t(r.timeZone), s = e(r.calendar);
  return {
    ...r,
    ...Ms(i, s, r, n ? Pe(o) : o, a)
  };
}
function yl(e, t, n, r, o = /* @__PURE__ */ Object.create(null)) {
  const { calendar: a } = n;
  return tt(Ns(e(a), n, t ? Pe(r) : r, o), a);
}
function vl(e, t, n, r, o) {
  const { calendar: a } = n;
  return Rt(Ho(e(a), n, t ? Pe(r) : r, o), a);
}
function bl(e, t, n, r, o) {
  const a = n.calendar, i = e(a);
  let s = We(gr(i, n));
  t && (r = Ds(r)), r.sign < 0 && (s = i.P(s, {
    ...Se,
    months: 1
  }), s = dn(s, -1));
  const c = i.P(s, r, o);
  return hr(gr(i, c), a);
}
function _l(e, t, n) {
  return ht(Md(t, e ? Pe(n) : n)[0]);
}
function Ms(e, t, n, r, o) {
  const a = Ae(r, 5);
  let i = n.epochNanoseconds;
  if (xd(r)) {
    const s = Ue(n, e);
    i = Nn(Ir(e, {
      ...Ho(t, s, {
        ...r,
        ...ic
      }, o),
      ...Xe(nt, s)
    }), a);
  } else
    i = Nn(i, a), ne(o);
  return {
    epochNanoseconds: pt(i)
  };
}
function Ns(e, t, n, r) {
  const [o, a] = Md(t, n);
  return Be({
    ...Ho(e, t, {
      ...n,
      ...ic,
      days: n.days + a
    }, r),
    ...o
  });
}
function Ho(e, t, n, r) {
  if (n.years || n.months || n.weeks)
    return e.P(t, n, r);
  ne(r);
  const o = n.days + Ae(n, 5)[0];
  return o ? We(dn(t, o)) : t;
}
function gr(e, t, n = 1) {
  return dn(t, n - e.day(t));
}
function Md(e, t) {
  const [n, r] = Ae(t, 5), [o, a] = Mo(qt(e) + r);
  return [o, n + a];
}
function dn(e, t) {
  return t ? {
    ...e,
    ...No(je(e) + t * xe)
  } : e;
}
function Uo(e, t, n) {
  const r = e(n.calendar);
  return xn(n) ? [n, r, t(n.timeZone)] : [{
    ...n,
    ...De
  }, r];
}
function xs(e) {
  return e ? Ed : Ee;
}
function Ko(e) {
  return e ? Q(Ms, e) : Ns;
}
function Bs(e) {
  return e ? Q(Ah, e) : Sh;
}
function xn(e) {
  return e && e.epochNanoseconds;
}
function yr(e, t) {
  return e <= 6 - (xn(t) ? 1 : 0);
}
function wl(e, t, n, r, o, a, i) {
  const s = e(mt(i).relativeTo), c = Math.max(sn(o), sn(a));
  if (yr(c, s))
    return _e(pn(((w, E, h, y) => {
      const S = Nn(Ae(w), Ae(E), y ? -1 : 1);
      if (!Number.isFinite(S[0]))
        throw new RangeError(Qt);
      return {
        ...Se,
        ...Un(S, h)
      };
    })(o, a, c, r)));
  if (!s)
    throw new RangeError(Qo);
  r && (a = Pe(a));
  const [l, f, d] = Uo(t, n, s), u = Ko(d), v = Bs(d), m = u(f, l, o);
  return _e(v(f, l, u(f, m, a), c));
}
function eh(e, t, n, r, o) {
  const a = sn(r), [i, s, c, l, f] = ((A, k, O) => {
    A = zo(A, wo);
    let C = B1(A);
    const N = O(A[N1]);
    let q = As(A);
    const G = xr(A, 7);
    let ce = Nr(A);
    if (C === void 0 && ce === void 0)
      throw new RangeError(zg);
    if (ce == null && (ce = 0), C == null && (C = Math.max(ce, k)), wd(C, ce), q = Ss(q, ce, 1), q > 1 && ce > 5 && C !== ce)
      throw new RangeError("For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit");
    return [C, ce, q, G, N];
  })(o, a, e), d = Math.max(a, i);
  if (!f && d <= 6)
    return _e(pn(((A, k, O, C, N) => {
      const q = qo(Ae(A), O, C, N);
      return {
        ...Se,
        ...Un(q, k)
      };
    })(r, i, s, c, l)));
  if (!xn(f) && !r.sign)
    return r;
  if (!f)
    throw new RangeError(Qo);
  const [u, v, m] = Uo(t, n, f), w = xs(m), E = Ko(m), h = Bs(m), y = E(v, u, r);
  xn(f) || (Be(u), Be(y));
  let S = h(v, u, y, i);
  const g = r.sign, b = Gt(S);
  if (g && b && g !== b)
    throw new RangeError(Gn);
  return S = Lo(S, w(y), i, s, c, l, v, u, w, E), _e(S);
}
function th(e) {
  return e.sign === -1 ? Ds(e) : e;
}
function Ds(e) {
  return _e(Pe(e));
}
function Pe(e) {
  const t = {};
  for (const n of ae)
    t[n] = -1 * e[n] || 0;
  return t;
}
function nh(e) {
  return !e.sign;
}
function Gt(e, t = ae) {
  let n = 0;
  for (const r of t) {
    const o = Math.sign(e[r]);
    if (o) {
      if (n && n !== o)
        throw new RangeError(Bg);
      n = o;
    }
  }
  return n;
}
function pn(e) {
  for (const t of Wg)
    Et(t, e[t], -Cl, Cl, 1);
  return Nd(ut(Ae(e), st)), e;
}
function Nd(e) {
  if (!Number.isSafeInteger(e))
    throw new RangeError(xg);
}
function Ae(e, t = 6) {
  return rd(e, t, ae);
}
function Un(e, t = 6) {
  const [n, r] = e, o = Co(r, t, ae);
  if (o[ae[t]] += n * (ue / ft[t]), !Number.isFinite(o[ae[t]]))
    throw new RangeError(Qt);
  return o;
}
function Vo(e, t = 5) {
  return Co(e, t, ae);
}
function xd(e) {
  return !!Gt(e, P1);
}
function sn(e) {
  let t = 9;
  for (; t > 0 && !e[ae[t]]; t--)
    ;
  return t;
}
function rh(e, t) {
  return [e, t];
}
function El(e) {
  const t = Math.floor(e / co) * co;
  return [t, t + co];
}
function oh(e) {
  const t = Yt(e = io(e));
  if (!t)
    throw new RangeError(Ne(e));
  let n;
  if (t.j)
    n = 0;
  else {
    if (!t.offset)
      throw new RangeError(Ne(e));
    n = mn(t.offset);
  }
  return t.timeZone && $s(t.timeZone, 1), kt(ys(xo(t), n));
}
function ah(e) {
  const t = Yt(Te(e));
  if (!t)
    throw new RangeError(Ne(e));
  if (t.timeZone)
    return Bd(t, t.offset ? mn(t.offset) : void 0);
  if (t.j)
    throw new RangeError(Ne(e));
  return zd(t);
}
function ih(e, t) {
  const n = Yt(Te(e));
  if (!n || !n.timeZone)
    throw new RangeError(Ne(e));
  const { offset: r } = n, o = r ? mn(r) : void 0, [, a, i] = Bo(t);
  return Bd(n, o, a, i);
}
function mn(e) {
  const t = $s(e);
  if (t === void 0)
    throw new RangeError(Ne(e));
  return t;
}
function sh(e) {
  const t = Yt(Te(e));
  if (!t || t.j)
    throw new RangeError(Ne(e));
  return tt(Dd(t));
}
function zs(e, t, n) {
  let r = Yt(Te(e));
  if (!r || r.j)
    throw new RangeError(Ne(e));
  return t ? r.calendar === ee && (r = r.isoYear === -271821 && r.isoMonth === 4 ? {
    ...r,
    isoDay: 20,
    ...De
  } : {
    ...r,
    isoDay: 1,
    ...De
  }) : n && r.calendar === ee && (r = {
    ...r,
    isoYear: _t
  }), Rt(r.C ? Dd(r) : zd(r));
}
function ch(e, t) {
  const n = Ls(Te(t));
  if (n)
    return Fs(n), hr(gs(fn(n)));
  const r = zs(t, 1);
  return hr(gr(e(r.calendar), r));
}
function Fs(e) {
  if (e.calendar !== ee)
    throw new RangeError(bt(e.calendar));
}
function lh(e, t) {
  const n = qs(Te(t));
  if (n)
    return Fs(n), go(fn(n));
  const r = zs(t, 0, 1), { calendar: o } = r, a = e(o), [i, s, c] = a.v(r), [l, f] = a.q(i, s), [d, u] = a.G(l, f, c);
  return go(We(a.V(d, u, c)), o);
}
function uh(e) {
  let t, n = ((r) => {
    const o = ky.exec(r);
    return o ? (Go(o[10]), qd(o)) : void 0;
  })(Te(e));
  if (!n) {
    if (n = Yt(e), !n)
      throw new RangeError(Ne(e));
    if (!n.C)
      throw new RangeError(Ne(e));
    if (n.j)
      throw new RangeError(bt("Z"));
    Fs(n);
  }
  if ((t = Ls(e)) && al(t))
    throw new RangeError(Ne(e));
  if ((t = qs(e)) && al(t))
    throw new RangeError(Ne(e));
  return ht(qn(n, 1));
}
function fh(e) {
  const t = ((n) => {
    const r = jy.exec(n);
    return r ? ((o) => {
      function a(f, d, u) {
        let v = 0, m = 0;
        if (u && ([v, c] = vt(c, ft[u])), f !== void 0) {
          if (s)
            throw new RangeError(bt(f));
          m = ((w) => {
            const E = parseInt(w);
            if (!Number.isFinite(E))
              throw new RangeError(bt(w));
            return E;
          })(f), i = 1, d && (c = Hs(d) * (ft[u] / st), s = 1);
        }
        return v + m;
      }
      let i = 0, s = 0, c = 0, l = {
        ...zn(ae, [a(o[2]), a(o[3]), a(o[4]), a(o[5]), a(o[6], o[7], 5), a(o[8], o[9], 4), a(o[10], o[11], 3)]),
        ...Co(c, 2, ae)
      };
      if (!i)
        throw new RangeError(m1(ae));
      return Us(o[1]) < 0 && (l = Pe(l)), l;
    })(r) : void 0;
  })(Te(e));
  if (!t)
    throw new RangeError(Ne(e));
  return _e(pn(t));
}
function dh(e) {
  const t = Yt(e) || Ls(e) || qs(e);
  return t ? t.calendar : e;
}
function ph(e) {
  const t = Yt(e);
  return t && (t.timeZone || t.j && gn || t.offset) || e;
}
function Bd(e, t, n = 0, r = 0) {
  const o = Ks(e.timeZone), a = V(o);
  let i;
  return xo(e), i = e.C ? Hn(a, e, t, n, r, !a.$, e.j) : Ht(a, e), et(i, o, Jo(e.calendar));
}
function Dd(e) {
  return Fd(Be(xo(e)));
}
function zd(e) {
  return Fd(We(fn(e)));
}
function Fd(e) {
  return {
    ...e,
    calendar: Jo(e.calendar)
  };
}
function Yt(e) {
  const t = Ty.exec(e);
  return t ? ((n) => {
    const r = n[10], o = (r || "").toUpperCase() === "Z";
    return {
      isoYear: Ld(n),
      isoMonth: parseInt(n[4]),
      isoDay: parseInt(n[5]),
      ...qd(n.slice(5)),
      ...Go(n[16]),
      C: !!n[6],
      j: o,
      offset: o ? void 0 : r
    };
  })(t) : void 0;
}
function Ls(e) {
  const t = Ay.exec(e);
  return t ? ((n) => ({
    isoYear: Ld(n),
    isoMonth: parseInt(n[4]),
    isoDay: 1,
    ...Go(n[5])
  }))(t) : void 0;
}
function qs(e) {
  const t = Sy.exec(e);
  return t ? ((n) => ({
    isoYear: _t,
    isoMonth: parseInt(n[1]),
    isoDay: parseInt(n[2]),
    ...Go(n[3])
  }))(t) : void 0;
}
function $s(e, t) {
  const n = Ry.exec(e);
  return n ? ((r, o) => {
    const a = r[4] || r[5];
    if (o && a)
      throw new RangeError(bt(a));
    return ((i) => {
      if (Math.abs(i) >= ue)
        throw new RangeError(Pg);
      return i;
    })((Cn(r[2]) * ea + Cn(r[3]) * Xo + Cn(r[4]) * st + Hs(r[5] || "")) * Us(r[1]));
  })(n, t) : void 0;
}
function Ld(e) {
  const t = Us(e[1]), n = parseInt(e[2] || e[3]);
  if (t < 0 && !n)
    throw new RangeError(bt(-0));
  return t * n;
}
function qd(e) {
  const t = Cn(e[3]);
  return {
    ...Mo(Hs(e[4] || ""))[0],
    isoHour: Cn(e[1]),
    isoMinute: Cn(e[2]),
    isoSecond: t === 60 ? 59 : t
  };
}
function Go(e) {
  let t, n;
  const r = [];
  if (e.replace(Iy, ((o, a, i) => {
    const s = !!a, [c, l] = i.split("=").reverse();
    if (l) {
      if (l === "u-ca")
        r.push(c), t || (t = s);
      else if (s || /[A-Z]/.test(l))
        throw new RangeError(bt(o));
    } else {
      if (n)
        throw new RangeError(bt(o));
      n = c;
    }
    return "";
  })), r.length > 1 && t)
    throw new RangeError(bt(e));
  return {
    timeZone: n,
    calendar: r[0] || ee
  };
}
function Hs(e) {
  return parseInt(e.padEnd(9, "0"));
}
function Kn(e) {
  return new RegExp(`^${e}$`, "i");
}
function Us(e) {
  return e && e !== "+" ? -1 : 1;
}
function Cn(e) {
  return e === void 0 ? 0 : parseInt(e);
}
function mh(e) {
  return Ks(Te(e));
}
function Ks(e) {
  const t = Vs(e);
  return typeof t == "number" ? Rr(t) : t ? ((n) => {
    if (Cy.test(n))
      throw new RangeError(b1(n));
    if (Py.test(n))
      throw new RangeError(Og);
    return n.toLowerCase().split("/").map(((r, o) => (r.length <= 3 || /\d/.test(r)) && !/etc|yap/.test(r) ? r.toUpperCase() : r.replace(/baja|dumont|[a-z]+/g, ((a, i) => a.length <= 2 && !o || a === "in" || a === "chat" ? a.toUpperCase() : a.length > 2 || !i ? nl(a).replace(/island|noronha|murdo|rivadavia|urville/, nl) : a)))).join("/");
  })(e) : gn;
}
function Al(e) {
  const t = Vs(e);
  return typeof t == "number" ? t : t ? t.resolvedOptions().timeZone : gn;
}
function Vs(e) {
  const t = $s(e = e.toUpperCase(), 1);
  return t !== void 0 ? t : e !== gn ? Oy(e) : void 0;
}
function $d(e, t) {
  return $e(e.epochNanoseconds, t.epochNanoseconds);
}
function Hd(e, t) {
  return $e(e.epochNanoseconds, t.epochNanoseconds);
}
function hh(e, t, n, r, o, a) {
  const i = e(mt(a).relativeTo), s = Math.max(sn(r), sn(o));
  if (td(ae, r, o))
    return 0;
  if (yr(s, i))
    return $e(Ae(r), Ae(o));
  if (!i)
    throw new RangeError(Qo);
  const [c, l, f] = Uo(t, n, i), d = xs(f), u = Ko(f);
  return $e(d(u(l, c, r)), d(u(l, c, o)));
}
function Ud(e, t) {
  return Vn(e, t) || Gs(e, t);
}
function Vn(e, t) {
  return Dt(je(e), je(t));
}
function Gs(e, t) {
  return Dt(qt(e), qt(t));
}
function gh(e, t) {
  return !$d(e, t);
}
function yh(e, t) {
  return !Hd(e, t) && !!Kd(e.timeZone, t.timeZone) && e.calendar === t.calendar;
}
function vh(e, t) {
  return !Ud(e, t) && e.calendar === t.calendar;
}
function bh(e, t) {
  return !Vn(e, t) && e.calendar === t.calendar;
}
function _h(e, t) {
  return !Vn(e, t) && e.calendar === t.calendar;
}
function wh(e, t) {
  return !Vn(e, t) && e.calendar === t.calendar;
}
function Eh(e, t) {
  return !Gs(e, t);
}
function Kd(e, t) {
  if (e === t)
    return 1;
  try {
    return Al(e) === Al(t);
  } catch {
  }
}
function Sl(e, t, n, r) {
  const o = $n(e, r, 3, 5), a = Yo(t.epochNanoseconds, n.epochNanoseconds, ...o);
  return _e(e ? Pe(a) : a);
}
function Tl(e, t, n, r, o, a) {
  const i = Zo(r.calendar, o.calendar), [s, c, l, f] = $n(n, a, 5), d = r.epochNanoseconds, u = o.epochNanoseconds, v = $e(u, d);
  let m;
  if (v)
    if (s < 6)
      m = Yo(d, u, s, c, l, f);
    else {
      const w = t(((h, y) => {
        if (!Kd(h, y))
          throw new RangeError(_1);
        return h;
      })(r.timeZone, o.timeZone)), E = e(i);
      m = Gd(E, w, r, o, v, s, a), m = Lo(m, u, s, c, l, f, E, r, Ed, Q(Ms, w));
    }
  else
    m = Se;
  return _e(n ? Pe(m) : m);
}
function kl(e, t, n, r, o) {
  const a = Zo(n.calendar, r.calendar), [i, s, c, l] = $n(t, o, 6), f = Ee(n), d = Ee(r), u = $e(d, f);
  let v;
  if (u)
    if (i <= 6)
      v = Yo(f, d, i, s, c, l);
    else {
      const m = e(a);
      v = Yd(m, n, r, u, i, o), v = Lo(v, d, i, s, c, l, m, n, Ee, Ns);
    }
  else
    v = Se;
  return _e(t ? Pe(v) : v);
}
function Rl(e, t, n, r, o) {
  const a = Zo(n.calendar, r.calendar);
  return Vd(t, (() => e(a)), n, r, ...$n(t, o, 6, 9, 6));
}
function Il(e, t, n, r, o) {
  const a = Zo(n.calendar, r.calendar), i = $n(t, o, 9, 9, 8), s = e(a), c = gr(s, n), l = gr(s, r);
  return c.isoYear === l.isoYear && c.isoMonth === l.isoMonth && c.isoDay === l.isoDay ? _e(Se) : Vd(t, (() => s), We(c), We(l), ...i, 8);
}
function Vd(e, t, n, r, o, a, i, s, c = 6) {
  const l = Ee(n), f = Ee(r);
  if (l === void 0 || f === void 0)
    throw new RangeError(Qt);
  let d;
  if ($e(f, l))
    if (o === 6)
      d = Yo(l, f, o, a, i, s);
    else {
      const u = t();
      d = u.N(n, r, o), a === c && i === 1 || (d = Lo(d, f, o, a, i, s, u, n, Ee, Ho));
    }
  else
    d = Se;
  return _e(e ? Pe(d) : d);
}
function jl(e, t, n, r) {
  const [o, a, i, s] = $n(e, r, 5, 5), c = $t(Ys(t, n), kr(a, i), s), l = {
    ...Se,
    ...Vo(c, o)
  };
  return _e(e ? Pe(l) : l);
}
function Ah(e, t, n, r, o, a) {
  const i = $e(r.epochNanoseconds, n.epochNanoseconds);
  return i ? o < 6 ? Wd(n.epochNanoseconds, r.epochNanoseconds, o) : Gd(t, e, n, r, i, o, a) : Se;
}
function Sh(e, t, n, r, o) {
  const a = Ee(t), i = Ee(n), s = $e(i, a);
  return s ? r <= 6 ? Wd(a, i, r) : Yd(e, t, n, s, r, o) : Se;
}
function Gd(e, t, n, r, o, a, i) {
  const [s, c, l] = ((u, v, m, w) => {
    function E() {
      return k = {
        ...dn(S, b++ * -w),
        ...y
      }, O = Ir(u, k), $e(g, O) === -w;
    }
    const h = Ue(v, u), y = Xe(nt, h), S = Ue(m, u), g = m.epochNanoseconds;
    let b = 0;
    const A = Ys(h, S);
    let k, O;
    if (Math.sign(A) === -w && b++, E() && (w === -1 || E()))
      throw new RangeError(Gn);
    const C = ut(lt(O, g));
    return [h, k, C];
  })(t, n, r, o);
  var f, d;
  return {
    ...a === 6 ? (f = s, d = c, {
      ...Se,
      days: Zd(f, d)
    }) : e.N(s, c, a, i),
    ...Vo(l)
  };
}
function Yd(e, t, n, r, o, a) {
  const [i, s, c] = ((l, f, d) => {
    let u = f, v = Ys(l, f);
    return Math.sign(v) === -d && (u = dn(f, -d), v += ue * d), [l, u, v];
  })(t, n, r);
  return {
    ...e.N(i, s, o, a),
    ...Vo(c)
  };
}
function Yo(e, t, n, r, o, a) {
  return {
    ...Se,
    ...Un(qo(lt(e, t), r, o, a), n)
  };
}
function Wd(e, t, n) {
  return {
    ...Se,
    ...Un(lt(e, t), n)
  };
}
function Zd(e, t) {
  return Wo(je(e), je(t));
}
function Wo(e, t) {
  return Math.trunc((t - e) / xe);
}
function Ys(e, t) {
  return qt(t) - qt(e);
}
function Zo(e, t) {
  if (e !== t)
    throw new RangeError(v1);
  return e;
}
function Jd(e) {
  return this.m(e)[0];
}
function Qd(e) {
  return this.m(e)[1];
}
function Ws(e) {
  const [t] = this.v(e);
  return Wo(this.p(t), je(e)) + 1;
}
function Zs(e) {
  const t = My.exec(e);
  if (!t)
    throw new RangeError(Ig(e));
  return [parseInt(t[1]), !!t[2]];
}
function jr(e, t) {
  return "M" + Ze(e) + (t ? "L" : "");
}
function bo(e, t, n) {
  return e + (t || n && e >= n ? 1 : 0);
}
function Js(e, t) {
  return e - (t && e >= t ? 1 : 0);
}
function Xd(e, t) {
  return (t + e) * (Math.sign(t) || 1) || 0;
}
function Hi(e) {
  return j1[t1(e)];
}
function e1(e) {
  return Kg[t1(e)];
}
function t1(e) {
  return cn(e.id || ee);
}
function Th(e) {
  function t(o) {
    return ((a, i) => ({
      ...n1(a, i),
      o: a.month,
      day: parseInt(a.day)
    }))(vs(n, o), r);
  }
  const n = wc(e), r = cn(e);
  return {
    id: e,
    h: kh(t),
    l: Rh(t)
  };
}
function kh(e) {
  return qe(((t) => {
    const n = je(t);
    return e(n);
  }), WeakMap);
}
function Rh(e) {
  const t = e(0).year - ty;
  return qe(((n) => {
    let r, o = Fn(n - t), a = 0;
    const i = [], s = [];
    do
      o += 400 * xe;
    while ((r = e(o)).year <= n);
    do
      if (o += (1 - r.day) * xe, r.year === n && (i.push(o), s.push(r.o)), o -= xe, ++a > 100 || o < -fc)
        throw new RangeError(Gn);
    while ((r = e(o)).year >= n);
    return {
      i: i.reverse(),
      u: w1(s.reverse())
    };
  }));
}
function n1(e, t) {
  let n, r, o = r1(e);
  if (e.era) {
    const a = j1[t], i = O1[t] || {};
    a !== void 0 && (n = t === "islamic" ? "ah" : e.era.normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, ""), n === "bc" || n === "b" ? n = "bce" : n === "ad" || n === "a" ? n = "ce" : n === "beforeroc" && (n = "broc"), n = i[n] || n, r = o, o = Xd(r, a[n] || 0));
  }
  return {
    era: n,
    eraYear: r,
    year: o
  };
}
function r1(e) {
  return parseInt(e.relatedYear || e.year);
}
function _o(e) {
  const { year: t, o: n, day: r } = this.h(e), { u: o } = this.l(t);
  return [t, o[n] + 1, r];
}
function vr(e, t = 1, n = 1) {
  return this.l(e).i[t - 1] + (n - 1) * xe;
}
function o1(e, t) {
  const n = so.call(this, e);
  return [Js(t, n), n === t];
}
function so(e) {
  const t = Pl(this, e), n = Pl(this, e - 1), r = t.length;
  if (r > n.length) {
    const o = e1(this);
    if (o < 0)
      return -o;
    for (let a = 0; a < r; a++)
      if (t[a] !== n[a])
        return a + 1;
  }
}
function Wr(e) {
  return Wo(vr.call(this, e), vr.call(this, e + 1));
}
function Ol(e, t) {
  const { i: n } = this.l(e);
  let r = t + 1, o = n;
  return r > n.length && (r = 1, o = this.l(e + 1).i), Wo(n[t - 1], o[r - 1]);
}
function Zr(e) {
  return this.l(e).i.length;
}
function a1(e) {
  const t = this.h(e);
  return [t.era, t.eraYear];
}
function Pl(e, t) {
  return Object.keys(e.l(t).u);
}
function Or(e) {
  return Jo(Te(e));
}
function Jo(e) {
  if ((e = e.toLowerCase()) !== ee && e !== Yn) {
    const t = wc(e).resolvedOptions().calendar;
    if (cn(e) !== cn(t))
      throw new RangeError(y1(e));
    return t;
  }
  return e;
}
function cn(e) {
  return e === "islamicc" && (e = "islamic"), e.split("-")[0];
}
function i1(e, t) {
  return (n) => n === ee ? e : n === Yn || n === Ut ? Object.assign(Object.create(e), {
    id: n
  }) : Object.assign(Object.create(t), Ny(n));
}
function Ih(e, t, n, r) {
  const o = Wt(n, r, Ot, [], T1);
  if (o.timeZone !== void 0) {
    const a = n.F(o), i = Pr(o), s = e(o.timeZone);
    return {
      epochNanoseconds: Hn(t(s), {
        ...a,
        ...i
      }, o.offset !== void 0 ? mn(o.offset) : void 0),
      timeZone: s
    };
  }
  return {
    ...n.F(o),
    ...De
  };
}
function jh(e, t, n, r, o, a) {
  const i = Wt(n, o, Ot, A1, T1), s = e(i.timeZone), [c, l, f] = Bo(a), d = n.F(i, Fo(c)), u = Pr(i, c);
  return et(Hn(t(s), {
    ...d,
    ...u
  }, i.offset !== void 0 ? mn(i.offset) : void 0, l, f), s, r);
}
function Oh(e, t, n) {
  const r = Wt(e, t, Ot, [], jt), o = ne(n);
  return tt(Be({
    ...e.F(r, Fo(o)),
    ...Pr(r, o)
  }));
}
function Ph(e, t, n, r = []) {
  const o = Wt(e, t, Ot, r);
  return e.F(o, n);
}
function Ch(e, t, n, r) {
  const o = Wt(e, t, oc, r);
  return e.K(o, n);
}
function Mh(e, t, n, r) {
  const o = Wt(e, n, Ot, Mr);
  return t && o.month !== void 0 && o.monthCode === void 0 && o.year === void 0 && (o.year = _t), e._(o, r);
}
function Nh(e, t) {
  return ht(Pr(He(e, Gi, [], 1), ne(t)));
}
function xh(e) {
  const t = He(e, ac);
  return _e(pn({
    ...Se,
    ...t
  }));
}
function Wt(e, t, n, r = [], o = []) {
  return He(t, [...e.fields(n), ...o].sort(), r);
}
function He(e, t, n, r = !n) {
  const o = {};
  let a, i = 0;
  for (const s of t) {
    if (s === a)
      throw new RangeError(_g(s));
    if (s === "constructor" || s === "__proto__")
      throw new RangeError(bg(s));
    let c = e[s];
    if (c !== void 0)
      i = 1, Ml[s] && (c = Ml[s](c, s)), o[s] = c;
    else if (n) {
      if (n.includes(s))
        throw new TypeError(Xs(s));
      o[s] = I1[s];
    }
    a = s;
  }
  if (r && !i)
    throw new TypeError(m1(t));
  return o;
}
function Pr(e, t) {
  return qn(Ec({
    ...I1,
    ...e
  }), t);
}
function Bh(e, t, n, r, o) {
  const { calendar: a, timeZone: i } = n, s = e(a), c = t(i), l = [...s.fields(Ot), ...S1].sort(), f = ((h) => {
    const y = Ue(h, V), S = Rr(y.offsetNanoseconds), g = ra(h.calendar), [b, A, k] = g.v(y), [O, C] = g.q(b, A), N = jr(O, C);
    return {
      ...$y(y),
      year: b,
      monthCode: N,
      day: k,
      offset: S
    };
  })(n), d = He(r, l), u = s.k(f, d), v = {
    ...f,
    ...d
  }, [m, w, E] = Bo(o, 2);
  return et(Hn(c, {
    ...s.F(u, Fo(m)),
    ...qn(Ec(v), m)
  }, mn(v.offset), w, E), i, a);
}
function Dh(e, t, n, r) {
  const o = e(t.calendar), a = [...o.fields(Ot), ...jt].sort(), i = {
    ...c1(s = t),
    hour: s.isoHour,
    minute: s.isoMinute,
    second: s.isoSecond,
    millisecond: s.isoMillisecond,
    microsecond: s.isoMicrosecond,
    nanosecond: s.isoNanosecond
  };
  var s;
  const c = He(n, a), l = ne(r), f = o.k(i, c), d = {
    ...i,
    ...c
  };
  return tt(Be({
    ...o.F(f, Fo(l)),
    ...qn(Ec(d), l)
  }));
}
function zh(e, t, n, r) {
  const o = e(t.calendar), a = o.fields(Ot).sort(), i = c1(t), s = He(n, a), c = o.k(i, s);
  return o.F(c, r);
}
function Fh(e, t, n, r) {
  const o = e(t.calendar), a = o.fields(oc).sort(), i = ((l) => {
    const f = ra(l.calendar), [d, u] = f.v(l), [v, m] = f.q(d, u);
    return {
      year: d,
      monthCode: jr(v, m)
    };
  })(t), s = He(n, a), c = o.k(i, s);
  return o.K(c, r);
}
function Lh(e, t, n, r) {
  const o = e(t.calendar), a = o.fields(Ot).sort(), i = ((l) => {
    const f = ra(l.calendar), [d, u, v] = f.v(l), [m, w] = f.q(d, u);
    return {
      monthCode: jr(m, w),
      day: v
    };
  })(t), s = He(n, a), c = o.k(i, s);
  return o._(c, r);
}
function qh(e, t, n) {
  return ht(((r, o, a) => Pr({
    ...Xe(Gi, r),
    ...He(o, Gi)
  }, ne(a)))(e, t, n));
}
function $h(e, t) {
  return _e((n = e, r = t, pn({
    ...n,
    ...He(r, ac)
  })));
  // removed by dead control flow
 var n, r; 
}
function s1(e, t, n, r, o) {
  t = Xe(n = e.fields(n), t), r = He(r, o = e.fields(o), []);
  let a = e.k(t, r);
  return a = He(a, [...n, ...o].sort(), []), e.F(a);
}
function ma(e, t) {
  const n = Hi(e), r = O1[e.id || ""] || {};
  let { era: o, eraYear: a, year: i } = t;
  if (o !== void 0 || a !== void 0) {
    if (o === void 0 || a === void 0)
      throw new TypeError(Sg);
    if (!n)
      throw new RangeError(Ag);
    const s = n[r[o] || o];
    if (s === void 0)
      throw new RangeError(kg(o));
    const c = Xd(a, s);
    if (i !== void 0 && i !== c)
      throw new RangeError(Tg);
    i = c;
  } else if (i === void 0)
    throw new TypeError(Rg(n));
  return i;
}
function Jr(e, t, n, r) {
  let { month: o, monthCode: a } = t;
  if (a !== void 0) {
    const i = ((s, c, l, f) => {
      const d = s.L(l), [u, v] = Zs(c);
      let m = bo(u, v, d);
      if (v) {
        const w = e1(s);
        if (w === void 0)
          throw new RangeError(nr);
        if (w > 0) {
          if (m > w)
            throw new RangeError(nr);
          if (d === void 0) {
            if (f === 1)
              throw new RangeError(nr);
            m--;
          }
        } else {
          if (m !== -w)
            throw new RangeError(nr);
          if (d === void 0 && f === 1)
            throw new RangeError(nr);
        }
      }
      return m;
    })(e, a, n, r);
    if (o !== void 0 && o !== i)
      throw new RangeError(jg);
    o = i, r = 1;
  } else if (o === void 0)
    throw new TypeError(g1);
  return Et("month", o, 1, e.B(n), r);
}
function ha(e, t, n, r, o) {
  return Me(t, "day", 1, e.U(r, n), o);
}
function ga(e, t, n, r) {
  let o = 0;
  const a = [];
  for (const i of n)
    t[i] !== void 0 ? o = 1 : a.push(i);
  if (Object.assign(e, t), o)
    for (const i of r || a)
      delete e[i];
}
function c1(e) {
  const t = ra(e.calendar), [n, r, o] = t.v(e), [a, i] = t.q(n, r);
  return {
    year: n,
    monthCode: jr(a, i),
    day: o
  };
}
function Hh(e) {
  return kt(pt(ms(fs(e))));
}
function Uh(e, t, n, r, o = ee) {
  return et(pt(ms(fs(n))), t(r), e(o));
}
function Kh(e, t, n, r, o = 0, a = 0, i = 0, s = 0, c = 0, l = 0, f = ee) {
  return tt(Be(xo(At(Ie, zn(ta, [t, n, r, o, a, i, s, c, l])))), e(f));
}
function Vh(e, t, n, r, o = ee) {
  return Rt(We(fn(At(Ie, {
    isoYear: t,
    isoMonth: n,
    isoDay: r
  }))), e(o));
}
function Gh(e, t, n, r = ee, o = 1) {
  const a = Ie(t), i = Ie(n), s = e(r);
  return hr(gs(fn({
    isoYear: a,
    isoMonth: i,
    isoDay: Ie(o)
  })), s);
}
function Yh(e, t, n, r = ee, o = _t) {
  const a = Ie(t), i = Ie(n), s = e(r);
  return go(We(fn({
    isoYear: Ie(o),
    isoMonth: a,
    isoDay: i
  })), s);
}
function Wh(e = 0, t = 0, n = 0, r = 0, o = 0, a = 0) {
  return ht(qn(At(Ie, zn(nt, [e, t, n, r, o, a])), 1));
}
function Zh(e = 0, t = 0, n = 0, r = 0, o = 0, a = 0, i = 0, s = 0, c = 0, l = 0) {
  return _e(pn(At(ds, zn(ae, [e, t, n, r, o, a, i, s, c, l]))));
}
function Jh(e, t, n = ee) {
  return et(e.epochNanoseconds, t, n);
}
function Qh(e) {
  return kt(e.epochNanoseconds);
}
function l1(e, t) {
  return tt(Ue(t, e));
}
function u1(e, t) {
  return Rt(Ue(t, e));
}
function f1(e, t) {
  return ht(Ue(t, e));
}
function Xh(e, t, n, r) {
  const o = ((a, i, s, c) => {
    const l = ((f) => z1(mt(f)))(c);
    return Ir(a(i), s, l);
  })(e, n, t, r);
  return et(pt(o), n, t.calendar);
}
function eg(e, t, n, r, o) {
  const a = e(o.timeZone), i = o.plainTime, s = i !== void 0 ? t(i) : void 0, c = n(a);
  let l;
  return l = s ? Ir(c, {
    ...r,
    ...s
  }) : Ht(c, {
    ...r,
    ...De
  }), et(l, a, r.calendar);
}
function tg(e, t = De) {
  return tt(Be({
    ...e,
    ...t
  }));
}
function ng(e, t, n) {
  return ((r, o) => {
    const a = Wt(r, o, k1);
    return r.K(a, void 0);
  })(e(t.calendar), n);
}
function rg(e, t, n) {
  return ((r, o) => {
    const a = Wt(r, o, R1);
    return r._(a);
  })(e(t.calendar), n);
}
function og(e, t, n, r) {
  return ((o, a, i) => s1(o, a, k1, Tr(i), Mr))(e(t.calendar), n, r);
}
function ag(e, t, n, r) {
  return ((o, a, i) => s1(o, a, R1, Tr(i), tc))(e(t.calendar), n, r);
}
function ig(e) {
  return kt(pt(mo(ds(e), It)));
}
function sg(e) {
  return kt(pt(ms(fs(e))));
}
function hn(e, t, n) {
  const r = new Set(n);
  return (o, a) => {
    const i = n && tl(o, n);
    if (!tl(o = ((s, c) => {
      const l = {};
      for (const f in c)
        s.has(f) || (l[f] = c[f]);
      return l;
    })(r, o), e)) {
      if (a && i)
        throw new TypeError("Invalid formatting options");
      o = {
        ...t,
        ...o
      };
    }
    return n && (o.timeZone = gn, ["full", "long"].includes(o.J) && (o.J = "medium")), o;
  };
}
function Zt(e, t = d1, n = 0) {
  const [r, , , o] = e;
  return (a, i = s2, ...s) => {
    const c = t(o && o(...s), a, i, r, n), l = c.resolvedOptions();
    return [c, ...cg(e, l, s)];
  };
}
function d1(e, t, n, r, o) {
  if (n = r(n, o), e) {
    if (n.timeZone !== void 0)
      throw new TypeError(qg);
    n.timeZone = e;
  }
  return new zt(t, n);
}
function cg(e, t, n) {
  const [, r, o] = e;
  return n.map(((a) => (a.calendar && ((i, s, c) => {
    if ((c || i !== ee) && i !== s)
      throw new RangeError(v1);
  })(a.calendar, t.calendar, o), r(a, t))));
}
function lg(e, t, n) {
  const r = t.timeZone, o = e(r), a = {
    ...Ue(t, o),
    ...n || De
  };
  let i;
  return i = n ? Hn(o, a, a.offsetNanoseconds, 2) : Ht(o, a), et(i, r, t.calendar);
}
function ug(e, t = De) {
  return tt(Be({
    ...e,
    ...t
  }));
}
function Qs(e, t) {
  return {
    ...e,
    calendar: t
  };
}
function fg(e, t) {
  return {
    ...e,
    timeZone: t
  };
}
function ya(e) {
  const t = Ui();
  return Ln(t, e.R(t));
}
function Ui() {
  return mo(Date.now(), It);
}
function tr() {
  return Nl || (Nl = new zt().resolvedOptions().timeZone);
}
const dg = (e, t) => `Non-integer ${e}: ${t}`, pg = (e, t) => `Non-positive ${e}: ${t}`, mg = (e, t) => `Non-finite ${e}: ${t}`, hg = (e) => `Cannot convert bigint to ${e}`, gg = (e) => `Invalid bigint: ${e}`, yg = "Cannot convert Symbol to string", vg = "Invalid object", p1 = (e, t, n, r, o) => o ? p1(e, o[t], o[n], o[r]) : Jt(e, t) + `; must be between ${n}-${r}`, Jt = (e, t) => `Invalid ${e}: ${t}`, Xs = (e) => `Missing ${e}`, bg = (e) => `Invalid field ${e}`, _g = (e) => `Duplicate field ${e}`, m1 = (e) => "No valid fields: " + e.join(), wg = "Invalid bag", h1 = (e, t, n) => Jt(e, t) + "; must be " + Object.keys(n).join(), Eg = "Cannot use valueOf", Ki = "Invalid calling context", Ag = "Forbidden era/eraYear", Sg = "Mismatching era/eraYear", Tg = "Mismatching year/eraYear", kg = (e) => `Invalid era: ${e}`, Rg = (e) => "Missing year" + (e ? "/era/eraYear" : ""), Ig = (e) => `Invalid monthCode: ${e}`, jg = "Mismatching month/monthCode", g1 = "Missing month/monthCode", nr = "Invalid leap month", Gn = "Invalid protocol results", y1 = (e) => Jt("Calendar", e), v1 = "Mismatching Calendars", b1 = (e) => Jt("TimeZone", e), _1 = "Mismatching TimeZones", Og = "Forbidden ICU TimeZone", Pg = "Out-of-bounds offset", Cg = "Out-of-bounds TimeZone gap", Mg = "Invalid TimeZone offset", Ng = "Ambiguous offset", Qt = "Out-of-bounds date", xg = "Out-of-bounds duration", Bg = "Cannot mix duration signs", Qo = "Missing relativeTo", Dg = "Cannot use large units", zg = "Required smallestUnit or largestUnit", Fg = "smallestUnit > largestUnit", Ne = (e) => `Cannot parse: ${e}`, bt = (e) => `Invalid substring: ${e}`, Lg = (e) => `Cannot format ${e}`, va = "Mismatching types for formatting", qg = "Cannot specify TimeZone", w1 = /* @__PURE__ */ Q(Oo, ((e, t) => t)), Bn = /* @__PURE__ */ Q(Oo, ((e, t, n) => n)), Ze = /* @__PURE__ */ Q(po, 2), Vi = {
  nanosecond: 0,
  microsecond: 1,
  millisecond: 2,
  second: 3,
  minute: 4,
  hour: 5,
  day: 6,
  week: 7,
  month: 8,
  year: 9
}, ec = /* @__PURE__ */ Object.keys(Vi), xe = 864e5, E1 = 1e3, Cr = 1e3, It = 1e6, st = 1e9, Xo = 6e10, ea = 36e11, ue = 864e11, ft = [1, Cr, It, st, Xo, ea, ue], jt = /* @__PURE__ */ ec.slice(0, 6), Gi = /* @__PURE__ */ Sr(jt), $g = ["offset"], A1 = ["timeZone"], S1 = /* @__PURE__ */ jt.concat($g), T1 = /* @__PURE__ */ S1.concat(A1), Yi = ["era", "eraYear"], Hg = /* @__PURE__ */ Yi.concat(["year"]), tc = ["year"], nc = ["monthCode"], rc = /* @__PURE__ */ ["month"].concat(nc), Mr = ["day"], oc = /* @__PURE__ */ rc.concat(tc), k1 = /* @__PURE__ */ nc.concat(tc), Ot = /* @__PURE__ */ Mr.concat(oc), Ug = /* @__PURE__ */ Mr.concat(rc), R1 = /* @__PURE__ */ Mr.concat(nc), I1 = /* @__PURE__ */ Bn(jt, 0), ee = "iso8601", Yn = "gregory", Ut = "japanese", j1 = {
  [Yn]: {
    "gregory-inverse": -1,
    gregory: 0
  },
  [Ut]: {
    "japanese-inverse": -1,
    japanese: 0,
    meiji: 1867,
    taisho: 1911,
    showa: 1925,
    heisei: 1988,
    reiwa: 2018
  },
  ethiopic: {
    ethioaa: 0,
    ethiopic: 5500
  },
  coptic: {
    "coptic-inverse": -1,
    coptic: 0
  },
  roc: {
    "roc-inverse": -1,
    roc: 0
  },
  buddhist: {
    be: 0
  },
  islamic: {
    ah: 0
  },
  indian: {
    saka: 0
  },
  persian: {
    ap: 0
  }
}, O1 = {
  [Yn]: {
    bce: "gregory-inverse",
    ce: "gregory"
  },
  [Ut]: {
    bce: "japanese-inverse",
    ce: "japanese"
  },
  ethiopic: {
    era0: "ethioaa",
    era1: "ethiopic"
  },
  coptic: {
    era0: "coptic-inverse",
    era1: "coptic"
  },
  roc: {
    broc: "roc-inverse",
    minguo: "roc"
  }
}, Kg = {
  chinese: 13,
  dangi: 13,
  hebrew: -6
}, Te = /* @__PURE__ */ Q(ls, "string"), Vg = /* @__PURE__ */ Q(ls, "boolean"), Gg = /* @__PURE__ */ Q(ls, "number"), ae = /* @__PURE__ */ ec.map(((e) => e + "s")), ac = /* @__PURE__ */ Sr(ae), Yg = /* @__PURE__ */ ae.slice(0, 6), P1 = /* @__PURE__ */ ae.slice(6), Wg = /* @__PURE__ */ P1.slice(1), Zg = /* @__PURE__ */ w1(ae), Se = /* @__PURE__ */ Bn(ae, 0), ic = /* @__PURE__ */ Bn(Yg, 0), sc = /* @__PURE__ */ Q(nd, ae), nt = ["isoNanosecond", "isoMicrosecond", "isoMillisecond", "isoSecond", "isoMinute", "isoHour"], cc = ["isoDay", "isoMonth", "isoYear"], ta = /* @__PURE__ */ nt.concat(cc), lc = /* @__PURE__ */ Sr(cc), C1 = /* @__PURE__ */ Sr(nt), Jg = /* @__PURE__ */ Sr(ta), De = /* @__PURE__ */ Bn(C1, 0), Qg = /* @__PURE__ */ Q(nd, ta), uc = 1e8, fc = uc * xe, Xg = [uc, 0], ey = [-uc, 0], br = 275760, _r = -271821, zt = Intl.DateTimeFormat, M1 = "en-GB", ty = 1970, _t = 1972, Mt = 12, ny = /* @__PURE__ */ Fn(1868, 9, 8), ry = /* @__PURE__ */ qe(z0, WeakMap), wo = "smallestUnit", Wi = "unit", fr = "roundingIncrement", ba = "fractionalSecondDigits", N1 = "relativeTo", _a = "direction", x1 = {
  constrain: 0,
  reject: 1
}, oy = /* @__PURE__ */ Object.keys(x1), ay = {
  compatible: 0,
  reject: 1,
  earlier: 2,
  later: 3
}, iy = {
  reject: 0,
  use: 1,
  prefer: 2,
  ignore: 3
}, sy = {
  auto: 0,
  never: 1,
  critical: 2,
  always: 3
}, cy = {
  auto: 0,
  never: 1,
  critical: 2
}, ly = {
  auto: 0,
  never: 1
}, uy = {
  floor: 0,
  halfFloor: 1,
  ceil: 2,
  halfCeil: 3,
  trunc: 4,
  halfTrunc: 5,
  expand: 6,
  halfExpand: 7,
  halfEven: 8
}, fy = {
  previous: -1,
  next: 1
}, Nr = /* @__PURE__ */ Q(Ts, wo), B1 = /* @__PURE__ */ Q(Ts, "largestUnit"), dy = /* @__PURE__ */ Q(Ts, Wi), D1 = /* @__PURE__ */ Q(Vt, "overflow", x1), z1 = /* @__PURE__ */ Q(Vt, "disambiguation", ay), py = /* @__PURE__ */ Q(Vt, "offset", iy), dc = /* @__PURE__ */ Q(Vt, "calendarName", sy), my = /* @__PURE__ */ Q(Vt, "timeZoneName", cy), hy = /* @__PURE__ */ Q(Vt, "offset", ly), xr = /* @__PURE__ */ Q(Vt, "roundingMode", uy), pc = "PlainYearMonth", mc = "PlainMonthDay", Br = "PlainDate", Wn = "PlainDateTime", hc = "PlainTime", Xt = "ZonedDateTime", gc = "Instant", yc = "Duration", gy = [Math.floor, (e) => Yr(e) ? Math.floor(e) : Math.round(e), Math.ceil, (e) => Yr(e) ? Math.ceil(e) : Math.round(e), Math.trunc, (e) => Yr(e) ? Math.trunc(e) || 0 : Math.round(e), (e) => e < 0 ? Math.floor(e) : Math.ceil(e), (e) => Math.sign(e) * Math.round(Math.abs(e)) || 0, (e) => Yr(e) ? (e = Math.trunc(e) || 0) + e % 2 : Math.round(e)], gn = "UTC", co = 5184e3, yy = /* @__PURE__ */ ho(1847), vy = /* @__PURE__ */ ho(/* @__PURE__ */ (/* @__PURE__ */ new Date()).getUTCFullYear() + 10), by = /0+$/, Ue = /* @__PURE__ */ qe(X0, WeakMap), Cl = 2 ** 32 - 1, V = /* @__PURE__ */ qe(((e) => {
  const t = Vs(e);
  return typeof t == "object" ? new wy(t) : new _y(t || 0);
}));
class _y {
  constructor(t) {
    this.$ = t;
  }
  R() {
    return this.$;
  }
  I(t) {
    return ((n) => {
      const r = Ee({
        ...n,
        ...De
      });
      if (!r || Math.abs(r[0]) > 1e8)
        throw new RangeError(Qt);
    })(t), [ys(t, this.$)];
  }
  O() {
  }
}
class wy {
  constructor(t) {
    this.nn = ((n) => {
      function r(l) {
        const f = mr(l, s, c), [d, u] = El(f), v = a(d), m = a(u);
        return v === m ? v : o(i(d, u), v, m, l);
      }
      function o(l, f, d, u) {
        let v, m;
        for (; (u === void 0 || (v = u < l[0] ? f : u >= l[1] ? d : void 0) === void 0) && (m = l[1] - l[0]); ) {
          const w = l[0] + Math.floor(m / 2);
          n(w) === d ? l[1] = w : l[0] = w + 1;
        }
        return v;
      }
      const a = qe(n), i = qe(rh);
      let s = yy, c = vy;
      return {
        tn(l) {
          const f = r(l - 86400), d = r(l + 86400), u = l - f, v = l - d;
          if (f === d)
            return [u];
          const m = r(u);
          return m === r(v) ? [l - m] : f > d ? [u, v] : [];
        },
        rn: r,
        O(l, f) {
          const d = mr(l, s, c);
          let [u, v] = El(d);
          const m = co * f, w = f < 0 ? () => v > s || (s = d, 0) : () => u < c || (c = d, 0);
          for (; w(); ) {
            const E = a(u), h = a(v);
            if (E !== h) {
              const y = i(u, v);
              o(y, E, h);
              const S = y[0];
              if ((Dt(S, l) || 1) === f)
                return S;
            }
            u += m, v += m;
          }
        }
      };
    })(/* @__PURE__ */ ((n) => (r) => {
      const o = vs(n, r * E1);
      return ho(r1(o), parseInt(o.month), parseInt(o.day), parseInt(o.hour), parseInt(o.minute), parseInt(o.second)) - r;
    })(t));
  }
  R(t) {
    return this.nn.rn(((n) => ol(n)[0])(t)) * st;
  }
  I(t) {
    const [n, r] = [ho((o = t).isoYear, o.isoMonth, o.isoDay, o.isoHour, o.isoMinute, o.isoSecond), o.isoMillisecond * It + o.isoMicrosecond * Cr + o.isoNanosecond];
    var o;
    return this.nn.tn(n).map(((a) => pt(an(mo(a, st), r))));
  }
  O(t, n) {
    const [r, o] = ol(t), a = this.nn.O(r + (n > 0 || o ? 1 : 0), n);
    if (a !== void 0)
      return mo(a, st);
  }
}
const vc = "([+-])", lo = "(?:[.,](\\d{1,9}))?", F1 = `(?:(?:${vc}(\\d{6}))|(\\d{4}))-?(\\d{2})`, bc = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + lo + ")?)?", _c = vc + bc, Ey = F1 + "-?(\\d{2})(?:[T ]" + bc + "(Z|" + _c + ")?)?", L1 = "\\[(!?)([^\\]]*)\\]", na = `((?:${L1}){0,9})`, Ay = /* @__PURE__ */ Kn(F1 + na), Sy = /* @__PURE__ */ Kn("(?:--)?(\\d{2})-?(\\d{2})" + na), Ty = /* @__PURE__ */ Kn(Ey + na), ky = /* @__PURE__ */ Kn("T?" + bc + "(?:" + _c + ")?" + na), Ry = /* @__PURE__ */ Kn(_c), Iy = /* @__PURE__ */ new RegExp(L1, "g"), jy = /* @__PURE__ */ Kn(`${vc}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${lo}H)?(?:(\\d+)${lo}M)?(?:(\\d+)${lo}S)?)?`), Oy = /* @__PURE__ */ qe(((e) => new zt(M1, {
  timeZone: e,
  era: "short",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}))), Py = /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/, Cy = /[^\w\/:+-]+/, My = /^M(\d{2})(L?)$/, Ny = /* @__PURE__ */ qe(Th), wc = /* @__PURE__ */ qe(((e) => new zt(M1, {
  calendar: e,
  timeZone: gn,
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric"
}))), q1 = {
  P(e, t, n) {
    const r = ne(n);
    let o, { years: a, months: i, weeks: s, days: c } = t;
    if (c += Ae(t, 5)[0], a || i)
      o = ((l, f, d, u, v) => {
        let [m, w, E] = l.v(f);
        if (d) {
          const [h, y] = l.q(m, w);
          m += d, w = bo(h, y, l.L(m)), w = Et("month", w, 1, l.B(m), v);
        }
        return u && ([m, w] = l.un(m, w, u)), E = Et("day", E, 1, l.U(m, w), v), l.p(m, w, E);
      })(this, e, a, i, r);
    else {
      if (!s && !c)
        return e;
      o = je(e);
    }
    if (o === void 0)
      throw new RangeError(Qt);
    return o += (7 * s + c) * xe, We(No(o));
  },
  N(e, t, n) {
    if (n <= 7) {
      let c = 0, l = Zd({
        ...e,
        ...De
      }, {
        ...t,
        ...De
      });
      return n === 7 && ([c, l] = Lt(l, 7)), {
        ...Se,
        weeks: c,
        days: l
      };
    }
    const r = this.v(e), o = this.v(t);
    let [a, i, s] = ((c, l, f, d, u, v, m) => {
      let w = u - l, E = v - f, h = m - d;
      if (w || E) {
        const y = Math.sign(w || E);
        let S = c.U(u, v), g = 0;
        if (Math.sign(h) === -y) {
          const b = S;
          [u, v] = c.un(u, v, -y), w = u - l, E = v - f, S = c.U(u, v), g = y < 0 ? -b : S;
        }
        if (h = m - Math.min(d, S) + g, w) {
          const [b, A] = c.q(l, f), [k, O] = c.q(u, v);
          if (E = k - b || Number(O) - Number(A), Math.sign(E) === -y) {
            const C = y < 0 && -c.B(u);
            w = (u -= y) - l, E = v - bo(b, A, c.L(u)) + (C || c.B(u));
          }
        }
      }
      return [w, E, h];
    })(this, ...r, ...o);
    return n === 8 && (i += this.cn(a, r[0]), a = 0), {
      ...Se,
      years: a,
      months: i,
      days: s
    };
  },
  F(e, t) {
    const n = ne(t), r = ma(this, e), o = Jr(this, e, r, n), a = ha(this, e, o, r, n);
    return Rt(We(this.V(r, o, a)), this.id || ee);
  },
  K(e, t) {
    const n = ne(t), r = ma(this, e), o = Jr(this, e, r, n);
    return hr(gs(this.V(r, o, 1)), this.id || ee);
  },
  _(e, t) {
    const n = ne(t);
    let r, o, a, i = e.eraYear !== void 0 || e.year !== void 0 ? ma(this, e) : void 0;
    const s = !this.id;
    if (i === void 0 && s && (i = _t), i !== void 0) {
      const d = Jr(this, e, i, n);
      r = ha(this, e, d, i, n);
      const u = this.L(i);
      o = Js(d, u), a = d === u;
    } else {
      if (e.monthCode === void 0)
        throw new TypeError(g1);
      if ([o, a] = Zs(e.monthCode), this.id && this.id !== Yn && this.id !== Ut)
        if (this.id && cn(this.id) === "coptic" && n === 0) {
          const d = a || o !== 13 ? 30 : 6;
          r = e.day, r = mr(r, 1, d);
        } else if (this.id && cn(this.id) === "chinese" && n === 0) {
          const d = !a || o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12 ? 30 : 29;
          r = e.day, r = mr(r, 1, d);
        } else
          r = e.day;
      else
        r = ha(this, e, Jr(this, e, _t, n), _t, n);
    }
    const c = this.G(o, a, r);
    if (!c)
      throw new RangeError("Cannot guess year");
    const [l, f] = c;
    return go(We(this.V(l, f, r)), this.id || ee);
  },
  fields(e) {
    return Hi(this) && e.includes("year") ? [...e, ...Yi] : e;
  },
  k(e, t) {
    const n = Object.assign(/* @__PURE__ */ Object.create(null), e);
    return ga(n, t, rc), Hi(this) && (ga(n, t, Hg), this.id === Ut && ga(n, t, Ug, Yi)), n;
  },
  inLeapYear(e) {
    const [t] = this.v(e);
    return this.sn(t);
  },
  monthsInYear(e) {
    const [t] = this.v(e);
    return this.B(t);
  },
  daysInMonth(e) {
    const [t, n] = this.v(e);
    return this.U(t, n);
  },
  daysInYear(e) {
    const [t] = this.v(e);
    return this.fn(t);
  },
  dayOfYear: Ws,
  era(e) {
    return this.hn(e)[0];
  },
  eraYear(e) {
    return this.hn(e)[1];
  },
  monthCode(e) {
    const [t, n] = this.v(e), [r, o] = this.q(t, n);
    return jr(r, o);
  },
  dayOfWeek: hd,
  daysInWeek() {
    return 7;
  }
}, xy = {
  v: bs,
  hn: gd,
  q: fd
}, By = {
  dayOfYear: Ws,
  v: bs,
  p: Fn
}, Dy = /* @__PURE__ */ Object.assign({}, By, {
  weekOfYear: Jd,
  yearOfWeek: Qd,
  m(e) {
    function t(v) {
      return (7 - v < r ? 7 : 0) - v;
    }
    function n(v) {
      const m = md(u + v), w = v || 1, E = t(ur(c + m * w, 7));
      return f = (m + (E - l) * w) / 7;
    }
    const r = this.id ? 1 : 4, o = hd(e), a = this.dayOfYear(e), i = ur(o - 1, 7), s = a - 1, c = ur(i - s, 7), l = t(c);
    let f, d = Math.floor((s - l) / 7) + 1, u = e.isoYear;
    return d ? d > n(0) && (d = 1, u++) : (d = n(-1), u--), [d, u, f];
  }
}), zy = /* @__PURE__ */ Object.assign({}, q1, Dy, {
  v: bs,
  hn: gd,
  q: fd,
  G(e, t) {
    if (!t)
      return [_t, e];
  },
  sn: _s,
  L() {
  },
  B: dd,
  cn: (e) => e * Mt,
  U: pd,
  fn: md,
  V: (e, t, n) => ({
    isoYear: e,
    isoMonth: t,
    isoDay: n
  }),
  p: Fn,
  un: (e, t, n) => (e += Po(n, Mt), (t += ss(n, Mt)) < 1 ? (e--, t += Mt) : t > Mt && (e++, t -= Mt), [e, t]),
  year(e) {
    return e.isoYear;
  },
  month(e) {
    return e.isoMonth;
  },
  day: (e) => e.isoDay
}), Fy = {
  v: _o,
  hn: a1,
  q: o1
}, Ly = {
  dayOfYear: Ws,
  v: _o,
  p: vr,
  weekOfYear: Jd,
  yearOfWeek: Qd,
  m() {
    return [];
  }
}, qy = /* @__PURE__ */ Object.assign({}, q1, Ly, {
  v: _o,
  hn: a1,
  q: o1,
  G(e, t, n) {
    const r = this.id && cn(this.id) === "chinese" ? ((l, f, d) => {
      if (f)
        switch (l) {
          case 1:
            return 1651;
          case 2:
            return d < 30 ? 1947 : 1765;
          case 3:
            return d < 30 ? 1966 : 1955;
          case 4:
            return d < 30 ? 1963 : 1944;
          case 5:
            return d < 30 ? 1971 : 1952;
          case 6:
            return d < 30 ? 1960 : 1941;
          case 7:
            return d < 30 ? 1968 : 1938;
          case 8:
            return d < 30 ? 1957 : 1718;
          case 9:
            return 1832;
          case 10:
            return 1870;
          case 11:
            return 1814;
          case 12:
            return 1890;
        }
      return 1972;
    })(e, t, n) : _t;
    let [o, a, i] = _o.call(this, {
      isoYear: r,
      isoMonth: Mt,
      isoDay: 31
    });
    const s = so.call(this, o), c = a === s;
    (Dt(e, Js(a, s)) || Dt(Number(t), Number(c)) || Dt(n, i)) === 1 && o--;
    for (let l = 0; l < 100; l++) {
      const f = o - l, d = so.call(this, f), u = bo(e, t, d);
      if (t === (u === d) && n <= Ol.call(this, f, u))
        return [f, u];
    }
  },
  sn(e) {
    const t = Wr.call(this, e);
    return t > Wr.call(this, e - 1) && t > Wr.call(this, e + 1);
  },
  L: so,
  B: Zr,
  cn(e, t) {
    const n = t + e, r = Math.sign(e), o = r < 0 ? -1 : 0;
    let a = 0;
    for (let i = t; i !== n; i += r)
      a += Zr.call(this, i + o);
    return a;
  },
  U: Ol,
  fn: Wr,
  V(e, t, n) {
    return No(vr.call(this, e, t, n));
  },
  p: vr,
  un(e, t, n) {
    if (n) {
      if (t += n, !Number.isSafeInteger(t))
        throw new RangeError(Qt);
      if (n < 0)
        for (; t < 1; )
          t += Zr.call(this, --e);
      else {
        let r;
        for (; t > (r = Zr.call(this, e)); )
          t -= r, e++;
      }
    }
    return [e, t];
  },
  year(e) {
    return this.h(e).year;
  },
  month(e) {
    const { year: t, o: n } = this.h(e), { u: r } = this.l(t);
    return r[n] + 1;
  },
  day(e) {
    return this.h(e).day;
  }
}), ra = /* @__PURE__ */ i1(xy, Fy), H = /* @__PURE__ */ i1(zy, qy), Ml = {
  era: io,
  eraYear: Ie,
  year: Ie,
  month: rl,
  monthCode(e) {
    const t = io(e);
    return Zs(t), t;
  },
  day: rl,
  .../* @__PURE__ */ Bn(jt, Ie),
  .../* @__PURE__ */ Bn(ae, ds),
  offset(e) {
    const t = io(e);
    return mn(t), t;
  }
}, Ec = /* @__PURE__ */ Q(ed, jt, nt), $y = /* @__PURE__ */ Q(ed, nt, jt), Ft = "numeric", Dr = ["timeZoneName"], $1 = {
  month: Ft,
  day: Ft
}, Ac = {
  year: Ft,
  month: Ft
}, Sc = /* @__PURE__ */ Object.assign({}, Ac, {
  day: Ft
}), Tc = {
  hour: Ft,
  minute: Ft,
  second: Ft
}, kc = /* @__PURE__ */ Object.assign({}, Sc, Tc), Hy = /* @__PURE__ */ Object.assign({}, kc, {
  timeZoneName: "short"
}), Uy = /* @__PURE__ */ Object.keys(Ac), Ky = /* @__PURE__ */ Object.keys($1), Vy = /* @__PURE__ */ Object.keys(Sc), Gy = /* @__PURE__ */ Object.keys(Tc), Rc = ["dateStyle"], Yy = /* @__PURE__ */ Uy.concat(Rc), Wy = /* @__PURE__ */ Ky.concat(Rc), Ic = /* @__PURE__ */ Vy.concat(Rc, ["weekday"]), zr = /* @__PURE__ */ Gy.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]), jc = /* @__PURE__ */ Ic.concat(zr), Zy = /* @__PURE__ */ Dr.concat(zr), Jy = /* @__PURE__ */ Dr.concat(Ic), Qy = /* @__PURE__ */ Dr.concat(["day", "weekday"], zr), Xy = /* @__PURE__ */ Dr.concat(["year", "weekday"], zr), e2 = /* @__PURE__ */ hn(jc, kc), t2 = /* @__PURE__ */ hn(jc, Hy), n2 = /* @__PURE__ */ hn(jc, kc, Dr), r2 = /* @__PURE__ */ hn(Ic, Sc, Zy), o2 = /* @__PURE__ */ hn(zr, Tc, Jy), a2 = /* @__PURE__ */ hn(Yy, Ac, Qy), i2 = /* @__PURE__ */ hn(Wy, $1, Xy), s2 = {}, H1 = new zt(void 0, {
  calendar: ee
}).resolvedOptions().calendar === ee, U1 = [e2, ks], c2 = [t2, ks, 0, (e, t) => {
  const n = e.timeZone;
  if (t && t.timeZone !== n)
    throw new RangeError(_1);
  return n;
}], K1 = [n2, je], V1 = [r2, je], G1 = [o2, (e) => qt(e) / It], Y1 = [a2, je, H1], W1 = [i2, je, H1];
let Nl;
function en(e, t, n, r, o) {
  function a(...c) {
    if (!(this instanceof a))
      throw new TypeError(Ki);
    Dl(this, t(...c));
  }
  function i(c, l) {
    return Object.defineProperties((function(...f) {
      return c.call(this, s(this), ...f);
    }), pr(l));
  }
  function s(c) {
    const l = Ce(c);
    if (!l || l.branding !== e)
      throw new TypeError(Ki);
    return l;
  }
  return Object.defineProperties(a.prototype, {
    ...x0(At(i, n)),
    ...Mn(At(i, r)),
    ...is("Temporal." + e)
  }), Object.defineProperties(a, {
    ...Mn(o),
    ...pr(e)
  }), [a, (c) => {
    const l = Object.create(a.prototype);
    return Dl(l, c), l;
  }, s];
}
function Zn(e) {
  if (Ce(e) || e.calendar !== void 0 || e.timeZone !== void 0)
    throw new TypeError(wg);
  return e;
}
function Fr(e) {
  return Z1(e) || ee;
}
function Z1(e) {
  const { calendar: t } = e;
  if (t !== void 0)
    return oa(t);
}
function oa(e) {
  if (Oe(e)) {
    const { calendar: t } = Ce(e) || {};
    if (!t)
      throw new TypeError(y1(e));
    return t;
  }
  return ((t) => Jo(dh(Te(t))))(e);
}
function Oc(e) {
  const t = {};
  for (const n in e)
    t[n] = (r) => {
      const { calendar: o } = r;
      return H(o)[n](r);
    };
  return t;
}
function tn() {
  throw new TypeError(Eg);
}
function Le(e) {
  if (Oe(e)) {
    const { timeZone: t } = Ce(e) || {};
    if (!t)
      throw new TypeError(b1(e));
    return t;
  }
  return ((t) => Ks(ph(Te(t))))(e);
}
function be(e) {
  if (Oe(e)) {
    const t = Ce(e);
    return t && t.branding === yc ? t : xh(e);
  }
  return fh(e);
}
function rr(e) {
  if (e !== void 0) {
    if (Oe(e)) {
      const t = Ce(e) || {};
      switch (t.branding) {
        case Xt:
        case Br:
          return t;
        case Wn:
          return Rt(t);
      }
      const n = Fr(e);
      return {
        ...Ih(Le, V, H(n), e),
        calendar: n
      };
    }
    return ah(e);
  }
}
function Nt(e, t) {
  if (Oe(e)) {
    const r = Ce(e) || {};
    switch (r.branding) {
      case hc:
        return ne(t), r;
      case Wn:
        return ne(t), ht(r);
      case Xt:
        return ne(t), f1(V, r);
    }
    return Nh(e, t);
  }
  const n = uh(e);
  return ne(t), n;
}
function Pc(e) {
  return e === void 0 ? void 0 : Nt(e);
}
function En(e, t) {
  if (Oe(e)) {
    const r = Ce(e) || {};
    switch (r.branding) {
      case Wn:
        return ne(t), r;
      case Br:
        return ne(t), tt({
          ...r,
          ...De
        });
      case Xt:
        return ne(t), l1(V, r);
    }
    return Oh(H(Fr(e)), e, t);
  }
  const n = sh(e);
  return ne(t), n;
}
function xl(e, t) {
  if (Oe(e)) {
    const r = Ce(e);
    if (r && r.branding === mc)
      return ne(t), r;
    const o = Z1(e);
    return Mh(H(o || ee), !o, e, t);
  }
  const n = lh(H, e);
  return ne(t), n;
}
function An(e, t) {
  if (Oe(e)) {
    const r = Ce(e);
    return r && r.branding === pc ? (ne(t), r) : Ch(H(Fr(e)), e, t);
  }
  const n = ch(H, e);
  return ne(t), n;
}
function Sn(e, t) {
  if (Oe(e)) {
    const r = Ce(e) || {};
    switch (r.branding) {
      case Br:
        return ne(t), r;
      case Wn:
        return ne(t), Rt(r);
      case Xt:
        return ne(t), u1(V, r);
    }
    return Ph(H(Fr(e)), e, t);
  }
  const n = zs(e);
  return ne(t), n;
}
function Tn(e, t) {
  if (Oe(e)) {
    const n = Ce(e);
    if (n && n.branding === Xt)
      return Bo(t), n;
    const r = Fr(e);
    return jh(Le, V, H(r), r, e, t);
  }
  return ih(e, t);
}
function Bl(e) {
  return At(((t) => (n) => t(Zi(n))), e);
}
function Zi(e) {
  return Ue(e, V);
}
function kn(e) {
  if (Oe(e)) {
    const t = Ce(e);
    if (t)
      switch (t.branding) {
        case gc:
          return t;
        case Xt:
          return kt(t.epochNanoseconds);
      }
  }
  return oh(e);
}
function l2() {
  function e(a, i) {
    return new t(a, i);
  }
  function t(a, i = /* @__PURE__ */ Object.create(null)) {
    Ao.set(this, ((s, c) => {
      const l = new zt(s, c), f = l.resolvedOptions(), d = f.locale, u = Xe(Object.keys(c), f), v = qe(d2), m = (w, ...E) => {
        if (w) {
          if (E.length !== 2)
            throw new TypeError(va);
          for (const g of E)
            if (g === void 0)
              throw new TypeError(va);
        }
        w || E[0] !== void 0 || (E = []);
        const h = E.map(((g) => Ce(g) || Number(g)));
        let y, S = 0;
        for (const g of h) {
          const b = typeof g == "object" ? g.branding : void 0;
          if (S++ && b !== y)
            throw new TypeError(va);
          y = b;
        }
        return y ? v(y)(d, u, ...h) : [l, ...h];
      };
      return m.X = l, m;
    })(a, i));
  }
  const n = zt.prototype, r = Object.getOwnPropertyDescriptors(n), o = Object.getOwnPropertyDescriptors(zt);
  for (const a in r) {
    const i = r[a], s = a.startsWith("format") && u2(a);
    typeof i.value == "function" ? i.value = a === "constructor" ? e : s || f2(a) : s && (i.get = function() {
      if (!Ao.has(this))
        throw new TypeError(Ki);
      return (...c) => s.apply(this, c);
    }, Object.defineProperties(i.get, pr(`get ${a}`)));
  }
  return o.prototype.value = t.prototype = Object.create({}, r), Object.defineProperties(e, o), e;
}
function u2(e) {
  return Object.defineProperties((function(...t) {
    const n = Ao.get(this), [r, ...o] = n(e.includes("Range"), ...t);
    return r[e](...o);
  }), pr(e));
}
function f2(e) {
  return Object.defineProperties((function(...t) {
    return Ao.get(this).X[e](...t);
  }), pr(e));
}
function d2(e) {
  const t = v2[e];
  if (!t)
    throw new TypeError(Lg(e));
  return Zt(t, qe(d1), 1);
}
const Eo = /* @__PURE__ */ new WeakMap(), Ce = /* @__PURE__ */ Eo.get.bind(Eo), Dl = /* @__PURE__ */ Eo.set.bind(Eo), J1 = {
  era: B0,
  eraYear: od,
  year: cs,
  month: yt,
  daysInMonth: yt,
  daysInYear: yt,
  inLeapYear: Vg,
  monthsInYear: yt
}, Cc = {
  monthCode: Te
}, Q1 = {
  day: yt
}, p2 = {
  dayOfWeek: yt,
  dayOfYear: yt,
  weekOfYear: D0,
  yearOfWeek: od,
  daysInWeek: yt
}, Mc = /* @__PURE__ */ Oc(/* @__PURE__ */ Object.assign({}, J1, Cc, Q1, p2)), m2 = /* @__PURE__ */ Oc({
  ...J1,
  ...Cc
}), h2 = /* @__PURE__ */ Oc({
  ...Cc,
  ...Q1
}), Lr = {
  calendarId: (e) => e.calendar
}, g2 = /* @__PURE__ */ Oo(((e) => (t) => t[e]), ae.concat("sign")), Nc = /* @__PURE__ */ Oo(((e, t) => (n) => n[nt[t]]), jt), X1 = {
  epochMilliseconds: ks,
  epochNanoseconds: L0
}, [y2, he] = en(yc, Zh, {
  ...g2,
  blank: nh
}, {
  with: (e, t) => he($h(e, t)),
  negated: (e) => he(Ds(e)),
  abs: (e) => he(th(e)),
  add: (e, t, n) => he(wl(rr, H, V, 0, e, be(t), n)),
  subtract: (e, t, n) => he(wl(rr, H, V, 1, e, be(t), n)),
  round: (e, t) => he(eh(rr, H, V, e, t)),
  total: (e, t) => q0(rr, H, V, e, t),
  toLocaleString(e, t, n) {
    return Intl.DurationFormat ? new Intl.DurationFormat(t, n).format(this) : pa(e);
  },
  toString: pa,
  toJSON: (e) => pa(e),
  valueOf: tn
}, {
  from: (e) => he(be(e)),
  compare: (e, t, n) => hh(rr, H, V, be(e), be(t), n)
}), v2 = {
  Instant: U1,
  PlainDateTime: K1,
  PlainDate: V1,
  PlainTime: G1,
  PlainYearMonth: Y1,
  PlainMonthDay: W1
}, b2 = /* @__PURE__ */ Zt(U1), _2 = /* @__PURE__ */ Zt(c2), w2 = /* @__PURE__ */ Zt(K1), E2 = /* @__PURE__ */ Zt(V1), A2 = /* @__PURE__ */ Zt(G1), S2 = /* @__PURE__ */ Zt(Y1), T2 = /* @__PURE__ */ Zt(W1), [k2, Bt] = en(hc, Wh, Nc, {
  with(e, t, n) {
    return Bt(qh(this, Zn(t), n));
  },
  add: (e, t) => Bt(_l(0, e, be(t))),
  subtract: (e, t) => Bt(_l(1, e, be(t))),
  until: (e, t, n) => he(jl(0, e, Nt(t), n)),
  since: (e, t, n) => he(jl(1, e, Nt(t), n)),
  round: (e, t) => Bt(K0(e, t)),
  equals: (e, t) => Eh(e, Nt(t)),
  toLocaleString(e, t, n) {
    const [r, o] = A2(t, n, e);
    return r.format(o);
  },
  toString: pl,
  toJSON: (e) => pl(e),
  valueOf: tn
}, {
  from: (e, t) => Bt(Nt(e, t)),
  compare: (e, t) => Gs(Nt(e), Nt(t))
}), [R2, at] = en(Wn, Q(Kh, Or), {
  ...Lr,
  ...Mc,
  ...Nc
}, {
  with: (e, t, n) => at(Dh(H, e, Zn(t), n)),
  withCalendar: (e, t) => at(Qs(e, oa(t))),
  withPlainTime: (e, t) => at(ug(e, Pc(t))),
  add: (e, t, n) => at(yl(H, 0, e, be(t), n)),
  subtract: (e, t, n) => at(yl(H, 1, e, be(t), n)),
  until: (e, t, n) => he(kl(H, 0, e, En(t), n)),
  since: (e, t, n) => he(kl(H, 1, e, En(t), n)),
  round: (e, t) => at(U0(e, t)),
  equals: (e, t) => vh(e, En(t)),
  toZonedDateTime: (e, t, n) => Re(Xh(V, e, Le(t), n)),
  toPlainDate: (e) => it(Rt(e)),
  toPlainTime: (e) => Bt(ht(e)),
  toLocaleString(e, t, n) {
    const [r, o] = w2(t, n, e);
    return r.format(o);
  },
  toString: ll,
  toJSON: (e) => ll(e),
  valueOf: tn
}, {
  from: (e, t) => at(En(e, t)),
  compare: (e, t) => Ud(En(e), En(t))
}), [I2, Ji] = en(mc, Q(Yh, Or), {
  ...Lr,
  ...h2
}, {
  with: (e, t, n) => Ji(Lh(H, e, Zn(t), n)),
  equals: (e, t) => wh(e, xl(t)),
  toPlainDate(e, t) {
    return it(ag(H, e, this, t));
  },
  toLocaleString(e, t, n) {
    const [r, o] = T2(t, n, e);
    return r.format(o);
  },
  toString: dl,
  toJSON: (e) => dl(e),
  valueOf: tn
}, {
  from: (e, t) => Ji(xl(e, t))
}), [j2, lr] = en(pc, Q(Gh, Or), {
  ...Lr,
  ...m2
}, {
  with: (e, t, n) => lr(Fh(H, e, Zn(t), n)),
  add: (e, t, n) => lr(bl(H, 0, e, be(t), n)),
  subtract: (e, t, n) => lr(bl(H, 1, e, be(t), n)),
  until: (e, t, n) => he(Il(H, 0, e, An(t), n)),
  since: (e, t, n) => he(Il(H, 1, e, An(t), n)),
  equals: (e, t) => _h(e, An(t)),
  toPlainDate(e, t) {
    return it(og(H, e, this, t));
  },
  toLocaleString(e, t, n) {
    const [r, o] = S2(t, n, e);
    return r.format(o);
  },
  toString: fl,
  toJSON: (e) => fl(e),
  valueOf: tn
}, {
  from: (e, t) => lr(An(e, t)),
  compare: (e, t) => Vn(An(e), An(t))
}), [O2, it] = en(Br, Q(Vh, Or), {
  ...Lr,
  ...Mc
}, {
  with: (e, t, n) => it(zh(H, e, Zn(t), n)),
  withCalendar: (e, t) => it(Qs(e, oa(t))),
  add: (e, t, n) => it(vl(H, 0, e, be(t), n)),
  subtract: (e, t, n) => it(vl(H, 1, e, be(t), n)),
  until: (e, t, n) => he(Rl(H, 0, e, Sn(t), n)),
  since: (e, t, n) => he(Rl(H, 1, e, Sn(t), n)),
  equals: (e, t) => bh(e, Sn(t)),
  toZonedDateTime(e, t) {
    const n = Oe(t) ? t : {
      timeZone: t
    };
    return Re(eg(Le, Nt, V, e, n));
  },
  toPlainDateTime: (e, t) => at(tg(e, Pc(t))),
  toPlainYearMonth(e) {
    return lr(ng(H, e, this));
  },
  toPlainMonthDay(e) {
    return Ji(rg(H, e, this));
  },
  toLocaleString(e, t, n) {
    const [r, o] = E2(t, n, e);
    return r.format(o);
  },
  toString: ul,
  toJSON: (e) => ul(e),
  valueOf: tn
}, {
  from: (e, t) => it(Sn(e, t)),
  compare: (e, t) => Vn(Sn(e), Sn(t))
}), [P2, Re] = en(Xt, Q(Uh, Or, mh), {
  ...X1,
  ...Lr,
  ...Bl(Mc),
  ...Bl(Nc),
  offset: (e) => Rr(Zi(e).offsetNanoseconds),
  offsetNanoseconds: (e) => Zi(e).offsetNanoseconds,
  timeZoneId: (e) => e.timeZone,
  hoursInDay: (e) => V0(V, e)
}, {
  with: (e, t, n) => Re(Bh(H, V, e, Zn(t), n)),
  withCalendar: (e, t) => Re(Qs(e, oa(t))),
  withTimeZone: (e, t) => Re(fg(e, Le(t))),
  withPlainTime: (e, t) => Re(lg(V, e, Pc(t))),
  add: (e, t, n) => Re(gl(H, V, 0, e, be(t), n)),
  subtract: (e, t, n) => Re(gl(H, V, 1, e, be(t), n)),
  until: (e, t, n) => he(_e(Tl(H, V, 0, e, Tn(t), n))),
  since: (e, t, n) => he(_e(Tl(H, V, 1, e, Tn(t), n))),
  round: (e, t) => Re(H0(V, e, t)),
  startOfDay: (e) => Re(G0(V, e)),
  equals: (e, t) => yh(e, Tn(t)),
  toInstant: (e) => xt(Qh(e)),
  toPlainDateTime: (e) => at(l1(V, e)),
  toPlainDate: (e) => it(u1(V, e)),
  toPlainTime: (e) => Bt(f1(V, e)),
  toLocaleString(e, t, n = {}) {
    const [r, o] = _2(t, n, e);
    return r.format(o);
  },
  toString: (e, t) => cl(V, e, t),
  toJSON: (e) => cl(V, e),
  valueOf: tn,
  getTimeZoneTransition(e, t) {
    const { timeZone: n, epochNanoseconds: r } = e, o = F0(t), a = V(n).O(r, o);
    return a ? Re({
      ...e,
      epochNanoseconds: a
    }) : null;
  }
}, {
  from: (e, t) => Re(Tn(e, t)),
  compare: (e, t) => Hd(Tn(e), Tn(t))
}), [C2, xt] = en(gc, Hh, X1, {
  add: (e, t) => xt(hl(0, e, be(t))),
  subtract: (e, t) => xt(hl(1, e, be(t))),
  until: (e, t, n) => he(Sl(0, e, kn(t), n)),
  since: (e, t, n) => he(Sl(1, e, kn(t), n)),
  round: (e, t) => xt($0(e, t)),
  equals: (e, t) => gh(e, kn(t)),
  toZonedDateTimeISO: (e, t) => Re(Jh(e, Le(t))),
  toLocaleString(e, t, n) {
    const [r, o] = b2(t, n, e);
    return r.format(o);
  },
  toString: (e, t) => sl(Le, V, e, t),
  toJSON: (e) => sl(Le, V, e),
  valueOf: tn
}, {
  from: (e) => xt(kn(e)),
  fromEpochMilliseconds: (e) => xt(ig(e)),
  fromEpochNanoseconds: (e) => xt(sg(e)),
  compare: (e, t) => $d(kn(e), kn(t))
}), M2 = /* @__PURE__ */ Object.defineProperties({}, {
  ...is("Temporal.Now"),
  ...Mn({
    timeZoneId: () => tr(),
    instant: () => xt(kt(Ui())),
    zonedDateTimeISO: (e = tr()) => Re(et(Ui(), Le(e), ee)),
    plainDateTimeISO: (e = tr()) => at(tt(ya(V(Le(e))), ee)),
    plainDateISO: (e = tr()) => it(Rt(ya(V(Le(e))), ee)),
    plainTimeISO: (e = tr()) => Bt(ht(ya(V(Le(e)))))
  })
}), N2 = /* @__PURE__ */ Object.defineProperties({}, {
  ...is("Temporal"),
  ...Mn({
    PlainYearMonth: j2,
    PlainMonthDay: I2,
    PlainDate: O2,
    PlainTime: k2,
    PlainDateTime: R2,
    ZonedDateTime: P2,
    Instant: C2,
    Duration: y2,
    Now: M2
  })
}), x2 = /* @__PURE__ */ l2(), Ao = /* @__PURE__ */ new WeakMap();
Object.create(Intl), Mn({
  DateTimeFormat: x2
});
function B2(e) {
  const t = e < 0;
  e = Math.abs(e);
  const n = Math.floor(e / 3600).toFixed(0).padStart(2, "0"), r = Math.floor(e % 3600 / 60).toFixed(0).padStart(2, "0"), o = Math.floor(e % 3600 % 60).toFixed(0).padStart(2, "0");
  let a = "";
  return n !== "00" && (a += `${n}:`), a += `${r}:${o}`, t && (a = "-" + a), a;
}
function zl(e) {
  const t = `${e.getFullYear()}`.padStart(4, "0"), n = `${e.getMonth() + 1}`.padStart(2, "0"), r = `${e.getDate()}`.padStart(2, "0");
  return `${t}-${n}-${r}`;
}
function Fl({ seconds: e, className: t, ...n }) {
  const r = ct(() => Math.floor(e), [e]), o = ct(() => D2(r), [r]);
  return /* @__PURE__ */ p.createElement(
    "time",
    {
      dateTime: o,
      className: re("mx_Clock", t),
      ...n
    },
    B2(e)
  );
}
function D2(e) {
  if (!isNaN(e))
    return new N2.Duration(0, 0, 0, 0, 0, 0, Math.round(e)).round({ smallestUnit: "seconds", largestUnit: "hours" }).toString();
}
var ep = typeof __webpack_require__.g == "object" && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g, z2 = typeof self == "object" && self && self.Object === Object && self, rt = ep || z2 || Function("return this")(), Ke = rt.Symbol, tp = Object.prototype, F2 = tp.hasOwnProperty, L2 = tp.toString, or = Ke ? Ke.toStringTag : void 0;
function q2(e) {
  var t = F2.call(e, or), n = e[or];
  try {
    e[or] = void 0;
    var r = !0;
  } catch {
  }
  var o = L2.call(e);
  return r && (t ? e[or] = n : delete e[or]), o;
}
var $2 = Object.prototype, H2 = $2.toString;
function U2(e) {
  return H2.call(e);
}
var K2 = "[object Null]", V2 = "[object Undefined]", Ll = Ke ? Ke.toStringTag : void 0;
function yn(e) {
  return e == null ? e === void 0 ? V2 : K2 : Ll && Ll in Object(e) ? q2(e) : U2(e);
}
function St(e) {
  return e != null && typeof e == "object";
}
var G2 = "[object Symbol]";
function aa(e) {
  return typeof e == "symbol" || St(e) && yn(e) == G2;
}
function np(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Tt = Array.isArray, ql = Ke ? Ke.prototype : void 0, $l = ql ? ql.toString : void 0;
function rp(e) {
  if (typeof e == "string")
    return e;
  if (Tt(e))
    return np(e, rp) + "";
  if (aa(e))
    return $l ? $l.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Y2 = /\s/;
function W2(e) {
  for (var t = e.length; t-- && Y2.test(e.charAt(t)); )
    ;
  return t;
}
var Z2 = /^\s+/;
function J2(e) {
  return e && e.slice(0, W2(e) + 1).replace(Z2, "");
}
function Kt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Hl = (/* unused pure expression or super */ null && (NaN)), Q2 = /^[-+]0x[0-9a-f]+$/i, X2 = /^0b[01]+$/i, ev = /^0o[0-7]+$/i, tv = (/* unused pure expression or super */ null && (parseInt));
function Ul(e) {
  if (typeof e == "number")
    return e;
  if (aa(e))
    return Hl;
  if (Kt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Kt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = J2(e);
  var n = X2.test(e);
  return n || ev.test(e) ? tv(e.slice(2), n ? 2 : 8) : Q2.test(e) ? Hl : +e;
}
function nv(e) {
  return e;
}
var rv = "[object AsyncFunction]", ov = "[object Function]", av = "[object GeneratorFunction]", iv = "[object Proxy]";
function op(e) {
  if (!Kt(e))
    return !1;
  var t = yn(e);
  return t == ov || t == av || t == rv || t == iv;
}
var wa = rt["__core-js_shared__"], Kl = (function() {
  var e = /[^.]+$/.exec(wa && wa.keys && wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function sv(e) {
  return !!Kl && Kl in e;
}
var cv = Function.prototype, lv = cv.toString;
function vn(e) {
  if (e != null) {
    try {
      return lv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var uv = /[\\^$.*+?()[\]{}|]/g, fv = /^\[object .+?Constructor\]$/, dv = Function.prototype, pv = Object.prototype, mv = dv.toString, hv = pv.hasOwnProperty, gv = RegExp(
  "^" + mv.call(hv).replace(uv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yv(e) {
  if (!Kt(e) || sv(e))
    return !1;
  var t = op(e) ? gv : fv;
  return t.test(vn(e));
}
function vv(e, t) {
  return e?.[t];
}
function bn(e, t) {
  var n = vv(e, t);
  return yv(n) ? n : void 0;
}
var Qi = bn(rt, "WeakMap");
function bv(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var _v = 800, wv = 16, Ev = Date.now;
function Av(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ev(), o = wv - (r - n);
    if (n = r, o > 0) {
      if (++t >= _v)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Sv(e) {
  return function() {
    return e;
  };
}
var So = (function() {
  try {
    var e = bn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Tv = So ? function(e, t) {
  return So(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sv(t),
    writable: !0
  });
} : nv, kv = Av(Tv);
function Rv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var Iv = 9007199254740991, jv = /^(?:0|[1-9]\d*)$/;
function Ov(e, t) {
  var n = typeof e;
  return t = t ?? Iv, !!t && (n == "number" || n != "symbol" && jv.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ap(e, t, n) {
  t == "__proto__" && So ? So(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function xc(e, t) {
  return e === t || e !== e && t !== t;
}
var Pv = Object.prototype, Cv = Pv.hasOwnProperty;
function ip(e, t, n) {
  var r = e[t];
  (!(Cv.call(e, t) && xc(r, n)) || n === void 0 && !(t in e)) && ap(e, t, n);
}
function Mv(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, i = t.length; ++a < i; ) {
    var s = t[a], c = void 0;
    c === void 0 && (c = e[s]), o ? ap(n, s, c) : ip(n, s, c);
  }
  return n;
}
var Vl = Math.max;
function Nv(e, t, n) {
  return t = Vl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Vl(r.length - t, 0), i = Array(a); ++o < a; )
      i[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(i), bv(e, this, s);
  };
}
var xv = 9007199254740991;
function sp(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= xv;
}
function cp(e) {
  return e != null && sp(e.length) && !op(e);
}
var Bv = Object.prototype;
function lp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Bv;
  return e === n;
}
function Dv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var zv = "[object Arguments]";
function Gl(e) {
  return St(e) && yn(e) == zv;
}
var up = Object.prototype, Fv = up.hasOwnProperty, Lv = up.propertyIsEnumerable, fp = Gl(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Gl : function(e) {
  return St(e) && Fv.call(e, "callee") && !Lv.call(e, "callee");
};
function qv() {
  return !1;
}
var dp = typeof exports == "object" && exports && !exports.nodeType && exports, Yl = dp && typeof module == "object" && module && !module.nodeType && module, $v = Yl && Yl.exports === dp, Wl = $v ? rt.Buffer : void 0, Hv = Wl ? Wl.isBuffer : void 0, To = Hv || qv, Uv = "[object Arguments]", Kv = "[object Array]", Vv = "[object Boolean]", Gv = "[object Date]", Yv = "[object Error]", Wv = "[object Function]", Zv = "[object Map]", Jv = "[object Number]", Qv = "[object Object]", Xv = "[object RegExp]", eb = "[object Set]", tb = "[object String]", nb = "[object WeakMap]", rb = "[object ArrayBuffer]", ob = "[object DataView]", ab = "[object Float32Array]", ib = "[object Float64Array]", sb = "[object Int8Array]", cb = "[object Int16Array]", lb = "[object Int32Array]", ub = "[object Uint8Array]", fb = "[object Uint8ClampedArray]", db = "[object Uint16Array]", pb = "[object Uint32Array]", oe = {};
oe[ab] = oe[ib] = oe[sb] = oe[cb] = oe[lb] = oe[ub] = oe[fb] = oe[db] = oe[pb] = !0;
oe[Uv] = oe[Kv] = oe[rb] = oe[Vv] = oe[ob] = oe[Gv] = oe[Yv] = oe[Wv] = oe[Zv] = oe[Jv] = oe[Qv] = oe[Xv] = oe[eb] = oe[tb] = oe[nb] = !1;
function mb(e) {
  return St(e) && sp(e.length) && !!oe[yn(e)];
}
function Bc(e) {
  return function(t) {
    return e(t);
  };
}
var pp = typeof exports == "object" && exports && !exports.nodeType && exports, dr = pp && typeof module == "object" && module && !module.nodeType && module, hb = dr && dr.exports === pp, Ea = hb && ep.process, Dn = (function() {
  try {
    var e = dr && dr.require && dr.require("util").types;
    return e || Ea && Ea.binding && Ea.binding("util");
  } catch {
  }
})(), Zl = Dn && Dn.isTypedArray, mp = Zl ? Bc(Zl) : mb, gb = Object.prototype, yb = gb.hasOwnProperty;
function hp(e, t) {
  var n = Tt(e), r = !n && fp(e), o = !n && !r && To(e), a = !n && !r && !o && mp(e), i = n || r || o || a, s = i ? Dv(e.length, String) : [], c = s.length;
  for (var l in e)
    (t || yb.call(e, l)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ov(l, c))) && s.push(l);
  return s;
}
function gp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var vb = gp(Object.keys, Object), bb = Object.prototype, _b = bb.hasOwnProperty;
function wb(e) {
  if (!lp(e))
    return vb(e);
  var t = [];
  for (var n in Object(e))
    _b.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Eb(e) {
  return cp(e) ? hp(e) : wb(e);
}
function Ab(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Sb = Object.prototype, Tb = Sb.hasOwnProperty;
function kb(e) {
  if (!Kt(e))
    return Ab(e);
  var t = lp(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Tb.call(e, r)) || n.push(r);
  return n;
}
function Rb(e) {
  return cp(e) ? hp(e, !0) : kb(e);
}
var Ib = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, jb = /^\w*$/;
function Ob(e, t) {
  if (Tt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || aa(e) ? !0 : jb.test(e) || !Ib.test(e) || t != null && e in Object(t);
}
var wr = bn(Object, "create");
function Pb() {
  this.__data__ = wr ? wr(null) : {}, this.size = 0;
}
function Cb(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mb = "__lodash_hash_undefined__", Nb = Object.prototype, xb = Nb.hasOwnProperty;
function Bb(e) {
  var t = this.__data__;
  if (wr) {
    var n = t[e];
    return n === Mb ? void 0 : n;
  }
  return xb.call(t, e) ? t[e] : void 0;
}
var Db = Object.prototype, zb = Db.hasOwnProperty;
function Fb(e) {
  var t = this.__data__;
  return wr ? t[e] !== void 0 : zb.call(t, e);
}
var Lb = "__lodash_hash_undefined__";
function qb(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = wr && t === void 0 ? Lb : t, this;
}
function ln(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ln.prototype.clear = Pb;
ln.prototype.delete = Cb;
ln.prototype.get = Bb;
ln.prototype.has = Fb;
ln.prototype.set = qb;
function $b() {
  this.__data__ = [], this.size = 0;
}
function ia(e, t) {
  for (var n = e.length; n--; )
    if (xc(e[n][0], t))
      return n;
  return -1;
}
var Hb = Array.prototype, Ub = Hb.splice;
function Kb(e) {
  var t = this.__data__, n = ia(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ub.call(t, n, 1), --this.size, !0;
}
function Vb(e) {
  var t = this.__data__, n = ia(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Gb(e) {
  return ia(this.__data__, e) > -1;
}
function Yb(e, t) {
  var n = this.__data__, r = ia(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Pt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pt.prototype.clear = $b;
Pt.prototype.delete = Kb;
Pt.prototype.get = Vb;
Pt.prototype.has = Gb;
Pt.prototype.set = Yb;
var Er = bn(rt, "Map");
function Wb() {
  this.size = 0, this.__data__ = {
    hash: new ln(),
    map: new (Er || Pt)(),
    string: new ln()
  };
}
function Zb(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function sa(e, t) {
  var n = e.__data__;
  return Zb(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Jb(e) {
  var t = sa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qb(e) {
  return sa(this, e).get(e);
}
function Xb(e) {
  return sa(this, e).has(e);
}
function e_(e, t) {
  var n = sa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Ct(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ct.prototype.clear = Wb;
Ct.prototype.delete = Jb;
Ct.prototype.get = Qb;
Ct.prototype.has = Xb;
Ct.prototype.set = e_;
var t_ = "Expected a function";
function Dc(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(t_);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var i = e.apply(this, r);
    return n.cache = a.set(o, i) || a, i;
  };
  return n.cache = new (Dc.Cache || Ct)(), n;
}
Dc.Cache = Ct;
var n_ = 500;
function r_(e) {
  var t = Dc(e, function(r) {
    return n.size === n_ && n.clear(), r;
  }), n = t.cache;
  return t;
}
var o_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, a_ = /\\(\\)?/g, i_ = r_(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(o_, function(n, r, o, a) {
    t.push(o ? a.replace(a_, "$1") : r || n);
  }), t;
});
function zc(e) {
  return e == null ? "" : rp(e);
}
function Fc(e, t) {
  return Tt(e) ? e : Ob(e, t) ? [e] : i_(zc(e));
}
function yp(e) {
  if (typeof e == "string" || aa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function s_(e, t) {
  t = Fc(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[yp(t[n++])];
  return n && n == r ? e : void 0;
}
function Lc(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Jl = Ke ? Ke.isConcatSpreadable : void 0;
function c_(e) {
  return Tt(e) || fp(e) || !!(Jl && e && e[Jl]);
}
function l_(e, t, n, r, o) {
  var a = -1, i = e.length;
  for (n || (n = c_), o || (o = []); ++a < i; ) {
    var s = e[a];
    n(s) ? Lc(o, s) : o[o.length] = s;
  }
  return o;
}
function u_(e) {
  var t = e == null ? 0 : e.length;
  return t ? l_(e) : [];
}
function f_(e) {
  return kv(Nv(e, void 0, u_), e + "");
}
var vp = gp(Object.getPrototypeOf, Object), d_ = "[object Object]", p_ = Function.prototype, m_ = Object.prototype, bp = p_.toString, h_ = m_.hasOwnProperty, g_ = bp.call(Object);
function y_(e) {
  if (!St(e) || yn(e) != d_)
    return !1;
  var t = vp(e);
  if (t === null)
    return !0;
  var n = h_.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && bp.call(n) == g_;
}
function _p(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
function v_(e, t, n) {
  var r = e.length;
  return n = n === void 0 ? r : n, !t && n >= r ? e : _p(e, t, n);
}
var b_ = "\\ud800-\\udfff", __ = "\\u0300-\\u036f", w_ = "\\ufe20-\\ufe2f", E_ = "\\u20d0-\\u20ff", A_ = __ + w_ + E_, S_ = "\\ufe0e\\ufe0f", T_ = "\\u200d", k_ = RegExp("[" + T_ + b_ + A_ + S_ + "]");
function wp(e) {
  return k_.test(e);
}
function R_(e) {
  return e.split("");
}
var Ep = "\\ud800-\\udfff", I_ = "\\u0300-\\u036f", j_ = "\\ufe20-\\ufe2f", O_ = "\\u20d0-\\u20ff", P_ = I_ + j_ + O_, C_ = "\\ufe0e\\ufe0f", M_ = "[" + Ep + "]", Xi = "[" + P_ + "]", es = "\\ud83c[\\udffb-\\udfff]", N_ = "(?:" + Xi + "|" + es + ")", Ap = "[^" + Ep + "]", Sp = "(?:\\ud83c[\\udde6-\\uddff]){2}", Tp = "[\\ud800-\\udbff][\\udc00-\\udfff]", x_ = "\\u200d", kp = N_ + "?", Rp = "[" + C_ + "]?", B_ = "(?:" + x_ + "(?:" + [Ap, Sp, Tp].join("|") + ")" + Rp + kp + ")*", D_ = Rp + kp + B_, z_ = "(?:" + [Ap + Xi + "?", Xi, Sp, Tp, M_].join("|") + ")", F_ = RegExp(es + "(?=" + es + ")|" + z_ + D_, "g");
function L_(e) {
  return e.match(F_) || [];
}
function q_(e) {
  return wp(e) ? L_(e) : R_(e);
}
function $_(e) {
  return function(t) {
    t = zc(t);
    var n = wp(t) ? q_(t) : void 0, r = n ? n[0] : t.charAt(0), o = n ? v_(n, 1).join("") : t.slice(1);
    return r[e]() + o;
  };
}
var H_ = $_("toUpperCase");
function Ql(e) {
  return H_(zc(e).toLowerCase());
}
function U_() {
  this.__data__ = new Pt(), this.size = 0;
}
function K_(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function V_(e) {
  return this.__data__.get(e);
}
function G_(e) {
  return this.__data__.has(e);
}
var Y_ = 200;
function W_(e, t) {
  var n = this.__data__;
  if (n instanceof Pt) {
    var r = n.__data__;
    if (!Er || r.length < Y_ - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ct(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function wt(e) {
  var t = this.__data__ = new Pt(e);
  this.size = t.size;
}
wt.prototype.clear = U_;
wt.prototype.delete = K_;
wt.prototype.get = V_;
wt.prototype.has = G_;
wt.prototype.set = W_;
var Ip = typeof exports == "object" && exports && !exports.nodeType && exports, Xl = Ip && typeof module == "object" && module && !module.nodeType && module, Z_ = Xl && Xl.exports === Ip, eu = Z_ ? rt.Buffer : void 0;
eu && eu.allocUnsafe;
function J_(e, t) {
  return e.slice();
}
function Q_(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function jp() {
  return [];
}
var X_ = Object.prototype, e7 = X_.propertyIsEnumerable, tu = Object.getOwnPropertySymbols, Op = tu ? function(e) {
  return e == null ? [] : (e = Object(e), Q_(tu(e), function(t) {
    return e7.call(e, t);
  }));
} : jp, t7 = Object.getOwnPropertySymbols, n7 = t7 ? function(e) {
  for (var t = []; e; )
    Lc(t, Op(e)), e = vp(e);
  return t;
} : jp;
function Pp(e, t, n) {
  var r = t(e);
  return Tt(e) ? r : Lc(r, n(e));
}
function nu(e) {
  return Pp(e, Eb, Op);
}
function Cp(e) {
  return Pp(e, Rb, n7);
}
var ts = bn(rt, "DataView"), ns = bn(rt, "Promise"), rs = bn(rt, "Set"), ru = "[object Map]", r7 = "[object Object]", ou = "[object Promise]", au = "[object Set]", iu = "[object WeakMap]", su = "[object DataView]", o7 = vn(ts), a7 = vn(Er), i7 = vn(ns), s7 = vn(rs), c7 = vn(Qi), Ye = yn;
(ts && Ye(new ts(new ArrayBuffer(1))) != su || Er && Ye(new Er()) != ru || ns && Ye(ns.resolve()) != ou || rs && Ye(new rs()) != au || Qi && Ye(new Qi()) != iu) && (Ye = function(e) {
  var t = yn(e), n = t == r7 ? e.constructor : void 0, r = n ? vn(n) : "";
  if (r)
    switch (r) {
      case o7:
        return su;
      case a7:
        return ru;
      case i7:
        return ou;
      case s7:
        return au;
      case c7:
        return iu;
    }
  return t;
});
var l7 = Object.prototype, u7 = l7.hasOwnProperty;
function f7(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && u7.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var ko = rt.Uint8Array;
function qc(e) {
  var t = new e.constructor(e.byteLength);
  return new ko(t).set(new ko(e)), t;
}
function d7(e, t) {
  var n = qc(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var p7 = /\w*$/;
function m7(e) {
  var t = new e.constructor(e.source, p7.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var cu = Ke ? Ke.prototype : void 0, lu = cu ? cu.valueOf : void 0;
function h7(e) {
  return lu ? Object(lu.call(e)) : {};
}
function g7(e, t) {
  var n = qc(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var y7 = "[object Boolean]", v7 = "[object Date]", b7 = "[object Map]", _7 = "[object Number]", w7 = "[object RegExp]", E7 = "[object Set]", A7 = "[object String]", S7 = "[object Symbol]", T7 = "[object ArrayBuffer]", k7 = "[object DataView]", R7 = "[object Float32Array]", I7 = "[object Float64Array]", j7 = "[object Int8Array]", O7 = "[object Int16Array]", P7 = "[object Int32Array]", C7 = "[object Uint8Array]", M7 = "[object Uint8ClampedArray]", N7 = "[object Uint16Array]", x7 = "[object Uint32Array]";
function B7(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case T7:
      return qc(e);
    case y7:
    case v7:
      return new r(+e);
    case k7:
      return d7(e);
    case R7:
    case I7:
    case j7:
    case O7:
    case P7:
    case C7:
    case M7:
    case N7:
    case x7:
      return g7(e);
    case b7:
      return new r();
    case _7:
    case A7:
      return new r(e);
    case w7:
      return m7(e);
    case E7:
      return new r();
    case S7:
      return h7(e);
  }
}
var D7 = "[object Map]";
function z7(e) {
  return St(e) && Ye(e) == D7;
}
var uu = Dn && Dn.isMap, F7 = uu ? Bc(uu) : z7, L7 = "[object Set]";
function q7(e) {
  return St(e) && Ye(e) == L7;
}
var fu = Dn && Dn.isSet, $7 = fu ? Bc(fu) : q7, Mp = "[object Arguments]", H7 = "[object Array]", U7 = "[object Boolean]", K7 = "[object Date]", V7 = "[object Error]", Np = "[object Function]", G7 = "[object GeneratorFunction]", Y7 = "[object Map]", W7 = "[object Number]", xp = "[object Object]", Z7 = "[object RegExp]", J7 = "[object Set]", Q7 = "[object String]", X7 = "[object Symbol]", ew = "[object WeakMap]", tw = "[object ArrayBuffer]", nw = "[object DataView]", rw = "[object Float32Array]", ow = "[object Float64Array]", aw = "[object Int8Array]", iw = "[object Int16Array]", sw = "[object Int32Array]", cw = "[object Uint8Array]", lw = "[object Uint8ClampedArray]", uw = "[object Uint16Array]", fw = "[object Uint32Array]", te = {};
te[Mp] = te[H7] = te[tw] = te[nw] = te[U7] = te[K7] = te[rw] = te[ow] = te[aw] = te[iw] = te[sw] = te[Y7] = te[W7] = te[xp] = te[Z7] = te[J7] = te[Q7] = te[X7] = te[cw] = te[lw] = te[uw] = te[fw] = !0;
te[V7] = te[Np] = te[ew] = !1;
function uo(e, t, n, r, o, a) {
  var i;
  if (n && (i = o ? n(e, r, o, a) : n(e)), i !== void 0)
    return i;
  if (!Kt(e))
    return e;
  var s = Tt(e);
  if (s)
    i = f7(e);
  else {
    var c = Ye(e), l = c == Np || c == G7;
    if (To(e))
      return J_(e);
    if (c == xp || c == Mp || l && !o)
      i = {};
    else {
      if (!te[c])
        return o ? e : {};
      i = B7(e, c);
    }
  }
  a || (a = new wt());
  var f = a.get(e);
  if (f)
    return f;
  a.set(e, i), $7(e) ? e.forEach(function(v) {
    i.add(uo(v, t, n, v, e, a));
  }) : F7(e) && e.forEach(function(v, m) {
    i.set(m, uo(v, t, n, m, e, a));
  });
  var d = Cp, u = s ? void 0 : d(e);
  return Rv(u || e, function(v, m) {
    u && (m = v, v = e[m]), ip(i, m, uo(v, t, n, m, e, a));
  }), i;
}
var dw = "__lodash_hash_undefined__";
function pw(e) {
  return this.__data__.set(e, dw), this;
}
function mw(e) {
  return this.__data__.has(e);
}
function Ro(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ct(); ++t < n; )
    this.add(e[t]);
}
Ro.prototype.add = Ro.prototype.push = pw;
Ro.prototype.has = mw;
function hw(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function gw(e, t) {
  return e.has(t);
}
var yw = 1, vw = 2;
function Bp(e, t, n, r, o, a) {
  var i = n & yw, s = e.length, c = t.length;
  if (s != c && !(i && c > s))
    return !1;
  var l = a.get(e), f = a.get(t);
  if (l && f)
    return l == t && f == e;
  var d = -1, u = !0, v = n & vw ? new Ro() : void 0;
  for (a.set(e, t), a.set(t, e); ++d < s; ) {
    var m = e[d], w = t[d];
    if (r)
      var E = i ? r(w, m, d, t, e, a) : r(m, w, d, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      u = !1;
      break;
    }
    if (v) {
      if (!hw(t, function(h, y) {
        if (!gw(v, y) && (m === h || o(m, h, n, r, a)))
          return v.push(y);
      })) {
        u = !1;
        break;
      }
    } else if (!(m === w || o(m, w, n, r, a))) {
      u = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), u;
}
function bw(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function _w(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ww = 1, Ew = 2, Aw = "[object Boolean]", Sw = "[object Date]", Tw = "[object Error]", kw = "[object Map]", Rw = "[object Number]", Iw = "[object RegExp]", jw = "[object Set]", Ow = "[object String]", Pw = "[object Symbol]", Cw = "[object ArrayBuffer]", Mw = "[object DataView]", du = Ke ? Ke.prototype : void 0, Aa = du ? du.valueOf : void 0;
function Nw(e, t, n, r, o, a, i) {
  switch (n) {
    case Mw:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Cw:
      return !(e.byteLength != t.byteLength || !a(new ko(e), new ko(t)));
    case Aw:
    case Sw:
    case Rw:
      return xc(+e, +t);
    case Tw:
      return e.name == t.name && e.message == t.message;
    case Iw:
    case Ow:
      return e == t + "";
    case kw:
      var s = bw;
    case jw:
      var c = r & ww;
      if (s || (s = _w), e.size != t.size && !c)
        return !1;
      var l = i.get(e);
      if (l)
        return l == t;
      r |= Ew, i.set(e, t);
      var f = Bp(s(e), s(t), r, o, a, i);
      return i.delete(e), f;
    case Pw:
      if (Aa)
        return Aa.call(e) == Aa.call(t);
  }
  return !1;
}
var xw = 1, Bw = Object.prototype, Dw = Bw.hasOwnProperty;
function zw(e, t, n, r, o, a) {
  var i = n & xw, s = nu(e), c = s.length, l = nu(t), f = l.length;
  if (c != f && !i)
    return !1;
  for (var d = c; d--; ) {
    var u = s[d];
    if (!(i ? u in t : Dw.call(t, u)))
      return !1;
  }
  var v = a.get(e), m = a.get(t);
  if (v && m)
    return v == t && m == e;
  var w = !0;
  a.set(e, t), a.set(t, e);
  for (var E = i; ++d < c; ) {
    u = s[d];
    var h = e[u], y = t[u];
    if (r)
      var S = i ? r(y, h, u, t, e, a) : r(h, y, u, e, t, a);
    if (!(S === void 0 ? h === y || o(h, y, n, r, a) : S)) {
      w = !1;
      break;
    }
    E || (E = u == "constructor");
  }
  if (w && !E) {
    var g = e.constructor, b = t.constructor;
    g != b && "constructor" in e && "constructor" in t && !(typeof g == "function" && g instanceof g && typeof b == "function" && b instanceof b) && (w = !1);
  }
  return a.delete(e), a.delete(t), w;
}
var Fw = 1, pu = "[object Arguments]", mu = "[object Array]", Qr = "[object Object]", Lw = Object.prototype, hu = Lw.hasOwnProperty;
function qw(e, t, n, r, o, a) {
  var i = Tt(e), s = Tt(t), c = i ? mu : Ye(e), l = s ? mu : Ye(t);
  c = c == pu ? Qr : c, l = l == pu ? Qr : l;
  var f = c == Qr, d = l == Qr, u = c == l;
  if (u && To(e)) {
    if (!To(t))
      return !1;
    i = !0, f = !1;
  }
  if (u && !f)
    return a || (a = new wt()), i || mp(e) ? Bp(e, t, n, r, o, a) : Nw(e, t, c, n, r, o, a);
  if (!(n & Fw)) {
    var v = f && hu.call(e, "__wrapped__"), m = d && hu.call(t, "__wrapped__");
    if (v || m) {
      var w = v ? e.value() : e, E = m ? t.value() : t;
      return a || (a = new wt()), o(w, E, n, r, a);
    }
  }
  return u ? (a || (a = new wt()), zw(e, t, n, r, o, a)) : !1;
}
function Dp(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !St(e) && !St(t) ? e !== e && t !== t : qw(e, t, n, r, Dp, o);
}
var Sa = function() {
  return rt.Date.now();
}, $w = "Expected a function", Hw = Math.max, Uw = Math.min;
function Kw(e, t, n) {
  var r, o, a, i, s, c, l = 0, f = !1, d = !1, u = !0;
  if (typeof e != "function")
    throw new TypeError($w);
  t = Ul(t) || 0, Kt(n) && (f = !!n.leading, d = "maxWait" in n, a = d ? Hw(Ul(n.maxWait) || 0, t) : a, u = "trailing" in n ? !!n.trailing : u);
  function v(A) {
    var k = r, O = o;
    return r = o = void 0, l = A, i = e.apply(O, k), i;
  }
  function m(A) {
    return l = A, s = setTimeout(h, t), f ? v(A) : i;
  }
  function w(A) {
    var k = A - c, O = A - l, C = t - k;
    return d ? Uw(C, a - O) : C;
  }
  function E(A) {
    var k = A - c, O = A - l;
    return c === void 0 || k >= t || k < 0 || d && O >= a;
  }
  function h() {
    var A = Sa();
    if (E(A))
      return y(A);
    s = setTimeout(h, w(A));
  }
  function y(A) {
    return s = void 0, u && r ? v(A) : (r = o = void 0, i);
  }
  function S() {
    s !== void 0 && clearTimeout(s), l = 0, r = c = o = s = void 0;
  }
  function g() {
    return s === void 0 ? i : y(Sa());
  }
  function b() {
    var A = Sa(), k = E(A);
    if (r = arguments, o = this, c = A, k) {
      if (s === void 0)
        return m(c);
      if (d)
        return clearTimeout(s), s = setTimeout(h, t), v(c);
    }
    return s === void 0 && (s = setTimeout(h, t)), i;
  }
  return b.cancel = S, b.flush = g, b;
}
function Vw(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Gw(e, t) {
  return t.length < 2 ? e : s_(e, _p(t, 0, -1));
}
function Yw(e, t) {
  return Dp(e, t);
}
var Ww = Object.prototype, Zw = Ww.hasOwnProperty;
function Jw(e, t) {
  t = Fc(t, e);
  var n = -1, r = t.length;
  if (!r)
    return !0;
  for (var o = e == null || typeof e != "object" && typeof e != "function"; ++n < r; ) {
    var a = t[n];
    if (typeof a == "string") {
      if (a === "__proto__" && !Zw.call(e, "__proto__"))
        return !1;
      if (a === "constructor" && n + 1 < r && typeof t[n + 1] == "string" && t[n + 1] === "prototype") {
        if (o && n === 0)
          continue;
        return !1;
      }
    }
  }
  var i = Gw(e, t);
  return i == null || delete i[yp(Vw(t))];
}
function Qw(e) {
  return y_(e) ? void 0 : e;
}
var Xw = 1, e3 = 2, t3 = 4, n3 = f_(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = !1;
  t = np(t, function(a) {
    return a = Fc(a, e), r || (r = a.length > 1), a;
  }), Mv(e, Cp(e), n), r && (n = uo(n, Xw | e3 | t3, Qw));
  for (var o = t.length; o--; )
    Jw(n, t[o]);
  return n;
}), r3 = "Expected a function";
function o3(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(r3);
  return Kt(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Kw(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
const a3 = "_seekBar_16dv7_14", i3 = {
  seekBar: a3
};
function s3({ value: e = 0, className: t, ...n }) {
  const { translate: r } = de(), [o, a] = ge(e), i = ct(() => o3(a, 10), []);
  return on(() => {
    i(e);
  }, [e, i]), /* @__PURE__ */ p.createElement(
    "input",
    {
      type: "range",
      className: re(i3.seekBar, t),
      onMouseDown: (s) => s.stopPropagation(),
      min: 0,
      max: 100,
      value: o,
      step: 1,
      style: { "--fillTo": o / 100 },
      "aria-label": r("a11y|seek_bar_label"),
      ...n
    }
  );
}
function p4({ vm: e }) {
  const { translate: t } = de(), {
    playbackState: n,
    mediaName: r = t("timeline|m.audio|unnamed_audio"),
    sizeBytes: o,
    durationSeconds: a,
    playedSeconds: i,
    percentComplete: s,
    error: c
  } = se(e), l = o ? `(${N0(o)})` : null, f = n === "decoding";
  return /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(
    y0,
    {
      className: wn.audioPlayer,
      tabIndex: 0,
      onKeyDown: e.onKeyDown,
      "aria-label": t("timeline|m.audio|audio_player"),
      role: "region"
    },
    /* @__PURE__ */ p.createElement(Z, { gap: "var(--cpd-space-2x)", align: "center" }, /* @__PURE__ */ p.createElement(
      M0,
      {
        tabIndex: -1,
        disabled: f,
        playing: n === "playing",
        togglePlay: e.togglePlay
      }
    ), /* @__PURE__ */ p.createElement(Z, { direction: "column", className: wn.mediaInfo }, /* @__PURE__ */ p.createElement("span", { className: wn.mediaName, "data-testid": "audio-player-name" }, r), /* @__PURE__ */ p.createElement(Z, { className: wn.byline, gap: "var(--cpd-space-1-5x)" }, /* @__PURE__ */ p.createElement(Fl, { seconds: a }), l))),
    /* @__PURE__ */ p.createElement(Z, { align: "center", gap: "var(--cpd-space-1x)", "data-testid": "audio-player-seek" }, /* @__PURE__ */ p.createElement(s3, { tabIndex: -1, disabled: f, value: s, onChange: e.onSeekbarChange }), /* @__PURE__ */ p.createElement(Fl, { className: wn.clock, seconds: i, role: "timer" }))
  ), c && /* @__PURE__ */ p.createElement("span", { className: wn.error }, t("timeline|m.audio|error_downloading_audio")));
}
const c3 = "_avatarWithDetails_7ga8t_8", l3 = "_title_7ga8t_17", u3 = "_details_7ga8t_28", Ta = {
  avatarWithDetails: c3,
  title: l3,
  details: u3
};
function m4({
  as: e,
  className: t,
  details: n,
  avatar: r,
  title: o,
  ...a
}) {
  const i = e || "div";
  return /* @__PURE__ */ p.createElement(i, { className: re(Ta.avatarWithDetails, t), ...a }, r, /* @__PURE__ */ p.createElement(Z, { direction: "column" }, /* @__PURE__ */ p.createElement("span", { className: Ta.title }, o), /* @__PURE__ */ p.createElement("span", { className: Ta.details }, n)));
}
function zp(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "m10.6 13.8-2.15-2.15a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"
    })
  });
}
zp.displayName = "CheckCircleIcon";
const f3 = (0,react.forwardRef)(zp);
function Fp(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20"
    })
  });
}
Fp.displayName = "ErrorIcon";
const d3 = (0,react.forwardRef)(Fp);
function Lp(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M11.288 7.288A.97.97 0 0 1 12 7q.424 0 .713.287Q13 7.576 13 8t-.287.713A.97.97 0 0 1 12 9a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 8q0-.424.287-.713m.001 4.001A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713v4q0 .424-.287.712A.97.97 0 0 1 12 17a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 16v-4q0-.424.287-.713"
    }), /* @__PURE__ */ P.jsx("path", {
      fillRule: "evenodd",
      d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0",
      clipRule: "evenodd"
    })]
  });
}
Lp.displayName = "InfoIcon";
const gu = (0,react.forwardRef)(Lp), p3 = "_banner_193k4_8", m3 = "_content_193k4_38", h3 = "_icon_193k4_50", g3 = "_actions_193k4_60", Xr = {
  banner: p3,
  content: m3,
  icon: h3,
  actions: g3
};
function y3(e) {
  return e.toLowerCase().replace("_", "-");
}
function qp(e) {
  const t = [], n = y3(e), r = n.split("-");
  return r.length === 2 && r[0] === r[1] ? t.push(r[0]) : (t.push(n), r.length === 2 && t.push(r[0])), t;
}
const v3 = "|";
var ka, yu;
function b3() {
  if (yu) return ka;
  yu = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, o = function(l) {
    return typeof Array.isArray == "function" ? Array.isArray(l) : t.call(l) === "[object Array]";
  }, a = function(l) {
    if (!l || t.call(l) !== "[object Object]")
      return !1;
    var f = e.call(l, "constructor"), d = l.constructor && l.constructor.prototype && e.call(l.constructor.prototype, "isPrototypeOf");
    if (l.constructor && !f && !d)
      return !1;
    var u;
    for (u in l)
      ;
    return typeof u > "u" || e.call(l, u);
  }, i = function(l, f) {
    n && f.name === "__proto__" ? n(l, f.name, {
      enumerable: !0,
      configurable: !0,
      value: f.newValue,
      writable: !0
    }) : l[f.name] = f.newValue;
  }, s = function(l, f) {
    if (f === "__proto__")
      if (e.call(l, f)) {
        if (r)
          return r(l, f).value;
      } else return;
    return l[f];
  };
  return ka = function c() {
    var l, f, d, u, v, m, w = arguments[0], E = 1, h = arguments.length, y = !1;
    for (typeof w == "boolean" && (y = w, w = arguments[1] || {}, E = 2), (w == null || typeof w != "object" && typeof w != "function") && (w = {}); E < h; ++E)
      if (l = arguments[E], l != null)
        for (f in l)
          d = s(w, f), u = s(l, f), w !== u && (y && u && (a(u) || (v = o(u))) ? (v ? (v = !1, m = d && o(d) ? d : []) : m = d && a(d) ? d : {}, i(w, { name: f, newValue: c(y, m, u) })) : typeof u < "u" && i(w, { name: f, newValue: u }));
    return w;
  }, ka;
}
var Ra = {}, Ia = {}, ja, vu;
function $p() {
  return vu || (vu = 1, ja = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}, n = /* @__PURE__ */ Symbol("test"), r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var o = 42;
    t[n] = o;
    for (var a in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (i.length !== 1 || i[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (s.value !== o || s.enumerable !== !0)
        return !1;
    }
    return !0;
  }), ja;
}
var Oa, bu;
function ca() {
  if (bu) return Oa;
  bu = 1;
  var e = $p();
  return Oa = function() {
    return e() && !!Symbol.toStringTag;
  }, Oa;
}
var Pa, _u;
function Hp() {
  return _u || (_u = 1, Pa = Object), Pa;
}
var Ca, wu;
function _3() {
  return wu || (wu = 1, Ca = Error), Ca;
}
var Ma, Eu;
function w3() {
  return Eu || (Eu = 1, Ma = EvalError), Ma;
}
var Na, Au;
function E3() {
  return Au || (Au = 1, Na = RangeError), Na;
}
var xa, Su;
function A3() {
  return Su || (Su = 1, xa = ReferenceError), xa;
}
var Ba, Tu;
function Up() {
  return Tu || (Tu = 1, Ba = SyntaxError), Ba;
}
var Da, ku;
function qr() {
  return ku || (ku = 1, Da = TypeError), Da;
}
var za, Ru;
function S3() {
  return Ru || (Ru = 1, za = URIError), za;
}
var Fa, Iu;
function T3() {
  return Iu || (Iu = 1, Fa = Math.abs), Fa;
}
var La, ju;
function k3() {
  return ju || (ju = 1, La = Math.floor), La;
}
var qa, Ou;
function R3() {
  return Ou || (Ou = 1, qa = Math.max), qa;
}
var $a, Pu;
function I3() {
  return Pu || (Pu = 1, $a = Math.min), $a;
}
var Ha, Cu;
function j3() {
  return Cu || (Cu = 1, Ha = Math.pow), Ha;
}
var Ua, Mu;
function O3() {
  return Mu || (Mu = 1, Ua = Math.round), Ua;
}
var Ka, Nu;
function P3() {
  return Nu || (Nu = 1, Ka = Number.isNaN || function(t) {
    return t !== t;
  }), Ka;
}
var Va, xu;
function C3() {
  if (xu) return Va;
  xu = 1;
  var e = /* @__PURE__ */ P3();
  return Va = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Va;
}
var Ga, Bu;
function M3() {
  return Bu || (Bu = 1, Ga = Object.getOwnPropertyDescriptor), Ga;
}
var Ya, Du;
function Jn() {
  if (Du) return Ya;
  Du = 1;
  var e = /* @__PURE__ */ M3();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ya = e, Ya;
}
var Wa, zu;
function la() {
  if (zu) return Wa;
  zu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Wa = e, Wa;
}
var Za, Fu;
function N3() {
  if (Fu) return Za;
  Fu = 1;
  var e = typeof Symbol < "u" && Symbol, t = $p();
  return Za = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof /* @__PURE__ */ Symbol("bar") != "symbol" ? !1 : t();
  }, Za;
}
var Ja, Lu;
function Kp() {
  return Lu || (Lu = 1, Ja = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ja;
}
var Qa, qu;
function Vp() {
  if (qu) return Qa;
  qu = 1;
  var e = /* @__PURE__ */ Hp();
  return Qa = e.getPrototypeOf || null, Qa;
}
var Xa, $u;
function x3() {
  if ($u) return Xa;
  $u = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, l) {
    for (var f = [], d = 0; d < c.length; d += 1)
      f[d] = c[d];
    for (var u = 0; u < l.length; u += 1)
      f[u + c.length] = l[u];
    return f;
  }, a = function(c, l) {
    for (var f = [], d = l, u = 0; d < c.length; d += 1, u += 1)
      f[u] = c[d];
    return f;
  }, i = function(s, c) {
    for (var l = "", f = 0; f < s.length; f += 1)
      l += s[f], f + 1 < s.length && (l += c);
    return l;
  };
  return Xa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var f = a(arguments, 1), d, u = function() {
      if (this instanceof d) {
        var h = l.apply(
          this,
          o(f, arguments)
        );
        return Object(h) === h ? h : this;
      }
      return l.apply(
        c,
        o(f, arguments)
      );
    }, v = n(0, l.length - f.length), m = [], w = 0; w < v; w++)
      m[w] = "$" + w;
    if (d = Function("binder", "return function (" + i(m, ",") + "){ return binder.apply(this,arguments); }")(u), l.prototype) {
      var E = function() {
      };
      E.prototype = l.prototype, d.prototype = new E(), E.prototype = null;
    }
    return d;
  }, Xa;
}
var ei, Hu;
function $r() {
  if (Hu) return ei;
  Hu = 1;
  var e = x3();
  return ei = Function.prototype.bind || e, ei;
}
var ti, Uu;
function $c() {
  return Uu || (Uu = 1, ti = Function.prototype.call), ti;
}
var ni, Ku;
function Hc() {
  return Ku || (Ku = 1, ni = Function.prototype.apply), ni;
}
var ri, Vu;
function B3() {
  return Vu || (Vu = 1, ri = typeof Reflect < "u" && Reflect && Reflect.apply), ri;
}
var oi, Gu;
function Gp() {
  if (Gu) return oi;
  Gu = 1;
  var e = $r(), t = Hc(), n = $c(), r = B3();
  return oi = r || e.call(n, t), oi;
}
var ai, Yu;
function Uc() {
  if (Yu) return ai;
  Yu = 1;
  var e = $r(), t = /* @__PURE__ */ qr(), n = $c(), r = Gp();
  return ai = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, ai;
}
var ii, Wu;
function D3() {
  if (Wu) return ii;
  Wu = 1;
  var e = Uc(), t = /* @__PURE__ */ Jn(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (i) {
    if (!i || typeof i != "object" || !("code" in i) || i.code !== "ERR_PROTO_ACCESS")
      throw i;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return ii = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(s) {
      return a(s == null ? s : o(s));
    }
  ) : !1, ii;
}
var si, Zu;
function Kc() {
  if (Zu) return si;
  Zu = 1;
  var e = Kp(), t = Vp(), n = /* @__PURE__ */ D3();
  return si = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, si;
}
var ci, Ju;
function Yp() {
  if (Ju) return ci;
  Ju = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = $r();
  return ci = n.call(e, t), ci;
}
var li, Qu;
function Wp() {
  if (Qu) return li;
  Qu = 1;
  var e, t = /* @__PURE__ */ Hp(), n = /* @__PURE__ */ _3(), r = /* @__PURE__ */ w3(), o = /* @__PURE__ */ E3(), a = /* @__PURE__ */ A3(), i = /* @__PURE__ */ Up(), s = /* @__PURE__ */ qr(), c = /* @__PURE__ */ S3(), l = /* @__PURE__ */ T3(), f = /* @__PURE__ */ k3(), d = /* @__PURE__ */ R3(), u = /* @__PURE__ */ I3(), v = /* @__PURE__ */ j3(), m = /* @__PURE__ */ O3(), w = /* @__PURE__ */ C3(), E = Function, h = function(F) {
    try {
      return E('"use strict"; return (' + F + ").constructor;")();
    } catch {
    }
  }, y = /* @__PURE__ */ Jn(), S = /* @__PURE__ */ la(), g = function() {
    throw new s();
  }, b = y ? (function() {
    try {
      return arguments.callee, g;
    } catch {
      try {
        return y(arguments, "callee").get;
      } catch {
        return g;
      }
    }
  })() : g, A = N3()(), k = Kc(), O = Vp(), C = Kp(), N = Hc(), q = $c(), G = {}, ce = typeof Uint8Array > "u" || !k ? e : k(Uint8Array), x = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": A && k ? k([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": G,
    "%AsyncGenerator%": G,
    "%AsyncGeneratorFunction%": G,
    "%AsyncIteratorPrototype%": G,
    "%Atomics%": typeof Atomics > "u" ? e : Atomics,
    "%BigInt%": typeof BigInt > "u" ? e : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? e : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": r,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": E,
    "%GeneratorFunction%": G,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": A && k ? k(k([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !A || !k ? e : k((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": y,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !A || !k ? e : k((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": A && k ? k(""[Symbol.iterator]()) : e,
    "%Symbol%": A ? Symbol : e,
    "%SyntaxError%": i,
    "%ThrowTypeError%": b,
    "%TypedArray%": ce,
    "%TypeError%": s,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": q,
    "%Function.prototype.apply%": N,
    "%Object.defineProperty%": S,
    "%Object.getPrototypeOf%": O,
    "%Math.abs%": l,
    "%Math.floor%": f,
    "%Math.max%": d,
    "%Math.min%": u,
    "%Math.pow%": v,
    "%Math.round%": m,
    "%Math.sign%": w,
    "%Reflect.getPrototypeOf%": C
  };
  if (k)
    try {
      null.error;
    } catch (F) {
      var K = k(k(F));
      x["%Error.prototype%"] = K;
    }
  var Y = function F(B) {
    var W;
    if (B === "%AsyncFunction%")
      W = h("async function () {}");
    else if (B === "%GeneratorFunction%")
      W = h("function* () {}");
    else if (B === "%AsyncGeneratorFunction%")
      W = h("async function* () {}");
    else if (B === "%AsyncGenerator%") {
      var J = F("%AsyncGeneratorFunction%");
      J && (W = J.prototype);
    } else if (B === "%AsyncIteratorPrototype%") {
      var fe = F("%AsyncGenerator%");
      fe && k && (W = k(fe.prototype));
    }
    return x[B] = W, W;
  }, le = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  }, pe = $r(), ie = /* @__PURE__ */ Yp(), Ve = pe.call(q, Array.prototype.concat), I = pe.call(N, Array.prototype.splice), _ = pe.call(q, String.prototype.replace), T = pe.call(q, String.prototype.slice), R = pe.call(q, RegExp.prototype.exec), z = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, U = /\\(\\)?/g, D = function(B) {
    var W = T(B, 0, 1), J = T(B, -1);
    if (W === "%" && J !== "%")
      throw new i("invalid intrinsic syntax, expected closing `%`");
    if (J === "%" && W !== "%")
      throw new i("invalid intrinsic syntax, expected opening `%`");
    var fe = [];
    return _(B, z, function(ye, Ge, ve, _n) {
      fe[fe.length] = ve ? _(_n, U, "$1") : Ge || ye;
    }), fe;
  }, L = function(B, W) {
    var J = B, fe;
    if (ie(le, J) && (fe = le[J], J = "%" + fe[0] + "%"), ie(x, J)) {
      var ye = x[J];
      if (ye === G && (ye = Y(J)), typeof ye > "u" && !W)
        throw new s("intrinsic " + B + " exists, but is not available. Please file an issue!");
      return {
        alias: fe,
        name: J,
        value: ye
      };
    }
    throw new i("intrinsic " + B + " does not exist!");
  };
  return li = function(B, W) {
    if (typeof B != "string" || B.length === 0)
      throw new s("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof W != "boolean")
      throw new s('"allowMissing" argument must be a boolean');
    if (R(/^%?[^%]*%?$/, B) === null)
      throw new i("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var J = D(B), fe = J.length > 0 ? J[0] : "", ye = L("%" + fe + "%", W), Ge = ye.name, ve = ye.value, _n = !1, Qn = ye.alias;
    Qn && (fe = Qn[0], I(J, Ve([0, 1], Qn)));
    for (var j = 1, nn = !0; j < J.length; j += 1) {
      var ot = J[j], Ur = T(ot, 0, 1), Kr = T(ot, -1);
      if ((Ur === '"' || Ur === "'" || Ur === "`" || Kr === '"' || Kr === "'" || Kr === "`") && Ur !== Kr)
        throw new i("property names with quotes must have matching quotes");
      if ((ot === "constructor" || !nn) && (_n = !0), fe += "." + ot, Ge = "%" + fe + "%", ie(x, Ge))
        ve = x[Ge];
      else if (ve != null) {
        if (!(ot in ve)) {
          if (!W)
            throw new s("base intrinsic for " + B + " exists, but the property is not available.");
          return;
        }
        if (y && j + 1 >= J.length) {
          var Vr = y(ve, ot);
          nn = !!Vr, nn && "get" in Vr && !("originalValue" in Vr.get) ? ve = Vr.get : ve = ve[ot];
        } else
          nn = ie(ve, ot), ve = ve[ot];
        nn && !_n && (x[Ge] = ve);
      }
    }
    return ve;
  }, li;
}
var ui, Xu;
function Hr() {
  if (Xu) return ui;
  Xu = 1;
  var e = /* @__PURE__ */ Wp(), t = Uc(), n = t([e("%String.prototype.indexOf%")]);
  return ui = function(o, a) {
    var i = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof i == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [i]
    ) : i;
  }, ui;
}
var fi, ef;
function z3() {
  if (ef) return fi;
  ef = 1;
  var e = ca()(), t = /* @__PURE__ */ Hr(), n = t("Object.prototype.toString"), r = function(s) {
    return e && s && typeof s == "object" && Symbol.toStringTag in s ? !1 : n(s) === "[object Arguments]";
  }, o = function(s) {
    return r(s) ? !0 : s !== null && typeof s == "object" && "length" in s && typeof s.length == "number" && s.length >= 0 && n(s) !== "[object Array]" && "callee" in s && n(s.callee) === "[object Function]";
  }, a = (function() {
    return r(arguments);
  })();
  return r.isLegacyArguments = o, fi = a ? r : o, fi;
}
var di, tf;
function F3() {
  if (tf) return di;
  tf = 1;
  var e = /* @__PURE__ */ Hr(), t = ca()(), n = /* @__PURE__ */ Yp(), r = /* @__PURE__ */ Jn(), o;
  if (t) {
    var a = e("RegExp.prototype.exec"), i = {}, s = function() {
      throw i;
    }, c = {
      toString: s,
      valueOf: s
    };
    typeof Symbol.toPrimitive == "symbol" && (c[Symbol.toPrimitive] = s), o = function(u) {
      if (!u || typeof u != "object")
        return !1;
      var v = (
        /** @type {NonNullable<typeof gOPD>} */
        r(
          /** @type {{ lastIndex?: unknown }} */
          u,
          "lastIndex"
        )
      ), m = v && n(v, "value");
      if (!m)
        return !1;
      try {
        a(
          u,
          /** @type {string} */
          /** @type {unknown} */
          c
        );
      } catch (w) {
        return w === i;
      }
    };
  } else {
    var l = e("Object.prototype.toString"), f = "[object RegExp]";
    o = function(u) {
      return !u || typeof u != "object" && typeof u != "function" ? !1 : l(u) === f;
    };
  }
  return di = o, di;
}
var pi, nf;
function L3() {
  if (nf) return pi;
  nf = 1;
  var e = /* @__PURE__ */ Hr(), t = F3(), n = e("RegExp.prototype.exec"), r = /* @__PURE__ */ qr();
  return pi = function(a) {
    if (!t(a))
      throw new r("`regex` must be a RegExp");
    return function(s) {
      return n(a, s) !== null;
    };
  }, pi;
}
var mi, rf;
function q3() {
  if (rf) return mi;
  rf = 1;
  const e = (
    /** @type {GeneratorFunctionConstructor} */
    (function* () {
    }).constructor
  );
  return mi = () => e, mi;
}
var hi, of;
function $3() {
  if (of) return hi;
  of = 1;
  var e = /* @__PURE__ */ Hr(), t = /* @__PURE__ */ L3(), n = t(/^\s*(?:function)?\*/), r = ca()(), o = Kc(), a = e("Object.prototype.toString"), i = e("Function.prototype.toString"), s = /* @__PURE__ */ q3();
  return hi = function(l) {
    if (typeof l != "function")
      return !1;
    if (n(i(l)))
      return !0;
    if (!r) {
      var f = a(l);
      return f === "[object GeneratorFunction]";
    }
    if (!o)
      return !1;
    var d = s();
    return d && o(l) === d.prototype;
  }, hi;
}
var gi, af;
function H3() {
  if (af) return gi;
  af = 1;
  var e = Function.prototype.toString, t = typeof Reflect == "object" && Reflect !== null && Reflect.apply, n, r;
  if (typeof t == "function" && typeof Object.defineProperty == "function")
    try {
      n = Object.defineProperty({}, "length", {
        get: function() {
          throw r;
        }
      }), r = {}, t(function() {
        throw 42;
      }, null, n);
    } catch (y) {
      y !== r && (t = null);
    }
  else
    t = null;
  var o = /^\s*class\b/, a = function(S) {
    try {
      var g = e.call(S);
      return o.test(g);
    } catch {
      return !1;
    }
  }, i = function(S) {
    try {
      return a(S) ? !1 : (e.call(S), !0);
    } catch {
      return !1;
    }
  }, s = Object.prototype.toString, c = "[object Object]", l = "[object Function]", f = "[object GeneratorFunction]", d = "[object HTMLAllCollection]", u = "[object HTML document.all class]", v = "[object HTMLCollection]", m = typeof Symbol == "function" && !!Symbol.toStringTag, w = !(0 in [,]), E = function() {
    return !1;
  };
  if (typeof document == "object") {
    var h = document.all;
    s.call(h) === s.call(document.all) && (E = function(S) {
      if ((w || !S) && (typeof S > "u" || typeof S == "object"))
        try {
          var g = s.call(S);
          return (g === d || g === u || g === v || g === c) && S("") == null;
        } catch {
        }
      return !1;
    });
  }
  return gi = t ? function(S) {
    if (E(S))
      return !0;
    if (!S || typeof S != "function" && typeof S != "object")
      return !1;
    try {
      t(S, null, n);
    } catch (g) {
      if (g !== r)
        return !1;
    }
    return !a(S) && i(S);
  } : function(S) {
    if (E(S))
      return !0;
    if (!S || typeof S != "function" && typeof S != "object")
      return !1;
    if (m)
      return i(S);
    if (a(S))
      return !1;
    var g = s.call(S);
    return g !== l && g !== f && !/^\[object HTML/.test(g) ? !1 : i(S);
  }, gi;
}
var yi, sf;
function U3() {
  if (sf) return yi;
  sf = 1;
  var e = H3(), t = Object.prototype.toString, n = Object.prototype.hasOwnProperty, r = function(c, l, f) {
    for (var d = 0, u = c.length; d < u; d++)
      n.call(c, d) && (f == null ? l(c[d], d, c) : l.call(f, c[d], d, c));
  }, o = function(c, l, f) {
    for (var d = 0, u = c.length; d < u; d++)
      f == null ? l(c.charAt(d), d, c) : l.call(f, c.charAt(d), d, c);
  }, a = function(c, l, f) {
    for (var d in c)
      n.call(c, d) && (f == null ? l(c[d], d, c) : l.call(f, c[d], d, c));
  };
  function i(s) {
    return t.call(s) === "[object Array]";
  }
  return yi = function(c, l, f) {
    if (!e(l))
      throw new TypeError("iterator must be a function");
    var d;
    arguments.length >= 3 && (d = f), i(c) ? r(c, l, d) : typeof c == "string" ? o(c, l, d) : a(c, l, d);
  }, yi;
}
var vi, cf;
function K3() {
  return cf || (cf = 1, vi = [
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
  ]), vi;
}
var bi, lf;
function V3() {
  if (lf) return bi;
  lf = 1;
  var e = /* @__PURE__ */ K3(), t = typeof globalThis > "u" ? Wf : globalThis;
  return bi = function() {
    for (var r = [], o = 0; o < e.length; o++)
      typeof t[e[o]] == "function" && (r[r.length] = e[o]);
    return r;
  }, bi;
}
var _i = { exports: {} }, wi, uf;
function G3() {
  if (uf) return wi;
  uf = 1;
  var e = /* @__PURE__ */ la(), t = /* @__PURE__ */ Up(), n = /* @__PURE__ */ qr(), r = /* @__PURE__ */ Jn();
  return wi = function(a, i, s) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new n("`obj` must be an object or a function`");
    if (typeof i != "string" && typeof i != "symbol")
      throw new n("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
      throw new n("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
      throw new n("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
      throw new n("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
      throw new n("`loose`, if provided, must be a boolean");
    var c = arguments.length > 3 ? arguments[3] : null, l = arguments.length > 4 ? arguments[4] : null, f = arguments.length > 5 ? arguments[5] : null, d = arguments.length > 6 ? arguments[6] : !1, u = !!r && r(a, i);
    if (e)
      e(a, i, {
        configurable: f === null && u ? u.configurable : !f,
        enumerable: c === null && u ? u.enumerable : !c,
        value: s,
        writable: l === null && u ? u.writable : !l
      });
    else if (d || !c && !l && !f)
      a[i] = s;
    else
      throw new t("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, wi;
}
var Ei, ff;
function Y3() {
  if (ff) return Ei;
  ff = 1;
  var e = /* @__PURE__ */ la(), t = function() {
    return !!e;
  };
  return t.hasArrayLengthDefineBug = function() {
    if (!e)
      return null;
    try {
      return e([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, Ei = t, Ei;
}
var Ai, df;
function W3() {
  if (df) return Ai;
  df = 1;
  var e = /* @__PURE__ */ Wp(), t = /* @__PURE__ */ G3(), n = /* @__PURE__ */ Y3()(), r = /* @__PURE__ */ Jn(), o = /* @__PURE__ */ qr(), a = e("%Math.floor%");
  return Ai = function(s, c) {
    if (typeof s != "function")
      throw new o("`fn` is not a function");
    if (typeof c != "number" || c < 0 || c > 4294967295 || a(c) !== c)
      throw new o("`length` must be a positive 32-bit integer");
    var l = arguments.length > 2 && !!arguments[2], f = !0, d = !0;
    if ("length" in s && r) {
      var u = r(s, "length");
      u && !u.configurable && (f = !1), u && !u.writable && (d = !1);
    }
    return (f || d || !l) && (n ? t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c,
      !0,
      !0
    ) : t(
      /** @type {Parameters<define>[0]} */
      s,
      "length",
      c
    )), s;
  }, Ai;
}
var Si, pf;
function Z3() {
  if (pf) return Si;
  pf = 1;
  var e = $r(), t = Hc(), n = Gp();
  return Si = function() {
    return n(e, t, arguments);
  }, Si;
}
var mf;
function J3() {
  return mf || (mf = 1, (function(e) {
    var t = /* @__PURE__ */ W3(), n = /* @__PURE__ */ la(), r = Uc(), o = Z3();
    e.exports = function(i) {
      var s = r(arguments), c = i.length - (arguments.length - 1);
      return t(
        s,
        1 + (c > 0 ? c : 0),
        !0
      );
    }, n ? n(e.exports, "apply", { value: o }) : e.exports.apply = o;
  })(_i)), _i.exports;
}
var Ti, hf;
function Zp() {
  if (hf) return Ti;
  hf = 1;
  var e = U3(), t = /* @__PURE__ */ V3(), n = J3(), r = /* @__PURE__ */ Hr(), o = /* @__PURE__ */ Jn(), a = Kc(), i = r("Object.prototype.toString"), s = ca()(), c = typeof globalThis > "u" ? Wf : globalThis, l = t(), f = r("String.prototype.slice"), d = r("Array.prototype.indexOf", !0) || function(E, h) {
    for (var y = 0; y < E.length; y += 1)
      if (E[y] === h)
        return y;
    return -1;
  }, u = { __proto__: null };
  s && o && a ? e(l, function(w) {
    var E = new c[w]();
    if (Symbol.toStringTag in E && a) {
      var h = a(E), y = o(h, Symbol.toStringTag);
      if (!y && h) {
        var S = a(h);
        y = o(S, Symbol.toStringTag);
      }
      if (y && y.get) {
        var g = n(y.get);
        u[
          /** @type {`$${import('.').TypedArrayName}`} */
          "$" + w
        ] = g;
      }
    }
  }) : e(l, function(w) {
    var E = new c[w](), h = E.slice || E.set;
    if (h) {
      var y = (
        /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
        // @ts-expect-error TODO FIXME
        n(h)
      );
      u[
        /** @type {`$${import('.').TypedArrayName}`} */
        "$" + w
      ] = y;
    }
  });
  var v = function(E) {
    var h = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      u,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(y, S) {
        if (!h)
          try {
            "$" + y(E) === S && (h = /** @type {import('.').TypedArrayName} */
            f(S, 1));
          } catch {
          }
      }
    ), h;
  }, m = function(E) {
    var h = !1;
    return e(
      /** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */
      u,
      /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
      function(y, S) {
        if (!h)
          try {
            y(E), h = /** @type {import('.').TypedArrayName} */
            f(S, 1);
          } catch {
          }
      }
    ), h;
  };
  return Ti = function(E) {
    if (!E || typeof E != "object")
      return !1;
    if (!s) {
      var h = f(i(E), 8, -1);
      return d(l, h) > -1 ? h : h !== "Object" ? !1 : m(E);
    }
    return o ? v(E) : null;
  }, Ti;
}
var ki, gf;
function Q3() {
  if (gf) return ki;
  gf = 1;
  var e = /* @__PURE__ */ Zp();
  return ki = function(n) {
    return !!e(n);
  }, ki;
}
var yf;
function X3() {
  return yf || (yf = 1, (function(e) {
    var t = /* @__PURE__ */ z3(), n = $3(), r = /* @__PURE__ */ Zp(), o = /* @__PURE__ */ Q3();
    function a(j) {
      return j.call.bind(j);
    }
    var i = typeof BigInt < "u", s = typeof Symbol < "u", c = a(Object.prototype.toString), l = a(Number.prototype.valueOf), f = a(String.prototype.valueOf), d = a(Boolean.prototype.valueOf);
    if (i)
      var u = a(BigInt.prototype.valueOf);
    if (s)
      var v = a(Symbol.prototype.valueOf);
    function m(j, nn) {
      if (typeof j != "object")
        return !1;
      try {
        return nn(j), !0;
      } catch {
        return !1;
      }
    }
    e.isArgumentsObject = t, e.isGeneratorFunction = n, e.isTypedArray = o;
    function w(j) {
      return typeof Promise < "u" && j instanceof Promise || j !== null && typeof j == "object" && typeof j.then == "function" && typeof j.catch == "function";
    }
    e.isPromise = w;
    function E(j) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(j) : o(j) || T(j);
    }
    e.isArrayBufferView = E;
    function h(j) {
      return r(j) === "Uint8Array";
    }
    e.isUint8Array = h;
    function y(j) {
      return r(j) === "Uint8ClampedArray";
    }
    e.isUint8ClampedArray = y;
    function S(j) {
      return r(j) === "Uint16Array";
    }
    e.isUint16Array = S;
    function g(j) {
      return r(j) === "Uint32Array";
    }
    e.isUint32Array = g;
    function b(j) {
      return r(j) === "Int8Array";
    }
    e.isInt8Array = b;
    function A(j) {
      return r(j) === "Int16Array";
    }
    e.isInt16Array = A;
    function k(j) {
      return r(j) === "Int32Array";
    }
    e.isInt32Array = k;
    function O(j) {
      return r(j) === "Float32Array";
    }
    e.isFloat32Array = O;
    function C(j) {
      return r(j) === "Float64Array";
    }
    e.isFloat64Array = C;
    function N(j) {
      return r(j) === "BigInt64Array";
    }
    e.isBigInt64Array = N;
    function q(j) {
      return r(j) === "BigUint64Array";
    }
    e.isBigUint64Array = q;
    function G(j) {
      return c(j) === "[object Map]";
    }
    G.working = typeof Map < "u" && G(/* @__PURE__ */ new Map());
    function ce(j) {
      return typeof Map > "u" ? !1 : G.working ? G(j) : j instanceof Map;
    }
    e.isMap = ce;
    function x(j) {
      return c(j) === "[object Set]";
    }
    x.working = typeof Set < "u" && x(/* @__PURE__ */ new Set());
    function K(j) {
      return typeof Set > "u" ? !1 : x.working ? x(j) : j instanceof Set;
    }
    e.isSet = K;
    function Y(j) {
      return c(j) === "[object WeakMap]";
    }
    Y.working = typeof WeakMap < "u" && Y(/* @__PURE__ */ new WeakMap());
    function le(j) {
      return typeof WeakMap > "u" ? !1 : Y.working ? Y(j) : j instanceof WeakMap;
    }
    e.isWeakMap = le;
    function pe(j) {
      return c(j) === "[object WeakSet]";
    }
    pe.working = typeof WeakSet < "u" && pe(/* @__PURE__ */ new WeakSet());
    function ie(j) {
      return pe(j);
    }
    e.isWeakSet = ie;
    function Ve(j) {
      return c(j) === "[object ArrayBuffer]";
    }
    Ve.working = typeof ArrayBuffer < "u" && Ve(new ArrayBuffer());
    function I(j) {
      return typeof ArrayBuffer > "u" ? !1 : Ve.working ? Ve(j) : j instanceof ArrayBuffer;
    }
    e.isArrayBuffer = I;
    function _(j) {
      return c(j) === "[object DataView]";
    }
    _.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && _(new DataView(new ArrayBuffer(1), 0, 1));
    function T(j) {
      return typeof DataView > "u" ? !1 : _.working ? _(j) : j instanceof DataView;
    }
    e.isDataView = T;
    var R = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
    function z(j) {
      return c(j) === "[object SharedArrayBuffer]";
    }
    function U(j) {
      return typeof R > "u" ? !1 : (typeof z.working > "u" && (z.working = z(new R())), z.working ? z(j) : j instanceof R);
    }
    e.isSharedArrayBuffer = U;
    function D(j) {
      return c(j) === "[object AsyncFunction]";
    }
    e.isAsyncFunction = D;
    function L(j) {
      return c(j) === "[object Map Iterator]";
    }
    e.isMapIterator = L;
    function F(j) {
      return c(j) === "[object Set Iterator]";
    }
    e.isSetIterator = F;
    function B(j) {
      return c(j) === "[object Generator]";
    }
    e.isGeneratorObject = B;
    function W(j) {
      return c(j) === "[object WebAssembly.Module]";
    }
    e.isWebAssemblyCompiledModule = W;
    function J(j) {
      return m(j, l);
    }
    e.isNumberObject = J;
    function fe(j) {
      return m(j, f);
    }
    e.isStringObject = fe;
    function ye(j) {
      return m(j, d);
    }
    e.isBooleanObject = ye;
    function Ge(j) {
      return i && m(j, u);
    }
    e.isBigIntObject = Ge;
    function ve(j) {
      return s && m(j, v);
    }
    e.isSymbolObject = ve;
    function _n(j) {
      return J(j) || fe(j) || ye(j) || Ge(j) || ve(j);
    }
    e.isBoxedPrimitive = _n;
    function Qn(j) {
      return typeof Uint8Array < "u" && (I(j) || U(j));
    }
    e.isAnyArrayBuffer = Qn, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(j) {
      Object.defineProperty(e, j, {
        enumerable: !1,
        value: function() {
          throw new Error(j + " is not supported in userland");
        }
      });
    });
  })(Ia)), Ia;
}
var Ri, vf;
function e8() {
  return vf || (vf = 1, Ri = function(t) {
    return t && typeof t == "object" && typeof t.copy == "function" && typeof t.fill == "function" && typeof t.readUInt8 == "function";
  }), Ri;
}
var eo = { exports: {} }, bf;
function t8() {
  return bf || (bf = 1, typeof Object.create == "function" ? eo.exports = function(t, n) {
    n && (t.super_ = n, t.prototype = Object.create(n.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : eo.exports = function(t, n) {
    if (n) {
      t.super_ = n;
      var r = function() {
      };
      r.prototype = n.prototype, t.prototype = new r(), t.prototype.constructor = t;
    }
  }), eo.exports;
}
var _f;
function wf() {
  return _f || (_f = 1, (function(e) {
    var t = Object.getOwnPropertyDescriptors || function(T) {
      for (var R = Object.keys(T), z = {}, U = 0; U < R.length; U++)
        z[R[U]] = Object.getOwnPropertyDescriptor(T, R[U]);
      return z;
    }, n = /%[sdj%]/g;
    e.format = function(_) {
      if (!b(_)) {
        for (var T = [], R = 0; R < arguments.length; R++)
          T.push(i(arguments[R]));
        return T.join(" ");
      }
      for (var R = 1, z = arguments, U = z.length, D = String(_).replace(n, function(F) {
        if (F === "%%") return "%";
        if (R >= U) return F;
        switch (F) {
          case "%s":
            return String(z[R++]);
          case "%d":
            return Number(z[R++]);
          case "%j":
            try {
              return JSON.stringify(z[R++]);
            } catch {
              return "[Circular]";
            }
          default:
            return F;
        }
      }), L = z[R]; R < U; L = z[++R])
        y(L) || !C(L) ? D += " " + L : D += " " + i(L);
      return D;
    }, e.deprecate = function(_, T) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return _;
      if (typeof process > "u")
        return function() {
          return e.deprecate(_, T).apply(this, arguments);
        };
      var R = !1;
      function z() {
        if (!R) {
          if (process.throwDeprecation)
            throw new Error(T);
          process.traceDeprecation ? console.trace(T) : console.error(T), R = !0;
        }
        return _.apply(this, arguments);
      }
      return z;
    };
    var r = {}, o = /^$/;
    if (process.env.NODE_DEBUG) {
      var a = process.env.NODE_DEBUG;
      a = a.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), o = new RegExp("^" + a + "$", "i");
    }
    e.debuglog = function(_) {
      if (_ = _.toUpperCase(), !r[_])
        if (o.test(_)) {
          var T = process.pid;
          r[_] = function() {
            var R = e.format.apply(e, arguments);
            console.error("%s %d: %s", _, T, R);
          };
        } else
          r[_] = function() {
          };
      return r[_];
    };
    function i(_, T) {
      var R = {
        seen: [],
        stylize: c
      };
      return arguments.length >= 3 && (R.depth = arguments[2]), arguments.length >= 4 && (R.colors = arguments[3]), h(T) ? R.showHidden = T : T && e._extend(R, T), k(R.showHidden) && (R.showHidden = !1), k(R.depth) && (R.depth = 2), k(R.colors) && (R.colors = !1), k(R.customInspect) && (R.customInspect = !0), R.colors && (R.stylize = s), f(R, _, R.depth);
    }
    e.inspect = i, i.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, i.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function s(_, T) {
      var R = i.styles[T];
      return R ? "\x1B[" + i.colors[R][0] + "m" + _ + "\x1B[" + i.colors[R][1] + "m" : _;
    }
    function c(_, T) {
      return _;
    }
    function l(_) {
      var T = {};
      return _.forEach(function(R, z) {
        T[R] = !0;
      }), T;
    }
    function f(_, T, R) {
      if (_.customInspect && T && G(T.inspect) && // Filter out the util module, it's inspect function is special
      T.inspect !== e.inspect && // Also filter out any prototype objects using the circular check.
      !(T.constructor && T.constructor.prototype === T)) {
        var z = T.inspect(R, _);
        return b(z) || (z = f(_, z, R)), z;
      }
      var U = d(_, T);
      if (U)
        return U;
      var D = Object.keys(T), L = l(D);
      if (_.showHidden && (D = Object.getOwnPropertyNames(T)), q(T) && (D.indexOf("message") >= 0 || D.indexOf("description") >= 0))
        return u(T);
      if (D.length === 0) {
        if (G(T)) {
          var F = T.name ? ": " + T.name : "";
          return _.stylize("[Function" + F + "]", "special");
        }
        if (O(T))
          return _.stylize(RegExp.prototype.toString.call(T), "regexp");
        if (N(T))
          return _.stylize(Date.prototype.toString.call(T), "date");
        if (q(T))
          return u(T);
      }
      var B = "", W = !1, J = ["{", "}"];
      if (E(T) && (W = !0, J = ["[", "]"]), G(T)) {
        var fe = T.name ? ": " + T.name : "";
        B = " [Function" + fe + "]";
      }
      if (O(T) && (B = " " + RegExp.prototype.toString.call(T)), N(T) && (B = " " + Date.prototype.toUTCString.call(T)), q(T) && (B = " " + u(T)), D.length === 0 && (!W || T.length == 0))
        return J[0] + B + J[1];
      if (R < 0)
        return O(T) ? _.stylize(RegExp.prototype.toString.call(T), "regexp") : _.stylize("[Object]", "special");
      _.seen.push(T);
      var ye;
      return W ? ye = v(_, T, R, L, D) : ye = D.map(function(Ge) {
        return m(_, T, R, L, Ge, W);
      }), _.seen.pop(), w(ye, B, J);
    }
    function d(_, T) {
      if (k(T))
        return _.stylize("undefined", "undefined");
      if (b(T)) {
        var R = "'" + JSON.stringify(T).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return _.stylize(R, "string");
      }
      if (g(T))
        return _.stylize("" + T, "number");
      if (h(T))
        return _.stylize("" + T, "boolean");
      if (y(T))
        return _.stylize("null", "null");
    }
    function u(_) {
      return "[" + Error.prototype.toString.call(_) + "]";
    }
    function v(_, T, R, z, U) {
      for (var D = [], L = 0, F = T.length; L < F; ++L)
        pe(T, String(L)) ? D.push(m(
          _,
          T,
          R,
          z,
          String(L),
          !0
        )) : D.push("");
      return U.forEach(function(B) {
        B.match(/^\d+$/) || D.push(m(
          _,
          T,
          R,
          z,
          B,
          !0
        ));
      }), D;
    }
    function m(_, T, R, z, U, D) {
      var L, F, B;
      if (B = Object.getOwnPropertyDescriptor(T, U) || { value: T[U] }, B.get ? B.set ? F = _.stylize("[Getter/Setter]", "special") : F = _.stylize("[Getter]", "special") : B.set && (F = _.stylize("[Setter]", "special")), pe(z, U) || (L = "[" + U + "]"), F || (_.seen.indexOf(B.value) < 0 ? (y(R) ? F = f(_, B.value, null) : F = f(_, B.value, R - 1), F.indexOf(`
`) > -1 && (D ? F = F.split(`
`).map(function(W) {
        return "  " + W;
      }).join(`
`).slice(2) : F = `
` + F.split(`
`).map(function(W) {
        return "   " + W;
      }).join(`
`))) : F = _.stylize("[Circular]", "special")), k(L)) {
        if (D && U.match(/^\d+$/))
          return F;
        L = JSON.stringify("" + U), L.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (L = L.slice(1, -1), L = _.stylize(L, "name")) : (L = L.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), L = _.stylize(L, "string"));
      }
      return L + ": " + F;
    }
    function w(_, T, R) {
      var z = _.reduce(function(U, D) {
        return D.indexOf(`
`) >= 0, U + D.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return z > 60 ? R[0] + (T === "" ? "" : T + `
 `) + " " + _.join(`,
  `) + " " + R[1] : R[0] + T + " " + _.join(", ") + " " + R[1];
    }
    e.types = X3();
    function E(_) {
      return Array.isArray(_);
    }
    e.isArray = E;
    function h(_) {
      return typeof _ == "boolean";
    }
    e.isBoolean = h;
    function y(_) {
      return _ === null;
    }
    e.isNull = y;
    function S(_) {
      return _ == null;
    }
    e.isNullOrUndefined = S;
    function g(_) {
      return typeof _ == "number";
    }
    e.isNumber = g;
    function b(_) {
      return typeof _ == "string";
    }
    e.isString = b;
    function A(_) {
      return typeof _ == "symbol";
    }
    e.isSymbol = A;
    function k(_) {
      return _ === void 0;
    }
    e.isUndefined = k;
    function O(_) {
      return C(_) && x(_) === "[object RegExp]";
    }
    e.isRegExp = O, e.types.isRegExp = O;
    function C(_) {
      return typeof _ == "object" && _ !== null;
    }
    e.isObject = C;
    function N(_) {
      return C(_) && x(_) === "[object Date]";
    }
    e.isDate = N, e.types.isDate = N;
    function q(_) {
      return C(_) && (x(_) === "[object Error]" || _ instanceof Error);
    }
    e.isError = q, e.types.isNativeError = q;
    function G(_) {
      return typeof _ == "function";
    }
    e.isFunction = G;
    function ce(_) {
      return _ === null || typeof _ == "boolean" || typeof _ == "number" || typeof _ == "string" || typeof _ == "symbol" || // ES6 symbol
      typeof _ > "u";
    }
    e.isPrimitive = ce, e.isBuffer = e8();
    function x(_) {
      return Object.prototype.toString.call(_);
    }
    function K(_) {
      return _ < 10 ? "0" + _.toString(10) : _.toString(10);
    }
    var Y = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function le() {
      var _ = /* @__PURE__ */ new Date(), T = [
        K(_.getHours()),
        K(_.getMinutes()),
        K(_.getSeconds())
      ].join(":");
      return [_.getDate(), Y[_.getMonth()], T].join(" ");
    }
    e.log = function() {
      console.log("%s - %s", le(), e.format.apply(e, arguments));
    }, e.inherits = t8(), e._extend = function(_, T) {
      if (!T || !C(T)) return _;
      for (var R = Object.keys(T), z = R.length; z--; )
        _[R[z]] = T[R[z]];
      return _;
    };
    function pe(_, T) {
      return Object.prototype.hasOwnProperty.call(_, T);
    }
    var ie = typeof Symbol < "u" ? /* @__PURE__ */ Symbol("util.promisify.custom") : void 0;
    e.promisify = function(T) {
      if (typeof T != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (ie && T[ie]) {
        var R = T[ie];
        if (typeof R != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(R, ie, {
          value: R,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), R;
      }
      function R() {
        for (var z, U, D = new Promise(function(B, W) {
          z = B, U = W;
        }), L = [], F = 0; F < arguments.length; F++)
          L.push(arguments[F]);
        L.push(function(B, W) {
          B ? U(B) : z(W);
        });
        try {
          T.apply(this, L);
        } catch (B) {
          U(B);
        }
        return D;
      }
      return Object.setPrototypeOf(R, Object.getPrototypeOf(T)), ie && Object.defineProperty(R, ie, {
        value: R,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        R,
        t(T)
      );
    }, e.promisify.custom = ie;
    function Ve(_, T) {
      if (!_) {
        var R = new Error("Promise was rejected with a falsy value");
        R.reason = _, _ = R;
      }
      return T(_);
    }
    function I(_) {
      if (typeof _ != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function T() {
        for (var R = [], z = 0; z < arguments.length; z++)
          R.push(arguments[z]);
        var U = R.pop();
        if (typeof U != "function")
          throw new TypeError("The last argument must be of type Function");
        var D = this, L = function() {
          return U.apply(D, arguments);
        };
        _.apply(this, R).then(
          function(F) {
            process.nextTick(L.bind(null, null, F));
          },
          function(F) {
            process.nextTick(Ve.bind(null, F, L));
          }
        );
      }
      return Object.setPrototypeOf(T, Object.getPrototypeOf(_)), Object.defineProperties(
        T,
        t(_)
      ), T;
    }
    e.callbackify = I;
  })(Ra)), Ra;
}
var Ii = {}, Ef;
function n8() {
  return Ef || (Ef = 1, (function(e) {
    (function(t) {
      var n = {
        not_string: /[^s]/,
        number: /[diefg]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
      };
      function r() {
        var s = arguments[0], c = r.cache;
        return c[s] && c.hasOwnProperty(s) || (c[s] = r.parse(s)), r.format.call(null, c[s], arguments);
      }
      r.format = function(s, c) {
        var l = 1, f = s.length, d = "", u, v = [], m, w, E, h, y, S, g = !0, b = "";
        for (m = 0; m < f; m++)
          if (d = a(s[m]), d === "string")
            v[v.length] = s[m];
          else if (d === "array") {
            if (E = s[m], E[2])
              for (u = c[l], w = 0; w < E[2].length; w++) {
                if (!u.hasOwnProperty(E[2][w]))
                  throw new Error(r("[sprintf] property '%s' does not exist", E[2][w]));
                u = u[E[2][w]];
              }
            else E[1] ? u = c[E[1]] : u = c[l++];
            if (a(u) == "function" && (u = u()), n.not_string.test(E[8]) && n.not_json.test(E[8]) && a(u) != "number" && isNaN(u))
              throw new TypeError(r("[sprintf] expecting number but found %s", a(u)));
            switch (n.number.test(E[8]) && (g = u >= 0), E[8]) {
              case "b":
                u = u.toString(2);
                break;
              case "c":
                u = String.fromCharCode(u);
                break;
              case "d":
              case "i":
                u = parseInt(u, 10);
                break;
              case "j":
                u = JSON.stringify(u, null, E[6] ? parseInt(E[6]) : 0);
                break;
              case "e":
                u = E[7] ? u.toExponential(E[7]) : u.toExponential();
                break;
              case "f":
                u = E[7] ? parseFloat(u).toFixed(E[7]) : parseFloat(u);
                break;
              case "g":
                u = E[7] ? parseFloat(u).toPrecision(E[7]) : parseFloat(u);
                break;
              case "o":
                u = u.toString(8);
                break;
              case "s":
                u = (u = String(u)) && E[7] ? u.substring(0, E[7]) : u;
                break;
              case "u":
                u = u >>> 0;
                break;
              case "x":
                u = u.toString(16);
                break;
              case "X":
                u = u.toString(16).toUpperCase();
                break;
            }
            n.json.test(E[8]) ? v[v.length] = u : (n.number.test(E[8]) && (!g || E[3]) ? (b = g ? "+" : "-", u = u.toString().replace(n.sign, "")) : b = "", y = E[4] ? E[4] === "0" ? "0" : E[4].charAt(1) : " ", S = E[6] - (b + u).length, h = E[6] && S > 0 ? i(y, S) : "", v[v.length] = E[5] ? b + u + h : y === "0" ? b + h + u : h + b + u);
          }
        return v.join("");
      }, r.cache = {}, r.parse = function(s) {
        for (var c = s, l = [], f = [], d = 0; c; ) {
          if ((l = n.text.exec(c)) !== null)
            f[f.length] = l[0];
          else if ((l = n.modulo.exec(c)) !== null)
            f[f.length] = "%";
          else if ((l = n.placeholder.exec(c)) !== null) {
            if (l[2]) {
              d |= 1;
              var u = [], v = l[2], m = [];
              if ((m = n.key.exec(v)) !== null)
                for (u[u.length] = m[1]; (v = v.substring(m[0].length)) !== ""; )
                  if ((m = n.key_access.exec(v)) !== null)
                    u[u.length] = m[1];
                  else if ((m = n.index_access.exec(v)) !== null)
                    u[u.length] = m[1];
                  else
                    throw new SyntaxError("[sprintf] failed to parse named argument key");
              else
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              l[2] = u;
            } else
              d |= 2;
            if (d === 3)
              throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
            f[f.length] = l;
          } else
            throw new SyntaxError("[sprintf] unexpected placeholder");
          c = c.substring(l[0].length);
        }
        return f;
      };
      var o = function(s, c, l) {
        return l = (c || []).slice(0), l.splice(0, 0, s), r.apply(null, l);
      };
      function a(s) {
        return Object.prototype.toString.call(s).slice(8, -1).toLowerCase();
      }
      function i(s, c) {
        return Array(c + 1).join(s);
      }
      e.sprintf = r, e.vsprintf = o;
    })();
  })(Ii)), Ii;
}
var to = { exports: {} }, Af;
function r8() {
  if (Af) return to.exports;
  Af = 1;
  var e = typeof Reflect == "object" ? Reflect : null, t = e && typeof e.apply == "function" ? e.apply : function(b, A, k) {
    return Function.prototype.apply.call(b, A, k);
  }, n;
  e && typeof e.ownKeys == "function" ? n = e.ownKeys : Object.getOwnPropertySymbols ? n = function(b) {
    return Object.getOwnPropertyNames(b).concat(Object.getOwnPropertySymbols(b));
  } : n = function(b) {
    return Object.getOwnPropertyNames(b);
  };
  function r(g) {
    console && console.warn && console.warn(g);
  }
  var o = Number.isNaN || function(b) {
    return b !== b;
  };
  function a() {
    a.init.call(this);
  }
  to.exports = a, to.exports.once = h, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
  var i = 10;
  function s(g) {
    if (typeof g != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof g);
  }
  Object.defineProperty(a, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return i;
    },
    set: function(g) {
      if (typeof g != "number" || g < 0 || o(g))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + g + ".");
      i = g;
    }
  }), a.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, a.prototype.setMaxListeners = function(b) {
    if (typeof b != "number" || b < 0 || o(b))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + b + ".");
    return this._maxListeners = b, this;
  };
  function c(g) {
    return g._maxListeners === void 0 ? a.defaultMaxListeners : g._maxListeners;
  }
  a.prototype.getMaxListeners = function() {
    return c(this);
  }, a.prototype.emit = function(b) {
    for (var A = [], k = 1; k < arguments.length; k++) A.push(arguments[k]);
    var O = b === "error", C = this._events;
    if (C !== void 0)
      O = O && C.error === void 0;
    else if (!O)
      return !1;
    if (O) {
      var N;
      if (A.length > 0 && (N = A[0]), N instanceof Error)
        throw N;
      var q = new Error("Unhandled error." + (N ? " (" + N.message + ")" : ""));
      throw q.context = N, q;
    }
    var G = C[b];
    if (G === void 0)
      return !1;
    if (typeof G == "function")
      t(G, this, A);
    else
      for (var ce = G.length, x = m(G, ce), k = 0; k < ce; ++k)
        t(x[k], this, A);
    return !0;
  };
  function l(g, b, A, k) {
    var O, C, N;
    if (s(A), C = g._events, C === void 0 ? (C = g._events = /* @__PURE__ */ Object.create(null), g._eventsCount = 0) : (C.newListener !== void 0 && (g.emit(
      "newListener",
      b,
      A.listener ? A.listener : A
    ), C = g._events), N = C[b]), N === void 0)
      N = C[b] = A, ++g._eventsCount;
    else if (typeof N == "function" ? N = C[b] = k ? [A, N] : [N, A] : k ? N.unshift(A) : N.push(A), O = c(g), O > 0 && N.length > O && !N.warned) {
      N.warned = !0;
      var q = new Error("Possible EventEmitter memory leak detected. " + N.length + " " + String(b) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      q.name = "MaxListenersExceededWarning", q.emitter = g, q.type = b, q.count = N.length, r(q);
    }
    return g;
  }
  a.prototype.addListener = function(b, A) {
    return l(this, b, A, !1);
  }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(b, A) {
    return l(this, b, A, !0);
  };
  function f() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function d(g, b, A) {
    var k = { fired: !1, wrapFn: void 0, target: g, type: b, listener: A }, O = f.bind(k);
    return O.listener = A, k.wrapFn = O, O;
  }
  a.prototype.once = function(b, A) {
    return s(A), this.on(b, d(this, b, A)), this;
  }, a.prototype.prependOnceListener = function(b, A) {
    return s(A), this.prependListener(b, d(this, b, A)), this;
  }, a.prototype.removeListener = function(b, A) {
    var k, O, C, N, q;
    if (s(A), O = this._events, O === void 0)
      return this;
    if (k = O[b], k === void 0)
      return this;
    if (k === A || k.listener === A)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete O[b], O.removeListener && this.emit("removeListener", b, k.listener || A));
    else if (typeof k != "function") {
      for (C = -1, N = k.length - 1; N >= 0; N--)
        if (k[N] === A || k[N].listener === A) {
          q = k[N].listener, C = N;
          break;
        }
      if (C < 0)
        return this;
      C === 0 ? k.shift() : w(k, C), k.length === 1 && (O[b] = k[0]), O.removeListener !== void 0 && this.emit("removeListener", b, q || A);
    }
    return this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(b) {
    var A, k, O;
    if (k = this._events, k === void 0)
      return this;
    if (k.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : k[b] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete k[b]), this;
    if (arguments.length === 0) {
      var C = Object.keys(k), N;
      for (O = 0; O < C.length; ++O)
        N = C[O], N !== "removeListener" && this.removeAllListeners(N);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (A = k[b], typeof A == "function")
      this.removeListener(b, A);
    else if (A !== void 0)
      for (O = A.length - 1; O >= 0; O--)
        this.removeListener(b, A[O]);
    return this;
  };
  function u(g, b, A) {
    var k = g._events;
    if (k === void 0)
      return [];
    var O = k[b];
    return O === void 0 ? [] : typeof O == "function" ? A ? [O.listener || O] : [O] : A ? E(O) : m(O, O.length);
  }
  a.prototype.listeners = function(b) {
    return u(this, b, !0);
  }, a.prototype.rawListeners = function(b) {
    return u(this, b, !1);
  }, a.listenerCount = function(g, b) {
    return typeof g.listenerCount == "function" ? g.listenerCount(b) : v.call(g, b);
  }, a.prototype.listenerCount = v;
  function v(g) {
    var b = this._events;
    if (b !== void 0) {
      var A = b[g];
      if (typeof A == "function")
        return 1;
      if (A !== void 0)
        return A.length;
    }
    return 0;
  }
  a.prototype.eventNames = function() {
    return this._eventsCount > 0 ? n(this._events) : [];
  };
  function m(g, b) {
    for (var A = new Array(b), k = 0; k < b; ++k)
      A[k] = g[k];
    return A;
  }
  function w(g, b) {
    for (; b + 1 < g.length; b++)
      g[b] = g[b + 1];
    g.pop();
  }
  function E(g) {
    for (var b = new Array(g.length), A = 0; A < b.length; ++A)
      b[A] = g[A].listener || g[A];
    return b;
  }
  function h(g, b) {
    return new Promise(function(A, k) {
      function O(N) {
        g.removeListener(b, C), k(N);
      }
      function C() {
        typeof g.removeListener == "function" && g.removeListener("error", O), A([].slice.call(arguments));
      }
      S(g, b, C, { once: !0 }), b !== "error" && y(g, O, { once: !0 });
    });
  }
  function y(g, b, A) {
    typeof g.on == "function" && S(g, "error", b, A);
  }
  function S(g, b, A, k) {
    if (typeof g.on == "function")
      k.once ? g.once(b, A) : g.on(b, A);
    else if (typeof g.addEventListener == "function")
      g.addEventListener(b, function O(C) {
        k.once && g.removeEventListener(b, O), A(C);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof g);
  }
  return to.exports;
}
var ji, Sf;
function o8() {
  if (Sf) return ji;
  Sf = 1;
  var e = [].indexOf;
  return ji = function(t, n) {
    if (e) return t.indexOf(n);
    for (var r = 0; r < t.length; ++r)
      if (t[r] === n) return r;
    return -1;
  }, ji;
}
var Oi, Tf;
function a8() {
  if (Tf) return Oi;
  Tf = 1;
  var e = Array.prototype, t = e.concat, n = e.slice, r = o8();
  function o(a) {
    var i = {}, s = t.apply(e, n.call(arguments, 1));
    for (var c in a)
      r(s, c) === -1 && (i[c] = a[c]);
    return i;
  }
  return Oi = o, Oi;
}
var Pi, kf;
function Jp() {
  return kf || (kf = 1, Pi = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), Pi;
}
var Ci, Rf;
function i8() {
  return Rf || (Rf = 1, Ci = Jp()), Ci;
}
var Mi, If;
function s8() {
  if (If) return Mi;
  If = 1;
  var e = i8();
  function t(i, s, c) {
    var l = i.getTime();
    return c = c || e, s.replace(/%([-_0]?.)/g, function(f, d) {
      var u = null;
      if (d.length == 2) {
        switch (d[0]) {
          case "-":
            u = "";
            break;
          case "_":
            u = " ";
            break;
          case "0":
            u = "0";
            break;
          default:
            return f;
        }
        d = d[1];
      }
      switch (d) {
        case "A":
          return c.days[i.getDay()];
        case "a":
          return c.abbreviated_days[i.getDay()];
        case "B":
          return c.months[i.getMonth()];
        case "b":
          return c.abbreviated_months[i.getMonth()];
        case "C":
          return n(Math.floor(i.getFullYear() / 100), u);
        case "D":
          return t(i, "%m/%d/%y");
        case "d":
          return n(i.getDate(), u);
        case "e":
          return i.getDate();
        case "F":
          return t(i, "%Y-%m-%d");
        case "H":
          return n(i.getHours(), u);
        case "h":
          return c.abbreviated_months[i.getMonth()];
        case "I":
          return n(r(i), u);
        case "j":
          return n(Math.ceil((i.getTime() - new Date(i.getFullYear(), 0, 1).getTime()) / (1e3 * 60 * 60 * 24)), 3);
        case "k":
          return n(i.getHours(), u === null ? " " : u);
        case "L":
          return n(Math.floor(l % 1e3), 3);
        case "l":
          return n(r(i), u === null ? " " : u);
        case "M":
          return n(i.getMinutes(), u);
        case "m":
          return n(i.getMonth() + 1, u);
        case "n":
          return `
`;
        case "o":
          return String(i.getDate()) + o(i.getDate());
        case "P":
          return i.getHours() < 12 ? c.am.toLowerCase() : c.pm.toLowerCase();
        case "p":
          return i.getHours() < 12 ? c.am.toUpperCase() : c.pm.toUpperCase();
        case "R":
          return t(i, "%H:%M");
        case "r":
          return t(i, "%I:%M:%S %p");
        case "S":
          return n(i.getSeconds(), u);
        case "s":
          return Math.floor(l / 1e3);
        case "T":
          return t(i, "%H:%M:%S");
        case "t":
          return "	";
        case "U":
          return n(a(i, "sunday"), u);
        case "u":
          return i.getDay() === 0 ? 7 : i.getDay();
        case "v":
          return t(i, "%e-%b-%Y");
        case "W":
          return n(a(i, "monday"), u);
        case "w":
          return i.getDay();
        case "Y":
          return i.getFullYear();
        case "y":
          var v = String(i.getFullYear());
          return v.slice(v.length - 2);
        case "Z":
          var m = i.toString().match(/\((\w+)\)/);
          return m && m[1] || "";
        case "z":
          var w = i.getTimezoneOffset();
          return (w > 0 ? "-" : "+") + n(Math.round(Math.abs(w / 60)), 2) + ":" + n(w % 60, 2);
        default:
          return d;
      }
    });
  }
  function n(i, s, c) {
    typeof s == "number" && (c = s, s = "0"), s === null && (s = "0"), c = c || 2;
    var l = String(i);
    if (s)
      for (; l.length < c; )
        l = s + l;
    return l;
  }
  function r(i) {
    var s = i.getHours();
    return s === 0 ? s = 12 : s > 12 && (s -= 12), s;
  }
  function o(i) {
    var s = i % 10, c = i % 100;
    if (c >= 11 && c <= 13 || s === 0 || s >= 4)
      return "th";
    switch (s) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
    }
  }
  function a(i, s) {
    s = s || "sunday";
    var c = i.getDay();
    s == "monday" && (c === 0 ? c = 6 : c--);
    var l = new Date(i.getFullYear(), 0, 1), f = (i - l) / 864e5, d = (f + 7 - c) / 7;
    return Math.floor(d);
  }
  return Mi = t, Mi;
}
var Ni, jf;
function c8() {
  return jf || (jf = 1, Ni = function(e, t) {
    var n;
    return t === 0 && "zero" in e && (n = "zero"), n = n || (t === 1 ? "one" : "other"), e[n];
  }), Ni;
}
var xi, Of;
function l8() {
  return Of || (Of = 1, xi = {
    counterpart: {
      names: Jp(),
      pluralize: c8(),
      formats: {
        date: {
          default: "%a, %e %b %Y",
          long: "%A, %B %o, %Y",
          short: "%b %e"
        },
        time: {
          default: "%H:%M",
          long: "%H:%M:%S %z",
          short: "%H:%M"
        },
        datetime: {
          default: "%a, %e %b %Y %H:%M",
          long: "%A, %B %o, %Y %H:%M:%S %z",
          short: "%e %b %H:%M"
        }
      }
    }
  }), xi;
}
var Bi, Pf;
function u8() {
  if (Pf) return Bi;
  Pf = 1;
  var e = b3(), t = wf().isArray, n = wf().isDate, r = n8().sprintf, o = r8(), a = a8(), i = s8(), s = "counterpart";
  function c(h) {
    return typeof h == "string" || Object.prototype.toString.call(h) === "[object String]";
  }
  function l(h) {
    return typeof h == "function" || Object.prototype.toString.call(h) === "[object Function]";
  }
  function f(h) {
    return h === null ? !1 : Object.prototype.toString.call(h) === "[object Object]";
  }
  function d(h) {
    return c(h) && h[0] === ":";
  }
  function u(h, y) {
    return Object.prototype.hasOwnProperty.call(h, y);
  }
  function v(h, y) {
    return y.reduce(function(S, g) {
      return f(S) && u(S, g) ? S[g] : null;
    }, h);
  }
  function m() {
    o.EventEmitter.apply(this), this._registry = {
      locale: "en",
      interpolate: !0,
      fallbackLocales: [],
      scope: null,
      translations: {},
      interpolations: {},
      normalizedKeys: {},
      separator: ".",
      keepTrailingDot: !1,
      keyTransformer: function(h) {
        return h;
      },
      generateMissingEntry: function(h) {
        return "missing translation: " + h;
      }
    }, this.registerTranslations("en", l8()), this.setMaxListeners(0);
  }
  m.prototype = o.EventEmitter.prototype, m.prototype.constructor = o.EventEmitter, m.prototype.getLocale = function() {
    return this._registry.locale;
  }, m.prototype.setLocale = function(h) {
    var y = this._registry.locale;
    return y != h && (this._registry.locale = h, this.emit("localechange", h, y)), y;
  }, m.prototype.getFallbackLocale = function() {
    return this._registry.fallbackLocales;
  }, m.prototype.setFallbackLocale = function(h) {
    var y = this._registry.fallbackLocales;
    return this._registry.fallbackLocales = [].concat(h || []), y;
  }, m.prototype.getAvailableLocales = function() {
    return this._registry.availableLocales || Object.keys(this._registry.translations);
  }, m.prototype.setAvailableLocales = function(h) {
    var y = this.getAvailableLocales();
    return this._registry.availableLocales = h, y;
  }, m.prototype.getSeparator = function() {
    return this._registry.separator;
  }, m.prototype.setSeparator = function(h) {
    var y = this._registry.separator;
    return this._registry.separator = h, y;
  }, m.prototype.setInterpolate = function(h) {
    var y = this._registry.interpolate;
    return this._registry.interpolate = h, y;
  }, m.prototype.getInterpolate = function() {
    return this._registry.interpolate;
  }, m.prototype.setKeyTransformer = function(h) {
    var y = this._registry.keyTransformer;
    return this._registry.keyTransformer = h, y;
  }, m.prototype.getKeyTransformer = function() {
    return this._registry.keyTransformer;
  }, m.prototype.setMissingEntryGenerator = function(h) {
    var y = this._registry.generateMissingEntry;
    return this._registry.generateMissingEntry = h, y;
  }, m.prototype.getMissingEntryGenerator = function() {
    return this._registry.generateMissingEntry;
  }, m.prototype.registerTranslations = function(h, y) {
    var S = {};
    return S[h] = y, e(!0, this._registry.translations, S), S;
  }, m.prototype.registerInterpolations = function(h) {
    return e(!0, this._registry.interpolations, h);
  }, m.prototype.onLocaleChange = m.prototype.addLocaleChangeListener = function(h) {
    this.addListener("localechange", h);
  }, m.prototype.offLocaleChange = m.prototype.removeLocaleChangeListener = function(h) {
    this.removeListener("localechange", h);
  }, m.prototype.onTranslationNotFound = m.prototype.addTranslationNotFoundListener = function(h) {
    this.addListener("translationnotfound", h);
  }, m.prototype.offTranslationNotFound = m.prototype.removeTranslationNotFoundListener = function(h) {
    this.removeListener("translationnotfound", h);
  }, m.prototype.onError = m.prototype.addErrorListener = function(h) {
    this.addListener("error", h);
  }, m.prototype.offError = m.prototype.removeErrorListener = function(h) {
    this.removeListener("error", h);
  }, m.prototype.translate = function(h, y) {
    if (!t(h) && !c(h) || !h.length)
      throw new Error("invalid argument: key");
    d(h) && (h = h.substr(1)), h = this._registry.keyTransformer(h, y), y = e(!0, {}, y);
    var S = y.locale || this._registry.locale;
    delete y.locale;
    var g = y.scope || this._registry.scope;
    delete y.scope;
    var b = y.separator || this._registry.separator;
    delete y.separator;
    var A = [].concat(y.fallbackLocale || this._registry.fallbackLocales);
    delete y.fallbackLocale;
    var k = this._normalizeKeys(S, g, h, b), O = v(this._registry.translations, k);
    if (O === null && (this.emit("translationnotfound", S, h, y.fallback, g), y.fallback && (O = this._fallback(S, g, h, y.fallback, y))), O === null && A.length > 0 && A.indexOf(S) === -1)
      for (var C = 0, N = A.length; C < N; C++) {
        var q = A[C], G = this._normalizeKeys(q, g, h, b);
        if (O = v(this._registry.translations, G), O) {
          S = q;
          break;
        }
      }
    return O === null && (O = this._registry.generateMissingEntry(k.join(b))), O = this._pluralize(S, O, y.count), this._registry.interpolate !== !1 && y.interpolate !== !1 && (O = this._interpolate(O, y)), O;
  }, m.prototype.localize = function(h, y) {
    if (!n(h))
      throw new Error("invalid argument: object must be a date");
    y = e(!0, {}, y);
    var S = y.locale || this._registry.locale, g = y.scope || s, b = y.type || "datetime", A = y.format || "default";
    return y = { locale: S, scope: g, interpolate: !1 }, A = this.translate(["formats", b, A], e(!0, {}, y)), i(h, A, this.translate("names", y));
  }, m.prototype._pluralize = function(h, y, S) {
    if (typeof y != "object" || y === null || typeof S != "number")
      return y;
    var g = this.translate("pluralize", { locale: h, scope: s });
    return Object.prototype.toString.call(g) !== "[object Function]" ? g : g(y, S);
  }, m.prototype.withLocale = function(h, y, S) {
    var g = this._registry.locale;
    this._registry.locale = h;
    var b = y.call(S);
    return this._registry.locale = g, b;
  }, m.prototype.withScope = function(h, y, S) {
    var g = this._registry.scope;
    this._registry.scope = h;
    var b = y.call(S);
    return this._registry.scope = g, b;
  }, m.prototype.withSeparator = function(h, y, S) {
    var g = this.setSeparator(h), b = y.call(S);
    return this.setSeparator(g), b;
  }, m.prototype._normalizeKeys = function(h, y, S, g) {
    var b = [];
    return b = b.concat(this._normalizeKey(h, g)), b = b.concat(this._normalizeKey(y, g)), b = b.concat(this._normalizeKey(S, g)), b;
  }, m.prototype._normalizeKey = function(h, y) {
    return this._registry.normalizedKeys[y] = this._registry.normalizedKeys[y] || {}, this._registry.normalizedKeys[y][h] = this._registry.normalizedKeys[y][h] || (function(S) {
      if (t(S)) {
        var g = S.map((function(k) {
          return this._normalizeKey(k, y);
        }).bind(this));
        return [].concat.apply([], g);
      } else {
        if (typeof S > "u" || S === null)
          return [];
        for (var b = S.split(y), A = b.length - 1; A >= 0; A--)
          b[A] === "" && (b.splice(A, 1), this._registry.keepTrailingDot === !0 && A == b.length && (b[b.length - 1] += "" + y));
        return b;
      }
    }).bind(this)(h), this._registry.normalizedKeys[y][h];
  }, m.prototype._interpolate = function(h, y) {
    if (typeof h != "string")
      return h;
    try {
      return r(h, e({}, this._registry.interpolations, y));
    } catch (S) {
      if (this.listenerCount("error") > 0)
        this.emit("error", S, h, y);
      else
        throw S;
      return null;
    }
  }, m.prototype._resolve = function(h, y, S, g, b) {
    if (b = b || {}, b.resolve === !1)
      return g;
    var A;
    if (d(g))
      A = this.translate(g, e({}, b, { locale: h, scope: y }));
    else if (l(g)) {
      var k;
      b.object ? (k = b.object, delete b.object) : k = S, A = this._resolve(h, y, S, g(k, b));
    } else
      A = g;
    return /^missing translation:/.test(A) ? null : A;
  }, m.prototype._fallback = function(h, y, S, g, b) {
    if (b = a(b, "fallback"), t(g)) {
      for (var A = 0, k = g.length; A < k; A++) {
        var O = this._resolve(h, y, S, g[A], b);
        if (O)
          return O;
      }
      return null;
    } else
      return this._resolve(h, y, S, g, b);
  };
  var w = new m();
  function E() {
    return w.translate.apply(w, arguments);
  }
  return e(E, w, {
    Instance: m,
    Translator: m
  }), Bi = E, Bi;
}
var f8 = u8();
const Je = /* @__PURE__ */ Zf(f8), Qp = "i18n/";
Je.setSeparator(v3);
const Xp = "en";
Je.setFallbackLocale(Xp);
function d8(e, t) {
  Je.registerTranslations(e, t);
}
function h4(e) {
  Je.setMissingEntryGenerator(e);
}
function p8() {
  return Je.getLocale();
}
function g4(e) {
  return Je.setLocale(e);
}
function y4(e) {
  return e;
}
function Cf(e) {
  return typeof e == "string" && !e.startsWith("missing translation:");
}
const m8 = (e, t) => {
  const n = Je.translate(e, { ...t, fallbackLocale: Je.getLocale() });
  if (Cf(n))
    return { translated: n };
  const r = Je.translate(e, { ...t, locale: Xp });
  return Cf(r) ? { translated: r, isFallback: !0 } : { translated: e, isFallback: !0 };
};
function Vc(e, t) {
  const n = { ...t, interpolate: !1 };
  return n && typeof n == "object" && Object.keys(n).forEach((r) => {
    n[r] === void 0 && (console.warn("safeCounterpartTranslate called with undefined interpolation name: " + r), n[r] = "undefined"), n[r] === null && (console.warn("safeCounterpartTranslate called with null interpolation name: " + r), n[r] = "null");
  }), m8(e, n);
}
const em = (e, t) => e;
function M(e, t, n) {
  const { translated: r } = Vc(e, t), o = tm(r, t, n);
  return em(o);
}
function v4(e) {
  return Vc(e, {}).translated;
}
function b4(e, t, n) {
  const { translated: r, isFallback: o } = Vc(e, t), a = tm(r, t, n);
  return em(o ? /* @__PURE__ */ p.createElement("span", { lang: "en" }, a) : a);
}
function _4(e) {
  return e.replace(/%\(([^)]*)\)/g, "% ($1)");
}
function tm(e, t, n) {
  let r = e;
  if (t !== void 0) {
    const o = {};
    for (const a in t)
      o[`%\\(${a}\\)s`] = t[a];
    r = Mf(r, o);
  }
  if (n !== void 0) {
    const o = {};
    for (const a in n)
      o[`(<${a}>(.*?)<\\/${a}>|<${a}>|<${a}\\s*\\/>)`] = n[a];
    r = Mf(r, o);
  }
  return r;
}
function Mf(e, t) {
  const n = [e];
  let r = !1;
  for (const o in t) {
    const a = new RegExp(o, "g");
    let i = !1;
    for (let s = 0; s < n.length; s++) {
      const c = n[s];
      if (typeof c != "string")
        continue;
      let l = a.exec(c);
      if (!l) continue;
      i = !0;
      const f = c.slice(0, l.index), d = [];
      let u;
      for (; l; ) {
        u = l;
        const v = l.slice(2);
        let m;
        t[o] instanceof Function ? m = t[o](...v) : m = t[o], typeof m == "object" && (r = !0), (typeof m != "string" || m !== "") && d.push(m), l = a.exec(c);
        let w;
        if (l) {
          const E = u.index + u[0].length;
          w = c.slice(E, l.index);
        } else
          w = c.slice(u.index + u[0].length);
        w && d.push(w);
      }
      n.splice(s, 1, ...d), f !== "" && n.splice(s, 0, f);
    }
    i || // The current regexp did not match anything in the input. Missing
    // matches is entirely possible because you might choose to show some
    // variables only in the case of e.g. plurals. It's still a bit
    // suspicious, and could be due to an error, so log it. However, not
    // showing count is so common that it's not worth logging. And other
    // commonly unused variables here, if there are any.
    o !== "%\\(count\\)s" && // Ignore the `locale` option which can be used to override the locale
    // in counterpart
    o !== "%\\(locale\\)s" && console.log(`Could not find ${a} in ${e}`);
  }
  return r ? react.createElement("span", null, ...n) : n.join("");
}
async function w4(e) {
  const t = await g8(), n = e in t ? e : "en", r = await h8(Qp + t[n]);
  Je.registerTranslations(n, r), Je.setLocale(n);
}
async function h8(e) {
  console.log("Loading language from", e);
  const t = await fetch(e, { method: "GET" });
  if (!t.ok)
    throw new Error(`Failed to load ${e}, got ${t.status}`);
  return t.json();
}
async function g8() {
  const e = Qp + "languages.json", t = await fetch(e, { method: "GET" });
  if (!t.ok)
    throw new Error(`Failed to load ${e}, got ${t.status}`);
  return t.json();
}
function ar({
  type: e,
  children: t,
  avatar: n,
  className: r,
  actions: o,
  onClose: a,
  ...i
}) {
  const s = re(Xr.banner, r), c = ct(() => {
    switch (e) {
      case "critical":
        return /* @__PURE__ */ p.createElement(d3, { fontSize: 24 });
      case "info":
        return /* @__PURE__ */ p.createElement(gu, { fontSize: 24 });
      case "success":
        return /* @__PURE__ */ p.createElement(f3, { fontSize: 24 });
      default:
        return /* @__PURE__ */ p.createElement(gu, { fontSize: 24 });
    }
  }, [e]);
  return /* @__PURE__ */ p.createElement("div", { ...i, className: s, "data-type": e }, /* @__PURE__ */ p.createElement("div", { className: Xr.icon }, n ?? c), /* @__PURE__ */ p.createElement("div", { className: Xr.content }, t), /* @__PURE__ */ p.createElement("div", { className: Xr.actions }, o, a && /* @__PURE__ */ p.createElement(Fe, { kind: "secondary", size: "sm", onClick: a }, M("action|dismiss"))));
}
const y8 = /* @__PURE__ */ JSON.parse(`[{"number":0,"emoji":"🐶","description":"Dog","unicode":"U+1F436","translated_descriptions":{"ar":"كلب","bg":"Куче","ca":"Gos","cs":"Pes","de":"Hund","eo":"Hundo","es":"Perro","et":"Koer","fa":"سگ","fi":"Koira","fr":"Chien","hr":"pas","hu":"Kutya","id":"Anjing","it":"Cane","ja":"犬","nb_NO":"Hund","nl":"Hond","pt":"Cão","pt_BR":"Cachorro","ru":"Собака","si":"බල්ලා","sk":"Pes","sq":"Qen","sr":"пас","sv":"Hund","szl":null,"tzm":"Aydi","uk":"Пес","vi":"Chó","zh_Hans":"狗","zh_Hant":"狗"}},{"number":1,"emoji":"🐱","description":"Cat","unicode":"U+1F431","translated_descriptions":{"ar":"هِرَّة","bg":"Котка","ca":"Gat","cs":"Kočka","de":"Katze","eo":"Kato","es":"Gato","et":"Kass","fa":"گربه","fi":"Kissa","fr":"Chat","hr":"mačka","hu":"Macska","id":"Kucing","it":"Gatto","ja":"猫","nb_NO":"Katt","nl":"Kat","pt":"Gato","pt_BR":"Gato","ru":"Кошка","si":"පූසා","sk":"Mačka","sq":"Mace","sr":"мачка","sv":"Katt","szl":null,"tzm":"Amuc","uk":"Кіт","vi":"Mèo","zh_Hans":"猫","zh_Hant":"貓"}},{"number":2,"emoji":"🦁","description":"Lion","unicode":"U+1F981","translated_descriptions":{"ar":"أَسَد","bg":"Лъв","ca":"Lleó","cs":"Lev","de":"Löwe","eo":"Leono","es":"León","et":"Lõvi","fa":"شیر","fi":"Leijona","fr":"Lion","hr":"lav","hu":"Oroszlán","id":"Singa","it":"Leone","ja":"ライオン","nb_NO":"Løve","nl":"Leeuw","pt":"Leão","pt_BR":"Leão","ru":"Лев","si":"සිංහයා","sk":"Lev","sq":"Luan","sr":"лав","sv":"Lejon","szl":null,"tzm":"Izem","uk":"Лев","vi":"Sư tử","zh_Hans":"狮子","zh_Hant":"獅子"}},{"number":3,"emoji":"🐎","description":"Horse","unicode":"U+1F40E","translated_descriptions":{"ar":"حِصَان","bg":"Кон","ca":"Cavall","cs":"Kůň","de":"Pferd","eo":"Ĉevalo","es":"Caballo","et":"Hobune","fa":"اسب","fi":"Hevonen","fr":"Cheval","hr":"konj","hu":"Ló","id":"Kuda","it":"Cavallo","ja":"馬","nb_NO":"Hest","nl":"Paard","pt":"Cavalo","pt_BR":"Cavalo","ru":"Лошадь","si":"අශ්වයා","sk":"Kôň","sq":"Kalë","sr":"коњ","sv":"Häst","szl":null,"tzm":"Ayyis","uk":"Кінь","vi":"Ngựa","zh_Hans":"马","zh_Hant":"馬"}},{"number":4,"emoji":"🦄","description":"Unicorn","unicode":"U+1F984","translated_descriptions":{"ar":"حصان وحيد القرن","bg":"Еднорог","ca":"Unicorn","cs":"Jednorožec","de":"Einhorn","eo":"Unukorno","es":"Unicornio","et":"Ükssarvik","fa":"تک شاخ","fi":"Yksisarvinen","fr":"Licorne","hr":"jednorog","hu":"Egyszarvú","id":"Unicorn","it":"Unicorno","ja":"ユニコーン","nb_NO":"Enhjørning","nl":"Eenhoorn","pt":"Unicórnio","pt_BR":"Unicórnio","ru":"Единорог","si":null,"sk":"Jednorožec","sq":"Njëbrirësh","sr":"једнорог","sv":"Enhörning","szl":null,"tzm":null,"uk":"Єдиноріг","vi":"Kỳ lân","zh_Hans":"独角兽","zh_Hant":"獨角獸"}},{"number":5,"emoji":"🐷","description":"Pig","unicode":"U+1F437","translated_descriptions":{"ar":"خِنزِير","bg":"Прасе","ca":"Porc","cs":"Prase","de":"Schwein","eo":"Porko","es":"Cerdo","et":"Siga","fa":"خوک","fi":"Sika","fr":"Cochon","hr":"svinja","hu":"Malac","id":"Babi","it":"Maiale","ja":"ブタ","nb_NO":"Gris","nl":"Varken","pt":"Porco","pt_BR":"Porco","ru":"Свинья","si":null,"sk":"Prasa","sq":"Derr","sr":"прасе","sv":"Gris","szl":null,"tzm":"Ilef","uk":"Свиня","vi":"Heo","zh_Hans":"猪","zh_Hant":"豬"}},{"number":6,"emoji":"🐘","description":"Elephant","unicode":"U+1F418","translated_descriptions":{"ar":"فِيل","bg":"Слон","ca":"Elefant","cs":"Slon","de":"Elefant","eo":"Elefanto","es":"Elefante","et":"Elevant","fa":"فیل","fi":"Norsu","fr":"Éléphant","hr":"slon","hu":"Elefánt","id":"Gajah","it":"Elefante","ja":"ゾウ","nb_NO":"Elefant","nl":"Olifant","pt":"Elefante","pt_BR":"Elefante","ru":"Слон","si":null,"sk":"Slon","sq":"Elefant","sr":"слон","sv":"Elefant","szl":null,"tzm":"Ilu","uk":"Слон","vi":"Voi","zh_Hans":"大象","zh_Hant":"大象"}},{"number":7,"emoji":"🐰","description":"Rabbit","unicode":"U+1F430","translated_descriptions":{"ar":"أَرنَب","bg":"Заек","ca":"Conill","cs":"Králík","de":"Hase","eo":"Kuniklo","es":"Conejo","et":"Jänes","fa":"خرگوش","fi":"Kani","fr":"Lapin","hr":"zec","hu":"Nyúl","id":"Kelinci","it":"Coniglio","ja":"うさぎ","nb_NO":"Kanin","nl":"Konijn","pt":"Coelho","pt_BR":"Coelho","ru":"Кролик","si":null,"sk":"Zajac","sq":"Lepur","sr":"зец","sv":"Kanin","szl":null,"tzm":"Agnin","uk":"Кріль","vi":"Thỏ","zh_Hans":"兔子","zh_Hant":"兔子"}},{"number":8,"emoji":"🐼","description":"Panda","unicode":"U+1F43C","translated_descriptions":{"ar":"باندَا","bg":"Панда","ca":"Panda","cs":"Panda","de":"Panda","eo":"Pando","es":"Panda","et":"Panda","fa":"پاندا","fi":"Panda","fr":"Panda","hr":"panda","hu":"Panda","id":"Panda","it":"Panda","ja":"パンダ","nb_NO":"Panda","nl":"Panda","pt":"Panda","pt_BR":"Panda","ru":"Панда","si":null,"sk":"Panda","sq":"Panda","sr":"панда","sv":"Panda","szl":null,"tzm":null,"uk":"Панда","vi":"Gấu trúc","zh_Hans":"熊猫","zh_Hant":"熊貓"}},{"number":9,"emoji":"🐓","description":"Rooster","unicode":"U+1F413","translated_descriptions":{"ar":"دِيك","bg":"Петел","ca":"Gall","cs":"Kohout","de":"Hahn","eo":"Virkoko","es":"Gallo","et":"Kukk","fa":"خروس","fi":"Kukko","fr":"Coq","hr":"kokot","hu":"Kakas","id":"Ayam","it":"Gallo","ja":"ニワトリ","nb_NO":"Hane","nl":"Haan","pt":"Galo","pt_BR":"Galo","ru":"Петух","si":null,"sk":"Kohút","sq":"Këndes","sr":"петао","sv":"Tupp","szl":null,"tzm":"Ayaẓiḍ","uk":"Когут","vi":"Gà trống","zh_Hans":"公鸡","zh_Hant":"公雞"}},{"number":10,"emoji":"🐧","description":"Penguin","unicode":"U+1F427","translated_descriptions":{"ar":"بطريق","bg":"Пингвин","ca":"Pingüí","cs":"Tučňák","de":"Pinguin","eo":"Pingveno","es":"Pingüino","et":"Pingviin","fa":"پنگوئن","fi":"Pingviini","fr":"Manchot","hr":"pingvin","hu":"Pingvin","id":"Penguin","it":"Pinguino","ja":"ペンギン","nb_NO":"Pingvin","nl":"Pinguïn","pt":"Pinguim","pt_BR":"Pinguim","ru":"Пингвин","si":null,"sk":"Tučniak","sq":"Pinguin","sr":"пингвин","sv":"Pingvin","szl":null,"tzm":null,"uk":"Пінгвін","vi":"Chim cánh cụt","zh_Hans":"企鹅","zh_Hant":"企鵝"}},{"number":11,"emoji":"🐢","description":"Turtle","unicode":"U+1F422","translated_descriptions":{"ar":"سُلحفاة","bg":"Костенурка","ca":"Tortuga","cs":"Želva","de":"Schildkröte","eo":"Testudo","es":"Tortuga","et":"Kilpkonn","fa":"لاک‌پشت","fi":"Kilpikonna","fr":"Tortue","hr":"kornjača","hu":"Teknős","id":"Kura-Kura","it":"Tartaruga","ja":"亀","nb_NO":"Skilpadde","nl":"Schildpad","pt":"Tartaruga","pt_BR":"Tartaruga","ru":"Черепаха","si":null,"sk":"Korytnačka","sq":"Breshkë","sr":"корњача","sv":"Sköldpadda","szl":null,"tzm":"Ifker","uk":"Черепаха","vi":"Rùa","zh_Hans":"乌龟","zh_Hant":"烏龜"}},{"number":12,"emoji":"🐟","description":"Fish","unicode":"U+1F41F","translated_descriptions":{"ar":"سَمَكة","bg":"Риба","ca":"Peix","cs":"Ryba","de":"Fisch","eo":"Fiŝo","es":"Pez","et":"Kala","fa":"ماهی","fi":"Kala","fr":"Poisson","hr":"riba","hu":"Hal","id":"Ikan","it":"Pesce","ja":"魚","nb_NO":"Fisk","nl":"Vis","pt":"Peixe","pt_BR":"Peixe","ru":"Рыба","si":null,"sk":"Ryba","sq":"Peshk","sr":"риба","sv":"Fisk","szl":null,"tzm":"Aselm","uk":"Риба","vi":"Cá","zh_Hans":"鱼","zh_Hant":"魚"}},{"number":13,"emoji":"🐙","description":"Octopus","unicode":"U+1F419","translated_descriptions":{"ar":"أُخطُبُوط","bg":"Октопод","ca":"Pop","cs":"Chobotnice","de":"Oktopus","eo":"Polpo","es":"Pulpo","et":"Kaheksajalg","fa":"اختاپوس","fi":"Tursas","fr":"Poulpe","hr":"hobotnica","hu":"Polip","id":"Gurita","it":"Polpo","ja":"たこ","nb_NO":"Blekksprut","nl":"Octopus","pt":"Polvo","pt_BR":"Polvo","ru":"Осьминог","si":null,"sk":"Chobotnica","sq":"Oktapod","sr":"октопод","sv":"Bläckfisk","szl":null,"tzm":null,"uk":"Восьминіг","vi":"Bạch tuộc","zh_Hans":"章鱼","zh_Hant":"章魚"}},{"number":14,"emoji":"🦋","description":"Butterfly","unicode":"U+1F98B","translated_descriptions":{"ar":"فَرَاشَة","bg":"Пеперуда","ca":"Papallona","cs":"Motýl","de":"Schmetterling","eo":"Papilio","es":"Mariposa","et":"Liblikas","fa":"پروانه","fi":"Perhonen","fr":"Papillon","hr":"leptir","hu":"Pillangó","id":"Kupu-Kupu","it":"Farfalla","ja":"ちょうちょ","nb_NO":"Sommerfugl","nl":"Vlinder","pt":"Borboleta","pt_BR":"Borboleta","ru":"Бабочка","si":null,"sk":"Motýľ","sq":"Flutur","sr":"лептир","sv":"Fjäril","szl":null,"tzm":null,"uk":"Метелик","vi":"Bướm","zh_Hans":"蝴蝶","zh_Hant":"蝴蝶"}},{"number":15,"emoji":"🌷","description":"Flower","unicode":"U+1F337","translated_descriptions":{"ar":"زَهرَة","bg":"Цвете","ca":"Flor","cs":"Květina","de":"Blume","eo":"Floro","es":"Flor","et":"Lill","fa":"گل","fi":"Kukka","fr":"Fleur","hr":"svijet","hu":"Virág","id":"Bunga","it":"Fiore","ja":"花","nb_NO":"Blomst","nl":"Bloem","pt":"Flor","pt_BR":"Flor","ru":"Цветок","si":null,"sk":"Kvet","sq":"Lule","sr":"цвет","sv":"Blomma","szl":null,"tzm":null,"uk":"Квітка","vi":"Hoa","zh_Hans":"花","zh_Hant":"花"}},{"number":16,"emoji":"🌳","description":"Tree","unicode":"U+1F333","translated_descriptions":{"ar":"شَجَرَة","bg":"Дърво","ca":"Arbre","cs":"Strom","de":"Baum","eo":"Arbo","es":"Árbol","et":"Puu","fa":"درخت","fi":"Puu","fr":"Arbre","hr":"drvo","hu":"Fa","id":"Pohon","it":"Albero","ja":"木","nb_NO":"Tre","nl":"Boom","pt":"Árvore","pt_BR":"Árvore","ru":"Дерево","si":null,"sk":"Strom","sq":"Pemë","sr":"дрво","sv":"Träd","szl":null,"tzm":"Aseklu","uk":"Дерево","vi":"Cây","zh_Hans":"树","zh_Hant":"樹"}},{"number":17,"emoji":"🌵","description":"Cactus","unicode":"U+1F335","translated_descriptions":{"ar":"صبار","bg":"Кактус","ca":"Cactus","cs":"Kaktus","de":"Kaktus","eo":"Kakto","es":"Cactus","et":"Kaktus","fa":"کاکتوس","fi":"Kaktus","fr":"Cactus","hr":"kaktus","hu":"Kaktusz","id":"Kaktus","it":"Cactus","ja":"サボテン","nb_NO":"Kaktus","nl":"Cactus","pt":"Cato","pt_BR":"Cacto","ru":"Кактус","si":null,"sk":"Kaktus","sq":"Kaktus","sr":"кактус","sv":"Kaktus","szl":null,"tzm":null,"uk":"Кактус","vi":"Xương rồng","zh_Hans":"仙人掌","zh_Hant":"仙人掌"}},{"number":18,"emoji":"🍄","description":"Mushroom","unicode":"U+1F344","translated_descriptions":{"ar":"فُطر","bg":"Гъба","ca":"Bolet","cs":"Houba","de":"Pilz","eo":"Fungo","es":"Seta","et":"Seen","fa":"قارچ","fi":"Sieni","fr":"Champignon","hr":"gljiva","hu":"Gomba","id":"Jamur","it":"Fungo","ja":"きのこ","nb_NO":"Sopp","nl":"Paddenstoel","pt":"Cogumelo","pt_BR":"Cogumelo","ru":"Гриб","si":null,"sk":"Huba","sq":"Kërpudhë","sr":"печурка","sv":"Svamp","szl":null,"tzm":"Agursel","uk":"Гриб","vi":"Nấm","zh_Hans":"蘑菇","zh_Hant":"蘑菇"}},{"number":19,"emoji":"🌏","description":"Globe","unicode":"U+1F30F","translated_descriptions":{"ar":"كُرَةٌ أرضِيَّة","bg":"Глобус","ca":"Globus terraqüi","cs":"Zeměkoule","de":"Globus","eo":"Globo","es":"Globo","et":"Maakera","fa":"زمین","fi":"Maapallo","fr":"Globe","hr":"Globus","hu":"Földgömb","id":"Bola Dunia","it":"Globo","ja":"地球","nb_NO":"Globus","nl":"Wereldbol","pt":"Globo","pt_BR":"Globo","ru":"Глобус","si":null,"sk":"Zemeguľa","sq":"Rruzull","sr":"глобус","sv":"Jordklot","szl":null,"tzm":null,"uk":"Глобус","vi":"Địa cầu","zh_Hans":"地球","zh_Hant":"地球"}},{"number":20,"emoji":"🌙","description":"Moon","unicode":"U+1F319","translated_descriptions":{"ar":"قَمَر","bg":"Луна","ca":"Lluna","cs":"Měsíc","de":"Mond","eo":"Luno","es":"Luna","et":"Kuu","fa":"ماه","fi":"Kuu","fr":"Lune","hr":"mjesec","hu":"Hold","id":"Bulan","it":"Luna","ja":"月","nb_NO":"Måne","nl":"Maan","pt":"Lua","pt_BR":"Lua","ru":"Луна","si":null,"sk":"Mesiac","sq":"Hënë","sr":"месец","sv":"Måne","szl":null,"tzm":"Ayyur","uk":"Місяць","vi":"Mặt trăng","zh_Hans":"月亮","zh_Hant":"月亮"}},{"number":21,"emoji":"☁️","description":"Cloud","unicode":"U+2601U+FE0F","translated_descriptions":{"ar":"سَحابَة","bg":"Облак","ca":"Núvol","cs":"Mrak","de":"Wolke","eo":"Nubo","es":"Nube","et":"Pilv","fa":"ابر","fi":"Pilvi","fr":"Nuage","hr":"oblak","hu":"Felhő","id":"Awan","it":"Nuvola","ja":"雲","nb_NO":"Sky","nl":"Wolk","pt":"Nuvem","pt_BR":"Nuvem","ru":"Облако","si":null,"sk":"Oblak","sq":"Re","sr":"облак","sv":"Moln","szl":null,"tzm":null,"uk":"Хмара","vi":"Mây","zh_Hans":"云","zh_Hant":"雲朵"}},{"number":22,"emoji":"🔥","description":"Fire","unicode":"U+1F525","translated_descriptions":{"ar":"نار","bg":"Огън","ca":"Foc","cs":"Oheň","de":"Feuer","eo":"Fajro","es":"Fuego","et":"Tuli","fa":"آتش","fi":"Tuli","fr":"Feu","hr":"vatra","hu":"Tűz","id":"Api","it":"Fuoco","ja":"炎","nb_NO":"Flamme","nl":"Vuur","pt":"Fogo","pt_BR":"Fogo","ru":"Огонь","si":null,"sk":"Oheň","sq":"Zjarr","sr":"ватра","sv":"Eld","szl":null,"tzm":"Timessi","uk":"Вогонь","vi":"Lửa","zh_Hans":"火","zh_Hant":"火"}},{"number":23,"emoji":"🍌","description":"Banana","unicode":"U+1F34C","translated_descriptions":{"ar":"مَوزَة","bg":"Банан","ca":"Plàtan","cs":"Banán","de":"Banane","eo":"Banano","es":"Plátano","et":"Banaan","fa":"موز","fi":"Banaani","fr":"Banane","hr":"banana","hu":"Banán","id":"Pisang","it":"Banana","ja":"バナナ","nb_NO":"Banan","nl":"Banaan","pt":"Banana","pt_BR":"Banana","ru":"Банан","si":null,"sk":"Banán","sq":"Banane","sr":"банана","sv":"Banan","szl":null,"tzm":"Tabanant","uk":"Банан","vi":"Chuối","zh_Hans":"香蕉","zh_Hant":"香蕉"}},{"number":24,"emoji":"🍎","description":"Apple","unicode":"U+1F34E","translated_descriptions":{"ar":"تُفَّاحَة","bg":"Ябълка","ca":"Poma","cs":"Jablko","de":"Apfel","eo":"Pomo","es":"Manzana","et":"Õun","fa":"سیب","fi":"Omena","fr":"Pomme","hr":"jabuka","hu":"Alma","id":"Apel","it":"Mela","ja":"リンゴ","nb_NO":"Eple","nl":"Appel","pt":"Maçã","pt_BR":"Maçã","ru":"Яблоко","si":null,"sk":"Jablko","sq":"Mollë","sr":"јабука","sv":"Äpple","szl":null,"tzm":"Tadeffuyt","uk":"Яблуко","vi":"Táo","zh_Hans":"苹果","zh_Hant":"蘋果"}},{"number":25,"emoji":"🍓","description":"Strawberry","unicode":"U+1F353","translated_descriptions":{"ar":"فَراوِلَة","bg":"Ягода","ca":"Maduixa","cs":"Jahoda","de":"Erdbeere","eo":"Frago","es":"Fresa","et":"Maasikas","fa":"توت فرنگی","fi":"Mansikka","fr":"Fraise","hr":"jagoda","hu":"Eper","id":"Stroberi","it":"Fragola","ja":"いちご","nb_NO":"Jordbær","nl":"Aardbei","pt":"Morango","pt_BR":"Morango","ru":"Клубника","si":null,"sk":"Jahoda","sq":"Luleshtrydhe","sr":"јагода","sv":"Jordgubbe","szl":null,"tzm":null,"uk":"Полуниця","vi":"Dâu tây","zh_Hans":"草莓","zh_Hant":"草莓"}},{"number":26,"emoji":"🌽","description":"Corn","unicode":"U+1F33D","translated_descriptions":{"ar":"ذُرَة","bg":"Царевица","ca":"Blat de moro","cs":"Kukuřice","de":"Mais","eo":"Maizo","es":"Maíz","et":"Mais","fa":"ذرت","fi":"Maissi","fr":"Maïs","hr":"kukuruza","hu":"Kukorica","id":"Jagung","it":"Mais","ja":"とうもろこし","nb_NO":"Mais","nl":"Maïs","pt":"Milho","pt_BR":"Milho","ru":"Кукуруза","si":null,"sk":"Kukurica","sq":"Misër","sr":"кукуруз","sv":"Majs","szl":null,"tzm":null,"uk":"Кукурудза","vi":"Bắp","zh_Hans":"玉米","zh_Hant":"玉米"}},{"number":27,"emoji":"🍕","description":"Pizza","unicode":"U+1F355","translated_descriptions":{"ar":"بِيتزا","bg":"Пица","ca":"Pizza","cs":"Pizza","de":"Pizza","eo":"Pico","es":"Pizza","et":"Pitsa","fa":"پیتزا","fi":"Pizza","fr":"Pizza","hr":"pizza","hu":"Pizza","id":"Pizza","it":"Pizza","ja":"ピザ","nb_NO":"Pizza","nl":"Pizza","pt":"Piza","pt_BR":"Pizza","ru":"Пицца","si":null,"sk":"Pizza","sq":"Picë","sr":"пица","sv":"Pizza","szl":null,"tzm":null,"uk":"Піца","vi":"Pizza","zh_Hans":"披萨","zh_Hant":"披薩"}},{"number":28,"emoji":"🎂","description":"Cake","unicode":"U+1F382","translated_descriptions":{"ar":"كَعكَة","bg":"Торта","ca":"Pastís","cs":"Dort","de":"Kuchen","eo":"Torto","es":"Tarta","et":"Kook","fa":"کیک","fi":"Kakku","fr":"Gâteau","hr":"torta","hu":"Süti","id":"Kue","it":"Torta","ja":"ケーキ","nb_NO":"Kake","nl":"Taart","pt":"Bolo","pt_BR":"Bolo","ru":"Торт","si":null,"sk":"Torta","sq":"Tortë","sr":"торта","sv":"Tårta","szl":null,"tzm":null,"uk":"Пиріг","vi":"Bánh","zh_Hans":"蛋糕","zh_Hant":"蛋糕"}},{"number":29,"emoji":"❤️","description":"Heart","unicode":"U+2764U+FE0F","translated_descriptions":{"ar":"قَلب","bg":"Сърце","ca":"Cor","cs":"Srdce","de":"Herz","eo":"Koro","es":"Corazón","et":"Süda","fa":"قلب","fi":"Sydän","fr":"Cœur","hr":"srca","hu":"Szív","id":"Hati","it":"Cuore","ja":"ハート","nb_NO":"Hjerte","nl":"Hart","pt":"Coração","pt_BR":"Coração","ru":"Сердце","si":null,"sk":"Srdce","sq":"Zemër","sr":"срце","sv":"Hjärta","szl":null,"tzm":"Ul","uk":"Серце","vi":"Tim","zh_Hans":"心","zh_Hant":"愛心"}},{"number":30,"emoji":"😀","description":"Smiley","unicode":"U+1F600","translated_descriptions":{"ar":"اِبتِسَامَة","bg":"Усмивка","ca":"Somrient","cs":"Smajlík","de":"Lächeln","eo":"Rideto","es":"Emoticono","et":"Smaili","fa":"خنده","fi":"Hymynaama","fr":"Sourire","hr":"smajlića","hu":"Mosoly","id":"Senyuman","it":"Faccina sorridente","ja":"スマイル","nb_NO":"Smilefjes","nl":"Smiley","pt":"Sorriso","pt_BR":"Sorriso","ru":"Улыбка","si":null,"sk":"Smajlík","sq":"Emotikon","sr":"смајли","sv":"Smiley","szl":null,"tzm":null,"uk":"Посмішка","vi":"Mặt cười","zh_Hans":"笑脸","zh_Hant":"笑臉"}},{"number":31,"emoji":"🤖","description":"Robot","unicode":"U+1F916","translated_descriptions":{"ar":"رُوبُوت","bg":"Робот","ca":"Robot","cs":"Robot","de":"Roboter","eo":"Roboto","es":"Robot","et":"Robot","fa":"ربات","fi":"Robotti","fr":"Robot","hr":"robot","hu":"Robot","id":"Robot","it":"Robot","ja":"ロボット","nb_NO":"Robot","nl":"Robot","pt":"Robô","pt_BR":"Robô","ru":"Робот","si":null,"sk":"Robot","sq":"Robot","sr":"робот","sv":"Robot","szl":null,"tzm":"Aṛubu","uk":"Робот","vi":"Rô-bô","zh_Hans":"机器人","zh_Hant":"機器人"}},{"number":32,"emoji":"🎩","description":"Hat","unicode":"U+1F3A9","translated_descriptions":{"ar":"قُبَّعَة","bg":"Шапка","ca":"Barret","cs":"Klobouk","de":"Hut","eo":"Ĉapelo","es":"Sombrero","et":"Kübar","fa":"کلاه","fi":"Hattu","fr":"Chapeau","hr":"kapa","hu":"Kalap","id":"Topi","it":"Cappello","ja":"帽子","nb_NO":"Hatt","nl":"Hoed","pt":"Chapéu","pt_BR":"Chapéu","ru":"Шляпа","si":null,"sk":"Klobúk","sq":"Kapë","sr":"шешир","sv":"Hatt","szl":null,"tzm":"Taraza","uk":"Капелюх","vi":"Mũ","zh_Hans":"帽子","zh_Hant":"帽子"}},{"number":33,"emoji":"👓","description":"Glasses","unicode":"U+1F453","translated_descriptions":{"ar":"نَظَّارَة","bg":"Очила","ca":"Ulleres","cs":"Brýle","de":"Brille","eo":"Okulvitroj","es":"Gafas","et":"Prillid","fa":"عینک","fi":"Silmälasit","fr":"Lunettes","hr":"naočale","hu":"Szemüveg","id":"Kacamata","it":"Occhiali","ja":"めがね","nb_NO":"Briller","nl":"Bril","pt":"Óculos","pt_BR":"Óculos","ru":"Очки","si":null,"sk":"Okuliare","sq":"Syze","sr":"наочаре","sv":"Glasögon","szl":null,"tzm":null,"uk":"Окуляри","vi":"Kính mắt","zh_Hans":"眼镜","zh_Hant":"眼鏡"}},{"number":34,"emoji":"🔧","description":"Spanner","unicode":"U+1F527","translated_descriptions":{"ar":"مِفتَاحُ رَبط","bg":"Гаечен ключ","ca":"Clau anglesa","cs":"Klíč","de":"Schraubenschlüssel","eo":"Ŝraŭbŝlosilo","es":"Llave inglesa","et":"Mutrivõti","fa":"آچار","fi":"Kiintoavain","fr":"Clé à molette","hr":"ključ","hu":"Csavarkulcs","id":"Kunci Bengkel","it":"Chiave inglese","ja":"スパナ","nb_NO":"Fastnøkkel","nl":"Moersleutel","pt":"Chave inglesa","pt_BR":"Chave inglesa","ru":"Ключ","si":null,"sk":"Vidlicový kľúč","sq":"Çelës","sr":"кључ","sv":"Skruvnyckel","szl":null,"tzm":null,"uk":"Гайковий ключ","vi":"Cờ-lê","zh_Hans":"扳手","zh_Hant":"扳手"}},{"number":35,"emoji":"🎅","description":"Santa","unicode":"U+1F385","translated_descriptions":{"ar":"سانتا","bg":"Дядо Коледа","ca":"Pare Noél","cs":"Mikuláš","de":"Weihnachtsmann","eo":"Kristnaska viro","es":"Papá Noel","et":"Jõuluvana","fa":"بابا نوئل","fi":"Joulupukki","fr":"Père Noël","hr":"deda Mraz","hu":"Télapó","id":"Santa","it":"Babbo Natale","ja":"サンタ","nb_NO":"Julenisse","nl":"Kerstman","pt":"Pai Natal","pt_BR":"Papai-noel","ru":"Санта","si":null,"sk":"Mikuláš","sq":"Babagjyshi i Vitit të Ri","sr":"деда Мраз","sv":"Tomte","szl":null,"tzm":null,"uk":"Санта Клаус","vi":"ông già Nô-en","zh_Hans":"圣诞老人","zh_Hant":"聖誕老人"}},{"number":36,"emoji":"👍","description":"Thumbs Up","unicode":"U+1F44D","translated_descriptions":{"ar":"رَفعُ إِبهَام","bg":"Палец нагоре","ca":"Polzes amunt","cs":"Palec nahoru","de":"Daumen Hoch","eo":"Dikfingro supren","es":"Pulgar arriba","et":"Pöidlad püsti","fa":"لایک","fi":"Peukalo ylös","fr":"Pouce en l’air","hr":"palac gore","hu":"Hüvelykujj fel","id":"Jempol","it":"Pollice alzato","ja":"いいね","nb_NO":"Tommel Opp","nl":"Duim omhoog","pt":"Polegar para cima","pt_BR":"Joinha","ru":"Большой палец вверх","si":null,"sk":"Palec nahor","sq":null,"sr":"палчић горе","sv":"Tummen upp","szl":null,"tzm":null,"uk":"Великий палець вгору","vi":"Thích","zh_Hans":"赞","zh_Hant":"讚"}},{"number":37,"emoji":"☂️","description":"Umbrella","unicode":"U+2602U+FE0F","translated_descriptions":{"ar":"مِظَلَّة","bg":"Чадър","ca":"Paraigües","cs":"Deštník","de":"Regenschirm","eo":"Ombrelo","es":"Paraguas","et":"Vihmavari","fa":"چتر","fi":"Sateenvarjo","fr":"Parapluie","hr":"kišobran","hu":"Esernyő","id":"Payung","it":"Ombrello","ja":"傘","nb_NO":"Paraply","nl":"Paraplu","pt":"Guarda-chuva","pt_BR":"Guarda-chuva","ru":"Зонт","si":null,"sk":"Dáždnik","sq":"Ombrellë","sr":"кишобран","sv":"Paraply","szl":null,"tzm":null,"uk":"Парасолька","vi":"Cái ô","zh_Hans":"伞","zh_Hant":"雨傘"}},{"number":38,"emoji":"⌛","description":"Hourglass","unicode":"U+231B","translated_descriptions":{"ar":"سَاعَةٌ رَملِيَّة","bg":"Пясъчен часовник","ca":"Rellotge de sorra","cs":"Přesýpací hodiny","de":"Sanduhr","eo":"Sablohorloĝo","es":"Reloj de arena","et":"Liivakell","fa":"ساعت شنی","fi":"Tiimalasi","fr":"Sablier","hr":"pješčani sat","hu":"Homokóra","id":"Jam Pasir","it":"Clessidra","ja":"砂時計","nb_NO":"Timeglass","nl":"Zandloper","pt":"Ampulheta","pt_BR":"Ampulheta","ru":"Песочные часы","si":null,"sk":"Presýpacie hodiny","sq":"Klepsidër","sr":"пешчаник","sv":"Timglas","szl":null,"tzm":null,"uk":"Пісковий годинник","vi":"Đồng hồ cát","zh_Hans":"沙漏","zh_Hant":"沙漏"}},{"number":39,"emoji":"⏰","description":"Clock","unicode":"U+23F0","translated_descriptions":{"ar":"سَاعَة","bg":"Часовник","ca":"Rellotge","cs":"Hodiny","de":"Uhr","eo":"Horloĝo","es":"Reloj","et":"Kell","fa":"ساعت","fi":"Pöytäkello","fr":"Réveil","hr":"sat","hu":"Óra","id":"Jam","it":"Orologio","ja":"時計","nb_NO":"Klokke","nl":"Wekker","pt":"Relógio","pt_BR":"Relógio","ru":"Часы","si":null,"sk":"Budík","sq":"Sahat","sr":"сат","sv":"Klocka","szl":null,"tzm":null,"uk":"Годинник","vi":"Đồng hồ","zh_Hans":"时钟","zh_Hant":"時鐘"}},{"number":40,"emoji":"🎁","description":"Gift","unicode":"U+1F381","translated_descriptions":{"ar":"هَدِيَّة","bg":"Подарък","ca":"Regal","cs":"Dárek","de":"Geschenk","eo":"Donaco","es":"Regalo","et":"Kingitus","fa":"هدیه","fi":"Lahja","fr":"Cadeau","hr":"poklon","hu":"Ajándék","id":"Kado","it":"Regalo","ja":"ギフト","nb_NO":"Gave","nl":"Geschenk","pt":"Presente","pt_BR":"Presente","ru":"Подарок","si":null,"sk":"Darček","sq":"Dhuratë","sr":"поклон","sv":"Present","szl":null,"tzm":null,"uk":"Подарунок","vi":"Quà tặng","zh_Hans":"礼物","zh_Hant":"禮物"}},{"number":41,"emoji":"💡","description":"Light Bulb","unicode":"U+1F4A1","translated_descriptions":{"ar":"مِصبَاح","bg":"Лампа","ca":"Bombeta","cs":"Žárovka","de":"Glühbirne","eo":"Lampo","es":"Bombilla","et":"Lambipirn","fa":"لامپ","fi":"Hehkulamppu","fr":"Ampoule","hr":"žarulja","hu":"Égő","id":"Bohlam Lampu","it":"Lampadina","ja":"電球","nb_NO":"Lyspære","nl":"Gloeilamp","pt":"Lâmpada","pt_BR":"Lâmpada","ru":"Лампочка","si":null,"sk":"Žiarovka","sq":"Llambë","sr":"сијалица","sv":"Lampa","szl":null,"tzm":null,"uk":"Лампочка","vi":"Bóng đèn tròn","zh_Hans":"灯泡","zh_Hant":"燈泡"}},{"number":42,"emoji":"📕","description":"Book","unicode":"U+1F4D5","translated_descriptions":{"ar":"كِتَاب","bg":"Книга","ca":"Llibre","cs":"Kniha","de":"Buch","eo":"Libro","es":"Libro","et":"Raamat","fa":"کتاب","fi":"Kirja","fr":"Livre","hr":"knjiga","hu":"Könyv","id":"Buku","it":"Libro","ja":"本","nb_NO":"Bok","nl":"Boek","pt":"Livro","pt_BR":"Livro","ru":"Книга","si":null,"sk":"Kniha","sq":"Libër","sr":"књига","sv":"Bok","szl":null,"tzm":"Adlis","uk":"Книга","vi":"Sách","zh_Hans":"书","zh_Hant":"書"}},{"number":43,"emoji":"✏️","description":"Pencil","unicode":"U+270FU+FE0F","translated_descriptions":{"ar":"قَلَمُ رَصاص","bg":"Молив","ca":"Llapis","cs":"Tužka","de":"Bleistift","eo":"Krajono","es":"Lápiz","et":"Pliiats","fa":"مداد","fi":"Lyijykynä","fr":"Crayon","hr":"olovka","hu":"Ceruza","id":"Pensil","it":"Matita","ja":"鉛筆","nb_NO":"Blyant","nl":"Potlood","pt":"Lápis","pt_BR":"Lápis","ru":"Карандаш","si":null,"sk":"Ceruzka","sq":"Laps","sr":"оловка","sv":"Penna","szl":null,"tzm":null,"uk":"Олівець","vi":"Viết chì","zh_Hans":"铅笔","zh_Hant":"鉛筆"}},{"number":44,"emoji":"📎","description":"Paperclip","unicode":"U+1F4CE","translated_descriptions":{"ar":"مِشبَكُ وَرَق","bg":"Кламер","ca":"Clip","cs":"Sponka","de":"Büroklammer","eo":"Paperkuntenilo","es":"Clip","et":"Kirjaklamber","fa":"گیره کاغذ","fi":"Paperiliitin","fr":"Trombone","hr":"spajalica","hu":"Gémkapocs","id":"Klip Kertas","it":"Graffetta","ja":"クリップ","nb_NO":"BInders","nl":"Papierklemmetje","pt":"Clipe","pt_BR":"Clipe de papel","ru":"Скрепка","si":null,"sk":"Kancelárska sponka","sq":"Kapëse","sr":"спајалица","sv":"Gem","szl":null,"tzm":null,"uk":"Спиначка","vi":"Kẹp giấy","zh_Hans":"回形针","zh_Hant":"迴紋針"}},{"number":45,"emoji":"✂️","description":"Scissors","unicode":"U+2702U+FE0F","translated_descriptions":{"ar":"مِقَصّ","bg":"Ножици","ca":"Tisores","cs":"Nůžky","de":"Schere","eo":"Tondilo","es":"Tijeras","et":"Käärid","fa":"قیچی","fi":"Sakset","fr":"Ciseaux","hr":"škare","hu":"Olló","id":"Gunting","it":"Forbici","ja":"はさみ","nb_NO":"Saks","nl":"Schaar","pt":"Tesoura","pt_BR":"Tesoura","ru":"Ножницы","si":null,"sk":"Nožnice","sq":"Gërshërë","sr":"маказе","sv":"Sax","szl":null,"tzm":null,"uk":"Ножиці","vi":"Cái kéo","zh_Hans":"剪刀","zh_Hant":"剪刀"}},{"number":46,"emoji":"🔒","description":"Lock","unicode":"U+1F512","translated_descriptions":{"ar":"قُفل","bg":"Катинар","ca":"Cadenat","cs":"Zámek","de":"Schloss","eo":"Seruro","es":"Candado","et":"Lukk","fa":"قفل","fi":"Lukko","fr":"Cadenas","hr":"zaključati","hu":"Lakat","id":"Gembok","it":"Lucchetto","ja":"錠前","nb_NO":"Lås","nl":"Slot","pt":"Cadeado","pt_BR":"Cadeado","ru":"Замок","si":null,"sk":"Zámka","sq":"Dry","sr":"катанац","sv":"Lås","szl":null,"tzm":null,"uk":"Замок","vi":"Ổ khóa","zh_Hans":"锁","zh_Hant":"鎖頭"}},{"number":47,"emoji":"🔑","description":"Key","unicode":"U+1F511","translated_descriptions":{"ar":"مِفتَاح","bg":"Ключ","ca":"Clau","cs":"Klíč ke dveřím","de":"Schlüssel","eo":"Ŝlosilo","es":"Llave","et":"Võti","fa":"کلید","fi":"Avain","fr":"Clé","hr":"ključ","hu":"Kulcs","id":"Kunci","it":"Chiave","ja":"鍵","nb_NO":"Nøkkel","nl":"Sleutel","pt":"Chave","pt_BR":"Chave","ru":"Ключ","si":null,"sk":"Kľúč","sq":"Çelës","sr":"кључ","sv":"Nyckel","szl":null,"tzm":"Tasarut","uk":"Ключ","vi":"Chìa khóa","zh_Hans":"钥匙","zh_Hant":"鑰匙"}},{"number":48,"emoji":"🔨","description":"Hammer","unicode":"U+1F528","translated_descriptions":{"ar":"مِطرَقَة","bg":"Чук","ca":"Martell","cs":"Kladivo","de":"Hammer","eo":"Martelo","es":"Martillo","et":"Haamer","fa":"چکش","fi":"Vasara","fr":"Marteau","hr":"čekić","hu":"Kalapács","id":"Palu","it":"Martello","ja":"金槌","nb_NO":"Hammer","nl":"Hamer","pt":"Martelo","pt_BR":"Martelo","ru":"Молоток","si":null,"sk":"Kladivo","sq":"Çekiç","sr":"чекић","sv":"Hammare","szl":null,"tzm":null,"uk":"Молоток","vi":"Búa","zh_Hans":"锤子","zh_Hant":"鎚子"}},{"number":49,"emoji":"☎️","description":"Telephone","unicode":"U+260EU+FE0F","translated_descriptions":{"ar":"تِلِفُون","bg":"Телефон","ca":"Telèfon","cs":"Telefon","de":"Telefon","eo":"Telefono","es":"Teléfono","et":"Telefon","fa":"تلفن","fi":"Puhelin","fr":"Téléphone","hr":"telefon","hu":"Telefon","id":"Telepon","it":"Telefono","ja":"電話機","nb_NO":"Telefon","nl":"Telefoon","pt":"Telefone","pt_BR":"Telefone","ru":"Телефон","si":null,"sk":"Telefón","sq":"Telefon","sr":"телефон","sv":"Telefon","szl":null,"tzm":"Atilifun","uk":"Телефон","vi":"Điện thoại","zh_Hans":"电话","zh_Hant":"電話"}},{"number":50,"emoji":"🏁","description":"Flag","unicode":"U+1F3C1","translated_descriptions":{"ar":"عَلَم","bg":"Флаг","ca":"Bandera","cs":"Vlajka","de":"Flagge","eo":"Flago","es":"Bandera","et":"Lipp","fa":"پرچم","fi":"Lippu","fr":"Drapeau","hr":"zastava","hu":"Zászló","id":"Bendera","it":"Bandiera","ja":"旗","nb_NO":"Flagg","nl":"Vlag","pt":"Bandeira","pt_BR":"Bandeira","ru":"Флаг","si":null,"sk":"Zástava","sq":"Flamur","sr":"застава","sv":"Flagga","szl":null,"tzm":"Acenyal","uk":"Прапор","vi":"Lá cờ","zh_Hans":"旗帜","zh_Hant":"旗幟"}},{"number":51,"emoji":"🚂","description":"Train","unicode":"U+1F682","translated_descriptions":{"ar":"قِطَار","bg":"Влак","ca":"Tren","cs":"Vlak","de":"Zug","eo":"Vagonaro","es":"Tren","et":"Rong","fa":"قطار","fi":"Juna","fr":"Train","hr":"vlak","hu":"Vonat","id":"Kereta Api","it":"Treno","ja":"電車","nb_NO":"Tog","nl":"Trein","pt":"Comboio","pt_BR":"Trem","ru":"Поезд","si":null,"sk":"Vlak","sq":"Tren","sr":"воз","sv":"Tåg","szl":null,"tzm":null,"uk":"Потяг","vi":"Xe lửa","zh_Hans":"火车","zh_Hant":"火車"}},{"number":52,"emoji":"🚲","description":"Bicycle","unicode":"U+1F6B2","translated_descriptions":{"ar":"دَرّاجَة","bg":"Колело","ca":"Bicicleta","cs":"Kolo","de":"Fahrrad","eo":"Biciklo","es":"Bicicleta","et":"Jalgratas","fa":"دوچرخه","fi":"Polkupyörä","fr":"Vélo","hr":"bicikl","hu":"Kerékpár","id":"Sepeda","it":"Bicicletta","ja":"自転車","nb_NO":"Sykkel","nl":"Fiets","pt":"Bicicleta","pt_BR":"Bicicleta","ru":"Велосипед","si":null,"sk":"Bicykel","sq":"Biçikletë","sr":"бицикл","sv":"Cykel","szl":null,"tzm":null,"uk":"Велосипед","vi":"Xe đạp","zh_Hans":"自行车","zh_Hant":"腳踏車"}},{"number":53,"emoji":"✈️","description":"Aeroplane","unicode":"U+2708U+FE0F","translated_descriptions":{"ar":"طَائِرة","bg":"Самолет","ca":"Avió","cs":"Letadlo","de":"Flugzeug","eo":"Aviadilo","es":"Avión","et":"Lennuk","fa":"هواپیما","fi":"Lentokone","fr":"Avion","hr":"avion","hu":"Repülő","id":"Pesawat","it":"Aeroplano","ja":"飛行機","nb_NO":"Fly","nl":"Vliegtuig","pt":"Avião","pt_BR":"Avião","ru":"Самолет","si":null,"sk":"Lietadlo","sq":"Avion","sr":"авион","sv":"Flygplan","szl":null,"tzm":null,"uk":"Літак","vi":"Máy bay","zh_Hans":"飞机","zh_Hant":"飛機"}},{"number":54,"emoji":"🚀","description":"Rocket","unicode":"U+1F680","translated_descriptions":{"ar":"صَارُوخ","bg":"Ракета","ca":"Coet","cs":"Raketa","de":"Rakete","eo":"Raketo","es":"Cohete","et":"Rakett","fa":"موشک","fi":"Raketti","fr":"Fusée","hr":"raketa","hu":"Rakáta","id":"Roket","it":"Razzo","ja":"ロケット","nb_NO":"Rakett","nl":"Raket","pt":"Foguetão","pt_BR":"Foguete","ru":"Ракета","si":null,"sk":"Raketa","sq":"Raketë","sr":"ракета","sv":"Raket","szl":null,"tzm":null,"uk":"Ракета","vi":"Tên lửa","zh_Hans":"火箭","zh_Hant":"火箭"}},{"number":55,"emoji":"🏆","description":"Trophy","unicode":"U+1F3C6","translated_descriptions":{"ar":"كَأسُ النَّصر","bg":"Трофей","ca":"Trofeu","cs":"Pohár","de":"Pokal","eo":"Trofeo","es":"Trofeo","et":"Auhind","fa":"جام","fi":"Palkinto","fr":"Trophée","hr":"trofej","hu":"Trófea","id":"Piala","it":"Trofeo","ja":"トロフィー","nb_NO":"Pokal","nl":"Trofee","pt":"Troféu","pt_BR":"Troféu","ru":"Кубок","si":null,"sk":"Trofej","sq":"Trofe","sr":"пехар","sv":"Trofé","szl":null,"tzm":null,"uk":"Приз","vi":"Cúp","zh_Hans":"奖杯","zh_Hant":"獎盃"}},{"number":56,"emoji":"⚽","description":"Ball","unicode":"U+26BD","translated_descriptions":{"ar":"كُرَة","bg":"Топка","ca":"Pilota","cs":"Míč","de":"Ball","eo":"Pilko","es":"Bola","et":"Pall","fa":"توپ","fi":"Pallo","fr":"Ballon","hr":"lopta","hu":"Labda","id":"Bola","it":"Palla","ja":"ボール","nb_NO":"Ball","nl":"Bal","pt":"Bola","pt_BR":"Bola","ru":"Мяч","si":null,"sk":"Lopta","sq":"Top","sr":"лопта","sv":"Boll","szl":null,"tzm":"Tcama","uk":"М'яч","vi":"Banh","zh_Hans":"球","zh_Hant":"足球"}},{"number":57,"emoji":"🎸","description":"Guitar","unicode":"U+1F3B8","translated_descriptions":{"ar":"غيتار","bg":"Китара","ca":"Guitarra","cs":"Kytara","de":"Gitarre","eo":"Gitaro","es":"Guitarra","et":"Kitarr","fa":"گیتار","fi":"Kitara","fr":"Guitare","hr":"gitara","hu":"Gitár","id":"Gitar","it":"Chitarra","ja":"ギター","nb_NO":"Gitar","nl":"Gitaar","pt":"Guitarra","pt_BR":"Guitarra","ru":"Гитара","si":null,"sk":"Gitara","sq":"Kitarë","sr":"гитара","sv":"Gitarr","szl":null,"tzm":"Agiṭaṛ","uk":"Гітара","vi":"Ghi-ta","zh_Hans":"吉他","zh_Hant":"吉他"}},{"number":58,"emoji":"🎺","description":"Trumpet","unicode":"U+1F3BA","translated_descriptions":{"ar":"بُوق","bg":"Тромпет","ca":"Trompeta","cs":"Trumpeta","de":"Trompete","eo":"Trumpeto","es":"Trompeta","et":"Trompet","fa":"شیپور","fi":"Trumpetti","fr":"Trompette","hr":"truba","hu":"Trombita","id":"Terompet","it":"Trombetta","ja":"トランペット","nb_NO":"Trompet","nl":"Trompet","pt":"Trompete","pt_BR":"Trombeta","ru":"Труба","si":null,"sk":"Trúbka","sq":"Trombë","sr":"труба","sv":"Trumpet","szl":null,"tzm":null,"uk":"Труба","vi":"Kèn","zh_Hans":"喇叭","zh_Hant":"喇叭"}},{"number":59,"emoji":"🔔","description":"Bell","unicode":"U+1F514","translated_descriptions":{"ar":"جَرَس","bg":"Звънец","ca":"Campana","cs":"Zvonek","de":"Glocke","eo":"Sonorilo","es":"Campana","et":"Kelluke","fa":"زنگ","fi":"Soittokello","fr":"Cloche","hr":"zvono","hu":"Harang","id":"Lonceng","it":"Campana","ja":"ベル","nb_NO":"Bjelle","nl":"Bel","pt":"Sino","pt_BR":"Sino","ru":"Колокол","si":null,"sk":"Zvonec","sq":"Kambanë","sr":"звоно","sv":"Bjällra","szl":null,"tzm":null,"uk":"Дзвін","vi":"Chuông","zh_Hans":"铃铛","zh_Hant":"鈴鐺"}},{"number":60,"emoji":"⚓","description":"Anchor","unicode":"U+2693","translated_descriptions":{"ar":"مِرسَاة","bg":"Котва","ca":"Àncora","cs":"Kotva","de":"Anker","eo":"Ankro","es":"Ancla","et":"Ankur","fa":"لنگر","fi":"Ankkuri","fr":"Ancre","hr":"sidro","hu":"Horgony","id":"Jangkar","it":"Ancora","ja":"いかり","nb_NO":"Anker","nl":"Anker","pt":"Âncora","pt_BR":"Âncora","ru":"Якорь","si":null,"sk":"Kotva","sq":"Spirancë","sr":"сидро","sv":"Ankare","szl":null,"tzm":null,"uk":"Якір","vi":"Mỏ neo","zh_Hans":"锚","zh_Hant":"船錨"}},{"number":61,"emoji":"🎧","description":"Headphones","unicode":"U+1F3A7","translated_descriptions":{"ar":"سَمّاعَة رَأس","bg":"Слушалки","ca":"Auriculars","cs":"Sluchátka","de":"Kopfhörer","eo":"Kapaŭdilo","es":"Cascos","et":"Kõrvaklapid","fa":"هدفون","fi":"Kuulokkeet","fr":"Casque audio","hr":"slušalice","hu":"Fejhallgató","id":"Headphone","it":"Cuffie","ja":"ヘッドホン","nb_NO":"Hodetelefoner","nl":"Koptelefoon","pt":"Fones","pt_BR":"Fones de ouvido","ru":"Наушники","si":null,"sk":"Slúchadlá","sq":"Kufje","sr":"слушалице","sv":"Hörlurar","szl":null,"tzm":null,"uk":"Навушники","vi":"Tai nghe","zh_Hans":"耳机","zh_Hant":"耳機"}},{"number":62,"emoji":"📁","description":"Folder","unicode":"U+1F4C1","translated_descriptions":{"ar":"مُجَلَّد","bg":"Папка","ca":"Carpeta","cs":"Složka","de":"Ordner","eo":"Dosierujo","es":"Carpeta","et":"Kaust","fa":"پوشه","fi":"Kansio","fr":"Dossier","hr":"mapu","hu":"Mappa","id":"Map","it":"Cartella","ja":"フォルダー","nb_NO":"Mappe","nl":"Map","pt":"Pasta","pt_BR":"Pasta","ru":"Папка","si":null,"sk":"Fascikel","sq":"Dosje","sr":"фасцикла","sv":"Mapp","szl":null,"tzm":"Asdaw","uk":"Тека","vi":"Thư mục","zh_Hans":"文件夹","zh_Hant":"資料夾"}},{"number":63,"emoji":"📌","description":"Pin","unicode":"U+1F4CC","translated_descriptions":{"ar":"دَبُّوس","bg":"Кабърче","ca":"Xinxeta","cs":"Špendlík","de":"Stecknadel","eo":"Pinglo","es":"Alfiler","et":"Nööpnõel","fa":"سنجاق","fi":"Nuppineula","fr":"Punaise","hr":"pribadača","hu":"Rajszeg","id":"Pin","it":"Puntina","ja":"ピン","nb_NO":"Tegnestift","nl":"Duimspijker","pt":"Pionés","pt_BR":"Alfinete","ru":"Булавка","si":null,"sk":"Špendlík","sq":"Karficë","sr":"чиода","sv":"Häftstift","szl":null,"tzm":null,"uk":"Кнопка","vi":"Ghim","zh_Hans":"图钉","zh_Hant":"圖釘"}}]`), v8 = new Map(
  y8.map(({ emoji: e, description: t, translated_descriptions: n }) => [
    e,
    [
      t,
      // Normalize the translation keys
      Object.keys(n).reduce((r, o) => {
        for (const a of qp(o))
          r[a] = n[o];
        return r;
      }, {})
    ]
  ])
);
function b8(e, t) {
  const n = v8.get(e);
  if (!n)
    throw new Error(`Emoji mapping not found for emoji ${e}`);
  const [r, o] = n;
  for (const a of qp(t))
    if (o[a])
      return o[a];
  return r;
}
const _8 = "_container_1lqqy_8", w8 = "_segment_1lqqy_15", E8 = "_emoji_1lqqy_23", A8 = "_label_1lqqy_29", no = {
  container: _8,
  segment: w8,
  emoji: E8,
  label: A8
};
function E4({ emoji: e, className: t }) {
  const { language: n } = de(), r = e.map((o, a) => /* @__PURE__ */ p.createElement("div", { className: no.segment, key: a }, /* @__PURE__ */ p.createElement("div", { className: no.emoji, "aria-hidden": !0 }, o), /* @__PURE__ */ p.createElement("div", { className: no.label }, b8(o, n))));
  return /* @__PURE__ */ p.createElement("div", { className: re(no.container, t) }, r);
}
function nm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 4.5a1 1 0 0 1 1 1v10.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L11 16.086V5.5a1 1 0 0 1 1-1"
    })
  });
}
nm.displayName = "ArrowDownIcon";
const S8 = (0,react.forwardRef)(nm);
function rm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.437-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7a8 8 0 0 0-2.3-1.263A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6A8 8 0 0 0 5.7 16.9"
    })
  });
}
rm.displayName = "BlockIcon";
const Nf = (0,react.forwardRef)(rm);
function om(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "m1.5 21.25 1.45-4.95a10.2 10.2 0 0 1-.712-2.1A10.2 10.2 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22q-1.125 0-2.2-.238a10.2 10.2 0 0 1-2.1-.712L2.75 22.5a.94.94 0 0 1-1-.25.94.94 0 0 1-.25-1m2.45-1.2 3.2-.95a1 1 0 0 1 .275-.062q.15-.013.275-.013.225 0 .438.038.212.036.412.137a7.4 7.4 0 0 0 1.675.6Q11.1 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12q0 .9.2 1.775t.6 1.675q.176.325.188.688t-.088.712z"
    })
  });
}
om.displayName = "ChatIcon";
const am = (0,react.forwardRef)(om);
function im(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M9.55 17.575q-.2 0-.375-.062a.9.9 0 0 1-.325-.213L4.55 13q-.274-.274-.262-.713.012-.437.287-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275L9.55 15.15l8.475-8.475q.274-.275.713-.275.437 0 .712.275.275.274.275.713 0 .437-.275.712l-9.2 9.2q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063"
    })
  });
}
im.displayName = "CheckIcon";
const sm = (0,react.forwardRef)(im);
function cm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 14.95q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-4.6-4.6a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.425 0 .7.275l3.9 3.9 3.9-3.9a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-4.6 4.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063"
    })
  });
}
cm.displayName = "ChevronDownIcon";
const Gc = (0,react.forwardRef)(cm);
function lm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414L13.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414L10.586 12 6.293 7.707a1 1 0 0 1 0-1.414"
    })
  });
}
lm.displayName = "CloseIcon";
const T8 = (0,react.forwardRef)(lm);
function um(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      fillRule: "evenodd",
      d: "M16.937 2.82a2 2 0 0 1 2.828 0l1.415 1.414a2 2 0 0 1 0 2.829l-7.071 7.07c-.195.196-.42.342-.66.44a1 1 0 0 1-.168.072l-3.993 1.331a1 1 0 0 1-1.265-1.265l1.331-3.992q.03-.09.073-.168m10.338-4.903-6.717 6.718-1.414-1.414 6.717-6.718z",
      clipRule: "evenodd"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M3 5a2 2 0 0 1 2-2h6a1 1 0 1 1 0 2H5v14h14v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    })]
  });
}
um.displayName = "ComposeIcon";
const fm = (0,react.forwardRef)(um);
function dm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 4 5q0-.424.287-.713A.97.97 0 0 1 5 4h4q0-.424.287-.712A.97.97 0 0 1 10 3h4q.424 0 .713.288Q15 3.575 15 4h4q.424 0 .712.287Q20 4.576 20 5t-.288.713A.97.97 0 0 1 19 6v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21zM7 6v13h10V6zm2 10q0 .424.287.712Q9.576 17 10 17t.713-.288A.97.97 0 0 0 11 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 10 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 9zm4 0q0 .424.287.712.288.288.713.288.424 0 .713-.288A.97.97 0 0 0 15 16V9a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 8a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 9z"
    })
  });
}
dm.displayName = "DeleteIcon";
const k8 = (0,react.forwardRef)(dm);
function pm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 18.6c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M6.6 2.4c-.99 0-1.8.81-1.8 1.8S5.61 6 6.6 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0 5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8M17.4 6c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8-1.8.81-1.8 1.8.81 1.8 1.8 1.8M12 13.2c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m-5.4 0c-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8 1.8-.81 1.8-1.8-.81-1.8-1.8-1.8m0-5.4c-.99 0-1.8.81-1.8 1.8S11.01 6 12 6s1.8-.81 1.8-1.8-.81-1.8-1.8-1.8"
    })
  });
}
pm.displayName = "DialPadIcon";
const R8 = (0,react.forwardRef)(pm);
function mm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 5.111a1 1 0 0 0 .514.874l7 3.89a1 1 0 0 0 .972 0l7-3.89a1 1 0 1 0-.972-1.748L12 11.856 5.486 8.237A1 1 0 0 0 4 9.111"
    })
  });
}
mm.displayName = "EmailSolidIcon";
const I8 = (0,react.forwardRef)(mm);
function hm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 17q.424 0 .713-.288A.97.97 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 16q0 .424.287.712.288.288.713.288m0-4q.424 0 .713-.287A.97.97 0 0 0 13 12V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v4q0 .424.287.713.288.287.713.287m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22"
    })
  });
}
hm.displayName = "ErrorSolidIcon";
const gm = (0,react.forwardRef)(hm);
function ym(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 12q0-.424.287-.713A.97.97 0 0 1 12 11q.424 0 .713.287.287.288.287.713 0 .424-.287.713A.97.97 0 0 1 12 13m0 9a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4 6.325 6.325 4 12t2.325 5.675T12 20m0 0q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4t5.675 2.325T20 12t-2.325 5.675T12 20m1.675-5.85q.15-.075.275-.2t.2-.275l2.925-6.25q.125-.25-.062-.437-.188-.188-.438-.063l-6.25 2.925q-.15.075-.275.2t-.2.275l-2.925 6.25q-.125.25.063.438.186.186.437.062z"
    })
  });
}
ym.displayName = "ExploreIcon";
const j8 = (0,react.forwardRef)(ym);
function vm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M13.905 9.378 12 5.52l-1.905 3.86-4.259.618 3.082 3.004-.727 4.242L12 15.24l3.81 2.003-.728-4.242 3.082-3.004zM8.767 7.55l2.336-4.733a1 1 0 0 1 1.794 0l2.336 4.733 5.223.76a1 1 0 0 1 .555 1.705L17.23 13.7l.892 5.202a1 1 0 0 1-1.45 1.054L12 17.5l-4.672 2.456a1 1 0 0 1-1.451-1.054l.892-5.202-3.78-3.685a1 1 0 0 1 .555-1.706z"
    })
  });
}
vm.displayName = "FavouriteIcon";
const O8 = (0,react.forwardRef)(vm);
function bm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M13 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.83 2.83a1 1 0 0 0 1.414-1.414L13 11.586z"
    })]
  });
}
bm.displayName = "HistoryIcon";
const P8 = (0,react.forwardRef)(bm);
function _m(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      fillRule: "evenodd",
      d: "M16 11v8h3V9.177l-7-3.889-7 3.889V19h3v-8zm-6 10H5a2 2 0 0 1-2-2V9.177a2 2 0 0 1 1.029-1.748l7-3.89a2 2 0 0 1 1.942 0l7 3.89A2 2 0 0 1 21 9.177V19a2 2 0 0 1-2 2h-5v-8h-4z",
      clipRule: "evenodd"
    })
  });
}
_m.displayName = "HomeIcon";
const C8 = (0,react.forwardRef)(_m);
function wm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M14 13q.424 0 .713-.287A.97.97 0 0 0 15 12a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 11a.97.97 0 0 0-.713.287A.97.97 0 0 0 13 12q0 .424.287.713.288.287.713.287"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M10.385 21.788A1 1 0 0 1 10 21V3a1.003 1.003 0 0 1 1.242-.97l8 2A1 1 0 0 1 20 5v14a1 1 0 0 1-.758.97l-8 2a1 1 0 0 1-.857-.182M18 5.781l-6-1.5v15.438l6-1.5zM9 6H7v12h2v2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2z"
    })]
  });
}
wm.displayName = "LeaveIcon";
const M8 = (0,react.forwardRef)(wm);
function Em(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 19.071q-1.467 1.467-3.536 1.467-2.067 0-3.535-1.467t-1.467-3.535q0-2.07 1.467-3.536L7.05 9.879q.3-.3.707-.3t.707.3.301.707-.3.707l-2.122 2.121a2.9 2.9 0 0 0-.884 2.122q0 1.237.884 2.12.884.885 2.121.885t2.122-.884l2.121-2.121q.3-.3.707-.3t.707.3.3.707q0 .405-.3.707zm-1.414-4.243q-.3.3-.707.301a.97.97 0 0 1-.707-.3q-.3-.3-.301-.708 0-.405.3-.707l4.243-4.242q.3-.3.707-.3t.707.3.3.707-.3.707zm6.364-.707q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.301-.707 0-.405.3-.707l2.122-2.121q.884-.885.884-2.121 0-1.238-.884-2.122a2.9 2.9 0 0 0-2.121-.884q-1.237 0-2.122.884l-2.121 2.122q-.3.3-.707.3a.97.97 0 0 1-.707-.3q-.3-.3-.3-.708 0-.405.3-.707L12 4.93q1.467-1.467 3.536-1.467t3.535 1.467 1.467 3.536T19.071 12z"
    })
  });
}
Em.displayName = "LinkIcon";
const N8 = (0,react.forwardRef)(Em);
function Am(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.537Q9.926 1 12 1q2.075 0 3.537 1.463Q17 3.925 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zM9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z"
    })
  });
}
Am.displayName = "LockSolidIcon";
const x8 = (0,react.forwardRef)(Am);
function Sm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M21.324 9.13c0-.66-.339-1.237-.862-1.558l-7.37-4.318a1.81 1.81 0 0 0-1.851 0L3.87 7.572C3.348 7.892 3 8.47 3 9.13v9.167c0 1.008.825 1.833 1.833 1.833H19.5a1.84 1.84 0 0 0 1.833-1.833zm-10.129 3.978-6.6-4.124 6.646-3.896a1.81 1.81 0 0 1 1.851 0l6.646 3.896-6.6 4.124a1.85 1.85 0 0 1-1.943 0"
    })
  });
}
Sm.displayName = "MarkAsReadIcon";
const B8 = (0,react.forwardRef)(Sm);
function Tm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M20 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    }), /* @__PURE__ */ P.jsx("path", {
      fillRule: "evenodd",
      d: "M17 5H5a2 2 0 0 0-2 2v10.4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.83a3 3 0 0 1-2 0q-.316-.113-.595-.288L12 11.89 5 7.138V7h12.764A3 3 0 0 1 17 5m-4.438 8.927L19 9.555V17.4H5V9.555l6.438 4.372a1 1 0 0 0 1.124 0",
      clipRule: "evenodd"
    })]
  });
}
Tm.displayName = "MarkAsUnreadIcon";
const D8 = (0,react.forwardRef)(Tm);
function km(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M12 4a8 8 0 1 0 0 16 1 1 0 1 1 0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 17 12v1.5a1.5 1.5 0 0 0 3 0V12a8 8 0 0 0-8-8m3 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
    })
  });
}
km.displayName = "MentionIcon";
const z8 = (0,react.forwardRef)(km);
function Rm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "m4.917 2.083 17 17a1 1 0 0 1-1.414 1.414L19.006 19H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-2.034 1.096-3.91L3.504 3.498a1 1 0 0 1 1.414-1.414M19 13.35 9.136 3.484C9.93 3.181 10.874 3 12 3c7 0 7 7 7 7z"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M10 20h4a2 2 0 0 1-4 0"
    })]
  });
}
Rm.displayName = "NotificationsOffSolidIcon";
const Im = (0,react.forwardRef)(Rm);
function jm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M20.293 17.293c.63.63.184 1.707-.707 1.707H4.414c-.89 0-1.337-1.077-.707-1.707L5 16v-6s0-7 7-7 7 7 7 7v6zM12 22a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2"
    })
  });
}
jm.displayName = "NotificationsSolidIcon";
const F8 = (0,react.forwardRef)(jm);
function Om(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M6 14q-.824 0-1.412-.588A1.93 1.93 0 0 1 4 12q0-.825.588-1.412A1.93 1.93 0 0 1 6 10q.824 0 1.412.588Q8 11.175 8 12t-.588 1.412A1.93 1.93 0 0 1 6 14m6 0q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m6 0q-.824 0-1.413-.588A1.93 1.93 0 0 1 16 12q0-.825.587-1.412A1.93 1.93 0 0 1 18 10q.824 0 1.413.588Q20 11.175 20 12t-.587 1.412A1.93 1.93 0 0 1 18 14"
    })
  });
}
Om.displayName = "OverflowHorizontalIcon";
const Yc = (0,react.forwardRef)(Om);
function Pm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      fillRule: "evenodd",
      d: "M6.5 2h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m0 2h7.258A4.5 4.5 0 0 0 13 6.5c0 .925.28 1.785.758 2.5H6.5a2.5 2.5 0 0 1 0-5M15 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m-13 11A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11q-.233 0-.46-.023A4.5 4.5 0 0 1 2 17.5m8.242-2.5H17.5a2.5 2.5 0 0 1 0 5h-7.258A4.5 4.5 0 0 0 11 17.5c0-.925-.28-1.785-.758-2.5M6.5 15a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5",
      clipRule: "evenodd"
    })
  });
}
Pm.displayName = "PreferencesIcon";
const L8 = (0,react.forwardRef)(Pm);
function Cm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M14.74 2.38C13.87 2.133 12.95 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-.95-.133-1.87-.38-2.74a5 5 0 0 1-1.886.687 8 8 0 1 1-5.68-5.68c.1-.684.339-1.323.687-1.887"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M15.536 14.121a1 1 0 0 1 0 1.415A5 5 0 0 1 12 17c-1.38 0-2.632-.56-3.535-1.464a1 1 0 1 1 1.414-1.415A3 3 0 0 0 12 15c.829 0 1.577-.335 2.121-.879a1 1 0 0 1 1.415 0M8.5 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M18 6h-1a.97.97 0 0 1-.712-.287A.97.97 0 0 1 16 5q0-.424.288-.713A.97.97 0 0 1 17 4h1V3q0-.424.288-.712A.97.97 0 0 1 19 2q.424 0 .712.288Q20 2.575 20 3v1h1q.424 0 .712.287Q22 4.576 22 5t-.288.713A.97.97 0 0 1 21 6h-1v1q0 .424-.288.713A.97.97 0 0 1 19 8a.97.97 0 0 1-.712-.287A.97.97 0 0 1 18 7z"
    })]
  });
}
Cm.displayName = "ReactionAddIcon";
const q8 = (0,react.forwardRef)(Cm);
function Mm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M18.93 8A8 8 0 1 1 4 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.832-4A10 10 0 0 0 12 2a9.99 9.99 0 0 0-8 3.999V4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2H5.755A7.99 7.99 0 0 1 12 4a8 8 0 0 1 6.93 4"
    })
  });
}
Mm.displayName = "RestartIcon";
const xf = (0,react.forwardRef)(Mm);
function Nm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "m8.566 17-.944 4.094q-.086.406-.372.656t-.687.25q-.543 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.801-3.5H3.158q-.572 0-.916-.484a1.27 1.27 0 0 1-.2-1.078 1.12 1.12 0 0 1 1.116-.938H6.85l1.145-5h-3.12q-.57 0-.915-.484a1.27 1.27 0 0 1-.2-1.078A1.12 1.12 0 0 1 4.875 7h3.691l.945-4.094q.085-.406.372-.656.286-.25.686-.25.544 0 .887.469.345.468.2 1.031l-.8 3.5h4.578l.944-4.094q.085-.406.372-.656.286-.25.687-.25.543 0 .887.469t.2 1.031L17.723 7h3.119q.573 0 .916.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937H17.15l-1.145 5h3.12q.57 0 .915.484.343.485.2 1.079a1.12 1.12 0 0 1-1.116.937h-3.691l-.944 4.094q-.087.406-.373.656t-.686.25q-.544 0-.887-.469a1.18 1.18 0 0 1-.2-1.031l.8-3.5zm.573-2.5h4.578l1.144-5h-4.578z"
    })
  });
}
Nm.displayName = "RoomIcon";
const xm = (0,react.forwardRef)(Nm);
function Bm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M15.05 16.463a7.5 7.5 0 1 1 1.414-1.414l3.243 3.244a1 1 0 0 1-1.414 1.414zM16 10.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0"
    })
  });
}
Bm.displayName = "SearchIcon";
const $8 = (0,react.forwardRef)(Bm);
function Dm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-2 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M11.312 2h1.376A2.31 2.31 0 0 1 15 4.312v.247l.002.003c.01.014.031.033.064.047.03.013.056.013.07.01h.002l.177-.177a2.31 2.31 0 0 1 3.27 0l.973.974a2.31 2.31 0 0 1 0 3.269l-.177.177v.003a.13.13 0 0 0 .01.07.15.15 0 0 0 .047.063l.003.002h.247A2.31 2.31 0 0 1 22 11.312v1.376A2.31 2.31 0 0 1 19.688 15h-.247l-.003.002a.15.15 0 0 0-.047.064.13.13 0 0 0-.01.07v.002l.177.177a2.31 2.31 0 0 1 0 3.27l-.974.973a2.31 2.31 0 0 1-3.269 0l-.177-.177h-.003a.13.13 0 0 0-.07.01.15.15 0 0 0-.063.047l-.002.003v.247A2.31 2.31 0 0 1 12.688 22h-1.376A2.31 2.31 0 0 1 9 19.688v-.247l-.002-.003a.15.15 0 0 0-.064-.047.13.13 0 0 0-.07-.01h-.002l-.177.177a2.31 2.31 0 0 1-3.27 0l-.973-.974a2.31 2.31 0 0 1 0-3.269l.177-.177v-.003a.14.14 0 0 0-.01-.07.15.15 0 0 0-.047-.063L4.559 15h-.247A2.31 2.31 0 0 1 2 12.688v-1.376A2.31 2.31 0 0 1 4.312 9h.247l.003-.002a.15.15 0 0 0 .047-.064.14.14 0 0 0 .01-.07v-.002l-.177-.177a2.31 2.31 0 0 1 0-3.27l.974-.973a2.31 2.31 0 0 1 3.269 0l.177.177h.003a.14.14 0 0 0 .07-.01.15.15 0 0 0 .063-.047L9 4.559v-.247A2.31 2.31 0 0 1 11.312 2M11 4.312v.257c0 .893-.59 1.593-1.299 1.887-.716.297-1.622.21-2.248-.418l-.182-.182a.31.31 0 0 0-.441 0l-.974.974a.31.31 0 0 0 0 .44l.182.183c.627.626.715 1.531.418 2.248C6.162 10.41 5.462 11 4.569 11h-.257a.31.31 0 0 0-.312.312v1.376c0 .172.14.312.312.312h.257c.893 0 1.593.59 1.887 1.299.297.716.21 1.622-.418 2.248l-.182.182a.31.31 0 0 0 0 .441l.974.973a.31.31 0 0 0 .44 0l.183-.181c.626-.627 1.532-.715 2.248-.418.709.294 1.299.994 1.299 1.887v.257c0 .172.14.312.312.312h1.376c.172 0 .312-.14.312-.312v-.257c0-.893.59-1.593 1.299-1.887.716-.297 1.622-.21 2.249.418l.181.181c.122.122.32.122.441 0l.973-.973a.31.31 0 0 0 0-.44l-.181-.183c-.627-.626-.715-1.532-.418-2.248.294-.709.994-1.299 1.887-1.299h.257c.172 0 .312-.14.312-.312v-1.376a.31.31 0 0 0-.312-.312h-.257c-.893 0-1.593-.59-1.887-1.299-.297-.717-.21-1.622.418-2.248l.181-.182a.31.31 0 0 0 0-.441l-.973-.974a.31.31 0 0 0-.44 0l-.183.182c-.626.627-1.532.715-2.248.418C13.59 6.162 13 5.462 13 4.569v-.257A.31.31 0 0 0 12.688 4h-1.376a.31.31 0 0 0-.312.312"
    })]
  });
}
Dm.displayName = "SettingsIcon";
const H8 = (0,react.forwardRef)(Dm);
function zm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M10 12q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 10 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q18 16.35 18 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 16 20H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q5.85 15.675 4.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q12 8.826 12 8q0-.824-.588-1.412A1.93 1.93 0 0 0 10 6q-.825 0-1.412.588A1.93 1.93 0 0 0 8 8q0 .825.588 1.412Q9.175 10 10 10m7 1h2v2q0 .424.288.713.287.287.712.287.424 0 .712-.287A.97.97 0 0 0 21 13v-2h2q.424 0 .712-.287A.97.97 0 0 0 24 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 23 9h-2V7a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 6a.97.97 0 0 0-.712.287A.97.97 0 0 0 19 7v2h-2a.97.97 0 0 0-.712.287A.97.97 0 0 0 16 10q0 .424.288.713.287.287.712.287"
    })
  });
}
zm.displayName = "UserAddIcon";
const Fm = (0,react.forwardRef)(zm);
function Lm(e, t) {
  return /* @__PURE__ */ P.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: [/* @__PURE__ */ P.jsx("path", {
      d: "M12 15q-1.65 0-2.825-1.175T8 11t1.175-2.825T12 7t2.825 1.175T16 11t-1.175 2.825T12 15"
    }), /* @__PURE__ */ P.jsx("path", {
      d: "M19.528 18.583A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 2.52.933 4.824 2.472 6.583A9.98 9.98 0 0 0 12 22a9.98 9.98 0 0 0 7.528-3.417M8.75 16.388q-1.373.332-2.709.95a8 8 0 1 1 11.918 0 14.7 14.7 0 0 0-2.709-.95A13.8 13.8 0 0 0 12 16q-1.65 0-3.25.387"
    })]
  });
}
Lm.displayName = "UserProfileSolidIcon";
const U8 = (0,react.forwardRef)(Lm);
function qm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M6 4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4"
    })
  });
}
qm.displayName = "VideoCallSolidIcon";
const K8 = (0,react.forwardRef)(qm);
function $m(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "M2 8a4 4 0 0 1 4-4h10a2 2 0 0 1 2 2v4.286l3.35-2.871a1 1 0 0 1 1.65.76v7.65a1 1 0 0 1-1.65.76L18 13.715V18a2 2 0 0 1-2 2H6a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10V6zm15 7.652v-3.303L19.073 12z"
    })
  });
}
$m.displayName = "VideoCallIcon";
const V8 = (0,react.forwardRef)($m);
function Hm(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.424-.2.863-.3A4.2 4.2 0 0 1 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938t-.3.862m3.2 3.15-1.45-1.4a11 11 0 0 0 1.688-1.588A9 9 0 0 0 20.8 11.5q-1.25-2.524-3.588-4.013Q14.875 6 12 6q-.724 0-1.425.1a10 10 0 0 0-1.375.3L7.65 4.85A11.1 11.1 0 0 1 12 4q3.575 0 6.425 1.887T22.7 10.8a.8.8 0 0 1 .1.313q.025.188.025.387a2 2 0 0 1-.125.7 10.9 10.9 0 0 1-3.4 4.25m-.2 5.45-3.5-3.45q-.874.274-1.762.413Q12.95 19 12 19q-3.575 0-6.425-1.887T1.3 12.2a.8.8 0 0 1-.1-.312 3 3 0 0 1 0-.763.8.8 0 0 1 .1-.3Q1.825 9.7 2.55 8.75A13.3 13.3 0 0 1 4.15 7L2.075 4.9a.93.93 0 0 1-.275-.688q0-.412.3-.712a.95.95 0 0 1 .7-.275q.425 0 .7.275l17 17q.275.275.288.688a.93.93 0 0 1-.288.712.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275M5.55 8.4q-.725.65-1.325 1.425A9 9 0 0 0 3.2 11.5q1.25 2.524 3.588 4.012T12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.274.075-.525.113A3.5 3.5 0 0 1 12 16q-1.875 0-3.187-1.312Q7.5 13.375 7.5 11.5q0-.274.038-.525.037-.25.112-.525z"
    })
  });
}
Hm.displayName = "VisibilityOffIcon";
const G8 = (0,react.forwardRef)(Hm);
function Um(e, t) {
  return /* @__PURE__ */ P.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: t,
    ...e,
    children: /* @__PURE__ */ P.jsx("path", {
      d: "m20.958 16.374.039 3.527q0 .427-.33.756-.33.33-.756.33a16 16 0 0 1-6.57-1.105 16.2 16.2 0 0 1-5.563-3.663 16.1 16.1 0 0 1-3.653-5.573 16.3 16.3 0 0 1-1.115-6.56q0-.427.33-.757T4.095 3l3.528.039a1.07 1.07 0 0 1 1.085.93l.543 3.954q.039.271-.039.504a1.1 1.1 0 0 1-.271.426l-1.64 1.64q.505 1.008 1.154 1.909c.433.6 1.444 1.696 1.444 1.696s1.095 1.01 1.696 1.444q.9.65 1.909 1.153l1.64-1.64q.193-.193.426-.27t.504-.04l3.954.543q.406.059.668.359t.262.727"
    })
  });
}
Um.displayName = "VoiceCallSolidIcon";
const Y8 = (0,react.forwardRef)(Um), W8 = "_error_1f33z_8", Z8 = {
  error: W8
}, J8 = "_container_sq5fu_8", Q8 = "_title_sq5fu_34", X8 = "_subtitle_sq5fu_35", Di = {
  container: J8,
  title: Q8,
  subtitle: X8
};
function eE({
  icon: e,
  title: t,
  subtitle: n,
  className: r,
  children: o,
  ref: a
}) {
  return /* @__PURE__ */ p.createElement("div", { className: re(Di.container, r), ref: a }, e, /* @__PURE__ */ p.createElement("div", { className: Di.title }, t), n && /* @__PURE__ */ p.createElement("div", { className: Di.subtitle }, n), o);
}
var tE = /* @__PURE__ */ ((e) => (e.CHANGED = "CHANGED", e.DISABLE_ATTEMPT = "DISABLE_ATTEMPT", e.ENABLED = "ENABLED", e.ENABLED_DM = "ENABLED_DM", e.ENABLED_LOCAL = "ENABLED_LOCAL", e.UNSUPPORTED = "UNSUPPORTED", e))(tE || {});
function A4({ vm: e, ref: t }) {
  const { translate: n } = de(), { state: r, encryptedStateEvents: o, userName: a, className: i, timestamp: s } = se(e);
  let c = /* @__PURE__ */ p.createElement(x8, null), l = n(o ? "common|state_encryption_enabled" : "common|encryption_enabled"), f = "";
  switch (r) {
    case "CHANGED":
      f = n("timeline|m.room.encryption|parameters_changed");
      break;
    case "DISABLE_ATTEMPT":
      l = n("common|encryption_enabled"), f = n("timeline|m.room.encryption|disable_attempt");
      break;
    case "ENABLED":
      f = n(o ? "timeline|m.room.encryption|state_enabled" : "timeline|m.room.encryption|enabled");
      break;
    case "ENABLED_DM":
      f = n("timeline|m.room.encryption|enabled_dm", { displayName: a });
      break;
    case "ENABLED_LOCAL":
      f = n("timeline|m.room.encryption|enabled_local");
      break;
    default:
      c = /* @__PURE__ */ p.createElement(gm, { className: Z8.error }), l = n("timeline|m.room.encryption|disabled"), f = n("timeline|m.room.encryption|unsupported");
      break;
  }
  return /* @__PURE__ */ p.createElement(eE, { icon: c, className: i, title: l, subtitle: f, ref: t }, s);
}
function S4({ vm: e }) {
  const t = se(e);
  return /* @__PURE__ */ p.createElement("div", { className: "mx_TextualEvent" }, t.content);
}
const nE = "_content_kc5mt_8", Bf = {
  content: nE
};
function T4({ vm: e }) {
  const { translate: t } = de(), { ts: n, tsSentAt: r, tsReceivedAt: o, inhibitTooltip: a, className: i, href: s } = se(e), c = (u) => {
    e.onClick && (u.key === "Enter" || u.key === " ") && (u.preventDefault(), e.onClick?.(u));
  };
  let l = r, f;
  o && o?.length > 0 && (l = t("timeline|message_timestamp_sent_at", { dateTime: l }), f = t("timeline|message_timestamp_received_at", {
    dateTime: o
  }));
  let d;
  return s ? d = /* @__PURE__ */ p.createElement(
    "a",
    {
      href: s,
      onClick: e.onClick,
      onKeyDown: c,
      onContextMenu: e.onContextMenu,
      className: re(i, Bf.content),
      "aria-live": "off"
    },
    n
  ) : d = /* @__PURE__ */ p.createElement(
    "span",
    {
      onClick: e.onClick,
      onKeyDown: c,
      onContextMenu: e.onContextMenu,
      className: re(i, Bf.content),
      role: e.onClick ? "link" : void 0,
      "aria-live": "off",
      tabIndex: e.onClick || !a ? 0 : void 0
    },
    n
  ), a ? d : /* @__PURE__ */ p.createElement(jo, { description: l, caption: f }, d);
}
const rE = "_content_1uqu1_8", oE = "_error_1uqu1_14", aE = "_icon_1uqu1_23", Io = {
  content: rE,
  error: oE,
  icon: aE
};
var iE = /* @__PURE__ */ ((e) => (e.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE = "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE", e.HISTORICAL_MESSAGE_NO_KEY_BACKUP = "HISTORICAL_MESSAGE_NO_KEY_BACKUP", e.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED = "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED", e.HISTORICAL_MESSAGE_USER_NOT_JOINED = "HISTORICAL_MESSAGE_USER_NOT_JOINED", e.SENDER_IDENTITY_PREVIOUSLY_VERIFIED = "SENDER_IDENTITY_PREVIOUSLY_VERIFIED", e.UNSIGNED_SENDER_DEVICE = "UNSIGNED_SENDER_DEVICE", e.UNABLE_TO_DECRYPT = "UNABLE_TO_DECRYPT", e))(iE || {});
function sE(e, t, n) {
  const r = e.translate;
  switch (t) {
    case "MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE":
      return r("timeline|decryption_failure|blocked");
    case "HISTORICAL_MESSAGE_NO_KEY_BACKUP":
      return r("timeline|decryption_failure|historical_event_no_key_backup");
    case "HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED":
      if (n === !1)
        return r("timeline|decryption_failure|historical_event_unverified_device");
      break;
    case "HISTORICAL_MESSAGE_USER_NOT_JOINED":
      return r("timeline|decryption_failure|historical_event_user_not_joined");
    case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
      return /* @__PURE__ */ p.createElement("span", null, /* @__PURE__ */ p.createElement(Nf, { className: Io.icon, width: "16px", height: "16px" }), r("timeline|decryption_failure|sender_identity_previously_verified"));
    case "UNSIGNED_SENDER_DEVICE":
      return /* @__PURE__ */ p.createElement("span", null, /* @__PURE__ */ p.createElement(Nf, { className: Io.icon, width: "16px", height: "16px" }), r("timeline|decryption_failure|sender_unsigned_device"));
  }
  return r("timeline|decryption_failure|unable_to_decrypt");
}
function cE(e) {
  switch (e) {
    case "SENDER_IDENTITY_PREVIOUSLY_VERIFIED":
    case "UNSIGNED_SENDER_DEVICE":
      return Io.error;
  }
  return null;
}
function k4({ vm: e, ref: t }) {
  const n = de(), { decryptionFailureReason: r, isLocalDeviceVerified: o, extraClassNames: a } = se(e), i = re(Io.content, cE(r), a);
  return /* @__PURE__ */ p.createElement("div", { className: i, ref: t }, sE(n, r, o));
}
function lE({
  vm: e,
  children: t
}) {
  const { formattedSenders: n, caption: r, tooltipOpen: o } = se(e);
  return n ? /* @__PURE__ */ p.createElement(jo, { description: n, caption: r, placement: "right", open: o }, t) : /* @__PURE__ */ p.createElement(p.Fragment, null, t);
}
const uE = "_reactionsRowButton_5v4c1_8", fE = "_reactionsRowButtonSelected_5v4c1_21", dE = "_reactionsRowButtonDisabled_5v4c1_26", pE = "_reactionsRowButtonContent_5v4c1_30", mE = "_reactionsRowButtonCount_5v4c1_38", Rn = {
  reactionsRowButton: uE,
  reactionsRowButtonSelected: fE,
  reactionsRowButtonDisabled: dE,
  reactionsRowButtonContent: pE,
  reactionsRowButtonCount: mE
};
function R4({ vm: e }) {
  const t = se(e), { content: n, count: r, className: o, isSelected: a, isDisabled: i, imageSrc: s, imageAlt: c, tooltipVm: l } = t, f = t["aria-label"] ?? t.ariaLabel, d = i ? !0 : void 0, u = re(o, Rn.reactionsRowButton, {
    [Rn.reactionsRowButtonSelected]: a,
    [Rn.reactionsRowButtonDisabled]: i
  }), v = s ? /* @__PURE__ */ p.createElement("img", { className: Rn.reactionsRowButtonContent, alt: c ?? "", src: s, width: "16", height: "16" }) : /* @__PURE__ */ p.createElement("span", { className: Rn.reactionsRowButtonContent, "aria-hidden": "true" }, n ?? "");
  return /* @__PURE__ */ p.createElement(lE, { vm: l }, /* @__PURE__ */ p.createElement(
    "button",
    {
      type: "button",
      className: u,
      tabIndex: 0,
      "aria-label": f,
      "aria-disabled": d,
      onClick: i ? void 0 : e.onClick
    },
    v,
    /* @__PURE__ */ p.createElement("span", { className: Rn.reactionsRowButtonCount, "aria-hidden": "true" }, r)
  ));
}
const hE = "_reactionsRow_1lcz2_8", gE = "_showAllButton_1lcz2_16", yE = "_addReactionButton_1lcz2_29", vE = "_addReactionButtonVisible_1lcz2_48", bE = "_addReactionButtonActive_1lcz2_52", _E = "_addReactionButtonDisabled_1lcz2_56", In = {
  reactionsRow: hE,
  showAllButton: gE,
  addReactionButton: yE,
  addReactionButtonVisible: vE,
  addReactionButtonActive: bE,
  addReactionButtonDisabled: _E
};
function I4({ vm: e }) {
  const {
    ariaLabel: t,
    isVisible: n,
    children: r,
    className: o,
    showAllButtonVisible: a,
    showAllButtonLabel: i,
    showAddReactionButton: s,
    addReactionButtonLabel: c,
    addReactionButtonVisible: l,
    addReactionButtonActive: f,
    addReactionButtonDisabled: d
  } = se(e);
  if (!n)
    return /* @__PURE__ */ p.createElement(p.Fragment, null);
  const u = re(In.addReactionButton, {
    [In.addReactionButtonVisible]: l,
    [In.addReactionButtonActive]: f,
    [In.addReactionButtonDisabled]: d
  }), v = e.onAddReactionContextMenu ? (w) => {
    w.preventDefault(), e.onAddReactionContextMenu?.(w);
  } : void 0, m = /* @__PURE__ */ p.createElement(
    "button",
    {
      type: "button",
      className: u,
      "aria-label": c,
      disabled: d,
      onClick: e.onAddReactionClick,
      onContextMenu: v
    },
    /* @__PURE__ */ p.createElement(q8, null)
  );
  return /* @__PURE__ */ p.createElement("div", { className: re(o, In.reactionsRow), role: "toolbar", "aria-label": t }, r, a && /* @__PURE__ */ p.createElement("button", { type: "button", className: In.showAllButton, onClick: e.onShowAllClick }, i), s && /* @__PURE__ */ p.createElement(jo, { description: c, placement: "right" }, m));
}
const wE = "_timelineSeparator_yq5ye_8", EE = {
  timelineSeparator: wE
}, Df = ({ label: e, className: t, children: n, role: r = "separator" }) => /* @__PURE__ */ p.createElement(
  Z,
  {
    className: re(t, EE.timelineSeparator),
    role: r,
    "aria-label": r === "separator" ? e : void 0,
    align: "center"
  },
  /* @__PURE__ */ p.createElement("hr", { role: "none" }),
  n,
  /* @__PURE__ */ p.createElement("hr", { role: "none" })
), AE = "_pill_1i8jm_8", SE = "_label_1i8jm_14", zf = {
  pill: AE,
  label: SE
};
function j4({ className: e, children: t, label: n, onClick: r, ...o }) {
  const a = Ar(), { translate: i } = de();
  return /* @__PURE__ */ p.createElement(
    Z,
    {
      display: "inline-flex",
      gap: "var(--cpd-space-1-5x)",
      align: "center",
      className: re(zf.pill, e),
      ...o
    },
    t,
    /* @__PURE__ */ p.createElement("span", { id: a, className: zf.label }, n),
    r && /* @__PURE__ */ p.createElement(
      dt,
      {
        "aria-describedby": a,
        size: "16px",
        onClick: r,
        "aria-label": i("action|delete"),
        className: "mx_Dialog_nonDialogButton"
      },
      /* @__PURE__ */ p.createElement(T8, null)
    )
  );
}
function TE(e) {
  return (t) => {
    for (const n of e) os(n, t);
  };
}
function kE(e) {
  return (t) => {
    const n = [];
    for (const r of e) {
      const o = os(r, t), a = typeof o == "function";
      n.push(a ? o : () => os(r, null));
    }
    return () => {
      for (const r of n) r();
    };
  };
}
function os(e, t) {
  if (typeof e == "function")
    return e(t);
  e && (e.current = t);
}
var RE = parseInt(react.version.split(".")[0], 10) >= 19 ? kE : TE;
function IE(e) {
  return ct(() => RE(e), e);
}
const jE = "_pillInput_1yam9_8", OE = "_input_1yam9_16", PE = "_largerInput_1yam9_32", zi = {
  pillInput: jE,
  input: OE,
  largerInput: PE
};
function O4({
  className: e,
  children: t,
  onRemoveChildren: n,
  inputProps: r,
  ...o
}) {
  const a = Qe(null), i = n3(r, ["onKeyDown", "ref"]), s = IE([a, r?.ref]), c = Zm.toArray(t).length > 0;
  return /* @__PURE__ */ p.createElement(
    Z,
    {
      ...o,
      gap: "var(--cpd-space-1x)",
      direction: "column",
      className: re(zi.pillInput, e),
      onClick: (l) => {
        l.preventDefault(), l.stopPropagation(), a.current?.focus();
      }
    },
    c && /* @__PURE__ */ p.createElement(Z, { gap: "var(--cpd-space-1x)", wrap: "wrap", align: "center" }, t),
    /* @__PURE__ */ p.createElement(
      "input",
      {
        ref: s,
        autoComplete: "off",
        className: re(zi.input, { [zi.largerInput]: c }),
        onKeyDown: (l) => {
          const f = l.currentTarget.value.trim();
          if (l.key === "Backspace" && !f) {
            l.preventDefault(), n?.(l);
            return;
          }
          r?.onKeyDown?.(l);
        },
        ...i
      }
    )
  );
}
const CE = "_container_1rm46_1", ME = "_secondaryAction_1rm46_9", NE = "_primaryAction_1rm46_13", xE = "_title_1rm46_17", BE = "_description_1rm46_21", we = {
  container: CE,
  secondaryAction: ME,
  primaryAction: NE,
  title: xE,
  description: BE
}, ir = {
  /**
   * Connectivity to the homeserver has been lost. The user can not take any actions
   * until the connection is restored.
   */
  ConnectionLost: "ConnectionLost",
  /**
   * The homeserver has indiciated the user needs to consent to the Terms and Conditions
   * before they can send a message.
   */
  NeedsConsent: "NeedsConsent",
  /**
   * The homeserver has indiciated that messages can not be sent due to a resource limit
   * being reached. The user may use the given admin contact details.
   */
  ResourceLimited: "ResourceLimited",
  /**
   * There are messages stored locally that previously failed to send that the user
   * may now retry or delete.
   */
  UnsentMessages: "UnsentMessages",
  /**
   * There was an error creating a room. The user may retry creation.
   */
  LocalRoomFailed: "LocalRoomFailed"
};
function P4({ vm: e }) {
  const { translate: t } = de(), n = se(e), r = Ar(), o = me(
    (c) => {
      c.preventDefault(), e.onDeleteAllClick?.();
    },
    [e]
  ), a = me(
    (c) => {
      c.preventDefault(), e.onResendAllClick?.();
    },
    [e]
  ), i = me(
    (c) => {
      c.preventDefault(), e.onRetryRoomCreationClick?.();
    },
    [e]
  ), s = me(() => {
    e.onTermsAndConditionsClicked?.();
  }, [e]);
  if (n.state === null)
    return null;
  switch (n.state) {
    case ir.ConnectionLost:
      return /* @__PURE__ */ p.createElement(ar, { type: "critical", role: "status", "aria-labelledby": r }, /* @__PURE__ */ p.createElement("div", { className: we.container }, /* @__PURE__ */ p.createElement(gt, { className: we.title, id: r, weight: "medium" }, t("room|status_bar|server_connectivity_lost_title")), /* @__PURE__ */ p.createElement(gt, { className: we.description }, t("room|status_bar|server_connectivity_lost_description"))));
    case ir.NeedsConsent:
      return /* @__PURE__ */ p.createElement(
        ar,
        {
          type: "critical",
          role: "status",
          "aria-labelledby": r,
          actions: /* @__PURE__ */ p.createElement(
            Fe,
            {
              onClick: s,
              className: we.primaryAction,
              kind: "primary",
              size: "sm",
              as: "a",
              href: n.consentUri,
              target: "_blank",
              rel: "noreferrer noopener"
            },
            t("terms|tac_button")
          )
        },
        /* @__PURE__ */ p.createElement("div", { className: we.container }, /* @__PURE__ */ p.createElement(gt, { className: we.title, id: r, weight: "medium" }, t("room|status_bar|requires_consent_agreement_title")))
      );
    case ir.ResourceLimited:
      return /* @__PURE__ */ p.createElement(
        ar,
        {
          type: "critical",
          role: "status",
          "aria-labelledby": r,
          actions: n.adminContactHref && /* @__PURE__ */ p.createElement(
            Fe,
            {
              kind: "secondary",
              size: "sm",
              as: "a",
              href: n.adminContactHref,
              target: "_blank",
              rel: "noreferrer noopener"
            },
            "Contact admin"
          )
        },
        /* @__PURE__ */ p.createElement("div", { className: we.container }, /* @__PURE__ */ p.createElement(gt, { className: we.title, id: r, weight: "medium" }, {
          monthly_active_user: t("room|status_bar|monthly_user_limit_reached_title"),
          hs_disabled: t("room|status_bar|homeserver_blocked_title")
        }[n.resourceLimit] || t("room|status_bar|exceeded_resource_limit_title")), /* @__PURE__ */ p.createElement(gt, { className: we.description }, t("room|status_bar|exceeded_resource_limit_description")))
      );
    case ir.LocalRoomFailed:
      return /* @__PURE__ */ p.createElement(
        ar,
        {
          role: "status",
          type: "critical",
          "aria-labelledby": r,
          actions: /* @__PURE__ */ p.createElement(
            Fe,
            {
              size: "sm",
              kind: "primary",
              className: we.primaryAction,
              Icon: xf,
              onClick: i
            },
            t("action|retry")
          )
        },
        /* @__PURE__ */ p.createElement(gt, { className: we.title, id: r, weight: "medium" }, t("room|status_bar|failed_to_create_room_title"))
      );
    case ir.UnsentMessages:
      return /* @__PURE__ */ p.createElement(
        ar,
        {
          role: "status",
          type: "critical",
          actions: n.isResending ? /* @__PURE__ */ p.createElement(Jm, null) : /* @__PURE__ */ p.createElement(p.Fragment, null, e.onDeleteAllClick && /* @__PURE__ */ p.createElement(
            Fe,
            {
              size: "sm",
              kind: "secondary",
              Icon: k8,
              disabled: n.isResending,
              className: we.secondaryAction,
              onClick: o
            },
            t("room|status_bar|delete_all")
          ), e.onResendAllClick && /* @__PURE__ */ p.createElement(
            Fe,
            {
              size: "sm",
              kind: "primary",
              Icon: xf,
              disabled: n.isResending,
              onClick: a,
              className: we.primaryAction
            },
            t("room|status_bar|retry_all")
          )),
          "aria-labelledby": r
        },
        /* @__PURE__ */ p.createElement("div", { className: we.container }, /* @__PURE__ */ p.createElement(gt, { className: we.title, id: r, weight: "medium" }, t("room|status_bar|some_messages_not_sent")), /* @__PURE__ */ p.createElement(gt, { className: we.description }, t("room|status_bar|select_messages_to_retry")))
      );
    default:
      return null;
  }
}
const DE = "_disambiguatedProfile_oa3at_8", zE = "_disambiguatedProfile_displayName_oa3at_14", FE = "_disambiguatedProfile_mxid_oa3at_22", Fi = {
  disambiguatedProfile: DE,
  disambiguatedProfile_displayName: zE,
  disambiguatedProfile_mxid: FE
};
function C4({ vm: e }) {
  const { displayName: t, colorClass: n, displayIdentifier: r, title: o, emphasizeDisplayName: a, className: i } = se(e), s = re(n, {
    [Fi.disambiguatedProfile_displayName]: a,
    mx_DisambiguatedProfile_displayName: a
  }), c = e.onClick ? (l) => {
    (l.key === "Enter" || l.key === " ") && (l.preventDefault(), e.onClick?.(l));
  } : void 0;
  return /* @__PURE__ */ p.createElement(
    "div",
    {
      className: re(i, Fi.disambiguatedProfile),
      title: o,
      onClick: e.onClick,
      onKeyDown: c,
      role: e.onClick ? "button" : void 0,
      tabIndex: e.onClick ? 0 : void 0
    },
    /* @__PURE__ */ p.createElement("span", { className: s, dir: "auto" }, t),
    r && /* @__PURE__ */ p.createElement("span", { className: re("mx_DisambiguatedProfile_mxid", Fi.disambiguatedProfile_mxid) }, r)
  );
}
function M4({ historyVisibility: e }) {
  const t = {
    color: "var(--cpd-color-icon-info-primary)",
    width: "1rem",
    // 16px at the default font size, per the design
    height: "1rem"
  };
  switch (e) {
    case "invited":
    case "joined":
      return /* @__PURE__ */ p.createElement(ua, { kind: "blue" }, /* @__PURE__ */ p.createElement(G8, { ...t }), M("room|history_visibility_badge|private"));
    case "shared":
      return /* @__PURE__ */ p.createElement(ua, { kind: "blue" }, /* @__PURE__ */ p.createElement(P8, { ...t }), M("room|history_visibility_badge|shared"));
    case "world_readable":
      return /* @__PURE__ */ p.createElement(ua, { kind: "blue" }, /* @__PURE__ */ p.createElement(U8, { ...t }), M("room|history_visibility_badge|world_readable"));
    default:
      return null;
  }
}
const LE = "_richItem_1c0uo_8", qE = "_avatar_1c0uo_36", $E = "_title_1c0uo_41", HE = "_description_1c0uo_47", UE = "_timestamp_1c0uo_51", KE = "_checkmark_1c0uo_69", On = {
  richItem: LE,
  avatar: qE,
  title: $E,
  description: HE,
  timestamp: UE,
  checkmark: KE
}, N4 = (0,react.memo)(function({
  avatar: t,
  title: n,
  description: r,
  timestamp: o,
  selected: a,
  ...i
}) {
  const s = de();
  return /* @__PURE__ */ react.createElement(
    "li",
    {
      className: On.richItem,
      role: "option",
      tabIndex: -1,
      "aria-selected": a,
      "aria-label": n,
      ...i
    },
    a ? /* @__PURE__ */ react.createElement(VE, null) : /* @__PURE__ */ react.createElement(Z, { className: On.avatar }, t),
    /* @__PURE__ */ react.createElement("span", { className: On.title }, n),
    /* @__PURE__ */ react.createElement("span", { className: On.description }, r),
    o && /* @__PURE__ */ react.createElement("span", { role: "timer", className: On.timestamp }, s.humanizeTime(o))
  );
});
function VE() {
  return /* @__PURE__ */ react.createElement(Z, { align: "center", justify: "center", "aria-hidden": "true", className: On.checkmark }, /* @__PURE__ */ react.createElement(sm, { width: "24px", height: "24px", color: "var(--cpd-color-icon-on-solid-primary)" }));
}
const GE = "_richList_1mcas_8", YE = "_title_1mcas_12", WE = "_content_1mcas_18", ZE = "_empty_1mcas_26", ro = {
  richList: GE,
  title: YE,
  content: WE,
  empty: ZE
};
function JE() {
  const e = Qe(null), t = me((r) => {
    if (e.current && r.target === e.current) {
      let o = e.current?.firstElementChild;
      for (const a of e.current.children)
        if (a.getAttribute("aria-selected") === "true") {
          o = a;
          break;
        }
      o?.focus();
    }
  }, []), n = me((r) => {
    const { key: o } = r;
    let a = !1;
    switch (o) {
      case "Enter":
      case " ": {
        a = !0, document.activeElement.click();
        break;
      }
      case "ArrowDown": {
        a = !0;
        const i = document.activeElement;
        e.current?.contains(i) && i && i.nextElementSibling?.focus();
        break;
      }
      case "ArrowUp": {
        a = !0;
        const i = document.activeElement;
        e.current?.contains(i) && i && i.previousElementSibling?.focus();
        break;
      }
      case "Home": {
        a = !0, e.current?.firstElementChild?.focus();
        break;
      }
      case "End": {
        a = !0, e.current?.lastElementChild?.focus();
        break;
      }
    }
    a && r.preventDefault();
  }, []);
  return { listRef: e, onKeyDown: n, onFocus: t };
}
function x4({
  children: e,
  title: t,
  className: n,
  titleAttributes: r,
  isEmpty: o = !1,
  ...a
}) {
  const i = Ar(), { listRef: s, onKeyDown: c, onFocus: l } = JE();
  return /* @__PURE__ */ p.createElement(Z, { className: re(ro.richList, n), direction: "column", ...a }, /* @__PURE__ */ p.createElement("span", { id: i, className: ro.title, ...r }, t), o ? /* @__PURE__ */ p.createElement("span", { className: ro.empty }, e) : /* @__PURE__ */ p.createElement(
    "ul",
    {
      ref: s,
      role: "listbox",
      className: ro.content,
      "aria-labelledby": i,
      tabIndex: 0,
      onKeyDown: c,
      onFocus: l
    },
    e
  ));
}
const QE = "_title_1qyi3_8", XE = {
  title: QE
};
function e5({ vm: e }) {
  const { translate: t } = de(), [n, r] = ge(!1), { activeSortOption: o, isMessagePreviewEnabled: a } = se(e);
  return /* @__PURE__ */ p.createElement(
    un,
    {
      open: n,
      onOpenChange: r,
      title: t("room_list|room_options"),
      showTitle: !1,
      align: "start",
      trigger: /* @__PURE__ */ p.createElement(
        dt,
        {
          tooltip: t("room_list|room_options"),
          "aria-label": t("room_list|room_options"),
          size: "28px",
          style: { padding: "4px" }
        },
        /* @__PURE__ */ p.createElement(Yc, null)
      )
    },
    /* @__PURE__ */ p.createElement(Wc, { title: t("room_list|sort"), className: XE.title }),
    /* @__PURE__ */ p.createElement(
      fa,
      {
        label: t("room_list|sort_type|activity"),
        checked: o === "recent",
        onSelect: () => e.sort("recent")
      }
    ),
    /* @__PURE__ */ p.createElement(
      fa,
      {
        label: t("room_list|sort_type|unread_first"),
        checked: o === "unread-first",
        onSelect: () => e.sort("unread-first")
      }
    ),
    /* @__PURE__ */ p.createElement(
      fa,
      {
        label: t("room_list|sort_type|atoz"),
        checked: o === "alphabetical",
        onSelect: () => e.sort("alphabetical")
      }
    ),
    /* @__PURE__ */ p.createElement(Wc, { title: t("room_list|appearance") }),
    /* @__PURE__ */ p.createElement(
      Qm,
      {
        label: t("room_list|show_message_previews"),
        onSelect: e.toggleMessagePreview,
        checked: a
      }
    )
  );
}
const t5 = "_button_1veqf_8", n5 = {
  button: t5
};
function r5({ vm: e }) {
  const { translate: t } = de(), { canInviteInSpace: n, canAccessSpaceSettings: r, title: o } = se(e), [a, i] = ge(!1);
  return /* @__PURE__ */ p.createElement(
    un,
    {
      open: a,
      onOpenChange: i,
      title: o,
      align: "start",
      trigger: /* @__PURE__ */ p.createElement(
        dt,
        {
          className: n5.button,
          "aria-label": t("room_list|open_space_menu"),
          size: "24px",
          style: { padding: "2px" }
        },
        /* @__PURE__ */ p.createElement(Gc, null)
      )
    },
    /* @__PURE__ */ p.createElement(X, { Icon: C8, label: t("room_list|space_menu|home"), onSelect: e.openSpaceHome, hideChevron: !0 }),
    n && /* @__PURE__ */ p.createElement(X, { Icon: Fm, label: t("action|invite"), onSelect: e.inviteInSpace, hideChevron: !0 }),
    /* @__PURE__ */ p.createElement(
      X,
      {
        Icon: L8,
        label: t("common|preferences"),
        onSelect: e.openSpacePreferences,
        hideChevron: !0
      }
    ),
    r && /* @__PURE__ */ p.createElement(
      X,
      {
        Icon: H8,
        label: t("room_list|space_menu|space_settings"),
        onSelect: e.openSpaceSettings,
        hideChevron: !0
      }
    )
  );
}
function o5({ vm: e }) {
  const { translate: t } = de(), [n, r] = ge(!1), { canCreateRoom: o, canCreateVideoRoom: a } = se(e);
  return /* @__PURE__ */ p.createElement(
    un,
    {
      open: n,
      onOpenChange: r,
      showTitle: !1,
      title: t("action|open_menu"),
      align: "start",
      trigger: (
        // 28px button with a 20px icon
        /* @__PURE__ */ p.createElement(dt, { size: "28px", style: { padding: "4px" }, tooltip: t("action|new_conversation") }, /* @__PURE__ */ p.createElement(fm, { "aria-hidden": !0 }))
      )
    },
    /* @__PURE__ */ p.createElement(X, { Icon: am, label: t("action|start_chat"), onSelect: e.createChatRoom, hideChevron: !0 }),
    o && /* @__PURE__ */ p.createElement(X, { Icon: xm, label: t("action|new_room"), onSelect: e.createRoom, hideChevron: !0 }),
    a && /* @__PURE__ */ p.createElement(
      X,
      {
        Icon: V8,
        label: t("action|new_video_room"),
        onSelect: e.createVideoRoom,
        hideChevron: !0
      }
    )
  );
}
const a5 = "_header_18yeb_8", i5 = "_container_18yeb_13", s5 = "_title_18yeb_19", Li = {
  header: a5,
  container: i5,
  title: s5
};
function B4({ vm: e }) {
  const { translate: t } = de(), { title: n, displaySpaceMenu: r, displayComposeMenu: o } = se(e);
  return /* @__PURE__ */ p.createElement(
    Z,
    {
      as: "header",
      className: Li.header,
      "aria-label": t("room|context_menu|title"),
      align: "end",
      "data-testid": "room-list-header"
    },
    /* @__PURE__ */ p.createElement(Z, { className: Li.container, justify: "space-between", align: "center", gap: "var(--cpd-space-3x)" }, /* @__PURE__ */ p.createElement(Z, { className: Li.title, align: "center", gap: "var(--cpd-space-1x)" }, /* @__PURE__ */ p.createElement(Xm, { size: "sm", title: n }, n), r && /* @__PURE__ */ p.createElement(r5, { vm: e })), /* @__PURE__ */ p.createElement(Z, { align: "center", gap: "var(--cpd-space-2x)" }, /* @__PURE__ */ p.createElement(e5, { vm: e }), o ? /* @__PURE__ */ p.createElement(o5, { vm: e }) : /* @__PURE__ */ p.createElement(
      dt,
      {
        size: "28px",
        style: { padding: "4px" },
        onClick: (a) => e.createChatRoom(a.nativeEvent),
        tooltip: t("action|new_conversation")
      },
      /* @__PURE__ */ p.createElement(fm, { color: "var(--cpd-color-icon-secondary)", "aria-hidden": !0 })
    )))
  );
}
const c5 = "_view_z7ks9_8", l5 = "_search_z7ks9_16", u5 = "_search_container_z7ks9_29", f5 = "_search_text_z7ks9_41", oo = {
  view: c5,
  search: l5,
  search_container: u5,
  search_text: f5
};
function D4({ vm: e }) {
  const { translate: t } = de(), { displayExploreButton: n, displayDialButton: r, searchShortcut: o } = se(e);
  return /* @__PURE__ */ p.createElement(
    Z,
    {
      "data-testid": "room-list-search",
      className: oo.view,
      role: "search",
      gap: "var(--cpd-space-2x)",
      align: "center"
    },
    /* @__PURE__ */ p.createElement(
      Fe,
      {
        id: "room-list-search-button",
        className: oo.search,
        kind: "secondary",
        size: "sm",
        Icon: $8,
        onClick: e.onSearchClick
      },
      /* @__PURE__ */ p.createElement(Z, { className: oo.search_container, as: "span", justify: "space-between" }, /* @__PURE__ */ p.createElement("span", { className: oo.search_text }, t("action|search")), /* @__PURE__ */ p.createElement("kbd", null, o))
    ),
    r && /* @__PURE__ */ p.createElement(
      Fe,
      {
        kind: "secondary",
        size: "sm",
        Icon: R8,
        iconOnly: !0,
        "aria-label": t("left_panel|open_dial_pad"),
        onClick: e.onDialPadClick
      }
    ),
    n && /* @__PURE__ */ p.createElement(
      Fe,
      {
        kind: "secondary",
        size: "sm",
        Icon: j8,
        iconOnly: !0,
        "aria-label": t("action|explore_rooms"),
        onClick: e.onExploreClick
      }
    )
  );
}
function d5(e, t) {
  const n = (0,react.useRef)(null), [r, o] = (0,react.useState)(!1), [a, i] = (0,react.useState)(-1);
  return (0,react.useEffect)(() => {
    if (!n.current) return;
    const s = (l) => {
      let f = !1;
      Array.from(l.children).forEach((d, u) => {
        const v = d;
        if (v.setAttribute("aria-hidden", "false"), v.classList.remove(t), e) return;
        const m = v.previousElementSibling;
        m && v.offsetLeft <= m.offsetLeft && (f || i(u), f = !0), v.classList.toggle(t, f), v.setAttribute("aria-hidden", f.toString());
      }), f || i(-1), o(e || f);
    };
    s(n.current);
    const c = new ResizeObserver((l) => l.forEach((f) => s(f.target)));
    return c.observe(n.current), () => {
      c.disconnect();
    };
  }, [e, t]), { ref: n, isWrapping: r, wrappingIndex: a };
}
function p5(e, t, n) {
  const [r, o] = (0,react.useState)(e);
  return (0,react.useEffect)(() => {
    if (!((t ? e.indexOf(t) : -1) >= n) || n === -1) {
      o(e);
      return;
    }
    o(
      e.slice().sort((s, c) => s === t && c !== t ? -1 : s !== t && c === t ? 1 : 0)
    );
  }, [e, t, n]), r;
}
const m5 = "_roomListPrimaryFilters_1dmi7_8", h5 = "_list_1dmi7_17", g5 = "_iconButton_1dmi7_26", qi = {
  roomListPrimaryFilters: m5,
  list: h5,
  iconButton: g5
}, y5 = (e) => {
  switch (e) {
    case "unread":
      return M("room_list|filters|unread");
    case "people":
      return M("room_list|filters|people");
    case "rooms":
      return M("room_list|filters|rooms");
    case "favourite":
      return M("room_list|filters|favourite");
    case "mentions":
      return M("room_list|filters|mentions");
    case "invites":
      return M("room_list|filters|invites");
    case "low_priority":
      return M("room_list|filters|low_priority");
  }
}, v5 = (0,react.memo)(function({
  filterIds: t,
  activeFilterId: n,
  onToggleFilter: r
}) {
  const o = (0,react.useId)(), [a, i] = (0,react.useState)(!1), {
    ref: s,
    isWrapping: c,
    wrappingIndex: l
  } = d5(a, "wrapping"), f = p5(t, n, l);
  return /* @__PURE__ */ react.createElement(
    Z,
    {
      className: qi.roomListPrimaryFilters,
      "data-testid": "primary-filters",
      gap: "var(--cpd-space-3x)",
      direction: "row-reverse",
      justify: "space-between"
    },
    c && /* @__PURE__ */ react.createElement(
      IconButton/* IconButton */.K,
      {
        kind: "secondary",
        "aria-expanded": a,
        "aria-controls": o,
        className: qi.iconButton,
        "aria-label": M(a ? "room_list|collapse_filters" : "room_list|expand_filters"),
        size: "28px",
        onClick: () => i((d) => !d)
      },
      /* @__PURE__ */ react.createElement(Gc, null)
    ),
    /* @__PURE__ */ react.createElement(
      Z,
      {
        id: o,
        as: "div",
        role: "listbox",
        "aria-label": M("room_list|primary_filters"),
        align: "center",
        gap: "var(--cpd-space-2x)",
        wrap: "wrap",
        className: qi.list,
        ref: s
      },
      f.map((d, u) => /* @__PURE__ */ react.createElement(
        ChatFilter/* ChatFilter */.T,
        {
          key: `${d}-${u}`,
          role: "option",
          selected: d === n,
          onClick: () => r(d)
        },
        y5(d)
      ))
    )
  );
}), b5 = "_skeleton_1h0mx_8", _5 = {
  skeleton: b5
}, w5 = () => /* @__PURE__ */ p.createElement("div", { className: _5.skeleton }), E5 = "_genericPlaceholder_1sxid_8", A5 = "_title_1sxid_16", S5 = "_description_1sxid_21", T5 = "_defaultPlaceholder_1sxid_27", fo = {
  genericPlaceholder: E5,
  title: A5,
  description: S5,
  defaultPlaceholder: T5
}, k5 = ({ vm: e }) => {
  const t = se(e);
  if (!t.activeFilterId)
    return /* @__PURE__ */ p.createElement(
      Pn,
      {
        title: M("room_list|empty|no_chats"),
        description: t.canCreateRoom ? M("room_list|empty|no_chats_description") : M("room_list|empty|no_chats_description_no_room_rights")
      },
      /* @__PURE__ */ p.createElement(
        Z,
        {
          className: fo.defaultPlaceholder,
          align: "center",
          justify: "center",
          direction: "column",
          gap: "var(--cpd-space-4x)"
        },
        /* @__PURE__ */ p.createElement(Fe, { size: "sm", kind: "secondary", Icon: am, onClick: e.createChatRoom }, M("action|start_chat")),
        t.canCreateRoom && /* @__PURE__ */ p.createElement(Fe, { size: "sm", kind: "secondary", Icon: xm, onClick: e.createRoom }, M("action|new_room"))
      )
    );
  switch (t.activeFilterId) {
    case "favourite":
      return /* @__PURE__ */ p.createElement(
        Pn,
        {
          title: M("room_list|empty|no_favourites"),
          description: M("room_list|empty|no_favourites_description")
        }
      );
    case "people":
      return /* @__PURE__ */ p.createElement(
        Pn,
        {
          title: M("room_list|empty|no_people"),
          description: M("room_list|empty|no_people_description")
        }
      );
    case "rooms":
      return /* @__PURE__ */ p.createElement(
        Pn,
        {
          title: M("room_list|empty|no_rooms"),
          description: M("room_list|empty|no_rooms_description")
        }
      );
    case "unread":
      return /* @__PURE__ */ p.createElement(
        ao,
        {
          title: M("room_list|empty|no_unread"),
          action: M("room_list|empty|show_chats"),
          onAction: () => e.onToggleFilter(t.activeFilterId)
        }
      );
    case "invites":
      return /* @__PURE__ */ p.createElement(
        ao,
        {
          title: M("room_list|empty|no_invites"),
          action: M("room_list|empty|show_activity"),
          onAction: () => e.onToggleFilter(t.activeFilterId)
        }
      );
    case "mentions":
      return /* @__PURE__ */ p.createElement(
        ao,
        {
          title: M("room_list|empty|no_mentions"),
          action: M("room_list|empty|show_activity"),
          onAction: () => e.onToggleFilter(t.activeFilterId)
        }
      );
    case "low_priority":
      return /* @__PURE__ */ p.createElement(
        ao,
        {
          title: M("room_list|empty|no_lowpriority"),
          action: M("room_list|empty|show_activity"),
          onAction: () => e.onToggleFilter(t.activeFilterId)
        }
      );
    default:
      return /* @__PURE__ */ p.createElement(
        Pn,
        {
          title: M("room_list|empty|no_chats"),
          description: M("room_list|empty|no_chats_description")
        }
      );
  }
};
function Pn({ title: e, description: t, children: n }) {
  return /* @__PURE__ */ p.createElement(
    Z,
    {
      "data-testid": "empty-room-list",
      className: fo.genericPlaceholder,
      direction: "column",
      align: "stretch",
      justify: "center",
      gap: "var(--cpd-space-2x)"
    },
    /* @__PURE__ */ p.createElement("span", { className: fo.title }, e),
    t && /* @__PURE__ */ p.createElement("span", { className: fo.description }, t),
    n
  );
}
function ao({ title: e, action: t, onAction: n }) {
  return /* @__PURE__ */ p.createElement(Pn, { title: e }, n && /* @__PURE__ */ p.createElement(Fe, { kind: "tertiary", onClick: n }, t));
}
const R5 = ({
  hasAnyNotificationOrActivity: e,
  muted: t,
  callType: n,
  isUnsentMessage: r,
  invited: o,
  isMention: a,
  isNotification: i,
  isActivityNotification: s,
  count: c
}) => !e && !t && !n ? null : /* @__PURE__ */ react.createElement(Z, { align: "center", justify: "center", gap: "var(--cpd-space-1x)", "data-testid": "notification-decoration" }, r && /* @__PURE__ */ react.createElement(gm, { width: "20px", height: "20px", fill: "var(--cpd-color-icon-critical-primary)" }), n === "video" && /* @__PURE__ */ react.createElement(K8, { width: "20px", height: "20px", fill: "var(--cpd-color-icon-accent-primary)" }), n === "voice" && /* @__PURE__ */ react.createElement(Y8, { width: "20px", height: "20px", fill: "var(--cpd-color-icon-accent-primary)" }), o && /* @__PURE__ */ react.createElement(I8, { width: "20px", height: "20px", fill: "var(--cpd-color-icon-accent-primary)" }), a && /* @__PURE__ */ react.createElement(z8, { width: "20px", height: "20px", fill: "var(--cpd-color-icon-accent-primary)" }), (a || i) && /* @__PURE__ */ react.createElement(UnreadCounter/* UnreadCounter */.A, { count: c || null }), s && /* @__PURE__ */ react.createElement(Unread/* Unread */.I, null), t && /* @__PURE__ */ react.createElement(Im, { width: "20px", height: "20px", fill: "var(--cpd-color-icon-tertiary)" }));
function I5({ vm: e }) {
  const [t, n] = (0,react.useState)(!1);
  return /* @__PURE__ */ react.createElement(
    Menu/* Menu */.W,
    {
      open: t,
      onOpenChange: n,
      title: M("room_list|room|more_options"),
      showTitle: !1,
      align: "start",
      trigger: /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          tooltip: M("room_list|room|more_options"),
          "aria-label": M("room_list|room|more_options"),
          size: "24px",
          style: { padding: "2px" }
        },
        /* @__PURE__ */ react.createElement(Yc, null)
      )
    },
    /* @__PURE__ */ react.createElement(Km, { vm: e })
  );
}
function Km({ vm: e }) {
  const t = se(e);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ react.createElement("div", { onKeyDown: (n) => n.stopPropagation() }, t.canMarkAsRead && /* @__PURE__ */ react.createElement(
      MenuItem/* MenuItem */.D,
      {
        Icon: B8,
        label: M("room_list|more_options|mark_read"),
        onSelect: e.onMarkAsRead,
        onClick: (n) => n.stopPropagation(),
        hideChevron: !0
      }
    ), t.canMarkAsUnread && /* @__PURE__ */ react.createElement(
      MenuItem/* MenuItem */.D,
      {
        Icon: D8,
        label: M("room_list|more_options|mark_unread"),
        onSelect: e.onMarkAsUnread,
        onClick: (n) => n.stopPropagation(),
        hideChevron: !0
      }
    ), /* @__PURE__ */ react.createElement(
      ToggleMenuItem/* ToggleMenuItem */.X,
      {
        checked: t.isFavourite,
        Icon: O8,
        label: M("room_list|more_options|favourited"),
        onSelect: e.onToggleFavorite,
        onClick: (n) => n.stopPropagation()
      }
    ), /* @__PURE__ */ react.createElement(
      ToggleMenuItem/* ToggleMenuItem */.X,
      {
        checked: t.isLowPriority,
        Icon: S8,
        label: M("room_list|more_options|low_priority"),
        onSelect: e.onToggleLowPriority,
        onClick: (n) => n.stopPropagation()
      }
    ), t.canInvite && /* @__PURE__ */ react.createElement(
      MenuItem/* MenuItem */.D,
      {
        Icon: Fm,
        label: M("action|invite"),
        onSelect: e.onInvite,
        onClick: (n) => n.stopPropagation(),
        hideChevron: !0
      }
    ), t.canCopyRoomLink && /* @__PURE__ */ react.createElement(
      MenuItem/* MenuItem */.D,
      {
        Icon: N8,
        label: M("room_list|more_options|copy_link"),
        onSelect: e.onCopyRoomLink,
        onClick: (n) => n.stopPropagation(),
        hideChevron: !0
      }
    ), /* @__PURE__ */ react.createElement(Separator/* Separator */.w, null), /* @__PURE__ */ react.createElement(
      MenuItem/* MenuItem */.D,
      {
        kind: "critical",
        Icon: M8,
        label: M("room_list|more_options|leave_room"),
        onSelect: e.onLeaveRoom,
        onClick: (n) => n.stopPropagation(),
        hideChevron: !0
      }
    ))
  );
}
var ke = /* @__PURE__ */ ((e) => (e.AllMessages = "all_messages", e.AllMessagesLoud = "all_messages_loud", e.MentionsOnly = "mentions_only", e.Mute = "mute", e))(ke || {});
function j5({ vm: e }) {
  const t = se(e), [n, r] = (0,react.useState)(!1), o = t.roomNotifState === ke.Mute, a = /* @__PURE__ */ react.createElement(sm, { width: "24px", height: "24px", color: "var(--cpd-color-icon-primary)" });
  return /* @__PURE__ */ react.createElement(
    Menu/* Menu */.W,
    {
      open: n,
      onOpenChange: r,
      title: M("room_list|notification_options"),
      showTitle: !1,
      align: "start",
      trigger: /* @__PURE__ */ react.createElement(
        IconButton/* IconButton */.K,
        {
          size: "24px",
          style: { padding: "2px" },
          tooltip: M("room_list|notification_options"),
          "aria-label": M("room_list|notification_options")
        },
        o ? /* @__PURE__ */ react.createElement(Im, null) : /* @__PURE__ */ react.createElement(F8, null)
      )
    },
    /* @__PURE__ */ react.createElement(
      "div",
      {
        onKeyDown: (i) => i.stopPropagation()
      },
      /* @__PURE__ */ react.createElement(
        MenuItem/* MenuItem */.D,
        {
          "aria-selected": t.roomNotifState === ke.AllMessages,
          hideChevron: !0,
          label: M("notifications|default_settings"),
          onSelect: () => e.onSetRoomNotifState(ke.AllMessages),
          onClick: (i) => i.stopPropagation()
        },
        t.roomNotifState === ke.AllMessages && a
      ),
      /* @__PURE__ */ react.createElement(
        MenuItem/* MenuItem */.D,
        {
          "aria-selected": t.roomNotifState === ke.AllMessagesLoud,
          hideChevron: !0,
          label: M("notifications|all_messages"),
          onSelect: () => e.onSetRoomNotifState(ke.AllMessagesLoud),
          onClick: (i) => i.stopPropagation()
        },
        t.roomNotifState === ke.AllMessagesLoud && a
      ),
      /* @__PURE__ */ react.createElement(
        MenuItem/* MenuItem */.D,
        {
          "aria-selected": t.roomNotifState === ke.MentionsOnly,
          hideChevron: !0,
          label: M("notifications|mentions_keywords"),
          onSelect: () => e.onSetRoomNotifState(ke.MentionsOnly),
          onClick: (i) => i.stopPropagation()
        },
        t.roomNotifState === ke.MentionsOnly && a
      ),
      /* @__PURE__ */ react.createElement(
        MenuItem/* MenuItem */.D,
        {
          "aria-selected": t.roomNotifState === ke.Mute,
          hideChevron: !0,
          label: M("notifications|mute_room"),
          onSelect: () => e.onSetRoomNotifState(ke.Mute),
          onClick: (i) => i.stopPropagation()
        },
        t.roomNotifState === ke.Mute && a
      )
    )
  );
}
const O5 = "_roomListItem_rtaba_8", P5 = "_hoverMenu_rtaba_32", C5 = "_container_rtaba_46", M5 = "_selected_rtaba_51", N5 = "_notificationDecoration_rtaba_60", x5 = "_content_rtaba_73", B5 = "_ellipsis_rtaba_82", D5 = "_roomName_rtaba_83", z5 = "_bold_rtaba_109", F5 = "_firstItem_rtaba_123", L5 = "_lastItem_rtaba_127", ze = {
  roomListItem: O5,
  hoverMenu: P5,
  container: C5,
  selected: M5,
  notificationDecoration: N5,
  content: x5,
  ellipsis: B5,
  roomName: D5,
  bold: z5,
  firstItem: F5,
  lastItem: L5
}, q5 = ({
  showMoreOptionsMenu: e,
  showNotificationMenu: t,
  vm: n
}) => /* @__PURE__ */ react.createElement(Z, { className: ze.hoverMenu, align: "center", gap: "var(--cpd-space-1x)" }, e && /* @__PURE__ */ react.createElement(I5, { vm: n }), t && /* @__PURE__ */ react.createElement(j5, { vm: n })), $5 = ({
  vm: e,
  children: t
}) => /* @__PURE__ */ react.createElement(
  ContextMenu/* ContextMenu */.t,
  {
    title: M("room_list|room|more_options"),
    showTitle: !1,
    hasAccessibleAlternative: !0,
    trigger: t
  },
  /* @__PURE__ */ react.createElement(Km, { vm: e })
);
function H5(e, t) {
  return t.isUnsentMessage ? M("room_list|a11y|unsent_message", { roomName: e }) : t.invited ? M("room_list|a11y|invitation", { roomName: e }) : t.isMention && t.count ? M("room_list|a11y|mention", { roomName: e, count: t.count }) : t.hasUnreadCount && t.count ? M("room_list|a11y|unread", { roomName: e, count: t.count }) : M("room_list|a11y|default", { roomName: e });
}
const U5 = (0,react.memo)(function({
  vm: t,
  isSelected: n,
  isFocused: r,
  onFocus: o,
  roomIndex: a,
  roomCount: i,
  renderAvatar: s,
  ...c
}) {
  const l = (0,react.useRef)(null), f = se(t);
  (0,react.useEffect)(() => {
    r && l.current?.focus({ preventScroll: !0, focusVisible: !0 });
  }, [r]);
  const d = H5(f.name, f.notification), u = /* @__PURE__ */ react.createElement(
    Z,
    {
      as: "button",
      ref: l,
      className: re(ze.roomListItem, "mx_RoomListItemView", {
        [ze.selected]: n,
        [ze.bold]: f.isBold,
        [ze.firstItem]: a === 0,
        [ze.lastItem]: a === i - 1,
        mx_RoomListItemView_selected: n
      }),
      gap: "var(--cpd-space-3x)",
      align: "stretch",
      type: "button",
      role: "option",
      "aria-posinset": a + 1,
      "aria-setsize": i,
      "aria-selected": n,
      "aria-label": d,
      onClick: t.onOpenRoom,
      onFocus: (v) => o(f.id, v),
      tabIndex: r ? 0 : -1,
      ...c
    },
    /* @__PURE__ */ react.createElement(Z, { className: ze.container, gap: "var(--cpd-space-3x)", align: "center" }, s(f.room), /* @__PURE__ */ react.createElement(Z, { className: ze.content, gap: "var(--cpd-space-2x)", align: "center", justify: "space-between" }, /* @__PURE__ */ react.createElement("div", { className: ze.ellipsis }, /* @__PURE__ */ react.createElement("div", { className: ze.roomName, title: f.name, "data-testid": "room-name" }, f.name), f.messagePreview && /* @__PURE__ */ react.createElement(Text/* Text */.E, { as: "div", size: "sm", className: ze.ellipsis, title: f.messagePreview }, f.messagePreview)), (f.showMoreOptionsMenu || f.showNotificationMenu) && /* @__PURE__ */ react.createElement(
      q5,
      {
        showMoreOptionsMenu: f.showMoreOptionsMenu,
        showNotificationMenu: f.showNotificationMenu,
        vm: t
      }
    ), /* @__PURE__ */ react.createElement("div", { className: ze.notificationDecoration, "aria-hidden": !0 }, /* @__PURE__ */ react.createElement(R5, { ...f.notification }))))
  );
  return /* @__PURE__ */ react.createElement($5, { vm: t }, u);
}), jn = {
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  HOME: "Home",
  END: "End",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown"
};
function K5(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function V5(e) {
  const {
    items: t,
    getItemComponent: n,
    isItemFocusable: r,
    getItemKey: o,
    context: a,
    onKeyDown: i,
    totalCount: s,
    rangeChanged: c,
    ...l
  } = e, f = Qe(null), d = Qe(null), [u, v] = ge(
    e.items[0] ? o(e.items[0]) : void 0
  ), [m, w] = ge(void 0), [E, h] = ge(/* @__PURE__ */ new Map()), [y, S] = ge(!1);
  on(() => {
    const x = /* @__PURE__ */ new Map();
    t.forEach((K, Y) => {
      const le = o(K);
      x.set(le, Y);
    }), h(x);
  }, [t, o]), on(() => {
    t.length && (!u || E.get(u) === void 0) && v(o(t[0]));
  }, [t, o, u, E]);
  const g = me(
    (x, K) => {
      const Y = Math.max(0, Math.min(x, t.length - 1));
      if (t[Y]) {
        const le = o(t[Y]);
        v(le), f.current?.scrollIntoView({
          index: Y,
          align: K,
          behavior: "auto"
        });
      }
    },
    [t, o]
  ), b = me(
    (x, K, Y) => {
      const le = t.length;
      let pe;
      for (let ie = x; K ? ie < le : ie >= 0; ie = ie + (K ? 1 : -1))
        if (r(t[ie])) {
          pe = ie;
          break;
        }
      pe !== void 0 && g(pe, Y);
    },
    [g, t, r]
  ), A = me(
    (x) => {
      const K = u ? E.get(u) : void 0;
      let Y = !1;
      if (!x || K5(x)) {
        i?.(x);
        return;
      }
      if (x.code === jn.ARROW_UP && K !== void 0)
        b(K - 1, !1), Y = !0;
      else if (x.code === jn.ARROW_DOWN && K !== void 0)
        b(K + 1, !0), Y = !0;
      else if (x.code === jn.HOME)
        g(0), Y = !0;
      else if (x.code === jn.END)
        g(t.length - 1), Y = !0;
      else if (x.code === jn.PAGE_DOWN && m && K !== void 0) {
        const le = m.endIndex - m.startIndex;
        b(Math.min(K + le, t.length - 1), !0, "start"), Y = !0;
      } else if (x.code === jn.PAGE_UP && m && K !== void 0) {
        const le = m.endIndex - m.startIndex;
        b(Math.max(K - le, 0), !1, "start"), Y = !0;
      }
      if (Y) {
        if (d.current instanceof HTMLElement) {
          const le = document.activeElement;
          le && le !== d.current && d.current.contains(le) && d.current.focus({ preventScroll: !0 });
        }
        x.stopPropagation(), x.preventDefault();
      } else
        i?.(x);
    },
    [g, b, u, E, m, t, i]
  ), k = me((x) => {
    d.current = x;
  }, []), O = me(
    (x, K) => {
      const Y = o(x);
      S(!0), v(Y), K.stopPropagation();
    },
    [o]
  ), C = me(
    (x, K, Y) => n(x, K, Y, O),
    [n, O]
  ), N = me(
    (x) => {
      if (x?.currentTarget !== d.current || typeof u != "string")
        return;
      S(!0);
      const K = E.get(u);
      K !== void 0 && m && (K < m.startIndex || K > m.endIndex) && g(K), x?.stopPropagation(), x?.preventDefault();
    },
    [E, m, g, u]
  ), q = me((x) => {
    x.currentTarget.contains(x.relatedTarget) || S(!1);
  }, []), G = ct(
    () => ({
      tabIndexKey: u,
      focused: y,
      context: e.context || {}
    }),
    [u, y, e.context]
  ), ce = me(
    (x) => {
      w(x), c?.(x);
    },
    [c]
  );
  return /* @__PURE__ */ p.createElement(
    c0,
    {
      ref: f,
      scrollerRef: k,
      onKeyDown: A,
      context: G,
      rangeChanged: ce,
      overscan: e.overscan || 0,
      data: e.items,
      totalCount: s,
      onFocus: N,
      onBlur: q,
      itemContent: C,
      ...l
    }
  );
}
const G5 = 52, Ff = 25 * G5;
function Y5({ vm: e, renderAvatar: t, onKeyDown: n }) {
  const r = se(e), { roomListState: o, roomIds: a } = r, i = o.activeRoomIndex, s = Qe(void 0), c = Qe(void 0), l = a.length, f = me(
    (w) => {
      e.updateVisibleRooms(w.startIndex, w.endIndex);
    },
    [e]
  ), d = me(
    (w, E, h, y) => {
      const S = i === w, g = e.getRoomItemViewModel(E), b = h.focused && h.tabIndexKey === E;
      return /* @__PURE__ */ p.createElement(
        U5,
        {
          key: E,
          vm: g,
          renderAvatar: t,
          isSelected: S,
          isFocused: b,
          onFocus: y,
          roomIndex: w,
          roomCount: l
        }
      );
    },
    [i, l, t, e]
  ), u = me((w) => w, []), v = ct(
    () => ({ spaceId: o.spaceId || "", filterKeys: o.filterKeys }),
    [o.spaceId, o.filterKeys]
  ), m = me(
    (w) => {
      const { spaceId: E, filterKeys: h } = w.context.context, y = s.current !== E || !Yw(c.current, h);
      return c.current = h, s.current = E, y ? {
        align: "start",
        index: i || 0,
        behavior: "auto"
      } : !1;
    },
    [i]
  );
  return /* @__PURE__ */ p.createElement(
    V5,
    {
      context: v,
      scrollIntoViewOnChange: m,
      ...i !== void 0 ? { initialTopMostItemIndex: i } : {},
      "data-testid": "room-list",
      role: "listbox",
      "aria-label": M("room_list|list_title"),
      items: a,
      getItemComponent: d,
      getItemKey: u,
      isItemFocusable: () => !0,
      rangeChanged: f,
      onKeyDown: n,
      increaseViewportBy: {
        bottom: Ff,
        top: Ff
      }
    }
  );
}
const z4 = ({ vm: e, renderAvatar: t, onKeyDown: n }) => {
  const r = se(e);
  let o;
  return r.isLoadingRooms ? o = /* @__PURE__ */ p.createElement(w5, null) : r.isRoomListEmpty ? o = /* @__PURE__ */ p.createElement(k5, { vm: e }) : o = /* @__PURE__ */ p.createElement(Y5, { vm: e, renderAvatar: t, onKeyDown: n }), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement("div", null, /* @__PURE__ */ p.createElement(
    v5,
    {
      filterIds: r.filterIds,
      activeFilterId: r.activeFilterId,
      onToggleFilter: e.onToggleFilter
    }
  )), o);
}, W5 = "_content_5dcky_8", Lf = {
  content: W5
}, qf = 15e3, $f = 75e3, Hf = 45, Uf = 75, Kf = 23, Vf = 26;
function Z5(e, t) {
  let r = Date.now() - e;
  const o = Math.abs(Math.ceil(r / 6e4)), a = Math.ceil(o / 60), i = Math.ceil(a / 24), s = t?.translate ?? M;
  return r >= 0 ? r <= qf ? s("time|few_seconds_ago") : r <= $f ? s("time|about_minute_ago") : o <= Hf ? s("time|n_minutes_ago", { num: o }) : o <= Uf ? s("time|about_hour_ago") : a <= Kf ? s("time|n_hours_ago", { num: a }) : a <= Vf ? s("time|about_day_ago") : s("time|n_days_ago", { num: i }) : (r = Math.abs(r), r <= qf ? s("time|in_few_seconds") : r <= $f ? s("time|in_about_minute") : o <= Hf ? s("time|in_n_minutes", { num: o }) : o <= Uf ? s("time|in_about_hour") : a <= Kf ? s("time|in_n_hours", { num: a }) : a <= Vf ? s("time|in_about_day") : s("time|in_n_days", { num: i }));
}
function Gf(e) {
  return new Intl.RelativeTimeFormat(e?.language, { style: "long", numeric: "auto" });
}
const J5 = "_picker_menu_item_1tj52_8", Q5 = "_picker_form_1tj52_12", X5 = "_picker_input_1tj52_22", e4 = "_picker_input_date_1tj52_28", sr = {
  picker_menu_item: J5,
  picker_form: Q5,
  picker_input: X5,
  picker_input_date: e4
}, t4 = ({
  vm: e,
  inputRef: t,
  onSubmitted: n,
  onDismissed: r
}) => {
  const o = se(e), a = o.jumpFromDate ? new Date(o.jumpFromDate) : /* @__PURE__ */ new Date(), i = zl(a), { translate: s } = de(), c = Ar(), [l, f] = ge(i), d = Qe(null), u = t ?? d, v = Qe(null), m = (g) => {
    g.key === "Tab" && (g.shiftKey ? r?.() : (g.preventDefault(), v.current?.focus()));
  }, w = (g) => {
    f(g.currentTarget.value);
  }, E = () => {
    e.onDatePicked?.(l), n?.();
  }, h = (g) => {
    g.preventDefault(), E();
  }, y = (g) => {
    g.key === "Tab" && (g.shiftKey ? (g.preventDefault(), u.current?.focus()) : r?.()), (g.key == "Enter" || g.key == " " || g.key == "Spacebar") && (g.preventDefault(), E());
  }, S = (g) => {
    g.preventDefault();
  };
  return /* @__PURE__ */ p.createElement(
    X,
    {
      as: "div",
      "data-testid": "jump-to-date-picker",
      label: s("room|jump_to_date"),
      onSelect: S,
      hideChevron: !0,
      className: sr.picker_menu_item
    },
    /* @__PURE__ */ p.createElement(o0, { className: sr.picker_form, onSubmit: h }, /* @__PURE__ */ p.createElement(a0, { name: "jump-to-date-field", className: sr.picker_input }, /* @__PURE__ */ p.createElement(
      i0,
      {
        ref: u,
        id: c,
        type: "date",
        "aria-label": s("room|jump_to_date_prompt"),
        onInput: w,
        onKeyDown: m,
        value: l,
        max: zl(/* @__PURE__ */ new Date()),
        className: sr.picker_input_date
      }
    )), /* @__PURE__ */ p.createElement(
      s0,
      {
        ref: v,
        className: sr.picker_button,
        type: "submit",
        kind: "primary",
        size: "sm",
        onKeyDown: y
      },
      s("action|go")
    ))
  );
}, n4 = "_picker_menu_158c5_8", r4 = "_picker_menu_item_158c5_14", o4 = "_picker_separator_158c5_18", cr = {
  picker_menu: n4,
  picker_menu_item: r4,
  picker_separator: o4
}, a4 = ({
  vm: e,
  open: t,
  trigger: n,
  onOpenChange: r
}) => {
  const o = de(), { translate: a } = de(), i = Qe(null), s = (c) => {
    c.key === "ArrowDown" && (c.preventDefault(), i.current?.focus());
  };
  return /* @__PURE__ */ p.createElement(
    un,
    {
      open: t,
      onOpenChange: (c) => {
        r?.(c);
      },
      title: a("room|jump_to_date"),
      showTitle: !1,
      trigger: n,
      align: "start",
      className: cr.picker_menu
    },
    /* @__PURE__ */ p.createElement(
      X,
      {
        label: Ql(Gf(o).format(-1, "week")),
        onSelect: () => e.onLastWeekPicked?.(),
        "data-testid": "jump-to-date-last-week",
        hideChevron: !0,
        className: cr.picker_menu_item
      }
    ),
    /* @__PURE__ */ p.createElement(
      X,
      {
        label: Ql(Gf(o).format(-1, "month")),
        onSelect: () => e.onLastMonthPicked?.(),
        "data-testid": "jump-to-date-last-month",
        hideChevron: !0,
        className: cr.picker_menu_item
      }
    ),
    /* @__PURE__ */ p.createElement(
      X,
      {
        label: a("room|jump_to_date_beginning"),
        onSelect: () => e.onBeginningPicked?.(),
        "data-testid": "jump-to-date-beginning",
        hideChevron: !0,
        className: cr.picker_menu_item,
        onKeyDown: s
      }
    ),
    /* @__PURE__ */ p.createElement(Yf, { decorative: !0, className: cr.picker_separator }),
    /* @__PURE__ */ p.createElement(
      t4,
      {
        vm: e,
        inputRef: i,
        onSubmitted: () => r?.(!1),
        onDismissed: () => r?.(!1)
      }
    )
  );
};
function i4({
  label: e,
  tooltipOpen: t,
  className: n,
  buttonRef: r,
  ...o
}) {
  const { translate: a } = de();
  return /* @__PURE__ */ p.createElement(jo, { description: a("room|jump_to_date"), placement: "right", open: t }, /* @__PURE__ */ p.createElement(
    Z,
    {
      ref: r,
      "data-testid": "jump-to-date-separator-button",
      className: n,
      "aria-live": "off",
      "aria-label": a("room|jump_to_date"),
      role: "button",
      tabIndex: 0,
      ...o
    },
    /* @__PURE__ */ p.createElement("h2", { "aria-hidden": "true" }, e),
    /* @__PURE__ */ p.createElement(Gc, null)
  ));
}
function F4({ vm: e }) {
  const { label: t, className: n, jumpToEnabled: r } = se(e), [o, a] = ge(!1), [i, s] = ge(!1), [c, l] = ge(!1), f = (d) => {
    a(d), d && (s(!1), l(!1));
  };
  return r ? /* @__PURE__ */ p.createElement(Df, { label: t, className: re(n), role: "none" }, /* @__PURE__ */ p.createElement(
    a4,
    {
      vm: e,
      open: o,
      onOpenChange: f,
      trigger: /* @__PURE__ */ p.createElement(
        i4,
        {
          label: t,
          tooltipOpen: !o && (i || c),
          className: Lf.content,
          onMouseEnter: () => s(!0),
          onMouseLeave: () => s(!1),
          onFocus: (d) => l(d.currentTarget.matches(":focus-visible")),
          onBlur: () => l(!1)
        }
      )
    }
  )) : /* @__PURE__ */ p.createElement(Df, { label: t, className: re(n) }, /* @__PURE__ */ p.createElement(Z, { className: Lf.content }, /* @__PURE__ */ p.createElement("h2", { "aria-hidden": "true" }, t)));
}
const $i = {
  "box-flex": "_box-flex_1odfs_9",
  "box-shrink": "_box-shrink_1odfs_13",
  "box-grow": "_box-grow_1odfs_17"
};
function L4({
  as: e = "div",
  flex: t = null,
  shrink: n = null,
  grow: r = null,
  className: o,
  children: a,
  ...i
}) {
  const s = ct(() => {
    const c = {};
    return t && (c["--mx-box-flex"] = t), n && (c["--mx-box-shrink"] = n), r && (c["--mx-box-grow"] = r), c;
  }, [t, r, n]);
  return p.createElement(
    e,
    {
      ...i,
      className: re(o, {
        [$i["box-flex"]]: !!t,
        [$i["box-shrink"]]: !!n,
        [$i["box-grow"]]: !!r
      }),
      style: s
    },
    a
  );
}
const q4 = ({ vm: e }) => {
  const { translate: t } = de(), {
    showStreamAudioStreamButton: n,
    showEditButton: r,
    showSnapshotButton: o,
    showDeleteButton: a,
    showRevokeButton: i,
    showMoveButtons: s,
    isMenuOpened: c,
    userWidget: l,
    trigger: f
  } = se(e);
  let d;
  n && (d = /* @__PURE__ */ p.createElement(X, { onSelect: e.onStreamAudioClick, label: t("widget|context_menu|start_audio_stream") }));
  let u;
  r && (u = /* @__PURE__ */ p.createElement(X, { onSelect: e.onEditClick, label: t("action|edit") }));
  let v;
  o && (v = /* @__PURE__ */ p.createElement(X, { onSelect: e.onSnapshotClick, label: t("widget|context_menu|screenshot") }));
  let m;
  a && (m = /* @__PURE__ */ p.createElement(
    X,
    {
      onSelect: e.onDeleteClick,
      label: t(l ? "action|remove" : "widget|context_menu|remove")
    }
  ));
  let w;
  i && (w = /* @__PURE__ */ p.createElement(X, { onSelect: e.onRevokeClick, label: t("widget|context_menu|revoke") }));
  const [E, h] = s;
  let y;
  E && (y = /* @__PURE__ */ p.createElement(X, { onSelect: () => e.onMoveButton(-1), label: t("widget|context_menu|move_left") }));
  let S;
  h && (S = /* @__PURE__ */ p.createElement(X, { onSelect: () => e.onMoveButton(1), label: t("widget|context_menu|move_right") }));
  const g = () => c ? /* @__PURE__ */ p.createElement(p.Fragment, null, d, u, w, m, v, y, S) : null, b = p.isValidElement(f) ? f : /* @__PURE__ */ p.createElement(dt, { size: "24px", "aria-label": "context menu trigger button", inert: !0, tabIndex: -1 }, /* @__PURE__ */ p.createElement(Yc, null));
  return /* @__PURE__ */ p.createElement(
    un,
    {
      title: "Widget context menu",
      open: c,
      showTitle: !1,
      side: "right",
      align: "start",
      trigger: b,
      onOpenChange: e.onFinished
    },
    g()
  );
};
function $4(e, t) {
  return Number.isFinite(e) ? Number(e) : t;
}
function H4(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function U4(...e) {
  return [...e].reduce((t, n) => n + t, 0);
}
function K4(e, t, n) {
  return e * (n - t) + t;
}
function V4(e, t, n) {
  const r = (e - t) / (n - t);
  return Number.isNaN(r) ? 0 : r;
}
class G4 {
  /**
   * Read the current language of the user in IETF Language Tag format
   */
  get language() {
    return p8();
  }
  /**
   * Register translations for the module, may override app's existing translations
   */
  register(t) {
    const n = {};
    for (const r in t)
      for (const o in t[r])
        n[o] = n[o] || {}, n[o][r] = t[r][o];
    for (const r in n)
      d8(r, n[r]);
  }
  /**
   * Perform a translation, with optional variables
   * @param key - The key to translate
   * @param variables - Optional variables to interpolate into the translation
   */
  translate(t, n) {
    return M(t, n);
  }
  humanizeTime = (t) => Z5(t, this);
}


;// ./src/utils/arrays.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2020, 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Quickly resample an array to have less/more data points. If an input which is larger
 * than the desired size is provided, it will be downsampled. Similarly, if the input
 * is smaller than the desired size then it will be upsampled.
 * @param {number[]} input The input array to resample.
 * @param {number} points The number of samples to end up with.
 * @returns {number[]} The resampled array.
 */
function arrayFastResample(input, points) {
  if (input.length === points) return input; // short-circuit a complicated call

  // Heavily inspired by matrix-media-repo (used with permission)
  // https://github.com/turt2live/matrix-media-repo/blob/abe72c87d2e29/util/util_audio/fastsample.go#L10
  const samples = [];
  if (input.length > points) {
    // Danger: this loop can cause out of memory conditions if the input is too small.
    const everyNth = Math.round(input.length / points);
    for (let i = 0; i < input.length; i += everyNth) {
      samples.push(input[i]);
    }
  } else {
    // Smaller inputs mean we have to spread the values over the desired length. We
    // end up overshooting the target length in doing this, but we're not looking to
    // be super accurate so we'll let the sanity trims do their job.
    const spreadFactor = Math.ceil(points / input.length);
    for (const val of input) {
      samples.push(...arraySeed(val, spreadFactor));
    }
  }

  // Trim to size & return
  return arrayTrimFill(samples, points, arraySeed(input[input.length - 1], points));
}

/**
 * Attempts a smooth resample of the given array. This is functionally similar to arrayFastResample
 * though can take longer due to the smoothing of data.
 * @param {number[]} input The input array to resample.
 * @param {number} points The number of samples to end up with.
 * @returns {number[]} The resampled array.
 */
function arraySmoothingResample(input, points) {
  if (input.length === points) return input; // short-circuit a complicated call

  let samples = [];
  if (input.length > points) {
    // We're downsampling. To preserve the curve we'll actually reduce our sample
    // selection and average some points between them.

    // All we're doing here is repeatedly averaging the waveform down to near our
    // target value. We don't average down to exactly our target as the loop might
    // never end, and we can over-average the data. Instead, we'll get as far as
    // we can and do a followup fast resample (the neighbouring points will be close
    // to the actual waveform, so we can get away with this safely).
    while (samples.length > points * 2 || samples.length === 0) {
      samples = [];
      for (let i = 1; i < input.length - 1; i += 2) {
        const prevPoint = input[i - 1];
        const nextPoint = input[i + 1];
        const currPoint = input[i];
        const average = (prevPoint + nextPoint + currPoint) / 3;
        samples.push(average);
      }
      input = samples;
    }
    return arrayFastResample(samples, points);
  } else {
    // In practice there's not much purpose in burning CPU for short arrays only to
    // end up with a result that can't possibly look much different than the fast
    // resample, so just skip ahead to the fast resample.
    return arrayFastResample(input, points);
  }
}

/**
 * Rescales the input array to have values that are inclusively within the provided
 * minimum and maximum.
 * @param {number[]} input The array to rescale.
 * @param {number} newMin The minimum value to scale to.
 * @param {number} newMax The maximum value to scale to.
 * @returns {number[]} The rescaled array.
 */
function arrayRescale(input, newMin, newMax) {
  const min = Math.min(...input);
  const max = Math.max(...input);
  return input.map(v => K4(V4(v, min, max), newMin, newMax));
}

/**
 * Creates an array of the given length, seeded with the given value.
 * @param {T} val The value to seed the array with.
 * @param {number} length The length of the array to create.
 * @returns {T[]} The array.
 */
function arraySeed(val, length) {
  // Size the array up front for performance, and use `fill` to let the browser
  // optimize the operation better than we can with a `for` loop, if it wants.
  return new Array(length).fill(val);
}

/**
 * Trims or fills the array to ensure it meets the desired length. The seed array
 * given is pulled from to fill any missing slots - it is recommended that this be
 * at least `len` long. The resulting array will be exactly `len` long, either
 * trimmed from the source or filled with the some/all of the seed array.
 * @param {T[]} a The array to trim/fill.
 * @param {number} len The length to trim or fill to, as needed.
 * @param {T[]} seed Values to pull from if the array needs filling.
 * @returns {T[]} The resulting array of `len` length.
 */
function arrayTrimFill(a, len, seed) {
  // Dev note: we do length checks because the spread operator can result in some
  // performance penalties in more critical code paths. As a utility, it should be
  // as fast as possible to not cause a problem for the call stack, no matter how
  // critical that stack is.
  if (a.length === len) return a;
  if (a.length > len) return a.slice(0, len);
  return a.concat(seed.slice(0, len - a.length));
}

/**
 * Clones an array as fast as possible, retaining references of the array's values.
 * @param a The array to clone. Must be defined.
 * @returns A copy of the array.
 */
function arrayFastClone(a) {
  return a.slice(0, a.length);
}

/**
 * Determines if the two arrays are different either in length, contents,
 * or order of those contents.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns True if they are different, false otherwise.
 */
function arrayHasOrderChange(a, b) {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return true;
    }
    return false;
  } else {
    return true; // like arrayHasDiff, a difference in length is a natural change
  }
}

/**
 * Determines if two arrays are different through a shallow comparison.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns True if they are different, false otherwise.
 */
function arrayHasDiff(a, b) {
  if (a.length === b.length) {
    // When the lengths are equal, check to see if either array is missing
    // an element from the other.
    if (b.some(i => !a.includes(i))) return true;
    if (a.some(i => !b.includes(i))) return true;

    // if all the keys are common, say so
    return false;
  } else {
    return true; // different lengths means they are naturally diverged
  }
}
/**
 * Performs a diff on two arrays. The result is what is different with the
 * first array (`added` in the returned object means objects in B that aren't
 * in A). Shallow comparisons are used to perform the diff.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns The diff between the arrays.
 */
function arrayDiff(a, b) {
  return {
    added: b.filter(i => !a.includes(i)),
    removed: a.filter(i => !b.includes(i))
  };
}

/**
 * Returns the intersection of two arrays.
 * @param a The first array. Must be defined.
 * @param b The second array. Must be defined.
 * @returns The intersection of the arrays.
 */
function arrayIntersection(a, b) {
  return a.filter(i => b.includes(i));
}

/**
 * Unions arrays, deduping contents using a Set.
 * @param a The arrays to merge.
 * @returns The union of all given arrays.
 */
function arrayUnion(...a) {
  return Array.from(a.reduce((c, v) => {
    v.forEach(i => c.add(i));
    return c;
  }, new Set()));
}

/**
 * Moves a single element from fromIndex to toIndex.
 * @param {array} list the list from which to construct the new list.
 * @param {number} fromIndex the index of the element to move.
 * @param {number} toIndex the index of where to put the element.
 * @returns {array} A new array with the requested value moved.
 */
function moveElement(list, fromIndex, toIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}

/**
 * Helper functions to perform LINQ-like queries on arrays.
 */
class ArrayUtil {
  /**
   * Create a new array helper.
   * @param a The array to help. Can be modified in-place.
   */
  constructor(a) {
    this.a = a;
  }

  /**
   * The value of this array, after all appropriate alterations.
   */
  get value() {
    return this.a;
  }

  /**
   * Groups an array by keys.
   * @param fn The key-finding function.
   * @returns This.
   */
  groupBy(fn) {
    const obj = this.a.reduce((rv, val) => {
      const k = fn(val);
      if (!rv.has(k)) rv.set(k, []);
      rv.get(k).push(val);
      return rv;
    }, new Map());
    return new GroupedArray(obj);
  }
}

/**
 * Helper functions to perform LINQ-like queries on groups (maps).
 */
class GroupedArray {
  /**
   * Creates a new group helper.
   * @param val The group to help. Can be modified in-place.
   */
  constructor(val) {
    this.val = val;
  }

  /**
   * The value of this group, after all applicable alterations.
   */
  get value() {
    return this.val;
  }

  /**
   * Orders the grouping into an array using the provided key order.
   * @param keyOrder The key order.
   * @returns An array helper of the result.
   */
  orderBy(keyOrder) {
    const a = [];
    for (const k of keyOrder) {
      if (!this.val.has(k)) continue;
      a.push(...this.val.get(k));
    }
    return new ArrayUtil(a);
  }
}
const concat = (...arrays) => {
  return arrays.reduce((concatenatedSoFar, toBeConcatenated) => {
    const concatenated = new Uint8Array(concatenatedSoFar.length + toBeConcatenated.length);
    concatenated.set(concatenatedSoFar, 0);
    concatenated.set(toBeConcatenated, concatenatedSoFar.length);
    return concatenated;
  }, new Uint8Array(0));
};

/**
 * Async version of Array.every.
 */
async function asyncEvery(values, predicate) {
  for (const value of values) {
    if (!(await predicate(value))) return false;
  }
  return true;
}

/**
 * Async version of Array.some.
 */
async function asyncSome(values, predicate) {
  for (const value of values) {
    if (await predicate(value)) return true;
  }
  return false;
}

/**
 * Async version of Array.some that runs all promises in parallel.
 * @param values
 * @param predicate
 */
async function asyncSomeParallel(values, predicate) {
  try {
    return await Promise.any(values.map(value => predicate(value).then(result => result ? Promise.resolve(true) : Promise.reject(false))));
  } catch (e) {
    // If the array is empty or all the promises are false, Promise.any will reject an AggregateError
    if (e instanceof AggregateError) return false;
    throw e;
  }
}

/**
 * Async version of Array.filter.
 * If one of the promises rejects, the whole operation will reject.
 * @param values
 * @param predicate
 */
async function asyncFilter(values, predicate) {
  const results = await Promise.all(values.map(predicate));
  return values.filter((_, i) => results[i]);
}
function filterBoolean(values) {
  return values.filter(Boolean);
}
;// ./src/audio/consts.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


const WORKLET_NAME = "mx-voice-worklet";
let PayloadEvent = /*#__PURE__*/function (PayloadEvent) {
  PayloadEvent["Timekeep"] = "timekeep";
  PayloadEvent["AmplitudeMark"] = "amplitude_mark";
  return PayloadEvent;
}({});
const PLAYBACK_WAVEFORM_SAMPLES = 39;
const DEFAULT_WAVEFORM = arraySeed(0, PLAYBACK_WAVEFORM_SAMPLES);
;// ./src/workers/playback.worker.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



const ctx = self;
ctx.addEventListener("message", async event => {
  const {
    seq,
    data
  } = event.data;

  // First, convert negative amplitudes to positive so we don't detect zero as "noisy".
  const noiseWaveform = data.map(v => Math.abs(v));

  // Then, we'll resample the waveform using a smoothing approach so we can keep the same rough shape.
  // We also rescale the waveform to be 0-1 so we end up with a clamped waveform to rely upon.
  const waveform = arrayRescale(arraySmoothingResample(noiseWaveform, PLAYBACK_WAVEFORM_SAMPLES), 0, 1);
  ctx.postMessage({
    seq,
    waveform
  });
});

/***/ },

/***/ "../../node_modules/react-dom/index.js"
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) // removed by dead control flow
{}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__("../../node_modules/react-dom/cjs/react-dom.production.js");
} else // removed by dead control flow
{}


/***/ },

/***/ "../../node_modules/react/index.js"
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react.production.js");
} else // removed by dead control flow
{}


/***/ },

/***/ "../../node_modules/use-sidecar/dist/es2015/medium.js"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ createSidecarMedium)
/* harmony export */ });
/* unused harmony export createMedium */
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/tslib/tslib.es6.mjs");

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = (0,tslib__WEBPACK_IMPORTED_MODULE_0__/* .__assign */ .Cl)({ async: true, ssr: false }, options);
    return medium;
}


/***/ },

/***/ "../../node_modules/classnames/index.js"
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ },

/***/ "../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/Toggle/Toggle.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ ToggleInput)
/* harmony export */ });
/* unused harmony export ToggleControl */
/* unused harmony import specifier */ var jsx;
/* unused harmony import specifier */ var forwardRef;
/* unused harmony import specifier */ var Control;
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/classnames/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _Toggle_module_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/@vector-im/compound-web/dist/components/Form/Controls/Toggle/Toggle.module.css.js");


const _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





const ToggleInput = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function Toggle(_ref, ref) {
  let {
      className
    } = _ref,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref, _excluded);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3__(_Toggle_module_css_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].container */ .Ay.container, className);
  return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classes,
    children: [/* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", _objectSpread(_objectSpread({
      role: "switch",
      ref,
      className: _Toggle_module_css_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].input */ .Ay.input
    }, props), {}, {
      type: "checkbox"
    })), /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: _Toggle_module_css_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].ui */ .Ay.ui
    })]
  });
});
const ToggleControl = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function ToggleControl2(props, ref) {
  return /* @__PURE__ */jsx(Control, {
    asChild: true,
    children: /* @__PURE__ */jsx(ToggleInput, _objectSpread({
      ref
    }, props))
  });
})));


/***/ },

/***/ "../../node_modules/@vector-im/compound-web/dist/components/Tooltip/TooltipProvider.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ hoverDelay)
/* harmony export */ });
/* unused harmony export TooltipProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _floating_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@floating-ui/react/dist/floating-ui.react.mjs");


const hoverDelay = {
  open: 300,
  close: 0
};
const TooltipProvider = ({
  children
}) => /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_floating_ui_react__WEBPACK_IMPORTED_MODULE_1__/* .FloatingDelayGroup */ .T3, {
  delay: hoverDelay,
  timeoutMs: 300,
  children
});
TooltipProvider.displayName = "TooltipProvider";


/***/ },

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ },

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ },

/***/ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ },

/***/ "../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ },

/***/ "../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(i) ? i : i + "";
}


/***/ },

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [7905], () => (__webpack_require__("./src/workers/playback.worker.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "bundles/" + __webpack_require__.h() + "/" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("b222cffde5a661f93f65")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	(() => {
/******/ 	  if (typeof __webpack_require__ !== 'undefined') {
/******/ 	    var oldGetScript = __webpack_require__.u;
/******/ 	    var oldLoadScript = __webpack_require__.e;
/******/ 	    var queryMap = {};
/******/ 	    var countMap = {};
/******/ 	    var getRetryDelay = function () {
/******/ 	      return 500;
/******/ 	    };
/******/ 	    __webpack_require__.u = function (chunkId) {
/******/ 	      var result = oldGetScript(chunkId);
/******/ 	      return (
/******/ 	        result +
/******/ 	        (queryMap.hasOwnProperty(chunkId) ? '?' + queryMap[chunkId] : '')
/******/ 	      );
/******/ 	    };
/******/ 	    __webpack_require__.e = function (chunkId) {
/******/ 	      var result = oldLoadScript(chunkId);
/******/ 	      return result.catch(function (error) {
/******/ 	        var retries = countMap.hasOwnProperty(chunkId) ? countMap[chunkId] : 3;
/******/ 	        if (retries < 1) {
/******/ 	          var realSrc = oldGetScript(chunkId);
/******/ 	          error.message =
/******/ 	            'Loading chunk ' +
/******/ 	            chunkId +
/******/ 	            ' failed after 3 retries.\n(' +
/******/ 	            realSrc +
/******/ 	            ')';
/******/ 	          error.request = realSrc;
/******/ 	          throw error;
/******/ 	        }
/******/ 	        return new Promise(function (resolve) {
/******/ 	          var retryAttempt = 3 - retries + 1;
/******/ 	          setTimeout(function () {
/******/ 	            var retryAttemptString = '&retry-attempt=' + retryAttempt;
/******/ 	            var cacheBust = (() => Date.now())();
/******/ 	            +retryAttemptString;
/******/ 	            queryMap[chunkId] = cacheBust;
/******/ 	            countMap[chunkId] = retries - 1;
/******/ 	            resolve(__webpack_require__.e(chunkId));
/******/ 	          }, getRetryDelay(retryAttempt));
/******/ 	        });
/******/ 	      });
/******/ 	    };
/******/ 	  }
/******/ 	})();
/******/ 	
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			3304: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e(7905).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=playback.worker.js.map