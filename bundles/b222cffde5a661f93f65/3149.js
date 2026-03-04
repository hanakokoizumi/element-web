"use strict";
(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[3149],{

/***/ "./src/components/views/rooms/wysiwyg_composer/EditWysiwygComposer.tsx"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditWysiwygComposer)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx + 11 modules
var WysiwygComposer = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/components/WysiwygComposer.tsx");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/AccessibleButton.tsx
var AccessibleButton = __webpack_require__("./src/components/views/elements/AccessibleButton.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/components/EditionButtons.tsx
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/




function EditionButtons({
  onCancelClick,
  onSaveClick,
  isSaveDisabled = false
}) {
  return /*#__PURE__*/react.createElement("div", {
    className: "mx_EditWysiwygComposer_buttons"
  }, /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    kind: "secondary",
    onClick: onCancelClick
  }, (0,languageHandler._t)("action|cancel")), /*#__PURE__*/react.createElement(AccessibleButton/* default */.A, {
    kind: "primary",
    onClick: onSaveClick,
    disabled: isSaveDisabled
  }, (0,languageHandler._t)("action|save")));
}
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
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/selection.ts
var selection = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/selection.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts
var ComposerContext = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/ComposerContext.ts");
// EXTERNAL MODULE: ./src/contexts/ScopedRoomContext.tsx
var ScopedRoomContext = __webpack_require__("./src/contexts/ScopedRoomContext.tsx");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useWysiwygEditActionHandler.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/











