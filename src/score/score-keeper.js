import React, { Component } from "react";
import './scorecss.css';

class ScoreKeeper extends Component {

  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleScore = this.singleScore.bind(this);
    this.tripleScore = this.tripleScore.bind(this);
  }

  singleScore() {
    this.setState({ score: this.state.score + 1 });//bad 
  }

  incrementScore(curState) {
    return { score: curState.score + 3 };
  }

  tripleScore() {
    this.setState(this.incrementScore);//best
  }

  render() {
    return (
      <div className="scorecss">
        <div className='bord-template'>
          <div className='score-text'>The Score Is {this.state.score}</div>
          <div className='button-group'>
            <button className='button-single' onClick={this.singleScore}>Single Score!!</button>
            <button className='button-single' onClick={this.tripleScore}>Triple Score!!</button>
          </div>
        </div>

      </div>
    );
  }
}
export default ScoreKeeper;
