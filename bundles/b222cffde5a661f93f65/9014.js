"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[9014],{

/***/ "../../node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  plainToRich: () => (/* binding */ Ve),
  richToPlain: () => (/* binding */ Ge),
  F: () => (/* binding */ Xe)
});

// UNUSED EXPORTS: initOnce

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/matrix-wysiwyg/node_modules/@vector-im/matrix-wysiwyg-wasm/pkg/wysiwyg_bg.js
var wysiwyg_bg = __webpack_require__("../../node_modules/@vector-im/matrix-wysiwyg/node_modules/@vector-im/matrix-wysiwyg-wasm/pkg/wysiwyg_bg.js");
;// ../../node_modules/@vector-im/matrix-wysiwyg/node_modules/@vector-im/matrix-wysiwyg-wasm/index-wasm-esm.js
/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE in the repository root for full details.
*/

// @ts-check

/**
 * This is the entrypoint on non-node ESM environments which support the ES Module Integration Proposal for WebAssembly [1]
 * (such as Element Web).
 *
 * [1]: https://github.com/webassembly/esm-integration
 */



// We want to throw an error if the user tries to use the bindings before
// calling `initAsync`.
wysiwyg_bg/* __wbg_set_wasm */.lI(
    new Proxy(
        {},
        {
            get() {
                throw new Error(
                    '@element-hq/matrix-wysiwyg was used before it was initialized. Call `initAsync` first.',
                );
            },
        },
    ),
);

/**
 * Stores a promise of the `loadModule` call
 * @type {Promise<void> | null}
 */
let modPromise = null;

/**
 * Loads the WASM module asynchronously
 *
 * @returns {Promise<void>}
 */
async function loadModule() {
    const wasm = await __webpack_require__.e(/* import() */ 3903).then(__webpack_require__.bind(__webpack_require__, "../../node_modules/@vector-im/matrix-wysiwyg/node_modules/@vector-im/matrix-wysiwyg-wasm/pkg/wysiwyg_bg.wasm"));
    wysiwyg_bg/* __wbg_set_wasm */.lI(wasm);
    wasm.__wbindgen_start();
}

/**
 * Load the WebAssembly module in the background, if it has not already been loaded.
 *
 * Returns a promise which will resolve once the other methods are ready.
 *
 * @returns {Promise<void>}
 */
async function initAsync() {
    if (!modPromise) modPromise = loadModule();
    await modPromise;
}

// Re-export everything from the generated javascript wrappers


;// ../../node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js


