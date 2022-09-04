import React,{useEffect, useState}from 'react'
import parser from 'html-react-parser'

export default function Categories() {
  
  const [categories,setCategories]=useState([])
  const [postsByCategory,setPostsByCategory]=useState([])

  const getCategories=async()=>{
    const response=await fetch('http://localhost/headless-cms/wp-json/wp/v2/categories')
    const data=await response.json()
    console.log(data)
    setCategories(data)
  }
  const fetchPostsByCategory=async(category)=>{
    const response=await fetch(`http://localhost/headless-cms/wp-json/wp/v2/posts?categories=${category.id}`)
    const data=await response.json()

    setPostsByCategory(data)
    console.log(postsByCategory)
  }
 useEffect(()=>{
   getCategories()
 },[])
  return (
    <div>
        {categories&&categories.map(category=>{
            return <button key={category.id} onClick={()=>fetchPostsByCategory(category)}>{parser(category.name)}{(category.id)}</button>
        })}
        {postsByCategory&& postsByCategory.map(post=>{
          return <div key={post.id}>
            <h3>posts by category</h3>
            <h2>{parser(post.title.rendered)}</h2>
            <h4>{parser(post.content.rendered)}</h4>
            </div>
        })}
    </div>
  )
}
