import './App.css';
import data from './assets/data.json';
import ProjectList from './components/ProjectList';
import ProjectNode from './components/ProjectNode';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(0);

  const showProject = (id: number) => {
    setShow(true);
    setCurrentProjectId(id);
  };

  return (
    <div className='d-flex flex-column align-items-center'>
      <p className='head'>Giovanni Alayan's Portfolio</p>
      <ProjectList
        titles={data.projects.map((project) => {
          return project.title;
        })}
        show={!show}
        showProject={showProject}
      ></ProjectList>
      <ProjectNode project={data.projects[currentProjectId]} show={show} handleClose={() => setShow(false)}></ProjectNode>
    </div>
  );
}

export default App;
