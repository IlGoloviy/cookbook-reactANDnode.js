import React, { createRef } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { addRecipe } from '../actions/recipeAction';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.name = createRef();
    this.arr = createRef();
    this.text = createRef();
    this.create = this.create.bind(this);
    this.state = {redirect: false};
  }

  create() {
    const recipe = {
      name: this.name.current.value,
      ingredient: this.arr.current.value.split('\n'),
      cook: this.text.current.value,
      date: new Date()
    }

    this.props.dispatch(addRecipe(recipe));
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return ( 
      <div className="add-recipe-block">
        <input type="text" placeholder="Назва рецепту" ref={this.name}/>
        <textarea placeholder="Інгрідієнти" ref={this.arr}></textarea>
        <textarea placeholder="Спосіб приготування" ref={this.text}></textarea>
        <button className="edit_add-btn" onClick={this.create}>Створити</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps)(AddRecipe);