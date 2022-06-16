import Nav from './Nav';
import '../styles/Landing.css';
import {Link} from "react-router-dom";


export default function Landing(){
    return (
    
    <main className="main">
    <Nav/>
    <h1 className="primary-title">PixeliZ - Move Faster</h1>
    <p className="primary-subtitle">Design Your Website Like never Before</p> 
    <Link to="/getstarted"><button className="btn-primary">Get started</button></Link>

    <a href="https://github.com/enbiit/PixeliZ" target="_blank" rel="noreferrer" >
          <button className="btn-secondary">Github</button>
        </a>
        
    </main>

    );
}