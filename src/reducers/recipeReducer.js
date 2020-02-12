export default function reducer(state = {
  recipes: [],
  recipe: null,
  fetching: false,
  fetched: false,
  error: null
}, action) {
    
  switch (action.type) {
    case 'FETCH_RECIPES': {
      return {...state, fetching: true}
    }
    case 'FETCH_RECIPES_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'FETCH_RECIPES_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        recipes: action.payload
      }
    }
    case 'ADD_RECIPE': {
      return {...state, fetching: true}
    }
    case 'ADD_RECIPE_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'ADD_RECIPE_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        recipes: [...state.recipes, action.payload]
      }
    }
    case 'EDIT_RECIPE': {
      return {...state, fetching: true}
    }
    case 'EDIT_RECIPE_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'EDIT_RECIPE_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        recipe: action.payload
      }
    }
    case 'EDIT_RECIPE_SAVED': {
      return {...state, fetching: true}
    }
    case 'EDIT_RECIPE_SAVED_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: action.payload
      }
    }
    case 'EDIT_RECIPE_SAVED_FULFILLED': {
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        recipe: null,
        recipes: action.payload
      }
    }
    case 'CANSEL_EDIT_RECIPE': {
      return {
        ...state,
        recipe: null
      }
    }
    default: {
      return state
    }
      
  }
  
  // return state;
}