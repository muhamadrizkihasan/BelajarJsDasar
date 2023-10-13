// Membuat Object
// Object Literal

var mhs1 = {
    nama : 'Rizki Hasan',
    nis : '12209191',
    jurusan : 'PPLG',
    Rayon : 'Cicurug'
}

var mhs2 = {
    nama : 'Udin',
    nis : '12209190',
    jurusan : 'HTL',
    Rayon : 'Sukasari'
}

// Function Declaration
function buatObjectMahasiswa(nama, nis, jurusan, rayon) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nis = nis;
    mhs.jurusan = jurusan;
    mhs.rayon = rayon;
    return mhs;
}
var mhs3 = buatObjectMahasiswa('Syaukillah', '12209192', 'HTL', 'Sukasari');

// Constructor
function Mahasiswa(nama, nis, jurusan, rayon) {
    // var this = {};
    this.nama = nama;
    this.nis = nis;
    this.jurusan = jurusan;
    this.rayon = rayon;
    // return this;
}

var mhs4 = new Mahasiswa('Oneng', '12209193', 'HTL', 'Sukasari');