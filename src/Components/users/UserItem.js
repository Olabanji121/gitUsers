import React from "react";
import PropTypes from 'prop-types';

// using Stateless Functional Components 
const UserItem = ({user:{login, avatar_url, html_url}})=>{

		// const {login, avatar_url, html_url}= props.user;

		return (
			<div className="card text-center">
				<img
					src={avatar_url}
					alt=" user"
					className="round-img"
					style={{ width: "60px" }}
				/>
				<h3>{login}</h3>
				<div>
					<a href={html_url}  target="_blank" rel="noopener noreferrer"className="btn btn-primary btn-sm my-1">More</a>
				</div>

			</div>
		);
	
}

UserItem.prototypes ={
	user: PropTypes.object.isRequired,
}

export default UserItem;
