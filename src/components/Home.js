import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Formrendering from './Formrendering';
import Functional from './Functional';
import Listrendering from './Listrendering';
import StateinClasscomponent from './StateinClasscomponent';
import StateinFunctionalcomponent from './StateinFunctionalcomponent';
import UnionBank from './UnionBank';

export default function Home() {
    return (
        <>
        <div>
           
            <BrowserRouter>
            <Routes>
                 <Route path="/home1" element={<Main/>}></Route>
                 <Route path="/home7" element={<Formrendering/>}></Route>
                 <Route path="/home3" element={<Listrendering/>}></Route>
                 <Route path="/home4" element={<StateinFunctionalcomponent/>}></Route>
                 <Route path="/home5" element={<StateinClasscomponent/>}></Route>
                 <Route path="/home6" element={<Functional/>}></Route>
                 <Route path="/home2" element={<UnionBank/>}></Route>
              
                  
            </Routes>

            
            </BrowserRouter>
            
            
        </div>
        </>
    )
}


function Main(){
    return(

        <>
             <h1> :: home page ::</h1>
             <Link to="/home2">login</Link>
        </>
    )

}