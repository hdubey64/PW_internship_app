import logo from "./logo.svg";
import "./App.css";
import Home from "./Layout/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import CalcyLayout from "./Layout/CalcyLayout";

function App() {
   return (
      <Home className="container">
         <CalcyLayout />
      </Home>
   );
}

export default App;
