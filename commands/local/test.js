module.exports.command = 'test';
module.exports.desc = 'Run your projects tests';

module.exports.builder = function builder() {};

module.exports.handler = function handler() {
  require('jest').run();
};