//constructor
var Student = function () {
	this.x = 5;
};

Student.talk = function() {
	return this.x;
};

var studentInstance = new Student();