function y(e) {
  return "inputType" in e;
}
function V(e) {
  return "clipboardData" in e;
}
function ce(e) {
  return y(e) && e.inputType === "insertSuggestion";
}
function ue(e) {
  return y(e) && e.inputType === "insertAtRoomSuggestion";
}
function le(e) {
  return y(e) && e.inputType == "insertLink";
}
function X(e, t, n, s) {
  return s ? s(e, t, n) : e;
}
function fe(e, t, n, s, r, i, c, l) {
  const a = X(
    e,
    {
      actions: s,
      content: () => t.get_content_as_html(),
      messageContent: () => t.get_content_as_message_html()
    },
    r,
    c
  );
  if (!a)
    return;
  if (V(a)) {
    const o = a.clipboardData, f = o?.getData("text/html"), m = o?.getData("text/plain") ?? "";
    if (f && f !== m) {
      const d = o?.types.includes(
        "application/x-vnd.google-docs-document-slice-clip+wrapped"
      ) ? wysiwyg_bg/* HtmlSource */.bD.GoogleDoc : wysiwyg_bg/* HtmlSource */.bD.UnknownExternal;
      return n(
        t.replace_html(f, d),
        "replace_html_paste"
      );
    }
    return n(
      t.replace_text(m),
      "replace_text_paste"
    );
  }
  switch (a.inputType) {
    case "insertAtRoomSuggestion": {
      if (i && ue(a)) {
        const { attributes: o } = a.data;
        return o.has("data-mention-type") && o.delete("data-mention-type"), n(
          t.insert_at_room_mention_at_suggestion(
            i,
            o
          ),
          "insert_at_room_mention_at_suggestion"
        );
      }
      break;
    }
    case "insertSuggestion": {
      if (i && ce(a)) {
        const { text: o, url: f, attributes: m } = a.data;
        return m.has("data-mention-type") && m.delete("data-mention-type"), n(
          t.insert_mention_at_suggestion(
            f,
            o,
            i,
            m
          ),
          "insert_mention_at_suggestion"
        );
      }
      break;
    }
    case "insertCommand":
    case "insertEmoji": {
      if (i && a.data) {
        const o = a.inputType === "insertCommand";
        return n(
          t.replace_text_suggestion(
            a.data,
            i,
            o
          ),
          "replace_text_suggestion"
        );
      }
      break;
    }
    case "clear":
      return n(t.clear(), "clear");
    case "deleteContentBackward":
      return n(t.backspace(), "backspace");
    case "deleteWordBackward":
      return n(t.backspace_word(), "backspace_word");
    case "deleteSoftLineBackward": {
      const o = document.getSelection();
      return o && (o.modify("extend", "backward", "lineboundary"), document.dispatchEvent(new CustomEvent("selectionchange"))), n(t.delete(), "backspace_line");
    }
    case "deleteContentForward":
      return n(t.delete(), "delete");
    case "deleteWordForward":
      return n(t.delete_word(), "delete_word");
    case "deleteByCut":
      return n(t.delete(), "delete");
    case "formatBold":
      return n(t.bold(), "bold");
    case "formatItalic":
      return n(t.italic(), "italic");
    case "formatStrikeThrough":
      return n(t.strike_through(), "strike_through");
    case "formatUnderline":
      return n(t.underline(), "underline");
    case "formatInlineCode":
      return n(t.inline_code(), "inline_code");
    case "historyRedo":
      return n(t.redo(), "redo");
    case "historyUndo":
      return n(t.undo(), "undo");
    case "insertCodeBlock":
      return n(t.code_block(), "code_block");
    case "insertQuote":
      return n(t.quote(), "quote");
    case "insertFromPaste":
      return;
    case "insertOrderedList":
      return n(t.ordered_list(), "ordered_list");
    case "insertLineBreak":
    case "insertParagraph":
      return u(
        t,
        i,
        l
      ), n(t.enter(), "enter");
    case "insertReplacementText": {
      const o = r.innerHTML.slice(
        0,
        r.innerHTML.length - 4
      );
      return n(
        t.set_content_from_html(o),
        "set_content_from_html",
        o
      );
    }
    case "insertCompositionText":
    case "insertFromComposition":
    case "insertText":
      if (a.data)
        return a.data == " " && u(
          t,
          i,
          l
        ), n(
          t.replace_text(a.data),
          "replace_text",
          a.data
        );
      break;
    case "insertUnorderedList":
      return n(t.unordered_list(), "unordered_list");
    case "insertLink":
      if (le(a)) {
        const { text: o, url: f } = a.data;
        return n(
          o ? t.set_link_with_text(f, o, /* @__PURE__ */ new Map()) : t.set_link(f, /* @__PURE__ */ new Map()),
          "insertLink"
        );
      }
      break;
    case "removeLinks":
      return n(t.remove_links(), "remove_links");
    case "formatIndent":
      return n(t.indent(), "indent");
    case "formatOutdent":
      return n(t.unindent(), "unindent");
    case "sendMessage":
      return null;
    default:
      return console.error(`Unknown input type: ${a.inputType}`), console.error(e), null;
  }
  function u(o, f, m) {
    if (m && f && f.key.key_type == 3 && f.key.custom_key_value) {
      const d = m.get(f.key.custom_key_value);
      d && o.replace_text_suggestion(d, f, !1);
    }
  }
}
function de(e, t) {
  e.innerHTML = "";
  const n = t.document();
  let s = 0;
  function r(c, l, a, u) {
    const o = document.createElement(l);
    if (a && (o.innerText = a.replace("​", "~")), u)
      for (const [f, m] of u.entries()) {
        const d = document.createAttribute(f);
        m !== null && (d.value = m), o.setAttributeNode(d);
      }
    return c.appendChild(o), o;
  }
  function i(c, l) {
    const a = r(l, "ul");
    a.className = `group_${s % 10}`;
    const u = c.children(t);
    let o;
    for (; o = u.next_child(); ) {
      const f = o.node_type(t);
      if (f === "container") {
        const d = `dom_${s}`;
        s++;
        const g = r(a, "li");
        r(
          g,
          "input",
          null,
          /* @__PURE__ */ new Map([
            ["type", "checkbox"],
            ["id", d],
            ["checked", null]
          ])
        ), r(
          g,
          "label",
          o.tag(t),
          /* @__PURE__ */ new Map([["for", d]])
        ), i(o, g);
      } else if (f === "line_break")
        r(a, "li", "br");
      else if (f === "text") {
        const m = r(a, "li");
        r(m, "span", '"', /* @__PURE__ */ new Map([["class", "quote"]])), r(m, "span", `${o.text(t)}`), r(m, "span", '"', /* @__PURE__ */ new Map([["class", "quote"]]));
      } else if (f === "mention") {
        const m = r(a, "li");
        r(
          m,
          "span",
          '"Mention - ',
          /* @__PURE__ */ new Map([["class", "quote"]])
        ), r(m, "span", `${o.text(t)}`), r(m, "span", '"', /* @__PURE__ */ new Map([["class", "quote"]]));
      } else
        console.error(`Unknown node type: ${f}`);
    }
  }
  i(n, e);
}
function me(e, t, n) {
  const s = document.createRange();
  let r = I(e, t), i = I(e, n);
  if (r.node && i.node) {
    const l = r.node.compareDocumentPosition(i.node) & Node.DOCUMENT_POSITION_PRECEDING, a = r.node === i.node && i.offset < r.offset;
    if ((l || a) && ([r, i] = [i, r], !r.node || !i.node))
      throw new Error();
    s.setStart(r.node, r.offset), s.setEnd(i.node, i.offset);
  } else
    s.selectNodeContents(e), s.collapse();
  const c = document.getSelection();
  c && (c.removeAllRanges(), c.addRange(s));
}
function z(e, t, n, s) {
  e.innerHTML = t + "<br />", me(e, n, s);
}
function I(e, t, n) {
  const s = e.nodeName === "LI" && !e.hasChildNodes(), r = e.nodeType === Node.TEXT_NODE;
  if (r && e.parentElement?.hasAttribute("data-mention-type")) {
    const l = L(e) ? 1 : 0, a = t - l;
    return a <= 1 ? a === 0 ? e.previousSibling ? {
      node: e.previousSibling,
      offset: T(
        e.previousSibling,
        1 / 0
      )
    } : {
      node: e.parentNode?.parentNode ?? null,
      offset: 0
    } : { node: null, offset: 0 } : { node: null, offset: t - l - 1 };
  } else if (r) {
    const l = L(e) ? 1 : 0;
    return Z(e) ? t === 0 ? { node: e, offset: t } : { node: null, offset: t - l } : t <= (e.textContent?.length || 0) ? { node: e, offset: t } : {
      node: null,
      offset: t - (e.textContent?.length || 0) - l
    };
  } else {
    if (s)
      return t <= (e.textContent?.length || 0) ? { node: e, offset: t } : {
        node: null,
        offset: t - (e.textContent?.length || 0)
      };
    if (e.nodeName === "BR")
      return t === 0 ? { node: e, offset: 0 } : {
        node: null,
        offset: t - 1
      };
    if (ge(e) && t === 0)
      return { node: e, offset: t };
    for (const c of e.childNodes) {
      const l = I(
        c,
        t
      );
      if (l.node)
        return { node: l.node, offset: l.offset };
      t = l.offset;
    }
    return { node: null, offset: t };
  }
}
function Q(e, t) {
  const n = e.childNodes.length === 1 && e.firstChild?.nodeName === "BR";
  if (!t || n)
    return [0, 0];
  const s = t.anchorNode && F(
    e,
    t.anchorNode,
    t.anchorOffset
  ) || 0, r = t.focusNode && F(
    e,
    t.focusNode,
    t.focusOffset
  ) || 0;
  return [s, r];
}
function T(e, t) {
  if (e.nodeType === Node.TEXT_NODE) {
    const s = L(e) ? 1 : 0;
    return (e.textContent?.length ?? 0) + s;
  } else {
    if (e.nodeName === "BR")
      return t === 0 ? 0 : 1;
    {
      let n = 0, s = 0;
      for (const r of e.childNodes) {
        if (s === t)
          break;
        n += T(r, -1), s++;
      }
      return n;
    }
  }
}
function Y(e, t, n) {
  const s = e.nodeType === Node.TEXT_NODE, r = e.parentElement?.hasAttribute("data-mention-type");
  if (e === t)
    return s ? n > (e.textContent?.length ?? 0) ? { found: !1, offset: 0 } : r ? { found: !0, offset: n === 0 ? 0 : 1 } : { found: !0, offset: n } : { found: !0, offset: T(e, n) };
  if (s) {
    const c = L(e) ? 1 : 0;
    return Z(e) ? { found: !1, offset: c } : r ? { found: !1, offset: 1 + c } : {
      found: !1,
      offset: (e.textContent?.length ?? 0) + c
    };
  } else {
    if (e.nodeName === "BR")
      return { found: !1, offset: 1 };
    {
      let i = 0;
      for (const c of e.childNodes) {
        const l = Y(c, t, n);
        if (l.found)
          return { found: !0, offset: i + l.offset };
        i += l.offset;
      }
      return { found: !1, offset: i };
    }
  }
}
function F(e, t, n) {
  if (t === e && n === e.childNodes.length - 1)
    return T(e, -1) - 1;
  const s = new Range();
  s.setStart(e, 0), s.setEnd(e, e.childNodes.length);
  const r = s.comparePoint(t, 0);
  if (r === -1)
    return 0;
  if (r === 1)
    return T(e, -1) - 1;
  const i = Y(e, t, n);
  return i.found ? i.offset : -1;
}
function L(e) {
  if (e === null) return !1;
  let t = e;
  const n = P(t.parentNode);
  for (; t; ) {
    const s = t.nextSibling;
    if (s && P(s) || n && s && !K(s) || s && s.nodeName === "BR")
      break;
    if (K(t))
      return !0;
    t = t.parentNode;
  }
  return !1;
}
const J = ["EM", "U", "STRONG", "DEL", "CODE", "A"], _e = ["OL", "UL", "LI", "PRE", "BLOCKQUOTE", "P"];
function P(e) {
  return e === null ? !1 : J.includes(e.nodeName || "");
}
function K(e) {
  return _e.includes(e.nodeName || "");
}
function ge(e) {
  return J.includes(e.nodeName) && e.textContent?.length === 0;
}
function Z(e) {
  const t = e.parentNode?.childNodes.length === 1, n = e.parentNode?.nodeName === "P", s = e.textContent === " ";
  return n && t && s;
}
const pe = [
  "bold",
  "italic",
  "strikeThrough",
  "underline",
  "undo",
  "redo",
  "orderedList",
  "unorderedList",
  "inlineCode",
  "clear",
  "link",
  "codeBlock",
  "quote",
  "indent",
  "unindent"
], he = ["@", "#", "/", "", ":"];
function ye() {
  return pe.reduce((e, t) => (e[t] = "enabled", e), {});
}
function M(e) {
  const t = {};
  for (const [n, s] of e)
    t[n.substring(0, 1).toLowerCase() + n.substring(1)] = s.toLowerCase();
  return t;
}
function Ee() {
  const e = navigator.userAgent.toLowerCase();
  return e.includes("iphone") || e.includes("ipad") ? "iOS" : e.includes("android") ? "Android" : e.includes("win") ? "Windows" : e.includes("mac") ? "macOS" : e.includes("linux") ? "Linux" : null;
}
function ee(e, t, n, s) {
  n?.preventDefault(), n?.stopPropagation(), e.dispatchEvent(
    new CustomEvent("wysiwygInput", { detail: { blockType: t, data: s } })
  );
}
function ke(e, t, n, s, r) {
  if (e.shiftKey && e.altKey)
    switch (e.key) {
      case "5":
        return "formatStrikeThrough";
    }
  const i = Ee();
  if ((i === "Windows" || i === "Linux") && e.ctrlKey)
    switch (e.key) {
      case "Backspace":
        return "deleteWordBackward";
    }
  if (e.ctrlKey || e.metaKey)
    switch (e.key) {
      case "b":
        return "formatBold";
      case "i":
        return "formatItalic";
      case "u":
        return "formatUnderline";
      case "e":
        return "formatInlineCode";
      case "y":
        return "historyRedo";
      case "z":
        return "historyUndo";
      case "Z":
        return "historyRedo";
      case "Enter":
        return "sendMessage";
      case "Backspace":
        return "deleteSoftLineBackward";
    }
  return X(
    e,
    {
      actions: n,
      content: () => t.get_content_as_html(),
      messageContent: () => t.get_content_as_message_html()
    },
    s,
    r
  ), null;
}
function xe(e, t, n, s, r) {
  const i = ke(
    e,
    n,
    s,
    t,
    r
  );
  i && ee(t, i, e);
}
function te(e) {
  return M(e.action_states);
}
function Ce(e, t, n, s, r, i, c, l, a) {
  const u = fe(
    e,
    n,
    r.traceAction,
    i,
    t,
    c,
    l,
    a
  );
  if (u) {
    const o = u.text_update().replace_all;
    o && (z(
      t,
      o.replacement_html,
      o.start_utf16_codeunit,
      o.end_utf16_codeunit
    ), r.setEditorHtml(o.replacement_html)), t.focus(), s && de(s, n);
    const f = u.menu_state().update(), m = u.menu_action().suggestion()?.suggestion_pattern, d = f ? te(f) : null, g = m || null;
    return {
      content: o?.replacement_html,
      actionStates: d,
      suggestion: g
    };
  }
}
function Te(e, t, { traceAction: n, getSelectionAccordingToActions: s }) {
  const [r, i] = Q(e, document.getSelection()), c = t.selection_start(), l = t.selection_end(), [a, u] = s();
  if (r === c && r === a && i === l && i === u || r === l && r === u && i === c && i === a)
    return;
  const o = t.select(r, i);
  n(null, "select", r, i);
  const f = o.menu_state().update();
  if (f)
    return te(f);
}
function Se(e, t, n, s, r, i, c, l) {
  const [a, u] = (0,react.useState)({
    content: null,
    actionStates: ye(),
    suggestion: null
  }), o = (0,react.useRef)(void 0), [f, m] = (0,react.useState)(!1);
  return (0,react.useEffect)(() => {
    n && (u({
      content: n.get_content_as_html(),
      actionStates: M(
        n.action_states()
      ),
      suggestion: null
    }), o.current = n.get_content_as_plain_text());
  }, [n]), (0,react.useEffect)(() => {
    const d = e.current;
    if (!n || !d)
      return;
    const g = (_) => {
      try {
        const p = Ce(
          _,
          d,
          n,
          t.current,
          s,
          r,
          a.suggestion,
          c,
          l
        );
        p && (u((k) => {
          const re = p.content !== void 0 ? p.content : k.content, ie = p.actionStates || k.actionStates, oe = p.suggestion;
          return {
            content: re,
            actionStates: ie,
            suggestion: oe
          };
        }), o.current = n.get_content_as_plain_text());
      } catch {
        i(o.current);
      }
    }, S = (_) => {
      y(_) && !_.isComposing && g(_);
    };
    d.addEventListener("input", S);
    const v = (_) => {
      const p = y(_) && _.inputType === "insertFromPaste" && _.dataTransfer !== null;
      (V(_) || p) && (_.preventDefault(), _.stopPropagation(), g(_));
    };
    d.addEventListener("paste", v);
    const R = (_) => {
      g({
        inputType: _.detail.blockType,
        data: _.detail.data
      });
    };
    d.addEventListener("wysiwygInput", R);
    const B = (_) => {
      xe(
        _,
        d,
        n,
        r,
        c
      );
    };
    d.addEventListener("keydown", B);
    const D = () => {
      try {
        const _ = Te(
          d,
          n,
          s
        );
        _ && u(({ content: p, suggestion: k }) => ({
          content: p,
          actionStates: _,
          suggestion: k
        })), o.current = n.get_content_as_plain_text();
      } catch {
        i(o.current);
      }
    };
    document.addEventListener("selectionchange", D);
    const $ = (_) => {
      if (!(y(_) && _.isComposing))
        return v(_);
    };
    d.addEventListener("beforeinput", $);
    const U = (_) => {
      const p = new InputEvent("input", {
        data: _.data,
        inputType: "insertCompositionText"
      });
      S(p);
    };
    return d.addEventListener("compositionend", U), m(!0), () => {
      m(!1), d.removeEventListener("input", S), d.removeEventListener("paste", v), d.removeEventListener("wysiwygInput", R), d.removeEventListener("keydown", B), d.removeEventListener("beforeinput", $), d.removeEventListener("compositionend", U), document.removeEventListener("selectionchange", D);
    };
  }, [
    e,
    l,
    n,
    r,
    t,
    s,
    c,
    i,
    o,
    a.suggestion
  ]), { areListenersReady: f, ...a };
}
function we(e, t) {
  return (0,react.useMemo)(() => {
    const s = (r, i) => {
      e.current && ee(
        e.current,
        r,
        void 0,
        i
      );
    };
    return {
      bold: () => s("formatBold"),
      italic: () => s("formatItalic"),
      strikeThrough: () => s("formatStrikeThrough"),
      underline: () => s("formatUnderline"),
      undo: () => s("historyUndo"),
      redo: () => s("historyRedo"),
      orderedList: () => s("insertOrderedList"),
      unorderedList: () => s("insertUnorderedList"),
      inlineCode: () => s("formatInlineCode"),
      clear: () => s("clear"),
      insertText: (r) => s("insertText", r),
      link: (r, i) => s("insertLink", { url: r, text: i }),
      removeLinks: () => s("removeLinks"),
      getLink: () => t?.get_link_action()?.edit_link?.url || "",
      codeBlock: () => s("insertCodeBlock"),
      quote: () => s("insertQuote"),
      indent: () => s("formatIndent"),
      unindent: () => s("formatOutdent"),
      mention: (r, i, c) => s("insertSuggestion", { url: r, text: i, attributes: c }),
      command: (r) => s("insertCommand", r),
      emoji: (r) => s("insertEmoji", r),
      mentionAtRoom: (r) => s("insertAtRoomSuggestion", { attributes: r })
    };
  }, [e, t]);
}
let W = !1, N = !1;
async function O() {
  if (N)
    return Promise.resolve();
  if (W)
    return new Promise((e) => {
      function t() {
        N && e(), setTimeout(t, 200);
      }
      t();
    });
  W = !0, await initAsync(), N = !0;
}
function Le(e, t, n) {
  const [s, r] = (0,react.useState)(
    null
  ), i = (0,react.useCallback)(
    async (c) => {
      await O();
      let l;
      if (c)
        try {
          const a = (0,wysiwyg_bg/* new_composer_model_from_html */.PB)(
            c,
            0,
            c.length
          );
          if (l = a, e.current) {
            const u = a.get_content_as_html();
            z(
              e.current,
              u,
              0,
              u.length
            );
          }
        } catch {
          l = (0,wysiwyg_bg/* new_composer_model */.IU)();
        }
      else
        l = (0,wysiwyg_bg/* new_composer_model */.IU)();
      r(l);
    },
    [r, e]
  );
  return (0,react.useEffect)(() => {
    s && n && s.set_custom_suggestion_patterns(
      n
    );
  }, [s, n]), (0,react.useEffect)(() => {
    e.current && i(t);
  }, [e, i, t]), { composerModel: s, onError: i };
}
function ne(e) {
  return e[0] === "select";
}
function be(e, t, n) {
  return (s, r, i, c) => (!e || !n || (console.debug(c !== void 0 ? `composer_model.${r}(${i}, ${c})` : i !== void 0 ? `composer_model.${r}(${i})` : `composer_model.${r}()`), t.push([r, i, c]), se(e, n, s, t)), s);
}
function ve(e) {
  return () => {
    for (let t = e.length - 1; t >= 0; t--) {
      const n = e[t];
      if (ne(n))
        return [n[1], n[2]];
    }
    return [-1, -1];
  };
}
function se(e, t, n, s) {
  n && n.text_update(), e.innerText = Ne(
    s,
    t.to_example_format()
  ), e.scrollTo(0, e.scrollHeight - e.clientHeight);
}
function Ne(e, t) {
  let n = "";
  function s(u, o, f) {
    u === "select" ? n += `model.select(Location::from(${o}), Location::from(${f}));
` : f !== void 0 ? n += `model.${u}(${o ?? ""}, ${f});
` : u === "replace_text" ? n += `model.${u}("${o ?? ""}");
` : u === "send" ? n += `// Send: ${o ?? ""}
` : n += `model.${u}(${o ?? ""});
`;
  }
  function r() {
    const u = Ae(l, a[0], a[1]);
    n += `let mut model = cm("${u}");
`;
  }
  let i = null, c = !0, l = "", a = [0, 0];
  for (const u of e) {
    const [o, f, m] = u;
    if (c)
      o === "replace_text" ? l += Oe(f) : ne(u) ? a = [u[1], u[2]] : (c = !1, r(), s(o, f, m));
    else if (i === "select" && o === "select") {
      const d = n.lastIndexOf(`
`, n.length - 2);
      d > -1 && (n = n.substring(0, d) + `
`, s(o, f, m));
    } else
      s(o, f, m);
    i = o;
  }
  return c && r(), n += `assert_eq!(tx(&model), "${t}");
`, n;
}
function Ae(e, t, n) {
  const s = (0,wysiwyg_bg/* new_composer_model_from_html */.PB)(e, -1, -1);
  return s.select(t, n), s.to_example_format();
}
function Ie(e, t, n, s) {
  const [r, i] = Q(e, document.getSelection()), c = [
    ["replace_text", s],
    ["select", r, i]
  ];
  return se(t, n, null, c), c;
}
function Oe(e) {
  if (!e)
    return "";
  const t = document.createElement("p");
  return t.appendChild(document.createTextNode(e.toString())), t.innerHTML;
}
function Re(e, t) {
  const n = (0,react.useRef)(null), [s, r] = (0,react.useState)([]), [i, c] = (0,react.useState)(""), l = (0,react.useCallback)(
    (m) => {
      n.current && c(m);
    },
    [n]
  ), a = (0,react.useMemo)(
    () => be(n.current, s, t),
    [n, s, t]
  ), u = (0,react.useMemo)(
    () => ve(s),
    [s]
  ), o = (0,react.useCallback)(
    () => e.current && n.current && t && r(
      Ie(
        e.current,
        n.current,
        t,
        i
      )
    ),
    [e, n, t, i]
  ), f = (0,react.useMemo)(
    () => ({
      traceAction: a,
      getSelectionAccordingToActions: u,
      onResetTestCase: o,
      setEditorHtml: l
    }),
    [
      a,
      u,
      o,
      l
    ]
  );
  return {
    testRef: n,
    utilities: f
  };
}
function Be(e) {
  return he[e.key.key_type] || "";
}
function De(e) {
  switch (e.key.key_type) {
    case 0:
    case 1:
      return "mention";
    case 2:
      return "command";
    case 3:
      return "custom";
    case 4:
      return "emoji";
    default:
      return "unknown";
  }
}
function $e(e) {
  return e === null ? e : {
    text: e.text,
    keyChar: Be(e),
    type: De(e)
  };
}
const x = `
`, Ue = (e) => {
  let t = e;
  return t.endsWith(x) && (t = t.slice(0, -1)), t.replaceAll(/\\/g, "");
};
async function Ge(e, t) {
  if (e.length === 0)
    return "";
  await O();
  const n = (0,wysiwyg_bg/* new_composer_model */.IU)();
  n.set_content_from_html(e);
  const s = t ? n.get_content_as_message_markdown() : n.get_content_as_markdown();
  return Ue(s);
}
async function Ve(e, t) {
  if (e.length === 0)
    return "";
  await O();
  const n = He(e), s = (0,wysiwyg_bg/* new_composer_model */.IU)();
  return s.set_content_from_markdown(n), t ? s.get_content_as_message_html() : s.get_content_as_html();
}
function He(e) {
  const { body: t } = new DOMParser().parseFromString(
    e,
    "text/html"
  ), n = document.createNodeIterator(
    t,
    void 0,
    Pe
  );
  let s = n.nextNode(), r = "";
  for (; s !== null; ) {
    const i = s.nodeName === "#text", c = s.nodeName === "A", l = s.nodeName === "DIV" && s.childNodes.length === 1 && s.firstChild?.nodeName === "BR", a = !Fe.includes(s.nodeName);
    if (l)
      r += x;
    else if (i) {
      let u = s.textContent;
      j(s) && (u += x), r += u;
    } else if (c) {
      let u = s.firstChild?.parentElement?.outerHTML ?? "";
      j(s) && (u += x), r += u;
    } else a && console.debug(`Converting unexpected node type ${s.nodeName}`);
    s = n.nextNode();
  }
  return r.endsWith(x.repeat(2)) && (r = r.slice(0, -1)), r;
}
const Fe = ["#text", "BR", "A", "DIV", "BODY"];
function j(e) {
  return (e.nextSibling || e.parentElement?.nextSibling)?.nodeName === "DIV";
}
function Pe(e) {
  return e.nodeName === "#text" && e.parentElement?.hasAttribute("data-mention-type") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
}
function Ke(e, t = !1) {
  (0,react.useEffect)(() => {
    if (t) {
      const n = setTimeout(() => e.current?.focus(), 200);
      return () => clearTimeout(n);
    }
  }, [e, t]);
}
function We() {
  const e = (0,react.useRef)(null);
  return (0,react.useEffect)(() => {
    e.current?.childElementCount || e.current?.appendChild(document.createElement("br"));
  }, [e]), e;
}
function q(e) {
  const t = e?.keys();
  return t ? Array.from(t) : [];
}
function Xe(e) {
  const t = We(), n = (0,react.useRef)(null), [s, r] = (0,react.useState)(
    q(e?.emojiSuggestions)
  );
  (0,react.useEffect)(() => {
    r(q(e?.emojiSuggestions));
  }, [e?.emojiSuggestions]);
  const { composerModel: i, onError: c } = Le(
    t,
    e?.initialContent,
    s
  ), { testRef: l, utilities: a } = Re(
    t,
    i
  ), u = we(t, i), { content: o, actionStates: f, areListenersReady: m, suggestion: d } = Se(
    t,
    n,
    i,
    a,
    u,
    c,
    e?.inputEventProcessor,
    e?.emojiSuggestions
  );
  Ke(t, e?.isAutoFocusEnabled);
  const g = (0,react.useMemo)(
    () => $e(d),
    [d]
  );
  return {
    ref: t,
    isWysiwygReady: m,
    wysiwyg: u,
    content: o,
    actionStates: f,
    debug: {
      modelRef: n,
      testRef: l,
      resetTestCase: a.onResetTestCase,
      traceAction: a.traceAction
    },
    suggestion: g,
    messageContent: i?.get_content_as_message_html() ?? null
  };
}



