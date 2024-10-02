import { Link ,Outlet} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 	  
function Layout() {
   return( <div>
      <nav >
        <ul className='nav'>
        <li className='nav-item'>
            <Link to="/" className="nav-item nav-link bg-primary text-white px-3 py-2 rounded">Home</Link>
         </li>
        <li className='nav-item'>
            <Link to="/about" className="nav-item nav-link bg-primary text-white px-3 py-2 rounded">About</Link>
         </li>
         <li>
            <Link to="/search" className="nav-item  nav-link bg-primary text-white px-3 py-2 rounded">Search</Link>
         </li>
         </ul>

      </nav>
    <hr />
   {/* L'Outlet rendra le composant enfant correspondant à la route actuelle */}
   <Outlet />
    </div>
);
}
    
export default Layout ;
