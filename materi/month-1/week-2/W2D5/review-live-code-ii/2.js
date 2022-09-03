// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * Function [getPrize] menerima satu buah parameter [str].
 * Function ini bertujuan untuk mendapatkan hadiah berdasarkan poin yang didapat.
 *
 * Case:
 * 1. Jika parameter yang diterima bersifat falsy, maka mengembalikan [Error]
 * 2. Jika parameter yang diterima bukan bertipe string, maka mengembalikan [Error].
 * 3. Jika parameter yang diterima jumlah karakternya kurang dari 5, maka mengembalikan [Error].
 * 4. Jika parameter yang diterima jumlah karakternya lebih dari 20, maka mengembalikan [Error].
 * 5. Hitung poin dengan ketentuan sebagai berikut.
 *    * sebuah karakter berupa huruf vocal akan mendapatkan 20 poin.
 *    * sebuah karakter berupa huruf konsonan akan mendapatkan 5 poin.
 *    * sebuah karakter berupa angka akan mendapatkan 2 poin.
 *    * karakter lain yang di terima akan mengurangi 50 poin dan menghentikan proses perhitungan poin.
 * eg. MUKTIAG29
 *     5 + 20 + 5 + 5 + 20 + 20 + 2 + 2 = 79
 * eg. QWE,123
 *     5 + 5 + 20 -50 + 0 + 0 + 0 = -20
 *
 * Berikut adalah list hadiahnya.
 *    * Mobil: 150 poin
 *    * Motor: 50 poin
 *    * TV: 25 poin
 *    * Rice Cooker: 10 poin
 *    * Kipas: 5 poin
 *    * Pen: 1 poin
 * 6. List hadiah yang didapat dari poin tertinggi berupa string.
 *    eg. 200 poin => "Mobil, Motor"
 *    eg. 321 poin => "Mobil, Motor, TV, Rice Cooker, Kipas, Pen"
 *    eg. 16 poin => "Rice Cooker, Kipas, Pen"
 * 7. Jika tidak mendapatkan apa-apa maka kembalikan ["Zonk!"]
 */

function getPrize(str) {
  if (!str || typeof str !== "string" || str.length < 5 || str.length > 20) {
    console.log("Error");
  } else {
    let point = 0;
    let dicConsonant = "bcdfghjklmnpqrstvwxyz";
    let dicVocal = "aeiou";
    let dicNumber = "0123456789";
    let dicSymbol = "`~!@#$%^&*()-_=+[]{}|,.";

    for (let i = 0; i < str.length; i++) {
      // Flagging (Boolean) => menandai sebuah proses
      let isAccept = false;

      for (let j = 0; j < dicConsonant.length; j++) {
        if (str[i] === dicConsonant[j]) {
          point += 5;
          isAccept = true;
          break;
        }
      }
      for (let k = 0; k < dicVocal.length; k++) {
        if (str[i] === dicVocal[k]) {
          point += 20;
          isAccept = true;
          break;
        }
      }
      for (let l = 0; l < dicNumber.length; l++) {
        if (str[i] === dicNumber[l]) {
          point += 2;
          isAccept = true;
          break;
        }
      }
      for (let m = 0; m < dicSymbol.length; m++) {
        if (str[i] === dicSymbol[m]) {
          point -= 50;
          isAccept = false;
          break;
        }
      }
      if (str[i] === " ") {
        point -= 50;
        isAccept = false;
        break;
      }

      if (isAccept === false) {
        break;
      }
    }

    let prize = "";
    if (point >= 150) {
      point -= 150;
      prize += "Mobil,";
    }
    if (point >= 50) {
      point -= 50;
      prize += "Motor,";
    }
    if (point >= 25) {
      point -= 25;
      prize += "TV,";
    }
    if (point >= 10) {
      point -= 10;
      prize += "Rice Cooker,";
    }
    if (point >= 5) {
      point -= 5;
      prize += "Kipas,";
    }
    if (point >= 1) {
      point -= 1;
      prize += "Pen";
    }

    return `Anda mendapatkan ${prize.substring(0, prize.length - 1)}.`;
  }
}

console.log(getPrize("irfanhafizh@ganteng"));
