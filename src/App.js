import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header'
import Tasks from './components/tasks'
import AddTask from './components/addTask'
import Footer from './components/footer'
import About from './components/about'
import { db } from './firebaseConfig'



function App() {

  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] =useState(false)

  useEffect(() => {
    const getTasks = () => {
      db.collection('todo').onSnapshot( function(querySnapshot) {
        setTasks(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            task: doc.data().task,
            date: doc.data().date,
            
          }))
        )
      } )
    }

    getTasks()
  }, [] )


  // Add task
  const addTask = async () => {
    /* const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data]) */
    
    // const id = Math.floor(Math.random() * 10000 ) + 1
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    db.collection('todo').doc(id).delete();

    /* await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE' 
    })
    setTasks(tasks.filter((task) => task.id !== id ))*/
  }

  // Toggle reminder
  const toggleReminder = (id, reminder) => {
    db.collection('todo').doc(id).update({
      reminder: !reminder
    })
    

    /*
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) => task.id === id ? {...task, reminder: data.reminder } : task )
    ) */
  }

  return (
    <Router>
      <div className="container">
        <Header 
        title='To Do Task'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />
        <Route path='/' exact render={() => (
          <>
            { showAddTask && <AddTask 
              onAdd={addTask}
            />}
            { tasks.length > 0 ? <Tasks
              tasks={tasks}
              onDelete={deleteTask} 
              onToggle={toggleReminder}
              /> : (
                'You have no more Tasks'
              )}
            
          </>
        ) } />

        <Route path='/about' component={About} ></Route>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
