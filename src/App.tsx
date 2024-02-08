import './App.css';
import ProjectList from './components/ProjectList';
import data from './assets/data.json';

function App() {
  return (
    <div>
      <p className='head'>Giovanni Alayan's Portfolio</p>
      <ProjectList projects={data.projects}></ProjectList>
    </div>
  );
}

export default App;