/***/ },

/***/ "../../node_modules/@vector-im/matrix-wysiwyg/node_modules/@vector-im/matrix-wysiwyg-wasm/pkg/wysiwyg_bg.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ __wbg_new_8a6f238a6ece86ea),
/* harmony export */   $h: () => (/* binding */ __wbg_nodeName_ff3aa439a5af6311),
/* harmony export */   F9: () => (/* binding */ __wbg_new_363ae9575a2aba54),
/* harmony export */   IU: () => (/* binding */ new_composer_model),
/* harmony export */   P1: () => (/* binding */ __wbg_parseFromString_91cbec9ba27a222a),
/* harmony export */   P9: () => (/* binding */ __wbg_length_49b2ba67f0897e97),
/* harmony export */   PB: () => (/* binding */ new_composer_model_from_html),
/* harmony export */   QR: () => (/* binding */ __wbindgen_number_new),
/* harmony export */   Qn: () => (/* binding */ __wbindgen_throw),
/* harmony export */   WY: () => (/* binding */ __wbg_error_7534b8e9a36f1ab4),
/* harmony export */   aI: () => (/* binding */ __wbg_new_5e0be73521bc8c17),
/* harmony export */   bD: () => (/* binding */ HtmlSource),
/* harmony export */   bL: () => (/* binding */ __wbindgen_init_externref_table),
/* harmony export */   cV: () => (/* binding */ __wbg_get_e27dfaeb6f46bd45),
/* harmony export */   dQ: () => (/* binding */ __wbg_childNodes_c4423003f3a9441f),
/* harmony export */   hr: () => (/* binding */ __wbg_nodeValue_6ff4f14870c43bd9),
/* harmony export */   iA: () => (/* binding */ __wbg_set_8fc6bf8a5b1071d1),
/* harmony export */   jG: () => (/* binding */ __wbg_nodeType_5e1153141daac26a),
/* harmony export */   jn: () => (/* binding */ __wbg_getPropertyValue_e623c23a05dfb30c),
/* harmony export */   k4: () => (/* binding */ __wbg_forEach_d6a05ca96422eff9),
/* harmony export */   lI: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   qN: () => (/* binding */ __wbindgen_string_get),
/* harmony export */   rn: () => (/* binding */ __wbg_body_942ea927546a04ba),
/* harmony export */   rz: () => (/* binding */ __wbg_style_fb30c14e5815805c),
/* harmony export */   tm: () => (/* binding */ __wbg_forEach_e1cf6f7c8ecb7dae),
/* harmony export */   u1: () => (/* binding */ __wbg_hasAttribute_db31090c2e646f57),
/* harmony export */   wW: () => (/* binding */ __wbg_getAttribute_ea5166be2deba45e),
/* harmony export */   x$: () => (/* binding */ __wbg_stack_0ed75d68575b0f3c),
/* harmony export */   yc: () => (/* binding */ __wbindgen_string_new)
/* harmony export */ });
/* unused harmony exports start, ActionState, ComposerAction, DomCreationError, PatternKeyType, ComposerModel, ComposerUpdate, Create, CreateWithText, Disabled, DomChildren, DomHandle, Edit, Keep, LinkAction, MenuAction, MenuActionSuggestion, MenuState, MenuStateUpdate, PatternKey, ReplaceAll, Selection, SuggestionPattern, TextUpdate */
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


