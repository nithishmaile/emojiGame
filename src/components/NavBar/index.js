// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  render() {
    const {currentScore, isGameInProgress, topScore} = this.props

    return (
      <nav className="nav-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="logo-heading">Emoji Game</h1>
        </div>
        <div>
          {isGameInProgress && (
            <div className="score-container">
              <p className="score-heading">Score:{currentScore}</p>
              <p className="topScore-heading">Top Score:{topScore}</p>
            </div>
          )}
        </div>
      </nav>
    )
  }
}

export default NavBar
