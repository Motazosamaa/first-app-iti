import React, { cache } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserTable from './UserTable';

interface Props{
  searchParams:{orderBy:string}
  
  } 


const page = async({searchParams:{orderBy}}:Props) => {

    
  
  return (
    <div> 

      
      

    
    <UserTable orderBy={orderBy}> </UserTable>



    </div>
  )
}

export default page

