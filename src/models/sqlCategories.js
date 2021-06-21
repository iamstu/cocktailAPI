const query = require('../lib/sqlPool')

const categoryTransfer = {
  insertCategory: (ingredientData) => {
    // insert recipe
  }
}

const createTable = () => {
  query(`CREATE TABLE IF NOT EXISTS categories(
    categoryId int NOT NULL AUTO_INCREMENT,
    categoryName varchar(255) Not Null,
    created datetime DEFAULT CURRENT_TIMESTAMP,
    modified datetime ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (categoryId)
  );`, (err) => {
    if (err) {
      console.log(err)
    }
  })
}
createTable()

module.exports= categoryTransfer