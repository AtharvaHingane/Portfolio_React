import '../Style/Project.css';
import hyperPcImg from "../assets/hyperpc.png";
import spacexImg from "../assets/spacex_preview.png";
import portfolioImg from "../assets/portfolio_preview.png";
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { BiGitBranch } from "react-icons/bi";

const projectsData = [
    {
        id: 1,
        title: "HyperPC",
        description: "Custom High-Performance Gaming Rigs and Creators workstation.",
        image: hyperPcImg,
        deployment: "hyperpc.vercel.app",
        domain: "hyperpc.io",
        status: "Ready",
        created: "12/20/25",
        branch: "main",
        commit: "d4f8a21",
        type: "Personal Project"
    },
    {
        id: 2,
        title: "SpaceX Clone",
        description: "A responsive SpaceX landing page clone with launch details.",
        image: spacexImg,
        deployment: "spacex-topaz.vercel.app",
        domain: "https://spacex-topaz.vercel.app/",
        status: "Ready",
        created: "11/13/25",
        branch: "main",
        commit: "e470358",
        type: "Mobile View Optimized"
    },
    {
        id: 3,
        title: "ProJect Portfolio",
        description: "My personal portfolio showcasing various projects and skills.",
        image: portfolioImg,
        deployment: "atharvahingane.vercel.app",
        domain: "atharva.me",
        status: "Ready",
        created: "01/01/26",
        branch: "main",
        commit: "a1c2b3d",
        type: "Personal Portfolio"
    }
];

const ProjectCard = ({ project }) => (
    <div className="project-list-card">
        <div className="card-preview">
            <img src={project.image} alt={project.title} />
        </div>
        <div className="card-info">
            <div className="info-header">
                <div className="info-group">
                    <label>Deployment</label>
                    <a href={`https://${project.deployment}`} target="_blank" rel="noopener noreferrer" className="url-text" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                        {project.deployment}
                    </a>
                </div>
                <div className="info-badge">
                    <FiCheckCircle className="status-icon" />
                    <span className="status-text">{project.status}</span>
                </div>
            </div>

            <div className="info-row">
                <div className="info-group">
                    <label>Domains</label>
                    <p className="domain-text">
                        {project.domain} <FiExternalLink className="tiny-icon" />
                    </p>
                </div>
                <div className="info-group">
                    <label>Created</label>
                    <p className="meta-text">{project.created} by H-Atharva</p>
                </div>
            </div>

            <div className="info-footer">
                <div className="source-info">
                    <label>Source</label>
                    <div className="repo-details">
                        <BiGitBranch className="tiny-icon" />
                        <span>{project.branch}</span>
                        <span className="commit-hash">{project.commit}</span>
                        <span className="project-tag">{project.type}</span>
                    </div>
                </div>
                <div className="action-icons">
                    <FiGithub className="nav-icon" />
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    return (
        <div className="projects-section">
            <h2 className="projects-title">Selected <span className="highlight">Deployments</span></h2>
            <div className="projects-list">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Projects;