import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react'
import BackspaceIcon from '@mui/icons-material/Backspace';
import New from '../New/New';
function Fildes() {
    const[name ,setName]=useState('')
    const[email,setEmail]=useState('')
    const[data,setData]=useState([])

    const addData=()=>{
        setData( [...data, {name,email}])
        setName('');
        setEmail('');
    }

  return (
      <>
    <div  className='pop' >
    <Stack spacing={2} direction="row">

          <TextField  value={name} 
          onChange={(event)=>setName( event.target.value)} 
          id="outlined-basic" label="Enter Name" variant="outlined" />
          <TextField  value={email} 
          onChange={(event)=>setEmail( event.target.value)}
          id="outlined-basic" label="Enter Email" variant="outlined" />
          <Button  onClick={addData}  variant="contained" color="success"  >
            <AddIcon />
      </Button>
        </Stack>
    </div>
    <div   className='popp' >
        <div  className='lop' >         
        <h1 >{name}</h1>
        <h1>{email}</h1>
        <h1  className='l' > <BackspaceIcon/> </h1>   
        </div>
    </div>
    {
      data.map((item , index )=>{
        return (

            <New key={item.email} name={item.name} email={item.email} index={index} />
            )

      })
    }
    

      </>
  )
}

export default Fildes