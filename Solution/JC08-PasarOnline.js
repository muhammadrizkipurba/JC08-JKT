var menu,
    produk  = ["Ayam", "Ikan", "Sapi"],
    harga   = [25000, 50000, 75000,],
    jumlah  = [0, 0, 0],
    total   = [0, 0, 0],
    totalBelanja, uang, kembali

do {
    menu = parseInt(
        prompt(
        "Selamat datang di PasarOnline\n"+
        "Daftar Menu : \n"+
        "1. Ayam @ Rp.25.000\n2. Ikan @ Rp. 50.000\n3. Sapi @ 75.000"
    ))
    
    jumlah[menu] = parseInt(prompt("Masukkan jumlah " + produk[menu]))
    
    var check = confirm("Ingin menambahkan belanjaan ?")
    
} while (check);

// menu = 2

// // AYam 2 index = 0
// // Ikan 3 index = 1
// // Sapi 0 index = 2

// produk  = ["Ayam", "Ikan", "Sapi"]
// harga   = [25000, 50000, 75000],
// jumlah  = [3 ,2, 1],
// total   = [75000, 100000, 75000]

total[1] = harga[1]*jumlah[1]
total[2] = harga[2]*jumlah[2]
total[3] = harga[3]*jumlah[3]

totalBelanja = total[3] + total[1] + total[2]

do {
    var check = false
    uang = parseInt(
        prompt(
            "Total Belanja\n"+
            "Ayam\n" + harga[1] + " x " + jumlah[1] + " = Rp. " + total[1] +
            "\nIkan\n" + harga[2] + " x " + jumlah[2] + " = Rp. " + total[2] +
            "\nSapi\n" + harga[3] + " x " + jumlah[3] + " = Rp. " + total[3] +
            "\n\nTotal Yang harus anda bayar adalah : Rp. " + totalBelanja +
            "\n\nMasukkan jumlah uang Anda :"
        )
    )
    
    
    if (uang < totalBelanja){
        var kurang = totalBelanja - uang
        check = true
        alert(
            "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
            "\nTotal Belanja Anda : Rp. " + totalBelanja +
            "\nUang yang anda masukkan : Rp, " + uang
        )
    } else {
        kembali = uang - totalBelanja
    }
} while (check);

console.log(
    "Data Belanja" +
    "\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
    "\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
    "\n  " + produk[3] + " x " + jumlah[3] + " = Rp." + total[3] +
    "\n\n  Total belanja  Rp." + totalBelanja +
    "\n  Jumlah uang Rp." + uang +
    "\n  Kembali Rp. " + kembali +
    "\n  Terimakasih"

);







