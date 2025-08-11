import imgecommerce from "../IMGS/Screenshotecommerce(3).png";
import imgweatherapp from "../IMGS/Weatherappscreenshot.png";
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Projectscard } from "./Projectscard";

export function Projects() {
  return (
    <section id="projects" className="container section-container">
      <h2 className="text-center projects-tittle mb-3">Projects :</h2>
      <div className="projectsmobile d-flex flex-direction-row gap-5">
        <Projectscard
          title={"E Commerce"}
          hrefgithub={"https://github.com/Maximo862/Kuglerstore"}
          description={`Modern, responsive commerce platform built with React and Bootstrap.
            Includes product search, filters, shopping cart management,
            favorites, product details, checkout, and light/dark mode.`}
          img={imgecommerce}
          icons={[<FaReact />, <FaBootstrap />]}
          hreflive={"https://kuglerstore.vercel.app/"}
        />
        <Projectscard
          title={"WeatherApp"}
          hrefgithub={"https://github.com/Maximo862/KuglerWeather"}
          description={`Weather forecast app created as part of a challenge on
            devChallenges.io. Users can search for any city (with two panels)
            and see a detailed hourly forecast for the next 5 days, hours, and
            key weather metrics like wind speed, humidity, and visibility.`}
          img={imgweatherapp}
          icons={[<FaReact />, <FaBootstrap />, <CiCalendarDate />]}
          hreflive={"https://kuglerweather.vercel.app/"}
        />
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
