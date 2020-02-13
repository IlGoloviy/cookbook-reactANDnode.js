import React from 'react';
import { Link } from 'react-router-dom';

import { dateTransform } from '../actions/recipeAction';

export default class Recipe extends React.Component {
  render() {
    const recipe = this.props.props;
    const old = (this.props.children !== undefined) 
      ? ` ${this.props.children}` 
      : ''

    return(
      <div className={`recipe-block${old}`}>
        <h4>{recipe.name}</h4>
        <hr/>
        <ul>
          {recipe.ingredient.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
        <hr/>
        <p>{recipe.cook}</p>
        <hr/>
        <div className="recipe-block_footer">
          <h5>{dateTransform(new Date(recipe.date))}</h5>
          <Link to={`/edit-recipe/${recipe._id}`}>
            <button className="recipe-block_footer-btn">Редагувати</button>
          </Link>
        </div>
        <Link to={`/version/${recipe._id}`}>
          <h4 className="recipe-block_version-btn">попередні версії рецепту</h4>
        </Link>
      </div>
    );
  }
}