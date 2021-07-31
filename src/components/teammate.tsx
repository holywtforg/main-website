import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";

type Props = {
  name: string;
  role: string;
  image: IGatsbyImageData;
  url: string;
};

const Teammate: React.FC<Props> = ({ name, role, image, url }) => {
  return (
    <div className="flex justify-start items-center font-serif text-xl md:text-2xl lg:text-3xl">
      <GatsbyImage image={image} alt={name} className="h-28 w-28 rounded-full m-4" />
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
