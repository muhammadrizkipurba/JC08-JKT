/*
Masukan nama
Masukan usia
Masukan level (1 - 7)
  jika selain ini, akan di beri notif -> diminta isi kembali
Masukan status (single/taken/complicated)
  jika complicated, akan diberi notif -> isi ulang kembali
  jika single, alert "You are very welcome"
  jika taken, alert "Kami tidak menanggung resikonya"


  (Gratis) 18 (50.000) 25 (100.000) 40 (Gratis)

console biaya, uang yang ada, uang kembali
*/


alert(
    "Selamat datang di happy family\nAnda akan menyerahkan data diri, untuk menjadi bagian dari kami"
  );
  
  var nama, umur, level, status;
  var biaya, uang, kembali;
  
  nama = prompt("Mohon masukkan nama Anda: ");
  // jika prompt tidak di isi maka akan terisi string kosong ""
  // console.log(typeof(""));
  // console.log("");
  // console.log(typeof(nama))
  // console.log(nama)
  umur = prompt("Mohon masukkan umur Anda: ");
  
  do {
    var check = true;
    level = parseInt(prompt("Mohon masukkan level Anda (1 - 7): "));
    console.log(level)
    if (level >= 1 && level <= 7) {
      check = false;
    } else {
      alert("Pilihan hanya ada untuk 1 - 7");
    }
  } while (check);
  
  do {
    var check = false;
    status = prompt(
      "Mohon masukkan status Anda (single/taken/complicated): "
    ).toLowerCase();
  
    if (status == "single") {
      alert("You're very welcome !");
    } else if (status == "taken") {
      alert("Kami tidak menanggung resikonya");
    } else {
      check = !check;
      alert("Maaf, tolong ubah status Anda");
    }
  } while (check);
  
 if (umur >= 18 && umur < 25) {
    biaya = 50000; // 22
  } else if (umur >= 25 && umur < 40) {
    biaya = 100000;
  } else {
    biaya = 0;
  }

  
  uang = parseInt(prompt("Masukkan jumlah uang : Rp. "));
  
  kembali = uang - biaya
  
  console.log(
    "Selamat bergabung ke WOTACLUB\n" +
    "Jumlah uang yang harus dibayarkan : Rp. " + biaya + '\n' +
    "Uang yang Anda masukkan adalah : Rp. " + uang + '\n' +
    "Maka Anda akan menerima kembali sejumlah : Rp. " + kembali + '\n' +
    "Enjoy !"
  );