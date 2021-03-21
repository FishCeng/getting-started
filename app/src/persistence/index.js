if (process.env.MYSQL_HOST) module.exports = require('./mysql');
else if (process.env.PG_HOST) module.exports = require('./pg');
else module.exports = require('./sqlite');

