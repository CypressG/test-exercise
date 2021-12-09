const Navigation = (props) => {
  return (
    <div id="navbar-container">
      <div id="navbar-logo-container">
        <h1>{props.name}</h1>
        <div id="navbar-logo-image-container">
          <img src={props.img} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
