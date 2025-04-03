import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home";
import SpeakingPage from "./Pages/SpeakingPage";
class App extends Component {
  state = {
    menuState: false,
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuState: !state.menuState
        ? "active"
        : state.menuState === "inactive"
        ? "active"
        : "inactive",
    }));
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakings" element={<SpeakingPage />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}
// import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Menu from "./Components/Menu/Menu";
// import Nav from "./Components/Nav/Nav";
// import Footer from "./Components/Footer/Footer";

// import Home from "./Pages/Home";
// import SpeakingsPage from "./Pages/SpeakingsPage";

// class App extends Component {
//   state = {
//     menuState: false,
//   };

//   toggleMenu = () => {
//     this.setState((state) => ({
//       menuState: !state.menuState
//         ? "active"
//         : state.menuState === "deactive"
//         ? "active"
//         : "deactive",
//     }));
//   };

//   render() {
//     return (
//       <Router>
//         <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
//         <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/speakings" element={<SpeakingsPage />} />
//         </Routes>

//         <Footer />
//       </Router>
//     );
//   }
// }

// export default App;
export default App;
