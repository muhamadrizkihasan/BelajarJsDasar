alert('Selamat Datang!');
var lagi = true;

while( lagi ) {
    var nama = prompt('Masukan Nama:');
    alert('Halo ' + nama);
    lagi = confirm('Coba Lagi?');
}
alert('Terima Kasih..')