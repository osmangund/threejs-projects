import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"

//! Seperating animations to new functions creates bugs

const moveToCamera = (mesh) => {
  mesh.current.position.z += 0.04
  if (mesh.current.position.z > 8) {
    mesh.current.position.z = -8
  }
}

//   const levraMaterialProps = useControls({
//     thickness: { value: 2, min: 0, max: 3, step: 0.05 },
//     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
//     transmission: { value: 1, min: 0, max: 1, step: 0.1 },
//     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
//     chromaticAberration: { value: 0.02, min: 0, max: 1 },
//     backside: { value: true },
//   })

export default function Model() {
  const mesh = useRef()
  const { nodes } = useGLTF("/medias/torus.glb")
  const { viewport } = useThree()

  let increase = true
  useFrame(() => {
    mesh.current.rotation.x += 0.027
    if (increase) {
      mesh.current.rotation.z += 0.001
      if (mesh.current.rotation.z >= 0.2) {
        increase = false
      }
    } else {
      mesh.current.rotation.z -= 0.001
      if (mesh.current.rotation.z <= 0) {
        increase = true
      }
    }
  })

  const hardMaterialProps = {
    thickness: 2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  }

  return (
    <group scale={viewport.width / 14}>
      <Text
        fontSize={1.4}
        font="fonts/Programme-Regular.ttf"
        position={[0, 0, -0.5]}
      >
        hello world!
      </Text>
      <mesh ref={mesh} {...nodes.Torus001}>
        <MeshTransmissionMaterial {...hardMaterialProps} />
      </mesh>
    </group>
  )
}
