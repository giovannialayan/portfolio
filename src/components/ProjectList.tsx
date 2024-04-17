import { Button } from 'react-bootstrap';
import './ProjectList.css';

interface Props {
  titles: string[];
  show: boolean;
  showProject: (id: number) => void;
}

function ProjectList({ titles, show, showProject }: Props) {
  return (
    <div className={show ? 'd-flex flex-column align-items-center gap-4' : 'collapse'}>
      {titles.map((title, id) => {
        return (
          <Button variant='secondary' size='lg' className='projectButton' key={title} onClick={() => showProject(id)}>
            {title}
          </Button>
        );
      })}
    </div>
  );
}

export default ProjectList;
