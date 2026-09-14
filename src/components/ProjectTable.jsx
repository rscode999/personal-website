import './ProjectTable.css';

import {Link} from "react-router-dom";


function ProjectTableRow({title, description, linkText, linkUrl}) {
    return (
        <div className="project-table-row-flex-row">
            <div>
                <h2 className="project-table-row-header" style={{fontSize: "25pt"}}>{title}</h2>
                <Link to={linkUrl} className='project-table-row-link-button'>{linkText}</Link>
            </div>


            <div className="project-table-row-flex-column">
                <p className='project-table-row-description'>{description}</p>
            </div>
        </div>
    );
}

/**
 * Stores each row where projects are, as listed in `projects`. Has no children.
 * 
 * Row ordering from left to right: title and link, image, description
 * @param projects list of projects. Each contains the fields `title`, `description`, `linkText`, `linkUrl`, and `imageUrl`
 */
export default function ProjectTable({ projects }) {
    return (
        <div>
            {projects.map((project, index) => (
                <ProjectTableRow
                    key={project.id || index}
                    title={project.title}
                    description={project.description}
                    linkText={project.linkText}
                    linkUrl={project.linkUrl}
                />
            ))}
        </div>
    );
}
