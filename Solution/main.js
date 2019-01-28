//  Solve it #1

// var x = 4,
//   y = 3,
//   z = 2;

// var w = Math.pow((x + y * z) / (x * y), z);

// console.log(w);

//  Solve it #2
// var angka = parseInt(prompt("Masukkan angka:"));
// var hasil = Math.pow(angka, 2);

// alert("Kuadrat dari " + angka + " = " + hasil);

// Solve it #3
// var hasil = Math.cbrt(27);
// console.log(hasil);

// Solve it #4
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

// Solve it #5
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

// Solve it #7
// var teks = 'Abracadabra';
// var input = prompt('Ingin cari apa :) ?')

// cari = new RegExp(input, 'g')

// var found = teks.match(cari);

// console.log(found);

// Solve it #8

// var totaljarak = 120;
// var vel1 = 60;
// var vel2 = 40;
// var pukulberangkat = 9;

// var vel_total = vel1 + vel2;
// var time = (totaljarak / vel_total) * 60 //dalam menit


// console.log('Akann bertumbukan setelah ' + time + ' Menit');

// Solve it #9
// var rand = Math.floor(Math.random() * 100);

// document.write("<h1>" + rand + "</h1>"); "<h1>rand</h1>"
