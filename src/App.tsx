/** @jsxImportSource @emotion/react */
import React from "react";

import { Avatar } from "./lib/Avatar";
import { Image } from "./lib/Image";

export default function App() {
  return (
    <div
      css={{
        maxWidth: 1200,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Image
        source="https://avatars.githubusercontent.com/u/120083142?v=4" // Image source url
        alt="this image"
        ratio={{ x: 1, y: 1 }} // Image size percentage (ratio)
        objectFit="cover"
        borderRadius={10}
        zoomUp={true} // Image zoom pop-up or not
        onClick={() => console.log("onClick")}
      />

      <Image
        source="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/27c24767-7a01-485e-665a-91c07b629c00/public" // Image source url
        alt="this image"
        objectFit="cover"
        borderRadius={10}
        zoomUp={true} // Image zoom pop-up or not
        onClick={() => console.log("onClick")}
      />

      <Avatar
        source="https://avatars.githubusercontent.com/u/120083142?v=4" // Avatar source url
        alt="user-avatar"
        size={100} // Avatar size
        borderRadius={1000}
        zoomUpImageSize={800}
        zoomUp={true} // Avatar zoom pop-up or not
        onClick={() => console.log("onClick")}
      />
    </div>
  );
}
