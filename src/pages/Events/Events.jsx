import { useState, useEffect } from 'react'
import styles from './Events.module.css'

const url = "http://localhost:3004/events" // conexao json server porta 3004import './App.css'
// const url = "http://localhost:3000/api/events" // conexao rails server


const Events = () => {
  const [events, setEventss] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [event_date, setEventDate] = useState("")
  const [user_id, setUserId] = useState("")
  const [category_id, setCategoryId] = useState("")
  const [subcategory_id, setSubcategoryId] = useState("")

  // retornando dados
  useEffect(() => {
    async function getData() {
      const res = await fetch(url); // realializa a consulta oa servidor api
      const data = await res.json();
      setCategories(data);
    }

    getData();
  }, []);

    // adicao de Eventos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = {
      name,
      description,
      event_date,
      user_id,
      category_id,
      subcategory_id
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify(event)
    });

    // carregamento dinamico

    const addedEvent = await res.json()

    setCategories((prevEvents) => [...prevEvents, addedEvent])

  };

  return (
    <div className='styles.events'>
      <h1>Eventos</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}> {event.name} - {event.description}</li>
        ))}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Evento:</span>
            <input type="text" 
            name="name" 
            placeholder="Informe o evento"
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

export default Events