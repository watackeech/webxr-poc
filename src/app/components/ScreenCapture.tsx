import React, { useState, useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const ScreenCapture = ({
  onTextureReady,
}: {
  onTextureReady: (texture: THREE.VideoTexture) => void;
}) => {
  const [capturing, setCapturing] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const displayMediaOptions = {
    video: {
      displaySurface: "browser",
    },
    preferCurrentTab: false,
  };

  const startCapture = async () => {
    try {
      const captureStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );
      if (videoRef.current) {
        videoRef.current.srcObject = captureStream;
        videoRef.current.play();

        // Create a VideoTexture
        const videoTexture = new THREE.VideoTexture(videoRef.current);
        onTextureReady(videoTexture);

        setCapturing(true);
      }
    } catch (err) {
      console.error("エラー:", err);
    }
  };

  const stopCapture = () => {
    if (videoRef.current && videoRef.current.srcObject instanceof MediaStream) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setCapturing(false);
    }
  };

  return (
    <div>
      <button onClick={capturing ? stopCapture : startCapture}>
        {capturing ? "キャプチャ停止" : "画面キャプチャ開始"}
      </button>
      <video
        ref={videoRef}
        style={{ display: "none" }} // 画面には表示しない
      />
    </div>
  );
};

export default ScreenCapture;
