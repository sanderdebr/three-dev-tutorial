import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = props => {
  const ref = useRef();
  const {
    camera,
    gl: { domElement }
  } = useThree();
  useFrame(() => ref.current && ref.current.update());
  return <orbitControls ref={ref} args={[camera, domElement]} {...props} />;
};

export default Controls;
