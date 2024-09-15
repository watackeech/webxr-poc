import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d-compat";
import {
	CapsuleCollider,
	RapierRigidBody,
	RigidBody,
	useRapier,
} from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { usePersonControls } from "@/app/hooks/usePersonControls";

const MOVE_SPEED = 6;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

function Player() {
	const playerRef = useRef<RapierRigidBody>(null);
	const { forward, backward, left, right, jump } = usePersonControls();
	const rapier = useRapier();

	useFrame((state) => {
		if (!playerRef.current) return;

		// 水平移動
		const velocity = playerRef.current.linvel();

		frontVector.set(0, 0, Number(backward) - Number(forward));
		sideVector.set(Number(left) - Number(right), 0, 0);
		direction
			.subVectors(frontVector, sideVector)
			.normalize()
			.multiplyScalar(MOVE_SPEED)
			.applyEuler(state.camera.rotation);

		playerRef.current.wakeUp();
		playerRef.current.setLinvel(
			{ x: direction.x, y: velocity.y, z: direction.z },
			true,
		);

		// ジャンプ
		const world = rapier.world;
		const ray = new RAPIER.Ray(playerRef.current.translation(), {
			x: 0,
			y: -1,
			z: 0,
		});
		const hit = world.castRay(ray, 1.0, true);
		const grounded = hit && hit.collider && Math.abs(hit.timeOfImpact) <= 1.5;

		// カメラ移動
		const { x, y, z } = playerRef.current.translation();
		state.camera.position.set(x, y, z);

		if (jump && grounded) doJump();
	});
	function doJump() {
		playerRef.current?.setLinvel({ x: 0, y: 5, z: 0 }, true);
	}
	return (
		<>
			<RigidBody colliders={false} mass={1} ref={playerRef} lockRotations>
				<mesh castShadow>
					<capsuleGeometry args={[3, 0.5]} />
					<CapsuleCollider args={[3, 0.5]} />
				</mesh>
			</RigidBody>
		</>
	);
}

export default Player;
