### ideone for node.js

#### How to use
```bash
npm install --save ideone-node
```

#### Usage
```javascript
const Ideone = require('ideone-node');
const ins = new Ideone('token','custom id');
const source = 'print("hello world");',input='';
ins.setMode(112);// 112 means javascript, other language support id can be seen in the ideone site.
ins.run(source,input).then(data => console.log(data.output))
ins.support().then(support => console.log(support)) // Get suppor language array
```
#### method

- setMode(id)  set the language where you need
- run(source,input) set the source code which you run and the input data,return a Promise
- support get the support languages, return a Promise
#### node
node > 8 because the package use async/await syntax


#### LICENSE
MIT