//constructor
var Student = function () {
	this.x = 5;
};

Student.prototype.talk = function() {
	return this.x;
};

var studentInstance = new Student();