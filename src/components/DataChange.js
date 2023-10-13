import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


export default class DataChange extends Component {

    constructor(props){
        super(props);

        this.state = {
            wordCount: 0 ,
        }
    }

    handleInput = (e) => {
        this.setState({
            wordCount: e.target.value.trim().split(' ').length ,
        }) ;
    } ;
  render() { 
    return (
      <div className='border border-dark border-4 w-50 ' >
        
        <div class="row  justify-content-center align-items-center">
            <div className='col-6'>
                <h1>Responsive Paragraph &nbsp;&nbsp;&nbsp; Word Counter</h1>
                <input style={{height:150 ,width:300,borderRadius:10 }} className='ms-5 mt-2' type='text' onChange={this.handleInput} /> <br></br>
                <label className='pt-2 ms-5'>Word Count :   {this.state.wordCount} </label>
            </div>
        </div>
      </div>
    )
  }
}
