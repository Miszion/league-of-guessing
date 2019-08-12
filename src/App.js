import React from 'react';
import logo from './images/misc-images/defaultLogo.png';
import './App.css';
import ChampionCarousel from './ChampionCarousel';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.startGame = this.startGame.bind(this);
    this.generateQuote = this.generateQuote.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
    this.triggerGameOver = this.triggerGameOver.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.state = {
      gameStarted: undefined,
      score: 0
    }

  }

  startGame() {
    this.setState( {
      gameStarted: 'game-started'
    })
  }

  triggerGameOver() {
    this.setState({
      gameStarted: 'game-over'
    })
  }

  generateQuote(quote) {
    quote !== this.state.stateQuote && 
    this.setState({
      stateQuote: quote
    });
 }

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    })
  }

  restartGame() {
    this.setState({
      gameStarted: 'replay',
      score: 0
    })
  }

  render() {
    return (
      (this.state.gameStarted || !this.state.gameStarted) && (this.state.gameStarted !== 'game-over') ?
      (<div className= "App">
        <header className={this.state.gameStarted ? "App-header " + this.state.gameStarted : "App-header"}>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="buttonContainer">
            <div className="playButton" onClick = {this.startGame}> 
              <span className = "playText"> Play Now </span>
            </div>
          </div>
        </header>
        {this.state.stateQuote && 
        <div className = "newHead">
          <div className = "scoreCounter">
            {"Score: " + this.state.score}
            </div>
          <div className = "quoteContainer">
            <div className = "quote-loaded">{this.state.stateQuote}</div>
          </div>
        </div>
        }
        {this.state.gameStarted && (this.state.gameStarted === 'game-started' || this.state.gameStarted === 'replay') &&
        <ChampionCarousel triggerGameOver = {this.triggerGameOver} incrementScore = {this.incrementScore} quoteFunction = {this.generateQuote}></ChampionCarousel>
        }
      </div>) :
      <div className = "endGameBlock">
        <div className = "gameOver"> GAME OVER</div>
        <div className = "scoreCounterEnd"> High Score: {this.state.score}</div>
        <div className = "replayButton" onClick = {this.restartGame}>
          <span className = "replayText"> Play Again </span>
        </div>
      </div>
  );
}
}

export default App;
