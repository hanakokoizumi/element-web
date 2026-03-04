"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[8843],{

/***/ "./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AP: () => (/* binding */ getDefaultContextValue),
/* harmony export */   EW: () => (/* binding */ ComposerContext),
/* harmony export */   Hx: () => (/* binding */ useComposerContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/index.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


function getDefaultContextValue(defaultValue) {
  return _objectSpread({
    selection: {
      anchorNode: null,
      anchorOffset: 0,
      focusNode: null,
      focusOffset: 0,
      isForward: true
    }
  }, defaultValue);
}
const ComposerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(getDefaultContextValue());
ComposerContext.displayName = "ComposerContext";
function useComposerContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ComposerContext);
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/components/Editor.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* binding */ Editor)
});

// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useIsExpanded.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


function useIsExpanded(ref, breakingPoint) {
  const [isExpanded, setIsExpanded] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (ref !== null && ref !== void 0 && ref.current) {
      const editor = ref.current;
      const resizeObserver = new ResizeObserver(entries => {
        requestAnimationFrame(() => {
          var _entries$;
          const height = (_entries$ = entries[0]) === null || _entries$ === void 0 || (_entries$ = _entries$.contentBoxSize) === null || _entries$ === void 0 ? void 0 : _entries$[0].blockSize;
          setIsExpanded(height >= breakingPoint);
        });
      });
      resizeObserver.observe(editor);
      return () => resizeObserver.unobserve(editor);
    }
  }, [ref, breakingPoint]);
  return isExpanded;
}
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ./src/hooks/useFocus.ts
var useFocus = __webpack_require__("./src/hooks/useFocus.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts
var ComposerContext = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useSelection.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




function setSelectionContext(composerContext) {
  const selection = document.getSelection();
  if (selection) {
    const range = selection.getRangeAt(0);
    const isForward = range.startContainer === selection.anchorNode && range.startOffset === selection.anchorOffset;
    composerContext.selection = {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset,
      isForward
    };
  }
}
function useSelection() {
  const composerContext = (0,ComposerContext/* useComposerContext */.Hx)();
  const [isFocused, focusProps] = (0,useFocus/* default */.A)();
  (0,react.useEffect)(() => {
    function onSelectionChange() {
      setSelectionContext(composerContext);
    }
    if (isFocused) {
      document.addEventListener("selectionchange", onSelectionChange);
    }
    return () => document.removeEventListener("selectionchange", onSelectionChange);
  }, [isFocused, composerContext]);
  const onInput = (0,react.useCallback)(() => {
    setSelectionContext(composerContext);
  }, [composerContext]);
  return _objectSpread(_objectSpread({}, focusProps), {}, {
    onInput
  });
}
;// ./src/components/views/rooms/wysiwyg_composer/components/Editor.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const HEIGHT_BREAKING_POINT = 24;
const Editor = /*#__PURE__*/(0,react.memo)(function Editor({
  disabled,
  placeholder,
  leftComponent,
  rightComponent,
  ref
}) {
  const isExpanded = useIsExpanded(ref, HEIGHT_BREAKING_POINT);
  const {
    onFocus,
    onBlur,
    onInput
  } = useSelection();
  return /*#__PURE__*/react.createElement("div", {
    "data-testid": "WysiwygComposerEditor",
    className: "mx_WysiwygComposer_Editor",
    "data-is-expanded": isExpanded
  }, leftComponent, /*#__PURE__*/react.createElement("div", {
    className: "mx_WysiwygComposer_Editor_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()("mx_WysiwygComposer_Editor_content", {
      mx_WysiwygComposer_Editor_content_placeholder: Boolean(placeholder)
    }),
    style: {
      "--placeholder": `"${placeholder}"`
    },
    ref: ref,
    contentEditable: !disabled,
    role: "textbox",
    "aria-multiline": "true",
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    dir: "auto",
    "aria-disabled": disabled,
    onFocus: onFocus,
    onBlur: onBlur,
    onInput: onInput
  })), rightComponent);
});

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* binding */ WysiwygAutocomplete)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/Autocomplete.tsx + 5 modules
var Autocomplete = __webpack_require__("./src/components/views/rooms/Autocomplete.tsx");
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ./src/Avatar.ts
var Avatar = __webpack_require__("./src/Avatar.ts");
;// ./src/components/views/rooms/wysiwyg_composer/utils/autocomplete.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



/**
 * Builds the query for the `<Autocomplete />` component from the rust suggestion. This
 * will change as we implement handling / commands.
 *
 * @param suggestion  - represents if the rust model is tracking a potential mention
 * @returns an empty string if we can not generate a query, otherwise a query beginning
 * with @ for a user query, # for a room or space query
 */
function buildQuery(suggestion) {
  if (!suggestion || !suggestion.keyChar) {
    // if we have an empty key character, we do not build a query
    return "";
  }
  return `${suggestion.keyChar}${suggestion.text}`;
}

/**
 * Find the room from the completion by looking it up using the client from the context
 * we are currently in
 *
 * @param completion - the completion from the autocomplete
 * @param client - the current client we are using
 * @returns a Room if one is found, null otherwise
 */
function getRoomFromCompletion(completion, client) {
  const roomId = completion.completionId;
  const aliasFromCompletion = completion.completion;
  let roomToReturn;

  // Not quite sure if the logic here makes sense - specifically calling .getRoom with an alias
  // that doesn't start with #, but keeping the logic the same as in PartCreator.roomPill for now
  if (roomId) {
    roomToReturn = client.getRoom(roomId);
  } else if (!aliasFromCompletion.startsWith("#")) {
    roomToReturn = client.getRoom(aliasFromCompletion);
  } else {
    roomToReturn = client.getRooms().find(r => {
      return r.getCanonicalAlias() === aliasFromCompletion || r.getAltAliases().includes(aliasFromCompletion);
    });
  }
  return roomToReturn !== null && roomToReturn !== void 0 ? roomToReturn : null;
}

/**
 * Given an autocomplete suggestion, determine the text to display in the pill
 *
 * @param completion - the item selected from the autocomplete
 * @param client - the MatrixClient is required for us to look up the correct room mention text
 * @returns the text to display in the mention
 */
function getMentionDisplayText(completion, client) {
  if (completion.type === "user" || completion.type === "at-room") {
    return completion.completion;
  } else if (completion.type === "room") {
    var _getRoomFromCompletio;
    // try and get the room and use it's name, if not available, fall back to
    // completion.completion
    return ((_getRoomFromCompletio = getRoomFromCompletion(completion, client)) === null || _getRoomFromCompletio === void 0 ? void 0 : _getRoomFromCompletio.name) || completion.completion;
  }
  return "";
}
function getCSSProperties({
  url,
  initialLetter,
  id = ""
}) {
  const cssProperties = [`--avatar-background: url(${url})`, `--avatar-letter: '${initialLetter}'`];
  const textColor = Avatar/* getAvatarTextColor */.gx(id);
  if (textColor) {
    cssProperties.push(textColor);
  }
  return cssProperties.join("; ");
}

/**
 * For a given completion, the attributes will change depending on the completion type
 *
 * @param completion - the item selected from the autocomplete
 * @param client - the MatrixClient is required for us to look up the correct room mention text
 * @param room - the room the composer is currently in
 * @returns an object of attributes containing HTMLAnchor attributes or data-* attributes
 */
