webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Hello__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Page___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Page__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AnotherPage__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_AnotherPage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_AnotherPage__);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Hello',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Hello___default.a
  }, { path: '/page', component: __WEBPACK_IMPORTED_MODULE_3__components_Page___default.a }, { path: '/another-page', component: __WEBPACK_IMPORTED_MODULE_4__components_AnotherPage___default.a }]
}));

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)
__webpack_require__(11)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  name: 'footer',
  data() {
    return {
      isMobile: false,
      activeClass: 'is-active'
    };
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      activeItem: 'about',
      showModal: false
    };
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem;
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_charming__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_charming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_charming__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('my-component', {
    template: '<div> ok </div>'
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('child', {
    // camelCase in JavaScript
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
});




{
    // from http://www.quirksmode.org/js/events_properties.html#position
    const getMousePos = ev => {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        } else if (ev.clientX || ev.clientY) {
            posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy };
    };

    class Letter {
        constructor(letter) {
            this.DOM = {};
            this.CONFIG = {
                color: '#fff',
                trailDelay: 0,
                maxScaleX: 1,
                minScaleX: 0.8,
                maxScaleY: 1.6,
                minScaleY: 1,
                stretchTransition: 'transform 0.4s cubic-bezier(0.1,1,0.3,1)',
                reverseAnim: {
                    duration: 1000,
                    easing: 'easeOutElastic',
                    elasticity: 600,
                    scaleY: 1,
                    scaleX: 1
                }
            };
            this.DOM.letter = letter;
            this.layout();
            this.initEvents();
        }
        layout() {
            this.DOM.letterInner = document.createElement('span');
            this.DOM.letterInner.innerHTML = this.DOM.letter.innerHTML;
            this.DOM.letter.innerHTML = '';
            this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            this.DOM.svg.setAttribute('width', '100px');
            this.DOM.svg.setAttribute('height', '150px');
            this.DOM.svg.setAttribute('viewBox', '0 0 100 150');
            this.DOM.svg.setAttribute('preserveAspectRatio', 'xMaxYMax meet');

            const r = 11;
            for (let i = 0; i < 3; i++) {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', 39 * i + r);
                circle.setAttribute('cy', 139);
                circle.setAttribute('r', r);
                this.DOM.svg.appendChild(circle);
            };
            this.DOM.circles = Array.from(this.DOM.svg.querySelectorAll('circle'));
            this.DOM.letter.appendChild(this.DOM.svg);
            this.DOM.letter.appendChild(this.DOM.letterInner);
        }
        stretch(ev) {
            const mousepos = getMousePos(ev);
            const docScrolls = { left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop };
            const bounds = this.DOM.letter.getBoundingClientRect();
            const relmousepos = {
                x: mousepos.x - bounds.left - docScrolls.left,
                y: mousepos.y - bounds.top - docScrolls.top
            };
            __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.remove(this.DOM.letterInner);
            this.DOM.letterInner.style.transformOrigin = '50% 100%';
            const sX = (this.CONFIG.maxScaleX - this.CONFIG.minScaleX) / bounds.height * relmousepos.y + this.CONFIG.minScaleX;
            const sY = (this.CONFIG.minScaleY - this.CONFIG.maxScaleY) / bounds.height * relmousepos.y + this.CONFIG.maxScaleY;
            this.DOM.letterInner.style.transform = `scaleX(${sX}) scaleY(${sY})`;
        }
        initEvents() {
            this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
                this.isActive = true;
                requestAnimationFrame(() => this.DOM.letterInner.style.transition = this.CONFIG.stretchTransition);
            }, 50);

            this.mousemoveFn = ev => {
                if (!this.isActive) return;
                requestAnimationFrame(() => this.stretch(ev));
            };
            this.mouseleaveFn = () => {
                clearTimeout(this.mouseTimeout);
                if (!this.isActive) return;
                this.isActive = false;
                this.DOM.letterInner.style.transition = 'none';
                requestAnimationFrame(() => {
                    const scaleYCurrent = __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.getValue(this.DOM.letterInner, 'scaleY');

                    __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.remove(this.DOM.letterInner);
                    let animOpts = { targets: this.DOM.letterInner };
                    __WEBPACK_IMPORTED_MODULE_3_animejs___default()(Object.assign(animOpts, this.CONFIG.reverseAnim));

                    if (scaleYCurrent > 1.4) {
                        __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.remove(this.DOM.circles);
                        __WEBPACK_IMPORTED_MODULE_3_animejs___default()({
                            targets: this.DOM.circles,
                            duration: (t, i) => {
                                return __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.random(300, 400);
                            },
                            easing: [0.1, 1, 0.3, 1],
                            delay: (t, i) => {
                                return i * 40 + parseInt(this.CONFIG.trailDelay);
                            },
                            opacity: [{ value: 1, duration: 10, easing: 'linear' }, { value: 0, duration: 200, easing: 'linear' }],
                            translateY: (t, i) => {
                                return [100, __WEBPACK_IMPORTED_MODULE_3_animejs___default.a.random(-250, -120)];
                            },
                            scaleX: [2, 0.3],
                            scaleY: [2, 2]
                        });
                    }
                });
            };
            this.DOM.letter.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.letter.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.letter.addEventListener('mouseleave', this.mouseleaveFn);
            this.DOM.letter.addEventListener('touchstart', this.mouseenterFn);
            this.DOM.letter.addEventListener('touchend', this.mouseleaveFn);
        }
    }

    class Word {
        constructor(word) {
            this.DOM = {};
            this.DOM.word = word;
            this.layout();
        }
        layout() {
            __WEBPACK_IMPORTED_MODULE_4_charming___default()(this.DOM.word, { classPrefix: 'letter' });
            Array.from(this.DOM.word.querySelectorAll('span')).forEach(letter => new Letter(letter));
        }
    }

    Array.from(document.querySelectorAll('.word')).forEach(word => new Word(word));
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(9)

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(15),
  /* scopeId */
  "data-v-05ef3f36",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(18),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container has-text-left"
  }, [_c('h1', {
    staticClass: "title is-2"
  }, [_vm._v("Vue 2.0")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n            A simple responsive project based on "), _c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-cli"
    }
  }, [_vm._v("vue-cli")]), _vm._v(" and "), _c('a', {
    attrs: {
      "href": "https://github.com/vuejs/vue-router"
    }
  }, [_vm._v("vue-router")]), _vm._v(" with reload, "), _c('a', {
    attrs: {
      "href": "https://github.com/sass/node-sass"
    }
  }, [_vm._v("node-sass")]), _vm._v(", and "), _c('a', {
    attrs: {
      "href": "https://github.com/jgthms/bulma"
    }
  }, [_vm._v("Bulma")])])])])])])
}]}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('nav', {
    staticClass: "nav"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "nav-left is-hidden-tablet",
    class: [_vm.isMobile ? _vm.activeClass : '']
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('div', {
    staticClass: "nav-left"
  }, [_c('router-link', {
    staticClass: "nav-item is-tab is-hidden-mobile",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab is-hidden-mobile",
    attrs: {
      "to": "/page",
      "exact": ""
    }
  }, [_vm._v("Page")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab is-hidden-mobile",
    attrs: {
      "to": "/another-page",
      "exact": ""
    }
  }, [_vm._v("Another Page")])], 1), _vm._v(" "), _c('span', {
    staticClass: "nav-toggle",
    class: [_vm.isMobile ? _vm.activeClass : ''],
    on: {
      "click": function($event) {
        _vm.isMobile = !_vm.isMobile
      }
    }
  }, [_c('span'), _vm._v(" "), _c('span'), _vm._v(" "), _c('span')]), _vm._v(" "), _c('div', {
    staticClass: "nav-right nav-menu",
    class: [_vm.isMobile ? _vm.activeClass : '']
  }, [_c('router-link', {
    staticClass: "nav-item is-tab is-hidden-tablet",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab is-hidden-tablet",
    attrs: {
      "to": "/page",
      "exact": ""
    }
  }, [_vm._v("Page")]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item is-tab is-hidden-tablet",
    attrs: {
      "to": "/another-page",
      "exact": ""
    }
  }, [_vm._v("Another Page")]), _vm._v(" "), _vm._m(3)], 1)])]), _vm._v(" "), _c('router-view')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "nav-item is-hidden-tablet",
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-linkedin"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "nav-item is-hidden-tablet",
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-codepen"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "nav-item is-hidden-tablet",
    attrs: {
      "href": "#"
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-instagram"
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nav-right"
  }, [_c('a', {
    staticClass: "nav-item is-hidden-mobile",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-linkedin fa-3x"
  })])]), _vm._v(" "), _c('a', {
    staticClass: "nav-item is-hidden-mobile",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-codepen fa-3x"
  })])]), _vm._v(" "), _c('a', {
    staticClass: "nav-item is-hidden-mobile",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_c('span', {
    staticClass: "icon is-medium"
  }, [_c('i', {
    staticClass: "fa fa-instagram"
  })])])])
}]}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero-body"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "title",
    on: {
      "click": function($event) {
        _vm.showModal = !_vm.showModal
      }
    }
  }, [_vm._v("\n            Click to launch sample modal\n          ")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("\n            With sample active links\n          ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal",
    class: {
      active: _vm.showModal
    }
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": function($event) {
        _vm.showModal = !_vm.showModal
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-card"
  }, [_c('header', {
    staticClass: "modal-card-head has-text-left"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v("Modal")]), _vm._v(" "), _c('button', {
    staticClass: "delete",
    on: {
      "click": function($event) {
        _vm.showModal = !_vm.showModal
      }
    }
  })]), _vm._v(" "), _c('section', {
    staticClass: "modal-card-body"
  }, [_c('div', {
    staticClass: "tabs"
  }, [_c('ul', [_c('li', {
    class: {
      active: _vm.isActive('about')
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.setActive('about')
      }
    }
  }, [_vm._v("About")])]), _vm._v(" "), _c('li', {
    class: {
      active: _vm.isActive('screenshots')
    }
  }, [_c('a', {
    on: {
      "click": function($event) {
        _vm.setActive('screenshots')
      }
    }
  }, [_vm._v("Screenshots")])])])]), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [(_vm.isActive('screenshots')) ? _c('div', {
    staticClass: "card-image"
  }, [_vm._m(0)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [(_vm.isActive('screenshots')) ? _c('div', {
    staticClass: "card-image"
  }, [_vm._m(1)]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [(_vm.isActive('screenshots')) ? _c('div', {
    staticClass: "card-image"
  }, [_vm._m(2)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column is-two-thirds"
  }, [(_vm.isActive('about')) ? _c('section', {
    staticClass: "content has-text-left"
  }, [_c('h2', {
    staticClass: "detail"
  }, [_vm._v("Section")]), _vm._v(" "), _c('p', [_vm._v("\n                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.\n                            ")]), _c('p', [_vm._v("\n                                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.\n                            ")]), _c('p', [_vm._v("\n                                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.\n                            ")])]) : _vm._e()])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('figure', {
    staticClass: "image is-4by3"
  }, [_c('img', {
    attrs: {
      "src": "http://via.placeholder.com/480x320"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('figure', {
    staticClass: "image is-4by3"
  }, [_c('img', {
    attrs: {
      "src": "http://via.placeholder.com/480x320"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('figure', {
    staticClass: "image is-4by3"
  }, [_c('img', {
    attrs: {
      "src": "http://via.placeholder.com/480x320"
    }
  })])
}]}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "section"
  }, [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-vertical is-8"
  }, [_c('div', {
    staticClass: "tile"
  }, [_c('div', {
    staticClass: "tile is-parent is-vertical"
  }, [_c('article', {
    staticClass: "tile is-child notification is-primary"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("Vertical...")]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("Top tile")])]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child notification is-success"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("...tiles")]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("Bottom tile")])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child notification is-warning"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("Middle tile")]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("With an image")]), _vm._v(" "), _c('figure', {
    staticClass: "image is-4by3"
  }, [_c('img', {
    attrs: {
      "src": "http://bulma.io/images/placeholders/640x480.png"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child notification is-info"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("Wide tile")]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("Aligned with the right tile")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child notification is-danger"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("Tall tile")]), _vm._v(" "), _c('p', {
    staticClass: "subtitle"
  }, [_vm._v("With even more content")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  })])])])])])
}]}

/***/ })
],[8]);
//# sourceMappingURL=app.62fa166186205798a4d3.js.map