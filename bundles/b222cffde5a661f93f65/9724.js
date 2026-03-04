(self["webpackChunkelement_web"] = self["webpackChunkelement_web"] || []).push([[9724],{

/***/ "./src/ContentMessages.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ ContentMessages),
  QM: () => (/* binding */ uploadFile)
});

// UNUSED EXPORTS: UploadCanceledError, UploadFailedError

// EXTERNAL MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/matrix.ts + 9 modules
var matrix = __webpack_require__("./node_modules/matrix-js-sdk/src/matrix.ts");
// EXTERNAL MODULE: ../../node_modules/matrix-encrypt-attachment/lib/browser-encrypt-attachment.js
var browser_encrypt_attachment = __webpack_require__("../../node_modules/matrix-encrypt-attachment/lib/browser-encrypt-attachment.js");
var browser_encrypt_attachment_default = /*#__PURE__*/__webpack_require__.n(browser_encrypt_attachment);
// EXTERNAL MODULE: ../../node_modules/png-chunks-extract/index.js
var png_chunks_extract = __webpack_require__("../../node_modules/png-chunks-extract/index.js");
var png_chunks_extract_default = /*#__PURE__*/__webpack_require__.n(png_chunks_extract);
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/logger.ts
var logger = __webpack_require__("./node_modules/matrix-js-sdk/src/logger.ts");
// EXTERNAL MODULE: ./node_modules/matrix-js-sdk/src/utils.ts
var utils = __webpack_require__("./node_modules/matrix-js-sdk/src/utils.ts");
// EXTERNAL MODULE: ./src/dispatcher/dispatcher.ts
var dispatcher = __webpack_require__("./src/dispatcher/dispatcher.ts");
// EXTERNAL MODULE: ./src/languageHandler.tsx
var languageHandler = __webpack_require__("./src/languageHandler.tsx");
// EXTERNAL MODULE: ./src/Modal.tsx + 1 modules
var Modal = __webpack_require__("./src/Modal.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/Spinner.tsx
var Spinner = __webpack_require__("./src/components/views/elements/Spinner.tsx");
// EXTERNAL MODULE: ./src/dispatcher/actions.ts
var actions = __webpack_require__("./src/dispatcher/actions.ts");
;// ./src/models/RoomUpload.ts

/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

class RoomUpload {
  constructor(roomId, fileName, relation, fileSize = 0) {
    (0,defineProperty/* default */.A)(this, "abortController", new AbortController());
    (0,defineProperty/* default */.A)(this, "promise", void 0);
    (0,defineProperty/* default */.A)(this, "uploaded", 0);
    this.roomId = roomId;
    this.fileName = fileName;
    this.relation = relation;
    this.fileSize = fileSize;
  }
  onProgress(progress) {
    this.uploaded = progress.loaded;
    this.fileSize = progress.total;
  }
  abort() {
    this.abortController.abort();
  }
  get cancelled() {
    return this.abortController.signal.aborted;
  }
  get total() {
    return this.fileSize;
  }
  get loaded() {
    return this.uploaded;
  }
}
// EXTERNAL MODULE: ./src/settings/SettingsStore.ts + 10 modules
var SettingsStore = __webpack_require__("./src/settings/SettingsStore.ts");
// EXTERNAL MODULE: ./src/sendTimePerformanceMetrics.ts
var sendTimePerformanceMetrics = __webpack_require__("./src/sendTimePerformanceMetrics.ts");
// EXTERNAL MODULE: ./src/contexts/RoomContext.ts
var RoomContext = __webpack_require__("./src/contexts/RoomContext.ts");
// EXTERNAL MODULE: ./src/utils/Reply.ts
var Reply = __webpack_require__("./src/utils/Reply.ts");
// EXTERNAL MODULE: ./src/components/views/dialogs/ErrorDialog.tsx
var ErrorDialog = __webpack_require__("./src/components/views/dialogs/ErrorDialog.tsx");
// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ./src/components/views/dialogs/BaseDialog.tsx
var BaseDialog = __webpack_require__("./src/components/views/dialogs/BaseDialog.tsx");
// EXTERNAL MODULE: ./src/components/views/elements/DialogButtons.tsx
var DialogButtons = __webpack_require__("./src/components/views/elements/DialogButtons.tsx");
// EXTERNAL MODULE: ./src/utils/FileUtils.ts
var FileUtils = __webpack_require__("./src/utils/FileUtils.ts");
;// ./src/components/views/dialogs/UploadFailureDialog.tsx

/*
Copyright 2019-2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/






/*
 * Tells the user about files we know cannot be uploaded before we even try uploading
 * them. This is named fairly generically but the only thing we check right now is
 * the size of the file.
 */
class UploadFailureDialog extends react.Component {
  constructor(...args) {
    super(...args);
    (0,defineProperty/* default */.A)(this, "onCancelClick", () => {
      this.props.onFinished(false);
    });
    (0,defineProperty/* default */.A)(this, "onUploadClick", () => {
      this.props.onFinished(true);
    });
  }
  render() {
    let message;
    let preview;
    let buttons;
    if (this.props.totalFiles === 1 && this.props.badFiles.length === 1) {
      message = (0,languageHandler._t)("upload_file|error_file_too_large", {
        limit: (0,FileUtils/* fileSize */.Ov)(this.props.contentMessages.getUploadLimit()),
        sizeOfThisFile: (0,FileUtils/* fileSize */.Ov)(this.props.badFiles[0].size)
      }, {
        b: sub => /*#__PURE__*/react.createElement("strong", null, sub)
      });
      buttons = /*#__PURE__*/react.createElement(DialogButtons/* default */.A, {
        primaryButton: (0,languageHandler._t)("action|ok"),
        hasCancel: false,
        onPrimaryButtonClick: this.onCancelClick,
        focus: true
      });
    } else if (this.props.totalFiles === this.props.badFiles.length) {
      message = (0,languageHandler._t)("upload_file|error_files_too_large", {
        limit: (0,FileUtils/* fileSize */.Ov)(this.props.contentMessages.getUploadLimit())
      }, {
        b: sub => /*#__PURE__*/react.createElement("strong", null, sub)
      });
      buttons = /*#__PURE__*/react.createElement(DialogButtons/* default */.A, {
        primaryButton: (0,languageHandler._t)("action|ok"),
        hasCancel: false,
        onPrimaryButtonClick: this.onCancelClick,
        focus: true
      });
    } else {
      message = (0,languageHandler._t)("upload_file|error_some_files_too_large", {
        limit: (0,FileUtils/* fileSize */.Ov)(this.props.contentMessages.getUploadLimit())
      }, {
        b: sub => /*#__PURE__*/react.createElement("strong", null, sub)
      });
      const howManyOthers = this.props.totalFiles - this.props.badFiles.length;
      buttons = /*#__PURE__*/react.createElement(DialogButtons/* default */.A, {
        primaryButton: (0,languageHandler._t)("upload_file|upload_n_others_button", {
          count: howManyOthers
        }),
        onPrimaryButtonClick: this.onUploadClick,
        hasCancel: true,
        cancelButton: (0,languageHandler._t)("upload_file|cancel_all_button"),
        onCancel: this.onCancelClick,
        focus: true
      });
    }
    return /*#__PURE__*/react.createElement(BaseDialog/* default */.A, {
      className: "mx_UploadFailureDialog",
      onFinished: this.onCancelClick,
      title: (0,languageHandler._t)("upload_file|error_title"),
      contentId: "mx_Dialog_content"
    }, /*#__PURE__*/react.createElement("div", {
      id: "mx_Dialog_content"
    }, message, preview), buttons);
  }
}
// EXTERNAL MODULE: ./src/components/views/dialogs/UploadConfirmDialog.tsx
var UploadConfirmDialog = __webpack_require__("./src/components/views/dialogs/UploadConfirmDialog.tsx");
// EXTERNAL MODULE: ./src/utils/image-media.ts + 2 modules
var image_media = __webpack_require__("./src/utils/image-media.ts");
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__("./src/utils/messages.ts");
// EXTERNAL MODULE: ./src/utils/local-room.ts + 1 modules
var local_room = __webpack_require__("./src/utils/local-room.ts");
// EXTERNAL MODULE: ./src/utils/Image.ts
var utils_Image = __webpack_require__("./src/utils/Image.ts");
;// ./src/ContentMessages.ts

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.
Copyright 2019 New Vector Ltd
Copyright 2015, 2016 OpenMarket Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/
























// scraped out of a macOS hidpi (5660ppm) screenshot png
//                  5669 px (x-axis)      , 5669 px (y-axis)      , per metre
const PHYS_HIDPI = [0x00, 0x00, 0x16, 0x25, 0x00, 0x00, 0x16, 0x25, 0x01];
class UploadCanceledError extends Error {}
class UploadFailedError extends Error {
  constructor(cause) {
    super();
    this.cause = cause;
  }
}
/**
 * Load a file into a newly created image element.
 *
 * @param {File} imageFile The file to load in an image element.
 * @return {Promise} A promise that resolves with the html image element.
 */
async function loadImageElement(imageFile) {
  // Load the file into an html element
  const img = new Image();
  const objectUrl = URL.createObjectURL(imageFile);
  const imgPromise = new Promise((resolve, reject) => {
    img.onload = function () {
      URL.revokeObjectURL(objectUrl);
      resolve(img);
    };
    img.onerror = function (e) {
      reject(e);
    };
  });
  img.src = objectUrl;

  // check for hi-dpi PNGs and fudge display resolution as needed.
  // this is mainly needed for macOS screencaps
  let parsePromise = Promise.resolve(false);
  if (imageFile.type === "image/png") {
    // in practice macOS happens to order the chunks so they fall in
    // the first 0x1000 bytes (thanks to a massive ICC header).
    // Thus we could slice the file down to only sniff the first 0x1000
    // bytes (but this makes extractPngChunks choke on the corrupt file)
    const headers = imageFile; //.slice(0, 0x1000);
    parsePromise = readFileAsArrayBuffer(headers).then(arrayBuffer => {
      const buffer = new Uint8Array(arrayBuffer);
      const chunks = png_chunks_extract_default()(buffer);
      for (const chunk of chunks) {
        if (chunk.name === "pHYs") {
          if (chunk.data.byteLength !== PHYS_HIDPI.length) return false;
          return chunk.data.every((val, i) => val === PHYS_HIDPI[i]);
        }
      }
      return false;
    }).catch(e => {
      console.error("Failed to parse PNG", e);
      return false;
    });
  }
  const [hidpi] = await Promise.all([parsePromise, imgPromise]);
  const width = hidpi ? img.width >> 1 : img.width;
  const height = hidpi ? img.height >> 1 : img.height;
  return {
    width,
    height,
    img
  };
}

// Minimum size for image files before we generate a thumbnail for them.
const IMAGE_SIZE_THRESHOLD_THUMBNAIL = 1 << 15; // 32KB
// Minimum size improvement for image thumbnails, if both are not met then don't bother uploading thumbnail.
const IMAGE_THUMBNAIL_MIN_REDUCTION_SIZE = 1 << 16; // 1MB
const IMAGE_THUMBNAIL_MIN_REDUCTION_PERCENT = 0.1; // 10%
// We don't apply these thresholds to video thumbnails as a poster image is always useful
// and videos tend to be much larger.

// Image mime types for which to always include a thumbnail for even if it is larger than the input for wider support.
const ALWAYS_INCLUDE_THUMBNAIL = ["image/avif", "image/webp", "image/svg+xml"];

/**
 * Read the metadata for an image file and create and upload a thumbnail of the image.
 *
 * @param {MatrixClient} matrixClient A matrixClient to upload the thumbnail with.
 * @param {String} roomId The ID of the room the image will be uploaded in.
 * @param {File} imageFile The image to read and thumbnail.
 * @return {Promise} A promise that resolves with the attachment info.
 */
async function infoForImageFile(matrixClient, roomId, imageFile) {
  let thumbnailType = "image/png";
  if (imageFile.type === "image/jpeg") {
    thumbnailType = "image/jpeg";
  }

  // We don't await this immediately so it can happen in the background
  const isAnimatedPromise = (0,utils_Image/* blobIsAnimated */.t)(imageFile);
  const imageElement = await loadImageElement(imageFile);
  const result = await (0,image_media/* createThumbnail */.p)(imageElement.img, imageElement.width, imageElement.height, thumbnailType);
  const imageInfo = result.info;
  const isAnimated = await isAnimatedPromise;
  if (isAnimated !== undefined) {
    imageInfo["org.matrix.msc4230.is_animated"] = await isAnimatedPromise;
  }

  // For lesser supported image types, always include the thumbnail even if it is larger
  if (!ALWAYS_INCLUDE_THUMBNAIL.includes(imageFile.type)) {
    // we do all sizing checks here because we still rely on thumbnail generation for making a blurhash from.
    const sizeDifference = imageFile.size - imageInfo.thumbnail_info.size;
    if (
    // image is small enough already
    imageFile.size <= IMAGE_SIZE_THRESHOLD_THUMBNAIL ||
    // thumbnail is not sufficiently smaller than original
    sizeDifference <= IMAGE_THUMBNAIL_MIN_REDUCTION_SIZE && sizeDifference <= imageFile.size * IMAGE_THUMBNAIL_MIN_REDUCTION_PERCENT) {
      delete imageInfo["thumbnail_info"];
      return imageInfo;
    }
  }
  const uploadResult = await uploadFile(matrixClient, roomId, result.thumbnail);
  imageInfo["thumbnail_url"] = uploadResult.url;
  imageInfo["thumbnail_file"] = uploadResult.file;
  return imageInfo;
}

/**
 * Load a file into a newly created audio element and load the metadata
 *
 * @param {File} audioFile The file to load in an audio element.
 * @return {Promise} A promise that resolves with the audio element.
 */
function loadAudioElement(audioFile) {
  return new Promise((resolve, reject) => {
    // Load the file into a html element
    const audio = document.createElement("audio");
    audio.preload = "metadata";
    audio.muted = true;
    const reader = new FileReader();
    reader.onload = function (ev) {
      var _ev$target;
      audio.onloadedmetadata = async function () {
        resolve(audio);
      };
      audio.onerror = function (e) {
        reject(e);
      };
      audio.src = (_ev$target = ev.target) === null || _ev$target === void 0 ? void 0 : _ev$target.result;
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(audioFile);
  });
}

/**
 * Read the metadata for an audio file.
 *
 * @param {File} audioFile The audio to read.
 * @return {Promise} A promise that resolves with the attachment info.
 */
async function infoForAudioFile(audioFile) {
  const audio = await loadAudioElement(audioFile);
  return {
    duration: Math.ceil(audio.duration * 1000)
  };
}

/**
 * Load a file into a newly created video element and pull some strings
 * in an attempt to guarantee the first frame will be showing.
 *
 * @param {File} videoFile The file to load in a video element.
 * @return {Promise} A promise that resolves with the video element.
 */
function loadVideoElement(videoFile) {
  return new Promise((resolve, reject) => {
    // Load the file into a html element
    const video = document.createElement("video");
    video.preload = "metadata";
    video.playsInline = true;
    video.muted = true;
    const reader = new FileReader();
    reader.onload = function (ev) {
      var _ev$target2, _dataUrl;
      // Wait until we have enough data to thumbnail the first frame.
      video.onloadeddata = async function () {
        resolve(video);
        video.pause();
      };
      video.onerror = function (e) {
        reject(e);
      };
      let dataUrl = (_ev$target2 = ev.target) === null || _ev$target2 === void 0 ? void 0 : _ev$target2.result;
      // Chrome chokes on quicktime but likes mp4, and `file.type` is
      // read only, so do this horrible hack to unbreak quicktime
      if ((_dataUrl = dataUrl) !== null && _dataUrl !== void 0 && _dataUrl.startsWith("data:video/quicktime;")) {
        dataUrl = dataUrl.replace("data:video/quicktime;", "data:video/mp4;");
      }
      video.src = dataUrl;
      video.load();
      video.play();
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsDataURL(videoFile);
  });
}

/**
 * Read the metadata for a video file and create and upload a thumbnail of the video.
 *
 * @param {MatrixClient} matrixClient A matrixClient to upload the thumbnail with.
 * @param {String} roomId The ID of the room the video will be uploaded to.
 * @param {File} videoFile The video to read and thumbnail.
 * @return {Promise} A promise that resolves with the attachment info.
 */
function infoForVideoFile(matrixClient, roomId, videoFile) {
  const thumbnailType = "image/jpeg";
  const videoInfo = {};
  return loadVideoElement(videoFile).then(video => {
    videoInfo.duration = Math.ceil(video.duration * 1000);
    return (0,image_media/* createThumbnail */.p)(video, video.videoWidth, video.videoHeight, thumbnailType);
  }).then(result => {
    Object.assign(videoInfo, result.info);
    return uploadFile(matrixClient, roomId, result.thumbnail);
  }).then(result => {
    videoInfo.thumbnail_url = result.url;
    videoInfo.thumbnail_file = result.file;
    return videoInfo;
  });
}

/**
 * Read the file as an ArrayBuffer.
 * @param {File} file The file to read
 * @return {Promise} A promise that resolves with an ArrayBuffer when the file
 *   is read.
 */
function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      var _e$target;
      resolve((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result);
    };
    reader.onerror = function (e) {
      reject(e);
    };
    reader.readAsArrayBuffer(file);
  });
}

/**
 * Upload the file to the content repository.
 * If the room is encrypted then encrypt the file before uploading.
 *
 * @param {MatrixClient} matrixClient The matrix client to upload the file with.
 * @param {String} roomId The ID of the room being uploaded to.
 * @param {File} file The file to upload.
 * @param {Function?} progressHandler optional callback to be called when a chunk of
 *    data is uploaded.
 * @param {AbortController?} controller optional abortController to use for this upload.
 * @return {Promise} A promise that resolves with an object.
 *  If the file is unencrypted then the object will have a "url" key.
 *  If the file is encrypted then the object will have a "file" key.
 */
async function uploadFile(matrixClient, roomId, file, progressHandler, controller) {
  var _matrixClient$getCryp;
  const abortController = controller !== null && controller !== void 0 ? controller : new AbortController();

  // If the room is encrypted then encrypt the file before uploading it.
  if (await ((_matrixClient$getCryp = matrixClient.getCrypto()) === null || _matrixClient$getCryp === void 0 ? void 0 : _matrixClient$getCryp.isEncryptionEnabledInRoom(roomId))) {
    // First read the file into memory.
    const data = await readFileAsArrayBuffer(file);
    if (abortController.signal.aborted) throw new UploadCanceledError();

    // Then encrypt the file.
    const encryptResult = await browser_encrypt_attachment_default().encryptAttachment(data);
    if (abortController.signal.aborted) throw new UploadCanceledError();

    // Pass the encrypted data as a Blob to the uploader.
    const blob = new Blob([encryptResult.data]);
    let url;
    try {
      ({
        content_uri: url
      } = await matrixClient.uploadContent(blob, {
        progressHandler,
        abortController,
        includeFilename: false,
        type: "application/octet-stream"
      }));
    } catch (e) {
      if (abortController.signal.aborted) throw new UploadCanceledError();
      console.error("Failed to upload file", e);
      throw new UploadFailedError(e);
    }
    if (abortController.signal.aborted) throw new UploadCanceledError();

    // If the attachment is encrypted then bundle the URL along with the information
    // needed to decrypt the attachment and add it under a file key.
    return {
      file: _objectSpread(_objectSpread({}, encryptResult.info), {}, {
        url
      })
    };
  } else {
    let url;
    try {
      ({
        content_uri: url
      } = await matrixClient.uploadContent(file, {
        progressHandler,
        abortController
      }));
    } catch (e) {
      if (abortController.signal.aborted) throw new UploadCanceledError();
      console.error("Failed to upload file", e);
      throw new UploadFailedError(e);
    }
    if (abortController.signal.aborted) throw new UploadCanceledError();
    // If the attachment isn't encrypted then include the URL directly.
    return {
      url
    };
  }
}
class ContentMessages {
  constructor() {
    (0,defineProperty/* default */.A)(this, "inprogress", []);
    (0,defineProperty/* default */.A)(this, "mediaConfig", null);
  }
  sendStickerContentToRoom(url, roomId, threadId, info, text, matrixClient) {
    return (0,local_room/* doMaybeLocalRoomAction */.Y)(roomId, actualRoomId => matrixClient.sendStickerMessage(actualRoomId, threadId, url, info, text), matrixClient).catch(e => {
      logger/* logger */.vF.warn(`Failed to send content with URL ${url} to room ${roomId}`, e);
      throw e;
    });
  }
  getUploadLimit() {
    var _this$mediaConfig$mU, _this$mediaConfig;
    return (_this$mediaConfig$mU = (_this$mediaConfig = this.mediaConfig) === null || _this$mediaConfig === void 0 ? void 0 : _this$mediaConfig["m.upload.size"]) !== null && _this$mediaConfig$mU !== void 0 ? _this$mediaConfig$mU : null;
  }

  /**
   * Sends a list of files to a room.
   * @param files - The files to send.
   * @param roomId - The ID of the room to send the files to.
   * @param relation - The relation to the event being replied to.
   * @param replyToEvent - The event being replied to, if any.
   * @param matrixClient - The Matrix client to use for sending the files.
   * @param context - The context in which the files are being sent.
   * @returns A promise that resolves when the files have been sent.
   */
  async sendContentListToRoom(files, roomId, relation, replyToEvent, matrixClient, context = RoomContext/* TimelineRenderingType */.Ae.Room) {
    if (matrixClient.isGuest()) {
      dispatcher/* default */.A.dispatch({
        action: "require_registration"
      });
      return;
    }
    if (!this.mediaConfig) {
      // hot-path optimization to not flash a spinner if we don't need to
      const modal = Modal/* default */.Ay.createDialog(Spinner/* default */.A, undefined, "mx_Dialog_spinner");
      await Promise.race([this.ensureMediaConfigFetched(matrixClient), modal.finished]);
      if (!this.mediaConfig) {
        // User cancelled by clicking away on the spinner
        return;
      } else {
        modal.close();
      }
    }
    const tooBigFiles = [];
    const okFiles = [];
    for (const file of files) {
      if (this.isFileSizeAcceptable(file)) {
        okFiles.push(file);
      } else {
        tooBigFiles.push(file);
      }
    }
    if (tooBigFiles.length > 0) {
      const {
        finished
      } = Modal/* default */.Ay.createDialog(UploadFailureDialog, {
        badFiles: tooBigFiles,
        totalFiles: files.length,
        contentMessages: this
      });
      const [shouldContinue] = await finished;
      if (!shouldContinue) return;
    }
    let uploadAll = false;
    // Promise to complete before sending next file into room, used for synchronisation of file-sending
    // to match the order the files were specified in
    let promBefore = Promise.resolve();
    for (let i = 0; i < okFiles.length; ++i) {
      const file = okFiles[i];
      const loopPromiseBefore = promBefore;
      if (!uploadAll) {
        const {
          finished
        } = Modal/* default */.Ay.createDialog(UploadConfirmDialog/* default */.A, {
          file,
          currentIndex: i,
          totalFiles: okFiles.length
        });
        const [shouldContinue, shouldUploadAll] = await finished;
        if (!shouldContinue) break;
        if (shouldUploadAll) {
          uploadAll = true;
        }
      }
      promBefore = (0,local_room/* doMaybeLocalRoomAction */.Y)(roomId, actualRoomId => this.sendContentToRoom(file, actualRoomId, relation, matrixClient, replyToEvent !== null && replyToEvent !== void 0 ? replyToEvent : undefined, loopPromiseBefore), matrixClient);
    }
    if (replyToEvent) {
      // Clear event being replied to
      dispatcher/* default */.A.dispatch({
        action: "reply_to_event",
        event: null,
        context
      });
    }

    // Focus the correct composer
    dispatcher/* default */.A.dispatch({
      action: actions/* Action */.r.FocusSendMessageComposer,
      context
    });
  }
  getCurrentUploads(relation) {
    return this.inprogress.filter(roomUpload => {
      const noRelation = !relation && !roomUpload.relation;
      const matchingRelation = relation && roomUpload.relation && relation.rel_type === roomUpload.relation.rel_type && relation.event_id === roomUpload.relation.event_id;
      return (noRelation || matchingRelation) && !roomUpload.cancelled;
    });
  }
  cancelUpload(upload) {
    upload.abort();
    dispatcher/* default */.A.dispatch({
      action: actions/* Action */.r.UploadCanceled,
      upload
    });
  }
  async sendContentToRoom(file, roomId, relation, matrixClient, replyToEvent, promBefore) {
    const fileName = file.name || (0,languageHandler._t)("common|attachment");
    const content = {
      body: fileName,
      info: {
        size: file.size
      },
      msgtype: matrix.MsgType.File // set more specifically later
    };

    // Attach mentions, which really only applies if there's a replyToEvent.
    (0,messages/* attachMentions */.L)(matrixClient.getSafeUserId(), content, null, replyToEvent);
    (0,messages/* attachRelation */.g)(content, relation);
    if (replyToEvent) {
      (0,Reply/* addReplyToMessageContent */.fh)(content, replyToEvent);
    }
    if (SettingsStore/* default */.A.getValue("Performance.addSendMessageTimingMetadata")) {
      (0,sendTimePerformanceMetrics/* decorateStartSendingTime */.H)(content);
    }

    // if we have a mime type for the file, add it to the message metadata
    if (file.type) {
      content.info.mimetype = file.type;
    }
    const upload = new RoomUpload(roomId, fileName, relation, file.size);
    this.inprogress.push(upload);
    dispatcher/* default */.A.dispatch({
      action: actions/* Action */.r.UploadStarted,
      upload
    });
    function onProgress(progress) {
      upload.onProgress(progress);
      dispatcher/* default */.A.dispatch({
        action: actions/* Action */.r.UploadProgress,
        upload
      });
    }
    try {
      if (file.type.startsWith("image/")) {
        content.msgtype = matrix.MsgType.Image;
        try {
          const imageInfo = await infoForImageFile(matrixClient, roomId, file);
          Object.assign(content.info, imageInfo);
        } catch (e) {
          if (e instanceof UploadFailedError) {
            // re-throw to main upload error handler
            throw e;
          }
          // Otherwise we failed to thumbnail, fall back to uploading an m.file
          logger/* logger */.vF.error(e);
          content.msgtype = matrix.MsgType.File;
        }
      } else if (file.type.startsWith("audio/")) {
        content.msgtype = matrix.MsgType.Audio;
        try {
          const audioInfo = await infoForAudioFile(file);
          Object.assign(content.info, audioInfo);
        } catch (e) {
          // Failed to process audio file, fall back to uploading an m.file
          logger/* logger */.vF.error(e);
          content.msgtype = matrix.MsgType.File;
        }
      } else if (file.type.startsWith("video/")) {
        content.msgtype = matrix.MsgType.Video;
        try {
          const videoInfo = await infoForVideoFile(matrixClient, roomId, file);
          Object.assign(content.info, videoInfo);
        } catch (e) {
          // Failed to thumbnail, fall back to uploading an m.file
          logger/* logger */.vF.error(e);
          content.msgtype = matrix.MsgType.File;
        }
      } else {
        content.msgtype = matrix.MsgType.File;
      }
      if (upload.cancelled) throw new UploadCanceledError();
      const result = await uploadFile(matrixClient, roomId, file, onProgress, upload.abortController);
      content.file = result.file;
      content.url = result.url;
      if (upload.cancelled) throw new UploadCanceledError();
      // Await previous message being sent into the room
      if (promBefore) await promBefore;
      if (upload.cancelled) throw new UploadCanceledError();
      const threadId = (relation === null || relation === void 0 ? void 0 : relation.rel_type) === matrix.THREAD_RELATION_TYPE.name ? relation.event_id : null;
      const response = await matrixClient.sendMessage(roomId, threadId !== null && threadId !== void 0 ? threadId : null, content);
      if (SettingsStore/* default */.A.getValue("Performance.addSendMessageTimingMetadata")) {
        (0,sendTimePerformanceMetrics/* sendRoundTripMetric */._)(matrixClient, roomId, response.event_id);
      }
      dispatcher/* default */.A.dispatch({
        action: actions/* Action */.r.UploadFinished,
        upload
      });
      dispatcher/* default */.A.dispatch({
        action: "message_sent"
      });
    } catch (error) {
      // Unwrap UploadFailedError to get the underlying error
      const unwrappedError = error instanceof UploadFailedError && error.cause ? error.cause : error;

      // 413: File was too big or upset the server in some way:
      // clear the media size limit so we fetch it again next time we try to upload
      if (unwrappedError instanceof matrix.HTTPError && unwrappedError.httpStatus === 413) {
        this.mediaConfig = null;
      }
      if (!upload.cancelled) {
        let desc = (0,languageHandler._t)("upload_failed_generic", {
          fileName: upload.fileName
        });
        if (unwrappedError instanceof matrix.HTTPError && unwrappedError.httpStatus === 413) {
          desc = (0,languageHandler._t)("upload_failed_size", {
            fileName: upload.fileName
          });
        }
        Modal/* default */.Ay.createDialog(ErrorDialog/* default */.A, {
          title: (0,languageHandler._t)("upload_failed_title"),
          description: desc
        });
        dispatcher/* default */.A.dispatch({
          action: actions/* Action */.r.UploadFailed,
          upload,
          error
        });
      }
    } finally {
      (0,utils/* removeElement */.Nz)(this.inprogress, e => e.promise === upload.promise);
    }
  }
  isFileSizeAcceptable(file) {
    var _this$mediaConfig2;
    if (((_this$mediaConfig2 = this.mediaConfig) === null || _this$mediaConfig2 === void 0 ? void 0 : _this$mediaConfig2["m.upload.size"]) !== undefined && file.size > this.mediaConfig["m.upload.size"]) {
      return false;
    }
    return true;
  }
  ensureMediaConfigFetched(matrixClient) {
    if (this.mediaConfig !== null) return Promise.resolve();
    logger/* logger */.vF.log("[Media Config] Fetching");
    return matrixClient.getMediaConfig().then(config => {
      logger/* logger */.vF.log("[Media Config] Fetched config:", config);
      return config;
    }).catch(() => {
      // Media repo can't or won't report limits, so provide an empty object (no limits).
      logger/* logger */.vF.log("[Media Config] Could not fetch config, so not limiting uploads.");
      return {};
    }).then(config => {
      this.mediaConfig = config;
    });
  }
  static sharedInstance() {
    if (window.mxContentMessages === undefined) {
      window.mxContentMessages = new ContentMessages();
    }
    return window.mxContentMessages;
  }
}

/***/ },

