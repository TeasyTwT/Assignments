const add = function(num1 , num2){
    return parseInt(num1) + parseInt(num2);
}
const sub = function(num1 , num2){
    return parseInt(num1) - parseInt(num2);
}
const mul = function(num1 , num2){
    return parseInt(num1) * parseInt(num2);
}
const div = function(num1 , num2){
    return parseInt(num1) / parseInt(num2);
}



module.exports = {add, sub, mul, div};