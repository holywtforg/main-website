import * as React from "react";
import Panel from "../panel";
import Teammate from "../teammate";
import mountains from "../../images/mountains.svg";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Team: React.FC = () => {
  const data = useStaticQuery(query);
  const raresImage = getImage(data.raresImage.childImageSharp.gatsbyImageData);
  const gheoImage = getImage(data.gheoImage.childImageSharp.gatsbyImageData);
  return (
    <Panel title="Team" arrow="loop">
      <>
        <img
          src={mountains}
          alt="Fundamentals"
          className="absolute"
          style={{ bottom: "-15%", right: "-10%", zIndex: 2 }}
        />
        <Teammate
          name="Rares Popa"
          role="Founder & Mobile Developer"
          image={raresImage!}
          url="https://www.zetta360.com/"
        />
        <Teammate
          name="Gheorghe Avram"
          role="Founder & Fullstack Developer"
          image={gheoImage!}
          url="https://sweethuman.tech"
        />
      </>
    </Panel>
  );
};

export default Team;
const query = graphql`
  {
    gheoImage: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "gheo.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    raresImage: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "rares.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
