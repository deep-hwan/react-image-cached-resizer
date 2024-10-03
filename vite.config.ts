import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "path";

// __dirname 대체 코드 필요하지 않음, 상대 경로로 대체

export default defineConfig({
  plugins: [
    dts({
      entryRoot: "src/package", // 상대 경로 사용
      outDir: "dist/types", // 타입 선언 파일은 별도의 디렉토리에 저장
      staticImport: true,
      insertTypesEntry: true, // 타입 선언 파일을 main entry로 추가
    }),
  ],
  build: {
    outDir: "dist", // 빌드 결과물이 저장될 디렉토리
    lib: {
      entry: "src/package/index.tsx", // 라이브러리 진입점
      name: "test-t-package", // UMD 모듈에서 사용될 이름
      fileName: (format) => `index.${format}.js`, // 각 형식별 파일 이름 지정
      formats: ["es", "cjs", "umd"], // 지원할 모듈 형식
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"], // 외부 의존성으로 설정
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
});