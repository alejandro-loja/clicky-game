import React, { Component } from 'react';
import Card from './components/Card';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import GameContainer from './components/GameContainer';
import characters from "./characters.json";

var idsClickedLog = [];
var currentScore = 0;
var topScore = 0;

class App extends Component {

  state = {
    characters,
    idsClickedLog,
    currentScore,
    topScore
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // increaseScore = () => {
  //   this.setState({currentScore: this.state.currentScore + 1})
  // };

  randomizeImgs = id => {
    // if the clicked id is in the array log then it will reset the counter and add top score
    if (this.state.idsClickedLog.indexOf(id) < 0) {
      // console.log("new click: " + id)
      // console.log(this.state.idsClickedLog.indexOf(id))
      //pushes clicked id into the array
      idsClickedLog.push(id)
      //called function that randomizes the json array
      this.shuffleArray(this.state.characters);
      // after pushing and shuffling array. The state of characters, clickedlog, and current score go up
      this.setState({ characters, idsClickedLog, currentScore: this.state.currentScore + 1 });
      // console.log(idsClickedLog);

    } else {
      // already array so will reset count and add value to top score
      console.log("******* Clicked Already *****")
      this.shuffleArray(this.state.characters);
      // newTopScore will update the score if the current score is larger
      var newTopScore;
      if(idsClickedLog.length > this.state.topScore){
        newTopScore = idsClickedLog.length;
      } else {
        newTopScore = this.state.topScore;
      }
      // new state: shuffles characters, clears log, possible new topScore, resets currentScore
      this.setState({ characters, idsClickedLog: [], topScore: newTopScore, currentScore: 0 });
      idsClickedLog = []
      // console.log(idsClickedLog);

    }

  }

  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <GameContainer>
          {this.state.characters.map(character => (
            <Card
              randomizeImgs={this.randomizeImgs}
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </GameContainer>
      </div>
    );
  }
}

export default App;
