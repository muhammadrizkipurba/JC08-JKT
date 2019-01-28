// // // // // // //
//  Solve it #1
// // // // // // //

// var x = 4,
//   y = 3,
//   z = 2;

// var w = Math.pow((x + y * z) / (x * y), z);

// console.log(w);

// // // // // // //
//  Solve it #2
// // // // // // //

// var angka = parseInt(prompt("Masukkan angka:"));
// var hasil = Math.pow(angka, 2);

// alert("Kuadrat dari " + angka + " = " + hasil);

// // // // // // //
// Solve it #3
// // // // // // //

// var hasil = Math.cbrt(27);
// console.log(hasil);

// // // // // // //
// Solve it #4
// // // // // // //

// 1 tahun 360 hari, 1 bulan 30 hari, 1 minggu 7 hari
// var input = parseInt(prompt("Masukkan jumlah hari: "));
// let hari

// // 398
// var tahun = Math.floor(input / 360);
// hari = (input % 360)
// var bulan = Math.floor(hari / 30);
// hari = (hari % 30)
// var minggu = Math.floor(hari / 7);
// hari = Math.floor(hari % 7);

// alert(input + " hari sama dengan:\n" +
//   tahun + " tahun\n" +
//   bulan + " bulan\n" +
//   minggu + " minggu\n" +
//   hari + " hari"
// );

// // // // // // //
// Solve it #5
// // // // // // //

// var totalumur = 49;
// var rasio = 0.4;

// var umurAskrng = parseInt((totalumur * rasio) / (rasio + 1));
// var umurBskrng = parseInt((totalumur / (rasio + 1)));

// console.log('Umur mereka sekarang : \nAndi: ' + umurAskrng + '\nBudi: ' + umurBskrng);

// var umurA = (umurAskrng += 2)
// var umurB = (umurBskrng += 2)

// console.log('Umur mereka 2 tahun lagi: \nAndi: ' + umurA + '\nBudi: ' + umurB);
// Solve it #6
// var today = new Date();
// var tomorrow = new Date();
// var yesterday = new Date();

// tomorrow.setDate(today.getDate() + 1);
// yesterday.setDate(today.getDate() - 1);

// tglKemarin = yesterday.getDate();
// blnKemarin = yesterday.getMonth();
// thnKemarin = yesterday.getFullYear();

// tglHariIni = today.getDate();
// blnHariIni = today.getMonth();
// thnHariIni = today.getFullYear();

// tglBesok = tomorrow.getDate();
// blnBesok = tomorrow.getMonth();
// thnBesok = tomorrow.getFullYear();

// console.log("Hari ini tanggal " + tglHariIni + "-" + blnHariIni + "-" + thnHariIni);
// console.log("Besok ini tanggal " + tglBesok + "-" + blnBesok + "-" + thnBesok);
// console.log("Kemarin ini tanggal " + tglKemarin + "-" + blnKemarin + "-" + thnKemarin);

// // // // // // //
// Solve it #7
// // // // // // //

// var teks = 'Abracadabra';
// var input = prompt('Ingin cari apa :) ?')

// cari = new RegExp(input, 'g')

// var found = teks.match(cari);

// console.log(found);

// // // // // // //
// Solve it #8
// // // // // // //

// var totaljarak = 120;
// var vel1 = 60;
// var vel2 = 40;
// var pukulberangkat = 9;

// var vel_total = vel1 + vel2;
// var time = (totaljarak / vel_total) * 60 //dalam menit

// console.log('Akann bertumbukan setelah ' + time + ' Menit');

// // // // // // //
// Solve it #9
// // // // // // //

// var rand = Math.floor(Math.random() * 100);

// document.write("<h1>" + rand + "</h1>"); "<h1>rand</h1>"

// // // // // // //
// Solve it IF SWITCH #10
// // // // // // //

// var num = parseInt(prompt('Masukkan angka'))
// var hasilModulus = num % 2

// if (hasilModulus == 0) {
//     console.log(num + ' adalah bilangan Genap');
// } else {
//     console.log(num + ' adalah bilangan Ganjil');
// }

// switch (true) {
//     case (hasilModulus == 0):
//         console.log(num + ' adalah bilangan Genap');
//         break
//     default:
//         console.log(num + ' adalah bilangan Ganjil');
// }

// // // // // // //
// Solve it #11
// // // // // // //

