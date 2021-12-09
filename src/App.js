import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import logo from "./images/logo.svg";

const App = () => {
  return (
    <div>
      <SearchBar
        title="Testų kūrimo ir spendimo sistema"
        description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
      ></SearchBar>
      <Navigation img={logo} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
