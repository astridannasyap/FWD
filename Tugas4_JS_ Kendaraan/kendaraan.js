// membuat interface input menggunakan readline

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// class pelanggan
class Pelanggan{
    constructor(nama, telp){
        this.nama = nama
        this.telp = telp
        this.kendaraan = null
    }

    sewa(kendaraan){
        this.kendaraan = kendaraan
    }
}

// array u/ simpan data pelanggan
let dataPelanggan = []

// data pelanggan awal
dataPelanggan.push(new Pelanggan("Rani","08123456789","Mobil"))
dataPelanggan.push(new Pelanggan("Astrid","08234567890","Motor"))

// fungsi tambah pelanggan
function tambahPelanggan(){

    rl.question("Masukkan nama pelanggan: ", function(nama){

        rl.question("Masukkan nomor telp: ", function(telp){

            rl.question("Kendaraan yang disewa: ", function(kendaraan){

                let pBaru = new Pelanggan(nama,telp)
                pBaru.sewa(kendaraan)

                dataPelanggan.push(pBaru)

                console.log("\n====Data berhasil ditambahkan====\n")

                tampilkanData()
                rl.close()

            })
        })
    })
}

// tampilkan semua pelanggan
function tampilkanData(){

    console.log("\n====Daftar pelanggan penyewa kendaraan====\n")

    for(let i=0;i<dataPelanggan.length;i++){
        console.log("Nama :", dataPelanggan[i].nama)
        console.log("Telp :", dataPelanggan[i].telp)
        console.log("Kendaraan :", dataPelanggan[i].kendaraan)
        console.log("-------------------")
    }

}

// jalankan program
tambahPelanggan()