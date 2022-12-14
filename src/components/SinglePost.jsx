import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import parser from 'html-react-parser'
import Card from 'react-bootstrap/Card'
import axios from'axios'

export default function SinglePost() {
     const params=useParams()
    const [post, setPost] = useState(null);
    const [imageData, setImageData] = useState({});

const fetchPostAndImage=()=>{
  axios.get(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/posts/${params.id}`)
  .then(res=>{
    setPost(res.data)
    return res.data
  }).then(post=>axios.get( `${process.env.REACT_APP_API_URL}/wp-json/wp/v2/media/${post.featured_media}`))
  .then(res=>{
      setImageData(res.data)
    })
  .catch(err=>{
    console.log(err)
  })
}

useEffect(()=>{
  fetchPostAndImage()
}
,[])
console.log(imageData)
    return (

    <>

        {post&&
       <Card className="text-center">
       <Card.Header>Post</Card.Header>
       <Card.Body>
         <Card.Title>{parser(post.title.rendered)}</Card.Title>
         <Card.Text>
         {parser(post.excerpt.rendered)}
         </Card.Text>
         <img className="img-fluid" width='50%' src={imageData.source_url} alt={imageData.media_type} />
       </Card.Body>
       <Card.Footer className="text-muted">2 days ago</Card.Footer>
     </Card>
          }
    </>
      
     
    )
}
