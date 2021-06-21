const query = require('../lib/sqlPool')

const cocktailToIngredients = {
  associateCategorys: (cocktail, ingredients) => {
    query(`SELECT ingredient FROM ingredients JOIN`)
    for (let i = 0; i < ingredients.length; i++) {

    }
  }
}

const createTable = () => {
  query(`CREATE TABLE IF NOT EXISTS cocktailCategory(
    cocktailId int NOT NULL,
    categoryId int NOT NULL,
    created datetime DEFAULT CURRENT_TIMESTAMP,
    modified datetime ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (cocktailId) REFERENCES cocktails(cocktailId),
    FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
  );`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
createTable()

module.exports = cocktailToIngredients