import Project from '../interface/IProject';
import ProjectNode from './ProjectNode';

interface Props {
  projects: Project[];
}

function ProjectList({ projects }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>project title</th>
          <th className='desc'>description</th>
          <th>demo video</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => {
          return <ProjectNode key={index} project={project}></ProjectNode>;
        })}
      </tbody>
    </table>
  );
}

export default ProjectList;
