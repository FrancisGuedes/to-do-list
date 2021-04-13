import React, {useState} from 'react'
import { db } from '../firebaseConfig'




const AddTask = ({ onAdd }) => {
  const [text, setText]=useState('')
  const [date, setDate]=useState('')
  const [reminder, setReminder]=useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add Task')
      return 
    }

    onAdd({ text, date, reminder })

    setText('')
    setDate('')
    setReminder(false)

    db.collection('todo').add({
      date: date,
      reminder: false,
      task: text
    })
  }

  return (
    <>
    <form className='add-form' onSubmit={onSubmit} >
      <div className="form-control">
        <label>Task</label>
        <input 
        type='text' 
        placeholder='Add Task' 
        value={text}
        onChange={(e) => setText(e.target.value) }
        />
      </div>
      <div className="form-control">
        <label>Date & Time</label>
        <input 
        type='text' 
        placeholder="dd/mm/yyyy & 00:00"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input 
        type='checkbox' 
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input 
        className='btn btn-block' 
        type='submit' 
        value='Save Task'/>
    </form>
    </>
  )
}

export default AddTask