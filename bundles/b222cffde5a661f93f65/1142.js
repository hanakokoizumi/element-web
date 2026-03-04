"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[1142],{

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

/***/ "./src/components/views/rooms/wysiwyg_composer/SendWysiwygComposer.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SendWysiwygComposer)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-off.js
var lock_off = __webpack_require__("../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-off.js");
// EXTERNAL MODULE: ./src/dispatcher/dispatcher.ts
var dispatcher = __webpack_require__("./src/dispatcher/dispatcher.ts");
// EXTERNAL MODULE: ./src/dispatcher/actions.ts
var actions = __webpack_require__("./src/dispatcher/actions.ts");
// EXTERNAL MODULE: ./src/contexts/RoomContext.ts
var RoomContext = __webpack_require__("./src/contexts/RoomContext.ts");
// EXTERNAL MODULE: ./src/hooks/useDispatcher.ts
var useDispatcher = __webpack_require__("./src/hooks/useDispatcher.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/hooks/utils.ts
var utils = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/utils.ts");
// EXTERNAL MODULE: ./src/dispatcher/payloads/ComposerInsertPayload.ts
var ComposerInsertPayload = __webpack_require__("./src/dispatcher/payloads/ComposerInsertPayload.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts
var ComposerContext = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/selection.ts
var utils_selection = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/selection.ts");
// EXTERNAL MODULE: ./src/contexts/ScopedRoomContext.tsx
var ScopedRoomContext = __webpack_require__("./src/contexts/ScopedRoomContext.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useWysiwygSendActionHandler.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











function useWysiwygSendActionHandler(disabled, composerElement, composerFunctions) {
  const roomContext = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("timelineRenderingType");
  const composerContext = (0,ComposerContext/* useComposerContext */.Hx)();
  const timeoutId = (0,react.useRef)(null);
  const handler = (0,react.useCallback)(payload => {
    var _payload$context;
    // don't let the user into the composer if it is disabled - all of these branches lead
    // to the cursor being in the composer
    if (disabled || !(composerElement !== null && composerElement !== void 0 && composerElement.current)) return;
    const context = (_payload$context = payload.context) !== null && _payload$context !== void 0 ? _payload$context : RoomContext/* TimelineRenderingType */.Ae.Room;
    switch (payload.action) {
      case "reply_to_event":
      case actions/* Action */.r.FocusAComposer:
      case actions/* Action */.r.FocusSendMessageComposer:
        (0,utils/* focusComposer */.Hj)(composerElement, context, roomContext, timeoutId);
        break;
      case actions/* Action */.r.ClearAndFocusSendMessageComposer:
        // When a thread is opened, prevent the main composer to steal the thread composer focus
        if (payload.timelineRenderingType !== roomContext.timelineRenderingType) break;
        composerFunctions.clear();
        (0,utils/* focusComposer */.Hj)(composerElement, context, roomContext, timeoutId);
        break;
      case actions/* Action */.r.ComposerInsert:
        if (payload.timelineRenderingType !== roomContext.timelineRenderingType) break;
        if (payload.composerType !== ComposerInsertPayload/* ComposerType */.D.Send) break;
        if (payload.userId) {
          // TODO insert mention - see SendMessageComposer
        } else if (payload.event) {
          // TODO insert quote message - see SendMessageComposer
        } else if (payload.text) {
          (0,utils_selection/* setSelection */.td)(composerContext.selection).then(() => composerFunctions.insertText(payload.text));
        }
        break;
    }
  }, [disabled, composerElement, roomContext, composerFunctions, composerContext]);
  (0,useDispatcher/* useDispatcher */.F)(dispatcher/* default */.A, handler);
}
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx + 11 modules
var WysiwygComposer = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useComposerFunctions.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/



function useComposerFunctions(ref, setContent) {
  return (0,react.useMemo)(() => ({
    clear: () => {
      if (ref.current) {
        // eslint-disable-next-line react-compiler/react-compiler
        ref.current.innerHTML = "";
      }
    },
    insertText: text => {
      const selection = document.getSelection();
      if (ref.current && selection) {
        const content = ref.current.innerHTML;
        const {
          anchorOffset,
          focusOffset
        } = selection;
        ref.current.innerHTML = `${content.slice(0, anchorOffset)}${text}${content.slice(focusOffset)}`;
        (0,utils_selection/* setSelection */.td)({
          anchorNode: ref.current.firstChild,
          anchorOffset: anchorOffset + text.length,
          focusNode: ref.current.firstChild,
          focusOffset: focusOffset + text.length,
          isForward: true
        });
        setContent(ref.current.innerHTML);
      }
    }
  }), [ref, setContent]);
}
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/hooks/useIsFocused.ts
var useIsFocused = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/useIsFocused.ts");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/usePlainTextInitialization.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


function usePlainTextInitialization(initialContent = "", ref) {
  (0,react.useEffect)(() => {
    // always read and write the ref.current using .innerHTML for consistency in linebreak and HTML entity handling
    if (ref.current) {
      // eslint-disable-next-line react-compiler/react-compiler
      ref.current.innerHTML = initialContent;
    }
  }, [ref, initialContent]);
}
// EXTERNAL MODULE: ./src/hooks/useSettings.ts
var useSettings = __webpack_require__("./src/hooks/useSettings.ts");
// EXTERNAL MODULE: ./src/Keyboard.ts
var Keyboard = __webpack_require__("./src/Keyboard.ts");
// EXTERNAL MODULE: ../../node_modules/@matrix-org/emojibase-bindings/build/emoji.js
var build_emoji = __webpack_require__("../../node_modules/@matrix-org/emojibase-bindings/build/emoji.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./src/Typeguards.ts
var Typeguards = __webpack_require__("./src/Typeguards.ts");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useSuggestion.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/**
 * Information about the current state of the `useSuggestion` hook.
 */

/**
 * React hook to allow tracking and replacing of mentions and commands in a div element
 *
 * @param editorRef - a ref to the div that is the composer textbox
 * @param setText - setter function to set the content of the composer
 * @param isAutoReplaceEmojiEnabled - whether plain text emoticons should be auto replaced with emojis
 * @returns
 * - `handleMention`: a function that will insert @ or # mentions which are selected from
 * the autocomplete into the composer, given an href, the text to display, and any additional attributes
 * - `handleCommand`: a function that will replace the content of the composer with the given replacement text.
 * Can be used to process autocomplete of slash commands
 * - `onSelect`: a selection change listener to be attached to the plain text composer
 * - `suggestion`: if the cursor is inside something that could be interpreted as a command or a mention,
 * this will be an object representing that command or mention, otherwise it is null
 */
function useSuggestion(editorRef, setText, isAutoReplaceEmojiEnabled) {
  var _suggestionData$mappe;
  const [suggestionData, setSuggestionData0] = (0,react.useState)(null);

  // debug for https://github.com/vector-im/element-web/issues/26037
  const setSuggestionData = suggestionData => {
    // setState allows either the data itself or a callback which returns the data
    logger/* logger */.vF.log(`## 26037 ## wysiwyg useSuggestion hook setting suggestion data to ${suggestionData === null || suggestionData instanceof Function ? suggestionData : suggestionData.mappedSuggestion.keyChar + suggestionData.mappedSuggestion.text}`);
    setSuggestionData0(suggestionData);
  };

  // We create a `selectionchange` handler here because we need to know when the user has moved the cursor,
  // we can not depend on input events only
  const onSelect = () => processSelectionChange(editorRef, setSuggestionData, isAutoReplaceEmojiEnabled);
  const handleMention = (href, displayName, attributes) => processMention(href, displayName, attributes, suggestionData, setSuggestionData, setText);
  const handleAtRoomMention = attributes => processMention("#", "@room", attributes, suggestionData, setSuggestionData, setText);
  const handleCommand = replacementText => processCommand(replacementText, suggestionData, setSuggestionData, setText);
  const handleEmojiReplacement = () => processEmojiReplacement(suggestionData, setSuggestionData, setText);
  const handleEmojiSuggestion = emoji => processTextReplacement(emoji, suggestionData, setSuggestionData, setText);
  return {
    suggestion: (_suggestionData$mappe = suggestionData === null || suggestionData === void 0 ? void 0 : suggestionData.mappedSuggestion) !== null && _suggestionData$mappe !== void 0 ? _suggestionData$mappe : null,
    handleCommand,
    handleMention,
    handleAtRoomMention,
    handleEmojiSuggestion,
    handleEmojiReplacement,
    onSelect
  };
}

/**
 * When the selection changes inside the current editor, check to see if the cursor is inside
 * something that could be a command or a mention and update the suggestion state if so
 *
 * @param editorRef - ref to the composer
 * @param setSuggestionData - the setter for the suggestion state
 * @param isAutoReplaceEmojiEnabled - whether plain text emoticons should be auto replaced with emojis
 */
function processSelectionChange(editorRef, setSuggestionData, isAutoReplaceEmojiEnabled) {
  var _selection$anchorNode;
  const selection = document.getSelection();

  // return early if we do not have a current editor ref with a cursor selection inside a text node
  if (editorRef.current === null || selection === null || !selection.isCollapsed || ((_selection$anchorNode = selection.anchorNode) === null || _selection$anchorNode === void 0 ? void 0 : _selection$anchorNode.nodeName) !== "#text") {
    setSuggestionData(null);
    return;
  }

  // from here onwards we have a cursor inside a text node
  const {
    anchorNode: currentNode,
    anchorOffset: currentOffset
  } = selection;

  // if we have no text content, return, clearing the suggestion state
  if (currentNode.textContent === null) {
    setSuggestionData(null);
    return;
  }
  const firstTextNode = document.createNodeIterator(editorRef.current, NodeFilter.SHOW_TEXT).nextNode();
  const isFirstTextNode = currentNode === firstTextNode;
  const foundSuggestion = findSuggestionInText(currentNode.textContent, currentOffset, isFirstTextNode, isAutoReplaceEmojiEnabled);

  // if we have not found a suggestion, return, clearing the suggestion state
  if (foundSuggestion === null) {
    setSuggestionData(null);
    return;
  }
  setSuggestionData({
    mappedSuggestion: foundSuggestion.mappedSuggestion,
    node: currentNode,
    startOffset: foundSuggestion.startOffset,
    endOffset: foundSuggestion.endOffset
  });
}

/**
 * Replaces the relevant part of the editor text with a link representing a mention after it
 * is selected from the autocomplete.
 *
 * @param href - the href that the inserted link will use
 * @param displayName - the text content of the link
 * @param attributes - additional attributes to add to the link, can include data-* attributes
 * @param suggestionData - representation of the part of the DOM that will be replaced
 * @param setSuggestionData - setter function to set the suggestion state
 * @param setText - setter function to set the content of the composer
 */
function processMention(href, displayName, attributes,
// these will be used when formatting the link as a pill
suggestionData, setSuggestionData, setText) {
  var _node$textContent, _node$textContent$sli, _node$textContent2, _document$getSelectio;
  // if we do not have a suggestion, return early
  if (suggestionData === null) {
    return;
  }
  const {
    node
  } = suggestionData;

  // create an <a> element with the required attributes to allow us to interpret the mention as being a pill
  const linkElement = document.createElement("a");
  const linkTextNode = document.createTextNode(displayName);
  linkElement.setAttribute("href", href);
  linkElement.setAttribute("contenteditable", "false");
  for (const [attr, value] of attributes.entries()) {
    linkElement.setAttribute(attr, value);
  }
  linkElement.appendChild(linkTextNode);

  // create text nodes to go before and after the link
  const leadingTextNode = document.createTextNode(((_node$textContent = node.textContent) === null || _node$textContent === void 0 ? void 0 : _node$textContent.slice(0, suggestionData.startOffset)) || "\u200b");
  const trailingTextNode = document.createTextNode(` ${(_node$textContent$sli = (_node$textContent2 = node.textContent) === null || _node$textContent2 === void 0 ? void 0 : _node$textContent2.slice(suggestionData.endOffset)) !== null && _node$textContent$sli !== void 0 ? _node$textContent$sli : ""}`);

  // now add the leading text node, link element and trailing text node before removing the node we are replacing
  const parentNode = node.parentNode;
  if ((0,Typeguards/* isNotNull */.P)(parentNode)) {
    parentNode.insertBefore(leadingTextNode, node);
    parentNode.insertBefore(linkElement, node);
    parentNode.insertBefore(trailingTextNode, node);
    parentNode.removeChild(node);
  }

  // move the selection to the trailing text node
  (_document$getSelectio = document.getSelection()) === null || _document$getSelectio === void 0 || _document$getSelectio.setBaseAndExtent(trailingTextNode, 1, trailingTextNode, 1);

  // set the text content to be the innerHTML of the current editor ref and clear the suggestion state
  setText();
  setSuggestionData(null);
}

/**
 * Replaces the relevant part of the editor text with the replacement text after a command is selected
 * from the autocomplete.
 *
 * @param replacementText - the text that we will insert into the DOM
 * @param suggestionData - representation of the part of the DOM that will be replaced
 * @param setSuggestionData - setter function to set the suggestion state
 * @param setText - setter function to set the content of the composer
 */
function processCommand(replacementText, suggestionData, setSuggestionData, setText) {
  var _document$getSelectio2;
  // if we do not have a suggestion, return early
  if (suggestionData === null) {
    return;
  }
  const {
    node
  } = suggestionData;

  // for a command, we know we start at the beginning of the text node, so build the replacement
  // string (note trailing space) and manually adjust the node's textcontent
  const newContent = `${replacementText} `;
  node.textContent = newContent;

  // then set the cursor to the end of the node, update the `content` state in the usePlainTextListeners
  // hook and clear the suggestion from state
  (_document$getSelectio2 = document.getSelection()) === null || _document$getSelectio2 === void 0 || _document$getSelectio2.setBaseAndExtent(node, newContent.length, node, newContent.length);
  setText(newContent);
  setSuggestionData(null);
}

/**
 * Replaces the relevant part of the editor text, replacing the plain text emoitcon with the suggested emoji.
 *
 * @param suggestionData - representation of the part of the DOM that will be replaced
 * @param setSuggestionData - setter function to set the suggestion state
 * @param setText - setter function to set the content of the composer
 */
function processEmojiReplacement(suggestionData, setSuggestionData, setText) {
  var _suggestionData$mappe2;
  // if we do not have a suggestion of the correct type, return early
  if ((suggestionData === null || suggestionData === void 0 || (_suggestionData$mappe2 = suggestionData.mappedSuggestion) === null || _suggestionData$mappe2 === void 0 ? void 0 : _suggestionData$mappe2.type) !== `custom`) {
    return;
  }
  processTextReplacement(suggestionData.mappedSuggestion.text, suggestionData, setSuggestionData, setText);
}

/**
 * Replaces the relevant part of the editor text, replacing the suggestionData selection with the replacement text.
 * @param replacementText - the text that we will insert into the DOM
 * @param suggestionData - representation of the part of the DOM that will be replaced
 * @param setSuggestionData - setter function to set the suggestion state
 * @param setText - setter function to set the content of the composer
 */
function processTextReplacement(replacementText, suggestionData, setSuggestionData, setText) {
  var _document$getSelectio3;
  // if we do not have suggestion data return early
  if (suggestionData === null) {
    return;
  }
  const {
    node
  } = suggestionData;
  const existingContent = node.textContent;
  if (existingContent == null) {
    return;
  }

  // replace the emoticon with the suggesed emoji
  const newContent = existingContent.slice(0, suggestionData.startOffset) + replacementText + existingContent.slice(suggestionData.endOffset);
  node.textContent = newContent;
  (_document$getSelectio3 = document.getSelection()) === null || _document$getSelectio3 === void 0 || _document$getSelectio3.setBaseAndExtent(node, newContent.length, node, newContent.length);
  setText(newContent);
  setSuggestionData(null);
}

/**
 * Given some text content from a node and the cursor position, find the word that the cursor is currently inside
 * and then test that word to see if it is a suggestion. Return the `MappedSuggestion` with start and end offsets if
 * the cursor is inside a valid suggestion, null otherwise.
 *
 * @param text - the text content of a node
 * @param offset - the current cursor offset position within the node
 * @param isFirstTextNode - whether or not the node is the first text node in the editor. Used to determine
 * if a command suggestion is found or not
 * @param isAutoReplaceEmojiEnabled - whether plain text emoticons should be auto replaced with emojis
 * @returns the `MappedSuggestion` along with its start and end offsets if found, otherwise null
 */
function findSuggestionInText(text, offset, isFirstTextNode, isAutoReplaceEmojiEnabled) {
  // Return null early if the offset is outside the content
  if (offset < 0 || offset > text.length) {
    return null;
  }

  // Variables to keep track of the indices we will be slicing from and to in order to create
  // a substring of the word that the cursor is currently inside
  let startSliceIndex = offset;
  let endSliceIndex = offset;

  // Search backwards from the current cursor position to find the start index of the word
  // containing the cursor
  while (shouldDecrementStartIndex(text, startSliceIndex)) {
    startSliceIndex--;
  }

  // Search forwards from the current cursor position to find the end index of the word
  // containing the cursor
  while (shouldIncrementEndIndex(text, endSliceIndex)) {
    endSliceIndex++;
  }

  // Get the word at the cursor then check if it contains a suggestion or not
  const wordAtCursor = text.slice(startSliceIndex, endSliceIndex);
  const mappedSuggestion = getMappedSuggestion(wordAtCursor, isAutoReplaceEmojiEnabled);

  /**
   * If we have a word that could be a command, it is not a valid command if:
   * - the node we're looking at isn't the first text node in the editor (adding paragraphs can
   *   result in nested <p> tags inside the editor <div>)
   * - the starting index is anything other than 0 (they can only appear at the start of a message)
   * - there is more text following the command (eg `/spo asdf|` should not be interpreted as
   *   something requiring autocomplete)
   */
  if (mappedSuggestion === null || mappedSuggestion.type === "command" && (!isFirstTextNode || startSliceIndex !== 0 || endSliceIndex !== text.length)) {
    return null;
  }
  return {
    mappedSuggestion,
    startOffset: startSliceIndex,
    endOffset: startSliceIndex + wordAtCursor.length
  };
}

/**
 * Associated function for findSuggestionInText. Checks the character at the preceding index
 * to determine if the search loop should continue.
 *
 * @param text - text content to check for mentions or commands
 * @param index - the current index to check
 * @returns true if check should keep moving backwards, false otherwise
 */
function shouldDecrementStartIndex(text, index) {
  // If the index is at or outside the beginning of the string, return false
  if (index <= 0) return false;

  // We are inside the string so can guarantee that there is a preceding character
  // Keep searching backwards if the preceding character is not a space
  return !/\s/.test(text[index - 1]);
}

/**
 * Associated function for findSuggestionInText. Checks the character at the current index
 * to determine if the search loop should continue.
 *
 * @param text - text content to check for mentions or commands
 * @param index - the current index to check
 * @returns true if check should keep moving forwards, false otherwise
 */
function shouldIncrementEndIndex(text, index) {
  // If the index is at or outside the end of the string, return false
  if (index >= text.length) return false;

  // Keep searching forwards if the current character is not a space
  return !/\s/.test(text[index]);
}

/**
 * Given a string, return a `MappedSuggestion` if the string contains a suggestion. Otherwise return null.
 *
 * @param text - string to check for a suggestion
 * @param isAutoReplaceEmojiEnabled - whether plain text emoticons should be auto replaced with emojis
 * @returns a `MappedSuggestion` if a suggestion is present, null otherwise
 */
function getMappedSuggestion(text, isAutoReplaceEmojiEnabled) {
  if (isAutoReplaceEmojiEnabled) {
    // variations of plaintext emoitcons(E.g. :P vs :p vs :-P) are handled upstream by the emojibase-bindings/emojibase libraries.
    // See rules for variations here https://github.com/milesj/emojibase/blob/master/packages/core/src/generateEmoticonPermutations.ts#L3-L32
    const emoji = build_emoji.EMOTICON_TO_EMOJI.get(text);
    if (emoji !== null && emoji !== void 0 && emoji.unicode) {
      return {
        keyChar: "",
        text: emoji.unicode,
        type: "custom"
      };
    }
  }
  const firstChar = text.charAt(0);
  const restOfString = text.slice(1);
  switch (firstChar) {
    case "/":
      return {
        keyChar: firstChar,
        text: restOfString,
        type: "command"
      };
    case "#":
    case "@":
      return {
        keyChar: firstChar,
        text: restOfString,
        type: "mention"
      };
    case ":":
      return {
        keyChar: firstChar,
        text: restOfString,
        type: "emoji"
      };
    default:
      return null;
  }
}
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/usePlainTextListeners.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/









function isDivElement(target) {
  return target instanceof HTMLDivElement;
}

/**
 * React hook which generates all of the listeners and the ref to be attached to the editor.
 *
 * Also returns pieces of state and utility functions that are required for use in other hooks
 * and by the autocomplete component.
 *
 * @param initialContent - the content of the editor when it is first mounted
 * @param onChange - called whenever there is change in the editor content
 * @param onSend - called whenever the user sends the message
 * @param eventRelation - used to send the event to the correct place eg timeline vs thread
 * @param isAutoReplaceEmojiEnabled - whether plain text emoticons should be auto replaced with emojis
 * @returns
 * - `ref`: a ref object which the caller must attach to the HTML `div` node for the editor
 * * `autocompleteRef`: a ref object which the caller must attach to the autocomplete component
 * - `content`: state representing the editor's current text content
 * - `setContent`: the setter function for `content`
 * - `onInput`, `onPaste`, `onKeyDown`: handlers for input, paste and keyDown events
 * - the output from the {@link useSuggestion} hook
 */
function usePlainTextListeners(initialContent, onChange, onSend, eventRelation, isAutoReplaceEmojiEnabled) {
  const roomContext = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("room", "timelineRenderingType", "replyToEvent");
  const mxClient = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  const ref = (0,react.useRef)(null);
  const autocompleteRef = (0,react.useRef)(null);
  const [content, setContent] = (0,react.useState)(initialContent);
  const send = (0,react.useCallback)(() => {
    if (ref.current) {
      ref.current.innerHTML = "";
    }
    onSend === null || onSend === void 0 || onSend();
  }, [ref, onSend]);
  const setText = (0,react.useCallback)(text => {
    if ((0,Typeguards/* isNotUndefined */.E)(text)) {
      setContent(text);
      onChange === null || onChange === void 0 || onChange(text);
    } else if ((0,Typeguards/* isNotNull */.P)(ref) && (0,Typeguards/* isNotNull */.P)(ref.current)) {
      // if called with no argument, read the current innerHTML from the ref and amend it as per `onInput`
      const currentRefContent = ref.current.innerHTML;
      setContent(currentRefContent);
      onChange === null || onChange === void 0 || onChange(currentRefContent);
    }
  }, [onChange, ref]);

  // For separation of concerns, the suggestion handling is kept in a separate hook but is
  // nested here because we do need to be able to update the `content` state in this hook
  // when a user selects a suggestion from the autocomplete menu
  const {
    suggestion,
    onSelect,
    handleCommand,
    handleMention,
    handleAtRoomMention,
    handleEmojiSuggestion,
    handleEmojiReplacement
  } = useSuggestion(ref, setText, isAutoReplaceEmojiEnabled);
  const onInput = (0,react.useCallback)(event => {
    if (isDivElement(event.target)) {
      setText(event.target.innerHTML);
    }
  }, [setText]);
  const onPaste = (0,react.useCallback)(event => {
    const {
      nativeEvent
    } = event;
    let imagePasteWasHandled = false;
    if ((0,utils/* isEventToHandleAsClipboardEvent */.wg)(nativeEvent)) {
      const data = nativeEvent instanceof ClipboardEvent ? nativeEvent.clipboardData : nativeEvent.dataTransfer;
      imagePasteWasHandled = (0,utils/* handleClipboardEvent */.VI)(nativeEvent, data, roomContext, mxClient, eventRelation);
    }

    // prevent default behaviour and skip call to onInput if the image paste event was handled
    if (imagePasteWasHandled) {
      event.preventDefault();
    } else {
      onInput(event);
    }
  }, [eventRelation, mxClient, onInput, roomContext]);
  const enterShouldSend = !(0,useSettings/* useSettingValue */.ti)("MessageComposerInput.ctrlEnterToSend");
  const onKeyDown = (0,react.useCallback)(event => {
    // we need autocomplete to take priority when it is open for using enter to select
    const isHandledByAutocomplete = (0,utils/* handleEventWithAutocomplete */.hi)(autocompleteRef, event);
    if (isHandledByAutocomplete) {
      return;
    }
    // handle accepting of plain text emojicon to emoji replacement
    if (event.key == Keyboard/* Key */.Uz.ENTER || event.key == Keyboard/* Key */.Uz.SPACE) {
      handleEmojiReplacement();
    }

    // resume regular flow
    if (event.key === Keyboard/* Key */.Uz.ENTER) {
      // TODO use getKeyBindingsManager().getMessageComposerAction(event) like in useInputEventProcessor
      const sendModifierIsPressed = Keyboard/* IS_MAC */.vL ? event.metaKey : event.ctrlKey;

      // if enter should send, send if the user is not pushing shift
      if (enterShouldSend && !event.shiftKey) {
        event.preventDefault();
        event.stopPropagation();
        send();
      }

      // if enter should not send, send only if the user is pushing ctrl/cmd
      if (!enterShouldSend && sendModifierIsPressed) {
        event.preventDefault();
        event.stopPropagation();
        send();
      }
    }
  }, [autocompleteRef, enterShouldSend, send, handleEmojiReplacement]);
  return {
    ref,
    autocompleteRef,
    onBeforeInput: onPaste,
    onInput,
    onPaste,
    onKeyDown,
    content,
    setContent: setText,
    suggestion,
    onSelect,
    handleCommand,
    handleMention,
    handleAtRoomMention,
    handleEmoji: handleEmojiSuggestion
  };
}
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/hooks/useSetCursorPosition.ts
var useSetCursorPosition = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/hooks/useSetCursorPosition.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/components/Editor.tsx + 2 modules
var Editor = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/components/Editor.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx + 1 modules
var WysiwygAutocomplete = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/components/WysiwygAutocomplete.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/components/PlainTextComposer.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











function PlainTextComposer({
  className,
  disabled = false,
  onSend,
  onChange,
  children,
  placeholder,
  initialContent,
  leftComponent,
  rightComponent,
  eventRelation
}) {
  const isAutoReplaceEmojiEnabled = (0,useSettings/* useSettingValue */.ti)("MessageComposerInput.autoReplaceEmoji");
  const {
    ref: editorRef,
    autocompleteRef,
    onBeforeInput,
    onInput,
    onPaste,
    onKeyDown,
    content,
    setContent,
    suggestion,
    onSelect,
    handleCommand,
    handleMention,
    handleAtRoomMention,
    handleEmoji
  } = usePlainTextListeners(initialContent, onChange, onSend, eventRelation, isAutoReplaceEmojiEnabled);
  const composerFunctions = useComposerFunctions(editorRef, setContent);
  usePlainTextInitialization(initialContent, editorRef);
  (0,useSetCursorPosition/* useSetCursorPosition */.V)(disabled, editorRef);
  const {
    isFocused,
    onFocus
  } = (0,useIsFocused/* useIsFocused */.j)();
  const computedPlaceholder = !content && placeholder || undefined;
  return /*#__PURE__*/react.createElement("div", {
    "data-testid": "PlainTextComposer",
    className: classnames_default()(className, {
      [`${className}-focused`]: isFocused
    }),
    onFocus: onFocus,
    onBlur: onFocus,
    onBeforeInput: onBeforeInput,
    onInput: onInput,
    onPaste: onPaste,
    onKeyDown: onKeyDown,
    onSelect: onSelect
  }, /*#__PURE__*/react.createElement(WysiwygAutocomplete/* WysiwygAutocomplete */.W, {
    ref: autocompleteRef,
    suggestion: suggestion,
    handleMention: handleMention,
    handleCommand: handleCommand,
    handleAtRoomMention: handleAtRoomMention,
    handleEmoji: handleEmoji
  }), /*#__PURE__*/react.createElement(Editor/* Editor */.K, {
    ref: editorRef,
    disabled: disabled,
    leftComponent: leftComponent,
    rightComponent: rightComponent,
    placeholder: computedPlaceholder
  }), children === null || children === void 0 ? void 0 : children(editorRef, composerFunctions));
}
// EXTERNAL MODULE: ./src/utils/ShieldUtils.ts
var ShieldUtils = __webpack_require__("./src/utils/ShieldUtils.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/E2EIcon.tsx
var E2EIcon = __webpack_require__("./src/components/views/rooms/E2EIcon.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/EmojiButton.tsx
var EmojiButton = __webpack_require__("./src/components/views/rooms/EmojiButton.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/components/Emoji.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






function Emoji({
  menuPosition
}) {
  const roomContext = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("timelineRenderingType");
  return /*#__PURE__*/react.createElement(EmojiButton/* EmojiButton */.h, {
    menuPosition: menuPosition,
    addEmoji: emoji => {
      dispatcher/* default */.A.dispatch({
        action: actions/* Action */.r.ComposerInsert,
        text: emoji,
        timelineRenderingType: roomContext.timelineRenderingType
      });
      return true;
    }
  });
}
;// ./src/components/views/rooms/wysiwyg_composer/SendWysiwygComposer.tsx


const _excluded = ["isRichTextEnabled", "e2eStatus", "menuPosition"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/










const Content = function Content({
  disabled = false,
  composerFunctions,
  ref
}) {
  useWysiwygSendActionHandler(disabled, ref, composerFunctions);
  return null;
};
// Default needed for React.lazy
function SendWysiwygComposer(_ref) {
  let {
      isRichTextEnabled,
      e2eStatus,
      menuPosition
    } = _ref,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  const Composer = isRichTextEnabled ? WysiwygComposer/* WysiwygComposer */.k : PlainTextComposer;
  const defaultContextValue = (0,react.useMemo)(() => (0,ComposerContext/* getDefaultContextValue */.AP)({
    eventRelation: props.eventRelation
  }), [props.eventRelation]);
  let leftIcon = false;
  if (!e2eStatus) {
    leftIcon = /*#__PURE__*/react.createElement(lock_off/* default */.A, {
      "data-testid": "e2e-icon",
      width: 12,
      height: 12,
      color: "var(--cpd-color-icon-info-primary)",
      className: "mx_E2EIcon"
    });
  } else if (e2eStatus !== ShieldUtils/* E2EStatus */.z.Normal) {
    leftIcon = /*#__PURE__*/react.createElement(E2EIcon/* default */.A, {
      status: e2eStatus,
      size: 12
    });
  }
  return /*#__PURE__*/react.createElement(ComposerContext/* ComposerContext */.EW.Provider, {
    value: defaultContextValue
  }, /*#__PURE__*/react.createElement(Composer, (0,esm_extends/* default */.A)({
    className: "mx_SendWysiwygComposer",
    leftComponent: leftIcon,
    rightComponent: /*#__PURE__*/react.createElement(Emoji, {
      menuPosition: menuPosition
    })
  }, props), (ref, composerFunctions) => /*#__PURE__*/react.createElement(Content, {
    disabled: props.disabled,
    ref: ref,
    composerFunctions: composerFunctions
  })));
}

/***/ },

/***/ "../../node_modules/@vector-im/compound-design-tokens/assets/web/icons/lock-off.js"
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/react/jsx-runtime.js");


function LockOffIcon(props, ref) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    ref: ref,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M6 22q-.825 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412a2 2 0 0 1 .702-.463L1.333 4.167a1 1 0 0 1 1.414-1.414L7 7.006v-.012l13 13v.012l1.247 1.247a1 1 0 1 1-1.414 1.414l-.896-.896A1.94 1.94 0 0 1 18 22zm14-4.834V10q0-.825-.587-1.412A1.93 1.93 0 0 0 18 8h-1V6q0-2.075-1.463-3.537Q14.075 1 12 1T8.463 2.463a4.9 4.9 0 0 0-1.22 1.946L9 6.166V6q0-1.25.875-2.125A2.9 2.9 0 0 1 12 3q1.25 0 2.125.875T15 6v2h-4.166z"
    })
  });
}
;
LockOffIcon.displayName = "LockOffIcon";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(LockOffIcon));

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
//# sourceMappingURL=1142.js.map