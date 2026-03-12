// 1. Array produkToko
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// 2. Fungsi untuk menambah produk baru
function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
    console.log(`✅ Produk "${nama}" berhasil ditambahkan.`);
}

// 3. Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    const indeksAwal = produkToko.length;
    // Memfilter array untuk menyimpan semua kecuali yang ID-nya cocok
    produkToko = produkToko.filter(produk => produk.id !== id);
    
    if (produkToko.length < indeksAwal) {
        console.log(`Produk dengan ID ${id} berhasil dihapus.`);
    } else {
        console.log(`Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// 4. Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("--- Daftar Produk Toko ---");
    if (produkToko.length === 0) {
        console.log("Stok kosong.");
    } else {
        produkToko.forEach(produk => {
            console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga.toLocaleString()} | Stok: ${produk.stok}`);
        });
    }
    console.log("--------------------------");
}


tampilkanProduk();
tambahProduk("PC", 1500000, 14);
tampilkanProduk();
hapusProduk(2); // Menghapus Mouse
tampilkanProduk();