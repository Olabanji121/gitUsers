import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import User from "./Components/users/User";
import Alert from "./Components/layout/Alert";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/Alert/AlertState";

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className="App">
						<NavBar title="Github Finder" icon="fab fa-github" />
						<div className="container">
							<Alert />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/User/:login" component={User} />
								<Route component={NotFound}/>
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