// var today = new Date();
// var month = today.getMonth();
// var listMonth = [
//   "Januari",
//   "Februari",
//   "Maret",
//   "April",
//   "Mei",
//   "Juni",
//   "Juli",
//   "Agustus",
//   "September",
//   "Oktober",
//   "November",
//   "Desember"
// ];

// if (month == 0) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 1) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 2) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 3) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 4) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 5) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 6) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 7) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 8) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 9) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else if (month == 10) {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// } else {
//   console.log("Saat ini bulan " + month + " : " + listMonth[month]);
// }

// // // // // // //
// Solve it #12
// // // // // // //

// var today = new Date();

// // // // // // //
// Solve it Custom
// // // // // // //

// var nama = prompt("Masukkan nama "),
//   bInd = parseInt(prompt("Nilai Bahasa Indonesia")),
//   bIng = parseInt(prompt("Nilai Bahasa Inggris")),
//   mtk = parseInt(prompt("Nilai Matematika")),
//   ipa = parseInt(prompt("Nilai Ilmu Pengetahuan Alama"));

// var nilaiAkhir = (bInd + bIng + mtk + ipa) / 4;
// // var indexNilai, lulus, greet;

// if (nilaiAkhir >= 85) {
//   indexNilai = "A";
//   lulus = true;
// }
// if (nilaiAkhir >= 76 && nilaiAkhir <= 84) {
//   indexNilai = "B";
//   lulus = true;
// }
// if (nilaiAkhir >= 66 && nilaiAkhir <= 75) {
//   indexNilai = "C";
//   lulus = true;
// }
// if (nilaiAkhir >= 50 && nilaiAkhir <= 65) {
//   indexNilai = "D";
//   lulus = false;
// } else {
//   indexNilai = "E";
//   lulus = false;
// }

// if (lulus) {
//   greet = "Selamat, Anda dinyatakan lulus.";
// } else {
//   greet = "Mohon maaf, Anda dinyatakan tidak lulus";
// }

// console.log(
//   "Nama : " + nama +
//   "\nDengan nilai akhir : " + nilaiAkhir +
//   "\nIndex Nilai : " + indexNilai +
//   "\n" + greet
// );

// var num = parseInt(prompt("Masukkan angka: "));

// one loop
// for (let i = 0; i < 4; i++) {
//   console.log("print ke " + i);
// }

// ****
// ***
// **
// *
// var z = "";

// for (var i = 0; i < 5; i++) {
//   // banyak baris

//   for (var j = 0; j < 5 - i; j++) {
//     // bintang
//     z += "*";
//   }

//   z += "\n";
// }

// console.log(z);

// *
// **
// ***
// var z = "";
// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < i; j++) {
//     z += "*";
//   }
//   z += "\n";
// }
// console.log(z);

// pyramid
// var z = "";
// for (var i = 0; i < num; i++) {
//   z = "";
//   for (var j = 0; j < num - i; j++) {
//     z += " ";
//   }
//   for (var k = 0; k <= i; k++) {
//     z += "* ";
//   }
//   console.log(z);
// }

// * \n
// **\n
// ***\n

// i = 0 1 2 3;

// var z = "";
// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < i + 1; j++) {
//     z += "*";
//   }
//   z += "\n";
// }
// console.log(z);

// function sayHello(teks) {
//   return teks; // output
// }
// var output = sayHello("Hello");

// console.log(output);

// function jumlah(num1, num2) {
//   var hasilJumlah = num1 + num2; // proses
//   console.log(hasilJumlah);

//   return hasilJumlah; //output
// }

// function kurang2(num1) {
//   var hasilKurang = num1 - 2;

//   return hasilKurang;
// }

// var outputJumlah = jumlah(2, 3);
// var outputKurang = kurang2(outputJumlah);

// console.log(outputKurang);

// function hitung(num1, num2) {
//   var jml = num1 + num2;
//   var kli = num1 * num2;

//   return [jml, kli];
// }

// var output = hitung(4, 3);

// console.log(output[0]);
// console.log(output[1]);

// Function Expression
// var jumlah = function(num1, num2) {
//   console.log(num1 + num2);
// };
// // Function Declaration
// function jumlah2(num1, num2) {
//   console.log(num1 + num2);
// }

// jumlah(2, 3);
// jumlah2(2, 3);

// function total(x, y) {
//   z = x + y;
//   return z;
// }

// console.log(total(4, 5));
// console.log(z);






