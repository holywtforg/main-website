import * as React from "react";
import Motto from "../components/main/motto";
import Fundamentals from "../components/main/fundamentals";
import Team from "../components/main/team";

const IndexPage: React.FC = () => {
  return (
    <div className="font-serif">
      <Motto />
      <Fundamentals />
      <Team />
    </div>
  );
};

export default IndexPage;
