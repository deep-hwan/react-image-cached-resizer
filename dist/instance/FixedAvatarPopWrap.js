"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedAvatarPopWrap = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
function FixedAvatarPopWrap(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { css: {
                    zIndex: 99998,
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    minHeight: "100vh",
                    backgroundColor: "rgba(0,0,0,0.85)",
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    paddingTop: "max(0px, env(safe-area-inset-top))",
                    paddingBottom: "max(0px, env(safe-area-inset-bottom))",
                    paddingLeft: "max(0px, env(safe-area-inset-left))",
                    paddingRight: "max(0px, env(safe-area-inset-right))",
                } }), (0, jsx_runtime_1.jsx)("div", __assign({ className: "zoom-pop-wrap", css: {
                    zIndex: 99999,
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: "100%",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 30,
                } }, { children: children }))] }));
}
exports.FixedAvatarPopWrap = FixedAvatarPopWrap;
