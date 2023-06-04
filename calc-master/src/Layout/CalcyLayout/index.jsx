import React from "react";
import Button from "src/component/Button";
import "./calcyLayout.css";

const CalcyLayout = () => {
   return (
      <div className="calcy-layout container">
         <div>
            <div className="inputNum">0</div>
            <Button />
         </div>
      </div>
   );
};

export default CalcyLayout;
