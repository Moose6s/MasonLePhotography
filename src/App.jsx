import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/home'
import About from './Pages/about'
import ContactMe from './Pages/contactMe'
import Films from './Pages/films'
import Gallery from './Pages/gallery'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contactMe" element={<ContactMe></ContactMe>}></Route>
        <Route path="/films" element={<Films></Films>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
      </Routes>
    </Router>
  )
}

export default App
