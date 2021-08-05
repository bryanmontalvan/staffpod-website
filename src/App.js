import React,{ Component } from "react";
import Gist from "react-gist";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
	Tab,
	Tabs,
	Button,
	CssBaseline
} from "@material-ui/core";

import { 
	createTheme,
	MuiThemeProvider
} from "@material-ui/core/styles";

import {
	Nature,
	FilterVintage,
	Train,
	Brightness7, //light mode
	Brightness4 //dark mode
} from "@material-ui/icons";

import './css/App.css';
import "./css/microbit.css"
import Staff from "./staff";

import soarcs from "./asset/SoarCS.png";
import myr from "./asset/MYR-Project.png";

export default class MainPage extends Component {
	constructor(){
		super();
		this.state = {
			value:'a',
			darkmode: localStorage.getItem("DARK_MODE")==="true"
		};
	}

	toggleDarkMode = (event) => {
		localStorage.setItem("DARK_MODE", !this.state.darkmode);
		this.setState({darkmode:!this.state.darkmode});
	}

	navbar(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand" href="/"> <img src={soarcs} alt="nav-logo"></img></a>
				<Button
                        size="small"
						onClick={this.toggleDarkMode}>
					{this.state.darkmode?<Brightness4/>:<Brightness7/>}
				</Button>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
					<li id="a" className="nav-item">
						<a className="nav-link" href="/" onClick={this.handleClick}>Home <span className="sr-only">(current)</span></a>
					</li>
					<li id="b" className="nav-item">
						<a className="nav-link" href="/staff" onClick={this.handleClick}>Staff</a>
					</li>
					</ul>
				</div>
				</nav>
		);
	}

	MYRProjectHelper(){
		return (
			<div>
				<h2>MYR: Chaotic Forest by Zach</h2> 
				<p>Description of the Project</p>
				<a href="https://learnmyr.org/scene/610ade7aa7d371001af66ce5" rel="noopener noreferrer" target="_blank">Link to the project</a>
				<div></div> 
				<img className="App-Img" src={myr} alt=""/>
				<hr/>
			</div>
		);
	}

	PythonProjectHelper(){
		return (
			<div>
				<h2>Google Colaboratory: MBTA by Jaelyn</h2> 
				<p>Description of the Project</p>
				<a href="https://colab.research.google.com/drive/1jRuBjjaEm9jo97CbE2J107AIgAFDktYD?usp=sharing" rel="noopener noreferrer" target="_blank">Link to the project</a>
				<Gist id="009d1d63cfdd94daaae290eb4a2c9e01"></Gist>
				<hr/>
			</div>
		);
	}

	MicrobitProjectHelper(){
		return (
			<div>
				<h2>Micro:bit: Firework by Danielle</h2> 
				<p>Description of the Project</p>
				<a href="https://makecode.microbit.org/_Rv5i70aAmW6F" rel="noopener noreferrer" target="_blank">Link to the project</a>
				<div id="microbit">
					<div id="sim">
						<iframe title="Simulator" src="https://makecode.microbit.org/---run?id=_8pRWHK8yhCd7" allow="fullscreen" sandbox="allow-popups allow-forms allow-scripts allow-same-origin"></iframe>
					</div>
					<div id="code">
						<iframe title="Code" src="https://makecode.microbit.org/---codeembed#pub:_8pRWHK8yhCd7" allow="fullscreen" sandbox="allow-scripts allow-same-origin"></iframe>
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
	

	handleChange = (event, newValue) => {
		this.setState({value:newValue});
	};

	projects(){
		return( 
		<div>
			<Tabs id="project-tabs" variant="fullWidth" value={this.state.value} onChange={this.handleChange}>
				<Tab
					icon={<Nature/>}
					label="MYR"
					value='a' />
				<Tab
					icon={<FilterVintage/>}
					label="Micro:bit"
					value='b' />
				<Tab
					icon={<Train/>}
					label="Python"
					value='c' />
			</Tabs>
			{this.state.value === "a" &&
			<div style={{ marginTop: 0, overflow: "visible" }}>
				{this.MYRProjectHelper()}
			</div>}
			{this.state.value === "b" &&
			<div style={{ marginTop: 0, overflow: "visible" }}>
				{this.MicrobitProjectHelper()}
			</div>}
			{this.state.value === "c" &&
			<div style={{ marginTop: 0, overflow: "visible" }}>
				{this.PythonProjectHelper()}
			</div>}
		</div>);
	}

	render(){
		console.log(this.state.darkmode);
		const theme = this.state.darkmode ? {palette:{type: 'dark'}} : {palette: { type: 'light'}};
		console.log(theme);
		return (
			<MuiThemeProvider theme={createTheme(theme)}>
			<CssBaseline/>
			<div className="App">
				<Router>
					{this.navbar()}
					<div className="content">
						<Switch>
							<Route exact path="/">
								<h1>SoarCS Staff Presentation</h1>
								{this.projects()}
							</Route>
							<Route path="/staff">
								<Staff />
							</Route>
						</Switch>
					</div>
					<hr/>
					{this.FooterHelper()}
				</Router>
			</div>
			</MuiThemeProvider>
		  );
	}
};