function useWysiwygEditActionHandler(disabled, composerElement, composerFunctions) {
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
      case actions/* Action */.r.FocusEditMessageComposer:
        (0,utils/* focusComposer */.Hj)(composerElement, context, roomContext, timeoutId);
        break;
      case actions/* Action */.r.ComposerInsert:
        if (payload.timelineRenderingType !== roomContext.timelineRenderingType) break;
        if (payload.composerType !== ComposerInsertPayload/* ComposerType */.D.Edit) break;
        if (payload.text) {
          (0,selection/* setSelection */.td)(composerContext.selection).then(() => composerFunctions.insertText(payload.text));
        }
        break;
    }
  }, [disabled, composerElement, composerFunctions, timeoutId, roomContext, composerContext]);
  (0,useDispatcher/* useDispatcher */.F)(dispatcher/* default */.A, handler);
}
// EXTERNAL MODULE: ./src/contexts/MatrixClientContext.tsx
var MatrixClientContext = __webpack_require__("./src/contexts/MatrixClientContext.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/editing.ts
var editing = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/editing.ts");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/message.ts + 2 modules
var message = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/message.ts");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useEditing.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






function useEditing(editorStateTransfer, initialContent) {
  const roomContext = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("timelineRenderingType");
  const mxClient = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  const [isSaveDisabled, setIsSaveDisabled] = (0,react.useState)(true);
  const [content, setContent] = (0,react.useState)(initialContent);
  const onChange = (0,react.useCallback)(_content => {
    setContent(_content);
    setIsSaveDisabled(_isSaveDisabled => _isSaveDisabled && _content === initialContent);
  }, [initialContent]);
  const editMessageMemoized = (0,react.useCallback)(async () => {
    if (mxClient === undefined || content === undefined) {
      return;
    }
    return (0,message/* editMessage */.u)(content, {
      roomContext,
      mxClient,
      editorStateTransfer
    });
  }, [content, roomContext, mxClient, editorStateTransfer]);
  const endEditingMemoized = (0,react.useCallback)(() => (0,editing/* endEditing */.w)(roomContext), [roomContext]);
  return {
    onChange,
    editMessage: editMessageMemoized,
    endEditing: endEditingMemoized,
    isSaveDisabled
  };
}
// EXTERNAL MODULE: ./src/editor/deserialize.ts
var deserialize = __webpack_require__("./src/editor/deserialize.ts");
// EXTERNAL MODULE: ./src/editor/parts.ts + 1 modules
var editor_parts = __webpack_require__("./src/editor/parts.ts");
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
;// ./src/components/views/rooms/wysiwyg_composer/hooks/useInitialContent.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







function getFormattedContent(editorStateTransfer) {
  var _editorStateTransfer$;
  return ((_editorStateTransfer$ = editorStateTransfer.getEvent().getContent().formatted_body) === null || _editorStateTransfer$ === void 0 ? void 0 : _editorStateTransfer$.replace(/<mx-reply>.*<\/mx-reply>/, "")) || "";
}
function parseEditorStateTransfer(editorStateTransfer, room, mxClient) {
  const partCreator = new editor_parts/* CommandPartCreator */.dK(room, mxClient);
  let parts = [];
  if (editorStateTransfer.hasEditorState()) {
    // if restoring state from a previous editor,
    // restore serialized parts from the state
    const serializedParts = editorStateTransfer.getSerializedParts();
    if (serializedParts !== null) {
      parts = serializedParts.map(p => partCreator.deserializePart(p));
    }
  } else {
    // otherwise, either restore serialized parts from localStorage or parse the body of the event
    // TODO local storage
    // const restoredParts = this.restoreStoredEditorState(partCreator);

    if (editorStateTransfer.getEvent().getContent().format === "org.matrix.custom.html") {
      return getFormattedContent(editorStateTransfer);
    }
    parts = (0,deserialize/* parseEvent */.wj)(editorStateTransfer.getEvent(), partCreator, {
      shouldEscape: SettingsStore/* default */.A.getValue("MessageComposerInput.useMarkdown")
    });
  }
  return parts.reduce((content, part) => content + (part === null || part === void 0 ? void 0 : part.text), "");
  // Todo local storage
  // this.saveStoredEditorState();
}
function useInitialContent(editorStateTransfer) {
  const {
    room
  } = (0,ScopedRoomContext/* useScopedRoomContext */.ME)("room");
  const mxClient = (0,MatrixClientContext/* useMatrixClientContext */.nH)();
  return (0,react.useMemo)(() => {
    if (editorStateTransfer && room && mxClient) {
      return parseEditorStateTransfer(editorStateTransfer, room, mxClient);
    }
  }, [editorStateTransfer, room, mxClient]);
}
;// ./src/components/views/rooms/wysiwyg_composer/EditWysiwygComposer.tsx


const _excluded = ["editorStateTransfer", "className"];
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
  useWysiwygEditActionHandler(disabled, ref, composerFunctions);
  return null;
};
// Default needed for React.lazy
function EditWysiwygComposer(_ref) {
  let {
      editorStateTransfer,
      className
    } = _ref,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  const defaultContextValue = (0,react.useMemo)(() => (0,ComposerContext/* getDefaultContextValue */.AP)({
    editorStateTransfer
  }), [editorStateTransfer]);
  const initialContent = useInitialContent(editorStateTransfer);
  const isReady = !editorStateTransfer || initialContent !== undefined;
  const {
    editMessage,
    endEditing,
    onChange,
    isSaveDisabled
  } = useEditing(editorStateTransfer, initialContent);
  if (!isReady) {
    return /*#__PURE__*/react.createElement(react.Fragment, null);
  }
  return /*#__PURE__*/react.createElement(ComposerContext/* ComposerContext */.EW.Provider, {
    value: defaultContextValue
  }, /*#__PURE__*/react.createElement(WysiwygComposer/* WysiwygComposer */.k, (0,esm_extends/* default */.A)({
    className: classnames_default()("mx_EditWysiwygComposer", className),
    initialContent: initialContent,
    onChange: onChange,
    onSend: editMessage
  }, props), (ref, composerFunctions) => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Content, {
    disabled: props.disabled,
    ref: ref,
    composerFunctions: composerFunctions
  }), /*#__PURE__*/react.createElement(EditionButtons, {
    onCancelClick: endEditing,
    onSaveClick: editMessage,
    isSaveDisabled: isSaveDisabled
  }))));
}

/***/ },

