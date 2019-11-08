import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    score: 0,
    highestscore: 0
  };

  shuffleImages = () => {
    // Fisher-Yates Algorithem in ES6
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
    }

    this.setState({friends});
  }

  scoreTracking = () => {
    if (this.state.score > this.state.highestscore) {
      this.setState({highestscore: this.state.score}, function() {
        console.log(this.state.highestscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.clicked = false;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  handleClick = id => {
    this.state.friends.find((friend, i) => {
      if (friend.id === id) {
        if(friends[i].clicked === false){
          friends[i].clicked = true;
          this.setState({score : this.state.score + 1});
          this.shuffleImages();
          return true; 
        } else {
          this.scoreTracking();
        }
      }
    });
    return true;
  }

  render() {
    return (
      <Wrapper>
        <div>
          <p>Score: {this.state.score}</p>
          <p>Highest Score: {this.state.highestscore}</p>
        </div>
        <Title>Don't click on the same card twice!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            key={friend.name}
            image={friend.image}
            id={friend.id}
            clicked={friend.clicked}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
