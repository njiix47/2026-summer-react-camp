import { Children } from "react";

function ProjectCard({title, role, count ,children}) {
    return (
        <>
            <h3>{title}</h3>
            <p>모집전공 : {role}</p>
            <p>모집인원 : {count}</p>
            <div>{children}</div>
        </>
    );
}

export default ProjectCard;