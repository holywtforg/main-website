import * as React from "react";

type Props = {
  name: string;
  role: string;
  image: string;
  url: string;
};

const Teammate: React.FC<Props> = ({ name, role, image, url }) => {
  return (
    <div className="flex justify-start items-center font-serif text-3xl">
      <div
        className="h-28 w-28 rounded-full bg-cover bg-center bg-origin-border bg-clip-border m-4"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div>
        <div
          className="cursor-pointer transition duration-500 ease-in-out transform origin-left hover:-translate-y-1 hover:scale-110"
          onClick={() => window.open(url, "_blank")}>
          {name}
        </div>
        <div>
          Role: <span className="text-tertiary">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default Teammate;
