import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import PrevVersion from './components/PrevVersion';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h3>Binary Кулінар</h3>
        <Link to="/add-recipe" className="add-recipe-btn">добавити рецепт</Link>
      </header>
      
      <div className="Container">
        <Switch>
          <Route path="/" component={Recipes} exact={true} />
          <Route path="/add-recipe" component={AddRecipe} exact={true} />
          <Route path="/edit-recipe/:id" component={EditRecipe} exact={true} />
          <Route path="/version/:id" component={PrevVersion} exact={true} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
