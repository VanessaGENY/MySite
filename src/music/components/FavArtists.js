import Artist from "./Artist";
import "./FavArtists.scss";

const FavArtists = () => {
  return (
    <div className="favArtists-container">
      <Artist
        name="Alice et Moi"
        imgSrc="https://yt3.googleusercontent.com/XyqFnconytu0DVh8gq5Gl_eTuHdWYr5SxaivCp0K4aPwodDzgNqRCdBmJFqrmR41RjcxL7QMFg=s900-c-k-c0x00ffffff-no-rj"
        videoSrc="https://www.youtube.com/embed/GEGjF4wFk24?si=05UgU2oU3q1bcQiD"
      />
      <Artist
        name="Bagarre"
        imgSrc="https://yt3.googleusercontent.com/ifzilIbchcz8wyQV5CU_aIpoCigXvBWGUElFDFQXQzIuwWDmIPNqzbUM9nk9_Ohk0IG90sbNOA=s900-c-k-c0x00ffffff-no-rj"
        videoSrc="https://www.youtube.com/embed/-JoOl2Od2B4?si=_O0Mcj4AC86BZ_pB"
      />
      <Artist
        name="Joanna"
        imgSrc="https://lh3.googleusercontent.com/AQqkpu12wdGUyTuLZsY2JyKzscRPul-sR9JJJA4ZZnmgptmXQc3QBSAb-4gClFoFZOp8mPmVHZmmeXlK=w544-h544-p-l90-rj"
        videoSrc="https://www.youtube.com/embed/C75uNva-3Uc?si=I3yTSHhbJuOqOy76"
      />
      <Artist
        name="Vendredi sur Mer"
        imgSrc="https://yt3.googleusercontent.com/nR4ETHx4Pf9P4WT7SlGYqHKDXDcCY8EYVRP9GVC9jEY7istE-4xcfbSRnU49fosquDIlZ-vJ=s900-c-k-c0x00ffffff-no-rj"
        videoSrc="https://www.youtube.com/embed/8nIlDFvrDm4?si=_LI7eZ9R4Dyw5fnB"
      />
    </div>
  );
};

export default FavArtists;
