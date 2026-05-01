import React from 'react'
import matter from 'gray-matter' 
import fm from 'front-matter'
import ReactMarkdown from 'react-markdown'
import { useState } from 'react'    
import remarkGfm from 'remark-gfm'
import Navbar from './Navbar'



const TestFiles = import.meta.glob('./TEST/*.md' , {as:'raw', eager:true})
console.log('TestFiles:', TestFiles)

function parse(file_name){
  return Object.entries(file_name)
    .map(([filepath, raw]) => {
      const { attributes: data, body: content } = fm(raw)
      return {
        ...data,
        content,
        slug: data.slug
      }
    })
    .filter(post => !post.slug.startsWith('_'))
    .sort((a,b) => new Date(b.date) - new Date(a.date))
}


function Loadtest(){
    const parsed = parse(TestFiles)

    const [selected, setSelected] = useState(null)

  return (

    <div>
        <Navbar/>
        <div>
            {parsed.map(post =>
            (
                <div key={post.slug} onClick={()=>setSelected(post)} > 
                <h3> {post.title}</h3>
                <p> {post.date}</p>
                <p> {post.summary} </p>
                
                </div>
            ) )}
        </div>
         <div>
            {selected  ? (
                <ReactMarkdown remarkPlugins={[remarkGfm]} >

                    {selected.content}
                </ReactMarkdown>
            ):
             (<p>Select to read</p>)
            }
         </div>


    </div>
  )
}

export default Loadtest