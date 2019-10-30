import React from "react";
import RepoItem from "./RepoItem";
import PropTypes from "prop-types";
// import GithubContext from "../../context/github/githubContext";

const Repos = ({repos}) => {
    // const githubContext = useContext(GithubContext);
    // const {repos } = githubContext;
	return repos.map(repo => <RepoItem repo={repo}  key = {repo.id}/>);
};

Repos.prototype={
    repos: PropTypes.array.isRequired,
}

export default Repos;
