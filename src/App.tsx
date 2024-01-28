import React from "react";

import { Avatar } from "./lib/Avatar";
import { Image } from "./lib/Image";

export default function App() {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "100vh" }}>
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
        onClick={() => console.log("onClick")}
      />
    </div>
  );
}
