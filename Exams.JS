// exam.js

function kelompokkanBilangan(bilangan) {
    if (bilangan % 2 === 0) { // Bilangan genap
        if (bilangan % 4 === 0) {
            return 'Bilangan genap dan bisa dibagi 4';
        } else {
            return 'Bilangan genap tetapi tidak bisa dibagi 4';
        }
    } else { // Bilangan ganjil
        return 'Bilangan ganjil';
    }
}

// Ekspor fungsi agar dapat digunakan di file lain
module.exports = kelompokkanBilangan;

