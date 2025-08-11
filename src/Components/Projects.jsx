import imgecommerce from "../IMGS/Screenshotecommerce(3).png";
import imgweatherapp from "../IMGS/Weatherappscreenshot.png";
import { IoLogoGithub } from "react-icons/io";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export function Projects() {
  return (
    <section id="projects" className="container section-container">
      <h2 className="text-center projects-tittle mb-3">Projects :</h2>
      <div className="d-flex flex-direction-row gap-5">
        <div className="projects-box text-center p-2 shadow">
          <h3>
            E Commerce{" "}
            <a
              href="https://github.com/Maximo862"
              className="me-3 text-white footer-icon footer-github"
              target="_blank"
            >
              <IoLogoGithub size={25} />
            </a>
          </h3>
          <img className="project-img img-fluid" src={imgecommerce} alt="" />
          <p>
            Modern, responsive commerce platform built with React and Bootstrap.
            Includes product search, filters, shopping cart management,
            favorites, product details, checkout, and light/dark mode.
          </p>
          <div className="d-flex flex-direction-row gap-3 justify-content-center">
            <FaReact />
            <FaBootstrap />
          </div>
          <a href="https://kuglerstore.vercel.app/" target="_blank">
            <button className="project-btn mt-5">View live</button>
          </a>
        </div>
        <div className="projects-box text-center p-2 shadow">
          <h3>
            WeatherApp{" "}
            <a
              href="https://github.com/Maximo862"
              className="me-3 text-white footer-icon footer-github"
              target="_blank"
            >
              <IoLogoGithub size={25} />
            </a>
          </h3>
          <img className="project-img img-fluid" src={imgweatherapp} alt="" />
          <p>
            Weather forecast app created as part of a challenge on
            devChallenges.io. Users can search for any city (with two panels)
            and see a detailed hourly forecast for the next 5 days, hours, and
            key weather metrics like wind speed, humidity, and visibility.
          </p>
          <div className="d-flex flex-direction-row gap-3 justify-content-center">
            <FaReact />
            <FaBootstrap />
            <CiCalendarDate />
          </div>
          <a href="https://kuglerweather.vercel.app/" target="_blank">
            <button className="project-btn mt-2">View live</button>
          </a>
        </div>
        <div className="projects-box text-center p-2 shadow d-flex flex-column justify-content-between text-center">
          <h3>Fullstack App</h3>
          <h5>In progress...</h5>
          <div className="d-flex flex-direction-row gap-3 justify-content-center">
            <FaReact />
            <FaBootstrap />
            <FaNodeJs />
            <SiExpress />
            <GrMysql />
          </div>
        </div>
      </div>
    </section>
  );
}
