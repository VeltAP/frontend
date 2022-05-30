
import React from "react";

type ButtonText = {
    text: string;
};

const PrimaryButton = ({ text }: ButtonText) => {
    return (
        <div
            className="first-button"
            onClick={() => {}}
        >
            {text}
        </div>
    );
};

export default PrimaryButton;