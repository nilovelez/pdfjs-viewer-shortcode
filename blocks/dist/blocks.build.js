/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/src/block/block.js":
/*!***********************************!*\
  !*** ./blocks/src/block/block.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
var __ = wp.i18n.__;


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
  MediaUpload = _wp$blockEditor.MediaUpload,
  InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
  Button = _wp$components.Button,
  PanelRow = _wp$components.PanelRow,
  PanelBody = _wp$components.PanelBody,
  ToggleControl = _wp$components.ToggleControl,
  RangeControl = _wp$components.RangeControl,
  SelectControl = _wp$components.SelectControl,
  TextControl = _wp$components.TextControl;
var defaultHeight = 800;
var defaultWidth = 0;
var ALLOWED_MEDIA_TYPES = ['application/pdf'];
registerBlockType('pdfjsblock/pdfjs-embed', {
  title: __('Embed PDF.js Viewer', 'pdfjs-viewer-shortcode'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    imageURL: {
      type: 'string'
    },
    imgID: {
      type: 'number'
    },
    imgTitle: {
      type: 'string',
      "default": 'PDF File'
    },
    showDownload: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_download_button
    },
    showPrint: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_print_button
    },
    showFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_link
    },
    openFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_link_target
    },
    fullscreenText: {
      type: 'string',
      "default": window.pdfjs_options.pdfjs_fullscreen_link_text ? window.pdfjs_options.pdfjs_fullscreen_link_text : 'View Fullscreen'
    },
    viewerHeight: {
      type: 'number',
      "default": window.pdfjs_options.pdfjs_embed_height ? Number(window.pdfjs_options.pdfjs_embed_height) : 800
    },
    viewerWidth: {
      type: 'number',
      "default": window.pdfjs_options.pdfjs_embed_width ? Number(window.pdfjs_options.pdfjs_embed_width) : 0
    },
    viewerScale: {
      type: 'string',
      "default": window.pdfjs_options.pdfjs_viewer_scale ? window.pdfjs_options.pdfjs_viewer_scale : 'auto'
    }
  },
  keywords: [__('PDF Selector', 'pdfjs-viewer-shortcode')],
  edit: function edit(props) {
    var onFileSelect = function onFileSelect(img) {
      props.setAttributes({
        imageURL: img.url,
        imgID: img.id,
        imgTitle: img.title
      });
    };
    var onRemoveImg = function onRemoveImg() {
      props.setAttributes({
        imageURL: null,
        imgID: null,
        imgTitle: null
      });
    };
    var onToggleDownload = function onToggleDownload(value) {
      props.setAttributes({
        showDownload: value
      });
    };
    var onTogglePrint = function onTogglePrint(value) {
      props.setAttributes({
        showPrint: value
      });
    };
    var onToggleFullscreen = function onToggleFullscreen(value) {
      props.setAttributes({
        showFullscreen: value
      });
    };
    var onToggleOpenFullscreen = function onToggleOpenFullscreen(value) {
      props.setAttributes({
        openFullscreen: value
      });
    };
    var onHeightChange = function onHeightChange(value) {
      // handle the reset button
      if (undefined === value) {
        value = defaultHeight;
      }
      props.setAttributes({
        viewerHeight: value
      });
    };
    var onWidthChange = function onWidthChange(value) {
      // handle the reset button
      if (undefined === value) {
        value = defaultWidth;
      }
      props.setAttributes({
        viewerWidth: value
      });
    };
    var onFullscreenTextChange = function onFullscreenTextChange(value) {
      value = value.replace(/(<([^>]+)>)/gi, '');
      props.setAttributes({
        fullscreenText: value
      });
    };

    // Compute preview iframe src and width for editor preview
    var viewerBase = window.pdfjs_options && window.pdfjs_options.pdfjs_viewer_url ? window.pdfjs_options.pdfjs_viewer_url : null;
    var iframeSrc = props.attributes.imageURL ? viewerBase ? "".concat(viewerBase, "?file=").concat(encodeURIComponent(props.attributes.imageURL), "&attachment_id=").concat(props.attributes.imgID) : props.attributes.imageURL : '';
    var viewerWidthAttr = props.attributes.viewerWidth === undefined || props.attributes.viewerWidth === 0 ? '100%' : "".concat(props.attributes.viewerWidth, "px");
    return [wp.element.createElement(InspectorControls, {
      key: "i1"
    }, wp.element.createElement(PanelBody, {
      title: __('PDF.js Options', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Save Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showDownload ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Print Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showPrint ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showPrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Fullscreen Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showFullscreen ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showFullscreen,
      onChange: onToggleFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Open Fullscreen in new tab?', 'pdfjs-viewer-shortcode'),
      help: props.attributes.openFullscreen ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.openFullscreen,
      onChange: onToggleOpenFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Fullscreen Text",
      value: props.attributes.fullscreenText,
      onChange: onFullscreenTextChange
    }))), wp.element.createElement(PanelBody, {
      title: __('Embed Height', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(RangeControl, {
      label: __('Viewer Height (pixels)', 'pdfjs-viewer-shortcode'),
      value: props.attributes.viewerHeight,
      onChange: onHeightChange,
      min: 0,
      max: 5000,
      allowReset: true,
      initialPosition: defaultHeight
    })), wp.element.createElement(PanelBody, {
      title: __('Embed Width', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(RangeControl, {
      label: __('Viewer Width (pixels)', 'pdfjs-viewer-shortcode'),
      help: "By default 0 will be 100%.",
      value: props.attributes.viewerWidth,
      onChange: onWidthChange,
      min: 0,
      max: 5000,
      allowReset: true,
      initialPosition: defaultWidth
    }))), wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder",
      key: "i2",
      style: {
        height: props.attributes.viewerHeight
      }
    }, wp.element.createElement("div", null, wp.element.createElement("strong", null, __('PDF.js Embed', 'pdfjs-viewer-shortcode')), "\xA0 - \xA0", wp.element.createElement("span", {
      className: "pdfjs-title"
    }, props.attributes.imgTitle ? props.attributes.imgTitle : 'Choose a PDF file'), "\xA0 - \xA0", props.attributes.imageURL ? wp.element.createElement(Button, {
      className: "pdfjs-button",
      onClick: onRemoveImg
    }, __('Remove PDF', 'pdfjs-viewer-shortcode')) : wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "pdfjs-button",
          onClick: open
        }, __('Choose a PDF file', 'pdfjs-viewer-shortcode'));
      }
    })), props.attributes.imageURL ? wp.element.createElement("div", {
      style: {
        width: '100%'
      }
    }, wp.element.createElement("div", {
      className: "pdfjs-preview",
      width: viewerWidthAttr ? viewerWidthAttr : '100%',
      style: {
        maxWidth: '100%'
      },
      height: props.attributes.viewerHeight || defaultHeight
    }, wp.element.createElement("iframe", {
      src: iframeSrc,
      width: viewerWidthAttr,
      height: props.attributes.viewerHeight || defaultHeight,
      className: "pdfjs-iframe-editor",
      title: "PDF preview",
      style: {
        border: '1px solid #ddd',
        maxWidth: '100%'
      }
    }))) : null)];
  },
  save: function save(props) {
    return wp.element.createElement("div", {
      className: "pdfjs-wrapper"
    }, "[pdfjs-viewer attachment_id=".concat(props.attributes.imgID, " url=").concat(props.attributes.imageURL, " viewer_width=").concat(props.attributes.viewerWidth !== undefined ? props.attributes.viewerWidth : defaultWidth, " viewer_height=").concat(props.attributes.viewerHeight !== undefined ? props.attributes.viewerHeight : defaultHeight, " url=").concat(props.attributes.imageURL, " download=").concat(props.attributes.showDownload.toString(), " print=").concat(props.attributes.showPrint.toString(), " fullscreen=").concat(props.attributes.showFullscreen.toString(), " fullscreen_target=").concat(props.attributes.openFullscreen.toString(), " fullscreen_text=\"").concat(props.attributes.fullscreenText, "\" zoom=").concat(props.attributes.viewerScale.toString(), "  ]"));
  }
});

/***/ }),

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./blocks/src/block/editor.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_editor_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./blocks/src/block/editor.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./blocks/src/block/editor.scss ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.pdfjs-wrapper.components-placeholder {
  justify-content: start;
  overflow: hidden;
}

