import React from 'react';
import Measurer from './Measurer';
import Bracket, {
    LEFT_BRACKET,
    RIGHT_BRACKET,
} from './Bracket';

const flexGroup = {display: "flex", justifyContent: "center", alignItems: "center"};

class PrefixPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prefix: '',
            isSuffix: false
        };
    }


    isValidPrefix = (prefix) => {
        return /^[13-9a-km-uw-z]{0,59}$/.test(prefix);
    };

    render() {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "30px"}}>
                    <label style={{cursor: "pointer", color: '#ccc'}}>
                        <input type="checkbox" style={{transform: "scale(1.3) translate(-5px , 1px)"}} 
                            onChange={(event) => {
                                this.setState({isSuffix: event.target.checked});
                                this.props.onChangeIsSuffix(event.target.checked);
                            }}
                        />
                        Put Vanity Word in Suffix
                    </label>
                </div>

                <div className="address-form" style={{
                    height:54,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Measurer length={5}>
                        <span style={{
                            color: '#ccc',
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}>
                            nano_
                        </span>
                    </Measurer>

                    <Bracket
                        side={LEFT_BRACKET}
                    />

                    <Measurer length={1}>
                        <span className={'prefix-picker-letter'}>
                            <span style={{color:'#ccc'}}>
                                1
                            </span>
                            {' '}
                            <small>or</small>
                            {' '}
                            <span style={{color:'#ccc'}}>
                                3
                            </span>
                        </span>
                    </Measurer>

                    <Bracket
                        side={RIGHT_BRACKET}
                    />

                    {/* Flex Grouped these 2 elements - to swap flex direction based on isSuffix state */}
                    <span style={Object.assign({}, flexGroup, {flexDirection: this.state.isSuffix?"row-reverse":"row"})}>
                        <span style={flexGroup}>
                            <Bracket
                                side={LEFT_BRACKET}
                            />

                            <Measurer length={this.state.prefix.length} color={'red'}>
                                <input
                                    type={'text'}
                                    className={'prefix-picker-letter'}
                                    style={{
                                        border: 'none',
                                        width: 64,
                                        textAlign: 'center',
                                        outline: 'none',
                                        background: 'transparent',
                                        color: this.isValidPrefix(this.state.prefix) ? '#ccc' : 'red',
                                    }}
                                    onChange={(event) => {
                                        const prefix = event.target.value;
                                        this.setState({prefix:prefix});
                                        this.props.onChangePrefix(prefix, this.isValidPrefix(prefix));
                                    }}
                                    maxLength={59}
                                    autoCapitalize={'none'}
                                />
                            </Measurer>

                            <Bracket
                                side={RIGHT_BRACKET}
                            />
                        </span>

                        {
                            (59 - this.state.prefix.length) > 0 ? (
                                <Measurer length={59 - this.state.prefix.length}>
                                    <span className={'prefix-picker-letter'}>
                                        xx...xx
                                    </span>
                                </Measurer>
                            ):""
                        }
                    </span>
                </div>
                <h6 className={'small font-weight-bold mt-4'} style={{color:'red'}}>
                    {!this.isValidPrefix(this.state.prefix) ? 'Just alphanumeric characters except: L - V - 0 - 2' : ' '}
                </h6>
            </div>
        );
    }
}

export default PrefixPicker;