function getMentionAttributes(completion, client, room) {
  // To ensure that we always have something set in the --avatar-letter CSS variable
  // as otherwise alignment varies depending on whether the content is empty or not.
  // Use a zero width space so that it counts as content, but does not display anything.
  const defaultLetterContent = "\u200b";
  const attributes = new Map();
  if (completion.type === "user") {
    // logic as used in UserPillPart.setAvatar in parts.ts
    const mentionedMember = room.getMember(completion.completionId || "");
    if (!mentionedMember) return attributes;
    const name = mentionedMember.name || mentionedMember.userId;
    const defaultAvatarUrl = Avatar/* defaultAvatarUrlForString */.iv(mentionedMember.userId);
    const avatarUrl = Avatar/* avatarUrlForMember */._V(mentionedMember, 16, 16, "crop");
    let initialLetter = defaultLetterContent;
    if (avatarUrl === defaultAvatarUrl) {
      var _Avatar$getInitialLet;
      initialLetter = (_Avatar$getInitialLet = Avatar/* getInitialLetter */.$R(name)) !== null && _Avatar$getInitialLet !== void 0 ? _Avatar$getInitialLet : defaultLetterContent;
    }
    attributes.set("data-mention-type", completion.type);
    attributes.set("style", getCSSProperties({
      url: avatarUrl,
      initialLetter,
      id: mentionedMember.userId
    }));
  } else if (completion.type === "room") {
    var _mentionedRoom$roomId2;
    // logic as used in RoomPillPart.setAvatar in parts.ts
    const mentionedRoom = getRoomFromCompletion(completion, client);
    const aliasFromCompletion = completion.completion;
    let initialLetter = defaultLetterContent;
    let avatarUrl = Avatar/* avatarUrlForRoom */.ze(mentionedRoom !== null && mentionedRoom !== void 0 ? mentionedRoom : null, 16, 16, "crop");
    if (!avatarUrl) {
      var _Avatar$getInitialLet2, _mentionedRoom$roomId;
      initialLetter = (_Avatar$getInitialLet2 = Avatar/* getInitialLetter */.$R((mentionedRoom === null || mentionedRoom === void 0 ? void 0 : mentionedRoom.name) || aliasFromCompletion)) !== null && _Avatar$getInitialLet2 !== void 0 ? _Avatar$getInitialLet2 : defaultLetterContent;
      avatarUrl = Avatar/* defaultAvatarUrlForString */.iv((_mentionedRoom$roomId = mentionedRoom === null || mentionedRoom === void 0 ? void 0 : mentionedRoom.roomId) !== null && _mentionedRoom$roomId !== void 0 ? _mentionedRoom$roomId : aliasFromCompletion);
    }
    attributes.set("data-mention-type", completion.type);
    attributes.set("style", getCSSProperties({
      url: avatarUrl,
      initialLetter,
      id: (_mentionedRoom$roomId2 = mentionedRoom === null || mentionedRoom === void 0 ? void 0 : mentionedRoom.roomId) !== null && _mentionedRoom$roomId2 !== void 0 ? _mentionedRoom$roomId2 : aliasFromCompletion
    }));
  } else if (completion.type === "at-room") {
    // logic as used in RoomPillPart.setAvatar in parts.ts, but now we know the current room
    // from the arguments passed
    let initialLetter = defaultLetterContent;
    let avatarUrl = Avatar/* avatarUrlForRoom */.ze(room, 16, 16, "crop");
    if (!avatarUrl) {
      var _Avatar$getInitialLet3;
      initialLetter = (_Avatar$getInitialLet3 = Avatar/* getInitialLetter */.$R(room.name)) !== null && _Avatar$getInitialLet3 !== void 0 ? _Avatar$getInitialLet3 : defaultLetterContent;
      avatarUrl = Avatar/* defaultAvatarUrlForString */.iv(room.roomId);
    }
    attributes.set("data-mention-type", completion.type);
    attributes.set("style", getCSSProperties({
      url: avatarUrl,
      initialLetter,
      id: room.roomId
    }));
  }
  return attributes;
}
// EXTERNAL MODULE: ./src/contexts/ScopedRoomContext.tsx
var ScopedRoomContext = __webpack_require__("./src/contexts/ScopedRoomContext.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







/**
 * Given the current suggestion from the rust model and a handler function, this component
 * will display the legacy `<Autocomplete />` component (as used in the BasicMessageComposer)
 * and call the handler function with the required arguments when a mention is selected
 *
 * @param props.ref - the ref will be attached to the rendered `<Autocomplete />` component
 */
const WysiwygAutocomplete = ({
  suggestion,
  handleMention,
  handleCommand,
  handleAtRoomMention,
  handleEmoji,
  ref
}) => {
  const {
    room
  } = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("room");
  const client = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  function handleConfirm(completion) {
    if (client === undefined || room === undefined) {
      return;
    }
    switch (completion.type) {
      case "command":
        {
          // TODO determine if utils in SlashCommands.tsx are required.
          // Trim the completion as some include trailing spaces, but we always insert a
          // trailing space in the rust model anyway
          handleCommand(completion.completion.trim());
          return;
        }
      case "at-room":
        {
          handleAtRoomMention(getMentionAttributes(completion, client, room));
          return;
        }
      case "room":
      case "user":
        {
          if (typeof completion.href === "string") {
            handleMention(completion.href, getMentionDisplayText(completion, client), getMentionAttributes(completion, client, room));
          }
          return;
        }
      // TODO - handle "community" type
      case "community":
        {
          return; // no-op until we decide how to handle community in the wysiwyg composer
        }
      default:
        {
          // similar to the cider editor we handle emoji and other plain text replacement in the default case
          handleEmoji(completion.completion);
        }
        return;
    }
  }
  if (!room) return null;
  const autoCompleteQuery = buildQuery(suggestion);
  // debug for https://github.com/vector-im/element-web/issues/26037
  logger/* logger */.vF.log(`## 26037 ## Rendering Autocomplete for WysiwygAutocomplete with query: "${autoCompleteQuery}"`);

  // TODO - determine if we show all of the /command suggestions, there are some options in the
  // list which don't seem to make sense in this context, specifically /html and /plain
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_WysiwygComposer_AutoCompleteWrapper",
    "data-testid": "autocomplete-wrapper"
  }, /*#__PURE__*/react.createElement(Autocomplete/* default */.A, {
    ref: ref,
    query: autoCompleteQuery,
    onConfirm: handleConfirm,
    selection: {
      start: 0,
      end: 0
    },
    room: room
  }));
};
WysiwygAutocomplete.displayName = "WysiwygAutocomplete";


