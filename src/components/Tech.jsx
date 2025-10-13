import React from "react";
import { BallCanvas } from "./canvas"; // adjust this path if needed
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="!sm:px-16 !px-6 !mt-10 sm:mt-20 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
