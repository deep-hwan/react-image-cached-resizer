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
exports.ImageInstance = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var imageCache = new Map();
exports.ImageInstance = (0, react_1.forwardRef)(function (_a, ref) {
    var _b, _c, _d, _e, _f, _g;
    var source = _a.source, alt = _a.alt, size = _a.size, _h = _a.objectFit, objectFit = _h === void 0 ? "fill" : _h, borderRadius = _a.borderRadius, ratio = _a.ratio, props = __rest(_a, ["source", "alt", "size", "objectFit", "borderRadius", "ratio"]);
    var blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC";
    var _j = (0, react_1.useState)(blurDataURL), imageURL = _j[0], setImageURL = _j[1];
    var _k = (0, react_1.useState)(false), isLoaded = _k[0], setIsLoaded = _k[1];
    var imgRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (typeof window === "undefined" ||
            typeof IntersectionObserver === "undefined") {
            setIsLoaded(true);
            return;
        }
        var observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: "50px", threshold: 0.01 });
        if (imgRef.current)
            observer.observe(imgRef.current);
        return function () {
            if (imgRef.current)
                observer.unobserve(imgRef.current);
        };
    }, [imgRef]);
    (0, react_1.useEffect)(function () {
        if (isLoaded) {
            if (typeof window === "undefined") {
                setImageURL(source instanceof File ? "" : source); // ssr
            }
            else {
                if (source instanceof File) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var _a;
                        var result = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                        if (typeof result === "string") {
                            resizeImage(result);
                        }
                    };
                    reader.readAsDataURL(source);
                }
                else if (typeof source === "string") {
                    setImageURL(source);
                }
            }
        }
    }, [source, isLoaded]);
    //
    // image resizing logic
    var resizeImage = function (source) {
        var img = document.createElement("img");
        img.crossOrigin = "anonymous"; // CORS 정책 준수
        img.src = source;
        img.onload = function () {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            if (!ctx)
                return;
            var maxWidth = (size === null || size === void 0 ? void 0 : size.maxWidth)
                ? parseInt(size.maxWidth.toString(), 10)
                : img.width;
            var maxHeight = (size === null || size === void 0 ? void 0 : size.maxHeight)
                ? parseInt(size.maxHeight.toString(), 10)
                : img.height;
            canvas.width = maxWidth !== null && maxWidth !== void 0 ? maxWidth : size === null || size === void 0 ? void 0 : size.minWidth;
            canvas.height = maxHeight !== null && maxHeight !== void 0 ? maxHeight : size === null || size === void 0 ? void 0 : size.minHeight;
            ctx.drawImage(img, 0, 0, maxWidth, maxHeight);
            try {
                var resizedImage = canvas.toDataURL();
                imageCache.set(source, resizedImage);
                setImageURL(resizedImage);
            }
            catch (error) {
                console.error("Canvas data extraction failed", error);
            }
        };
    };
    var imageSizeStyle = {
        width: (_b = size === null || size === void 0 ? void 0 : size.width) !== null && _b !== void 0 ? _b : "100%",
        height: (_c = size === null || size === void 0 ? void 0 : size.height) !== null && _c !== void 0 ? _c : "auto",
        minWidth: (_d = size === null || size === void 0 ? void 0 : size.minWidth) !== null && _d !== void 0 ? _d : "auto",
        maxWidth: (_e = size === null || size === void 0 ? void 0 : size.maxWidth) !== null && _e !== void 0 ? _e : "auto",
        minHeight: (_f = size === null || size === void 0 ? void 0 : size.minHeight) !== null && _f !== void 0 ? _f : "auto",
        maxHeight: (_g = size === null || size === void 0 ? void 0 : size.maxHeight) !== null && _g !== void 0 ? _g : "auto",
        backgroundImage: imageURL === blurDataURL ? "url('".concat(blurDataURL, "')") : "none",
        backgroundSize: "cover",
        // filter: imageURL === blurDataURL ? "blur(px)" : "none",
        aspectRatio: ratio ? "".concat(ratio.x, "/").concat(ratio.y) : "",
    };
    console.error = function () { };
    return ((0, jsx_runtime_1.jsx)("img", __assign({ ref: imgRef, src: imageURL, alt: alt, loading: "lazy", css: __assign(__assign({}, imageSizeStyle), { objectFit: objectFit, borderRadius: borderRadius, aspectRatio: ratio ? "".concat(ratio.x, "/").concat(ratio.y) : "" }) }, props)));
});
