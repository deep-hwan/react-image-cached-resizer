"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerBlur = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var LayerBlur = function () {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            zIndex: 9000,
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
        } }));
};
exports.LayerBlur = LayerBlur;
