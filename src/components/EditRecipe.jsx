import React, { createRef } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { editRecipe, editRecipeSaved, canselEditRecipe } from '../actions/recipeAction';

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.name = createRef();
    this.arr = createRef();
    this.text = createRef();
    this.edit = this.edit.bind(this);
    this.cansel = this.cansel.bind(this);
    this.state = {redirect: false};
  }

  componentDidMount() {
    if (this.props.recipe === null) {
      this.props.dispatch(editRecipe(this.props.match.params.id));
    }
  }

  cansel() {
    this.props.dispatch(canselEditRecipe());
    this.setState({redirect: true});
  }

  edit() {
    const recipe = {
      id: this.props.match.params.id,
      name: this.name.current.value,
      ingredient: this.arr.current.value.split('\n'),
      cook: this.text.current.value,
      date: new Date(),
      version: this.props.recipe
    }

    this.props.dispatch(editRecipeSaved(recipe));
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
    if (this.props.recipe !== null) {
      const recipe = this.props.recipe;
      const ingredient = recipe.ingredient.join('\n');
  
      return ( 
        <div className="add-recipe-block">
          <input type="text" placeholder="Назва рецепту" ref={this.name} defaultValue={recipe.name} />
          <textarea placeholder="Інгрідієнти" ref={this.arr} defaultValue={ingredient}></textarea>
          <textarea placeholder="Спосіб приготування" ref={this.text} defaultValue={recipe.cook}></textarea>
          <div>
            <button className="cansel-btn" onClick={this.cansel}>Скасувати</button>
            <button className="edit_add-btn" onClick={this.edit}>Редагувати</button>
          </div>
        </div>
      );
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    recipe: state.recipe.recipe,
    recipes: state.recipe.recipes
  }
}

export default connect(mapStateToProps)(EditRecipe);