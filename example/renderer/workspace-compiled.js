"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useConnect = _interopRequireDefault(require("../../useConnect"));

var action = _interopRequireWildcard(require("../../control"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function Control() {
  const hideWorkspace = val => {
    console.log("9999999999999999");
    action.hideWorkspace(val);
  };

  return _react.default.createElement("div", {
    className: "container",
    onClick: () => hideWorkspace("hide-workspace")
  }, _react.default.createElement("div", {
    className: "add-workspace"
  }, _react.default.createElement("div", {
    className: "add-name"
  }, _react.default.createElement("div", {
    className: "add-plus"
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/workspace/plus.png"
  })), _react.default.createElement("div", {
    className: "add-title"
  }, _react.default.createElement("input", {
    className: "input-title",
    placeholder: "Name your workspace"
  }))), _react.default.createElement("div", {
    className: "add-setting"
  }, _react.default.createElement("label", {
    class: "switch"
  }, _react.default.createElement("input", {
    type: "checkbox"
  }), _react.default.createElement("span", {
    class: "slider round"
  })), _react.default.createElement("div", {
    className: "workspace-letter"
  }, _react.default.createElement("p", null, "Separate Cookies")), _react.default.createElement("label", {
    class: "switch"
  }, _react.default.createElement("input", {
    type: "checkbox"
  }), _react.default.createElement("span", {
    class: "slider round"
  })), _react.default.createElement("div", {
    className: "workspace-letter"
  }, _react.default.createElement("p", null, "Incognito Tab")))), _react.default.createElement("div", {
    className: "emoji"
  }, _react.default.createElement("img", {
    className: "stretch-img",
    src: "img/workspace-emoji.png"
  })));
} // eslint-disable-next-line no-undef


_reactDom.default.render(_react.default.createElement(Control, null), document.getElementById('app'));
