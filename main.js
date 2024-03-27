// Qno 73
function updateVariable() {
    var number = 15;
    console.log("initial value", number);
    number = 20;
    console.log("updated value", number);
}
updateVariable();
//  Q no 74
function swapValues() {
    var a = 5, b = 10;
    console.log("Before swap:a", a, "b=", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap a:", a, "b=", b);
}
swapValues();
//  Q no 75
function useCompoundOperators() {
    var x = 10;
    console.log("initial value x:", x);
    x += 3;
    console.log("After addition X:", x);
    x -= 1;
    console.log("After subtraction x:", x);
    x *= 3;
    console.log("After multiploication x:", x);
    x /= 2;
    console.log("After division x:", x);
}
useCompoundOperators();
