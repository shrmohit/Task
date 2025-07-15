import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`https://dummyjson.com/todos?limit=5`)
        setApiData(response.data.todos)
        console.log(response.data.todos);

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {apiData.slice(0, 5).map((data) => (
        <div key={apiData.id}>
          <h1><strong>todo</strong>{data.todo}</h1>
          <h2><strong>Completed: </strong>{data.completed ? "Yes" : "No"}</h2>
        </div>
      ))}
    </>
  )
}

export default App
