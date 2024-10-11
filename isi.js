//percabangan
function TotalKalori(menitLari=0, menitPushUp=0, menitPlank=0) {
    let totalKalori = 0;

    if (menitLari > 0) {
        const kaloriPer5Menit = 60;
        totalKalori += (menitLari / 5) * kaloriPer5Menit;
    }

    if (menitPushUp > 0) {
        const kaloriPer30Menit = 200;
        totalKalori += (menitPushUp / 30) * kaloriPer30Menit;
    }

    if (menitPlank > 0) {
        const kaloriPer1Menit = 5;
        totalKalori += menitPlank * kaloriPer1Menit;
    }

    return totalKalori;
}

console.log(`kalori lari: ${TotalKalori(10)}`)
console.log(`kalori PushUp: ${TotalKalori(0,6)}`)
console.log(`kalori Plank: ${TotalKalori(0, 0, 10)}`)
console.log(`Total kalori: ${TotalKalori(10, 6, 10)}`)

console.log('========================================')

/*PERULANGAN
    membalik kata/kalimat
*/
let kalimat = "ambatukan"
let hasil = ''
for (let i = kalimat.length-1; i >= 0; i--) {
    hasil += kalimat[i];
}
console.log("kalimat: " + kalimat )
console.log("kalimat sesudah di balik : " + hasil)

console.log("========================================")
//mengitung pangkat dari sebuah bilangan
function hitungPangkat(bilangan, pangkat) {
let total = 1;
for (let i = 0; i < pangkat; i++) {
   total*= bilangan;
}
 return total;
}
let bilangan = 5;
let pangkat = 2;
let hasilPangkat = hitungPangkat(bilangan, pangkat);
console.log(bilangan + " pangkat " + pangkat + " = " + hasilPangkat);

console.log("========================================")

//mengitung faktorial
function hitungFaktorial(angka) {
    let hasil = 1;
    for (let i = 1; i <= angka; i++) {
      hasil *= i;
    }
    return hasil;
  }
  
  let angka = 3;
  let hasilFaktorial = hitungFaktorial(angka);
  console.log("Faktorial dari " + angka + " adalah: " + hasilFaktorial);

  console.log("========================================")

  //mengapus spasi dari sebuah kalimat
  let kalimatspasi = "bapak pergi kepasar naik ambaruwo";
let kalimatBaru = '';

for (let i = 0; i < kalimatspasi.length; i++) {
  if (kalimatspasi[i] !== ' ') {
    kalimatBaru += kalimatspasi[i];
  } 
}
console.log("kalimat menggunakan spasi: " + kalimatspasi);
console.log("Kalimat tanpa spasi: " + kalimatBaru);

console.log("========================================")

//mengecek email valid atau tidak
let email = "cihuy13@gmail.com";
let valid = true;
let simbol = false;
let titik = false;

for (let i = 0; i < email.length; i++) {
  let karakter = email[i];

  
  if (karakter === '@') {
    if (simbol) {
     
      valid = false;
      break;
    }
    simbol = true;
  }


  if (simbol && karakter === '.') {
    titik = true;
  }
}

console.log("email: " + email)
if (!simbol || !titik) {
  valid = false;
}

if (valid) {
  console.log("Email valid");
} else {
  console.log("Email tidak valid");
}

console.log("========================================")

//palidrome
let kata = "kasur rusak";
let palindrome = true;

for (let i = 0; i < kata.length / 2; i++) {
  if (kata[i] !== kata[kata.length - 1 - i]) {
    palindrome = false;
    break;
  }
}

if (palindrome) {
  console.log(kata + " adalah palindrome");
} else {
  console.log(kata + " bukan palindrome");
}

console.log("========================================")

