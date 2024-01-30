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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var ImageInstance_1 = require("./instance/ImageInstance");
var FixedImagePopWrap_1 = require("./instance/FixedImagePopWrap");
exports.Image = (0, react_1.forwardRef)(function (props, ref) {
    var source = props.source, alt = props.alt, size = props.size, ratio = props.ratio, objectFit = props.objectFit, borderRadius = props.borderRadius, zoomUp = props.zoomUp, onClick = props.onClick, otherProps = __rest(props, ["source", "alt", "size", "ratio", "objectFit", "borderRadius", "zoomUp", "onClick"]);
    var imgRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), zoomImg = _a[0], setZoomImg = _a[1];
    (0, react_1.useEffect)(function () {
        var clickModalOutside = function (event) {
            if (zoomImg &&
                imgRef.current &&
                !imgRef.current.contains(event.target))
                setZoomImg(false);
        };
        if (zoomImg)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
        document.addEventListener("mousedown", clickModalOutside);
        return function () {
            document.removeEventListener("mousedown", clickModalOutside);
        };
    }, [zoomImg]);
    //
    // handleOnClick
    var handleOnClick = function (event) {
        if (!!source && zoomUp) {
            setZoomImg(true);
            onClick && onClick(event);
        }
        else if (onClick)
            onClick(event);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ImageInstance_1.ImageInstance, __assign({ className: "cached-image-box", source: source, alt: alt, size: size, ratio: ratio, objectFit: objectFit, borderRadius: borderRadius, ref: ref, onClick: handleOnClick, css: {
                    cursor: (zoomUp && "pointer") || (props.onClick && "pointer"),
                    userSelect: props.onClick && "none",
                } }, otherProps)), zoomImg && ((0, jsx_runtime_1.jsx)(FixedImagePopWrap_1.FixedImagePopWrap, __assign({ onCancel: function () { return setZoomImg(false); } }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "zoom-image", ref: imgRef, css: {
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        maxWidth: 1200,
                        display: "flex",
                        justifyContent: "center",
                    } }, { children: (0, jsx_runtime_1.jsx)(ImageInstance_1.ImageInstance, { source: source, alt: alt, size: { width: "100%", height: "auto" }, objectFit: "contain" }) })) })))] }));
});
