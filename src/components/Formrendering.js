import React, { Component } from 'react'

export default class Formrendering extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             pwrd:""
        }
    }
    changeUname=(event) =>{
           this.setState({
            uname:event.target.value
           })
    }
    changepswd=(event1)=>{

         this.setState({
             pwrd:event1.target.value
         })
    }

    submituname=(event)=>{
         event.preventDefault()
        console.log(`${this.state.uname} ${this.state.pwrd}` )


    }
    render() {
        return (
            <div>
                <form onSubmit={this.submituname} method='get'>
                  <input type="text" value={this.state.uname}
                   
                  onChange={this.changeUname}/>
                  
                  <br></br>
                  <input type="text" value={this.state.pwrd}
                   onChange={this.changepswd}/>
                  
                  <br></br>
                    <button type="submit" >click</button>
                </form>
            </div>
        )
    }
}
