import React from "react";
import UserItem from "./UserItem";
import Spinner from '../layout/Spinning';
import propTypes from 'prop-types';

// racf

const Users = ({users, loading}) => {

    if(loading){
        return <Spinner/>
    }else{
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
	
};

const userStyle={
    display: "grid",
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',

}

Users.propTypes ={
    users:propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
}

export default Users;

// class Users extends Component {

// 	render() {
// 		return(
// <div style={userStyle}>
//     {this.props.users.map(user=>(
//         <UserItem key={user.id} user= {user}/>
//     ))}
// </div>
//         )
// 	}
// }

// const userStyle={
//     display: "grid",
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '1rem',

// }

// export default Users;
