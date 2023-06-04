import React, { useState } from "react";
import Button from "src/component/Button";
import "./calcyLayout.css";

function isLastCharacterSymbol(str) {
   console.log("vgxah", str);
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
      if (value === "Clear") {
         setInput("");
      } else if (value === "result") {
         if (type === "Operator" && value === "√") {
            return Math.sqrt(input);
         }
         try {
            console.log("input", typeof input);
            if (isLastCharacterSymbol(input)) {
               return alert("Invalid Input");
            }
            const result = eval(input).toString();
            setInput(result);
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
      <div className="calcy-layout container">
         <div>
            <div className="inputNum">{input}</div>
            <Button onClick={handleChange} />
         </div>
      </div>
   );
};

export default CalcyLayout;
