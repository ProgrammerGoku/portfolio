import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Education } from './components/Education/Education'
function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Experience/>
    <Skills/>
    <Projects/>
  </div>
}

export default App  