import React, { useState, useContext, useEffect } from 'react'
import { ChoreListContext } from '../context/ChoreListContext'

const ChoreForm = () => {
  const { addChore, clearList, editChore, editItem } = useContext(ChoreListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addChore(title)
      setTitle('')
    } else {
      editChore(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Chore"
        value={title}
        onChange={handleChange}
        required
        className="chore-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-chore-btn">
          {editItem ? 'Edit Chore' : 'Add Chore'}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default ChoreForm;