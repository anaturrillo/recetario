import delay from './delay';

const ingredients = [
  {
    id: 'zanahoria',
    name: 'Zanahoria',
    units: 'gramos',
    byAmount: 100,
    calories: 41,
    carbs:9.6,
    proteins: 0.9,
    fats: 0.2
  },
  {
    id: 'lomo-de-cerdo',
    name: 'Lomo de cerdo',
    units: 'gramos',
    byAmount: 100,
    calories: 242,
    carbs: 0,
    proteins: 27,
    fats: 14
  }
];

const generateId = (ingredient) => {
  return ingredient.name.toLowerCase().replace(/\s/g, "-");
};

class IngredientApi {
  static getAllIngredients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], ingredients));
      }, delay);
    });
  }

  static saveIngredient(ingredient) {
    ingredient = Object.assign({}, ingredient); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation

        if (ingredient.id) {
          const existingIngredientIndex = ingredients.findIndex(a => a.id === ingredient.id);
          ingredients.splice(existingIngredientIndex, 1, ingredient);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new ingredients in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          ingredient.id = generateId(ingredient);
          ingredients.push(ingredient);
        }

        resolve(ingredient);
      }, delay);
    });
  }

  static deleteIngredient(ingredientId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfIngredientToDelete = ingredients.findIndex(ingredient => {
          ingredient.id == ingredientId;
        });
        ingredients.splice(indexOfIngredientToDelete, 1);
        resolve(ingredientId);
      }, delay);
    });
  }
}

export default IngredientApi;
