# <div align="left">

<h1>react-image-cached-resizer</h1>

<p>
It is an image component that provides fast loading speed and high performance in React.js
Experience various performances from memory cache to resizing

</p>
</div>

[![GitHub](https://img.shields.io/github/license/beforesemicolon/flatlist-react)](https://github.com/deep-hwan/react-image-cached-resizer/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/flatlist-react)](https://github.com/deep-hwan/react-image-cached-resizer)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/beforesemicolon/flatlist-react)](https://github.com/deep-hwan/react-image-cached-resizer)

# react-image-cached-resizer

</div>

## Install

    npm install react-image-cached-resizer

    yarn add react-image-cached-resizer

---

## We offer a variety of functions

👍 Improved image rendering speed and performance

✅ Image Resizing and Optimizing Rendering

✅ Provides Webp extension conversion

✅ Image Memory Cache

✅ server-side rendering

🗃 Provide ️ image or avatar widget types

🔍 Provide image magnification

---

## How to use

```ts
import { Image, Avatar } from "react-image-cached-resizer";

function App() {
  return (
    <>
      <Image
        source="https://avatars.githubusercontent.com/u/120083142?v=4" // Image source url
        alt="this image"
        size={{ maxWidth: 400, maxHeight: 300 }} // Image sizes
        ratio={{ x: 3, y: 2 }} // Image size percentage (ratio)
        objectFit="cover"
        zoomUp={true} // Image zoom pop-up or not
        borderRadius={10}
        onClick={() => console.log("onClick")}
      />

      <Avatar
        source="https://avatars.githubusercontent.com/u/120083142?v=4" // Avatar source url
        alt="user-avatar"
        size={100} // Avatar size
        zoomUp={true} // Avatar zoom pop-up or not
        borderRadius={100}
        zoomUpImageSize={400}
        onClick={() => console.log("onClick")}
      />
    </>
  );
}
```

---

## Image : Use Documentation

| Props          | Type                                              | Features                                                       | Description                                                    | Default   |
| -------------- | ------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | --------- |
| source (\*)    | string , File                                     | Image source url                                               | Enter the image url or Public image path.                      |           |
| alt (\*)       | string , alt                                      | alt                                                            |                                                                |           |
| zoomUp         | boolean                                           | Image zoom pop-up or not                                       | Image zoom pop-up or not                                       | false     |
| size.width     | "auto" , "100%" , string                          | You can set a width value within the size.                     | ex_width={{width:’100%’}}                                      | 100%      |
| size.minWidth  | number , string                                   | You can set the minWidth value within the size.                | ex_minWidth={{minWidth:300}}                                   | auto      |
| size.maxWidth  | number , string                                   | You can set the maxWidth value within the size.                | ex_maxWidth={{maxWidth:300}}                                   | auto      |
| size.height    | "auto" , "100%" , string                          | You can set a height value within the size.                    | ex_height={{height:’100%’}}                                    | 100%      |
| size.minHeight | number , string                                   | You can set the minHeight value within the size.               | ex_minHeight={{minHeight:300}}                                 | auto      |
| size.maxHeight | number , string                                   | You can set the maxHeight value within the size.               | ex_maxHeight={{maxHeight:300}}                                 | auto      |
| ratio          | { x?: number; y?: number }                        | Image size percentage (ratio)                                  | Image size percentage (ratio)                                  |           |
| objectFit      | "cover" , "contain" , "fill" , "none" , undefined | Specify how you want to size your content to fit your elements | Specify how you want to size your content to fit your elements | undefined |
| borderRadius   | number , string                                   | borderRadius                                                   | borderRadius                                                   | 0         |
| … props        |                                                   |                                                                |                                                                |           |

---

---

## Avatar : Use Documentation

| Props           | Type                                              | Features                                                       | Description                                                    | Default   |
| --------------- | ------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | --------- |
| source (\*)     | string , File                                     | Image source url                                               | Enter the image url or Public image path.                      |           |
| alt (\*)        | string , alt                                      | alt                                                            |                                                                |           |
| zoomUp          | boolean                                           | Image zoom pop-up or not                                       | Image zoom pop-up or not                                       | false     |
| zoomUpImageSize | number                                            | Image zoom pop-up size                                         | Image zoom pop-up size                                         | false     |
| size            | number                                            | Avatar Image Size                                              | Avatar image size must be 1:1 ratio                            | 30        |
| objectFit       | "cover" , "contain" , "fill" , "none" , undefined | Specify how you want to size your content to fit your elements | Specify how you want to size your content to fit your elements | undefined |
| borderRadius    | number , string                                   | borderRadius                                                   | borderRadius                                                   | 0         |
| … props         |                                                   |                                                                |                                                                |           |

---

## License

MIT © Deepfactory, Inc. See [LICENSE](LICENSE) for details.

<!-- BOTTOM LOGO -->
<a title="DEEP" href="https://www.deepfactory.kr/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./src/assets/deep-white.png">
    <img alt="Toss" src="./src/assets/deep-dark.png" width="120">
