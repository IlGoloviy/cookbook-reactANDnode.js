import React from 'react';
import { connect } from 'react-redux';

import Recipe from './Recipe';
import { fetchRecipes, editRecipe } from '../actions/recipeAction';

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    if (!this.props.recipes.length) {
      this.props.dispatch(fetchRecipes());
    }
  }

  edit(id) {
    this.props.dispatch(editRecipe(id));
  }

  render() {
    if (this.props.recipes.length !== 0) {
      let sortRecipes = this.props.recipes.sort((a,b) => {
        const dA = new Date(a.date);
        const dB = new Date(b.date);
        return  dB - dA;
      });
      let recipes = sortRecipes.map(recipe => {
        return <Recipe props={recipe} key={recipe._id}></Recipe>
      });
    
      return (
        <>
        {recipes}
        </>
        );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipe.recipes
  }
}

export default connect(mapStateToProps)(Recipes);