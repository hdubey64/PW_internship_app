import React from "react";
import { NumaricButton } from "src/data";
import "./calcyButton.css";

const Button = () => {
   return (
      <div className="calcy-main">
         {NumaricButton.map((e) => (
            <button className={`calcy-button ${e.color}`}>
               {!e.number ? e.symbol : e.number}
            </button>
         ))}
      </div>
   );
};

export default Button;
