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

const shadowOffset = 20;
const store = createXRStore();

export default function App() {
	const [red, setRed] = useState(false);
	return (
		<>
			<button onClick={() => store.enterVR()}>Enter VR</button>
			<Canvas shadows>
				<XR store={store}>
					<mesh
						pointerEventsType={{ deny: "grab" }}
						onClick={() => setRed(!red)}
						position={[0, 1, -1]}
					>
						<boxGeometry />
						<meshBasicMaterial color={red ? "red" : "blue"} />
					</mesh>
				</XR>
			</Canvas>
		</>
	);
}
