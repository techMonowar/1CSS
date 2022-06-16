import Sidebar from "./Sidebar";
import '../styles/Getstarted.css';


export default function Getstarted (){
    return(
<div id="container">
    <Sidebar/>
        <div id="content">
    <h3>Installation</h3>

		<button className="btn-primary">Primary</button>
		<div id="main-content" ></div>
	</div>
</div>
    );
}