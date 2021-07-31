import * as React from "react";
import loop from "../images/arrow-loop.svg";
import straight from "../images/arrow-straight.svg";

type Props = {
  title: string;
  arrow?: "straight" | "loop";
};
const Panel: React.FC<Props> = ({ title, arrow, children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-col justify-center items-center text-primary w-3/4 xl:w-1/2 mx-auto">
        <div className="font-display text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5">{title}</div>
        <div className="bg-secondary px-5 md:px-10 lg:px-16 py-28 md:py-24 rounded-lg text-white text-3xl md:text-4xl lg:text-5xl relative">
          {children}
        </div>
        <div className="relative m-0">
          {arrow == null ? null : arrow === "straight" ? (
            <img src={straight} alt="Fundamentals" className="relative" style={{ top: -20, left: "10%", zIndex: -1 }} />
          ) : (
            <img
              src={loop}
              alt="Fundamentals"
              className="relative"
              style={{ top: -20, left: 0, right: 0, margin: "auto", zIndex: 1 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Panel;
