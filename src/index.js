import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, Dom } from "react-three-fiber";
import "./index.css";

import Controls from "./components/Controls";
import Scene from './components/Scene';

function App() {
  return (
      <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
        <Suspense
          fallback={<Dom center className="loading" children="Loading..." />}
        >
          <Controls />
          <Scene />
        </Suspense>
      </Canvas>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);