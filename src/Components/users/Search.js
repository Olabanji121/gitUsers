import React, { useState , useContext} from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/Alert/alertContext";
// rce
const Search = () => {

	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState("");

	const handleChange = e => {
		setText(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (text === "") {
			alertContext.setAlert("Please enter your search word", "light");
		} else {
			githubContext.searchUsers(text);
			setText("");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Users..."
					value={text}
					onChange={handleChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-block btn-primary"
				/>
			</form>

			{githubContext.users.length> 0 && (
				<button className="btn btn-block btn-danger" onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	
	
	setAlert: PropTypes.func.isRequired
};

export default Search;
