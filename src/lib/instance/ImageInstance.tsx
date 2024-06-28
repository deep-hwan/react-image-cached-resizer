/** @jsxImportSource @emotion/react */
import React, {
  useState,
  useEffect,
  useRef,
  ImgHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react";

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
}

const imageCache = new Map();

export const ImageInstance = forwardRef<HTMLImageElement, ImageProps>(
  (
    { source, alt, size, objectFit = "fill", borderRadius, ratio, ...props },
    ref: ForwardedRef<HTMLImageElement>
  ) => {
    const blurDataURL =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC";
    const [imageURL, setImageURL] = useState<string>(blurDataURL);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      if (
        typeof window === "undefined" ||
        typeof IntersectionObserver === "undefined"
      ) {
        setIsLoaded(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "50px", threshold: 0.01 }
      );

      if (imgRef.current) observer.observe(imgRef.current);

      return () => {
        if (imgRef.current) observer.unobserve(imgRef.current);
      };
    }, [imgRef]);

    useEffect(() => {
      if (isLoaded) {
        if (typeof window === "undefined") {
          setImageURL(source instanceof File ? "" : source); // ssr
        } else {
          if (source instanceof File) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const result = e.target?.result;
              if (typeof result === "string") {
                resizeImage(result);
              }
            };
            reader.readAsDataURL(source);
          } else if (typeof source === "string") {
            setImageURL(source);
          }
        }
      }
    }, [source, isLoaded]);

    //
    // image resizing logic
    const resizeImage = (source: string) => {
      const img = document.createElement("img");
      img.crossOrigin = "anonymous"; // CORS 정책 준수
      img.src = source;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const maxWidth = size?.maxWidth
          ? parseInt(size.maxWidth.toString(), 10)
          : img.width;
        const maxHeight = size?.maxHeight
          ? parseInt(size.maxHeight.toString(), 10)
          : img.height;

        canvas.width = maxWidth ?? size?.minWidth;
        canvas.height = maxHeight ?? size?.minHeight;

        ctx.drawImage(img, 0, 0, maxWidth, maxHeight);

        try {
          const resizedImage = canvas.toDataURL();
          imageCache.set(source, resizedImage);
          setImageURL(resizedImage);
        } catch (error) {
          console.error("Canvas data extraction failed", error);
        }
      };
    };

    const imageSizeStyle = {
      width: size?.width ?? "100%",
      height: size?.height ?? "auto",
      minWidth: size?.minWidth ?? "auto",
      maxWidth: size?.maxWidth ?? "auto",
      minHeight: size?.minHeight ?? "auto",
      maxHeight: size?.maxHeight ?? "auto",
      backgroundImage:
        imageURL === blurDataURL ? `url('${blurDataURL}')` : "none",
      backgroundSize: "cover",
      filter: imageURL === blurDataURL ? "blur(px)" : "none",
      aspectRatio: ratio ? `${ratio.x}/${ratio.y}` : "",
    };

    console.error = () => {};

    return (
      <img
        ref={imgRef}
        src={imageURL}
        alt={alt}
        loading="lazy"
        css={{
          ...imageSizeStyle,
          objectFit,
          borderRadius,
          aspectRatio: ratio ? `${ratio.x}/${ratio.y}` : "",
        }}
        {...props}
      />
    );
  }
);
