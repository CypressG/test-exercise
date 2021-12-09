const searchBar = (props) => {
  return (
    <div className="searchbar-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <input>{props.bar}</input>
    </div>
  );
};

export default searchBar;
