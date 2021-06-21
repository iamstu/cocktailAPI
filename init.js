const db = require("mysql")

const pool = db.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306
})

pool.query("CREATE DATABASE IF NOT EXISTS cocktails_db", (err) => {
  if (err) {
    console.log(err)
    process.exit()
  }
  console.log("Database created, app ready for use")
  process.exit()
})