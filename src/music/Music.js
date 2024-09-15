import FavArtists from "./components/FavArtists";
import "./Music.scss";

const Music = () => {
  return (
    <div>
      <h2 style={{ color: "white" }}>
        Mes artistes préférés et mes coups de ❤️
      </h2>
      <FavArtists />
      <div className="section-break" />
      <div className="music-intro">
        Enfant d'une famille de musiciens, la musique a toujours fait partie
        intégrante de ma vie. Jeune, j'écoutais les compositions de mon père
        pour plusieurs artistes tels que Jeanne Mas. <br /> <br />
        Ensuite, j'ai commencé par apprendre le piano à mes 6 ans pour
        finalement dévier vers la guitare classique à mes 8 ans. J'ai suivi des
        cours de guitare pendant 13 ans jusqu'à mes 22 ans. De plus, comme
        beaucoup de mondes, j'aime écouter de la musique tout au long de la
        journée. <br />
        <br /> Sur cette page, je vous présente mes artistes préférés avec mes
        morceaux coups de coeur et également des vidéos de moi jouant des
        morceaux classiques de guitare. En espérant vous faire découvrir des
        pépites !
      </div>
      <div className="section-break" />
      <img
        src="https://numerique.meudon.fr/wp-content/uploads/2021/07/imgbin_under-construction-icon-computer-icons-architectural-engineering-png.png"
        alt=""
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Music;
