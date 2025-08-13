
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './contact'
import Login from './login'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Services from './services'
import About from './about'
import Home from './home'
import LandingPage from './land'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Signup />}></Route>
          <Route path='/land' element={<LandingPage />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
