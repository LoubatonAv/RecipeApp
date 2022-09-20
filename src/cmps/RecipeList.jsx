import React from 'react';

const RecipeList = ({ recipes }) => {
  console.log('recipes:', recipes);

  return (
    <div className='px-10'>
      <ul className='grid-cols-4 grid'>
        {recipes.map((recipe) => (
          <div className='border-red-200 border pt-2 mt-4'>
            <li>{recipe.name}</li>
            <img src={recipe.picture} />
            {/* {recipe.ingredients.map((ingredients) => (
              <div className='flex gap-2'>
                <div>{ingredients.name}</div>
                <div>{ingredients.amount}</div>
                <div>{ingredients.measurement}</div>
              </div>
            ))} */}
            <div>{recipe.rate}</div>
            <div>{recipe.duration}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
