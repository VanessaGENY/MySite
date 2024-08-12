import "./Drawing.css";

const Drawing = (props) => {
  return (
    <div className="drawing__container">
      <img src={props.url} alt="" />
    </div>
  );
};

export default Drawing;
