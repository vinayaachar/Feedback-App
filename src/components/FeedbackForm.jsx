import React from 'react'
import Card from './shared/Card'
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ feedbackAdd }) {

  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(10)
  const [review, setReview] = useState({})

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
    setReview(reviewObj)
    feedbackAdd(reviewObj)
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
