import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component {
    // Setting the initial state of the Counter component
    state = {
      score: 0,
      highestscore: 0
    };

      // The render method returns the JSX that should be rendered
    render() {
        return (
            <div>
                <p>Score: {this.state.score}</p>
                <p>Highest Score: {this.state.highestscore}</p>
            </div>
        );
    }
}


export default Score;