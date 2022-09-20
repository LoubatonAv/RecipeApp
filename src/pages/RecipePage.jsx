import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRecipes } from '../cmps/store/recipe.action.js';
import '../App.css';
import RecipeList from '../cmps/RecipeList.jsx';

export const RecipePage = () => {
  const recipes = useSelector((state) => state?.recipeModule?.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipes());
  }, []);

  console.log('recipes:', recipes);

  return (
    <>
      <div>
        <h1 className='text-red-500 bg-red-200 '>Recipes</h1>
        <RecipeList recipes={recipes} />
      </div>
    </>
  );
};
