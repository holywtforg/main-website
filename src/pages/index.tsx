import * as React from "react";
import Motto from "../components/main/motto";
import Fundamentals from "../components/main/fundamentals";
import Team from "../components/main/team";
import Project from "../components/project";

const IndexPage: React.FC = () => {
  return (
    <div className="font-serif">
      <Motto />
      <Fundamentals />
      <Team />
      <Project />
    </div>
  );
};

export default IndexPage;
