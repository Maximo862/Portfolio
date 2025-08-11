import { RiContractFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer-custom bg-dark text-white mt-5 pt-4 pb-2 border-top">
      <div className="container-fluid">
        <div className="row align-items-center text-md-start">
          <div className="col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <RiContractFill size={200} />
          </div>

          <div className="col-md-4 d-flex flex-column mb-3 mb-md-0 align-items-center">
            <h3 style={{ fontSize: 60 }} className="mb-2">
              Portfolio
            </h3>
            <p className="mb-0">© {new Date().getFullYear()} Maximo Kugler</p>
          </div>

          <div className="col-md-4 text-md-end text-align-center d-flex flex-column align-items-center">
            <h5 className="mb-2 fs-4">Social :</h5>
            <a
              href="https://github.com/Maximo862"
              className="me-3 text-white footer-icon footer-github"
              target="_blank"
            >
              <IoLogoGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/maximo-kugler-716962379/"
              className="me-3 text-white footer-icon footer-linkedin"
              target="_blank"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="mailto:Maximokugler9@gmail.com"
              className="me-3 text-white footer-icon footer-gmail"
              target="_blank"
            >
              <SiGmail size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
