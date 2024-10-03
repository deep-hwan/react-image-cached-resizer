/** @jsxImportSource @emotion/react */

import { Avatar, Image } from './package';

export default function App() {
  return (
    <div
      style={{
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
      }}
    >
      <Image
        source='https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/3c5bd5dc-5243-4cb4-5828-f24efdffe200/public' // Image source url
        alt='this image'
        borderRadius={10}
        zoomUp={true}
        onClick={() => console.log('onClick')}
      />

      <Avatar
        source='https://avatars.githubusercontent.com/u/120083142?v=4' // Avatar source url
        alt='user-avatar'
        size={100} // Avatar size
        borderRadius={1000}
        zoomUpImageSize={800}
        zoomUp={true} // Avatar zoom pop-up or not
        onClick={() => console.log('onClick')}
      />
    </div>
  );
}
