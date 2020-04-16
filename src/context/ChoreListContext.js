import React, { createContext, useState, useEffect } from 'react'
import uuid from 'react-uuid';

export const ChoreListContext = createContext()

const ChoreListContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem('chores')) || []

  const [chores, setChores] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(chores))
  }, [chores])

  const [editItem, setEditItem] = useState(null)

  const addChore = title => {
    setChores([...chores, { title, id: uuid() }])
  }

  const removeChore = id => {
    setChores(chores.filter(chore => chore.id !== id))
  }

  const clearList = () => {
    setChores([])
  }

  const findItem = id => {
    const item = chores.find(chore => chore.id === id)

    setEditItem(item)
  }

  const editChore = (title, id) => {
    const newChores = chores.map(chore => (chore.id === id ? { title, id } : chore))

    console.log(newChores)

    setChores(newChores)
    setEditItem(null)
  }

  return (
    <ChoreListContext.Provider
      value={{
        chores,
        addChore,
        removeChore,
        clearList,
        findItem,
        editChore,
        editItem
      }}
    >
      {props.children}
    </ChoreListContext.Provider>
  )
}

export default ChoreListContextProvider