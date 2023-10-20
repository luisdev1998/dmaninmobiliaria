import { Link } from 'react-router-dom';
function Header() {
    return(
        <div className='navbar'>
          <div className='container flex horizontal-adjust space-header-footer' style={{alignItems:"center"}}>
            <div style={{flex: 1}}>
              <img onClick={()=> window.open("/","_self")} className='logo-header-grande' src='/logo-grande-blanco.png'/>
              <img onClick={()=> window.open("/","_self")} className='logo-header-corto' src='/logo-blanco.png'/>
            </div>
            <div className='navbar-menu'>
              <label htmlFor="btn">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
                </svg>
              </label>
            </div>
            <input id='btn' name='btn' type='checkbox'/>
            <div className='links'>
              <ul>
                <li><Link className="text-content" to="/">Inicio</Link></li>
                <li><Link className="text-content" to="/Lotes">Lotes</Link></li>
                <li><Link className="text-content" to="/constructora">Nosotros</Link></li>
              </ul>
            </div>
          </div>
        </div>
    )
}
export default Header;