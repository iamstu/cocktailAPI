const query = require('../lib/sqlPool')

const dedupeIngredients = (dupeIngredientNames, ingredientData) => {
  return ingredientData.filter((ingredient) => {
    return (dupeIngredientNames.indexOf(ingredient) === -1)
  })
}

const ingredientTransfer = {
  insertIngredients: async (ingredientData) => {
    let dupeIngredients = await query({
      sql: `SELECT ingredientId, ingredientName FROM ingredients WHERE ingredientName IN (?)`,
      values: ingredientData
    })
    const ingredientIds = []
    const dupeIngredientNames = []
    for (let i = 0; i < dupeIngredients.length; i++) {
      ingredientIds.push(dupeIngredients[i].ingredientId)
      dupeIngredientNames.push(dupeIngredients[i].ingredientName)
    }
    console.log(`ingredientIds: ${ingredientIds}`)
    console.log(`dupeIngredientNames: ${dupeIngredientNames}`)
    const dedupe = dedupeIngredients(dupeIngredientNames, ingredientData)
    console.log(`dedupe: ${dedupe}`)
    const test = await query({
      sql: `INSERT INTO ingredients (ingredientName) VALUES ?;
      SELECT ingredientId FROM ingredients WHERE ingredientName IN ?`,//"INSERT INTO Test (name, email, n) VALUES ?"
      values: [dedupe.map( (x) => [x]), [dedupe]]
    })
    console.log(test)
    // console.log(ingredientIds)
    return ingredientIds
  }
}

const createTable = () => {
  query(`CREATE TABLE IF NOT EXISTS ingredients(
    ingredientId int NOT NULL AUTO_INCREMENT,
    ingredientName varchar(25) NOT NULL,
    created datetime DEFAULT CURRENT_TIMESTAMP,
    modified datetime ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (ingredientId)
  );`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
createTable()

module.exports = ingredientTransfer 