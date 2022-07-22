import photoOfMe from "../../img/chinmay-testlify.png";
import {
  AboutBody,
  AboutContainer,
  StyledHeading,
  Photo,
  TextSection,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutBody id="about">
        <AboutContainer>
          <StyledHeading>Who I Am?</StyledHeading>
          <TextSection>
            {/* I am a Software Developer. */}
            Currently, I'm working as a Full Stack Developer at HNR Tech,Mumbai.
            <br />
            {/* <br />I am passionate about solving technical problems, researching
            and developing new software and technologies. I undertake and
            challenge myself to always improve, by being proactive, diligent,
            responsible, and committed to finding the perfect solution to any
            problem. */}
            <br />
            An Innovative optimized solution seeker. I am excited to be at the development phase of my career as a Full Stack Developer, having worked for startups, building desired products and websites better than require am always interested in working with new technologies also utilizing my soft skills obtained while working for a non-profit organization to upgrade my business knowledge and make connections with like-minded people.
          </TextSection>
        </AboutContainer>
        <AboutContainer>
          <Photo src={photoOfMe} />
        </AboutContainer>
      </AboutBody>
    </>
  );
};

export default About;
