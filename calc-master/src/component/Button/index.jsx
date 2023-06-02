import React from "react";
import { NumaricButton } from "src/data";

const Button = () => {
   return (
      <div>
         {NumaricButton.map((e) => {
            return (
               <main>
                  <button
                     className={`group rounded-xl h-20 w-20 m-1 ${e.color} font-black text-5xl text-white relative overflow-hidden`}
                  >
                     <div>{!e.number ? e.symbol : e.number}</div>
                  </button>
               </main>
            );
         })}
      </div>
   );
};

export default Button;
