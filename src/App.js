import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>

      <div>
        <h1>My App</h1>
        <Header text = 'Feeback UI' bgColor = 'blue' color = 'red'/>
        <div className='container'>
          <FeedbackList feedback={feedback}/>
        </div>
      </div>

    </>
  )
}

export default App;