/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
<div className="bg-container"
<div className="emoji-container">
          <Navbar score={score} disabledItemDetails={disabledItem} />
          <div className="unordered-list">

<ul className="card-container">
              {shuffledList.map(eachObj => (
                <EmojiCard
                  emojisListDetails={eachObj}
                  emoji={this.onClickEmoji}
                />
              ))}
            </ul>
            </div>
            </div>
            </div>

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import Navbar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    emojiId: [],
    topScore: 0,
    isGameInprogress: true,
  }

  resetGame = () => {
    this.setState({emojiId: [], isGameInprogress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {emojiId} = this.state
    const isWon = emojiId.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        score={emojiId.length}
        playAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInprogress: false})
  }

  onClickEmoji = num => {
    const {emojisList} = this.props
    const {emojiId} = this.state
    const isEmojiPresent = emojiId.includes(num)
    const clickedEmojisLength = emojiId.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(preVState => ({
        emojiId: [...preVState.emojiId, num],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <div className="emoji-container">
        <ul className="card-container">
          {shuffledEmojisList.map(eachObj => (
            <EmojiCard
              emojisListDetails={eachObj}
              emoji={this.onClickEmoji}
              key={eachObj.id}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {emojiId, topScore, isGameInprogress} = this.state

    return (
      <div className="bg-container">
        <div className="emoji-container">
          <Navbar
            currentScore={emojiId.length}
            isGameInprogress={isGameInprogress}
            topScore={topScore}
          />
        </div>
        <div className="unordered-list">
          {isGameInprogress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
