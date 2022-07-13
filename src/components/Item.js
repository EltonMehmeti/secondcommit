import React from 'react'
const Item = (props) => {
  
  return (
    <div className='item'>   

    <div className='div1'>
   <p>{props.date}</p>
    <div className='div2'>   
    <button id ='btn2'style={{background: `${props.bg}`}}>
                            {props.buttonText}
                        </button>
      <icon>{props.icon}</icon> 
    <h6>{props.title}</h6>
   
    </div>
    <p>{props.description}</p>
    </div>
    <div className='divbtn'>
    <button className='btn1' type="button">Download{props.button}</button>
  </div>
  </div>

  )
}

export default Item