function tampilAngka(a) {
    if( a === 0 ) return;
    return tampilAngka(a-1);
}

function faktorial(n) {
    if ( n === 0 ) return 1;
    return n * faktorial(n-1);
}

console.log(tampilAngka(10));
console.log(faktorial(5));