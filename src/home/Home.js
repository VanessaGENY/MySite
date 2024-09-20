import "./Home.scss";
import PersonalCard from "./personalCard/PersonalCard";
import Portfolio from "./portfolio/Portfolio";

const Home = () => {
  return (
    <div className="home">
      <PersonalCard />
      <div className="section-break" />
      <Portfolio />
    </div>
  );
};

export default Home;
