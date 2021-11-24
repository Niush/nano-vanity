import React from 'react';
import NanoLogo from '../assets/images/xno-badge-blue.svg';

const Header = () => {
    return (
        <div className={'p-3'} style={{marginBottom: 20}}>
            <img
                alt={'NANO VANITY'}
                src={NanoLogo}
                style={{marginBottom: "8px"}}
                height={80}
            />
            <div style={{
                color:'#CCC',
                fontWeight:'bold',
                fontSize:20,
            }}>
                NANO VANITY
            </div>
            <small style={{color:'#DDD'}}>
                version 2.0.1
            </small>
        </div>
    );
};

export default Header;