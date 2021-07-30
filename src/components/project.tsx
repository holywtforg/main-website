import * as React from "react";

const Project: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex-col justify-center items-center space-y-5 text-primary w-3/4 xl:w-1/2 mx-auto my-20 cursor-pointer transition duration-500 ease-in-out transform origin-center hover:-translate-y-1 hover:scale-110"
        onClick={() => window.open("https://github.com/holywtforg", "_blank")}>
        <div className="font-display text-center text-tertiary text-7xl">project</div>
        <div className="bg-secondary p-4 w-min rounded-lg text-white font-display text-7xl relative mx-auto">
          GitHub
        </div>
      </div>
    </div>
  );
};

export default Project;
