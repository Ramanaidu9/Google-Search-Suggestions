// Write your code here

import {useState} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

const GoogleSuggestions = props => {
  const {suggestionsList} = props
  const [searchInput, setSearchInput] = useState('')
  const [initialSuggestionsList, setInitialSuggestionsList] = useState(
    suggestionsList,
  )

  const onChangeSearchInput = e => {
    const userInput = e.target.value
    setSearchInput(userInput)
    if (searchInput === '') {
      setInitialSuggestionsList(suggestionsList)
    } else {
      const filteredSuggestion = suggestionsList.filter(eachSuggestion =>
        eachSuggestion.suggestion
          .toLowerCase()
          .includes(searchInput.toLowerCase()),
      )
      setInitialSuggestionsList(filteredSuggestion)
    }
  }

  const updateSuggestion = suggestion => {
    setSearchInput(suggestion)
  }

  return (
    <div className="app-container">
      <div className="google-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="search-input-suggestion-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              onChange={onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestion-list">
            {initialSuggestionsList.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                key={eachSuggestion.id}
                updateSuggestion={updateSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleSuggestions
