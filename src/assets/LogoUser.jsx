import React from 'react';

export function LogoUser() {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <g fillRule="evenodd" clipRule="evenodd">
        <path
          fill={getRandomColor()}
          d="M449.11 362.13c20.15 6.89 33.08 25 33.08 46.26v84.27c0 10.66-8.67 19.33-19.33 19.33H49.14c-10.66 0-19.33-8.67-19.33-19.33v-84.27c0-21.26 12.93-39.37 33.08-46.26l115.82-39.83c6.55-2.27 10.74-8.16 10.74-15.08v-42.69c0-4.82 3.94-8.76 8.79-8.76h115.51c4.85 0 8.76 3.94 8.76 8.76v42.69c0 6.92 4.22 12.81 10.77 15.08z"
        ></path>
        <path
          fill="#acabac"
          d="M189.46 291.52v-26.99c0-4.82 3.94-8.76 8.79-8.76h115.51c4.85 0 8.76 3.94 8.76 8.76v26.99c-19.9 11.59-42.52 18.14-66.53 18.14-23.99 0-46.61-6.55-66.53-18.14z"
        ></path>
        <path
          fill="#454d56"
          d="M251.82 255.77h8.36c4.85 0 8.76 3.94 8.76 8.76v238.71c0 4.82-3.91 8.76-8.76 8.76h-8.36c-4.85 0-8.79-3.94-8.79-8.76V264.53c0-4.82 3.94-8.76 8.79-8.76z"
        ></path>
        <path
          fill="#eceaec"
          d="M255.99 297.3c72.57 0 131.75-66.78 131.75-148.65S328.55 0 255.99 0 124.23 66.79 124.23 148.65 183.42 297.3 255.99 297.3z"
        ></path>
        <g fill={getRandomColor()}>
          <path d="M128.46 512H49.14c-10.66 0-19.33-8.67-19.33-19.33V408.4c0-21.26 12.93-39.37 33.08-46.26l62.7-21.57a8.746 8.746 0 0111.62 8.31v154.38c0 4.8-3.94 8.74-8.75 8.74zM449.11 362.13c20.15 6.89 33.08 25 33.08 46.26v84.27c0 10.66-8.67 19.33-19.33 19.33h-79.31c-4.82 0-8.76-3.94-8.76-8.76V348.86c0-6.07 5.9-10.26 11.62-8.31zM304.69 18.34v146.21h-97.37V18.34c0-4.99 2.98-9.24 7.65-10.97 26.48-9.72 55.59-9.72 82.06 0 4.68 1.73 7.66 5.98 7.66 10.97z"></path>
        </g>
        <path
          fill="#0e212b"
          d="M384.99 118.29c3.86 20.92 3.66 42.75-.57 63.58-2.18 10.88-8.25 19.42-17.8 25.11-63.64 37.87-157.61 37.87-221.24 0-9.55-5.7-15.62-14.23-17.8-25.11-4.22-20.83-4.42-42.66-.57-63.61.71-3.97 3.94-6.86 7.99-7.14 80.67-5.78 161.32-5.75 241.99 0 4.06.29 7.29 3.18 8 7.17z"
        ></path>
        <path
          fill="#0d1e27"
          d="M172.28 220.11c-9.41-3.71-18.43-8.08-26.9-13.12-9.55-5.7-15.62-14.23-17.8-25.11-4.05-20.1-4.39-41.1-.96-61.34l.09-.51c.06-.43.14-.82.2-1.25l.14-.65c.77-3.91 3.97-6.72 7.97-7 12.16-.88 24.35-1.62 36.54-2.24v99.75c-.02 3.88.24 7.7.72 11.47z"
        ></path>
        <path
          fill="#d4d3d4"
          d="M127.04 118.12c6.15-33.31 22.2-62.5 44.5-83.56v74.32c-12.19.62-24.38 1.36-36.54 2.24-3.99.29-7.2 3.09-7.96 7z"
        ></path>
        <path fill="#eceaec" d="M126.7 120.02c.06-.43.14-.82.2-1.25-.06.43-.15.83-.2 1.25z"></path>
        <path
          fill="#d4d3d4"
          d="M257.97 297.27h-1.98c-72.77 0-131.75-66.53-131.75-148.62 0-9.61.82-19.02 2.38-28.12-3.43 20.24-3.09 41.24.96 61.34 2.18 10.88 8.25 19.42 17.8 25.11 8.48 5.05 17.49 9.41 26.9 13.12 5.58 42.68 41.81 76.07 85.69 77.17z"
        ></path>
        <path
          fill="#b91d24"
          d="M52.26 417.69c0-21.29 12.93-39.37 33.08-46.26l51.87-17.86v-4.71c0-6.04-5.9-10.26-11.59-8.31l-62.73 21.57c-20.15 6.89-33.08 25-33.08 46.26v84.27c0 10.66 8.67 19.33 19.33 19.33h5.92a19.108 19.108 0 01-2.81-10.03v-84.26z"
        ></path>
        <path
          fill="#acabac"
          d="M137.21 348.86v4.71l63.95-22c6.55-2.24 10.74-8.14 10.74-15.05v-14.51c-7.77-2.81-15.28-6.32-22.45-10.49v15.7c0 6.92-4.2 12.81-10.74 15.08l-53.09 18.26c5.7-1.96 11.59 2.27 11.59 8.3z"
        ></path>
      </g>
    </svg>
  );
}