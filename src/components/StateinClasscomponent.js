import React, { Component } from 'react'
import '../Styles.css'
import Functional from './Functional'

export default class StateinClasscomponent extends Component {
 
   constructor(props){
        super(props)

           this.state={
                  name:":jaswitha likes this song",
                  count:0
           }

        }


render() {

    //   setTimeout(()=>{
    //           this.setState({count:" 143"})
    //           this.setState({name:"jaswitha reddy"})
    //   },3000);




        return (
            <div class="demo">
                
                 <h1></h1>
                <h1>state of mind right now "kanna nidurinchara ........."{this.state.count} {this.state.name}</h1>
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
}
