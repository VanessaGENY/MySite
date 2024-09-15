import "./Artist.scss";

const Artist = (props) => {
  return (
    <div className="artist-container">
      <div className="artist-header">
        <div
          className="artist-img"
          style={{ backgroundImage: `url(${props.imgSrc})` }}
        ></div>
        <span className="artist-name">{props.name}</span>
      </div>
      <div className="artist-music">
        <iframe
          width="500"
          height="280"
          src={props.videoSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Artist;
