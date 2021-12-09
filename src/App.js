import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <SearchBar
        title="Testų kūrimo ir spendimo sistema"
        description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
      ></SearchBar>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
