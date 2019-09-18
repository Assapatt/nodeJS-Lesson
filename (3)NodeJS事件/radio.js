const util = require("util");

function Parent(name) {
    this.name =name;
}
parent.prototype.show = function() {
    console.log(this.name);
}
function Child() {

}
util.inherits(Child, Parent);