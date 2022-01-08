import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

function Post() {

  const navigate = useNavigate()
  const status = 404

  if (status === 404) {
    <Navigate to='/notfound'/>
  }

  const onClick = () => {
    console.log('hello');
    navigate('/')
  }

  const params = useParams()
  return (
    <div>
      <p>Post ID: {params.id}</p>
      <p><button onClick={onClick}>Back to Home</button></p>
    </div>
  )
}

export default Post
