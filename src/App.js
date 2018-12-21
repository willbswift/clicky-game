import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // CHECK THIS OUT
  
  //create array of insignia that have been chosen.

  scoring = id => {
    // let chosen = [];
    // let this.state.score = 0;
  //everytime a new insignia is chosen compare it to chosen.  
  // if there is a match then reset score to 0.
  // if there is no match then +1 to score and re-randomize insignia.  

    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Starfleet Insignia</Title>
        {/* <h2>{score}</h2> */}
        {this.state.friends.map(friend => (
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
  }
}

export default App;
