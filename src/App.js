import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import Users from "./Components/users/Users";
import User from "./Components/users/User";
import axios from "axios";
import Search from "./Components/users/Search";
import Alert from "./Components/layout/Alert";
import About from "./Components/pages/About";

export default class App extends Component {
	state = {
		users: [],
		user: {},
		repos: [],
		loading: false,
		alert: null
	};
	// async componentDidMount(){
	//   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET)
	//   this.setState({
	//     loading: true,
	//   })

	//   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

	//   this.setState({
	//     users: res.data,
	//     loading: false
	//   })

	//   console.log(res.data)

	// }

	// search github users
	searchUsers = async text => {
		// console.log(text)
		this.setState({
			loading: true
		});
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data.items)
		this.setState({
			users: res.data.items,
			loading: false
		});
	};

	getUser = async login => {
		this.setState({
			loading: true
		});
		const res = await axios.get(
			`https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data.items)
		this.setState({
			user: res.data,
			loading: false
		});
	};

	getUserRepos = async login => {
		this.setState({
			loading: true
		});
		const res = await axios.get(
			`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// console.log(res.data.items)
		this.setState({
			repos: res.data,
			loading: false
		});
	};

	clearUsers = () => {
		this.setState({
			users: [],
			loading: false
		});
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => {
			this.setState({ alert: null });
		}, 3000);
	};

	render() {
		const { users, loading, user, repos } = this.state;
		return (
			<Router>
				<div className="App">
					<NavBar title="Github Finder" icon="fab fa-github" />
					<div className="container">
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={this.state.users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={loading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/User/:login"
								render={props => (
									<User
										{...props}
										getUser={this.getUser}
										user={user}
										loading={loading}
										getUserRepos={this.getUserRepos}
										repos= {repos}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
