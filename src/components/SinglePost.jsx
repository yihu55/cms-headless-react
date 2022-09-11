import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import parser from 'html-react-parser'
import Card from 'react-bootstrap/Card'
import axios from'axios'

export default function SinglePost() {
     const params=useParams()
    const [post, setPost] = useState(null);
    const [imageData, setImageData] = useState({});
  //   console.log(params.id)
    // const fetchPost=async()=>{
    //     const url=`/wp-json/wp/v2/posts/${params.id}`
    //     const response=await fetch(url)
    //     const data=await response.json()
    //     console.log(data)
    //     setPost(data)
    //}
   
  //   console.log('post',post)
  //   const getImageUrl = async () => {
  //     const media=await post.featured_media
  //     const response = await fetch(
  //       `/wp-json/wp/v2/media/${media}`
  //     );
  //     const data = await response.json();
  //     console.log(data,'imageUrl');
  //     setImageUrl(data);
  //   };
  //   useEffect(()=>{
  //     const a= fetchPost()
  //     getImageUrl()
  // },[])
   

    // useEffect(() => {
    //  fetchPost()
    //   getImageUrl(post.featured_media);
    // }, []);
    // useEffect(()=>{
    //   setPost(axios.get(`/wp-json/wp/v2/posts/${params.id}`).then(res=>res.json()))
    //   const {featured_media}=post
    //   setImageUrl(axios.get( `/wp-json/wp/v2/media/${featured_media}`).then(res=>res.json())) 
     
   // const firstRequest=async()=>await axios.get(`/wp-json/wp/v2/posts/${params.id}`).then(res=>setPost(res.data))
    //console.log(firstRequest)ä
    //const secondRequest=async()=>await axios.get(`/wp-json/wp/v2/media/${firstRequest.featured_media}`).then(res=>{setImageUrl(res.data)})
   //console.log(secondRequest())
//     useEffect(()=>{
 
    
// firstRequest()
// secondRequest()
//     },[])
useEffect(()=>
  ()=>axios.get(`/wp-json/wp/v2/posts/${params.id}`)
  .then(res=>{
    setPost(res.data)
    return res.data
  }).then(post=>axios.get( `/wp-json/wp/v2/media/${post.featured_media}`))
  .then(res=>setImageData(res.data))
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
