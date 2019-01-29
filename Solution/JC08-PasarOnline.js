// V1.0
// var menu,
//     produk  = ["Ayam", "Ikan", "Sapi"],
//     harga   = [25000, 50000, 75000,],
//     jumlah  = [0, 0, 0],
//     total   = [0, 0, 0],
//     totalBelanja, uang, kembali

// do {
//     menu = parseInt(
//         prompt(
//         "Selamat datang di PasarOnline\n"+
//         "Daftar Menu : \n"+
//         "1. Ayam @ Rp.25.000\n2. Ikan @ Rp. 50.000\n3. Sapi @ 75.000"
//     ))
    
//     jumlah[menu] = parseInt(prompt("Masukkan jumlah " + produk[menu]))
    
//     var check = confirm("Ingin menambahkan belanjaan ?")
    
// } while (check);


// total[1] = harga[1]*jumlah[1]
// total[2] = harga[2]*jumlah[2]
// total[3] = harga[3]*jumlah[3]

// totalBelanja = total[3] + total[1] + total[2]

// do {
//     var check = false
//     uang = parseInt(
//         prompt(
//             "Total Belanja\n"+
//             "Ayam\n" + harga[1] + " x " + jumlah[1] + " = Rp. " + total[1] +
//             "\nIkan\n" + harga[2] + " x " + jumlah[2] + " = Rp. " + total[2] +
//             "\nSapi\n" + harga[3] + " x " + jumlah[3] + " = Rp. " + total[3] +
//             "\n\nTotal Yang harus anda bayar adalah : Rp. " + totalBelanja +
//             "\n\nMasukkan jumlah uang Anda :"
//         )
//     )
    
    
//     if (uang < totalBelanja){
//         var kurang = totalBelanja - uang
//         check = true
//         alert(
//             "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
//             "\nTotal Belanja Anda : Rp. " + totalBelanja +
//             "\nUang yang anda masukkan : Rp, " + uang
//         )
//     } else {
//         kembali = uang - totalBelanja
//     }
// } while (check);

// console.log(
//     "Data Belanja" +
//     "\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
//     "\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
//     "\n  " + produk[3] + " x " + jumlah[3] + " = Rp." + total[3] +
//     "\n\n  Total belanja  Rp." + totalBelanja +
//     "\n  Jumlah uang Rp." + uang +
//     "\n  Kembali Rp. " + kembali +
//     "\n  Terimakasih"

// );


// V1.1
// var menu,
//     produk  = ["Ayam", "Ikan", "Sapi"],
//     harga   = [25000, 50000, 75000,],
//     jumlah  = [0, 0, 0],
//     total   = [0, 0, 0],
//     totalBelanja, uang, uangKurang, kembali

// do {
//     do {
//         var check2 = false
//         menu = parseInt(
//             prompt(
//             "Selamat datang di PasarOnline\n"+
//             "Daftar Menu : \n"+
//             "1. Ayam @ Rp.25.000\n2. Ikan @ Rp. 50.000\n3. Sapi @ 75.000"
//         )) - 1
//         if(!Number.isInteger(menu)){
//             alert("Mohon input sebuah angka")
//             check2 = true
//         } else if(menu < 0 || menu > 2){
//             alert("Pilihan hanya ada 1 - 3, Mohon input dengan benar")
//             check2 = true;
//         }
//     } while (check2);
    
//     do {
//         var check3 = false;
//         jumlah[menu] = Math.abs(parseInt(prompt("Masukkan jumlah " + produk[menu])))
//         if (!Number.isInteger(jumlah[menu])) {
//             alert("Mohon masukkah jumlah dengan angka")
//             check3 = true
//         }
//     } while (check3);
    
    
//     var check = confirm("Ingin menambahkan belanjaan ?")
    
// } while (check);


// total[0] = harga[0]*jumlah[0]
// total[1] = harga[1]*jumlah[1]
// total[2] = harga[2]*jumlah[2]

// totalBelanja = total[0] + total[1] + total[2]


// mshKurang = false
// do {
//     var check5 = false
//     uang = Math.abs(
//         parseInt(
//             prompt(
//                 "Total Belanja\n" +
//                 "Ayam\n" + harga[0] + " x " + jumlah[0] + " = Rp. " + total[0] +
//                 "\nIkan\n" + harga[1] + " x " + jumlah[1] + " = Rp. " + total[1] +
//                 "\nSapi\n" + harga[2] + " x " + jumlah[2] + " = Rp. " + total[2] +
//                 "\n\nTotal Yang harus anda bayar adalah : Rp. " + totalBelanja +
//                 "\n\nMasukkan jumlah uang Anda :"
//             )
//         )
//     )
//     if (!Number.isInteger(uang)) {
//         alert("Masukkan jumlah uang dalam format angka")
//         check5 = true
//     }
// } while (check5);

// if (uang < totalBelanja) {
//     var kurang = totalBelanja - uang
//     mshKurang = true
//     alert(
//         "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
//         "\nTotal Belanja Anda : Rp. " + totalBelanja +
//         "\nUang yang anda masukkan : Rp, " + uang
//     )

