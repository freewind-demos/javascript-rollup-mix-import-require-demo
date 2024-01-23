import {capitalize} from 'lodash'

export default function (name) {
    return 'Hello, ' + capitalize(name) + '!'
}