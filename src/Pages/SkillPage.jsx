import React from 'react';
import LanguagesText from '../component/LanguagesText';
import LogoLoop from '../component/LogoLoop';
import { SiReact, SiNextdotjs, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiMysql, SiGithub } from 'react-icons/si';
import '../Style/Skills.css';

const SkillPage = () => {
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
        { node: <SiHtml5 />, title: "HTML5", href: "https://html.com" },
        { node: <SiCss3 />, title: "CSS3", href: "https://css.com" },
        { node: <SiJavascript />, title: "JavaScript", href: "https://javascript.com" },
        { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },
        { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
    ];

    // Using a bullet separator for a cleaner horizontal list look
    const textContent = `React JS • React Bits • Javascript • HTML • CSS • Bootstrap • MySQL • GitHub`;

    return (
        <div className="skill-page-container">
            <div className="languages-text-wrapper">
                <LanguagesText
                    text={textContent}
                    animateOn="view"
                    speed={100}
                // Adjust styles via prop or keeping default, ensuring container aligns it
                />
            </div>

            <div className="logo-loop-wrapper">
                <LogoLoop logos={techLogos} />
            </div>
        </div>
    );
};

export default SkillPage;
