const query = require('../lib/sqlPool')

const cocktailToIngredients = {
  associateIngredients: (cocktail, ingredients) => {
    query(`SELECT ingredient FROM ingredients JOIN`)
    for (let i = 0; i < ingredients.length; i++) {

    }
  }
}

const createTable = () => {
  query(`CREATE TABLE IF NOT EXISTS cocktailIngredients(
    cocktailId int NOT NULL,
    ingredientId int NOT NULL,
    measurement int DEFAULT 0,
    amount varchar(255) DEFAULT NULL,
    created datetime DEFAULT CURRENT_TIMESTAMP,
    modified datetime ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cocktailId) REFERENCES cocktails(cocktailId),
    FOREIGN KEY (ingredientId) REFERENCES ingredients(ingredientId)
  );`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
createTable()

module.exports = cocktailToIngredients