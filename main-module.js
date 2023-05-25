const names = require('./1-module')

const sayHi = require('./2-module');

sayHi(names.middleName);
sayHi("abode3");
sayHi(names.name1);
