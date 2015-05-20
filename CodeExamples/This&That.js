var student = {};
student.name = 'bob';
student.talk = function() { 
  return this.name; 
};

console.log(student.talk());