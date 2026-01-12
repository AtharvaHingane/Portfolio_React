import Particlerender from "./component/Particlerender";
import Aboutme from "./component/Aboutme";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./Style/Fonts.css";

import Skills from "./component/Skills";
import Education from './component/Education';
import SkillPage from "./Pages/SkillPage";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <Particlerender />

      <div className="app-content">
        <Skills />
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
