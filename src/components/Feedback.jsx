import React, { useState } from 'react'

export default function Feedback(props) {
  // Listener => + onSubmit attr. for <form>:
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.type)
    console.dir(e.target)
  }

  // Controlled Component:
  // Hook to control state => + value attr. for input
  const [form, setForm] = useState({
    name: '',
    score: 'good',
    agreement: false,
  })

  // // Handle onChange evt. for input => + event handler for input name:
  // const handleNameChange = (e) => {
  //   setForm((prevForm) => ({
  //     ...prevForm,
  //     name: e.target.value,
  //   }))
  // }

  // BOILERPLATE CODE:
  // Handle onChange for all els =>
  //  + event handler onChange = { handleChange }
  //  + value={form.HOOK}:
  const handleChange = ({ target }) => {
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your Name:</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="satisfaction">
          Select your level of satisfaction with our service:
        </label>
        <select
          id="satisfaction"
          name="satisfaction"
          value={form.score}
          onChange={handleChange}>
          <option value="good">I'm so happy I choose you!</option>
          <option value="normal">That was OK</option>
          <option value="bad">Could've be better...</option>
        </select>
      </div>
      <div>
        <label htmlFor="agreement">
          <input
            id="agreement"
            name="agreement"
            type="checkbox"
            value={form.agreement}
            onChange={handleChange}
          />
          I agree for my personal data to be processed.
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
