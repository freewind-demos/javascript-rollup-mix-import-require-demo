编译出来的`bundle.js`
----------------

```
'use strict';

var lodash = require('lodash');

function hello (name) {
    return 'Hello, ' + lodash.capitalize(name) + '!'
}

hello('rollup');
```