import { useEffect, useState } from 'react'
import Animal from './Animal';
import './App.css'

function useAnimalSearch() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
      const lastQuery = localStorage.getItem("lastQuery");
      search(lastQuery);
  }, [])
  
  const search = async (q) => {
    const response = await fetch(
      "http://localhost:8080/?" + new URLSearchParams({ q })
    )
    const data = await response.json();
    setAnimals(data);
  
    localStorage.setItem("lastQuery", q);
  }
  return { search, animals };
}

function App() {

  const { search, animals } = useAnimalSearch();

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
