import React, { useState } from 'react'

export default function Login() {
  const handleSubmit = (e) => {
    event.preventDefault()
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState('')
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
        <label>password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} /></label>

      </form>


    </div>
  )
}