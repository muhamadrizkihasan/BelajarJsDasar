var item = prompt(' Masukkan nama makanan / minuman : \n (contoh: nasi, daging, susu, hamburger, softdrink )');

switch( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('Makanan / minuman sehat!');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('Makanan / minuman tidak sehat!');
        break;
    default :
        alert('Anda memasukkan nama makanan / minuman yang salah!!');
        break;
}