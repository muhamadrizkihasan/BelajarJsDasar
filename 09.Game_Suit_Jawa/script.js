var tanya = true;
while( tanya ) {
    // Menangkap Pilihan Player
    var p = prompt('Pilih : gajah, semut, orang');

    // Menangkap Pilihan Computer & Membangkitkan Bilangan Random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else{
        comp = 'semut';
    }

    var hasil = '';
    // Menentukan Rules
    if( p == comp ) {
        hasil = 'Seri!';
    } else if( p == 'gajah' ) {
        hasil = ( comp == 'orang ') ? 'Menang!' : 'Kalah!';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'Kalah!' : 'Menang!';
    } else if( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'Kalah!' : 'Menang!';
    } else {
        hasil = 'Memasukkan pilihan yang salah!!';
    }
    // Tampilkan Hasilnya
    alert('Kamu Memilih : ' + p + ' & Komputer Memilih : ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);
    tanya = confirm('Lagi?'); 
}
alert('Terimakasih Sudah Bermain.');