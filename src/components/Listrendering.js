import React from 'react'

export default function Listrendering() {


//    let emplist=["jaswitha","reddy","prabhas","king"]

      let emplist=[

         {

            name:"perumal jaswitha",
            salary:2,
            email:"perumal@gmail.com"
         },
         {

            name:"perumal",
            salary:3,
            email:"perumaljas@gmail.com"
         },
         {

            name:" jaswitha",
            salary:0,
            email:"perumaltha@gmail.com"
         }

      ]
          

      




    return (
        <div>
            
            <h1>
                heading 5
            </h1>
        {/* {

            emplist.map(element => 

                <h1> {element} </h1>
            )
        } */}
        {
        emplist.map(
            employee=>
            <>
                <p>{employee.name}</p>
                <p>
                    {employee.salary}
                </p>
                <p>
                {employee.email}
            </p>

            </>
        )
        }
        </div>
    )
}
