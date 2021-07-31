import * as React from "react";
import Panel from "../panel";
import telescope from "../../images/telescope.svg";
import astronaut from "../../images/astronaut.svg";

const Motto: React.FC = () => {
  return (
    <Panel title="Motto" arrow="loop">
      <>
        <img src={telescope} alt="Telescope" className="absolute" style={{ top: "-10%", right: "-20%" }} />
        <img src={astronaut} alt="Telescope" className="absolute" style={{ bottom: "-15%", left: "-10%" }} />
        <div className="font-body text-6xl md:text-7xl lg:text-8xl">
          <h1 className="text-center">Building open software</h1>
          <h1 className="text-center">by any means</h1>
          <h1 className="text-center">necessary.</h1>
        </div>
      </>
    </Panel>
  );
};

export default Motto;
