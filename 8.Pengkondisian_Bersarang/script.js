var s = '';
// 1 bintang diatas
for( var i = 0; i < 5; i++ ) {
    for( var j = 0; j <= i; j++ ) {
        s += '*';
    }
    s += '\n';
}
console.log(s);

// 1 bintang dibawah
for( var i = 5; i > 0; i-- ) {
    for( var j = 0; j < i; j++ ) {
        s += '*';
    }
    s += '\n';
}
console.log(s);