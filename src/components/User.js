import React from 'react'
import { Data } from './data'
import './user.scss';
import Item from './Item';
import State from './State';


const User = (props) => {
  return (
    <div className='container'>
    <div className='user' >
{Data.map((d, i,) => {
return(
   <Item 
   key={i}{...d}
   />
)
})}
</div>
<State/>
</div>
  )
}

export default User