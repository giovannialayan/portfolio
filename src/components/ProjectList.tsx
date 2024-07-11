import './ProjectList.css';
import Project from '../interface/IProject';

interface Props {
  projects: Project[];
  show: boolean;
  showProject: (id: number) => void;
}

function ProjectList({ projects, show, showProject }: Props) {
  return (
    <div className={show ? 'd-flex flex-row align-items-center justify-content-center flex-wrap gap-4' : 'collapse'}>
      {projects.map((project, id) => {
        return (
          <div key={id} role='button' onClick={() => showProject(id)} className='projectSelection border'>
            {project.images.length > 0 && <img src={project.images[0]} className='projectThumbnail border'></img>}
            <p className='fs-4 m-0'>{project.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
