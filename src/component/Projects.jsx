import '../Style/Project.css';
import { FiExternalLink, FiGithub, FiCheckCircle } from "react-icons/fi";
import { BiGitBranch } from "react-icons/bi";
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

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
                    <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                        aria-label="View Source on GitHub"
                    >
                        <FiGithub className="nav-icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const { data, loading } = useContext(DataContext);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="projects-section">
            <h2 className="projects-title">Selected <span className="highlight">Deployments</span></h2>
            <div className="projects-list">
                {data?.projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Projects;