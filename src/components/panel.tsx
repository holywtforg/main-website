import * as React from "react";

type Props = {
  title: string;
};
const Panel: React.FC<Props> = ({ title, children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex-col justify-center items-center space-y-5 text-primary w-3/4 xl:w-1/2 m-auto">
        <div className="font-display text-center text-7xl">{title}</div>
        <div className="bg-secondary px-16 py-24 rounded-lg text-white text-5xl">{children}</div>
      </div>
    </div>
  );
};

export default Panel;
