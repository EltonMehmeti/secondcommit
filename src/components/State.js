import React, {useState} from 'react'
import './user.scss'

const State = () => {
    const [color, setColor] = useState(false)
 
    const changeColor =  () => {
        setColor(!color)
    }
    const [buttonText, setButtonText] = useState('Click');

    function handleClick() {
      setButtonText('New text');
    }
   

    return (
    <div className='state'>
        <button type='button' 
      onClick={() => {
    changeColor();
    handleClick();
       
      }}>
        
        Change text Color</button>
        <button className={color ? 'green' : ''}>{buttonText}</button>
    </div>
  )
}

export default State