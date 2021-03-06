import React, { Component } from 'react';
import PropTypes from 'prop-types';
// rce
class Search extends Component {
    state={
        text:""
    }

    static propTypes={
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    handleChange= (e)=>{

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter your search word', 'light');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text: ''})
        }
        
    }

    render() {
        const {clearUsers, showClear} = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" name= 'text' placeholder='Search Users...' value={this.state.text} onChange=  {this.handleChange}/>
                    <input type="submit" value='Search' className='btn btn-block btn-primary'/>
                </form>

                {showClear && <button className="btn btn-block btn-danger" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
