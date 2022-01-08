import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post";
import { NavLink } from 'react-router-dom'
import Card from "./components/shared/Card";
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {

  return (
    <FeedbackProvider>
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
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            } >

            </Route>
            <Route path='/about' element={<About />}/>
            <Route path='/post/:id' element={<Post />}/>
          </Routes>

        </div>
        <AboutIconLink />

      </Router>
    </FeedbackProvider>
  )
}

export default App;