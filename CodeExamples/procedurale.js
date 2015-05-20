var nome = "foo",
    cognome = "bar",
    student = [nome, cognome],
    classroom = [];

classroom.push(student);
var studentUnderPopper = classroom.pop(); 

var x;
for(x in studentUnderPopper) {
  console.log(studentUnderPopper[x]);
}