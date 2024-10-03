/** @jsxImportSource @emotion/react */

import React, {
  ForwardedRef,
  ImgHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { FixedImagePopWrap } from "./instance/FixedImagePopWrap";
import { ImageInstance } from "./instance/ImageInstance";

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
  ratio?: { x?: number; y?: number };
  objectFit?: "cover" | "contain" | "fill" | "none" | undefined;
  borderRadius?: number | string;
  zoomUp?: boolean;
}

type ImagePropsWithoutSize = Omit<ImageProps, "sizes">;

export const Image = forwardRef(
  (props: ImagePropsWithoutSize, ref: ForwardedRef<HTMLImageElement>) => {
    const {
      source,
      alt,
      size,
      ratio,
      objectFit,
      borderRadius,
      zoomUp,
      onClick,
      ...otherProps
    } = props;

    const imgRef = useRef<HTMLImageElement>(null);
    const [zoomImg, setZoomImg] = useState(false);

    useEffect(() => {
      const clickModalOutside = (event: MouseEvent) => {
        if (
          zoomImg &&
          imgRef.current &&
          !imgRef.current.contains(event.target as Node)
        )
          setZoomImg(false);
      };

      if (zoomImg) document.body.style.overflowY = "hidden";
      else document.body.style.overflowY = "auto";

      document.addEventListener("mousedown", clickModalOutside);
      return () => {
        document.removeEventListener("mousedown", clickModalOutside);
      };
    }, [zoomImg]);

    //
    // handleOnClick
    const handleOnClick = (event: React.MouseEvent<HTMLImageElement>) => {
      if (!!source && zoomUp) {
        setZoomImg(true);
        onClick && onClick(event);
      } else if (onClick) onClick(event);
    };

    return (
      <>
        <ImageInstance
          className="cached-image-box"
          source={source}
          alt={alt}
          size={size}
          ratio={ratio}
          objectFit={objectFit}
          borderRadius={borderRadius}
          ref={ref}
          onClick={handleOnClick}
          css={{
            cursor: (zoomUp && "pointer") || (props.onClick && "pointer"),
            userSelect: props.onClick && "none",
          }}
          {...otherProps}
        />

        {zoomImg && (
          <FixedImagePopWrap onCancel={() => setZoomImg(false)}>
            <div
              className="zoom-image"
              ref={imgRef}
              css={{
                position: "relative",
                width: "100%",
                height: "100%",
                maxWidth: 1200,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ImageInstance
                source={source}
                alt={alt}
                size={{ width: "100%", height: "auto" }}
                objectFit="contain"
              />
            </div>
          </FixedImagePopWrap>
        )}
      </>
    );
  }
);
