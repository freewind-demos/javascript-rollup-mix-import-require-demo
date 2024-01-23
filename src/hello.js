const {capitalize} = require('lodash')

export default function (name) {
    return 'Hello, ' + capitalize(name) + '!'
}