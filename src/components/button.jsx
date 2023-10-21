import React from "react";

const Button = ({symbol, handleClick, color, fontColor}) => {
    return (
        <div className="button-wrapper" onClick = {() => handleClick(symbol)} style={{backgroundColor:color, color:fontColor}} >
            {symbol}
        </div>
    );
};

export default Button;