import React from 'react'

const Translation = ({doStuff,setInput,result}) => {
  return (
    <div className='translation'>
      <textarea className='textArea' onChange={(e)=>setInput(e.target.value)} 
      cols={55} rows={10}></textarea>
      <button onClick={doStuff}>DO YOU STUFF</button>
      <h3 className="result_text">{result.length >0 ? result : ""}</h3>
    </div>
  )
}

export default Translation