//     while (mshKurang) {
//         do {
//             var check4 = false
//             uangKurang = Math.abs(parseInt(prompt("Masukkan sisa pembayaran Rp." + kurang)))
//             if (!Number.isInteger(uangKurang)) {
//                 alert("Mohon masukkan uang dalam format angka")
//                 check4 = true
//             }
//         } while (check4);
//         if (uangKurang < kurang) {
//             alert("Jumlah pembayaran masih kurang")
//         } else {
//             uang += uangKurang
//             kembali = uang - totalBelanja
//             mshKurang = false;
//         }
//     }
// } else {
//     kembali = uang - totalBelanja
// }


// console.log(
//     "Data Belanja" +
//     "\n  " + produk[0] + " x " + jumlah[0] + " = Rp." + total[0] +
//     "\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
//     "\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
//     "\n\n  Total belanja  Rp." + totalBelanja +
//     "\n  Jumlah uang Rp." + uang +
//     "\n  Kembali Rp. " + kembali +
//     "\n  Terimakasih"
// );


// V1.2
var listMenu = (prdk, hrg) => {
    var list = 'Selamat datang di PasarOnline\nDaftar Menu:\n'
    for(let i = 0; i < prdk.length; i++){
        list += `${i+1}. ${prdk[i]} @ Rp.${hrg[i]}\n`
    }

    return list
}

var listTotal = () => {
    var strListTotal = "Total Belanja"
    for(let i = 0; i < jumlah.length; i++){
        if(jumlah[i] != null){
            strListTotal += `\n${produk[i]}\n ${harga[i]} x ${jumlah[i]} = Rp. ${total[i]}`
        }
    }

    strListTotal += `
    \n\nTotal Yang harus anda bayar adalah : Rp. ${totalBelanja}
    \n\nMasukkan jumlah uang Anda :
    `

    return strListTotal
}

var hitungTotal = (hrg, jmlh) => {
    for(let i = 0; i < jmlh.length; i++){
        if(jmlh[i] != null){
            total[i] = hrg[i] * jmlh[i]
            totalBelanja += total[i]
        }
        
    }
}

var dataBelanja = () => {
    var strDataBelanja = `Data Belanja`
    for(let i = 0; i < jumlah.length;i++){
        if(jumlah[i] != null){
            strDataBelanja += `\n  ${produk[i]} x ${jumlah[i]} = Rp. ${total[i]}`
        }
    }
    strDataBelanja += 
    `

  Total belanja Rp.${totalBelanja}
  Jumlah uang Rp.${uang}
  Kembali Rp.${kembali}
      
  Terimakasih
    `

    return strDataBelanja
}


var menu,
    produk  = ["Ayam", "Ikan", "Sapi", "Kuda"],
    harga   = [25000, 50000, 75000, 100000],
    jumlah  = [],
    total   = [],
    totalBelanja = 0,
    uang, uangKurang, kembali

do {
    do {
        var check2 = false
        menu = parseInt(
            prompt(
            listMenu(produk, harga)
        )) - 1
        if(!Number.isInteger(menu)){
            alert("Mohon input sebuah angka")
            check2 = true
        } else if(menu < 0 || menu > (produk.length-1)){
            alert(`Pilihan hanya ada 1 - ${produk.length}, Mohon input dengan benar`)
            check2 = true;
        }
    } while (check2);
    
    do {
        var check3 = false;
        if(jumlah[menu] == undefined){
            jumlah[menu] = 0
        }
        jumlah[menu] += Math.abs(parseInt(prompt("Masukkan jumlah " + produk[menu])))
        if (!Number.isInteger(jumlah[menu])) {
            alert("Mohon masukkah jumlah dengan angka")
            check3 = true
        }
    } while (check3);
    
    
    var check = confirm("Ingin menambahkan belanjaan ?")
    
} while (check);


hitungTotal(harga, jumlah)

mshKurang = false
do {
    var check5 = false
    uang = Math.abs(
        parseInt(
            prompt(
                listTotal()
            )
        )
    )
    if (!Number.isInteger(uang)) {
        alert("Masukkan jumlah uang dalam format angka")
        check5 = true
    }
} while (check5);

if (uang < totalBelanja) {
    var kurang = totalBelanja - uang
    mshKurang = true
    alert(
        "Jumlah uang yang Anda masukkan kurang Rp. " + kurang +
        "\nTotal Belanja Anda : Rp. " + totalBelanja +
        "\nUang yang anda masukkan : Rp. " + uang
    )

    while (mshKurang) {
        do {
            var check4 = false
            uangKurang = Math.abs(parseInt(prompt("Masukkan sisa pembayaran Rp." + kurang)))
            if (!Number.isInteger(uangKurang)) {
                alert("Mohon masukkan uang dalam format angka")
                check4 = true
            }
        } while (check4);
        if (uangKurang < kurang) {
            alert("Jumlah pembayaran masih kurang")
        } else {
            uang += uangKurang
            kembali = uang - totalBelanja
            mshKurang = false;
        }
    }
} else {
    kembali = uang - totalBelanja
}

console.log(
    dataBelanja()
);





