require('dotenv').config()
require('./api/services/startMongoose')

const server = require('./api/server');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`** server live on port ${PORT} **`);
});