// JavaScript Dasar - Bulan 1 Minggu 1 Hari 1 Data Type Primitive

// conlose.log() untuk mendapatkan output / hasil dari sebuah program
console.log("Halo dunia!");

// -- Variable is a container for storing data --
// Variable Declaration
// var => Not Recommended Hoisting Concept
// let => No Constant Variable
// const => Constant Variable

// Example :
// Syntax : declaration variableName = value;
// Example :
let nama = "Irfan Hafizh"; // Irfan Hafizh
let umur = 20; // 20
const jenisKelamin = "Laki-laki"; // Laki-laki

// Syntax : Declaration variableName (returnundefined) (for let only);
let status;

// -- Data Type Primitive --
// 1.Undefined => Type Data Primitive yang valuenya tidak terdefinisikan
// 2.Null => Type Data Primitive yang valuenya tidak ada

// 3.Boolean => Nilai Kebenaran (true/false)
// Example :
let isFourPrime = false; // false
let isTrue = 2 < 9; // true
// Operator Boolean I => &&(AND), ||(OR), !(NOT)
let isFalse = 2 < 9 && 9 > 2; // false

// 4.Number => Type Data Primitive yang valuenya berupa angka
// Example :
let angka = 10; // 10
// Operator Number => +, -, *, /, %, ++, --
let hasil = 10 * 2; // 20
// Modulo => % Sisa hasil bagi
let hasilBagi = 10 % 2; // 0
// Object Number (Math)
let random = Math.random(); // random number

// 5.String => Type Data Primitive yang valuenya berupa karakter
// Example :
let str = "Irfan"; // Irfan
let str2 = "Hafizh"; // Hafizh
let str3 = `Irfan Hafizh`; // Irfan Hafizh
// Length => Mengetahui jumlah karakter pada string
let length = str.length; // 5
// Indexing => Mengetahui index pada string
let index = str[4]; // a

// -- Reassign Variable --
// Reassign Variable => Mengganti nilai variabel
// Example :
let namaLengkap = "Irfan hafizh";
console.log(namaLengkap);
// Syntax : variableName = newValue;
namaLengkap = "Irfan Hafizh Pengangguran";
console.log(namaLengkap);

// -- Concatination --
// Concatination (+) => Menggabungkan 2 atau lebih string
// Example :
let num = 10 + 18; // 28
let str4 = "Irfan" + "Hafizh"; // IrfanHafizh
let nummStr = "Panjul" + 28; // Panjul28

// typeof => Mengetahui tipe data
console.log(typeof num); // number
console.log(typeof str4); // string
console.log(typeof nummStr); // string

// -- Template Literal --
// Example :
let myName = "Irfan Hafizh";
let myAge = 20;
let myAddress = "Bekut";
console.log(
  `Nama saya ${myName}, umur saya ${myAge} tahun, dan alamat saya di ${myAddress}`
);

// -- Operator Boolean II / Perbandingan --
// 2 sama dengan == => Dibandingkan dengan nilai saja
// 3 sama dengan === => Dibandingkan dengan nilai dan tipe data
// tidak sama dengan != => Dibandingkan dengan nilai saja
// tidak 2 sama dengan !== => Dibandingkan dengan nilai dan tipe data
// Example :
console.log(2 == "2"); // true
console.log(2 === "2"); // false
console.log(2 != "2"); // false
console.log(2 !== "2"); // true

// -- Operator Boolean III (truthy falsy) --
// 1.Truthy => Nilai yang benar
// 2.Falsy => Nilai yang salah
// -- Number:
// Truly => Semua bilangan kecuali 0
// Falsy => 0, dll
// -- String:
// Truly => Semua string kecuali string kosong
// Falsy => ""
// Example :
console.log(Boolean("Kawah Edukasi"));
// Boolean === !!
console.log(!!"Kawah Edukasi");

// Mengganti nilai truthy / falsy ( ! )
console.log(!"Kawah Edukasi");
