const mysql = require('mysql');

// Koneksi untuk database 'mahasiswa2'
const connectionMahasiswa = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mahasiswa2',
});

// Koneksi untuk database 'dosen'
const connectionDosen = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dosen',
});

// Koneksi untuk database 'mahasiswa2'
connectionMahasiswa.connect((err) => {
    if (err) {
        console.error('Error connecting to mahasiswa2 database:', err);
    } else {
        console.log('Connected to mahasiswa2 database');
    }
});

// Koneksi untuk database 'dosen'
connectionDosen.connect((err) => {
    if (err) {
        console.error('Error connecting to dosen database:', err);
    } else {
        console.log('Connected to dosen database');
    }
});

module.exports = {
    connectionMahasiswa,
    connectionDosen,
};
