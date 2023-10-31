import Data from './data/data.js'
import Header from './structure/Header.jsx';
import Footer from './structure/Footer.jsx';
import FloatingButton from './components/FloatingButton.jsx';
import Inicio from './structure/Pages/Inicio.jsx';
import Proyectos from './structure/Pages/ProyectosPage/Proyectos.jsx';
import Constructora from './structure/Pages/Constructora.jsx';
import ProyectosInfo from './structure/Pages/ProyectosPage/ProyectosInfo.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header Data={Data}></Header>
      <div className='main-body'>
        <Routes>
          <Route path="/" element={<Inicio Data={Data} /> } />
          <Route path="/proyectos" element={<Proyectos Data={Data} /> } />
          <Route path="/proyectos/:id" element={<ProyectosInfo Data={Data}/>} />
          <Route path="/constructora" element={<Constructora Data={Data}/>} />
        </Routes>
      </div>
      <FloatingButton Data={Data}></FloatingButton>
      <Footer Data={Data}></Footer>
    </Router>
  )
}

export default App