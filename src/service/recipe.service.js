import axios from 'axios';
import { storageService } from './storage.service.js';

const STORAGE_KEY = 'recipesDB';

export const recipeService = {
  loadRecipes,
};

const gRecipes = [
  {
    name: 'Bread',
    picture:
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId',
    ingredients: [
      {
        name: 'Flour',
        amount: '2',
        measurement: 'Cups',
      },
      {
        name: 'Water',
        amount: '1.5',
        measurement: 'Cups',
      },
      {
        name: 'Yeast',
        amount: '1',
        measurement: 'tsp',
      },
      {
        name: 'Salt',
        amount: '1',
        measurement: 'tsp',
      },
    ],
  },
  {
    name: 'Bread',
    picture:
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId',
    ingredients: [
      {
        name: 'Flour',
        amount: '2',
        measurement: 'Cups',
      },
      {
        name: 'Water',
        amount: '1.5',
        measurement: 'Cups',
      },
      {
        name: 'Yeast',
        amount: '1',
        measurement: 'tsp',
      },
      {
        name: 'Salt',
        amount: '1',
        measurement: 'tsp',
      },
    ],
  },
  {
    name: 'Bread',
    picture:
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId',
    ingredients: [
      {
        name: 'Flour',
        amount: '2',
        measurement: 'Cups',
      },
      {
        name: 'Water',
        amount: '1.5',
        measurement: 'Cups',
      },
      {
        name: 'Yeast',
        amount: '1',
        measurement: 'tsp',
      },
      {
        name: 'Salt',
        amount: '1',
        measurement: 'tsp',
      },
    ],
  },
  {
    name: 'Bread',
    picture:
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2020-02/the-easiest-loaf-of-bread-youll-ever-bake.jpg?itok=j89yDeId',
    ingredients: [
      {
        name: 'Flour',
        amount: '2',
        measurement: 'Cups',
      },
      {
        name: 'Water',
        amount: '1.5',
        measurement: 'Cups',
      },
      {
        name: 'Yeast',
        amount: '1',
        measurement: 'tsp',
      },
      {
        name: 'Salt',
        amount: '1',
        measurement: 'tsp',
      },
    ],
  },
];

_createRecipes();

function _createRecipes() {
  let recipes = _loadRecipessFromStorage();
  if (!recipes || !recipes.length) {
    recipes = gRecipes;
  }
  _saveRecipesToStorage(recipes);
}

async function loadRecipes() {
  try {
    const recipes = await _loadRecipessFromStorage();
    return recipes;
  } catch (err) {
    console.log('Cannot get weather', err);
  }
}

function _saveRecipesToStorage(recipeData) {
  storageService.saveToStorage(STORAGE_KEY, recipeData);
}

function _loadRecipessFromStorage() {
  return storageService.loadFromStorage(STORAGE_KEY);
}
