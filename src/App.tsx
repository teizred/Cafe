import './styles/global.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Services from './pages/Services.tsx'
import NotFound from './pages/NotFound.tsx'
import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'
import LogIn from './pages/LogIn.tsx'
import SignUp from './pages/SignUp.tsx'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
