import RandomMeal from './components/randommeal.js'
import Recipe from './components/ownRecipe.js'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    Random Recipe Generator
    <Router>
    <Route exact path="/" component={RandomMeal}/>
    <Route exact path="/create" component={Recipe}/>
    </Router>
    </div>
  );
}

// {this.state.Recipe.map((meal, index) => {
//   console.log(meal)
//   return <span key={index}>{meal["Meal type"]}</span> }
export default App;
