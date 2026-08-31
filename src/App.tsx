import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/Home/HomePage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'
import ProjectsPage from './pages/Projects/ProjectsPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}>
          </Route>
          <Route path="/projects" element={<ProjectsPage />}>
          </Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
