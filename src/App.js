import { Component } from "react";
import Gist from "react-gist";

import './css/App.css';
import "./css/microbit.css"

import soarcs from "./asset/SoarCS.png";
import myr from "./asset/MYR-Project.png";


export default class MainPage extends Component {

	navbar(){
		return (
			<nav class="navbar navbar-expand-lg navbar-light">
				<a class="navbar-brand" href="#"> <img src={soarcs} alt="nav-logo"></img></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
					<li class="nav-item active">
						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Staff</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">Winners</a>
					</li>
					</ul>
				</div>
				</nav>
		);
	}


	MYRProjectHelper(){
		return (
			<div>
				<h2>Title of the MYR Project by Zach</h2> 
				<p>Description of the Project</p>
				<a href="https://learnmyr.org">Link to MYR project</a>
				<div></div> 
				<img className="App-Img" src={myr} alt=""/>
				<hr/>
			</div>
		);
	}

	PythonProjectHelper(){
		return (
			<div>
				<h2>Title of the Python Project by Jaelyn</h2> 
				<p>Description of the Project</p>
				<a href="https://colab.research.google.com">Link to Colab project</a>
				<Gist id="e5b7a3d5778d1bb73869f6e6f8412225"></Gist>
				<hr/>
			</div>
		);
	}

	MicrobitProjectHelper(){
		return (
			<div>
				<h2>Title of the MicroBit Project by Danielle</h2> 
				<p>Description of the Project</p>
				<a href="https://makecode.microbit.org">Link to MicroBit project</a>
				<div id="microbit">
					<div id="sim">
						<iframe title="Simulator" src="https://makecode.microbit.org/---run?id=_0hb4iPUfvJ1c" allow="fullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe>
					</div>
					<div id="code">
						<iframe title="Code" src="https://makecode.microbit.org/---codeembed#pub:_0hb4iPUfvJ1c" allow="fullscreen" sandbox="allow-scripts allow-same-origin"></iframe>
					</div>
				</div>
				<hr/>
			</div>
		);
	}

	FooterHelper(){
		return (
			<div>
				<h3>Footer</h3>
				<a href="https://www.uml.edu/sciences/soarcs.aspx" rel="noopener noreferrer" target="_blank">
					<img className="App-logo" src={soarcs} alt=""/>
				</a>
				<a href="https://github.com/bryanmontalvan/staffpod-website" rel="noopener noreferrer" target="_blank">
					<img className="App-logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="link to src code"/>
				</a>
			</div>
		);
	}

	render(){
		return (
			<div className="App">
				{this.navbar()}
				<h1>SoarCS Staff Presentation</h1>
				{this.MYRProjectHelper()}
				{this.MicrobitProjectHelper()}
				{this.PythonProjectHelper()}
				<hr/>
				{this.FooterHelper()}	
			</div>
		  );
	}
};
