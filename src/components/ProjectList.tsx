import Project from '../interface/IProject';
import ProjectNode from './ProjectNode';

interface Props {
  projects: Project[];
}

function ProjectList({ projects }: Props) {
  return (
    <table>
      <tr>
        <th>project title</th>
        <th className='desc'>description</th>
        <th>demo video</th>
      </tr>
      {projects.map((project, index) => {
        return <ProjectNode key={index} project={project}></ProjectNode>;
      })}
    </table>
  );
}

export default ProjectList;
