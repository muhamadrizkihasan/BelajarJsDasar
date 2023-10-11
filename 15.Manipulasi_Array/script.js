// A. Manipulasi Array

// 1. Menambah isi array
// var arr = [];
// arr[0] = "Rizki";
// arr[1] = "Hasan";
// arr[2] = "Asep";
// arr[5] = "Ujang";

// console.log(arr);

// 2. Menghapus Isi Array
// var arr = ["Shandika", "Galih", "Nofa"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan Isi Array
// var arr = ["Shandika", "Galih", "Nofa"];

// for( var i = 0; i < arr.length; i++ ) {
//     console.log('Mahasiswa ke-' + (i+1) + ' ' + arr[1]);
// }

// B.Method Pada Array
// 1. join
var arr = ['Asep', 'Ujang', 'Udin', 'Supri'];
console.log(arr.join(' - ')); // Berfungsi untuk mengubah array menjadi string & parameter-nya untuk mengganti koma.

// 2. push & pop
// arr.push('Doddy', 'Fitri'); = Berfungsi untuk menambah array di akhir.
// arr.pop();
// arr.pop(); = Berfungsi untuk menghapus array akhir.

// 3. unshift & shift
// arr.unshift('Asep'); = Berfungsi untuk menambah array di awal.
// arr.shift(); = Berfungsi untuk menghapus array awal.
// console.log(arr.join(' - '));

var arr = ['RizkiHasan', 'Dan', 'AsepUjang'];
// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(3, 0, 'Adalah', 'Pasangan');
console.log(arr.join(' - '));

// 5. spliceslice(awal, akhir);
// var arr = ['Shandika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];
// var arr2 = arr.slice(1,4);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6.forEach
// var angka = [1,2,3,4,5,6,7,8,9];
// var nama = ['Hasan', 'Asep', 'Ujang'];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e, i) {
//     console.log(e);
// });
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })

// 7. map
// var angka = [1,5,3,2,4,9,8,10,6,7];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8.sort = Untuk mengurutkan menjadi rapi.
// var angka = [1,5,3,2,4,9,8,10,6,7];
// angka.sort(function(a, b){
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & find = Untuk mencari
// var angka = [1,5,3,2,4,9,8,10,6,7];
// var angka2 = angka.find(function(x){
//     return x > 5;
// });
// console.log(angka2);