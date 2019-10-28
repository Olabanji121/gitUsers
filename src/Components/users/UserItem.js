import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

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
					<Link to={`/user/${login}`}   rel="noopener noreferrer"className="btn btn-primary btn-sm my-1">More</Link>
				</div>

			</div>
		);
	
}

UserItem.prototypes ={
	user: PropTypes.object.isRequired,
}

export default UserItem;
