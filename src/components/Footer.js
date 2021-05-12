import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

const Footer = () => (
    <div className={'p-3 small'} style={{marginTop:64, color:'#CCC'}}>
        <div>Hit <span role="img" aria-label="star">⭐</span> on <a rel="noopener noreferrer" className="link" href={'https://github.com/Niush/nano-vanity'} target="_blank">GitHub</a> to let me know you liked it.</div>
        <div title="">
            <span id={'changelog'}>
                <UncontrolledTooltip placement="left" target={'changelog'}>
                    <>Notable Changes: <br/>- Use nano_ address (instead of xrb) <br/>- Updated all packages to latest version<br/>- Added support for both Prefix and Suffix<br/>- Dark Mode</>
                </UncontrolledTooltip>
                Updated by
            </span>
            <a rel="noopener noreferrer" className="link" href={'https://github.com/Niush'} target="_blank"> Niush Sitaula</a>
        </div>
        <div>Original Author: <a rel="noopener noreferrer" className="link" href={'https://github.com/vitorcremonez/nano-vanity'} target="_blank">Vitor Cremonez</a></div>
        <br/>
        <b style={{whiteSpace: "pre-wrap", width: "100%", overflow: "auto", display: "block"}}>Donate: <span className="blueish">nano_3</span>78shkx4k3wd5gxmj3xnjwuxtaf9xrehyz7ugakpiemh8arxq8w9a9x<span className="blueish">niush</span></b>
        <br/><br/>
        <span id={'what-is-nano'}>
                <UncontrolledTooltip placement="left" target={'what-is-nano'}>
                    <b>Nano is decentralized, sustainable, and secure digital money.<br/>Nano is perfect for everyday transactions - no fuss, no fees, no waiting.<br/>This is what simple and easy-to-use digital money feels like.<br/><h5>And Eco-friendly too.</h5></b>
                </UncontrolledTooltip>
            <b>What is <a rel="noopener noreferrer" className="link" href={'https://nano.org/'} target="_blank">Nano</a>?</b>
        </span>
    </div>
);

export default Footer;