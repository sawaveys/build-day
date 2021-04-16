import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class RandomMeal extends Component{
    constructor(props){
        super(props)
        this.state= {
        loading: true, Recipe: null
      }
    }
    
    async componentDidMount() {
        const api = 'https://www.themealdb.com/api/json/v1/1/random.php';
        const response = await fetch(api)
        const data = await response.json()
        console.log(data.meals)
        this.setState({loading: false, Recipe: data.meals[0]})
    }
 

        render(){
            return (
                <div >
                {this.state.loading || !this.state.Recipe ? (
                    <div>loading...</div>
                ) : (
                    <div>
                    
                    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{this.state.Recipe.strMeal}</h1>
                    <h3>Cuisine: {this.state.Recipe.strArea}</h3>
                    <img src={this.state.Recipe.strMealThumb} alt= ''/>
                    <h3>Intructions:</h3> <p>{this.state.Recipe.strInstructions}</p>
                    
                    <ul>
                    <h3>Ingredients</h3>
                    <li>{this.state.Recipe.strIngredient1}</li>
                    <li>{this.state.Recipe.strIngredient2}</li>
                    <li>{this.state.Recipe.strIngredient3}</li>
                    <li>{this.state.Recipe.strIngredient4}</li>
                    <li>{this.state.Recipe.strIngredient5}</li>
                    <li>{this.state.Recipe.strIngredient6}</li>
                    <li>{this.state.Recipe.strIngredient7}</li>
                    <li>{this.state.Recipe.strIngredient8}</li>
                    <li>{this.state.Recipe.strIngredient9}</li>
                    <li>{this.state.Recipe.strIngredient10}</li>
                    <li>{this.state.Recipe.strIngredient11}</li>
                    <li>{this.state.Recipe.strIngredient12}</li>
                    <li>{this.state.Recipe.strIngredient13}</li>
                    <li>{this.state.Recipe.strIngredient14}</li>
                    <li>{this.state.Recipe.strIngredient15}</li>
                    
                        <h3>Measurements</h3>
                    <li>{this.state.Recipe.strMeasure1}</li>
                    <li>{this.state.Recipe.strMeasure2}</li>
                    <li>{this.state.Recipe.strMeasure3}</li>
                    <li>{this.state.Recipe.strMeasure4}</li>
                    <li>{this.state.Recipe.strMeasure5}</li>
                    <li>{this.state.Recipe.strMeasure6}</li>
                    <li>{this.state.Recipe.strMeasure7}</li>
                    <li>{this.state.Recipe.strMeasure8}</li>
                    <li>{this.state.Recipe.strMeasure9}</li>
                    <li>{this.state.Recipe.strMeasure10}</li>
                    <li>{this.state.Recipe.strMeasure11}</li>
                    <li>{this.state.Recipe.strMeasure12}</li>
                    <li>{this.state.Recipe.strMeasure13}</li>
                    <li>{this.state.Recipe.strMeasure14}</li>
                    </ul>
                    <button><Link to="/create">Next Page</Link></button>
                    <a href= {this.state.Recipe.strSource}>Source</a>
                    
                    </div>
                )}
                </div>
            )}
          

}


export default RandomMeal