import React, {useState} from 'react';
import Navbar from './Navbar';
import CenteredContainer from '../CenteredContainer'


const Success = () => {
    return (
        <div>
            <Navbar />
            <CenteredContainer>
                <h4>You have successfully purchased the items.</h4>
            </CenteredContainer>
        </div>
    );
}

export default Success;
