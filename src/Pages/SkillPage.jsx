import React, { useContext } from 'react';
import LanguagesText from '../component/LanguagesText';
import LogoLoop from '../component/LogoLoop';
import { SiReact, SiNextdotjs, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiMysql, SiGithub } from 'react-icons/si';
import '../Style/Skills.css';
import { DataContext } from '../context/DataContext';

const iconMap = {
    SiReact: <SiReact />,
    SiNextdotjs: <SiNextdotjs />,
    SiBootstrap: <SiBootstrap />,
    SiHtml5: <SiHtml5 />,
    SiCss3: <SiCss3 />,
    SiJavascript: <SiJavascript />,
    SiMysql: <SiMysql />,
    SiGithub: <SiGithub />
};

const SkillPage = () => {
    const { data, loading } = useContext(DataContext);

    if (loading) return <div>Loading...</div>;

    const techLogos = data?.skills?.map(skill => ({
        node: iconMap[skill.icon],
        title: skill.title,
        href: skill.href
    })) || [];

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
