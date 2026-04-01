import { index, store, destroy } from "./controller.js";

const main = () => {
    // tambah dua data baru
    store({nama: "Rizky Pratama", umur: 30, alamat: "Jakarta", email: "rizky.pratama@gmail.com" });
    store({nama: "Siti Rahmawati", umur: 31, alamat: "Bandung", email: "siti.rahmawati@gmail.com"});

    // tambah data dari form
    document.getElementById("formUser").addEventListener("submit", (e) => {
        e.preventDefault();

        const user = {
            nama: document.getElementById("nama").value,
            umur: document.getElementById("umur").value,
            alamat: document.getElementById("alamat").value,
            email: document.getElementById("email").value
        };

        store(user);
        index();
        e.target.reset();
    });

    // hapus data
    window.hapus = (i) => {
        destroy(i);
        index();
    };

    // tombol tampil data
    window.tampilData = () => {
        index();
    };
};

main();