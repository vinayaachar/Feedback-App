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
      Post ID: {params.id}
      <button onClick={onClick}>Click</button>
    </div>
  )
}

export default Post
