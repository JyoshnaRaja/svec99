import React from 'react'
import { useState } from 'react';

export default function FormRenderinginFunctions() {

    let[values,updateValues]=useState(initialdata) ;
    let initialdata={
        name:"",
        pwrd:"",
        // email:""
    }


       const changeUserName=(event)=>{
               updateValues({
                   ...values,name:event.target.value
               })
             

       }

      const changePassword=(event)=>{
             updateValues({
                 ...values,pwrd:event.target.value
             })
                
    }
//     const changePassword=(event)=>{
//         updateValues({
//             pwrd:event.target.value
//         })
           
// }
    const  submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${values.name} ${values.pwrd}`)
    }
    return (

        
        <div>
            <form onSubmit={submitUserData} method='get'>

                <input type="text" value={values.name}
                   onChange={changeUserName}/>
                   <br></br>
                   <input type="text" value={values.pwrd}
                   onChange={changePassword}/>
                   <br>
                   </br>
                   <button type="submit">login</button>
            </form>

        </div>
    )
}
