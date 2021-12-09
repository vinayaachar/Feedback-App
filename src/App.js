function App() {
  const title = 'Blog Post'
  const body = 'This is my blog'
  const comment = [
    {id : 1, text: 'comment 1'},
    {id : 2, text: 'comment 2'},
    {id : 3, text: 'comment 3'}
  ]
  return (
    <>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>
      {comment.map(item => <li key={item.id}>{item.text}</li>)}
    </>
  )
}


export default App;