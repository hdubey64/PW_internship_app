import React, { useState } from "react";
import Button from "src/component/Button";
import "./calcyLayout.css";
import { NumaricButton } from "src/data";

function isLastCharacterSymbol(str) {
   const lastCharacter = str?.charAt(str.length - 1);

   const symbolRegex = /[^\w\s]/; // Matches any non-alphanumeric character except whitespace
   return symbolRegex.test(lastCharacter);
}

const CalcyLayout = () => {
   const [input, setInput] = useState("");

   const handleChange = (value, type) => {
      if (value?.length <= 0) {
         return alert(" Invalid input");
      }

      if (value === "C") {
         return setInput("");
      }
      if (value === "⬅") {
         return setInput(input.slice(0, -1));
      }
      if (input.length > 12) {
         return alert("Length exceed");
      } else if (value === "=") {
         if (type === "Operator" && value === "√") {
            return Math.sqrt(input);
         }
         try {
            console.log("input", typeof input);
            if (isLastCharacterSymbol(input)) {
               return alert("Invalid Input");
            }
            const result = eval(input).toString();
            return setInput(result);
         } catch (error) {
            return alert("invalid input");
         }
      } else {
         if (isLastCharacterSymbol(input) && type === "operator") {
            return alert("Invalid Input");
         }

         setInput(input + value);
      }
   };

   const handleResult = () => {
      setInput();
   };

   return (
      <div className="calcy-layout">
         <div className="inputNum">{input}</div>
         <div className="calcy-main">
            {NumaricButton.map((item) => (
               <Button
                  className="calcy-button"
                  data={item}
                  onClick={() => handleChange(item.value, item.type)}
                  key={item.value}
               />
            ))}
         </div>
      </div>
   );
};

export default CalcyLayout;
