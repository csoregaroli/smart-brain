import React from 'react';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    <img src={brain}></img>
                </div>
        </div>
    );
}

export default Logo