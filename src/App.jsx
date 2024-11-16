import { useState, useEffect } from 'react'
const url = "http://localhost:3000/products"

import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // resgatando dados - 1
  useEffect(() => {
    async function getData() {
      const res = await fetch(url); // realializa a consulta oa servidor api
      const data = await res.json();
      setProducts(data);
    }

    getData();
  }, []);

  // adicao de produtos - 2

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application-json"
      },
      body: JSON.stringify(product)
    });

    // carregamento dinamico - 3

    const addedProducts = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProducts] )

  };



  return (
    <div className='App'>
      <h1>Conectar com Servidor Json</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}> - {product.name} - R$ {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Produto:
            <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
          </label>
          <label>
            Preço R$:
            <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
          </label>
          <button type="submit">Criar</button>
        </form>
      </div>
    </div >
  )
}

export default App