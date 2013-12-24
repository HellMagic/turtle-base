var path = require('path');
var staticPath = path.join(__dirname, 'public');

console.log('config...');
module.exports = {
    development: {
        staticPath : staticPath,
        db: 'mongodb://localhost/test'
    }
}