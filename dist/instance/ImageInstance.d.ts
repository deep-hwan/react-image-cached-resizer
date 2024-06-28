/** @jsxImportSource @emotion/react */
import React, { ImgHTMLAttributes } from "react";
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    source: string | File;
    alt: string;
    size?: {
        width?: "auto" | "100%" | string;
        minWidth?: number | string;
        maxWidth?: number | string;
        height?: "auto" | "100%" | string;
        minHeight?: number | string;
        maxHeight?: number | string;
    };
    ratio?: {
        x?: number;
        y?: number;
    };
    objectFit?: "cover" | "contain" | "fill" | "none";
    borderRadius?: number | string;
}
export declare const ImageInstance: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export {};
