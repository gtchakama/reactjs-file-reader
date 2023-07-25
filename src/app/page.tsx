"use client";

import ImageUploader from "./components/filereader";
import React, { useState } from "react";

interface ImageMetaData {
  name: string;
  width: number;
  height: number;
  type: string;
  size: number;
  lastModified: number;
}

export default function Home() {
  const [imageMetaData, setImageMetaData] = useState<ImageMetaData | null>(
    null
  );

  function convertTimestampToDate(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Returns a human-readable date string based on the user's locale
  }

  const handleImageLoad = (metaData: ImageMetaData) => {
    setImageMetaData(metaData);
  };

  const lastModifiedTimestamp = imageMetaData?.lastModified || 0;
  const dateModified = convertTimestampToDate(lastModifiedTimestamp);

  return (
    <div className=" flex justify-center h-screen items-center">
      <div>
        <h1>Image Metadata</h1>
        <ImageUploader onImageLoad={handleImageLoad} />
        {imageMetaData && (
          <div>
            <p>Name: {imageMetaData.name}</p>
            <p>Width: {imageMetaData.width}</p>
            <p>Height: {imageMetaData.height}</p>
            <p>Type: {imageMetaData.type}</p>
            <p>Size: {imageMetaData.size} bytes</p>
            <p>Last Modified: {dateModified}</p>
          </div>
        )}
      </div>
    </div>
  );
}
