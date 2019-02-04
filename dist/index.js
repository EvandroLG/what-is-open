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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _places__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



document.addEventListener('DOMContentLoaded', async () => {
    const places = new _places__WEBPACK_IMPORTED_MODULE_0__["default"]();
    await places.getCurrentPosition();
    places.searchByOpenPlaces();

    const form = new _form__WEBPACK_IMPORTED_MODULE_1__["default"]();
    form.bindSubmit(places.searchByOpenPlaces.bind(places));
}, false);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Places; });
class Places {
    constructor() {
        this.coords = {
            lat: null,
            lng: null
        };

        this.placesServices = new google.maps.places.PlacesService(document.createElement('div'));
        this.elements = {};
        this.elements.list = document.getElementById('js-list');
    }

    _searchByPlaces(query, callback) {
        const request = {
            location: {
                lat: this.coords.lat,
                lng: this.coords.lng
            },

            keyword: query,

            fields: [
                'photos', 'formatted_address', 'name',
                'rating', 'opening_hours', 'geometry'
            ],

            rankBy: google.maps.places.RankBy.PROMINENCE,
            radius: '20000',
        };

        this.placesServices.nearbySearch(request, callback); 
    }

    render(datas) {
        if (!datas.length) {
            return '';
        }

        console.log(datas[0]);

        return `
            <ul>
            ${
                datas.map(data => {
                    return `
                        <li class="list__item">
                            <h2 style="background-image: url(${data.icon})"
                                class="list__name"
                            >
                                ${data.name}
                            </h2>
                            <span class="list__address">
                                ${data.vicinity}
                            </span>
                        </li>        
                    `;
                }).join('')
            }
            </ul>
        `;
    }

    updateHTML(html) {
        this.elements.list.innerHTML = html;
    }

    searchByOpenPlaces(query) {
        this._searchByPlaces(query, (results, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }

            const output = results.filter(result => {
                return result.opening_hours && result.opening_hours.open_now;
            });

            this.updateHTML(this.render(output));
        });
    }

    getCurrentPosition() {
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(data => {
                this.coords.lat = data.coords.latitude;
                this.coords.lng = data.coords.longitude;

                resolve();
            });
        });
    }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


class Form {
    constructor() {
        this.elements = {};
        this.elements.form = document.getElementById('js-form');
        this.elements.input = document.getElementById('js-search');
    }

    bindSubmit(callback) {
        const input = this.elements.input;

        this.elements.form.addEventListener('keyup', Object(_debounce__WEBPACK_IMPORTED_MODULE_0__["default"])((e) => {
            e.preventDefault();
            callback(input.value);
        }, 600));
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((callback, wait) => {
    let timeout;

    return (...args) => {
        const context = undefined;
        clearTimeout(timeout); 
        timeout = setTimeout(() => callback.apply(context, args), wait);
    }
});


/***/ })
/******/ ]);