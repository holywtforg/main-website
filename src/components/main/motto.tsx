import * as React from "react";
import Panel from "../panel";

const Motto: React.FC = () => {
  return (
    <Panel title="Motto">
      <div className="font-body">
        <h1>{"Building open software\nby any means\nnecessary."}</h1>
      </div>
    </Panel>
  );
};

export default Motto;
