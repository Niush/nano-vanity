import React from 'react';
import LeftBracket from '../assets/images/left-bracket.png';
import RightBracket from '../assets/images/right-bracket.png';

const Bracket = ({side}) => {
    let image = null;
    if (side === 'left') {
        image = LeftBracket;
    } else if (side === 'right'){
        image = RightBracket;
    }

    return (
        <img
            alt={side === 'left' ? '(' : ')'}
            src={image}
            height={54}
            style={{
                marginLeft: side === 'left' ? 5 : 3,
                marginRight: side === 'right' ? 5 : 3,
                opacity: 0.6,
            }}
        />
    );
};

export default Bracket;

export const LEFT_BRACKET = 'left';
export const RIGHT_BRACKET = 'right';


