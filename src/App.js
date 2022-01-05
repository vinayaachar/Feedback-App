import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./components/data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { NavLink } from 'react-router-dom'
import Card from "./components/shared/Card";

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
    <Router>
      <Header text = 'Feeback UI' bgColor = 'blue' color = 'red'/>
      <div className="container">
        <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card>
        <Routes>
          <Route exact path='/' element= {
            <>
              <FeedbackForm feedbackAdd={feedbackAdd}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
          } >

          </Route>
          <Route path='/about' element={<About />}/>
          <Route path='/post/:id' element={<Post />}/>
        </Routes>

      </div>
      <AboutIconLink />

    </Router>
  )
}

export default App;