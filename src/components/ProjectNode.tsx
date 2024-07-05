import Project from '../interface/IProject';
import { MdClose } from 'react-icons/md';
import './ProjectNode.css';
import ImageCarousel from './ImageCarousel';

interface Props {
  project: Project;
  show: boolean;
  handleClose: () => void;
}

function ProjectNode({ project, show, handleClose }: Props) {
  return (
    <div className={show ? 'd-flex flex-column align-items-center gap-2' : 'collapse'}>
      <div className='projectParent d-flex flex-column align-items-center gap-3 border p-4'>
        <p className='fs-3 mb-0'>{project.title}</p>

        <a role='button' className='closeButton' onClick={handleClose}>
          <MdClose size={'1.75rem'}></MdClose>
        </a>

        <p className='mb-0'>{project.date}</p>

        <p className='projectDescription'>{project.description}</p>
        {project.projectLink && (
          <a href={project.projectLink} target='_blank'>
            project
          </a>
        )}
        {project.github && (
          <a href={project.github} target='_blank'>
            github
          </a>
        )}
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
      </div>
      {!!project.images.length && <ImageCarousel images={project.images}></ImageCarousel>}
    </div>
  );
}

export default ProjectNode;