/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ WysiwygComposer)
});

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/@matrix-org/emojibase-bindings/build/emoji.js
var emoji = __webpack_require__("../../node_modules/@matrix-org/emojibase-bindings/build/emoji.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js + 1 modules
var matrix_wysiwyg = __webpack_require__("../../node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx + 1 modules
var WysiwygAutocomplete = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/bold.js
var bold = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/bold.js");
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js");
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/list-bulleted.js


function ListBulletedIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M4.5 7.5q-.618 0-1.06-.44A1.44 1.44 0 0 1 3 6q0-.618.44-1.06.442-.44 1.06-.44t1.06.44Q6 5.383 6 6t-.44 1.06q-.44.44-1.06.44m4.788 11.213Q9.575 19 10 19h10q.424 0 .712-.288A.97.97 0 0 0 21 18a.97.97 0 0 0-.288-.712A.97.97 0 0 0 20 17H10a.97.97 0 0 0-.713.288A.97.97 0 0 0 9 18q0 .424.287.712m.001-5.999Q9.575 13 10 13h10q.424 0 .712-.287A.97.97 0 0 0 21 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 11H10a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 12q0 .424.287.713m.001-6Q9.575 7 10 7h10q.424 0 .712-.287A.97.97 0 0 0 21 6a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 5H10a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 6q0 .424.287.713M3.44 19.06q.442.44 1.06.44t1.06-.44Q6 18.62 6 18t-.44-1.06a1.45 1.45 0 0 0-1.06-.44q-.618 0-1.06.44Q3 17.38 3 18t.44 1.06M4.5 13.5q-.618 0-1.06-.44A1.45 1.45 0 0 1 3 12q0-.619.44-1.06.442-.44 1.06-.44t1.06.44Q6 11.383 6 12t-.44 1.06q-.44.44-1.06.44"
    })
  });
}
;
ListBulletedIcon.displayName = "ListBulletedIcon";
/* harmony default export */ const list_bulleted = ((0,react.forwardRef)(ListBulletedIcon));
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/code.js


function CodeIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "m8.825 12 1.475-1.475q.3-.3.3-.7t-.3-.7-.713-.3-.712.3L6.7 11.3q-.15.15-.213.325a1.1 1.1 0 0 0-.062.375q0 .2.063.375a.9.9 0 0 0 .212.325l2.175 2.175q.3.3.713.3.412 0 .712-.3t.3-.7-.3-.7zm6.35 0L13.7 13.475q-.3.3-.3.7t.3.7.713.3.712-.3L17.3 12.7q.15-.15.212-.325.063-.175.063-.375t-.062-.375a.9.9 0 0 0-.213-.325l-2.175-2.175a1 1 0 0 0-1.425 0q-.3.3-.3.7t.3.7zM5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587Q21 4.176 21 5v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm0-2h14V5H5z"
    })
  });
}
;
CodeIcon.displayName = "CodeIcon";
/* harmony default export */ const code = ((0,react.forwardRef)(CodeIcon));
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/indent-decrease.js


function IndentDecreaseIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M3.288 18.713Q3.575 19 4 19h16q.424 0 .712-.288A.97.97 0 0 0 21 18a.97.97 0 0 0-.288-.712A.97.97 0 0 0 20 17H4a.97.97 0 0 0-.712.288A.97.97 0 0 0 3 18q0 .424.288.712m8-3.999Q11.575 15 12 15h8q.424 0 .712-.287A.97.97 0 0 0 21 14a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 13h-8a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 14q0 .424.287.713m.001-4Q11.575 11 12 11h8q.424 0 .712-.287A.97.97 0 0 0 21 10a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 9h-8a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 10q0 .424.287.713m.001-4Q11.575 7 12 7h8q.424 0 .712-.287A.97.97 0 0 0 21 6a.97.97 0 0 0-.288-.713A.97.97 0 0 0 20 5h-8a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 6q0 .424.287.713M6.15 13.15l-2.8-2.8a.48.48 0 0 1 0-.7l2.8-2.8q.25-.25.55-.125T7 7.2v5.6q0 .35-.3.475t-.55-.125"
    })
  });
}
;
IndentDecreaseIcon.displayName = "IndentDecreaseIcon";
/* harmony default export */ const indent_decrease = ((0,react.forwardRef)(IndentDecreaseIcon));
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/indent-increase.js


function IndentIncreaseIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M4 19a.97.97 0 0 1-.712-.288A.97.97 0 0 1 3 18q0-.424.288-.712A.97.97 0 0 1 4 17h16q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 20 19zm8-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 14q0-.424.287-.713A.97.97 0 0 1 12 13h8q.424 0 .712.287.288.288.288.713 0 .424-.288.713A.97.97 0 0 1 20 15zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 10q0-.424.287-.713A.97.97 0 0 1 12 9h8q.424 0 .712.287Q21 9.576 21 10t-.288.713A.97.97 0 0 1 20 11zm0-4a.97.97 0 0 1-.713-.287A.97.97 0 0 1 11 6q0-.424.287-.713A.97.97 0 0 1 12 5h8q.424 0 .712.287Q21 5.576 21 6t-.288.713A.97.97 0 0 1 20 7zm-8.15 6.15q-.25.25-.55.125T3 12.8V7.2q0-.35.3-.475t.55.125l2.8 2.8a.48.48 0 0 1 0 .7z"
    })
  });
}
;
IndentIncreaseIcon.displayName = "IndentIncreaseIcon";
/* harmony default export */ const indent_increase = ((0,react.forwardRef)(IndentIncreaseIcon));
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js
var inline_code = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/inline-code.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/italic.js
var italic = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/italic.js");
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/list-numbered.js


function ListNumberedIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M9 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1M5.604 5.089A.75.75 0 0 1 6 5.75v4.5a.75.75 0 0 1-1.5 0V7.151l-.334.223a.75.75 0 0 1-.832-1.248l1.5-1a.75.75 0 0 1 .77-.037M5 13a2 2 0 0 0-1.139.321 1.85 1.85 0 0 0-.626.719 2.3 2.3 0 0 0-.234.921v.023l-.001.01v.005l.75.001H3a.75.75 0 0 0 1.5.01V15l.01-.072a.8.8 0 0 1 .067-.218.35.35 0 0 1 .116-.14c.04-.027.126-.07.307-.07s.267.043.307.07a.35.35 0 0 1 .116.14.8.8 0 0 1 .076.29v.008a.53.53 0 0 1-.14.352l-2.161 2.351a.75.75 0 0 0-.198.523v.016c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-.82l1.034-1.124C6.809 16 7 15.51 7 15h-.75H7v-.039l-.004-.068a2.3 2.3 0 0 0-.231-.853 1.85 1.85 0 0 0-.626-.719A2 2 0 0 0 5 13m-.5 2.003V15v.01z"
    })
  });
}
;
ListNumberedIcon.displayName = "ListNumberedIcon";
/* harmony default export */ const list_numbered = ((0,react.forwardRef)(ListNumberedIcon));
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/quote.js
var quote = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/quote.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/strikethrough.js
var strikethrough = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/strikethrough.js");
;// ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/underline.js


