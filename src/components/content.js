import React from 'react'
import matter from 'gray-matter' 

const test_files = import.meta.glob('/TEST/*.md', {as:'raw', eager:true, })



function parse(file_name){
    return Object.entries(file_name)
    .map(([filepath,raw]) =>{
        const {data, content} = matter(raw)
        return {
            ...data, 
            content, 
            slug: data.slug
        }
    } ).filter(post => !post.slug.startsWith('_') ) 
    .sort((a,b)=>new Date(b.date)-new Date(a.date))
}


const parsed = parse(test_files)
console.log(parsed)


