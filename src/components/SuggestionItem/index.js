// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSuggestion} = props
  const {suggestion} = suggestionDetails
  const onAddSuggestion = () => {
    updateSuggestion(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button className="button-arrow" type="button" onClick={onAddSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
      <p>ramanaidu</p>
    </li>
  )
}

export default SuggestionItem
