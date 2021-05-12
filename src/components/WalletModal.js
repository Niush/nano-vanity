import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';
import QRCode from 'qrcode.react';

class WalletModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        Wallet
                    </ModalHeader>
                    <ModalBody className={'text-center'}>
                        <h2>
                            <b>SEED</b>
                        </h2>
                        <h2>
                            <QRCode
                                size={155}
                                value={this.props.seed}
                                renderAs="svg"
                                bgColor="#000034"
                                fgColor="#fff"
                            />
                        </h2>
                        <p className={'responsive-text'}>
                            {this.props.seed}
                        </p>

                        <div className={'small'} style={{color:'#AAA'}}>
                            Copy your SEED and save to use in the <a rel="noopener noreferrer" className="link" href={'https://vitorcremonez.github.io/nano-paper-wallet/'} target={'_blank'}>paperwallet</a> or importing in your favorite wallet (<a rel="noopener noreferrer" className="link" href={'https://natrium.io/'} target={'_blank'}>natrium</a>, <a rel="noopener noreferrer" className="link" href={'https://nault.cc/'} target={'_blank'}>nault</a> etc.)
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default WalletModal;