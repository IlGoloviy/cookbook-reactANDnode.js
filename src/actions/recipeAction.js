import axios from 'axios';

export function fetchRecipes() {
  return {
    type: 'FETCH_RECIPES',
    payload: 
      axios.get(`http://localhost:8080/recipes`)
      .then(res => res.data)
  }
}

export function addRecipe(body) {
  return {
    type: 'ADD_RECIPE',
    payload:
      axios.post('http://localhost:8080/recipe', body)
      .then(res => res.data)
  }
}

export function editRecipe(id) {
  return {
    type: 'EDIT_RECIPE',
    payload:
      axios.get(`http://localhost:8080/recipe/${id}`)
      .then(res => res.data)
  }
}

export function editRecipeSaved(body) {
  return {
    type: 'EDIT_RECIPE_SAVED',
    payload: 
      axios.post('http://localhost:8080/edit', body)
      .then(res => res.data)
  }
}

export function canselEditRecipe() {
  return {
    type: 'CANSEL_EDIT_RECIPE'
  }
}