var studentFirst = {
  name: 'marco',
  hello: 'hello'    
};

studentFirst.sayMyName = function() {
  return this.name;
};

studentFirst.sayHello = function() {
  var that = this;
  var f = function() {
   return that.hello;
  };

  return f(); 
};

console.log(studentFirst.sayMyName());
console.log(studentFirst.sayHello());