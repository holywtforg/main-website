import * as React from "react";
import Panel from "../panel";
import Teammate from "../teammate";
import rares from "../../images/rares.jpeg";
import gheo from "../../images/gheo.jpg";

const Team: React.FC = () => {
  return (
    <Panel title="Team">
      <Teammate name="Rares Popa" role="Founder & Mobile Developer" image={rares} url="https://github.com/Iomava" />
      <Teammate name="Gheorghe Avram" role="Founder & Fullstack Developer" image={gheo} url="https://sweethuman.tech" />
    </Panel>
  );
};

export default Team;
