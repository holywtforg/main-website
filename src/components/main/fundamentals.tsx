import * as React from "react";
import Panel from "../panel";
import fundamentals from "../../images/fundamentals.svg";

const Fundamentals: React.FC = () => {
  return (
    <Panel title="Fundamentals">
      <>
        <img src={fundamentals} alt="Fundamentals" className="absolute" style={{ bottom: "-25%", left: "-10%" }} />
        <ul className="font-body list-inside list-disc space-y-2">
          <li>Consistency: It doesn't have to be much, but it has to be every day.</li>
          <li>Observe, Propose and Take Action on your Own</li>
          <li>Simple, Realizable, Complexities come later</li>
        </ul>
      </>
    </Panel>
  );
};

export default Fundamentals;
