const development = {
  database: 'demo',
  username: 'root',
  password: 'root',
  host: 'localhost',
  port:3322,
  dialect: 'mysql',
};

const testing = {
  database: 'demo',
  username: 'root',
  password: 'sincap',
  host: 'localhost',
  port:3322,
  dialect: 'mysql',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port:3322,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};
