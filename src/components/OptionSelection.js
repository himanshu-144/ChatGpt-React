import React from 'react'

const OptionSelection = ({dataAi,selectOption}) => {
  return (
    <div>
      <h1 className='heading'>React Ai App</h1>
      <div className='grid_main'>
      {dataAi.map((data)=>{
         return (
            <div key={data.id} className='grid-child' onClick={()=>selectOption(data.options)}>
              <h4>{data.name}</h4>
              <p>{data.description}</p>
            </div>
         )
      })}
      </div>
    </div>
  )
}

export default OptionSelection
