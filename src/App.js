import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Footer from "./Footer";
import "./assets/css/Main.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