function UnderlineIcon(props, ref) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M6 21a.97.97 0 0 1-.713-.288A.97.97 0 0 1 5 20q0-.424.287-.712A.97.97 0 0 1 6 19h12q.424 0 .712.288.288.287.288.712 0 .424-.288.712A.97.97 0 0 1 18 21zm6-4q-2.525 0-3.925-1.575t-1.4-4.175V4.275q0-.525.388-.9A1.27 1.27 0 0 1 7.975 3q.525 0 .9.375t.375.9V11.4q0 1.4.7 2.275t2.05.875 2.05-.875.7-2.275V4.275q0-.525.387-.9A1.27 1.27 0 0 1 16.05 3q.525 0 .9.375t.375.9v6.975q0 2.6-1.4 4.175T12 17"
    })
  });
}
;
UnderlineIcon.displayName = "UnderlineIcon";
/* harmony default export */ const underline = ((0,react.forwardRef)(UnderlineIcon));
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js
var icons_link = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/link.js");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ./src/Modal.tsx + 1 modules
var Modal = __webpack_require__("./src/Modal.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/Field.tsx
var Field = __webpack_require__("./src/components/views/elements/Field.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/selection.ts
var selection = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/selection.ts");
// EXTERNAL MODULE: ./src/components/views/dialogs/BaseDialog.tsx
var BaseDialog = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/DialogButtons.tsx
var DialogButtons = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/components/LinkModal.tsx

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/








function openLinkModal(composer, composerContext, isEditing) {
  Modal/* default */.Ay.createDialog(LinkModal, {
    composerContext,
    composer,
    isTextEnabled: (0,selection/* isSelectionEmpty */.CD)(),
    isEditing
  }, "mx_CompoundDialog", false, true);
}
function isEmpty(text) {
  return text.length < 1;
}
const LinkModal = ({
  composer,
  isTextEnabled,
  onFinished,
  composerContext,
  isEditing
}) => {
  const [hasLinkChanged, setHasLinkChanged] = (0,react.useState)(false);
  const [fields, setFields] = (0,react.useState)({
    text: "",
    link: isEditing ? composer.getLink() : ""
  });
  const hasText = !isEditing && isTextEnabled;
  const isSaveDisabled = !hasLinkChanged || hasText && isEmpty(fields.text) || isEmpty(fields.link);
  return /*#__PURE__*/react.createElement(BaseDialog/* default */.A, {
    className: "mx_LinkModal",
    title: isEditing ? (0,languageHandler._t)("composer|link_modal|title_edit") : (0,languageHandler._t)("composer|link_modal|title_create"),
    hasCancel: true,
    onFinished: onFinished
  }, /*#__PURE__*/react.createElement("form", {
    className: "mx_LinkModal_content",
    onSubmit: async evt => {
      evt.preventDefault();
      evt.stopPropagation();
      onFinished();

      // When submitting is done when pressing enter when the link field has the focus,
      // The link field is getting back the focus (due to react-focus-lock)
      // So we are waiting that the focus stuff is done to play with the composer selection
      await new Promise(resolve => setTimeout(resolve, 0));
      await (0,selection/* setSelection */.td)(composerContext.selection);
      composer.link(fields.link, isTextEnabled ? fields.text : undefined);
    }
  }, hasText && /*#__PURE__*/react.createElement(Field/* default */.A, {
    required: true,
    autoFocus: true,
    label: (0,languageHandler._t)("composer|link_modal|text_field_label"),
    value: fields.text,
    className: "mx_LinkModal_Field",
    placeholder: "",
    onChange: e => setFields(fields => _objectSpread(_objectSpread({}, fields), {}, {
      text: e.target.value
    }))
  }), /*#__PURE__*/react.createElement(Field/* default */.A, {
    required: true,
    autoFocus: !hasText,
    label: (0,languageHandler._t)("composer|link_modal|link_field_label"),
    value: fields.link,
    className: "mx_LinkModal_Field",
    placeholder: "",
    onChange: e => {
      setFields(fields => _objectSpread(_objectSpread({}, fields), {}, {
        link: e.target.value
      }));
      setHasLinkChanged(true);
    }
  }), /*#__PURE__*/react.createElement("div", {
    className: "mx_LinkModal_buttons"
  }, isEditing && /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "danger",
    onClick: () => {
      composer.removeLinks();
      onFinished();
    }
  }, (0,languageHandler._t)("action|remove")), /*#__PURE__*/react.createElement(DialogButtons/* default */.A, {
    primaryButton: (0,languageHandler._t)("action|save"),
    primaryDisabled: isSaveDisabled,
    primaryIsSubmit: true,
    onCancel: onFinished
  }))));
};
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts
var ComposerContext = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts");
// EXTERNAL MODULE: ./src/components/views/settings/KeyboardShortcut.tsx
var KeyboardShortcut = __webpack_require__("./src/components/views/settings/KeyboardShortcut.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/components/FormattingButtons.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




















function Button({
  label,
  keyCombo,
  onClick,
  actionState,
  icon
}) {
  return /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    element: "button",
    onClick: onClick,
    "aria-label": label,
    disabled: actionState === "disabled",
    className: classnames_default()("mx_FormattingButtons_Button", {
      mx_FormattingButtons_active: actionState === "reversed",
      mx_FormattingButtons_Button_hover: actionState === "enabled",
      mx_FormattingButtons_disabled: actionState === "disabled"
    }),
    title: actionState === "disabled" ? undefined : label,
    caption: keyCombo && /*#__PURE__*/react.createElement(KeyboardShortcut/* KeyboardShortcut */.S, {
      value: keyCombo,
      className: "mx_FormattingButtons_Tooltip_KeyboardShortcut"
    }),
    placement: "top"
  }, icon);
}
function FormattingButtons({
  composer,
  actionStates,
  disabled
}) {
  const composerContext = (0,ComposerContext/* useComposerContext */.Hx)();
  const isInList = actionStates.unorderedList === "reversed" || actionStates.orderedList === "reversed";
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_FormattingButtons"
  }, /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.bold,
    label: (0,languageHandler._t)("composer|format_bold"),
    keyCombo: {
      ctrlOrCmdKey: true,
      key: "b"
    },
    onClick: () => composer.bold(),
    icon: /*#__PURE__*/react.createElement(bold/* default */.A, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.italic,
    label: (0,languageHandler._t)("composer|format_italic"),
    keyCombo: {
      ctrlOrCmdKey: true,
      key: "i"
    },
    onClick: () => composer.italic(),
    icon: /*#__PURE__*/react.createElement(italic/* default */.A, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.underline,
    label: (0,languageHandler._t)("composer|format_underline"),
    keyCombo: {
      ctrlOrCmdKey: true,
      key: "u"
    },
    onClick: () => composer.underline(),
    icon: /*#__PURE__*/react.createElement(underline, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.strikeThrough,
    label: (0,languageHandler._t)("composer|format_strikethrough"),
    onClick: () => composer.strikeThrough(),
    icon: /*#__PURE__*/react.createElement(strikethrough/* default */.A, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.unorderedList,
    label: (0,languageHandler._t)("composer|format_unordered_list"),
    onClick: () => composer.unorderedList(),
    icon: /*#__PURE__*/react.createElement(list_bulleted, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.orderedList,
    label: (0,languageHandler._t)("composer|format_ordered_list"),
    onClick: () => composer.orderedList(),
    icon: /*#__PURE__*/react.createElement(list_numbered, {
      className: "mx_FormattingButtons_Icon"
    })
  }), isInList && /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.indent,
    label: (0,languageHandler._t)("composer|format_increase_indent"),
    onClick: () => composer.indent(),
    icon: /*#__PURE__*/react.createElement(indent_increase, {
      className: "mx_FormattingButtons_Icon"
    })
  }), isInList && /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.unindent,
    label: (0,languageHandler._t)("composer|format_decrease_indent"),
    onClick: () => composer.unindent(),
    icon: /*#__PURE__*/react.createElement(indent_decrease, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.quote,
    label: (0,languageHandler._t)("action|quote"),
    onClick: () => composer.quote(),
    icon: /*#__PURE__*/react.createElement(quote/* default */.A, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.inlineCode,
    label: (0,languageHandler._t)("composer|format_inline_code"),
    keyCombo: {
      ctrlOrCmdKey: true,
      key: "e"
    },
    onClick: () => composer.inlineCode(),
    icon: /*#__PURE__*/react.createElement(inline_code/* default */.A, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.codeBlock,
    label: (0,languageHandler._t)("composer|format_code_block"),
    onClick: () => composer.codeBlock(),
    icon: /*#__PURE__*/react.createElement(code, {
      className: "mx_FormattingButtons_Icon"
    })
  }), /*#__PURE__*/react.createElement(Button, {
    actionState: disabled ? "disabled" : actionStates.link,
    label: (0,languageHandler._t)("composer|format_link"),
    onClick: () => openLinkModal(composer, composerContext, actionStates.link === "reversed"),
    icon: /*#__PURE__*/react.createElement(icons_link/* default */.A, {
      className: "mx_FormattingButtons_Icon"
    })
  }));
}
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/components/Editor.tsx + 2 modules
var Editor = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/components/Editor.tsx");
// EXTERNAL MODULE: ./src/hooks/useSettings.ts
var useSettings = __webpack_require__("./src/hooks/useSettings.ts");
// EXTERNAL MODULE: ./src/KeyBindingsManager.ts + 1 modules
var KeyBindingsManager = __webpack_require__("./src/KeyBindingsManager.ts");
// EXTERNAL MODULE: ./src/accessibility/KeyboardShortcuts.ts
var KeyboardShortcuts = __webpack_require__("./src/accessibility/KeyboardShortcuts.ts");
// EXTERNAL MODULE: ./src/utils/EventUtils.ts
var EventUtils = __webpack_require__("./src/utils/EventUtils.ts");
// EXTERNAL MODULE: ./src/dispatcher/dispatcher.ts
var dispatcher = __webpack_require__("./src/dispatcher/dispatcher.ts");
// EXTERNAL MODULE: ./src/dispatcher/actions.ts
var actions = __webpack_require__("./src/dispatcher/actions.ts");
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
;// ./src/components/views/rooms/wysiwyg_composer/utils/event.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


