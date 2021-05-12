import React, {Component} from 'react';
import '../styles/App.css';
import Header from './Header';
import PrefixPicker from "./PrefixPicker";
import WalletFinder from './WalletFinder';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeric_prefix: '',
            prefix: '',
            isValidPrefix: true,
            isSuffix: false
        };
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <Header/>
                <div style={{padding:"0 16px 16px 16px"}}>
                    <PrefixPicker
                        onChangeNumbericPrefix={() => {
                            console.log('Changed numeric prefix!');
                        }}
                        onChangePrefix={(prefix, isValidPrefix) => {
                            this.setState({
                                prefix: prefix,
                                isValidPrefix: isValidPrefix,
                            });
                        }}
                        onChangeIsSuffix={(isSuffix) => {
                            this.setState({isSuffix: isSuffix})
                        }}
                    />
                </div>
                <WalletFinder
                    prefix={this.state.prefix}
                    isValidPrefix={this.state.isValidPrefix}
                    isSuffix={this.state.isSuffix}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;
