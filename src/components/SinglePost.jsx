import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import parser from 'html-react-parser'
import Card from 'react-bootstrap/Card'

export default function CustomerDetail() {
     const params=useParams()
    const [post, setPost] = useState(null);

    const fetchPost=async()=>{
        const url=`http://localhost/headless-cms/wp-json/wp/v2/posts/${params.id}`
        const response=await fetch(url)
        const data=await response.json()
        console.log(data)
        setPost(data)
    }
   
    useEffect(()=>{
        fetchPost()
    },[])

    return (

    <>
    
        {post&&
       <Card className="text-center">
       <Card.Header>Post</Card.Header>
       <Card.Body>
         <Card.Title>{parser(post.title.rendered)}</Card.Title>
         <Card.Text>
         {parser(post.content.rendered)}
         </Card.Text>
       </Card.Body>
       <Card.Footer className="text-muted">2 days ago</Card.Footer>
     </Card>
          }
    </>
      
     
    )
}
