var studentFirst = {
    name: 'marco'
};

studentFirst.sayMyName = function() {
  return this.name;
};

console.log(studentFirst.sayMyName());

var studentSecond = {
    name: 'bob'
};
studentSecond.talk = studentFirst.talk;

console.log(studentFirst.sayMyName());