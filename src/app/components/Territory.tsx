import { RigidBody } from "@react-three/rapier";
import { Gltf } from "@react-three/drei";

function Territory() {
	return (
		<RigidBody type="fixed" colliders="trimesh">
			<Gltf
				castShadow
				receiveShadow
				position={[20, 0, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.2}
				src="/territory.glb"
			/>
		</RigidBody>
	);
}

export default Territory;
