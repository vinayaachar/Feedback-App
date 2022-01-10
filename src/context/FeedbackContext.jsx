import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const fetchData = async () => {
    const response = await fetch(`http://localhost:5000/feedback`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const feedbackAdd = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (id, newItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? {...item, ...newItem} : item ))
    )
  }

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    isLoading,
    deleteFeedback,
    feedbackAdd,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}


export default FeedbackContext