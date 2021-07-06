import * as React from "react";

type Social = {
  type: string;
  link: string;
};

type Props = {
  name: string;
  role: string;
  socials?: Social[];
};
const Teammate: React.FC<Props> = ({ name, role }) => {
  return (
    <div>
      <div>{name}</div>
      <div>Role: {role}</div>
    </div>
  );
};

export default Teammate;
