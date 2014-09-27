ndarray-trace
=============
Computes the trace of an ndarray (the sum of all diagonal entries of the array).

# Example

```javascript
var pack  = require('ndarray-pack')
var trace = require('ndarray-trace')

var M = pack([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])

console.log(trace(M))
```

Output:

```
15
```

# Install

```
npm install ndarray-trace
```

# API

### `require('ndarray-trace')(M)`
Computes the sum of all diagonal entries in the ndarray `M`

* `M` is an ndarray

**Returns** The sum of all diagonal entries

# Credits
(c) 2014 Mikola Lysenko. MIT License