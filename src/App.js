import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}


class App extends Component {
  // Setting the component's initial state
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    //create array of insignia that have been chosen.
    chosen: [],
    score: 0,
    highScore: 0,
    status: "Click on each emblem once and only once."
  };

  scoring = name => {

    // checking the value and name of the input which triggered the change
    console.log("I Clicked on ", { name });

    function checkIfChosen(arr, name) {
      return arr.some(function (arrVal) {
        return name === arrVal;
      });
    }

    let isChosen = checkIfChosen(this.state.chosen, name)

    if (isChosen === true) {
      this.setState({ score: 0 });
      this.setState({ chosen: [] })
      this.setState({ status: "You already chose that one.  Start over!" });

      console.log(this.state.chosen);
      // re-randomize insignia.  
    }
    else {
      // if there is no match then +1 to score 
      // We always use the setState method to update a component's state
      this.setState({ score: this.state.score + 1 });
      this.setState({ status: "Valid Answer!" });
      this.setState({ chosen: [...this.state.chosen, name] })

      console.log("this is score", this.state.score);
      console.log("this is HIGH score", this.state.highScore);

      console.log(this.state.chosen);
      if (this.state.score +1 > this.state.highScore) {
        this.setState({ highScore: this.state.score +1});
      } // End of high score setting IF statement
      if (this.state.score +1 === 14) {
        this.setState({ status: "YOU WON!  Click any Emblem to play again." });
      }
    } // End of emblem matching IF statement
  }; // End of Scoring eventhandler

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let shuffledEmblems = shuffleArray(friends);
    return (
      <Wrapper>
        <Title>The History of Starfleet Insignia</Title>
        <div className="scoreDiv">
          <h3 className="score">{this.state.status}</h3>
          <h2 className="score">Current Score: {this.state.score}</h2>
          <h2 className="score">High Score: {this.state.highScore}</h2>
          <h2>Winning Score: 14</h2>
        </div>
        {shuffledEmblems.map(friend => (
          <FriendCard
            scoring={this.scoring}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  };
}

export default App;
