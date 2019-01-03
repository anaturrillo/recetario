import * as firebase from 'firebase';
import {authenticate, app} from './authenticate';

const generateId = (recipe) => {
  return recipe.name.toLowerCase().replace(/\s/g, "-");
};

class recipesApi {
  static getAllRecipes(){
    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return new Promise((resolve, reject) => app
          .database()
          .ref(userId + '/recipes')
          .on('value', data => resolve(data.val() || []), reject));
      });
  }

  static saveRecipe(recipe) {
    recipe = Object.assign({}, recipe); // to avoid manipulating object passed in.
    if (!recipe.id) recipe.id = generateId(recipe);

    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return app
          .database()
          .ref(userId + '/recipes/' + recipe.id)
          .set(recipe);
      })
      .then(_ => recipe);
  }

  static deleteRecipe(recipeId){
    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return app
          .database()
          .ref(userId + '/recipes/' + recipeId)
          .remove();
      });
  }
}

export default recipesApi;
