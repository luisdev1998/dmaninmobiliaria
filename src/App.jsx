import Data from './data/data.js'
import Header from './structure/Header.jsx';
import Footer from './structure/Footer.jsx';
import Inicio from './structure/Pages/Inicio.jsx';
import Lotes from './structure/Pages/LotesPage/Lotes.jsx';
import QuienesSomos from './structure/Pages/Quienessomos.jsx';
import Constructora from './structure/Pages/Constructora.jsx';
import Proyecto from './structure/Pages/Proyecto.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio Data={Data} /> } />
        <Route path="/lotes" element={<Lotes Data={Data} /> } />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/constructora" element={<Constructora />} />
        <Route path="/proyecto/:id" element={<Proyecto Data={Data}/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App