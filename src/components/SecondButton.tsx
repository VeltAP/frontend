import React from "react";

type ButtonText = {
    text: string;
};

const SecondButton = ({ text }: ButtonText) => {
    return (
        <div className="second-button"
             onClick={() => {}}
        >
            {text}
        </div>
    );
};

export default SecondButton;