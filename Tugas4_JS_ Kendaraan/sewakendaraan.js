// class pelanggan untuk data penyewa
class Pelanggan {
    constructor(nama, telp, kendaraan){
        this.nama = nama
        this.telp = telp
        this.kendaraan = kendaraan
    }

    infoSewa(){
        return this.nama + " menyewa " + this.kendaraan
    }
}

// array buat nyimpen data pelanggan
let dataPelanggan = []

// memasukan dan menampilkan data pelanggan
dataPelanggan.push(new Pelanggan("Rani","08123456789","Mobil"))
dataPelanggan.push(new Pelanggan("Astrid","08234567890","Motor"))
dataPelanggan.push(new Pelanggan("Azka","08345678901","Bus"))
dataPelanggan.push(new Pelanggan("Raqi","08345678902","Truk"))
dataPelanggan.push(new Pelanggan("Ghaisan","08345678903","Sepeda"))
dataPelanggan.push(new Pelanggan("Benedict","08345678904","Motor"))
dataPelanggan.push(new Pelanggan("Shopie","08345678905","Mobil"))

// Menampilkan daftar pelanggan yang menyewa kendaraan
console.log("Daftar pelanggan yang menyewa kendaraan")
console.log("--------------------------------------")

for(let i = 0; i < dataPelanggan.length; i++){
    console.log("Nama : " + dataPelanggan[i].nama)
    console.log("No Telp : " + dataPelanggan[i].telp)
    console.log("Kendaraan : " + dataPelanggan[i].kendaraan)
    console.log("------------------")
}