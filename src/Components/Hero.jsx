import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";

export function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-img">
        <img src="" alt="me" className="img-me img-fluid" />
      </div>
      <div className="hero-content">
        <h2>
          Hi, im <span className="name">Maximo Kugler</span>
        </h2>
        <h4>Frontend Developer</h4>
        <a href="#aboutme">
          <button className="hero-button my-3">About me</button>
        </a>
        <div className="d-flex flex-row gap-4 my-3">
          <a
            className="hero-icon"
            href="https://github.com/Maximo862"
            target="_blank"
          >
            <IoLogoGithub fontSize={30} />
          </a>
          <a
            className="hero-icon"
            href="https://www.linkedin.com/in/maximo-kugler-716962379/"
            target="_blank"
          >
            <FaLinkedin fontSize={30} />
          </a>
          <a
            className="hero-icon"
            href="mailto:Maximokugler9@gmail.com"
            target="_blank"
          >
            <SiGmail fontSize={30} />
          </a>
        </div>
        <FaLocationDot />
        <span>Argentina, Buenos Aires</span>

      </div>
    </section>
  );
}
