import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero fullHeight flex">
        <div className="flex-1 flex  flex-col bg-white hero--left--section justify-center items-center">
          <h1 className="text-5xl font-bold bg-yellow-500 h-min">
            One for all solution, for furniture shop
          </h1>
          <p>
            Get all your furniture needs under one roof.Start building your
            dream interiodr with us.The only way to go
          </p>
        </div>
        <div className="hero--right--section w-1/3">
          <h3 className="">hi</h3>
        </div>
      </section>
    </>
  );
};

export default Hero;
