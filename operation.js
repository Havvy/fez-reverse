const reverse = require('esrever').reverse;
const Promise = require('bluebird');

module.exports = function (options) {
    return function (inputs) {
        return Promise.all(inputs.map(function (input) { return input.asBuffer(); }).map(function (input) {
            return reverse(input.toString());
        }));
    };
};