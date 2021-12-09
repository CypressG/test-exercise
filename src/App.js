import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import logo from "./images/logo.png";
import TestBlock from "./components/TestBlock";

const App = () => {
  return (
    <div>
      <Navigation name="Testio" img={logo} />

      <SearchBar
        title="Testų kūrimo ir spendimo sistema"
        description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
      ></SearchBar>
      <TestBlock />
      <TestBlock title="Gamtos pažinimo testas" description="Description" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