// From EditMessageComposer private get events(): MatrixEvent[]
function getEventsFromEditorStateTransfer(editorStateTransfer, roomContext, mxClient) {
  var _roomContext$liveTime;
  const liveTimelineEvents = (_roomContext$liveTime = roomContext.liveTimeline) === null || _roomContext$liveTime === void 0 ? void 0 : _roomContext$liveTime.getEvents();
  if (!liveTimelineEvents) {
    return;
  }
  const roomId = editorStateTransfer.getEvent().getRoomId();
  if (!roomId) {
    return;
  }
  const room = mxClient.getRoom(roomId);
  if (!room) {
    return;
  }
  const pendingEvents = room.getPendingEvents();
  const isInThread = Boolean(editorStateTransfer.getEvent().getThread());
  return liveTimelineEvents.concat(isInThread ? [] : pendingEvents);
}

// From SendMessageComposer private onKeyDown = (event: KeyboardEvent): void
function getEventsFromRoom(composerContext, roomContext) {
  var _composerContext$even, _roomContext$liveTime2, _roomContext$room;
  const isReplyingToThread = ((_composerContext$even = composerContext.eventRelation) === null || _composerContext$even === void 0 ? void 0 : _composerContext$even.key) === matrix.THREAD_RELATION_TYPE.name;
  return (_roomContext$liveTime2 = roomContext.liveTimeline) === null || _roomContext$liveTime2 === void 0 ? void 0 : _roomContext$liveTime2.getEvents().concat(isReplyingToThread ? [] : ((_roomContext$room = roomContext.room) === null || _roomContext$room === void 0 ? void 0 : _roomContext$room.getPendingEvents()) || []);
}
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/editing.ts
var editing = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/editing.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/hooks/utils.ts
var utils = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/utils.ts");
// EXTERNAL MODULE: ./src/contexts/ScopedRoomContext.tsx
var ScopedRoomContext = __webpack_require__("./src/contexts/ScopedRoomContext.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useInputEventProcessor.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/















function useInputEventProcessor(onSend, autocompleteRef, initialContent, eventRelation) {
  const roomContext = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("liveTimeline", "room", "replyToEvent", "timelineRenderingType");
  const composerContext = (0,ComposerContext/* useComposerContext */.Hx)();
  const mxClient = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  const isCtrlEnterToSend = (0,useSettings/* useSettingValue */.ti)("MessageComposerInput.ctrlEnterToSend");
  return (0,react.useCallback)((event, composer, editor) => {
    const send = () => {
      var _event$stopPropagatio, _event$preventDefault;
      (_event$stopPropagatio = event.stopPropagation) === null || _event$stopPropagatio === void 0 || _event$stopPropagatio.call(event);
      (_event$preventDefault = event.preventDefault) === null || _event$preventDefault === void 0 || _event$preventDefault.call(event);
      // do not send the message if we have the autocomplete open, regardless of settings
      if (autocompleteRef !== null && autocompleteRef !== void 0 && autocompleteRef.current && !autocompleteRef.current.state.hide) {
        return;
      }
      onSend();
    };
    if ((0,utils/* isEventToHandleAsClipboardEvent */.wg)(event)) {
      const data = event instanceof ClipboardEvent ? event.clipboardData : event.dataTransfer;
      const handled = (0,utils/* handleClipboardEvent */.VI)(event, data, roomContext, mxClient, eventRelation);
      return handled ? null : event;
    }
    const isKeyboardEvent = event instanceof KeyboardEvent;
    if (isKeyboardEvent) {
      return handleKeyboardEvent(event, send, initialContent, composer, editor, roomContext, composerContext, mxClient, autocompleteRef);
    } else {
      return handleInputEvent(event, send, isCtrlEnterToSend);
    }
  }, [isCtrlEnterToSend, onSend, initialContent, roomContext, composerContext, mxClient, autocompleteRef, eventRelation]);
}
function handleKeyboardEvent(event, send, initialContent, composer, editor, roomContext, composerContext, mxClient, autocompleteRef) {
  const {
    editorStateTransfer
  } = composerContext;
  const isEditing = Boolean(editorStateTransfer);
  const isEditorModified = isEditing ? initialContent !== composer.content() : composer.content().length !== 0;
  const action = (0,KeyBindingsManager/* getKeyBindingsManager */.zM)().getMessageComposerAction(event);

  // we need autocomplete to take priority when it is open for using enter to select
  const isHandledByAutocomplete = (0,utils/* handleEventWithAutocomplete */.hi)(autocompleteRef, event);
  if (isHandledByAutocomplete) {
    return event;
  }

  // taking the client from context gives us an client | undefined type, narrow it down
  if (mxClient === undefined) {
    return null;
  }
  switch (action) {
    case KeyboardShortcuts/* KeyBindingAction */.bY.SendMessage:
      send();
      return null;
    case KeyboardShortcuts/* KeyBindingAction */.bY.EditPrevMessage:
      {
        // Or if the caret is not at the beginning of the editor
        // Or the editor is modified
        if (!(0,selection/* isCaretAtStart */.tJ)(editor) || isEditorModified) {
          break;
        }
        const isDispatched = dispatchEditEvent(event, false, editorStateTransfer, composerContext, roomContext, mxClient);
        if (isDispatched) {
          return null;
        }
        break;
      }
    case KeyboardShortcuts/* KeyBindingAction */.bY.EditNextMessage:
      {
        // If not in edition
        // Or if the caret is not at the end of the editor
        // Or the editor is modified
        if (!editorStateTransfer || !(0,selection/* isCaretAtEnd */.uJ)(editor) || isEditorModified) {
          break;
        }
        const isDispatched = dispatchEditEvent(event, true, editorStateTransfer, composerContext, roomContext, mxClient);
        if (!isDispatched) {
          (0,editing/* endEditing */.w)(roomContext);
          event.preventDefault();
          event.stopPropagation();
        }
        return null;
      }
  }
  return event;
}
function dispatchEditEvent(event, isForward, editorStateTransfer, composerContext, roomContext, mxClient) {
  const foundEvents = editorStateTransfer ? getEventsFromEditorStateTransfer(editorStateTransfer, roomContext, mxClient) : getEventsFromRoom(composerContext, roomContext);
  if (!foundEvents) {
    return false;
  }
  const newEvent = (0,EventUtils/* findEditableEvent */.Iy)({
    events: foundEvents,
    isForward,
    fromEventId: editorStateTransfer === null || editorStateTransfer === void 0 ? void 0 : editorStateTransfer.getEvent().getId(),
    matrixClient: mxClient
  });
  if (newEvent) {
    dispatcher/* default */.A.dispatch({
      action: actions/* Action */.r.EditEvent,
      event: newEvent,
      timelineRenderingType: roomContext.timelineRenderingType
    });
    event.stopPropagation();
    event.preventDefault();
    return true;
  }
  return false;
}
function handleInputEvent(event, send, isCtrlEnterToSend) {
  switch (event.inputType) {
    case "insertParagraph":
      if (!isCtrlEnterToSend) {
        send();
        return null;
      }
      break;
    case "sendMessage":
      if (isCtrlEnterToSend) {
        send();
        return null;
      }
      break;
  }
  return event;
}
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/hooks/useSetCursorPosition.ts
var useSetCursorPosition = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/useSetCursorPosition.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/hooks/useIsFocused.ts
var useIsFocused = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/useIsFocused.ts");
// EXTERNAL MODULE: ./src/utils/permalinks/Permalinks.ts + 2 modules
var Permalinks = __webpack_require__("./src/utils/permalinks/Permalinks.ts");
// EXTERNAL MODULE: ./src/Typeguards.ts
var Typeguards = __webpack_require__("./src/Typeguards.ts");
// EXTERNAL MODULE: ./src/autocomplete/CommandProvider.tsx
var CommandProvider = __webpack_require__("./src/autocomplete/CommandProvider.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useContainsCommand.ts
/*
Copyright 2025 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




/**
 * A hook which determines if the given content contains a slash command.
 * @returns true if the content contains a slash command, false otherwise.
 * @param content The content to check for commands.
 * @param room The current room.
 */
function useContainsCommand(content, room) {
  const [contentContainsCommands, setContentContainsCommands] = (0,react.useState)(false);
  const providerRef = (0,react.useRef)(null);
  const currentRoomIdRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    if (!room || !content) {
      setContentContainsCommands(false);
      return;
    }

    // Create or reuse CommandProvider for the current room
    if (!providerRef.current || currentRoomIdRef.current !== room.roomId) {
      providerRef.current = new CommandProvider/* default */.A(room);
      currentRoomIdRef.current = room.roomId;
    }
    const provider = providerRef.current;
    provider.getCompletions(content, {
      start: 0,
      end: 0
    }).then(results => {
      if (results.length > 0) {
        setContentContainsCommands(true);
      } else {
        setContentContainsCommands(false);
      }
    }).catch(() => {
      // If there's an error getting completions, assume no commands
      setContentContainsCommands(false);
    });
  }, [content, room]);
  return contentContainsCommands;
}
;// ./src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


















