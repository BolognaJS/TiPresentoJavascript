var boolean = false;
obj = {}; //nuovo oggetto

obj.myMethod = function(param) {
  if(param) {
    obj = 3;
  }
  
  return obj;
};

console.log(obj.myMethod(false));
console.log('------------')
console.log(obj.myMethod(true));
console.log('------------')
console.log(obj.myMethod(false));