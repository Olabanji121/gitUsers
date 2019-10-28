import React, {Fragment} from 'react';
import spinner from './loading.gif'

const Spinning = () => {
    return (
        <Fragment>
            <img src={spinner} alt="loading...." style={{width:'500px',margin:'auto', display:'block', paddingTop:'50px'}}/>
        </Fragment>
    )
}

export default Spinning
