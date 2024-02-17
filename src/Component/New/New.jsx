import React from 'react'
import BackspaceIcon from '@mui/icons-material/Backspace';


function New({name,email}) {
  return (
    <div  className='ko' >
          <div  className='lop' >         
        <h1>{name}</h1>
        <h1>{email}</h1>
        <div className='hu'>
        <h1  className='l' ><BackspaceIcon/> </h1>   
        </div>
        </div>


    
       
    </div>
  )
}

export default New