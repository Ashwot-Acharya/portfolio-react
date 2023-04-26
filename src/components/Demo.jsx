import React from 'react'
import Navbar from './Navbar'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
        <div>
          <div>
          <SyntaxHighlighter language="python" style={docco}>
            {codeString}
            </SyntaxHighlighter>
          </div>
          <div></div>
          <div> </div>
        </div>
    </div>
  )
}

export default Demo