import * as THREE from "three";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useTexture } from "@react-three/drei";
import floorTexture from "@/app/assets/glassland.jpg";

function Ground() {
	const texture = useTexture(floorTexture.src);
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	return (
		<RigidBody type="fixed">
			<mesh position={[0, -3, 0]} rotation-x={-Math.PI / 2}>
				<planeGeometry args={[200, 200]} />
				<meshStandardMaterial
					color="gray"
					map={texture}
					map-repeat={[100, 100]}
				/>
			</mesh>
			<CuboidCollider args={[200, -2, 200]} position={[0, -2, 0]} />
		</RigidBody>
	);
}

export default Ground;
