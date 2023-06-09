// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {isWon, playAgain, score} = props

  const winOrLoseText = isWon ? 'You Won' : 'You Lose'

  const winOrLoseImgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreDetails = isWon ? 'Best Score' : 'Score'

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="winOrLose-container">
      <div className="wonOrLose-score-details ">
        <h1 className="winAndLose-heading">{winOrLoseText}</h1>
        <div>
          <h1 className="winOrLose-score-heading">{scoreDetails}</h1>
          <p className="points-score-heading">{score}/12</p>
          <button
            type="button"
            className="playAgain-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img
        src={winOrLoseImgUrl}
        alt="win or lose"
        className="wonOrLose-image"
      />
    </div>
  )
}

export default WinOrLoseCard
