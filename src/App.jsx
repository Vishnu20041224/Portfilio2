import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import heroPatten from "./assets/herobg.png"
import Fotter from './components/Fotter'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-[#050816]'>
          <div className='bg-[url("./assets/herobg.png")] bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
          <Fotter />

        </div>
      </BrowserRouter>
    </>
  )
}

export default App