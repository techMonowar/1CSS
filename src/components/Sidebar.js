import '../styles/Sidebar.css';
import Nav from './Nav';
import {Link} from 'react-router-dom';

export default function Sidebar (){
    return(
        <>
        <Nav/>


        <div id="sidebar">
		<ul>
            <h3 className='sidebar-title'>Get started</h3>
            <li className='sidebar-menuItem'><Link to={`/getstarted`}>Installation</Link></li>
            <li className='sidebar-menuItem'><Link to={`/getstarted`}>Installation</Link></li>
            <li className='sidebar-menuItem'><Link to={`/getstarted`}>Installation</Link></li>
            <li className='sidebar-menuItem'><Link to={`/getstarted`}>Installation</Link></li>
            <h3 className='sidebar-title'>Documentation</h3>
            <li className='sidebar-menuItem'><Link to={`/documentation`}>Documentation</Link></li>
            <li className='sidebar-menuItem'><Link to={`/documentation`}>Documentation</Link></li>
            <li className='sidebar-menuItem'><Link to={`/documentation`}>Documentation</Link></li>
            <li className='sidebar-menuItem'><Link to={`/documentation`}>Documentation</Link></li>
            <h3 className='sidebar-title'>Components</h3>
            <li className='sidebar-menuItem'><Link to={`/components/buttons`}>Buttons</Link></li>
            <li className='sidebar-menuItem'><Link to={`/components/slider`}>Slider</Link></li>
            <li className='sidebar-menuItem'><Link to={`/components/slider`}>Slider</Link></li>
            <li className='sidebar-menuItem'><Link to={`/components/slider`}>Slider</Link></li>
            <li className='sidebar-menuItem'><Link to={`/components/slider`}>Slider</Link></li>
          
            


            
        </ul>
		<div id="sidebar-content" ></div>
        </div>

        </>
    );
}