import { Link } from 'react-router-dom';

function Header(props) {
  const {Data} = props;

  return(
    <div className='navbar red sombra'>
      <div className='navbar-container text-white'>
        <div>
          <img className='navbar-logo-grande sombra' src='/logo-grande-blanco.png'/>
          <img className='navbar-logo-chico sombra' src='/logo-blanco.png'/>
        </div>
        <label htmlFor="navbar-button" className='navbar-button-menu text-size-1'>
          &#9776;
        </label>
        <input id='navbar-button' name='navbar-button' type='checkbox'/>
        <div className='navbar-links red'>
          <ul className='text-size-4 text-white'>
            <li><Link className='text-secundario-regular hover sombra' to='/'>Inicio</Link></li>
            <label> |</label>
            <li><Link className='text-secundario-regular hover sombra' to='/constructora'>Constructora</Link></li>
            <label> |</label>
            <li className='navbar-button red to-white sombra'><Link className='text-secundario-bold text-white' to='/Proyectos'>Nuestros Proyectos</Link></li>
            <li className='navbar-button white to-red sombra'><a className='text-secundario-bold text-red' href={Data.Whatsapp} target="_blank">Contáctanos</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header;