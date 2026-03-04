/******/ (() => { // webpackBootstrap
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
/************************************************************************/
/*
Copyright 2024 New Vector Ltd.
Copyright 2022 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

let hasCalled = false;
function remoteRender(event) {
  const data = event.data;

  // If we're handling secondary calls, start from scratch
  if (hasCalled) {
    document.body.replaceWith(document.createElement("BODY"));
  }
  hasCalled = true;
  const img = document.createElement("span"); // we'll mask it as an image
  img.id = "img";
  const a = document.createElement("a");
  a.id = "a";
  a.rel = "noreferrer noopener";
  a.download = data.download;
  // @ts-ignore
  a.style = data.style;
  a.style.fontFamily = "Arial, Helvetica, Sans-Serif";
  a.href = window.URL.createObjectURL(data.blob);
  a.appendChild(img);
  a.appendChild(document.createTextNode(data.textContent));

  // Apply image style after so we can steal the anchor's colour.
  // Style copied from a rendered version of mx_MFileBody_download_icon
  if (data.imgStyle) {
    // @ts-ignore
    img.style = data.imgStyle;
  } else {
    img.style.width = "20px";
    img.style.height = "20px";
    img.style.webkitMaskSize = "20px";
    img.style.webkitMaskPosition = "center";
    img.style.webkitMaskRepeat = "no-repeat";
    img.style.display = "inline-block";
    img.style.webkitMaskImage = `url('${data.imgSrc}')`;
    img.style.backgroundColor = `${a.style.color}`;
  }
  const body = document.body;
  // Don't display scrollbars if the link takes more than one line to display.
  body.style.margin = "0px";
  body.style.overflow = "hidden";
  body.appendChild(a);
  if (event.data.auto) {
    a.click(); // try to trigger download automatically
  }
}
window.onmessage = function (e) {
  if (e.origin === window.location.origin) {
    if (e.data.blob) remoteRender(e);
  }
};
/******/ })()
;
//# sourceMappingURL=usercontent.js.map