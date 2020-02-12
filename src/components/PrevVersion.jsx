import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Recipe from './Recipe';
import { editRecipe, canselEditRecipe } from '../actions/recipeAction';

class PrevVersion extends React.Component {
  componentDidMount() {
    if (this.props.recipe === null) {
      this.props.dispatch(editRecipe(this.props.match.params.id));
    }
  }

  goHome() {
    this.props.dispatch(canselEditRecipe());
  }

  render() {
    if (this.props.recipe !== null) {
      if (this.props.recipe.version.length === 0) {
        this.props.dispatch(canselEditRecipe());
        return <Redirect to="/" />
      } else {
        const recipe = this.props.recipe;
        const actualRecipe = <Recipe props={recipe} key={recipe._id} />;
        const oldRecipes = recipe.version.map((recipe, key) => {
          return <Recipe props={recipe} key={key} />
        }).reverse();
        
        return (
          <>
          <Link to="/" onClick={() => this.goHome()} className="go-home"> до головної</Link>
          <div className="Container">
            {actualRecipe}
            {oldRecipes}
          </div>
          </>
          );
      }
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe.recipe
  }
}

export default connect(mapStateToProps)(PrevVersion);