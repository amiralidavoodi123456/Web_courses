var a1 = 2
var a2 = 20
var a3 = 6
var a4 = 17
var a5 = 4
var a6 = 2
var a7 = 50
var a8 = 9
var a9 = 30
var a10 = 10

var max;
var min;

if (a1 > a2) {
    max = a1;
} else {
    max = a2;
}
if (a3 > max){
    max = a3;
} else {
    max = max;
}
if (a4 > max) {
    max = a4;
} else {
    max = max;
}
if (a5 > max) {
    max = a5;
} else {
    max = max;
}
if (a6 > max) {
    max = a6;
} else {
    max = max;
}
if (a7 > max) {
    max = a7;
} else {
    max = max;
}
if (a8 > max){
    max = a8;
} else {
    max = max;
}
if (a9 > max) {
    max = a9;
} else {
    max = max;
}
if (a10 > max) {
    max = a10;
} else {
    max = max;
}

var min;

if (a1 < a2) {
    min = a1;
} else {
    min = a2;
}
if (a3 < min) {
    min = a3;
} else {
    min = min;
}
if (a4 < min) {
    min = a4;
} else {
    min = min;
}
if (a5 < min) {
    min = a5;
} else {
    min = min
}
if (a6 < min) {
    min = a6;
} else {
    min = min;
}
if (a7 < min) {
    min = a7;
} else {
    min = min;
}
if (a8 < min){
    min = a8;
} else {
    min = min;
}
if (a9 < min) {
    min = a9;
} else {
    min = min;
}
if (a10 < min) {
    min = a10;
} else {
    min = min;
}

console.log(max);
console.log(min);

var m = ((a1+a2+a3+a4+a5+a6+a7+a8+a9+a10)) / 10;
console.log(m);

var i = (
    ((a1 - m) **2) +
    ((a2 - m) **2) +
    ((a3 - m) **2) +
    ((a4 - m) **2) +
    ((a5 - m) **2) +
    ((a6 - m) **2) +
    ((a7 - m) **2) +
    ((a8 - m) **2) +
    ((a9 - m) **2) +
    ((a10 - m) **2)
)

var v = i / 10;
console.log(v);
