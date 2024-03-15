import Project from '../interface/IProject';

interface Props {
  project: Project;
}

function ProjectNode({ project }: Props) {
  return (
    <tr>
      <td className='projectTitle'>
        {project.projectLink && (
          <a href={project.projectLink} target='_blank'>
            {project.title}
          </a>
        )}
        {!project.projectLink && <p>{project.title}</p>}
        {project.github && (
          <>
            <br />
            <br />
            <a href={project.github} target='_blank'>
              github
            </a>
          </>
        )}
      </td>
      <td>{project.description}</td>
      <td>
        {project.video && (
          <iframe
            width='560'
            height='315'
            src={project.video}
            title='YouTube video player'
            data-frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            data-allowfullscreen
          ></iframe>
        )}
      </td>
    </tr>
  );
}

export default ProjectNode;
