import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { Skillscard } from "./Skillscard";

export function Skills() {
  return (
    <section id="skills" className="container">
      <h2 className="skills-tittle text-center">Skills :</h2>
      <div className="row m-5 gap-5">
        <Skillscard
          title={"Frontend"}
          icons={[
            { icon: <FaHtml5 size={60} color="#e34c26" />, name: "HTML" },
            { icon: <FaCss3Alt size={60} color="#264de4" />, name: "CSS" },
            {
              icon: <IoLogoJavascript size={60} color="#fce624ff" />,
              name: "Javascript",
            },
            { icon: <FaReact size={60} color="#61dafb" />, name: "React" },
            {
              icon: <FaBootstrap size={60} color="#e927f0ff" />,
              name: "Bootstrap",
            },
          ]}
        />
        <Skillscard
          title={"Backend"}
          icons={[
            { icon: <FaNodeJs size={60} color="#3c873a" />, name: "NodeJS" },
            {
              icon: <SiExpress size={60} color="#ffffff" />,
              name: "ExpressJS",
            },
            { icon: <GrMysql size={60} color="#1502beff" />, name: "MySQL" },
          ]}
        />
      </div>
      <div className="row m-5 gap-5">
        <Skillscard
          title={"Learning..."}
          icons={[
            { icon: <FaNodeJs size={60} color="#3c873a" />, name: "NodeJS" },
            {
              icon: <SiExpress size={60} color="#ffffff" />,
              name: "ExpressJS",
            },
            { icon: <GrMysql size={60} color="#1502beff" />, name: "MySQL" },
          ]}
        />
        <Skillscard
          title={"Tools"}
          icons={[
            {
              icon: <BiLogoVisualStudio size={60} color="#3366d3ff" />,
              name: "Visual Studio",
            },
            { icon: <FaGitAlt size={60} color="#e34c26" />, name: "Git" },
            { icon: <FaGithub size={60} color="#ffffffff" />, name: "Github" },
          ]}
        />
      </div>
    </section>
  );
}
