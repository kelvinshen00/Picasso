import Artists from "../Components/Artistis";
import Exhibition from "../Components/Exhibition";
import Navbar from "../Components/NavBar";
import AvailableWorks from "../Components/AvailableWorks";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className ="m-12">
        <Exhibition />
        <Artists/>
        <AvailableWorks />
      </div>
      <footer className="flex flex row justify-center bg-black text-white ">
          Created by Kelvin Shen
      </footer>
    </>
  );
};

export default HomePage;
