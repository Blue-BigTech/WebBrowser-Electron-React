"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useConnect = _interopRequireDefault(require("../../useConnect"));

var action = _interopRequireWildcard(require("../../control"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const IconLoading = () => _react.default.createElement("svg", {
  viewBox: "0 0 1024 1024",
  focusable: "false",
  className: "anticon-spin",
  "data-icon": "loading",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true"
}, _react.default.createElement("path", {
  d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
}));

const IconClose = () => _react.default.createElement("svg", {
  viewBox: "64 64 896 896",
  focusable: "false",
  "data-icon": "close",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true"
}, _react.default.createElement("path", {
  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
}));

const IconPlus = () => _react.default.createElement("svg", {
  viewBox: "64 64 896 896",
  focusable: "false",
  "data-icon": "plus",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true"
}, _react.default.createElement("path", {
  d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"
}), _react.default.createElement("path", {
  d: "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
}));

const IconReload = () => _react.default.createElement("svg", {
  viewBox: "64 64 896 896",
  focusable: "false",
  "data-icon": "reload",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true"
}, _react.default.createElement("path", {
  d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"
}));

const IconLeft = () => _react.default.createElement("svg", {
  viewBox: "64 64 896 896",
  focusable: "false",
  "data-icon": "left",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true"
}, _react.default.createElement("path", {
  d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
}));

const IconRight = () => _react.default.createElement("svg", {
  viewBox: "64 64 896 896",
  focusable: "false",
  "data-icon": "right",
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true"
}, _react.default.createElement("path", {
  d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
}));

function SiteItem(props) {
  const id = props.id;
  const value = props.value;
  const icon = props.icon;
  const activeID = props.activeID;
  const setActiveSiteID = props.setActiveSiteID;
  return _react.default.createElement("li", null, _react.default.createElement("div", {
    className: (0, _classnames.default)('site-item', {
      active: id === activeID
    }),
    onClick: () => setActiveSiteID(id)
  }, _react.default.createElement("div", {
    className: "site-item-img"
  }, _react.default.createElement("img", {
    className: "container-img",
    src: `img/site_list/${icon}.png`
  })), _react.default.createElement("div", {
    className: "center"
  }, _react.default.createElement("p", null, value))));
}

function SiteList(props) {
  const list = props.list;
  const activeID = props.activeID;
  const setActiveSiteID = props.setActiveSiteID;
  return _react.default.createElement("ul", {
    className: "site-ul"
  }, list.map((item, id) => _react.default.createElement(SiteItem, {
    key: id,
    icon: item.icon,
    value: item.value,
    id: id,
    activeID: activeID,
    setActiveSiteID: setActiveSiteID
  })));
}

function TaskItem(props) {
  const id = props.id;
  const icon = props.icon;
  const title = props.title;
  const status = props.status;
  const desc = props.desc;
  const time = props.time;
  const activeID = props.activeID;
  const setActiveTaskID = props.setActiveTaskID;
  return _react.default.createElement("li", null, _react.default.createElement("div", {
    className: "task-item",
    onClick: () => setActiveTaskID(id)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('task-active-mark', {
      active: id === activeID
    })
  }), _react.default.createElement("div", {
    className: "task-item-body"
  }, _react.default.createElement("div", {
    className: "task-item-top"
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('task-item-icon', icon)
  }, _react.default.createElement("img", {
    className: "container-img",
    src: `img/task_list/${icon}.png`
  })), _react.default.createElement("div", {
    className: "task-item-title"
  }, _react.default.createElement("p", {
    className: "line-normal"
  }, title)), _react.default.createElement("div", {
    className: "task-item-time"
  }, time)), _react.default.createElement("div", {
    className: "task-item-status center"
  }, _react.default.createElement("p", null, status)), _react.default.createElement("div", {
    className: "task-item-desc"
  }, desc))));
}

function TaskList(props) {
  const list = props.list;
  const activeID = props.activeID;
  const setActiveTaskID = props.setActiveTaskID;
  return _react.default.createElement("ul", {
    className: "task-ul"
  }, list.map((item, id) => _react.default.createElement(TaskItem, {
    key: id,
    id: id,
    icon: item.icon,
    title: item.title,
    status: item.status,
    desc: item.desc,
    time: item.time,
    activeID: activeID,
    setActiveTaskID: setActiveTaskID
  })));
}

