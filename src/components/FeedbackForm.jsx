import React from 'react'
import Card from './shared/Card'
import { useState, useEffect } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
  const [review, setReview] = useState({})
  const {feedbackAdd, feedbackEdit, updateFeedback}  = useContext(FeedbackContext)



  useEffect(() => {
    console.log(feedbackEdit)
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const reviewObj = {
      text,
      rating
    }

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id,  reviewObj)
    } else {
      setReview(reviewObj)
      feedbackAdd(reviewObj)
    }
  }
  const feedbackRating = (r) => {
    setRating(r)
  }

  return (
    <Card>
      <RatingSelect rating={feedbackRating}/>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='Submit' version='primary' btnDisabled={btnDisabled}>Send</Button>
        </div>
        {text && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
