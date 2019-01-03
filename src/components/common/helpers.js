export function lowerToHigher(by) {
  return function (first, second) {
    const a = first[by];
    const b = second[by];

    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  };
}

export const nonRecipeRecipe = {
  id: '',
  name: '',
  ingredients: [],
  instructions: []
};

export const calculateNutriValues_ = function (name) {
  return function (total, item) {
    const calc = item[name] * item.recipeAmount / item.byAmount;
    return total + calc;
  };
};

export const calculateValues = function (name) {
  return function (total, item) {
    const calc = item[name] * item.recipeAmount / item.byAmount;
    return total + calc;
  };
};

export const calculateNutriValues = ingredients => {
  const totalWeight = ingredients.reduce((total, ingredient) => {
      return total + parseInt(ingredient.recipeAmount);
  }, 0);

  const roundToTwoDecs = num => Math.round(num * 100) / 100;

  return ['calories', 'fats', 'carbs', 'proteins']
    .reduce(function (result, name) {
      const getNutrivalues = calculateValues(name);
      const nutrivalue = ingredients.reduce(getNutrivalues, 0) / totalWeight * 100;
      return Object.assign({}, result, {[name]: roundToTwoDecs(nutrivalue)});
    }, {});
};

export const addNutrinfo = ingredients => {
  return e =>  e.ingredientId &&
    Object.assign({}, ingredients.find(i => i.id === e.ingredientId), e);
};
