// this
var a = 10;
console.log(window.a);

// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// this mengembalikan object Global

// cara 2 - object literal
var obj = {a : 10, nama : 'Udin'};
obj.halo = function() {
    console.log(this);
    console.log('halo');
}
obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor
function halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new halo();
var obj2 = new halo();
// this mengembalikan object yang baru dibuat