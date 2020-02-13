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

export function dateTransform(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const hour = `${date.getHours()}`.length === 1 ? `0${date.getHours()}` : date.getHours();
  const minute = `${date.getMinutes()}`.length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  const d = `${date.getDate()}`.length === 1 ? `0${date.getDate()}` : date.getDate();
  const m = months[date.getMonth()];
  const y = date.getFullYear();
  return `${hour}:${minute}; ${d} ${m} ${y}`
}