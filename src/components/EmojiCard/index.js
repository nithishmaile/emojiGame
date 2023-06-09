// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojisListDetails, emoji} = props
  const {id, emojiUrl, emojiName} = emojisListDetails

  const onclickEmoji = () => {
    emoji(id)
  }

  return (
    <li className="card-items">
      <button type="button" className="button" onClick={onclickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="card-image" />
      </button>
    </li>
  )
}
export default EmojiCard
