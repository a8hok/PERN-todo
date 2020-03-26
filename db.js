const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'a8hok',
  password: 'password',
  host: 'localhost',
  port: '5432',
  database: 'perntodo',
});

module.exports = pool;
