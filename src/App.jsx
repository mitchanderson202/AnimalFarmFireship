import { useState } from 'react'
import Animal from './Animal';
import './App.css'

function App() {
const [animals, setAnimals] = useState([]);

const search = async (q) => {
  const response = await fetch(
    "http://localhost:8080/?" + new URLSearchParams({ q })
  )
  const data = await response.json();
  setAnimals(data);
}

  return (
  <main>
    <h1>Animal Farm</h1>

    <input
    type="text"
    paceholder="Search"
    onChange={(e) => search(e.target.value)}
    />

    <ul>
      {animals.map((animal) => (
        <Animal key={animal.id} {...animal} />
      ))}

      {animals.length === 0 && "No animals found"}

    </ul>

  </main>
  )
}

export default App
