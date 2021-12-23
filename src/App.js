import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const feedbackAdd = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>

      <div>
        <h1>My App</h1>
        <Header text = 'Feeback UI' bgColor = 'blue' color = 'red'/>
        <div className='container'>
          <FeedbackForm feedbackAdd={feedbackAdd}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </div>

    </>
  )
}

export default App;