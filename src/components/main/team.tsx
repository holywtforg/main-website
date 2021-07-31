import * as React from "react";
import Panel from "../panel";
import Teammate from "../teammate";
import rares from "../../images/rares.jpeg";
import gheo from "../../images/gheo.jpg";
import mountains from "../../images/mountains.svg";

const Team: React.FC = () => {
  return (
    <Panel title="Team" arrow="loop">
      <>
        <img
          src={mountains}
          alt="Fundamentals"
          className="absolute"
          style={{ bottom: "-15%", right: "-10%", zIndex: 2 }}
        />
        <Teammate name="Rares Popa" role="Founder & Mobile Developer" image={rares} url="https://github.com/Iomava" />
        <Teammate
          name="Gheorghe Avram"
          role="Founder & Fullstack Developer"
          image={gheo}
          url="https://sweethuman.tech"
        />
      </>
    </Panel>
  );
};

export default Team;
