import '../styles/Nav.css';
import '../styles/App.css';
import { Link } from 'react-router-dom';
export default function Nav () {
    return(
        <nav className="nav">
        <ul>
            <Link to="/" className="brand">PixeliZ</Link>
            
        </ul>
    </nav>
    );
}