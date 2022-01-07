const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'lighthousebnb'
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};