.pdfjs-button {
  background-color: rgb(233, 242, 251);
  border: 1px solid #ffffff;
}

.pdfjs-button:hover,
.pdfjs-button:focus {
  background-color: rgb(233, 242, 251);
  border: 1px solid #007cba;
}`, "",{"version":3,"sources":["webpack://./blocks/src/block/editor.scss"],"names":[],"mappings":"AAAA;EACC,sBAAA;EACA,gBAAA;AACD;;AAEA;EACC,oCAAA;EACA,yBAAA;AACD;;AAEA;;EAEC,oCAAA;EACA,yBAAA;AACD","sourcesContent":[".pdfjs-wrapper.components-placeholder {\n\tjustify-content: start;\n\toverflow: hidden;\n}\n\n.pdfjs-button {\n\tbackground-color: rgb( 233, 242, 251 );\n\tborder: 1px solid #ffffff;\n}\n\n.pdfjs-button:hover,\n.pdfjs-button:focus {\n\tbackground-color: rgb( 233, 242, 251 );\n\tborder: 1px solid #007cba;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block */ "./blocks/src/block/block.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkEsbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS8uL2Jsb2Nrcy9zcmMvYmxvY2svYmxvY2suanMiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzP2MxYWEiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvLi9ibG9ja3Mvc3JjL2Jsb2NrL3N0eWxlLnNjc3M/MWU0YyIsIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS8uL2Jsb2Nrcy9zcmMvYmxvY2svZWRpdG9yLnNjc3MiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BkZi5qcy12aWV3ZXItc2hvcnRjb2RlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BkZi5qcy12aWV3ZXItc2hvcnRjb2RlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BkZi5qcy12aWV3ZXItc2hvcnRjb2RlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BkZi5qcy12aWV3ZXItc2hvcnRjb2RlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGRmLmpzLXZpZXdlci1zaG9ydGNvZGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BkZi5qcy12aWV3ZXItc2hvcnRjb2RlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wZGYuanMtdmlld2VyLXNob3J0Y29kZS8uL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgTWVkaWFVcGxvYWQsIEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcblxuY29uc3Qge1xuXHRCdXR0b24sXG5cdFBhbmVsUm93LFxuXHRQYW5lbEJvZHksXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0VGV4dENvbnRyb2wsXG59ID0gd3AuY29tcG9uZW50cztcblxuY29uc3QgZGVmYXVsdEhlaWdodCA9IDgwMDtcbmNvbnN0IGRlZmF1bHRXaWR0aCA9IDA7XG5cbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdhcHBsaWNhdGlvbi9wZGYnIF07XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAncGRmanNibG9jay9wZGZqcy1lbWJlZCcsIHtcblx0dGl0bGU6IF9fKCAnRW1iZWQgUERGLmpzIFZpZXdlcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApLFxuXHRpY29uOiAnbWVkaWEtZG9jdW1lbnQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRpbWFnZVVSTDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0fSxcblx0XHRpbWdJRDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0fSxcblx0XHRpbWdUaXRsZToge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnUERGIEZpbGUnLFxuXHRcdH0sXG5cdFx0c2hvd0Rvd25sb2FkOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiAhISB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19kb3dubG9hZF9idXR0b24sXG5cdFx0fSxcblx0XHRzaG93UHJpbnQ6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdGRlZmF1bHQ6ICEhIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ByaW50X2J1dHRvbixcblx0XHR9LFxuXHRcdHNob3dGdWxsc2NyZWVuOiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiAhISB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19mdWxsc2NyZWVuX2xpbmssXG5cdFx0fSxcblx0XHRvcGVuRnVsbHNjcmVlbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rX3RhcmdldCxcblx0XHR9LFxuXHRcdGZ1bGxzY3JlZW5UZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190ZXh0XG5cdFx0XHRcdD8gd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rX3RleHRcblx0XHRcdFx0OiAnVmlldyBGdWxsc2NyZWVuJyxcblx0XHR9LFxuXHRcdHZpZXdlckhlaWdodDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF9oZWlnaHRcblx0XHRcdFx0PyBOdW1iZXIoIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX2hlaWdodCApXG5cdFx0XHRcdDogODAwLFxuXHRcdH0sXG5cdFx0dmlld2VyV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfd2lkdGhcblx0XHRcdFx0PyBOdW1iZXIoIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX3dpZHRoIClcblx0XHRcdFx0OiAwLFxuXHRcdH0sXG5cdFx0dmlld2VyU2NhbGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfdmlld2VyX3NjYWxlXG5cdFx0XHRcdD8gd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfdmlld2VyX3NjYWxlXG5cdFx0XHRcdDogJ2F1dG8nLFxuXHRcdH0sXG5cdH0sXG5cdGtleXdvcmRzOiBbIF9fKCAnUERGIFNlbGVjdG9yJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgXSxcblxuXHRlZGl0KCBwcm9wcyApIHtcblx0XHRjb25zdCBvbkZpbGVTZWxlY3QgPSAoIGltZyApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0aW1hZ2VVUkw6IGltZy51cmwsXG5cdFx0XHRcdGltZ0lEOiBpbWcuaWQsXG5cdFx0XHRcdGltZ1RpdGxlOiBpbWcudGl0bGUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uUmVtb3ZlSW1nID0gKCkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRpbWFnZVVSTDogbnVsbCxcblx0XHRcdFx0aW1nSUQ6IG51bGwsXG5cdFx0XHRcdGltZ1RpdGxlOiBudWxsLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZURvd25sb2FkID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0c2hvd0Rvd25sb2FkOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVQcmludCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dQcmludDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlRnVsbHNjcmVlbiA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dGdWxsc2NyZWVuOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVPcGVuRnVsbHNjcmVlbiA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdG9wZW5GdWxsc2NyZWVuOiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25IZWlnaHRDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0Ly8gaGFuZGxlIHRoZSByZXNldCBidXR0b25cblx0XHRcdGlmICggdW5kZWZpbmVkID09PSB2YWx1ZSApIHtcblx0XHRcdFx0dmFsdWUgPSBkZWZhdWx0SGVpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHR2aWV3ZXJIZWlnaHQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvbldpZHRoQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdC8vIGhhbmRsZSB0aGUgcmVzZXQgYnV0dG9uXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRcdHZhbHVlID0gZGVmYXVsdFdpZHRoO1xuXHRcdFx0fVxuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHR2aWV3ZXJXaWR0aDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uRnVsbHNjcmVlblRleHRDaGFuZ2UgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCAvKDwoW14+XSspPikvZ2ksICcnICk7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGZ1bGxzY3JlZW5UZXh0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Ly8gQ29tcHV0ZSBwcmV2aWV3IGlmcmFtZSBzcmMgYW5kIHdpZHRoIGZvciBlZGl0b3IgcHJldmlld1xuXHRcdGNvbnN0IHZpZXdlckJhc2UgPVxuXHRcdFx0d2luZG93LnBkZmpzX29wdGlvbnMgJiYgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfdmlld2VyX3VybFxuXHRcdFx0XHQ/IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX3ZpZXdlcl91cmxcblx0XHRcdFx0OiBudWxsO1xuXHRcdGNvbnN0IGlmcmFtZVNyYyA9IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkxcblx0XHRcdD8gdmlld2VyQmFzZVxuXHRcdFx0XHQ/IGAkeyB2aWV3ZXJCYXNlIH0/ZmlsZT0keyBlbmNvZGVVUklDb21wb25lbnQoXG5cdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMXG5cdFx0XHRcdCAgKSB9JmF0dGFjaG1lbnRfaWQ9JHsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9YFxuXHRcdFx0XHQ6IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkxcblx0XHRcdDogJyc7XG5cdFx0Y29uc3Qgdmlld2VyV2lkdGhBdHRyID1cblx0XHRcdHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCA9PT0gMFxuXHRcdFx0XHQ/ICcxMDAlJ1xuXHRcdFx0XHQ6IGAkeyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIH1weGA7XG5cblx0XHRyZXR1cm4gW1xuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT1cImkxXCI+XG5cdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnUERGLmpzIE9wdGlvbnMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IFNhdmUgT3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZURvd25sb2FkIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IFByaW50IE9wdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludFxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludCB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVQcmludCB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnU2hvdyBGdWxsc2NyZWVuIE9wdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW4gfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uVG9nZ2xlRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0XHQnT3BlbiBGdWxsc2NyZWVuIGluIG5ldyB0YWI/Jyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMub3BlbkZ1bGxzY3JlZW5cblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5vcGVuRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVPcGVuRnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdFx0PFBhbmVsUm93PlxuXHRcdFx0XHRcdFx0PFRleHRDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiRnVsbHNjcmVlbiBUZXh0XCJcblx0XHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLmZ1bGxzY3JlZW5UZXh0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvbkZ1bGxzY3JlZW5UZXh0Q2hhbmdlIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdDxQYW5lbEJvZHlcblx0XHRcdFx0XHR0aXRsZT17IF9fKCAnRW1iZWQgSGVpZ2h0JywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0J1ZpZXdlciBIZWlnaHQgKHBpeGVscyknLFxuXHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uSGVpZ2h0Q2hhbmdlIH1cblx0XHRcdFx0XHRcdG1pbj17IDAgfVxuXHRcdFx0XHRcdFx0bWF4PXsgNTAwMCB9XG5cdFx0XHRcdFx0XHRhbGxvd1Jlc2V0PXsgdHJ1ZSB9XG5cdFx0XHRcdFx0XHRpbml0aWFsUG9zaXRpb249eyBkZWZhdWx0SGVpZ2h0IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keVxuXHRcdFx0XHRcdHRpdGxlPXsgX18oICdFbWJlZCBXaWR0aCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdCdWaWV3ZXIgV2lkdGggKHBpeGVscyknLFxuXHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0aGVscD1cIkJ5IGRlZmF1bHQgMCB3aWxsIGJlIDEwMCUuXCJcblx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uV2lkdGhDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRtYXg9eyA1MDAwIH1cblx0XHRcdFx0XHRcdGFsbG93UmVzZXQ9eyB0cnVlIH1cblx0XHRcdFx0XHRcdGluaXRpYWxQb3NpdGlvbj17IGRlZmF1bHRXaWR0aCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHQ8L0luc3BlY3RvckNvbnRyb2xzPixcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwicGRmanMtd3JhcHBlciBjb21wb25lbnRzLXBsYWNlaG9sZGVyXCJcblx0XHRcdFx0a2V5PVwiaTJcIlxuXHRcdFx0XHRzdHlsZT17IHsgaGVpZ2h0OiBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCB9IH1cblx0XHRcdD5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8c3Ryb25nPlxuXHRcdFx0XHRcdFx0eyBfXyggJ1BERi5qcyBFbWJlZCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH1cblx0XHRcdFx0XHQ8L3N0cm9uZz5cblx0XHRcdFx0XHQmbmJzcDsgLSAmbmJzcDtcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwZGZqcy10aXRsZVwiPlxuXHRcdFx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdD8gcHJvcHMuYXR0cmlidXRlcy5pbWdUaXRsZVxuXHRcdFx0XHRcdFx0XHQ6ICdDaG9vc2UgYSBQREYgZmlsZScgfVxuXHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQmbmJzcDsgLSAmbmJzcDtcblx0XHRcdFx0XHR7IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgPyAoXG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBkZmpzLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblJlbW92ZUltZyB9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHsgX18oICdSZW1vdmUgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG9uRmlsZVNlbGVjdCB9XG5cdFx0XHRcdFx0XHRcdGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuaW1nSUQgfVxuXHRcdFx0XHRcdFx0XHRyZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBkZmpzLWJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0J0Nob29zZSBhIFBERiBmaWxlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0J3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnXG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMID8gKFxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9eyB7IHdpZHRoOiAnMTAwJScgfSB9PlxuXHRcdFx0XHRcdFx0eyAvKiBFZGl0b3IgcHJldmlldyBpZnJhbWUgKi8gfVxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwZGZqcy1wcmV2aWV3XCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9eyB2aWV3ZXJXaWR0aEF0dHIgPyB2aWV3ZXJXaWR0aEF0dHIgOiAnMTAwJScgfVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17IHsgbWF4V2lkdGg6ICcxMDAlJyB9IH1cblx0XHRcdFx0XHRcdFx0aGVpZ2h0PXtcblx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCB8fCBkZWZhdWx0SGVpZ2h0XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGlmcmFtZVxuXHRcdFx0XHRcdFx0XHRcdHNyYz17IGlmcmFtZVNyYyB9XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg9eyB2aWV3ZXJXaWR0aEF0dHIgfVxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17XG5cdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdEhlaWdodFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwZGZqcy1pZnJhbWUtZWRpdG9yXCJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIlBERiBwcmV2aWV3XCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHtcblx0XHRcdFx0XHRcdFx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcblx0XHRcdFx0XHRcdFx0XHRcdG1heFdpZHRoOiAnMTAwJScsXG5cdFx0XHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IG51bGwgfVxuXHRcdFx0PC9kaXY+LFxuXHRcdF07XG5cdH0sXG5cblx0c2F2ZSggcHJvcHMgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtd3JhcHBlclwiPlxuXHRcdFx0XHR7IGBbcGRmanMtdmlld2VyIGF0dGFjaG1lbnRfaWQ9JHtcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLmltZ0lEXG5cdFx0XHRcdH0gdXJsPSR7IHByb3BzLmF0dHJpYnV0ZXMuaW1hZ2VVUkwgfSB2aWV3ZXJfd2lkdGg9JHtcblx0XHRcdFx0XHRwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoICE9PSB1bmRlZmluZWRcblx0XHRcdFx0XHRcdD8gcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aFxuXHRcdFx0XHRcdFx0OiBkZWZhdWx0V2lkdGhcblx0XHRcdFx0fSB2aWV3ZXJfaGVpZ2h0PSR7XG5cdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy52aWV3ZXJIZWlnaHQgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdFx0PyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodFxuXHRcdFx0XHRcdFx0OiBkZWZhdWx0SGVpZ2h0XG5cdFx0XHRcdH0gdXJsPSR7XG5cdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTFxuXHRcdFx0XHR9IGRvd25sb2FkPSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCkgfSBwcmludD0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpIH0gZnVsbHNjcmVlbj0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuX3RhcmdldD0keyBwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuLnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuX3RleHQ9XCIke1xuXHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuZnVsbHNjcmVlblRleHRcblx0XHRcdFx0fVwiIHpvb209JHsgcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJTY2FsZS50b1N0cmluZygpIH0gIF1gIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59ICk7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS51c2VbMl0hLi9lZGl0b3Iuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzJdIS4vZWRpdG9yLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnBkZmpzLXdyYXBwZXIuY29tcG9uZW50cy1wbGFjZWhvbGRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wZGZqcy1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyNDIsIDI1MSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5wZGZqcy1idXR0b246aG92ZXIsXG4ucGRmanMtYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjQyLCAyNTEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3Y2JhO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLHNCQUFBO0VBQ0EsZ0JBQUE7QUFDRDs7QUFFQTtFQUNDLG9DQUFBO0VBQ0EseUJBQUE7QUFDRDs7QUFFQTs7RUFFQyxvQ0FBQTtFQUNBLHlCQUFBO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnBkZmpzLXdyYXBwZXIuY29tcG9uZW50cy1wbGFjZWhvbGRlciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzdGFydDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ucGRmanMtYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoIDIzMywgMjQyLCAyNTEgKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG5cXG4ucGRmanMtYnV0dG9uOmhvdmVyLFxcbi5wZGZqcy1idXR0b246Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYiggMjMzLCAyNDIsIDI1MSApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICMwMDdjYmE7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIl0sIm5hbWVzIjpbIl9fIiwid3AiLCJpMThuIiwicmVnaXN0ZXJCbG9ja1R5cGUiLCJibG9ja3MiLCJfd3AkYmxvY2tFZGl0b3IiLCJibG9ja0VkaXRvciIsIk1lZGlhVXBsb2FkIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJfd3AkY29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJCdXR0b24iLCJQYW5lbFJvdyIsIlBhbmVsQm9keSIsIlRvZ2dsZUNvbnRyb2wiLCJSYW5nZUNvbnRyb2wiLCJTZWxlY3RDb250cm9sIiwiVGV4dENvbnRyb2wiLCJkZWZhdWx0SGVpZ2h0IiwiZGVmYXVsdFdpZHRoIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsInRpdGxlIiwiaWNvbiIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsImltYWdlVVJMIiwidHlwZSIsImltZ0lEIiwiaW1nVGl0bGUiLCJzaG93RG93bmxvYWQiLCJ3aW5kb3ciLCJwZGZqc19vcHRpb25zIiwicGRmanNfZG93bmxvYWRfYnV0dG9uIiwic2hvd1ByaW50IiwicGRmanNfcHJpbnRfYnV0dG9uIiwic2hvd0Z1bGxzY3JlZW4iLCJwZGZqc19mdWxsc2NyZWVuX2xpbmsiLCJvcGVuRnVsbHNjcmVlbiIsInBkZmpzX2Z1bGxzY3JlZW5fbGlua190YXJnZXQiLCJmdWxsc2NyZWVuVGV4dCIsInBkZmpzX2Z1bGxzY3JlZW5fbGlua190ZXh0Iiwidmlld2VySGVpZ2h0IiwicGRmanNfZW1iZWRfaGVpZ2h0IiwiTnVtYmVyIiwidmlld2VyV2lkdGgiLCJwZGZqc19lbWJlZF93aWR0aCIsInZpZXdlclNjYWxlIiwicGRmanNfdmlld2VyX3NjYWxlIiwia2V5d29yZHMiLCJlZGl0IiwicHJvcHMiLCJvbkZpbGVTZWxlY3QiLCJpbWciLCJzZXRBdHRyaWJ1dGVzIiwidXJsIiwiaWQiLCJvblJlbW92ZUltZyIsIm9uVG9nZ2xlRG93bmxvYWQiLCJ2YWx1ZSIsIm9uVG9nZ2xlUHJpbnQiLCJvblRvZ2dsZUZ1bGxzY3JlZW4iLCJvblRvZ2dsZU9wZW5GdWxsc2NyZWVuIiwib25IZWlnaHRDaGFuZ2UiLCJ1bmRlZmluZWQiLCJvbldpZHRoQ2hhbmdlIiwib25GdWxsc2NyZWVuVGV4dENoYW5nZSIsInJlcGxhY2UiLCJ2aWV3ZXJCYXNlIiwicGRmanNfdmlld2VyX3VybCIsImlmcmFtZVNyYyIsImNvbmNhdCIsImVuY29kZVVSSUNvbXBvbmVudCIsInZpZXdlcldpZHRoQXR0ciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibGFiZWwiLCJoZWxwIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwibWluIiwibWF4IiwiYWxsb3dSZXNldCIsImluaXRpYWxQb3NpdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0Iiwib25DbGljayIsIm9uU2VsZWN0IiwiYWxsb3dlZFR5cGVzIiwicmVuZGVyIiwiX3JlZiIsIm9wZW4iLCJ3aWR0aCIsIm1heFdpZHRoIiwic3JjIiwiYm9yZGVyIiwic2F2ZSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==