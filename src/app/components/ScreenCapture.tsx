import React, { useState, useRef } from "react";

const ScreenCapture = () => {
	const [capturing, setCapturing] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const displayMediaOptions = {
		video: {
			displaySurface: "browser",
		},
		preferCurrentTab: false,
		selfBrowserSurface: "exclude",
		systemAudio: "include",
		surfaceSwitching: "include",
		monitorTypeSurfaces: "include",
	};

	const startCapture = async () => {
		try {
			const captureStream =
				await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
			if (videoRef.current) {
				videoRef.current.srcObject = captureStream;
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
				autoPlay
				playsInline
				style={{ width: "100%", height: "auto" }}
			/>
		</div>
	);
};

export default ScreenCapture;
