import "./Home.css"

const Home = () => {


    const getPersonalCard = () => {
        return (
            <div className="personal-card">
                <div className="profile-picture">
                    <img src="/assets/home/profile.png" alt="" />
                </div>
                <div className="profile-info">
                    <div className="profile-text">
                        <span>Enchantée, je suis <span className="highlight-text">Vanessa GENY</span>, ingénieur logiciel spécialisée dans le front-end.</span>
                        <span className="subtext">Ceci est mon site web et les sources sont sur mon Github !</span>
                    </div>
                    <div className="social-networks">
                        <a className="cv-download" href="/assets/CV_Vanessa_Geny.pdf" download={true}><div className="cv-download-button"><span>Télécharger mon CV</span></div></a>
                        <a href="#" className="social-link"><img src="/assets/home/linkedin.png" alt="linkedin-logo"/></a>
                        <a href="#" className="social-link"><img src="/assets/home/github-icon-white.png" alt="linkedin-logo"/></a>
                    </div>
                    
                </div>

            </div>
        )
    }

    return (
        <div className="home">
            {getPersonalCard()}

        </div>)
}

export default Home;