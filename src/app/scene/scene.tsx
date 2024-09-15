"use client";
import { Physics } from "@react-three/rapier";
import { PointerLockControls, Sky, SoftShadows } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
} from "@react-three/postprocessing";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Ground from "../components/Ground";
import Player from "../components/Player";
import { Cubes } from "../components/Cube";
import House from "../components/House";
import Territory from "../components/Territory";

const shadowOffset = 20;

export default function Scene() {
	const store = createXRStore();
	store.enterAR();
	return (
		<Canvas shadows camera={{ fov: 45, position: [0, 2, 5] }}>
			<XR store={store}>
				<SoftShadows />
				<PointerLockControls />
				<Sky sunPosition={[200, 100, 100]} />
				<ambientLight intensity={1.5} />
				<directionalLight
					castShadow
					intensity={1.5}
					shadow-mapSize={4096}
					shadow-camera-top={shadowOffset}
					shadow-camera-bottom={-shadowOffset}
					shadow-camera-left={shadowOffset}
					shadow-camera-right={-shadowOffset}
					position={[100, 100, 100]}
				/>
				<Physics gravity={[0, -20, 0]}>
					<Ground />
					<House />
					<Territory />
					<Player />
					<Cubes />
				</Physics>
				<EffectComposer>
					<DepthOfField
						focusDistance={0}
						focalLength={0.02}
						bokehScale={2}
						height={480}
					/>
					<Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
				</EffectComposer>
			</XR>
		</Canvas>
	);
}