/***/ "./src/components/views/rooms/wysiwyg_composer/utils/message.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ editMessage),
  sendMessage: () => (/* binding */ sendMessage)
});

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ./src/PosthogAnalytics.ts
var PosthogAnalytics = __webpack_require__("./src/PosthogAnalytics.ts");
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ./src/sendTimePerformanceMetrics.ts
var sendTimePerformanceMetrics = __webpack_require__("./src/sendTimePerformanceMetrics.ts");
// EXTERNAL MODULE: ./src/utils/local-room.ts + 1 modules
var local_room = __webpack_require__("./src/utils/local-room.ts");
// EXTERNAL MODULE: ./src/effects/index.ts
var effects = __webpack_require__("./src/effects/index.ts");
// EXTERNAL MODULE: ./src/effects/utils.ts
var utils = __webpack_require__("./src/effects/utils.ts");
// EXTERNAL MODULE: ./src/dispatcher/dispatcher.ts
var dispatcher = __webpack_require__("./src/dispatcher/dispatcher.ts");
// EXTERNAL MODULE: ./src/components/views/dialogs/ConfirmRedactDialog.tsx
var ConfirmRedactDialog = __webpack_require__("./src/components/views/dialogs/ConfirmRedactDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/rooms/wysiwyg_composer/utils/editing.ts
var editing = __webpack_require__("./src/components/views/rooms/wysiwyg_composer/utils/editing.ts");
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ../../node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js + 1 modules
var matrix_wysiwyg = __webpack_require__("../../node_modules/@vector-im/matrix-wysiwyg/dist/matrix-wysiwyg.js");
// EXTERNAL MODULE: ./src/utils/permalinks/Permalinks.ts + 2 modules
var Permalinks = __webpack_require__("./src/utils/permalinks/Permalinks.ts");
// EXTERNAL MODULE: ./src/utils/Reply.ts
var Reply = __webpack_require__("./src/utils/Reply.ts");
// EXTERNAL MODULE: ./src/Typeguards.ts
var Typeguards = __webpack_require__("./src/Typeguards.ts");
;// ./src/components/views/rooms/wysiwyg_composer/utils/createMessageContent.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/







const EMOTE_PREFIX = "/me ";

// Merges favouring the given relation
function attachRelation(content, relation) {
  if (relation) {
    content["m.relates_to"] = _objectSpread(_objectSpread({}, content["m.relates_to"] || {}), relation);
  }
}
const isMatrixEvent = e => e instanceof matrix.MatrixEvent;
async function createMessageContent(message, isHTML, {
  relation,
  replyToEvent,
  editedEvent
}) {
  const isEditing = isMatrixEvent(editedEvent);
  const isEmote = message.startsWith(EMOTE_PREFIX);
  if (isEmote) {
    // if we are dealing with an emote we want to remove the prefix so that `/me` does not
    // appear after the `* <userName>` text in the timeline
    message = message.slice(EMOTE_PREFIX.length);
  }
  if (message.startsWith("//")) {
    // if user wants to enter a single slash at the start of a message, this
    // is how they have to do it (due to it clashing with commands), so here we
    // remove the first character to make sure //word displays as /word
    message = message.slice(1);
  }

  // if we're editing rich text, the message content is pure html
  // BUT if we're not, the message content will be plain text where we need to convert the mentions
  const body = isHTML ? await (0,matrix_wysiwyg.richToPlain)(message, false) : convertPlainTextToBody(message);
  const content = {
    msgtype: isEmote ? matrix.MsgType.Emote : matrix.MsgType.Text,
    body: isEditing ? `* ${body}` : body
  };

  // TODO markdown support

  const isMarkdownEnabled = SettingsStore/* default */.A.getValue("MessageComposerInput.useMarkdown");
  const formattedBody = isHTML ? message : isMarkdownEnabled ? await (0,matrix_wysiwyg.plainToRich)(message, true) : null;
  if (formattedBody) {
    content.format = "org.matrix.custom.html";
    content.formatted_body = isEditing ? `* ${formattedBody}` : formattedBody;
  }
  if (isEditing) {
    content["m.new_content"] = {
      msgtype: content.msgtype,
      body: body
    };
    if (formattedBody) {
      content["m.new_content"].format = "org.matrix.custom.html";
      content["m.new_content"]["formatted_body"] = formattedBody;
    }
  }
  const newRelation = isEditing ? _objectSpread(_objectSpread({}, relation), {}, {
    rel_type: "m.replace",
    event_id: editedEvent.getId()
  }) : relation;

  // TODO Do we need to attach mentions here?
  // TODO Handle editing?
  attachRelation(content, newRelation);
  if (!isEditing && replyToEvent) {
    (0,Reply/* addReplyToMessageContent */.fh)(content, replyToEvent);
  }
  return content;
}

/**
 * Without a model, we need to manually amend mentions in uncontrolled message content
 * to make sure that mentions meet the matrix specification.
 *
 * @param content - the output from the `MessageComposer` state when in plain text mode
 * @returns - a string formatted with the mentions replaced as required
 */
function convertPlainTextToBody(content) {
  const document = new DOMParser().parseFromString(content, "text/html");
  const mentions = Array.from(document.querySelectorAll("a[data-mention-type]"));
  mentions.forEach(mention => {
    const mentionType = mention.getAttribute("data-mention-type");
    switch (mentionType) {
      case "at-room":
        {
          mention.replaceWith("@room");
          break;
        }
      case "user":
        {
          const innerText = mention.innerHTML;
          mention.replaceWith(innerText);
          break;
        }
      case "room":
        {
          // for this case we use parsePermalink to try and get the mx id
          const href = mention.getAttribute("href");

          // if the mention has no href attribute, leave it alone
          if (href === null) break;

          // otherwise, attempt to parse the room alias or id from the href
          const permalinkParts = (0,Permalinks/* parsePermalink */.$N)(href);

          // then if we have permalink parts with a valid roomIdOrAlias, replace the
          // room mention with that text
          if ((0,Typeguards/* isNotNull */.P)(permalinkParts) && (0,Typeguards/* isNotNull */.P)(permalinkParts.roomIdOrAlias)) {
            mention.replaceWith(permalinkParts.roomIdOrAlias);
          }
          break;
        }
      default:
        break;
    }
  });
  return document.body.innerHTML;
}
;// ./src/components/views/rooms/wysiwyg_composer/utils/isContentModified.ts
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

function isContentModified(newContent, editorStateTransfer) {
  // if nothing has changed then bail
  const oldContent = editorStateTransfer.getEvent().getContent();
  if (oldContent["msgtype"] === newContent["msgtype"] && oldContent["body"] === newContent["body"] && oldContent["format"] === newContent["format"] && oldContent["formatted_body"] === newContent["formatted_body"]) {
    return false;
  }
  return true;
}
// EXTERNAL MODULE: ./src/slash-commands/SlashCommands.tsx + 10 modules
var SlashCommands = __webpack_require__("./src/slash-commands/SlashCommands.tsx");
// EXTERNAL MODULE: ./src/editor/commands.tsx
var commands = __webpack_require__("./src/editor/commands.tsx");
// EXTERNAL MODULE: ./src/dispatcher/actions.ts
var actions = __webpack_require__("./src/dispatcher/actions.ts");
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__("./src/utils/messages.ts");
;// ./src/components/views/rooms/wysiwyg_composer/utils/message.ts

const _excluded = ["roomContext", "mxClient"];
/*
Copyright 2024 New Vector Ltd.
Copyright 2022, 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/


















async function sendMessage(message, isHTML, _ref) {
  let {
      roomContext,
      mxClient
    } = _ref,
    params = (0,objectWithoutProperties/* default */.A)(_ref, _excluded);
  const {
    relation,
    replyToEvent
  } = params;
  const {
    room
  } = roomContext;
  const roomId = room === null || room === void 0 ? void 0 : room.roomId;
  if (!roomId) {
    return;
  }
  const posthogEvent = {
    eventName: "Composer",
    isEditing: false,
    messageType: "Text",
    isReply: Boolean(replyToEvent),
    // TODO thread
    inThread: (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix.THREAD_RELATION_TYPE.name
  };

  // TODO thread
  /*if (posthogEvent.inThread) {
      const threadRoot = room.findEventById(relation?.event_id);
      posthogEvent.startsThread = threadRoot?.getThread()?.events.length === 1;
  }*/
  PosthogAnalytics/* PosthogAnalytics */.Vo.instance.trackEvent(posthogEvent);
  let content = null;

  // Slash command handling here approximates what can be found in SendMessageComposer.sendMessage()
  // but note that the /me and // special cases are handled by the call to createMessageContent
  if (message.startsWith("/") && !message.startsWith("//") && !message.startsWith(EMOTE_PREFIX)) {
    const {
      cmd,
      args
    } = (0,SlashCommands/* getCommand */.OE)(roomId, message);
    if (cmd) {
      const threadId = (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix.THREAD_RELATION_TYPE.name ? relation === null || relation === void 0 ? void 0 : relation.event_id : null;
      let commandSuccessful;
      [content, commandSuccessful] = await (0,commands/* runSlashCommand */.m8)(mxClient, cmd, args, roomId, threadId !== null && threadId !== void 0 ? threadId : null);
      if (!commandSuccessful) {
        return; // errored
      }
      if (content && (cmd.category === SlashCommands/* CommandCategories */.ge.messages || cmd.category === SlashCommands/* CommandCategories */.ge.effects)) {
        (0,messages/* attachRelation */.g)(content, relation);
        if (replyToEvent) {
          (0,Reply/* addReplyToMessageContent */.fh)(content, replyToEvent);
        }
      } else {
        // instead of setting shouldSend to false as in SendMessageComposer, just return
        return;
      }
    } else {
      const sendAnyway = await (0,commands/* shouldSendAnyway */.d8)(message);
      // re-focus the composer after QuestionDialog is closed
      dispatcher/* default */.A.dispatch({
        action: actions/* Action */.r.FocusAComposer,
        context: roomContext.timelineRenderingType
      });
      // if !sendAnyway bail to let the user edit the composer and try again
      if (!sendAnyway) return;
    }
  }

  // if content is null, we haven't done any slash command processing, so generate some content
  content !== null && content !== void 0 ? content : content = await createMessageContent(message, isHTML, params);

  // TODO replace emotion end of message ?

  // TODO quick reaction

  // don't bother sending an empty message
  if (!content.body.trim()) {
    return;
  }
  if (SettingsStore/* default */.A.getValue("Performance.addSendMessageTimingMetadata")) {
    (0,sendTimePerformanceMetrics/* decorateStartSendingTime */.H)(content);
  }
  const threadId = relation !== null && relation !== void 0 && relation.event_id && (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix.THREAD_RELATION_TYPE.name ? relation.event_id : null;
  const prom = (0,local_room/* doMaybeLocalRoomAction */.Y)(roomId, actualRoomId => mxClient.sendMessage(actualRoomId, threadId, content), mxClient);
  if (replyToEvent) {
    // Clear reply_to_event as we put the message into the queue
    // if the send fails, retry will handle resending.
    dispatcher/* default */.A.dispatch({
      action: "reply_to_event",
      event: null,
      context: roomContext.timelineRenderingType
    });
  }
  dispatcher/* default */.A.dispatch({
    action: "message_sent"
  });
  effects/* CHAT_EFFECTS */.y.forEach(effect => {
    if (content && (0,utils/* containsEmoji */._)(content, effect.emojis)) {
      // For initial threads launch, chat effects are disabled
      // see #19731
      const isNotThread = (relation === null || relation === void 0 ? void 0 : relation.rel_type) !== matrix.THREAD_RELATION_TYPE.name;
      if (isNotThread) {
        dispatcher/* default */.A.dispatch({
          action: `effects.${effect.command}`
        });
      }
    }
  });
  if (SettingsStore/* default */.A.getValue("Performance.addSendMessageTimingMetadata")) {
    prom.then(resp => {
      (0,sendTimePerformanceMetrics/* sendRoundTripMetric */._)(mxClient, roomId, resp.event_id);
    });
  }

  // TODO save history
  // TODO save local state

  //if (shouldSend && SettingsStore.getValue("scrollToBottomOnMessageSent")) {
  if (SettingsStore/* default */.A.getValue("scrollToBottomOnMessageSent")) {
    dispatcher/* default */.A.dispatch({
      action: "scroll_to_bottom",
      timelineRenderingType: roomContext.timelineRenderingType
    });
  }
  return prom;
}
async function editMessage(html, {
  roomContext,
  mxClient,
  editorStateTransfer
}) {
  const editedEvent = editorStateTransfer.getEvent();
  PosthogAnalytics/* PosthogAnalytics */.Vo.instance.trackEvent({
    eventName: "Composer",
    isEditing: true,
    messageType: "Text",
    inThread: Boolean(editedEvent === null || editedEvent === void 0 ? void 0 : editedEvent.getThread()),
    isReply: Boolean(editedEvent.replyEventId)
  });

  // TODO emoji
  // Replace emoticon at the end of the message
  /*    if (SettingsStore.getValue('MessageComposerInput.autoReplaceEmoji')) {
      const caret = this.editorRef.current?.getCaret();
      const position = this.model.positionForOffset(caret.offset, caret.atNodeEnd);
      this.editorRef.current?.replaceEmoticon(position, REGEX_EMOTICON);
  }*/
  const editContent = await createMessageContent(html, true, {
    editedEvent
  });
  const newContent = editContent["m.new_content"];
  const shouldSend = true;
  if ((newContent === null || newContent === void 0 ? void 0 : newContent.body) === "") {
    (0,editing/* cancelPreviousPendingEdit */.r)(mxClient, editorStateTransfer);
    (0,ConfirmRedactDialog/* createRedactEventDialog */.Q)({
      mxEvent: editedEvent,
      onCloseDialog: () => {
        (0,editing/* endEditing */.w)(roomContext);
      }
    });
    return;
  }
  let response;
  const roomId = editedEvent.getRoomId();

  // If content is modified then send an updated event into the room
  if (isContentModified(newContent, editorStateTransfer) && roomId) {
    // TODO Slash Commands

    if (shouldSend) {
      (0,editing/* cancelPreviousPendingEdit */.r)(mxClient, editorStateTransfer);
      const event = editorStateTransfer.getEvent();
      const threadId = event.threadRootId || null;
      response = mxClient.sendMessage(roomId, threadId, editContent);
      dispatcher/* default */.A.dispatch({
        action: "message_sent"
      });
    }
  }
  (0,editing/* endEditing */.w)(roomContext);
  return response;
}

/***/ }

}]);
//# sourceMappingURL=3149.js.map