import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";
import logo from "./images/logo.svg";

const App = () => {
  return (
    <div>
      <Navigation img={logo} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
