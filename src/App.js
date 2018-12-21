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
    score: 0,
    //create array of insignia that have been chosen.
    chosen: []
  };

  // handleIncrement increments this.state.count by 1
      // ALTERNATE scoring = () => {
  
  scoring = event => {
    // Preventing the default behavior of the click
    // event.preventDefault();
    console.log("I got Clicked!");
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
// WHY DOESN'T THIS WORK???
    console.log(this.state.score);
  };

// -------------------------------- CHECK THIS OUT !! ---------------------------------

  //   // Getting the value and name of the input which triggered the change
  //   const { score, id } = event.target.id;

  //   // Updating the input's state
  //   this.setState({
  //     [score]: newScore
  //   });

//everytime a new insignia is chosen compare it to chosen.  
// if there is a match then reset score to 0.
// if there is no match then +1 to score and re-randomize insignia.  
    // Set this.state.score equal to the new score
    // this.setState({ score });

// Alert the user of their current score

// reset the page (but not the score)

  // scoring = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   // const friends = this.state.friends.filter(friend => friend.id !== id);
  // };








  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    let shuffledEmblems = shuffleArray(friends);
    return (
      <Wrapper>
      <Title>Starfleet Insignia</Title>
      <h2 className="score">Current Score: {this.state.score}</h2>
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
