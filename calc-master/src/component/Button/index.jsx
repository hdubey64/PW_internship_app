import React from "react";
import { NumaricButton } from "src/data";
import "./calcyButton.css";

const Button = ({ onClick }) => {
   return (
      <div className="calcy-main">
         {NumaricButton.map((element) => (
            <button
               className={`calcy-button ${element.color}`}
               onClick={() => onClick(element.value, element.type)}
            >
               {!element.number ? element.symbol : element.number}
            </button>
         ))}
      </div>
   );
};

export default Button;