/***/ "./src/sendTimePerformanceMetrics.ts"
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ decorateStartSendingTime),
/* harmony export */   _: () => (/* binding */ sendRoundTripMetric)
/* harmony export */ });
/*
Copyright 2024 New Vector Ltd.
Copyright 2021 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

/**
 * Decorates the given event content object with the "send start time". The
 * object will be modified in-place.
 * @param {object} content The event content.
 */
function decorateStartSendingTime(content) {
  content["io.element.performance_metrics"] = {
    sendStartTs: Date.now()
  };
}

/**
 * Called when an event decorated with `decorateStartSendingTime()` has been sent
 * by the server (the client now knows the event ID).
 * @param {MatrixClient} client The client to send as.
 * @param {string} inRoomId The room ID where the original event was sent.
 * @param {string} forEventId The event ID for the decorated event.
 */
function sendRoundTripMetric(client, inRoomId, forEventId) {
  // noinspection JSIgnoredPromiseFromCall
  client.sendEvent(inRoomId, "io.element.performance_metric", {
    "io.element.performance_metrics": {
      forEventId: forEventId,
      responseTs: Date.now(),
      kind: "send_time"
    }
  });
}

/***/ },

/***/ "../../node_modules/png-chunks-extract/index.js"
(module, __unused_webpack_exports, __webpack_require__) {

var crc32 = __webpack_require__("../../node_modules/png-chunks-extract/node_modules/crc-32/crc32.js")

module.exports = extractChunks

// Used for fast-ish conversion between uint8s and uint32s/int32s.
// Also required in order to remain agnostic for both Node Buffers and
// Uint8Arrays.
var uint8 = new Uint8Array(4)
var int32 = new Int32Array(uint8.buffer)
var uint32 = new Uint32Array(uint8.buffer)

function extractChunks (data) {
  if (data[0] !== 0x89) throw new Error('Invalid .png file header')
  if (data[1] !== 0x50) throw new Error('Invalid .png file header')
  if (data[2] !== 0x4E) throw new Error('Invalid .png file header')
  if (data[3] !== 0x47) throw new Error('Invalid .png file header')
  if (data[4] !== 0x0D) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')
  if (data[5] !== 0x0A) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')
  if (data[6] !== 0x1A) throw new Error('Invalid .png file header')
  if (data[7] !== 0x0A) throw new Error('Invalid .png file header: possibly caused by DOS-Unix line ending conversion?')

  var ended = false
  var chunks = []
  var idx = 8

  while (idx < data.length) {
    // Read the length of the current chunk,
    // which is stored as a Uint32.
    uint8[3] = data[idx++]
    uint8[2] = data[idx++]
    uint8[1] = data[idx++]
    uint8[0] = data[idx++]

    // Chunk includes name/type for CRC check (see below).
    var length = uint32[0] + 4
    var chunk = new Uint8Array(length)
    chunk[0] = data[idx++]
    chunk[1] = data[idx++]
    chunk[2] = data[idx++]
    chunk[3] = data[idx++]

    // Get the name in ASCII for identification.
    var name = (
      String.fromCharCode(chunk[0]) +
      String.fromCharCode(chunk[1]) +
      String.fromCharCode(chunk[2]) +
      String.fromCharCode(chunk[3])
    )

    // The IHDR header MUST come first.
    if (!chunks.length && name !== 'IHDR') {
      throw new Error('IHDR header missing')
    }

    // The IEND header marks the end of the file,
    // so on discovering it break out of the loop.
    if (name === 'IEND') {
      ended = true
      chunks.push({
        name: name,
        data: new Uint8Array(0)
      })

      break
    }

    // Read the contents of the chunk out of the main buffer.
    for (var i = 4; i < length; i++) {
      chunk[i] = data[idx++]
    }

    // Read out the CRC value for comparison.
    // It's stored as an Int32.
    uint8[3] = data[idx++]
    uint8[2] = data[idx++]
    uint8[1] = data[idx++]
    uint8[0] = data[idx++]

    var crcActual = int32[0]
    var crcExpect = crc32.buf(chunk)
    if (crcExpect !== crcActual) {
      throw new Error(
        'CRC values for ' + name + ' header do not match, PNG file is likely corrupted'
      )
    }

    // The chunk data is now copied to remove the 4 preceding
    // bytes used for the chunk name/type.
    var chunkData = new Uint8Array(chunk.buffer.slice(4))

    chunks.push({
      name: name,
      data: chunkData
    })
  }

  if (!ended) {
    throw new Error('.png file ended prematurely: no IEND header was found')
  }

  return chunks
}


/***/ },

