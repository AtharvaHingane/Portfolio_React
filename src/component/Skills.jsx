import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../Style/Skills.css';
import { DataContext } from '../context/DataContext';

function Skills() {
  const { data } = useContext(DataContext);

  return (
    <div className="navlinks">
      <NavLink to="/about">About Me</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/education">Qualification</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact Me</NavLink>
      <a href={data?.about?.resume} download="Atharva_Hingane_CV.pdf">Download CV</a>
    </div>

  );
}

export default Skills;