import React from "react";
import Particles from "./Particles";
import "../Style/Particles.css";

const Particlerender = () => {
  return (
    <div className="particles-wrapper">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
      />
    </div>
  );
};

export default Particlerender;
