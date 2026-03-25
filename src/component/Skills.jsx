import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import '../Style/Skills.css';
import { DataContext } from '../context/DataContext';



function Skills() {
  const { data } = useContext(DataContext);
  const [firstLoad, setFirstLoad] = React.useState(() => {
    const seen = sessionStorage.getItem('visited');
    return !seen; 
  });

  React.useEffect(() => {
    if (firstLoad) {
      sessionStorage.setItem('visited', '1');
      const id = setTimeout(() => setFirstLoad(false), 1);
      return () => clearTimeout(id);
    }
  }, [firstLoad]);

  return (
    <div className="navlinks">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `nav-item ${isActive ? 'active' : ''} ${firstLoad ? 'initial-red' : ''}`
        }
      >
        About Me
      </NavLink>
      <NavLink to="/skills" className="nav-item">
        Skills
      </NavLink>
      <NavLink to="/education" className="nav-item">
        Qualification
      </NavLink>
      <NavLink to="/projects" className="nav-item">
        Projects
      </NavLink>
      <NavLink to="/contact" className="nav-item">
        Contact Me
      </NavLink>
      <a href={data?.about?.resume} download="Atharva_Hingane_CV.pdf">
        Download CV
      </a>
    </div>
  );
}

export default Skills;