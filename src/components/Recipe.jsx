import React from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends React.Component {
  render() {
    const recipe = this.props.props;

    return(
      <div className="recipe-block">
        <Link to={`/edit-recipe/${recipe._id}`}>
          <h4>{recipe.name}</h4>
        </Link>
        <hr/>
        <ul>
          {recipe.ingredient.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
        <hr/>
        <p>{recipe.cook}</p>
        <hr/>
        <h5>
          <Link to={`/version/${recipe._id}`}>{recipe.date}</Link>
        </h5>
      </div>
    );
  }
}