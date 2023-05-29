import React from 'react'
import Navbar from './Navbar'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Demo() {
  const codeString = ` 
    a = 15 
    b = 123 
    def add(num1 , num2 )
      sum = num1 + num2 
      print(sum)
  `
  return (
    <div>
        <Navbar/>
        <div className=''>
          <div className='w-50'>
          <SyntaxHighlighter language="python" style={dracula}>
            {codeString}
            </SyntaxHighlighter>
          </div>
          <div></div>
          <div> 
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeV2aAcj4DYDsu5_l_ErmJ5ZtbbbcPHHoHzij9HRVSQZJ095Q/viewform?embedded=true" width="640" height="554" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
    </div>
  )
}

export default Demo