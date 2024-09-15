import dynamic from "next/dynamic";
import React from "react";

const SceneCanvas = dynamic(() => import("./scene"), { ssr: false });

export default function Scene() {
	return <SceneCanvas />;
}
