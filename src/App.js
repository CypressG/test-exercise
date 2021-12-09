import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import logo from "./images/logo.png";


const App = () => {
  return (
    <div>
      <Navigation img={logo} />

      <SearchBar
        title="Testų kūrimo ir spendimo sistema"
        description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
      ></SearchBar>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
