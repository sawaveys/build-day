import React, { Component } from 'react';


class Recipe extends Component{
constructor(props){
    super(props)
    this.state ={ title:[], recipe: []}
}
input =()=>{
    const text = document.getElementById('title')
    const input = document.getElementById('input')
    const newState = this.state.title
    const newInput = this.state.recipe
    newState.push(text.value)
    newInput.push(input.value)
    this.setState({title: newState, recipe: newInput})

}
render(){
    return(
        <div>
        <h1>Insert Your Own</h1>

        <input id= "title"></input>

        <input id= "input"></input>

        <p>
        <button onClick={this.input}>save</button>
        </p>

        {this.state.title.map((title, index) => <p key={index}>{title}</p>)}
        {this.state.recipe.map((input, index) => <p key={index}>{input}</p>)}

        </div>
    )
}
}

export default Recipe