function Control() {
  const {
    tabs,
    tabIDs,
    activeID
  } = (0, _useConnect.default)();
  const [activeSiteID, setActiveSiteID] = (0, _react.useState)(0);
  const [activeTaskID, setActiveTaskID] = (0, _react.useState)(0);
  const [activeLeftID, setActiveLeftID] = (0, _react.useState)(0);
  const [tempID, setTempID] = (0, _react.useState)(0);
  const {
    url,
    canGoForward,
    canGoBack,
    isLoading
  } = tabs[activeID] || {};

  const onUrlChange = e => {
    // Sync to tab config
    const v = e.target.value;
    action.sendChangeURL(v);
  };

  const onPressEnter = e => {
    if (e.keyCode !== 13) return;
    const v = e.target.value.trim();
    if (!v) return;
    let href = v;

    if (!/^.*?:\/\//.test(v)) {
      href = `http://${v}`;
    }

    action.sendEnterURL(href);
  };

  const close = (e, id) => {
    e.stopPropagation();
    action.sendCloseTab(id);
  };

  const newTab = () => {
    action.sendNewTab();
  };

  const switchTab = id => {
    action.sendSwitchTab(id);
  };

  const sites = [{
    value: "Gmail | devin@honeydu.io",
    icon: "g-Mail"
  }, {
    value: "Github | Honeydu | Mobile",
    icon: "github"
  }, {
    value: "brew install chrome - Google",
    icon: "google"
  }, {
    value: "Youtube",
    icon: "youtube"
  }, {
    value: "Implement <hr> into app...",
    icon: "google"
  }];
  const tasks = [{
    title: "Moana Wells",
    status: "Guitar jams w/ Mark at McCabe’s",
    desc: "Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
    time: "2:40 PM",
    icon: "none"
  }, {
    title: "Youtube",
    status: "Guitar jams w/ Mark at McCabe’s",
    desc: "Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
    time: "1:50 PM",
    icon: "link"
  }, {
    title: "Mark Mills",
    status: "Guitar jams w/ Mark at McCabe’s",
    desc: "Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
    time: "1:20 PM",
    icon: "none"
  }, {
    title: "Jira | DELT 181",
    status: "Guitar jams w/ Mark at McCabe’s",
    desc: "Hey, are we still meeting at the regular time for lessons Next week? Thanks!",
    time: "12:40 PM",
    icon: "jira"
  }, {
    title: "Discord | Honeydu",
    status: "From: Shan Shah",
    desc: "@devin what are the name servers for Digital Ocean?",
    time: "11:40 PM",
    icon: "discord"
  }, {
    title: "Github | Honeydu",
    status: "Repo: Mobile      Commit: 6weFwer",
    desc: "@devin should we change this method to be async?",
    time: "1:50 AM",
    icon: "github"
  }];
  const leftTabs = [{
    icon: "fruit",
    func: "none"
  }, {
    icon: "brain",
    func: "none"
  }, {
    icon: "face",
    func: "none"
  }, {
    icon: "star",
    func: "none"
  }];

  const setLeftID = id => {
    console.log("setLeftID", id);
    setTempID(id);
    setActiveLeftID(id);
  };

  const showWorkspace = val => {
    action.showWorkspace(val);
  };

  const quit = () => {
    console.log("quit------------");
    action.quit();
  };

  return _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement("div", {
    className: "st top-bar"
  }, _react.default.createElement("div", {
    className: "sys-bar"
  }, _react.default.createElement("a", {
    className: "exit"
  }, _react.default.createElement("i", {
    className: "fa fa-circle exit",
    onClick: () => quit()
  })), _react.default.createElement("a", {
    className: "minimize"
  }, _react.default.createElement("i", {
    className: "fa fa-circle"
  })), _react.default.createElement("a", {
    className: "maximize"
  }, _react.default.createElement("i", {
    className: "fa fa-circle"
  }))), _react.default.createElement("div", {
    className: "ctrl-bar"
  }, _react.default.createElement("div", {
    className: "ctrl-bar-unknown normal-clickable"
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/unknown.png"
  })), _react.default.createElement("div", {
    className: "ctrl-bar-checker"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-plus normal-clickable"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-bf"
  }, _react.default.createElement("div", {
    className: "ctrl-bar-back normal-clickable"
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/Icon-feather-chevron-left.png"
  })), _react.default.createElement("div", {
    className: "ctrl-bar-forward normal-clickable"
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/Icon-feather-chevron-right.png"
  }))), _react.default.createElement("div", {
    className: "ctrl-bar-url"
  }, _react.default.createElement("div", {
    className: "bar-lock"
  }), _react.default.createElement("input", {
    className: "bar-address",
    value: url || '',
    onChange: onUrlChange,
    onKeyDown: onPressEnter
  }), _react.default.createElement("div", {
    className: "fav-icon"
  })), _react.default.createElement("div", {
    className: "ctrl-bar-refresh normal-clickable",
    onClick: action.sendReload
  }), _react.default.createElement("div", {
    className: "ctrl-bar-cancel normal-clickable",
    onClick: action.sendStop
  }), _react.default.createElement("div", {
    className: "ctrl-bar-mark"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tools"
  }, _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-spotify"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-metro-fire"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-email"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-phone"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-camera"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-colorize"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-code"
  }), _react.default.createElement("div", {
    className: "ctrl-bar-tool-item tool-link"
  })), _react.default.createElement("div", {
    className: "ctrl-bar-unknown1 normal-clickable"
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/unknown.png"
  })))), _react.default.createElement("div", {
    className: "body-container"
  }, _react.default.createElement("div", {
    className: "left-bar"
  }, _react.default.createElement("div", {
    className: "tab-bar"
  }, _react.default.createElement(_react.default.Fragment, null, leftTabs.map((item, id) => {
    const {
      icon,
      func
    } = leftTabs[id] || {};
    return _react.default.createElement("div", {
      key: id,
      className: (0, _classnames.default)('tab-item', {
        active: id === activeLeftID
      }),
      onClick: () => setLeftID(id)
    }, _react.default.createElement("img", {
      className: "container-img",
      src: `img/left_bar/${icon}.png`
    }));
  })), _react.default.createElement("div", {
    className: "tab-plus normal-clickable",
    onClick: () => showWorkspace("workspace")
  }, _react.default.createElement("img", {
    className: "center-img",
    src: "img/Icon-feather-plus.png"
  }))), _react.default.createElement("div", {
    className: "pin-bar"
  }, _react.default.createElement("div", {
    className: "pin-tools"
  }, _react.default.createElement("div", {
    className: "pin-tool-item tool-bookmark"
  }), _react.default.createElement("div", {
    className: "pin-tool-item tool-check"
  }), _react.default.createElement("div", {
    className: "pin-tool-item tool-chatbubble"
  }), _react.default.createElement("div", {
    className: "pin-tool-item tool-pmail"
  }), _react.default.createElement("div", {
    className: "pin-tool-item tool-github"
  })), _react.default.createElement("img", {
    className: "pin-avatar",
    src: "img/Ellipse2.png"
  }))), _react.default.createElement("div", {
    className: "st task-bar"
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)('site-list', {
      none: tempID !== 0
    })
  }, _react.default.createElement("div", {
    className: "list-name"
  }, "Honeydu"), _react.default.createElement(SiteList, {
    list: sites,
    activeID: activeSiteID,
    setActiveSiteID: setActiveSiteID
  })), _react.default.createElement("div", {
    className: (0, _classnames.default)('task-list', {
      none: tempID !== 1
    })
  }, _react.default.createElement("div", {
    className: "list-name"
  }, "Tasks"), _react.default.createElement(TaskList, {
    list: tasks,
    activeID: activeTaskID,
    setActiveTaskID: setActiveTaskID
  }))), _react.default.createElement("div", {
    className: "content-body"
  }, _react.default.createElement("div", {
    className: "st content-workspace"
  }))));
} // eslint-disable-next-line no-undef


_reactDom.default.render(_react.default.createElement(Control, null), document.getElementById('app'));
