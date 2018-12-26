/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Form {\n    constructor() {\n        this.elements = {};\n        this.elements.form = document.getElementById('js-form');\n        this.elements.input = document.getElementById('js-search');\n    }\n\n    bindSubmit(callback) {\n        const input = this.elements.input;\n\n        this.elements.form.addEventListener('submit', e => {\n            e.preventDefault();\n            callback(input.value);\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mb3JtLmpzPzc2YjMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWZvcm0nKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1zZWFyY2gnKTtcbiAgICB9XG5cbiAgICBiaW5kU3VibWl0KGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5lbGVtZW50cy5pbnB1dDtcblxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjYWxsYmFjayhpbnB1dC52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/form.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _places__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places */ \"./src/places.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n    const places = new _places__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    await places.getCurrentPosition();\n    places.searchByOpenPlaces();\n\n    const form = new _form__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    form.bindSubmit(places.searchByOpenPlaces.bind(places));\n}, false);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxhY2VzIGZyb20gJy4vcGxhY2VzJztcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VzID0gbmV3IFBsYWNlcygpO1xuICAgIGF3YWl0IHBsYWNlcy5nZXRDdXJyZW50UG9zaXRpb24oKTtcbiAgICBwbGFjZXMuc2VhcmNoQnlPcGVuUGxhY2VzKCk7XG5cbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm0oKTtcbiAgICBmb3JtLmJpbmRTdWJtaXQocGxhY2VzLnNlYXJjaEJ5T3BlblBsYWNlcy5iaW5kKHBsYWNlcykpO1xufSwgZmFsc2UpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/places.js":
/*!***********************!*\
  !*** ./src/places.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Places {\n    constructor() {\n        this.coords = {\n            lat: null,\n            lng: null\n        };\n\n        this.placesServices = new google.maps.places.PlacesService(document.createElement('div'));\n        this.elements = {};\n        this.elements.list = document.getElementById('js-list');\n    }\n\n    _searchByPlaces(query, callback) {\n        const request = {\n            location: {\n                lat: this.coords.lat,\n                lng: this.coords.lng\n            },\n\n            keyword: query,\n\n            fields: [\n                'photos', 'formatted_address', 'name',\n                'rating', 'opening_hours', 'geometry'\n            ],\n\n            rankBy: google.maps.places.RankBy.PROMINENCE,\n            radius: '20000',\n        };\n\n        this.placesServices.nearbySearch(request, callback); \n    }\n\n    render(datas) {\n        if (!datas.length) {\n            return '';\n        }\n\n        console.log(datas);\n\n        return `\n            <ul>\n            ${\n                datas.map(data => {\n                    return `\n                        <li>\n                            <h2>${data.name}</h2>\n                        </li>        \n                    `\n                })\n            }\n            </ul>\n        `;\n    }\n\n    updateHTML(html) {\n        this.elements.list.innerHTML = html;\n    }\n\n    searchByOpenPlaces(query) {\n        this._searchByPlaces(query, (results, status) => {\n            if (status !== google.maps.places.PlacesServiceStatus.OK) {\n                return;\n            }\n\n            const output = results.filter(result => {\n                return result.opening_hours && result.opening_hours.open_now;\n            });\n\n            this.updateHTML(this.render(output));\n        });\n    }\n\n    getCurrentPosition() {\n        return new Promise(resolve => {\n            navigator.geolocation.getCurrentPosition(data => {\n                this.coords.lat = data.coords.latitude;\n                this.coords.lng = data.coords.longitude;\n\n                resolve();\n            });\n        });\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Places);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxhY2VzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BsYWNlcy5qcz85YTI2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYWNlcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29vcmRzID0ge1xuICAgICAgICAgICAgbGF0OiBudWxsLFxuICAgICAgICAgICAgbG5nOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlcyA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWxpc3QnKTtcbiAgICB9XG5cbiAgICBfc2VhcmNoQnlQbGFjZXMocXVlcnksIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhdDogdGhpcy5jb29yZHMubGF0LFxuICAgICAgICAgICAgICAgIGxuZzogdGhpcy5jb29yZHMubG5nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBrZXl3b3JkOiBxdWVyeSxcblxuICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgJ3Bob3RvcycsICdmb3JtYXR0ZWRfYWRkcmVzcycsICduYW1lJyxcbiAgICAgICAgICAgICAgICAncmF0aW5nJywgJ29wZW5pbmdfaG91cnMnLCAnZ2VvbWV0cnknXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICByYW5rQnk6IGdvb2dsZS5tYXBzLnBsYWNlcy5SYW5rQnkuUFJPTUlORU5DRSxcbiAgICAgICAgICAgIHJhZGl1czogJzIwMDAwJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2VzLm5lYXJieVNlYXJjaChyZXF1ZXN0LCBjYWxsYmFjayk7IFxuICAgIH1cblxuICAgIHJlbmRlcihkYXRhcykge1xuICAgICAgICBpZiAoIWRhdGFzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YXMpO1xuXG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgIGRhdGFzLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+JHtkYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHVwZGF0ZUhUTUwoaHRtbCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmxpc3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG5cbiAgICBzZWFyY2hCeU9wZW5QbGFjZXMocXVlcnkpIHtcbiAgICAgICAgdGhpcy5fc2VhcmNoQnlQbGFjZXMocXVlcnksIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IGdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSByZXN1bHRzLmZpbHRlcihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQub3BlbmluZ19ob3VycyAmJiByZXN1bHQub3BlbmluZ19ob3Vycy5vcGVuX25vdztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhUTUwodGhpcy5yZW5kZXIob3V0cHV0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEN1cnJlbnRQb3NpdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkcy5sYXQgPSBkYXRhLmNvb3Jkcy5sYXRpdHVkZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3Jkcy5sbmcgPSBkYXRhLmNvb3Jkcy5sb25naXR1ZGU7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGFjZXM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/places.js\n");

/***/ })

/******/ });