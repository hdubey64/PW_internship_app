import React from "react";

const Button = () => {
   return (
      <div>
         <main className="main">
            <button class="group rounded-xl h-20 w-20 bg-cyan-500 font-black text-5xl text-white relative overflow-hidden">
               1
               <div class="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
            </button>
         </main>
      </div>
   );
};

export default Button;
