const query = require('../lib/sqlPool')
const sqlIngredients = require('./sqlIngredients')
const sqlCoctailIngredient = require('./sqlCoctailIngredient')
const sqlCategories = require('./sqlCategories')
const sqlCocktailCategory = require('./sqlCocktailCategory')

const cocktailTransfer = {
  insertCocktail: async (cocktailData) => {
    const cocktailId = await query({
      sql: `INSERT INTO cocktails (name, recipe) VALUES (?)`,
      values: [[cocktailData.name, cocktailData.recipe]]
    })
    const ingredientIds = await sqlIngredients.insertIngredients(cocktailData.ingredients)
    // sqlCoctailIngredient.associateIngredients(cocktailId, ingredientIds, cocktailData.ingredientMeasurements)
    // const categoryIds = sqlCategories.insertCategory(cocktailData.ingredients)
    // sqlCocktailCategory.associateCategorys(cocktailId, categoryIds)
  },
  getCocktailByName: (cocktailName) => {
    if (!cocktailName) {
      throw Error
    }
    return query({
      sql: `SELECT cocktailId, recipe FROM cocktails where name=?`,
      values: [cocktailName]
    })
  },
  getCocktailsLike: (cocktailName) => {
    if (!cocktailName) {
      throw Error
    }
    return query({
      sql: `SELECT cocktailId, recipe FROM cocktails where name LIKE "%?%"`,
      values: [cocktailName]
    })
  },
  getCocktailById: (cocktailId) => {
    if (!cocktailId) {
      throw Error
    }
    return query({
      sql: `SELECT name, recipe FROM cocktails where cocktailId=?`,
      values: [cocktailId]
    })
  },
  getCocktailByCategory: (cocktailCategory) => {
    if (!cocktailCategory) {
      throw Error
    }
    return query({
      sql: `SELECT cocktailId, recipe FROM cocktails where category=?`,
      values: [cocktailCategory]
    })
  },
  // updateCocktail: (cocktailCategory) => {
  //   if (!cocktailCategory) {
  //     throw Error
  //   }
  //   return query({
  //     sql: `SELECT cocktailId, category FROM cocktails where category=?`,
  //     values: [cocktailCategory]
  //   })
  // },
  deleteCocktail: (id) => {
    if (!id) {
      throw Error
    }
    return query({
      sql: `DELETE FROM cocktailId where cocktailId=?`,
      values: [id]
    })
  }
}

const createTable = () => {
  query(`CREATE TABLE IF NOT EXISTS cocktails(
    cocktailId int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    recipe varchar(5000) NOT NULL,
    created datetime DEFAULT CURRENT_TIMESTAMP,
    modified datetime ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (cocktailId)
  );`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
createTable()

module.exports = cocktailTransfer