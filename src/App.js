import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Projects from './Components/Projects'
import Education from './Components/Education';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Intro/>
      <Resume/>
      <Skills/>
      <Education/>
      <Projects/>
      
      
    </div>
  );
}

export default App;
