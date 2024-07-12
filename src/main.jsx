import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";
import Title from "./Title.jsx";
import Social from "./Social.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(

    <div className="container">
    <Title />
    <Social/>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1, 5, 4],
      }}
    >
      <Laptop />
    </Canvas>
  </div>


)
