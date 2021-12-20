import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>

      <div>
        <h1>My App</h1>
        <Header text = 'Feeback UI' bgColor = 'blue' color = 'red'/>
        <div className='container'>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </div>

    </>
  )
}

export default App;