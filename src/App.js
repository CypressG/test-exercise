import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Navigation from "./components/Navigation";
import logo from "./images/logo.png";
import TestBlock from "./components/TestBlock";

const App = () => {
  return (
    <div>
      {/* ---------------------Navigacija--------------------- */}

      <Navigation img={logo} />
      <Navigation name="Testio" img={logo} />

      <SearchBar
        title="Testų kūrimo ir spendimo sistema"
        description="Kurkite, spręskite ir dalinkitės įvairiausiais testais, kontroliniais darbais ir klausimynais vienoje vietoje"
        
      ></SearchBar>

      {/* ---------------------Test Blokelis--------------------- */}

      <TestBlock
        title="Gamtos pažinimo testas"
        description="Šis testas apibrežia visą reikiama informaciją 
        apie gamtos pažinimą ir viską kitką"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
