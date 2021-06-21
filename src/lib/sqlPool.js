const db = require('mysql')
const util = require('util');

const pool = db.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
})

const query = util.promisify(pool.query).bind(pool);

module.exports = query