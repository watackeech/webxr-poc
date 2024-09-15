"use client";
import { Physics } from "@react-three/rapier";
import { PointerLockControls, Sky, SoftShadows } from "@react-three/drei";
import { XR, createXRStore } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import Ground from "./components/Ground";
import Player from "./components/Player";
import { Cubes } from "./components/Cube";
import House from "./components/House";
import Territory from "./components/Territory";

const store = createXRStore();
const shadowOffset = 20;

export default function App() {
	return (
		<>
			<button onClick={() => store.enterVR()}>Enter VR</button>
			<Canvas shadows>
				<PointerLockControls />
				<XR store={store}>
					<SoftShadows />
					<Sky sunPosition={[200, 100, 100]} />
					<ambientLight intensity={2} />
					<directionalLight
						castShadow
						intensity={1.5}
						shadow-mapSize={4096}
						position={[100, 100, 100]}
						shadow-camera-top={shadowOffset}
						shadow-camera-bottom={-shadowOffset}
						shadow-camera-left={shadowOffset}
						shadow-camera-right={-shadowOffset}
					/>
					<Physics gravity={[0, -20, 0]}>
						<Ground />
						<Territory />
						<House />
						<Player />
						<Cubes />
					</Physics>
				</XR>
			</Canvas>
		</>
	);
}
