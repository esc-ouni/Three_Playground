Promise based throttling

Usage:

```javascript
var Q = require("q");
var gasp = require("gasp");

//throttle the XHR to a call every 100ms
var gaspingXHR = gasp(function (url) {
    //make request (imagined api)
    return request.makeRequest(url)
}, 100)

var newUpdate;

//then make the calls
setInterval(function() {
    newUpdate = gaspingXHR("http://foo.com");
}, 1);

newUpdate.then(function (response) {
    // do something ...
})

```
