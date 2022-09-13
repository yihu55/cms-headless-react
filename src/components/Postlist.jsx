import React from 'react';
import Post from './Post';


export default function Postlist({posts}) {
  return (<>
   {posts&&
        posts.map((post) => {
          return (<>
              <Post key={post.id} post={post}/>
             
              </>
          );
        })}
  </>
   
  )
}
