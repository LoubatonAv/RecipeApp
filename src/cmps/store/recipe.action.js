import { recipeService } from '../../service/recipe.service.js';

export function loadRecipes() {
  return (dispatch, getState) => {
    recipeService.loadRecipes().then((recipes) => {
      const action = { type: 'SET_RECIPES', recipes };
      dispatch(action);
    });
  };
}
