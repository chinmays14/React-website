import { Line, SidebarBody, SocialIcon } from "./SidebarElements";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const iconSize = 30;

const Sidebar = () => {
  return (
    <>
      <SidebarBody>
        <SocialIcon href="mailto:chinmaysheth1995@gmail.com">
          <FiMail size={iconSize} />
        </SocialIcon>
        <SocialIcon href="https://github.com/chinmays14">
          <FiGithub size={iconSize} />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/chinmaysheth14">
          <FiLinkedin size={iconSize} />
        </SocialIcon>
        <Line />
      </SidebarBody>
    </>
  );
};

export default Sidebar;