function getEmojiSuggestions(enabled) {
  const emojiSuggestions = new Map(Array.from(emoji.EMOTICON_TO_EMOJI, ([key, value]) => [key, value.unicode]));
  return enabled ? emojiSuggestions : new Map();
}
const WysiwygComposer = /*#__PURE__*/(0,react.memo)(function WysiwygComposer({
  disabled = false,
  onChange,
  onSend,
  placeholder,
  initialContent,
  className,
  leftComponent,
  rightComponent,
  children,
  eventRelation
}) {
  const {
    room
  } = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("room");
  const autocompleteRef = (0,react.useRef)(null);
  const inputEventProcessor = useInputEventProcessor(onSend, autocompleteRef, initialContent, eventRelation);
  const isAutoReplaceEmojiEnabled = (0,useSettings/* useSettingValue */.ti)("MessageComposerInput.autoReplaceEmoji");
  const emojiSuggestions = (0,react.useMemo)(() => getEmojiSuggestions(isAutoReplaceEmojiEnabled), [isAutoReplaceEmojiEnabled]);
  const {
    ref,
    isWysiwygReady,
    content,
    actionStates,
    wysiwyg,
    suggestion,
    messageContent
  } = (0,matrix_wysiwyg/* useWysiwyg */.F)({
    initialContent,
    inputEventProcessor,
    emojiSuggestions
  });
  const {
    isFocused,
    onFocus
  } = (0,useIsFocused/* useIsFocused */.j)();
  const isReady = isWysiwygReady && !disabled;
  const computedPlaceholder = !content && placeholder || undefined;
  (0,useSetCursorPosition/* useSetCursorPosition */.V)(!isReady, ref);
  (0,react.useEffect)(() => {
    if (!disabled && (0,Typeguards/* isNotNull */.P)(messageContent)) {
      onChange(messageContent);
    }
  }, [onChange, messageContent, disabled]);

  // Disable formatting buttons if the message content contains a slash command
  const disableFormatting = useContainsCommand(content, room);
  (0,react.useEffect)(() => {
    var _ref$current;
    function handleClick(e) {
      e.preventDefault();
      if (e.target && e.target instanceof HTMLAnchorElement && e.target.getAttribute("data-mention-type") === "user") {
        const parsedLink = (0,Permalinks/* parsePermalink */.$N)(e.target.href);
        if (room && parsedLink !== null && parsedLink !== void 0 && parsedLink.userId) dispatcher/* default */.A.dispatch({
          action: actions/* Action */.r.ViewUser,
          member: room.getMember(parsedLink.userId)
        });
      }
    }
    const mentions = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.querySelectorAll("a[data-mention-type]");
    if (mentions) {
      mentions.forEach(mention => mention.addEventListener("click", handleClick));
    }
    return () => {
      if (mentions) mentions.forEach(mention => mention.removeEventListener("click", handleClick));
    };
  }, [ref, room, content]);
  return /*#__PURE__*/react.createElement("div", {
    "data-testid": "WysiwygComposer",
    className: classnames_default()(className, {
      [`${className}-focused`]: isFocused
    }),
    onFocus: onFocus,
    onBlur: onFocus
  }, /*#__PURE__*/react.createElement(WysiwygAutocomplete/* WysiwygAutocomplete */.W, {
    ref: autocompleteRef,
    suggestion: suggestion,
    handleMention: wysiwyg.mention,
    handleAtRoomMention: wysiwyg.mentionAtRoom,
    handleCommand: wysiwyg.command,
    handleEmoji: wysiwyg.emoji
  }), /*#__PURE__*/react.createElement(FormattingButtons, {
    composer: wysiwyg,
    actionStates: actionStates,
    disabled: disableFormatting
  }), /*#__PURE__*/react.createElement(Editor/* Editor */.K, {
    ref: ref,
    disabled: !isReady,
    leftComponent: leftComponent,
    rightComponent: rightComponent,
    placeholder: computedPlaceholder
  }), children === null || children === void 0 ? void 0 : children(ref, wysiwyg));
});

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/hooks/useIsFocused.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useIsFocused)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


