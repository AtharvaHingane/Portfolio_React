import { hr } from "framer-motion/client";
import BlurText from "../component/BlurText";
import "../Style/Aboutme.css";

function Aboutme() {
  return (
    <div className="aboutme-container">
      <h1 className="name" id="name">ATHARVA HINGANE</h1>
      <BlurText
        text="I am a passionate Frontend Developer with a strong focus on building modern, responsive, and user-friendly web applications. I specialize in creating visually appealing and highly interactive interfaces using React, JavaScript, HTML, CSS, and SQL for data handling and integration.

I have hands-on experience in developing reusable UI components, implementing responsive layouts, and optimizing performance to ensure smooth and engaging user experiences across devices. I enjoy transforming design concepts into clean, functional interfaces while maintaining accessibility, usability, and performance best practices.

With a solid understanding of JavaScript logic, state management, component-based architecture, and API integration, I create dynamic applications that feel intuitive and efficient. I also work with SQL to manage and display structured data effectively within applications.

I am continuously improving my skills, staying updated with modern frontend trends, and experimenting with new tools and technologies to enhance user experience. I thrive in collaborative environments and enjoy solving problems that lead to elegant, scalable digital solutions."
        
        className="about-text"
        delay={10}
        animateBy="words"
      />
    </div>
  );
}

export default Aboutme;