//mencari angka palidrom
function apakahPalindrome(angka) {
    let strAngka = angka.toString();
    let panjang = strAngka.length;
  
    for (let i = 0; i < panjang / 2; i++) {
      if (strAngka[i] !== strAngka[panjang - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  let inputAngka = 100;
  let angkaPalindrome = inputAngka + 1; 
  
  while (!apakahPalindrome(angkaPalindrome)) {
    angkaPalindrome++;
  }
  
  console.log("Angka palindrome terdekat dari " + inputAngka + " adalah: " + angkaPalindrome);

  console.log("========================================")

/*Array
Buatlah array yang digunakan untuk menyimpan nilai pemrograman JAVA yang terdiri dari nama dan nilai.
*/

let nilaiSiswa = [
    { nama: "rusdi", nilai: 85 },
    { nama: "fuad", nilai: 70 },
    { nama: "gojo", nilai: 92 },
    { nama: "speed", nilai: 65 },
    { nama: "ujang", nilai: 75 }
  ];
  //rata rata
  let totalNilai = 0;
  for (let i = 0; i < nilaiSiswa.length; i++) {
    totalNilai += nilaiSiswa[i].nilai;
  }
  let rataRata = totalNilai / nilaiSiswa.length;
  console.log("Nilai rata-rata siswa: " + rataRata);
  
  //lulus ujian
  let siswaLulus = [];
  for (let i = 0; i < nilaiSiswa.length; i++) {
    if (nilaiSiswa[i].nilai > 70) {
      siswaLulus.push(nilaiSiswa[i].nama);
    }
  }
  console.log("Siswa yang lulus ujian: " + siswaLulus.join(", "));
  
  //nilai terbesar
  let nilaiTerbesar = nilaiSiswa[0].nilai;
  let siswaTerbaik = nilaiSiswa[0].nama;
  
  for (let i = 1; i < nilaiSiswa.length; i++) {
    if (nilaiSiswa[i].nilai > nilaiTerbesar) {
      nilaiTerbesar = nilaiSiswa[i].nilai;
      siswaTerbaik = nilaiSiswa[i].nama;
    }
  }
  console.log("Siswa dengan nilai terbesar: " + siswaTerbaik + " dengan nilai " + nilaiTerbesar);

  console.log("========================================")

  // Array yang menyimpan nama mahasiswa
let namaMahasiswa = ["Acong", "Suki", "Armin", "sikalakumang", "Sule", "Alfian", "Alucard", "Ren"];

//Menampilkan nama mahasiswa yang diawali dengan huruf 'A'
let mahasiswaAwalanA = [];
for (let i = 0; i < namaMahasiswa.length; i++) {
  if (namaMahasiswa[i][0] === 'A') {
    mahasiswaAwalanA.push(namaMahasiswa[i]);
  }
}
console.log("Mahasiswa yang namanya diawali dengan huruf A: " + mahasiswaAwalanA.join(", "));

//Menampilkan nama mahasiswa yang paling panjang
let namaTerpanjang = namaMahasiswa[0];

for (let i = 1; i < namaMahasiswa.length; i++) {
  if (namaMahasiswa[i].length > namaTerpanjang.length) {
    namaTerpanjang = namaMahasiswa[i];
  }
}
console.log("Nama mahasiswa terpanjang: " + namaTerpanjang);

//Menampilkan nama mahasiswa yang paling pendek
let namaTerpendek = namaMahasiswa[0];

for (let i = 1; i < namaMahasiswa.length; i++) {
  if (namaMahasiswa[i].length < namaTerpendek.length) {
    namaTerpendek = namaMahasiswa[i];
  }
}
console.log("Nama mahasiswa terpendek: " + namaTerpendek);

console.log("========================================")
  
//Buatlah simulasi pengecekan posisi skak (check) antara RAJA dan BENTENG seperti gambar berikut ini:

function gambarpapan(PosisiRaja, PosisiBenteng) {
    const UkuranPapan = 5; 
    let papan = '';

    for (let baris = 0; baris < UkuranPapan; baris++) {
        for (let kolom = 0; kolom < UkuranPapan; kolom++) {
            
            if (baris === PosisiRaja[0] && kolom === PosisiRaja[1]) {
                papan += ' R ';
            } else if (baris === PosisiBenteng[0] && kolom === PosisiBenteng[1]) {
                papan += ' B '; 
            } else {
                papan += ' . '; 
            }
            if (kolom < UkuranPapan - 1) {
                papan += '|';
            }
        }
        papan += '\n';

        
        if (baris < UkuranPapan - 1) {
            papan += '---+---+---+---+---\n';
        }
    }

    console.log(papan);
}


let PosisiRaja = [1, 2]; 
let PosisiBenteng = [3, 2];


gambarpapan(PosisiRaja, PosisiBenteng);


function isKingInCheck(PosisiRaja, PosisiBenteng) {
    const [BarisRaja, KolomRaja] = PosisiRaja;
    const [BarisBenteng, KolomBenteng] = PosisiBenteng;

    return BarisRaja === BarisBenteng || KolomRaja === KolomBenteng; 
}


if (isKingInCheck(PosisiRaja, PosisiBenteng)) {
    console.log("Raja dalam keadaan skak oleh Benteng!");
} else {
    console.log("Raja tidak dalam keadaan skak.");
}



