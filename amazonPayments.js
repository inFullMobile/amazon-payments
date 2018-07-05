const { Config } = require('./lib/config');
const Amazon = require('./lib/amazon').amazon;
const Environment = require('./lib/environment');

function connect(opts) {
  return new Amazon(new Config(opts));
}

exports.connect = connect;
exports.Environment = Environment;
