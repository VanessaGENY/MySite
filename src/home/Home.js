import { useMediaQuery } from "react-responsive";
import ImageViewer from "../shared/component/ImageViewer";
import { BASE_ASSETS_URL } from "../shared/global";
import "./Home.css";

const Home = () => {
  const responsive = useMediaQuery({ maxWidth: 900 });

  const getPersonalCard = () => {
    return (
      <>
        <div className="personal-card">
          <div className="profile-picture">
            <ImageViewer src="/assets/home/profile.png" alt="" />
          </div>
          <div className="profile-info">
            <div className="profile-text">
              <span>
                Enchantée, je suis{" "}
                <span className="highlight-text">Vanessa GENY</span>, Tech Lead
                spécialisée dans le front-end.
              </span>
              <span className="subtext">
                Ceci est mon site web et les sources sont sur mon Github !
              </span>
            </div>
            {!responsive && (
              <div className="social-networks">
                <a
                  className="cv-download"
                  href={`${BASE_ASSETS_URL}/assets/CV_Vanessa_Geny.pdf`}
                  download={true}
                >
                  <div className="cv-download-button">
                    <span>Télécharger mon CV</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/vanessa-geny-050bb113a/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <ImageViewer
                    src="/assets/home/linkedin.png"
                    alt="linkedin-logo"
                  />
                </a>
                <a
                  href="https://github.com/VanessaGENY/MySite"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageViewer
                    src="/assets/home/github-icon-white.png"
                    alt="linkedin-logo"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
        {responsive && (
          <div className="social-networks">
            <a
              className="cv-download"
              href={`${BASE_ASSETS_URL}/assets/CV_Vanessa_Geny.pdf`}
              download={true}
            >
              <div className="cv-download-button">
                <span>Télécharger mon CV</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vanessa-geny-050bb113a/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <ImageViewer
                src="/assets/home/linkedin.png"
                alt="linkedin-logo"
              />
            </a>
            <a
              href="https://github.com/VanessaGENY/MySite"
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <ImageViewer
                src="/assets/home/github-icon-white.png"
                alt="linkedin-logo"
              />
            </a>
          </div>
        )}
      </>
    );
  };

  return <div className="home">{getPersonalCard()}</div>;
};

export default Home;
