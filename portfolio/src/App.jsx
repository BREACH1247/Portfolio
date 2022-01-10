import './App.css';
import Landing from './components/Landing';
import About from './components/About'
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Counter from './components/Counter';
import Projects from './components/Projects';

function App() {
  return (
    <div id='home'>
      <Navbar/>
      <Landing/>
      <main className='maincontent'>
        <About/>
        <Skills/>
        <Counter/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
