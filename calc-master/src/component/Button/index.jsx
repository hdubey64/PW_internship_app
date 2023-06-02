import React from "react";
import { NumaricButton } from "src/data";

const Button = () => {
   return (
      <div className=" grid grid-cols-4 ">
         {NumaricButton.map((e) => (
            <main className={`order-${e.order}`}>
               <button
                  className={`group rounded-xl h-20 w-20
                  } m-1 ${e.color} font-black text-5xl text-white relative overflow-hidden `}
               >
                  {!e.number ? e.symbol : e.number}
               </button>
            </main>
         ))}
      </div>
   );
};

export default Button;
