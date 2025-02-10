// import React from "npm:react";
import { Canvas } from "npm:@react-three/fiber";

const App = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
);

export default App;
