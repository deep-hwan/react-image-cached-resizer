/** @jsxImportSource @emotion/react */
import {
  ForwardedRef,
  ImgHTMLAttributes,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
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

    const [currentHeight, setCurrentHeight] = useState<string>("auto");
    const localImgRef = useRef<HTMLImageElement | null>(null);

    // WebP 변환 함수
    const convertToWebP = useCallback(
      (source: string) => {
        const img = document.createElement("img");
        img.crossOrigin = "anonymous";
        img.src = source;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) return;

          // 크기 리사이징 (이미지가 깨지지 않도록 설정)
          const maxWidth = size?.maxWidth
            ? parseInt(size.maxWidth.toString(), 10)
            : img.width;
          const maxHeight = size?.maxHeight
            ? parseInt(size.maxHeight.toString(), 10)
            : img.height;

          // 해상도 유지를 위한 리사이징
          canvas.width = maxWidth;
          canvas.height = maxHeight;

          ctx.drawImage(img, 0, 0, maxWidth, maxHeight);

          try {
            // WebP로 변환
            const webPImage = canvas.toDataURL("image/webp");
            imageCache.set(source, webPImage); // 캐시 저장
            setImageURL(webPImage); // WebP 이미지 설정
          } catch (error) {
            console.error("이미지 WebP 변환 실패", error);
          }
        };
      },
      [size]
    );

    // 이미지 로드 확인 (Intersection Observer 사용)
    useEffect(() => {
      if (
        typeof window === "undefined" ||
        typeof IntersectionObserver === "undefined"
      ) {
        return;
      }

      if (localImgRef.current) {
        const currentRef = localImgRef.current; // 안전한 참조

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) observer.unobserve(entry.target);
            });
          },
          { rootMargin: "50px", threshold: 0.01 }
        );

        observer.observe(currentRef);

        return () => {
          if (currentRef) observer.unobserve(currentRef);
        };
      }
    }, [localImgRef]);

    // 비례적 높이 계산 함수
    const calculateHeight = useCallback(
      (img: HTMLImageElement) => {
        const containerWidth =
          localImgRef.current?.parentElement?.offsetWidth || window.innerWidth;
        const aspectRatio = img.height / img.width;
        const proportionalHeightPx = containerWidth * aspectRatio;

        // size에 height가 설정되지 않은 경우 비례 높이 적용
        setCurrentHeight(
          size?.height === "auto" || !size?.height
            ? `${proportionalHeightPx}px`
            : size.height.toString()
        );
      },
      [size]
    );

    // 이미지 소스가 로드되면 WebP 변환 호출 및 원본 높이 출력
    useLayoutEffect(() => {
      if (!source) return;

      const handleImageLoad = (img: HTMLImageElement) => {
        calculateHeight(img);
        if (typeof source === "string") {
          convertToWebP(source);
        }
      };

      if (typeof source === "string") {
        const img = new Image();
        img.src = source;
        img.onload = () => handleImageLoad(img);
      } else if (source instanceof File) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result;
          if (typeof result === "string") {
            const img = new Image();
            img.src = result;
            img.onload = () => handleImageLoad(img);
          }
        };
        reader.readAsDataURL(source);
      }
    }, [source, convertToWebP, calculateHeight]);

    // size에 따른 스타일 적용
    const imageSizeStyle = {
      width: size?.width ?? "100%", // 기본적으로 너비 100%
      minWidth: size?.minWidth,
      maxWidth: size?.maxWidth,
      height: currentHeight, // 비례 높이 적용
      minHeight: size?.minHeight,
      maxHeight: size?.maxHeight || currentHeight, // maxHeight이 없을 경우 currentHeight 사용
      aspectRatio: ratio ? `${ratio.x}/${ratio.y}` : "",
    };

    return (
      <img
        ref={(element) => {
          localImgRef.current = element;
          if (typeof ref === "function") {
            ref(element);
          } else if (ref && element) {
            (ref as React.MutableRefObject<HTMLImageElement>).current = element;
          }
        }}
        src={imageURL}
        alt={alt}
        loading="lazy"
        css={{
          ...imageSizeStyle,
          objectFit,
          borderRadius,
        }}
        {...props}
      />
    );
  }
);
