import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState({
    usertask: "",
    date: ""
  })
  const [editIndex, setEditIndex] = useState(null)
  const [taskList, setTaskList] = useState([])
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleFormData = (e) => {
    e.preventDefault()
    console.log(input);
    setTaskList([...taskList, input])
    console.log(taskList);

    if (editIndex !== null) {
      const updateTask = [...taskList]
      updateTask[editIndex] = input
      setTaskList(updateTask)
      setEditIndex(null)
    }
    setInput({ usertask: "", date: "" })

  }

  const handleEdit = (task, index) => {
    setInput(task)
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    let update = taskList.filter((task, i) => i !== index)
    setTaskList(update)
  }

  return (
    <>
      <div>
        <form onSubmit={handleFormData} >
          <label>Task</label>
          <input type="text"
            name='usertask'
            value={input.usertask}
            onChange={handleInput}
            placeholder='Enter Task' />
          <label >Date</label>
          <input type="date"
            name='date'
            value={input.date}
            onChange={handleInput}
            placeholder='Enter Date' />
          <button type='submit'>Submit</button>
        </form>

        <div>
          {
            taskList?.map((data, index) => (
              <div className='flex justify-center flex-row  space-x-6' key={index}>
                <p>{data.usertask}</p>
                <p>{data.date}</p>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(data, index)}>Edit</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
