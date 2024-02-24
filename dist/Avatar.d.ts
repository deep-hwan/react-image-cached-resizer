/** @jsxImportSource @emotion/react */
import React, { ImgHTMLAttributes } from "react";
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    source: string | File;
    alt: string;
    size?: number;
    objectFit?: "cover" | "contain" | "fill" | "none" | undefined;
    borderRadius?: number | string;
    zoomUp?: boolean;
    zoomUpImageSize?: number;
}
export declare const Avatar: React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>;
export {};
