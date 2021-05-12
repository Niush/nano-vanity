import React from 'react';
import NanoLogo from '../assets/images/nano-logo.png';

const Header = () => {
    return (
        <div className={'p-3'} style={{marginBottom: 20}}>
            <img
                alt={'NANO VANITY'}
                src={NanoLogo}
                height={100}
            />
            <div style={{
                color:'#CCC',
                fontWeight:'bold',
                fontSize:20,
            }}>
                NANO VANITY
            </div>
            <small style={{color:'#DDD'}}>
                version 2.0.0
            </small>
        </div>
    );
};

export default Header;