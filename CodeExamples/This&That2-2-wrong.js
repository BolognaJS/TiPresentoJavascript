var studentFirst = {
  name: 'marco',
  hello: 'hello'    
};

studentFirst.sayMyName = function() {
  return this.name;
};

studentFirst.sayHello = function() {
  var f = function() {
    return this.hello;
  };

  return f(); 
};

console.log(studentFirst.sayMyName());
console.log(studentFirst.sayHello());