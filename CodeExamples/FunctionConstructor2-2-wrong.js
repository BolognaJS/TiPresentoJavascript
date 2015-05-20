//constructor
function Student() {	
    //private
    var watch = 'watch';
    var pencilcase = 'pencilcase';

    function nonVisible() {
	  return this.watch;
    }

    //public
    this.accessories = [watch,pencilcase];

    this.visibleFunction = nonVisible;
}

var studentInstance = new Student();

console.log(studentInstance.visibleFunction());