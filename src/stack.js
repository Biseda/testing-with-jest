// Var
const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

// Returnerar längden av stacken
exports.length = function () {
    return stack.length;
}


//exports.peek = function () {
    //return stack[0]; // Det här är medvetet felaktigt

    // return _.last(stack); // Det här är rätt

    //return stack[stack.length - 1];
//};