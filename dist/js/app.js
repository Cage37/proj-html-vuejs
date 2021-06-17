/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: "#app",
  data: {
    linkHeader: [{
      nameLink: "Home",
      link: ""
    }, {
      nameLink: "Pages",
      link: ""
    }, {
      nameLink: "Courses",
      link: ""
    }, {
      nameLink: "Features",
      link: ""
    }, {
      nameLink: "Blog",
      link: ""
    }, {
      nameLink: "Shop",
      link: ""
    }],
    latestCoursesCard: [{
      image: "./dist/images/motivation-course-06-480x298.jpg",
      cardPrice: "$30.",
      cardPriceCent: "00",
      cardTitle: "How to be Successful: Create A Growth Mindset For Success",
      cardLessons: "3 Lessons",
      cardStudents: "50 Students"
    }, {
      image: "./dist/images/motivation-course-05-480x298.jpg",
      cardPrice: "$30.",
      cardPriceCent: "00",
      cardTitle: "How to Build Confidence in Your Abilities",
      cardLessons: "1 Lesson",
      cardStudents: "50 Students"
    }, {
      image: "./dist/images/motivation-course-04-480x298.jpg",
      cardPrice: "$20.",
      cardPriceCent: "00",
      cardTitle: "Productivity Machine - Focus in a Distracted World",
      cardLessons: "5 Lessons",
      cardStudents: "50 Students"
    }, {
      image: "./dist/images/motivation-course-03-480x298.jpg",
      cardPrice: "$20.",
      cardPriceCent: "00",
      cardTitle: "Effective Time Management Mastery - Complete Guide",
      cardLessons: "18 Lessons",
      cardStudents: "50 Students"
    }, {
      image: "./dist/images/motivation-course-02-480x298.jpg",
      cardPrice: "$25.",
      cardPriceCent: "99",
      cardTitle: "Body Language Secrets for Entrepreneurs",
      cardLessons: "19 Lessons",
      cardStudents: "50 Students"
    }, {
      image: "./dist/images/motivation-course-01-480x298.jpg",
      cardPrice: "$19.",
      cardPriceCent: "99",
      cardTitle: "Management Skills: The Science of Leadership",
      cardLessons: "17 Lessons",
      cardStudents: "50 Students"
    }],
    blogUpdateCard: [{
      image: "./dist/images/motivation-blog-04-480x325.jpg",
      cardDate: "May, 13, 2020",
      cardTitle: "How to Stay True to Your Personal Brand",
      cardParagraph: "When it comes to your business or career, you want ..."
    }, {
      image: "./dist/images/motivation-blog-03-480x325.jpg",
      cardDate: "May, 13, 2020",
      cardTitle: "5 Vital Lessons in 5 Years of Freelancing",
      cardParagraph: "Being self-employed and working from home, it's easy to get"
    }, {
      image: "./dist/images/motivation-blog-02-480x325.jpg",
      cardDate: "May, 13, 2020",
      cardTitle: "11 Super Useful Tips for Small-Business Owners",
      cardParagraph: "Being a small-business owner poses a ton of challenges. We ..."
    }, {
      image: "./dist/images/motivation-blog-01-480x325.jpg",
      cardDate: "May, 13, 2020",
      cardTitle: "How to Give Yourself Grace to Start Again",
      cardParagraph: "Forgive yourself for bad habits you may have started or ..."
    }],
    linkFooterExplore: [{
      nameLink: "Start here",
      link: ""
    }, {
      nameLink: "Blog",
      link: ""
    }, {
      nameLink: "About us",
      link: ""
    }],
    linkFooterContact: [{
      nameLink: "Success story",
      link: ""
    }, {
      nameLink: "Courses",
      link: ""
    }, {
      nameLink: "Contact us",
      link: ""
    }],
    linkFooterInfo: [{
      nameLink: "Membership",
      link: ""
    }, {
      nameLink: "Purchase guide",
      link: ""
    }, {
      nameLink: "Privacy policy",
      link: ""
    }, {
      nameLink: "Terms of service",
      link: ""
    }]
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

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
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;