function useIsFocused() {
  const [isFocused, setIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const timeoutIDRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => () => clearTimeout(timeoutIDRef.current), [timeoutIDRef]);
  const onFocus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    clearTimeout(timeoutIDRef.current);
    if (event.type === "focus") {
      setIsFocused(true);
    } else {
      // To avoid a blink when we switch mode between plain text and rich text mode
      // We delay the unfocused action
      timeoutIDRef.current = window.setTimeout(() => setIsFocused(false), 100);
    }
  }, [setIsFocused, timeoutIDRef]);
  return {
    isFocused,
    onFocus
  };
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/hooks/useSetCursorPosition.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ useSetCursorPosition)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/utils.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



function useSetCursorPosition(disabled, ref) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ref.current && !disabled) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .setCursorPositionAtTheEnd */ .bC)(ref.current);
    }
  }, [ref, disabled]);
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/hooks/utils.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hj: () => (/* binding */ focusComposer),
/* harmony export */   VI: () => (/* binding */ handleClipboardEvent),
/* harmony export */   bC: () => (/* binding */ setCursorPositionAtTheEnd),
/* harmony export */   hi: () => (/* binding */ handleEventWithAutocomplete),
/* harmony export */   wg: () => (/* binding */ isEventToHandleAsClipboardEvent)
/* harmony export */ });
/* harmony import */ var _KeyBindingsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/KeyBindingsManager.ts");
/* harmony import */ var _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/accessibility/KeyboardShortcuts.ts");
/* harmony import */ var _utils_blobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/blobs.ts");
/* harmony import */ var _ContentMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/ContentMessages.ts");
/* harmony import */ var _Typeguards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/Typeguards.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






function focusComposer(composerElement, renderingType, roomContext, timeoutId) {
  if (renderingType === roomContext.timelineRenderingType) {
    var _composerElement$curr;
    // Immediately set the focus, so if you start typing it
    // will appear in the composer
    (_composerElement$curr = composerElement.current) === null || _composerElement$curr === void 0 || _composerElement$curr.focus();
    // If we call focus immediate, the focus _is_ in the right
    // place, but the cursor is invisible, presumably because
    // some other event is still processing.
    // The following line ensures that the cursor is actually
    // visible in composer.
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(() => {
      var _composerElement$curr2;
      return (_composerElement$curr2 = composerElement.current) === null || _composerElement$curr2 === void 0 ? void 0 : _composerElement$curr2.focus();
    }, 200);
  }
}
function setCursorPositionAtTheEnd(element) {
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(false);
  const selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  element.focus();
}

/**
 * When the autocomplete modal is open we need to be able to properly
 * handle events that are dispatched. This allows the user to move the selection
 * in the autocomplete and select using enter.
 *
 * @param autocompleteRef - a ref to the autocomplete of interest
 * @param event - the keyboard event that has been dispatched
 * @returns boolean - whether or not the autocomplete has handled the event
 */
function handleEventWithAutocomplete(autocompleteRef,
// we get a React Keyboard event from plain text composer, a Keyboard Event from the rich text composer
event) {
  const autocompleteIsOpen = (autocompleteRef === null || autocompleteRef === void 0 ? void 0 : autocompleteRef.current) && !autocompleteRef.current.state.hide;
  if (!autocompleteRef.current || !autocompleteIsOpen) {
    return false;
  }
  let handled = false;
  const autocompleteAction = (0,_KeyBindingsManager__WEBPACK_IMPORTED_MODULE_0__/* .getKeyBindingsManager */ .zM)().getAutocompleteAction(event);
  const component = autocompleteRef.current;
  if (component && component.countCompletions() > 0) {
    switch (autocompleteAction) {
      case _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .KeyBindingAction */ .bY.ForceCompleteAutocomplete:
      case _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .KeyBindingAction */ .bY.CompleteAutocomplete:
        autocompleteRef.current.onConfirmCompletion();
        handled = true;
        break;
      case _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .KeyBindingAction */ .bY.PrevSelectionInAutocomplete:
        autocompleteRef.current.moveSelection(-1);
        handled = true;
        break;
      case _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .KeyBindingAction */ .bY.NextSelectionInAutocomplete:
        autocompleteRef.current.moveSelection(1);
        handled = true;
        break;
      case _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .KeyBindingAction */ .bY.CancelAutocomplete:
        autocompleteRef.current.onEscape(event);
        handled = true;
        break;
      default:
        break;
      // don't return anything, allow event to pass through
    }
  }
  if (handled) {
    event.preventDefault();
    event.stopPropagation();
  }
  return handled;
}

/**
 * Takes an event and handles image pasting. Returns a boolean to indicate if it has handled
 * the event or not. Must accept either clipboard or input events in order to prevent issue:
 * https://github.com/vector-im/element-web/issues/25327
 *
 * @param event - event to process
 * @param data - data from the event to process
 * @param roomContext - room in which the event occurs
 * @param mxClient - current matrix client
 * @param eventRelation - used to send the event to the correct place eg timeline vs thread
 * @returns - boolean to show if the event was handled or not
 */
function handleClipboardEvent(event, data, roomContext, mxClient, eventRelation) {
  // Logic in this function follows that of `SendMessageComposer.onPaste`
  const {
    room,
    timelineRenderingType,
    replyToEvent
  } = roomContext;
  function handleError(error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else if (typeof error === "string") {
      console.log(error);
    }
  }
  if (event.type !== "paste" || data === null || room === undefined) {
    return false;
  }

  // Prioritize text on the clipboard over files if RTF is present as Office on macOS puts a bitmap
  // in the clipboard as well as the content being copied. Modern versions of Office seem to not do this anymore.
  // We check text/rtf instead of text/plain as when copy+pasting a file from Finder or Gnome Image Viewer
  // it puts the filename in as text/plain which we want to ignore.
  if (data.files.length && !data.types.includes("text/rtf")) {
    _ContentMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay.sharedInstance().sendContentListToRoom(Array.from(data.files), room.roomId, eventRelation, roomContext.replyToEvent, mxClient, timelineRenderingType).catch(handleError);
    return true;
  }

  // Safari `Insert from iPhone or iPad`
  // data.getData("text/html") returns a string like: <img src="blob:https://...">
  if (data.types.includes("text/html")) {
    var _imgDoc$querySelector;
    const imgElementStr = data.getData("text/html");
    const parser = new DOMParser();
    const imgDoc = parser.parseFromString(imgElementStr, "text/html");
    if (imgDoc.getElementsByTagName("img").length !== 1 || !((_imgDoc$querySelector = imgDoc.querySelector("img")) !== null && _imgDoc$querySelector !== void 0 && _imgDoc$querySelector.src.startsWith("blob:")) || imgDoc.childNodes.length !== 1) {
      handleError("Failed to handle pasted content as Safari inserted content");
      return false;
    }
    const imgSrc = imgDoc.querySelector("img").src;
    fetch(imgSrc).then(response => {
      response.blob().then(imgBlob => {
        const type = imgBlob.type;
        const safetype = (0,_utils_blobs__WEBPACK_IMPORTED_MODULE_2__/* .getBlobSafeMimeType */ .F)(type);
        const ext = type.split("/")[1];
        const parts = response.url.split("/");
        const filename = parts[parts.length - 1];
        const file = new File([imgBlob], filename + "." + ext, {
          type: safetype
        });
        _ContentMessages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay.sharedInstance().sendContentToRoom(file, room.roomId, eventRelation, mxClient, replyToEvent).catch(handleError);
      }).catch(handleError);
    }).catch(handleError);
    return true;
  }
  return false;
}

