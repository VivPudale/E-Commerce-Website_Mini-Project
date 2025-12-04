import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import { Typography, Box, Paper} from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Welcome Vivek!!!</h1> */}
      <Navbar />
      <Hero/>
    </>
  );
}

export default App;
