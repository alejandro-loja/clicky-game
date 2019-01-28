// import React, {Component} from "react";
import React from "react";


function Navbar(props) {
  const {currentScore, topScore} = props;
    return (
      <ul className="nav nav-tabs p-4">
        <li className="navbar-brand col"><h4>Clicky Game</h4></li>
        <li className="navbar-brand col">Click an Image to Begin!</li>
        <li className="font-weight-bold navbar-brand col">Score: {currentScore} | Top Score: {topScore}</li>
      </ul>
        );
    }

    // class Navbar extends Component {

    //   render() {
    //     // const { currentScore, topScore } = props;
    //     return (
    //       <ul className="nav nav-tabs p-4">
    //         <li className="navbar-brand col">Clicky Game</li>
    //         <li className="navbar-brand col">Click an Image to Begin!</li>
    //         <li className="font-weight-bold navbar-brand col">Score: {1} | Top Score: {1}</li>
    //       </ul>
    //     );
    //   }
    // }

export default Navbar;