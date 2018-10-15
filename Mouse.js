var chalk = require("chalk");
function Mouse(name) {
    this.name = name;
    this.dead = false;
}
Mouse.prototype.die = function() {
    this.dead = true;
}
Mouse.prototype.sayHi = function () {
    console.log("Hello",chalk.red(this.name));
}
module.exports = Mouse;