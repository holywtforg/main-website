import * as React from "react";
import Panel from "../panel";

const Motto: React.FC = () => {
  return (
    <Panel title="Motto">
      <div className="font-body text-8xl">
        <h1 className="text-center">Building open software</h1>
        <h1 className="text-center">by any means</h1>
        <h1 className="text-center">necessary.</h1>
      </div>
    </Panel>
  );
};

export default Motto;
