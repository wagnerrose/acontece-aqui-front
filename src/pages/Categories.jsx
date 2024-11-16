import { useState, useEffect } from 'react'
const url = "http://localhost:3000/categories"

import "Categories.css"

const Categories = () => {

    const [categories, setCategories] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    
  return (
    <div>Categories</div>
  )
}

export default Categories