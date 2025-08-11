import { IoLogoGithub } from "react-icons/io";

export function Projectscard({title, hrefgithub, description, img, icons, hreflive}) {
  return (
        <div className="projects-box text-center p-2 shadow d-flex flex-column justify-content-between">
             <div>
              <h3>
                {title}
                <a
                  href={hrefgithub}
                  className="me-3 text-white footer-icon footer-github"
                  target="_blank"
                >
                  <IoLogoGithub size={25} />
                </a>
              </h3>
              </div>
              <div>
              <img className="project-img img-fluid" src={img} alt="" />
              <p>
                {description}
              </p>
              <div className="d-flex flex-direction-row gap-3 justify-content-center">
                {icons.map((icon, i) => (
                    <div key={i}>
                        {icon}
                    </div>
                ))}
              </div>
                 </div>
                 <div>
              <a href={hreflive} target="_blank">
                <button className="project-btn mt-5">View live</button>
              </a>
              </div>
            </div>
  )
}
