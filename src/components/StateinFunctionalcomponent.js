import React,{useState} from 'react'
import '../Styles.css'
export default function StateinFunctionalcomponent() {
    
    let[name,updateName]=useState("Ankitha");
    let[count,updateCount]=useState("0")
    return (
        <div class="demo">
            <h1 onMouseOver={()=>{updateName("goodnight")}}
                onMouseLeave={()=>{updateName("Ankitha")}}>
            
                
                
           
                {name}
            </h1>
            <h2  onMouseOver={()=>{updateCount("3")}}
                  
                  onMouseLeave={()=>{updateCount("4")}}>
                  {count}
            </h2>

            <button onClick={()=>
                
                this.setState({
                    
                      count:this.state.count+1
                }) }> increment count</button>
                <button onClick={()=>
            
                    this.setState({
                        
                          count:this.state.count-1
                    }) }> decrement count</button>
                    <button onClick={()=>
            
                        this.setState({
                            
                              count:this.state.count
                        }) }> reset</button>
        </div>
    )
}
