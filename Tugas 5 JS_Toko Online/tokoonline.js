// 1. Data Produk (Minimal 5)
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Tablet", harga: 7000000 },
    { id: 4, nama: "Mouse Wireless", harga: 250000 },
    { id: 5, nama: "Keyboard Mechanical", harga: 850000 },
    { id: 6, nama: "Motherboard", harga: 8500000 },
    { id: 7, nama: "Monitor", harga: 2500000 },
    { id: 8, nama: "Headphone BT", harga: 1500000 },
    { id: 9, nama: "Webcam", harga: 7500000 },
    { id: 10, nama: "ROM", harga: 5000000 },
];

// 2. Nama fungsi bebas (Event Handler)
const eventHandler = {
    handleShow: () => tampilkanProduk(),
    handleAdd: (id, nama, harga) => tambahProduk(id, nama, harga),
    handleDelete: (id) => hapusProduk(id)
};

// 3. Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    // Menyalin data lama dan menambah yang baru
    produkList = [...produkList, produkBaru];
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// 4. Menghapus Produk dengan Rest Parameter
// Menggunakan rest parameter (...ids)  supaya bisa menerima banyak ID sekaligus
function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
    console.log(`Produk dengan ID [${ids}] telah dihapus.`);
}

// 4. Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    console.log("--- Daftar Produk Saat Ini ---");
    produkList.forEach(({ nama, harga }) => {
        console.log(`Nama: ${nama} | Harga: Rp${harga.toLocaleString()}`);
    });
    
    console.log("------------------------------");
}

tampilkanProduk();

// Data 11. Tambah Produk Baru
tambahProduk(11, "Ipad", 150000000);
tampilkanProduk();

// Data 12. Tambah produk baru
tambahProduk(12, "Chromebook", 12000000);
tampilkanProduk();


// Hapus data produk id 5
hapusProduk(5);
tampilkanProduk();