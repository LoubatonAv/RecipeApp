const initialState = {
  recipes: [],
};

export function recipeReducer(state = initialState, action) {
  let newState = state;
  switch (action.type) {
    case 'SET_RECIPES':
      newState = { ...state, recipes: [...action.recipes] };
      break;
    default:
      return newState;
  }

  // default:
  return newState;
}
