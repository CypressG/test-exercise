const searchBar = (props) => {
  return (
    <div className="searchbar-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <input placeholder="Paieška">{props.bar}</input>
      <select name="subject" id="subject">
        <option value="" selected="selected">
          Select subject
        </option>
      </select>
    </div>
  );
};

export default searchBar;