function isLikeNone(x) {
    return x === undefined || x === null;
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_export_1.set(idx, obj);
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function start() {
    wasm.start();
}

/**
 * @returns {ComposerModel}
 */
function new_composer_model() {
    const ret = wasm.composermodel_new();
    return ComposerModel.__wrap(ret);
}

/**
 * @param {string} html
 * @param {number} start_utf16_codeunit
 * @param {number} end_utf16_codeunit
 * @returns {ComposerModel}
 */
function new_composer_model_from_html(html, start_utf16_codeunit, end_utf16_codeunit) {
    const ptr0 = passStringToWasm0(html, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.new_composer_model_from_html(ptr0, len0, start_utf16_codeunit, end_utf16_codeunit);
    return ComposerModel.__wrap(ret);
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_1.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
function __wbg_adapter_124(arg0, arg1, arg2, arg3, arg4) {
    wasm.closure102_externref_shim(arg0, arg1, arg2, arg3, arg4);
}

function __wbg_adapter_127(arg0, arg1, arg2, arg3) {
    wasm.closure105_externref_shim(arg0, arg1, arg2, arg3);
}

/**
 * @enum {0 | 1 | 2}
 */
const ActionState = Object.freeze({
    /**
     * The button can be clicked, and will perform its normal action
     * e.g. make something bold
     */
    Enabled: 0, "0": "Enabled",
    /**
     * The button can be clicked, and will perform the reverse of its
     * normal action e.g. stop something being bold
     */
    Reversed: 1, "1": "Reversed",
    /**
     * The button cannot be clicked
     */
    Disabled: 2, "2": "Disabled",
});
/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13}
 */
const ComposerAction = Object.freeze({
    Bold: 0, "0": "Bold",
    Italic: 1, "1": "Italic",
    StrikeThrough: 2, "2": "StrikeThrough",
    Underline: 3, "3": "Underline",
    InlineCode: 4, "4": "InlineCode",
    Link: 5, "5": "Link",
    Undo: 6, "6": "Undo",
    Redo: 7, "7": "Redo",
    OrderedList: 8, "8": "OrderedList",
    UnorderedList: 9, "9": "UnorderedList",
    Indent: 10, "10": "Indent",
    Unindent: 11, "11": "Unindent",
    CodeBlock: 12, "12": "CodeBlock",
    Quote: 13, "13": "Quote",
});
/**
 * @enum {0 | 1}
 */
const DomCreationError = Object.freeze({
    HtmlParseError: 0, "0": "HtmlParseError",
    MarkdownParseError: 1, "1": "MarkdownParseError",
});
/**
 * @enum {0 | 1 | 2}
 */
const HtmlSource = Object.freeze({
    Matrix: 0, "0": "Matrix",
    GoogleDoc: 1, "1": "GoogleDoc",
    UnknownExternal: 2, "2": "UnknownExternal",
});
/**
 * @enum {0 | 1 | 2 | 3 | 4}
 */
const PatternKeyType = Object.freeze({
    At: 0, "0": "At",
    Hash: 1, "1": "Hash",
    Slash: 2, "2": "Slash",
    Custom: 3, "3": "Custom",
    Colon: 4, "4": "Colon",
});

const __wbindgen_enum_SupportedType = ["text/html", "text/xml", "application/xml", "application/xhtml+xml", "image/svg+xml"];

const ComposerModelFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_composermodel_free(ptr >>> 0, 1));

class ComposerModel {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ComposerModel.prototype);
        obj.__wbg_ptr = ptr;
        ComposerModelFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ComposerModelFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_composermodel_free(ptr, 0);
    }
    /**
     * @returns {ComposerModel}
     */
    static new() {
        const ret = wasm.composermodel_new();
        return ComposerModel.__wrap(ret);
    }
    /**
     * @param {string} text
     * @returns {ComposerModel}
     */
    static from_example_format(text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_from_example_format(ptr0, len0);
        return ComposerModel.__wrap(ret);
    }
    /**
     * @returns {string}
     */
    to_example_format() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.composermodel_to_example_format(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_content_as_html() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.composermodel_get_content_as_html(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_content_as_message_html() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.composermodel_get_content_as_message_html(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_content_as_markdown() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.composermodel_get_content_as_markdown(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_content_as_message_markdown() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.composermodel_get_content_as_message_markdown(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get_content_as_plain_text() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.composermodel_get_content_as_plain_text(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {DomHandle}
     */
    document() {
        const ret = wasm.composermodel_document(this.__wbg_ptr);
        return DomHandle.__wrap(ret);
    }
    /**
     * @returns {Map<any, any>}
     */
    action_states() {
        const ret = wasm.composermodel_action_states(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {number} start_utf16_codeunit
     * @param {number} end_utf16_codeunit
     * @returns {ComposerUpdate}
     */
    select(start_utf16_codeunit, end_utf16_codeunit) {
        const ret = wasm.composermodel_select(this.__wbg_ptr, start_utf16_codeunit, end_utf16_codeunit);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {number}
     */
    selection_start() {
        const ret = wasm.composermodel_selection_start(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    selection_end() {
        const ret = wasm.composermodel_selection_end(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {string} new_text
     * @returns {ComposerUpdate}
     */
    replace_text(new_text) {
        const ptr0 = passStringToWasm0(new_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_replace_text(this.__wbg_ptr, ptr0, len0);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @param {string} new_html
     * @param {HtmlSource} external_source
     * @returns {ComposerUpdate}
     */
    replace_html(new_html, external_source) {
        const ptr0 = passStringToWasm0(new_html, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_replace_html(this.__wbg_ptr, ptr0, len0, external_source);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @param {string} new_text
     * @param {SuggestionPattern} suggestion
     * @param {boolean} append_space
     * @returns {ComposerUpdate}
     */
    replace_text_suggestion(new_text, suggestion, append_space) {
        const ptr0 = passStringToWasm0(new_text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        _assertClass(suggestion, SuggestionPattern);
        const ret = wasm.composermodel_replace_text_suggestion(this.__wbg_ptr, ptr0, len0, suggestion.__wbg_ptr, append_space);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @param {string} text
     * @returns {ComposerUpdate}
     */
    set_content_from_html(text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_set_content_from_html(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ComposerUpdate.__wrap(ret[0]);
    }
    /**
     * @param {string} text
     * @returns {ComposerUpdate}
     */
    set_content_from_markdown(text) {
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_set_content_from_markdown(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ComposerUpdate.__wrap(ret[0]);
    }
    /**
     * @returns {ComposerUpdate}
     */
    clear() {
        const ret = wasm.composermodel_clear(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    enter() {
        const ret = wasm.composermodel_enter(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    backspace() {
        const ret = wasm.composermodel_backspace(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    backspace_word() {
        const ret = wasm.composermodel_backspace_word(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    delete() {
        const ret = wasm.composermodel_delete(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    delete_word() {
        const ret = wasm.composermodel_delete_word(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    bold() {
        const ret = wasm.composermodel_bold(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    italic() {
        const ret = wasm.composermodel_italic(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    strike_through() {
        const ret = wasm.composermodel_strike_through(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    underline() {
        const ret = wasm.composermodel_underline(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    quote() {
        const ret = wasm.composermodel_quote(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    inline_code() {
        const ret = wasm.composermodel_inline_code(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    code_block() {
        const ret = wasm.composermodel_code_block(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    undo() {
        const ret = wasm.composermodel_undo(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    redo() {
        const ret = wasm.composermodel_redo(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    ordered_list() {
        const ret = wasm.composermodel_ordered_list(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    unordered_list() {
        const ret = wasm.composermodel_unordered_list(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    indent() {
        const ret = wasm.composermodel_indent(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    unindent() {
        const ret = wasm.composermodel_unindent(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {LinkAction}
     */
    get_link_action() {
        const ret = wasm.composermodel_get_link_action(this.__wbg_ptr);
        return LinkAction.__wrap(ret);
    }
    /**
     * @param {string} url
     * @param {Map<any, any>} attributes
     * @returns {ComposerUpdate}
     */
    set_link(url, attributes) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_set_link(this.__wbg_ptr, ptr0, len0, attributes);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @param {string} url
     * @param {string} text
     * @param {Map<any, any>} attributes
     * @returns {ComposerUpdate}
     */
    set_link_with_text(url, text, attributes) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_set_link_with_text(this.__wbg_ptr, ptr0, len0, ptr1, len1, attributes);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @param {Array<any>} custom_suggestion_patterns
     */
    set_custom_suggestion_patterns(custom_suggestion_patterns) {
        wasm.composermodel_set_custom_suggestion_patterns(this.__wbg_ptr, custom_suggestion_patterns);
    }
    /**
     * Creates an at-room mention node and inserts it into the composer at the current selection
     * @param {Map<any, any>} attributes
     * @returns {ComposerUpdate}
     */
    insert_at_room_mention(attributes) {
        const ret = wasm.composermodel_insert_at_room_mention(this.__wbg_ptr, attributes);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * Creates a mention node and inserts it into the composer at the current selection
     * @param {string} url
     * @param {string} text
     * @param {Map<any, any>} attributes
     * @returns {ComposerUpdate}
     */
    insert_mention(url, text, attributes) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.composermodel_insert_mention(this.__wbg_ptr, ptr0, len0, ptr1, len1, attributes);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * Creates an at-room mention node and inserts it into the composer, replacing the
     * text content defined by the suggestion
     * @param {SuggestionPattern} suggestion
     * @param {Map<any, any>} attributes
     * @returns {ComposerUpdate}
     */
    insert_at_room_mention_at_suggestion(suggestion, attributes) {
        _assertClass(suggestion, SuggestionPattern);
        const ret = wasm.composermodel_insert_at_room_mention_at_suggestion(this.__wbg_ptr, suggestion.__wbg_ptr, attributes);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * Creates a mention node and inserts it into the composer, replacing the
     * text content defined by the suggestion
     * @param {string} url
     * @param {string} text
     * @param {SuggestionPattern} suggestion
     * @param {Map<any, any>} attributes
     * @returns {ComposerUpdate}
     */
    insert_mention_at_suggestion(url, text, suggestion, attributes) {
        const ptr0 = passStringToWasm0(url, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        _assertClass(suggestion, SuggestionPattern);
        const ret = wasm.composermodel_insert_mention_at_suggestion(this.__wbg_ptr, ptr0, len0, ptr1, len1, suggestion.__wbg_ptr, attributes);
        return ComposerUpdate.__wrap(ret);
    }
    /**
     * @returns {ComposerUpdate}
     */
    remove_links() {
        const ret = wasm.composermodel_remove_links(this.__wbg_ptr);
        return ComposerUpdate.__wrap(ret);
    }
}

const ComposerUpdateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_composerupdate_free(ptr >>> 0, 1));

class ComposerUpdate {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ComposerUpdate.prototype);
        obj.__wbg_ptr = ptr;
        ComposerUpdateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ComposerUpdateFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_composerupdate_free(ptr, 0);
    }
    /**
     * @returns {TextUpdate}
     */
    text_update() {
        const ret = wasm.composerupdate_text_update(this.__wbg_ptr);
        return TextUpdate.__wrap(ret);
    }
    /**
     * @returns {MenuState}
     */
    menu_state() {
        const ret = wasm.composerupdate_menu_state(this.__wbg_ptr);
        return MenuState.__wrap(ret);
    }
    /**
     * @returns {MenuAction}
     */
    menu_action() {
        const ret = wasm.composerupdate_menu_action(this.__wbg_ptr);
        return MenuAction.__wrap(ret);
    }
}

const CreateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_create_free(ptr >>> 0, 1));

class Create {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Create.prototype);
        obj.__wbg_ptr = ptr;
        CreateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CreateFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_create_free(ptr, 0);
    }
}

const CreateWithTextFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_createwithtext_free(ptr >>> 0, 1));

class CreateWithText {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(CreateWithText.prototype);
        obj.__wbg_ptr = ptr;
        CreateWithTextFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CreateWithTextFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_createwithtext_free(ptr, 0);
    }
}

const DisabledFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_disabled_free(ptr >>> 0, 1));

class Disabled {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Disabled.prototype);
        obj.__wbg_ptr = ptr;
        DisabledFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DisabledFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_disabled_free(ptr, 0);
    }
}

const DomChildrenFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_domchildren_free(ptr >>> 0, 1));
/**
 * An iterator-like view of a DomHandle's children, written to work around
 * the lack of support for returning Vec<T> in wasm_bindgen.
 */
class DomChildren {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DomChildren.prototype);
        obj.__wbg_ptr = ptr;
        DomChildrenFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DomChildrenFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_domchildren_free(ptr, 0);
    }
    /**
     * @returns {DomHandle | undefined}
     */
    next_child() {
        const ret = wasm.domchildren_next_child(this.__wbg_ptr);
        return ret === 0 ? undefined : DomHandle.__wrap(ret);
    }
}

const DomHandleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_domhandle_free(ptr >>> 0, 1));
/**
 * Refers to a node in the composer model.
 */
class DomHandle {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(DomHandle.prototype);
        obj.__wbg_ptr = ptr;
        DomHandleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DomHandleFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_domhandle_free(ptr, 0);
    }
    /**
     * Returns "container", "line_break", "text" or "zwsp" depending on the type of
     * node we refer to.
     * Panics if we are not a valid reference (because the model has changed
     * since we were created, or because you passed in a different model
     * from the one that created us.)
     * @param {ComposerModel} model
     * @returns {string}
     */
    node_type(model) {
        let deferred1_0;
        let deferred1_1;
        try {
            _assertClass(model, ComposerModel);
            const ret = wasm.domhandle_node_type(this.__wbg_ptr, model.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns a list of our children nodes, or an empty list if we refer
     * to a text or line break node.
     * Panics if we are not a valid reference (because the model has changed
     * since we were created, or because you passed in a different model
     * from the one that created us.)
     * @param {ComposerModel} model
     * @returns {DomChildren}
     */
    children(model) {
        _assertClass(model, ComposerModel);
        const ret = wasm.domhandle_children(this.__wbg_ptr, model.__wbg_ptr);
        return DomChildren.__wrap(ret);
    }
    /**
     * Returns the text of this node, or an empty string if this is a
     * container or line break.
     * Panics if we are not a valid reference (because the model has changed
     * since we were created, or because you passed in a different model
     * from the one that created us.)
     * @param {ComposerModel} model
     * @returns {string}
     */
    text(model) {
        let deferred1_0;
        let deferred1_1;
        try {
            _assertClass(model, ComposerModel);
            const ret = wasm.domhandle_text(this.__wbg_ptr, model.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * Returns our tagname, or "-text-"/"-zwsp-" if we are a text/zwsp node.
     * Panics if we are not a valid reference (because the model has changed
     * since we were created, or because you passed in a different model
     * from the one that created us.)
     * @param {ComposerModel} model
     * @returns {string}
     */
    tag(model) {
        let deferred1_0;
        let deferred1_1;
        try {
            _assertClass(model, ComposerModel);
            const ret = wasm.domhandle_tag(this.__wbg_ptr, model.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}

const EditFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_edit_free(ptr >>> 0, 1));

class Edit {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Edit.prototype);
        obj.__wbg_ptr = ptr;
        EditFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        EditFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_edit_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get url() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_edit_url(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {string} arg0
     */
    set url(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_edit_url(this.__wbg_ptr, ptr0, len0);
    }
}

const KeepFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_keep_free(ptr >>> 0, 1));

class Keep {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Keep.prototype);
        obj.__wbg_ptr = ptr;
        KeepFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        KeepFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_keep_free(ptr, 0);
    }
}

const LinkActionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_linkaction_free(ptr >>> 0, 1));

class LinkAction {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(LinkAction.prototype);
        obj.__wbg_ptr = ptr;
        LinkActionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LinkActionFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_linkaction_free(ptr, 0);
    }
    /**
     * @returns {CreateWithText | undefined}
     */
    get create_with_text() {
        const ret = wasm.__wbg_get_linkaction_create_with_text(this.__wbg_ptr);
        return ret === 0 ? undefined : CreateWithText.__wrap(ret);
    }
    /**
     * @param {CreateWithText | null} [arg0]
     */
    set create_with_text(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, CreateWithText);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_linkaction_create_with_text(this.__wbg_ptr, ptr0);
    }
    /**
     * @returns {Create | undefined}
     */
    get create() {
        const ret = wasm.__wbg_get_linkaction_create(this.__wbg_ptr);
        return ret === 0 ? undefined : Create.__wrap(ret);
    }
    /**
     * @param {Create | null} [arg0]
     */
    set create(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Create);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_linkaction_create(this.__wbg_ptr, ptr0);
    }
    /**
     * @returns {Edit | undefined}
     */
    get edit_link() {
        const ret = wasm.__wbg_get_linkaction_edit_link(this.__wbg_ptr);
        return ret === 0 ? undefined : Edit.__wrap(ret);
    }
    /**
     * @param {Edit | null} [arg0]
     */
    set edit_link(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Edit);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_linkaction_edit_link(this.__wbg_ptr, ptr0);
    }
    /**
     * @returns {Disabled | undefined}
     */
    get disabled() {
        const ret = wasm.__wbg_get_linkaction_disabled(this.__wbg_ptr);
        return ret === 0 ? undefined : Disabled.__wrap(ret);
    }
    /**
     * @param {Disabled | null} [arg0]
     */
    set disabled(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Disabled);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_linkaction_disabled(this.__wbg_ptr, ptr0);
    }
}

const MenuActionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_menuaction_free(ptr >>> 0, 1));

class MenuAction {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(MenuAction.prototype);
        obj.__wbg_ptr = ptr;
        MenuActionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MenuActionFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_menuaction_free(ptr, 0);
    }
    /**
     * @returns {boolean}
     */
    keep() {
        const ret = wasm.menuaction_keep(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {boolean}
     */
    none() {
        const ret = wasm.menuaction_none(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {MenuActionSuggestion | undefined}
     */
    suggestion() {
        const ret = wasm.menuaction_suggestion(this.__wbg_ptr);
        return ret === 0 ? undefined : MenuActionSuggestion.__wrap(ret);
    }
}

const MenuActionSuggestionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_menuactionsuggestion_free(ptr >>> 0, 1));

class MenuActionSuggestion {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(MenuActionSuggestion.prototype);
        obj.__wbg_ptr = ptr;
        MenuActionSuggestionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MenuActionSuggestionFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_menuactionsuggestion_free(ptr, 0);
    }
    /**
     * @returns {SuggestionPattern}
     */
    get suggestion_pattern() {
        const ret = wasm.__wbg_get_menuactionsuggestion_suggestion_pattern(this.__wbg_ptr);
        return SuggestionPattern.__wrap(ret);
    }
    /**
     * @param {SuggestionPattern} arg0
     */
    set suggestion_pattern(arg0) {
        _assertClass(arg0, SuggestionPattern);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_menuactionsuggestion_suggestion_pattern(this.__wbg_ptr, ptr0);
    }
}

const MenuStateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_menustate_free(ptr >>> 0, 1));

class MenuState {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(MenuState.prototype);
        obj.__wbg_ptr = ptr;
        MenuStateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MenuStateFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_menustate_free(ptr, 0);
    }
    /**
     * @returns {boolean}
     */
    keep() {
        const ret = wasm.menustate_keep(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {MenuStateUpdate | undefined}
     */
    update() {
        const ret = wasm.menustate_update(this.__wbg_ptr);
        return ret === 0 ? undefined : MenuStateUpdate.__wrap(ret);
    }
}

const MenuStateUpdateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_menustateupdate_free(ptr >>> 0, 1));

class MenuStateUpdate {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(MenuStateUpdate.prototype);
        obj.__wbg_ptr = ptr;
        MenuStateUpdateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        MenuStateUpdateFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_menustateupdate_free(ptr, 0);
    }
    /**
     * @returns {Map<any, any>}
     */
    get action_states() {
        const ret = wasm.__wbg_get_menustateupdate_action_states(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {Map<any, any>} arg0
     */
    set action_states(arg0) {
        wasm.__wbg_set_menustateupdate_action_states(this.__wbg_ptr, arg0);
    }
}

const PatternKeyFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_patternkey_free(ptr >>> 0, 1));

class PatternKey {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(PatternKey.prototype);
        obj.__wbg_ptr = ptr;
        PatternKeyFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PatternKeyFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_patternkey_free(ptr, 0);
    }
    /**
     * @returns {PatternKeyType}
     */
    get key_type() {
        const ret = wasm.__wbg_get_patternkey_key_type(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {PatternKeyType} arg0
     */
    set key_type(arg0) {
        wasm.__wbg_set_patternkey_key_type(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {string | undefined}
     */
    get custom_key_value() {
        const ret = wasm.__wbg_get_patternkey_custom_key_value(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @param {string | null} [arg0]
     */
    set custom_key_value(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_patternkey_custom_key_value(this.__wbg_ptr, ptr0, len0);
    }
}

const ReplaceAllFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_replaceall_free(ptr >>> 0, 1));

class ReplaceAll {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(ReplaceAll.prototype);
        obj.__wbg_ptr = ptr;
        ReplaceAllFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ReplaceAllFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_replaceall_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get replacement_html() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_replaceall_replacement_html(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {string} arg0
     */
    set replacement_html(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_edit_url(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @returns {number}
     */
    get start_utf16_codeunit() {
        const ret = wasm.__wbg_get_replaceall_start_utf16_codeunit(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set start_utf16_codeunit(arg0) {
        wasm.__wbg_set_replaceall_start_utf16_codeunit(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get end_utf16_codeunit() {
        const ret = wasm.__wbg_get_replaceall_end_utf16_codeunit(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set end_utf16_codeunit(arg0) {
        wasm.__wbg_set_replaceall_end_utf16_codeunit(this.__wbg_ptr, arg0);
    }
}

const SelectionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_selection_free(ptr >>> 0, 1));

class Selection {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Selection.prototype);
        obj.__wbg_ptr = ptr;
        SelectionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SelectionFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_selection_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get start_utf16_codeunit() {
        const ret = wasm.__wbg_get_selection_start_utf16_codeunit(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set start_utf16_codeunit(arg0) {
        wasm.__wbg_set_selection_start_utf16_codeunit(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get end_utf16_codeunit() {
        const ret = wasm.__wbg_get_selection_end_utf16_codeunit(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set end_utf16_codeunit(arg0) {
        wasm.__wbg_set_selection_end_utf16_codeunit(this.__wbg_ptr, arg0);
    }
}

const SuggestionPatternFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_suggestionpattern_free(ptr >>> 0, 1));

class SuggestionPattern {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(SuggestionPattern.prototype);
        obj.__wbg_ptr = ptr;
        SuggestionPatternFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SuggestionPatternFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_suggestionpattern_free(ptr, 0);
    }
    /**
     * @returns {PatternKey}
     */
    get key() {
        const ret = wasm.__wbg_get_suggestionpattern_key(this.__wbg_ptr);
        return PatternKey.__wrap(ret);
    }
    /**
     * @param {PatternKey} arg0
     */
    set key(arg0) {
        _assertClass(arg0, PatternKey);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_suggestionpattern_key(this.__wbg_ptr, ptr0);
    }
    /**
     * @returns {string}
     */
    get text() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_suggestionpattern_text(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {string} arg0
     */
    set text(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_edit_url(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @returns {number}
     */
    get start() {
        const ret = wasm.__wbg_get_suggestionpattern_start(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set start(arg0) {
        wasm.__wbg_set_suggestionpattern_start(this.__wbg_ptr, arg0);
    }
    /**
     * @returns {number}
     */
    get end() {
        const ret = wasm.__wbg_get_suggestionpattern_end(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set end(arg0) {
        wasm.__wbg_set_suggestionpattern_end(this.__wbg_ptr, arg0);
    }
}

const TextUpdateFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_textupdate_free(ptr >>> 0, 1));

class TextUpdate {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(TextUpdate.prototype);
        obj.__wbg_ptr = ptr;
        TextUpdateFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TextUpdateFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_textupdate_free(ptr, 0);
    }
    /**
     * @returns {Keep | undefined}
     */
    get keep() {
        const ret = wasm.__wbg_get_textupdate_keep(this.__wbg_ptr);
        return ret === 0 ? undefined : Keep.__wrap(ret);
    }
    /**
     * @param {Keep | null} [arg0]
     */
    set keep(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Keep);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_textupdate_keep(this.__wbg_ptr, ptr0);
    }
    /**
     * @returns {ReplaceAll | undefined}
     */
    get replace_all() {
        const ret = wasm.__wbg_get_textupdate_replace_all(this.__wbg_ptr);
        return ret === 0 ? undefined : ReplaceAll.__wrap(ret);
    }
    /**
     * @param {ReplaceAll | null} [arg0]
     */
    set replace_all(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, ReplaceAll);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_textupdate_replace_all(this.__wbg_ptr, ptr0);
    }
    /**
     * @returns {Selection | undefined}
     */
    get select() {
        const ret = wasm.__wbg_get_textupdate_select(this.__wbg_ptr);
        return ret === 0 ? undefined : Selection.__wrap(ret);
    }
    /**
     * @param {Selection | null} [arg0]
     */
    set select(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Selection);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_textupdate_select(this.__wbg_ptr, ptr0);
    }
}

function __wbg_body_942ea927546a04ba(arg0) {
    const ret = arg0.body;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

function __wbg_childNodes_c4423003f3a9441f(arg0) {
    const ret = arg0.childNodes;
    return ret;
};

function __wbg_error_7534b8e9a36f1ab4(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
    }
};

function __wbg_forEach_d6a05ca96422eff9(arg0, arg1, arg2) {
    try {
        var state0 = {a: arg1, b: arg2};
        var cb0 = (arg0, arg1, arg2) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_124(a, state0.b, arg0, arg1, arg2);
            } finally {
                state0.a = a;
            }
        };
        arg0.forEach(cb0);
    } finally {
        state0.a = state0.b = 0;
    }
};

function __wbg_forEach_e1cf6f7c8ecb7dae(arg0, arg1, arg2) {
    try {
        var state0 = {a: arg1, b: arg2};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_127(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        arg0.forEach(cb0);
    } finally {
        state0.a = state0.b = 0;
    }
};

function __wbg_getAttribute_ea5166be2deba45e(arg0, arg1, arg2, arg3) {
    const ret = arg1.getAttribute(getStringFromWasm0(arg2, arg3));
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbg_getPropertyValue_e623c23a05dfb30c() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments) };

function __wbg_get_e27dfaeb6f46bd45(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

function __wbg_hasAttribute_db31090c2e646f57(arg0, arg1, arg2) {
    const ret = arg0.hasAttribute(getStringFromWasm0(arg1, arg2));
    return ret;
};

function __wbg_length_49b2ba67f0897e97(arg0) {
    const ret = arg0.length;
    return ret;
};

function __wbg_new_363ae9575a2aba54() { return handleError(function () {
    const ret = new DOMParser();
    return ret;
}, arguments) };

function __wbg_new_5e0be73521bc8c17() {
    const ret = new Map();
    return ret;
};

function __wbg_new_8a6f238a6ece86ea() {
    const ret = new Error();
    return ret;
};

function __wbg_nodeName_ff3aa439a5af6311(arg0, arg1) {
    const ret = arg1.nodeName;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbg_nodeType_5e1153141daac26a(arg0) {
    const ret = arg0.nodeType;
    return ret;
};

function __wbg_nodeValue_6ff4f14870c43bd9(arg0, arg1) {
    const ret = arg1.nodeValue;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbg_parseFromString_91cbec9ba27a222a() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg0.parseFromString(getStringFromWasm0(arg1, arg2), __wbindgen_enum_SupportedType[arg3]);
    return ret;
}, arguments) };

function __wbg_set_8fc6bf8a5b1071d1(arg0, arg1, arg2) {
    const ret = arg0.set(arg1, arg2);
    return ret;
};

function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
    const ret = arg1.stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbg_style_fb30c14e5815805c(arg0) {
    const ret = arg0.style;
    return ret;
};

function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_1;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return ret;
};

function __wbindgen_string_get(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }

}]);
//# sourceMappingURL=9014.js.map