// eslint-disable-next-line import/no-unresolved
import photo from "../images/test_background.jpg";
// eslint-disable-next-line import/no-unresolved
import avatar from "../images/avatar.png";

const TestBlock = (props) => {
  return (
    <div className="testblock-container">
      <div className="testblock-image-container">
        <img src={photo} alt="hills" />
      </div>
      <div className="testblock-image-container-avatar">
        <img src={avatar} alt="avatar" />
        <h3>{props.username}</h3>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className="testblock-button-container">
        <button id="main-button">Spręsti</button>
        <button id="extra-button">Daugiau</button>
      </div>
    </div>
  );
};

export default TestBlock;
