import delay from './delay';

const recipes = [
  {}
];

const generateId = (recipe) => {
  return recipe.name.toLowerCase().replace(/\s/g, "-");
};

class recipesApi {
  static getAllRecipes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], recipes));
      }, delay);
    });
  }

  static saveRecipe(recipe) {
    recipe = Object.assign({}, recipe); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation

        if (recipe.id) {
          const existingIngredientIndex = recipes.findIndex(a => a.id === recipe.id);
          recipes.splice(existingIngredientIndex, 1, recipe);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new ingredients in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          recipe.id = generateId(recipe);
          recipes.push(recipe);
        }

        resolve(recipe);
      }, delay);
    });
  }
}

export default recipesApi;
