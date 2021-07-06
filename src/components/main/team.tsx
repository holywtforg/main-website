import * as React from "react";
import Panel from "../panel";
import Teammate from "../teammate";

const Team: React.FC = () => {
  return (
    <Panel title="Team">
      <Teammate name="Rares Popa" role="Founder & Mobile Developer" />
      <Teammate name="Gheorghe Avram" role="Founder & Fullstack Developer" />
    </Panel>
  );
};

export default Team;
