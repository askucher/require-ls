// Generated by LiveScript 1.4.0
(function(){
  var livescript, path, _eval, fs;
  livescript = require('livescript');
  path = require('path');
  _eval = require('eval');
  fs = require('fs');
  module.exports = function(file){
    var content, code;
    content = fs.readFileSync(path.resolve(process.cwd(), file), 'utf8');
    code = livescript.compile(content);
    return _eval(code);
  };
}).call(this);
