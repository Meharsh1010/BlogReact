import React from 'react'

const App = () => {
  return (
    <>
    <div>AI BLOGS</div>
    
    <ol>
      <li>AI in Healthcare</li>
      <li>AI in Finance</li>
      <li>AI in Education</li>
      <li>AI in Transportation</li>
      <li>AI in Entertainment</li>
    </ol>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <br />
      <button type="submit">Submit</button>

    </form>
    </>
  )
}

export default App