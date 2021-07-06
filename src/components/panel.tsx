import * as React from "react";

type Props = {
  title: string;
};
const Panel: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <div className="font-display">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Panel;