/***/ "../../node_modules/png-chunks-extract/node_modules/crc-32/crc32.js"
(__unused_webpack_module, exports) {

/* crc32.js (C) 2014-2015 SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
var CRC32;
(function (factory) {
	if(typeof DO_NOT_EXPORT_CRC === 'undefined') {
		if(true) {
			factory(exports);
		} else // removed by dead control flow
{}
	} else {
		factory(CRC32 = {});
	}
}(function(CRC32) {
CRC32.version = '0.3.0';
/* see perf/crc32table.js */
function signed_crc_table() {
	var c = 0, table = new Array(256);

	for(var n =0; n != 256; ++n){
		c = n;
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
		table[n] = c;
	}

	return typeof Int32Array !== 'undefined' ? new Int32Array(table) : table;
}

var table = signed_crc_table();
/* charCodeAt is the best approach for binary strings */
var use_buffer = typeof Buffer !== 'undefined';
function crc32_bstr(bstr) {
	if(bstr.length > 32768) if(use_buffer) return crc32_buf_8(new Buffer(bstr));
	var crc = -1, L = bstr.length - 1;
	for(var i = 0; i < L;) {
		crc =  table[(crc ^ bstr.charCodeAt(i++)) & 0xFF] ^ (crc >>> 8);
		crc =  table[(crc ^ bstr.charCodeAt(i++)) & 0xFF] ^ (crc >>> 8);
	}
	if(i === L) crc = (crc >>> 8) ^ table[(crc ^ bstr.charCodeAt(i)) & 0xFF];
	return crc ^ -1;
}

function crc32_buf(buf) {
	if(buf.length > 10000) return crc32_buf_8(buf);
	for(var crc = -1, i = 0, L=buf.length-3; i < L;) {
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
	}
	while(i < L+3) crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
	return crc ^ -1;
}

function crc32_buf_8(buf) {
	for(var crc = -1, i = 0, L=buf.length-7; i < L;) {
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
		crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
	}
	while(i < L+7) crc = (crc >>> 8) ^ table[(crc^buf[i++])&0xFF];
	return crc ^ -1;
}

/* much much faster to intertwine utf8 and crc */
function crc32_str(str) {
	for(var crc = -1, i = 0, L=str.length, c, d; i < L;) {
		c = str.charCodeAt(i++);
		if(c < 0x80) {
			crc = (crc >>> 8) ^ table[(crc ^ c) & 0xFF];
		} else if(c < 0x800) {
			crc = (crc >>> 8) ^ table[(crc ^ (192|((c>>6)&31))) & 0xFF];
			crc = (crc >>> 8) ^ table[(crc ^ (128|(c&63))) & 0xFF];
		} else if(c >= 0xD800 && c < 0xE000) {
			c = (c&1023)+64; d = str.charCodeAt(i++) & 1023;
			crc = (crc >>> 8) ^ table[(crc ^ (240|((c>>8)&7))) & 0xFF];
			crc = (crc >>> 8) ^ table[(crc ^ (128|((c>>2)&63))) & 0xFF];
			crc = (crc >>> 8) ^ table[(crc ^ (128|((d>>6)&15)|(c&3))) & 0xFF];
			crc = (crc >>> 8) ^ table[(crc ^ (128|(d&63))) & 0xFF];
		} else {
			crc = (crc >>> 8) ^ table[(crc ^ (224|((c>>12)&15))) & 0xFF];
			crc = (crc >>> 8) ^ table[(crc ^ (128|((c>>6)&63))) & 0xFF];
			crc = (crc >>> 8) ^ table[(crc ^ (128|(c&63))) & 0xFF];
		}
	}
	return crc ^ -1;
}
CRC32.table = table;
CRC32.bstr = crc32_bstr;
CRC32.buf = crc32_buf;
CRC32.str = crc32_str;
}));


/***/ }

}]);
//# sourceMappingURL=9724.js.map