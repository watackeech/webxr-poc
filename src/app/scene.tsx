"use client";
import { Physics } from "@react-three/rapier";
import { PointerLockControls, Sky, SoftShadows } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
} from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import Player from "./components/Player";
import { Cubes } from "./components/Cube";
import House from "./components/House";
import Territory from "./components/Territory";
import { useState } from "react";

// const shadowOffset = 20;
const store = createXRStore();

export default function App() {
	return (
		<>
			<button onClick={() => store.enterVR()}>Enter VR</button>
			<Canvas shadows>
				<XR store={store}>
					<SoftShadows />
					<Sky sunPosition={[200, 100, 100]} />
					<ambientLight intensity={1.5} />
					<directionalLight
						castShadow
						intensity={1.5}
						shadow-mapSize={4096}
						position={[100, 100, 100]}
					/>
					<Physics gravity={[0, -20, 0]}>
						<Ground />
						<Territory />
						{/* <House />
						<Territory /> */}
						<Player />
						<Cubes />
					</Physics>
				</XR>
			</Canvas>
		</>
	);
}
