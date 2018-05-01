### ideone for node.js
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/ideone-node.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ideone-node
[travis-image]: https://img.shields.io/travis/flytam/ideone-node.svg?style=flat-square
[travis-url]: https://travis-ci.org/flytam/ideone-node
[coveralls-image]: https://img.shields.io/coveralls/flytam/ideone-node.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/flytam/ideone-node?branch=master
[david-image]: https://img.shields.io/david/flytam/ideone-node.svg?style=flat-square
[david-url]: https://david-dm.org/flytam/ideone-node
[node-image]: https://img.shields.io/badge/node.js-%3E=_8.0.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/ideone-node.svg?style=flat-square
[download-url]: https://npmjs.org/package/ideone-node
[license-image]: https://img.shields.io/npm/l/ideone-node.svg
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

#### Update

v0.0.3 add Tese,License and fix a bug

#### run test

Set your token and customId in the root's config.js.For example:
```javascript
//config.js
const config = {
    custimId:'xxx',
    accessToken:'xxxxxx'   
}

module.exports = config;
```
then,
```
npm run test
```
#### LICENSE
MIT