/**
 * Util to determine if an input event or clipboard event must be handled as a clipboard event.
 * Due to https://github.com/vector-im/element-web/issues/25327, certain paste events
 * must be listenened for with an onBeforeInput handler and so will be caught as input events.
 *
 * @param event - the event to test, can be a WysiwygEvent if it comes from the rich text editor, or
 * input or clipboard events if from the plain text editor
 * @returns - true if event should be handled as a clipboard event
 */
function isEventToHandleAsClipboardEvent(event) {
  const isInputEventForClipboard = event instanceof InputEvent && event.inputType === "insertFromPaste" && (0,_Typeguards__WEBPACK_IMPORTED_MODULE_4__/* .isNotNull */ .P)(event.dataTransfer);
  const isClipboardEvent = event instanceof ClipboardEvent;
  return isClipboardEvent || isInputEventForClipboard;
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/utils/editing.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ cancelPreviousPendingEdit),
/* harmony export */   w: () => (/* binding */ endEditing)
/* harmony export */ });
/* harmony import */ var matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
/* harmony import */ var _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/dispatcher/dispatcher.ts");
/* harmony import */ var _dispatcher_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/dispatcher/actions.ts");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




function endEditing(roomContext) {
  // todo local storage
  // localStorage.removeItem(this.editorRoomKey);
  // localStorage.removeItem(this.editorStateKey);

  // close the event editing and focus composer
  _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dispatch({
    action: _dispatcher_actions__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .r.EditEvent,
    event: null,
    timelineRenderingType: roomContext.timelineRenderingType
  });
  _dispatcher_dispatcher__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.dispatch({
    action: _dispatcher_actions__WEBPACK_IMPORTED_MODULE_2__/* .Action */ .r.FocusSendMessageComposer,
    context: roomContext.timelineRenderingType
  });
}
function cancelPreviousPendingEdit(mxClient, editorStateTransfer) {
  const originalEvent = editorStateTransfer.getEvent();
  const previousEdit = originalEvent.replacingEvent();
  if (previousEdit && (previousEdit.status === matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_0__.EventStatus.QUEUED || previousEdit.status === matrix_js_sdk_src_matrix__WEBPACK_IMPORTED_MODULE_0__.EventStatus.NOT_SENT)) {
    mxClient.cancelPendingEvent(previousEdit);
  }
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/utils/selection.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CD: () => (/* binding */ isSelectionEmpty),
/* harmony export */   tJ: () => (/* binding */ isCaretAtStart),
/* harmony export */   td: () => (/* binding */ setSelection),
/* harmony export */   uJ: () => (/* binding */ isCaretAtEnd)
/* harmony export */ });
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

function setSelection(selection) {
  if (selection.anchorNode && selection.focusNode) {
    var _document$getSelectio, _document$getSelectio2;
    const range = new Range();
    if (selection.isForward) {
      range.setStart(selection.anchorNode, selection.anchorOffset);
      range.setEnd(selection.focusNode, selection.focusOffset);
    } else {
      range.setStart(selection.focusNode, selection.focusOffset);
      range.setEnd(selection.anchorNode, selection.anchorOffset);
    }
    (_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 || _document$getSelectio.removeAllRanges();
    (_document$getSelectio2 = document.getSelection()) === null || _document$getSelectio2 === void 0 || _document$getSelectio2.addRange(range);
  }

  // Waiting for the next loop to ensure that the selection is effective
  return new Promise(resolve => setTimeout(resolve, 0));
}
function isSelectionEmpty() {
  const selection = document.getSelection();
  return Boolean(selection === null || selection === void 0 ? void 0 : selection.isCollapsed);
}
function isCaretAtStart(editor) {
  const selection = document.getSelection();

  // No selection or the caret is not at the beginning of the selected element
  if (!selection) {
    return false;
  }

  // When we are pressing keyboard up in an empty main composer, the selection is on the editor with an anchorOffset at O or 1 (yes, this is strange)
  const isOnFirstElement = selection.anchorNode === editor && selection.anchorOffset <= 1;
  if (isOnFirstElement) {
    return true;
  }

  // In case of nested html elements (list, code blocks), we are going through all the first child
  let child = editor.firstChild;
  do {
    var _child;
    if (child === selection.anchorNode) {
      return selection.anchorOffset === 0;
    }
  } while (child = ((_child = child) === null || _child === void 0 ? void 0 : _child.firstChild) || null);
  return false;
}
function isCaretAtEnd(editor) {
  var _editor$childNodes;
  const selection = document.getSelection();
  if (!selection) {
    return false;
  }

  // When we are cycling across all the timeline message with the keyboard
  // The caret is on the last text element but focusNode and anchorNode refers to the editor div
  // In this case, the focusOffset & anchorOffset match the index + 1 of the selected text
  const isOnLastElement = selection.focusNode === editor && selection.focusOffset === ((_editor$childNodes = editor.childNodes) === null || _editor$childNodes === void 0 ? void 0 : _editor$childNodes.length);
  if (isOnLastElement) {
    return true;
  }

  // In case of nested html elements (list, code blocks), we are going through all the last child
  // The last child of the editor is always a <br> tag, we skip it
  let child = editor.childNodes.item(editor.childNodes.length - 2);
  do {
    if (child === selection.focusNode) {
      var _child$textContent;
      // Checking that the cursor is at end of the selected text
      return selection.focusOffset === ((_child$textContent = child.textContent) === null || _child$textContent === void 0 ? void 0 : _child$textContent.length);
    }
  } while (child = child.lastChild);
  return false;
}

/***/ },

/***/ "./src/components/views/settings/KeyboardShortcut.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ KeyboardShortcut)
/* harmony export */ });
/* unused harmony export KeyboardKey */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/accessibility/KeyboardShortcuts.ts");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/Keyboard.ts");
/* harmony import */ var _languageHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/languageHandler.tsx");
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 Šimon Brandner <simon.bra.ag@gmail.com>

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/





const KeyboardKey = ({
  name,
  last
}) => {
  const icon = _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .KEY_ICON */ .GA[name];
  const alternateName = _accessibility_KeyboardShortcuts__WEBPACK_IMPORTED_MODULE_1__/* .ALTERNATE_KEY_NAME */ .hm[name];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", null, " ", icon || alternateName && (0,_languageHandler__WEBPACK_IMPORTED_MODULE_3__._t)(alternateName) || name, " "), !last && "+");
};
const KeyboardShortcut = ({
  value,
  className = "mx_KeyboardShortcut"
}) => {
  if (!value) return null;
  const modifiersElement = [];
  if (value.ctrlOrCmdKey) {
    modifiersElement.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKey, {
      key: "ctrlOrCmdKey",
      name: _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .IS_MAC */ .vL ? _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .Key */ .Uz.META : _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .Key */ .Uz.CONTROL
    }));
  } else if (value.ctrlKey) {
    modifiersElement.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKey, {
      key: "ctrlKey",
      name: _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .Key */ .Uz.CONTROL
    }));
  } else if (value.metaKey) {
    modifiersElement.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKey, {
      key: "metaKey",
      name: _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .Key */ .Uz.META
    }));
  }
  if (value.altKey) {
    modifiersElement.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKey, {
      key: "altKey",
      name: _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .Key */ .Uz.ALT
    }));
  }
  if (value.shiftKey) {
    modifiersElement.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKey, {
      key: "shiftKey",
      name: _Keyboard__WEBPACK_IMPORTED_MODULE_2__/* .Key */ .Uz.SHIFT
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className
  }, modifiersElement, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(KeyboardKey, {
    name: value.key,
    last: true
  }));
};

/***/ }

}]);
//# sourceMappingURL=8843.js.map