import { RigidBody } from "@react-three/rapier";
import { Gltf } from "@react-three/drei";

function House() {
	return (
		<RigidBody type="fixed" colliders="trimesh">
			<Gltf
				castShadow
				receiveShadow
				position={[20, -3, 0]}
				scale={3}
				src="/house.glb"
			/>
		</RigidBody>
	);
}

export default House;
