import { useState, useEffect } from 'react'

// Styles
import styles from './Categories.module.css'

const url = "http://localhost:3004/categories" // conexao json server porta 3004import './App.css'
// const url = "http://localhost:3000/api/categories" // conexao rails server

function App() {
  const [categories, setCategories] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  // resgatando dados - 1
  useEffect(() => {
    async function getData() {
      const res = await fetch(url); // realializa a consulta oa servidor api
      const data = await res.json();
      setCategories(data);
    }

    getData();
  }, []);

  // adicao de categorias - 2

  const handleSubmit = async (e) => {
    e.preventDefault();
    const category = {
      name,
      description
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify(category)
    });

    // carregamento dinamico - 3

    const addedCategory = await res.json()

    setCategories((prevCategories) => [...prevCategories, addedCategory])

  };

  return (
    <div className='styles.categories'>
      <h1>Categorias</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}> {category.name} - {category.description}</li>
        ))}
      </ul>
      <div className="add-category">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Categoria:</span>
            <input type="text" 
            name="name" 
            placeholder="Informe a Categoria"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} />
          </label>
          <label>
            <span>Descrição:</span>
            <input
              type="text" name="description"
              placeholder="Informe a descrição"
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description} />
          </label>
          <button className="btn " type="submit">Criar</button>
        </form>
      </div>
    </div >
  )
}

export default App