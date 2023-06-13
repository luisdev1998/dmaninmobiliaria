import Data from './data/data.js'
import Slideshow from './components/Slideshow';
import Header from './structure/Header.jsx';
import Body from './structure/Body.jsx';
import Footer from './structure/Footer.jsx';
import QuienesSomos from './structure/Pages/Quienessomos.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='wrapper'>
        <Header>
        </Header>

        <Routes>
          <Route path="/" element={<Body Data={Data} Slideshow={Slideshow} /> } />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>

        <Footer>
        </Footer>
      </div>
    </Router>
  )
}

export default App
