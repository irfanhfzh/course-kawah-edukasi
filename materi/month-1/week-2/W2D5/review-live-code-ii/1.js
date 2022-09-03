// Buatlah Program Untuk Menjalankan Skema Berikut

/**
 * Function [checkPalindrome] menerima satu buah parameter [num].
 * Function ini bertujuan untuk mem-validasi apakah parameter yang di input merupakan bilangan palindrome (dapat dibaca sama secara terbalik).
 * eg. 555, 55, dan 5 merupakan palindrome.
 * eg. 512 bukan merupakan palindrome karena menjadi 215 jika dibaca secara terbalik.
 *
 * Case:
 * 1. Jika parameter yang diterima bersifat falsy, maka mengembalikan ["Error"].
 * 2. Jika parameter yang diterima bukan bertipe number, maka mengembalikan ["Error"].
 * 3. Jika parameter yang diterima merupakan sebuah bilangan palindrome, maka mengembalikan [true].
 * 4. Jika parameter yang diterima bukan merupakan sebuah bilangan palindrome, maka mengembalikan [false].
 */

function checkPalindrome(num) {
  // Sudah Benar
  // if (!num || typeof num !== "number") {
  //   return "Error";
  // } else {
  //   let number = num.toString();
  //   let len = number.length;
  //   for (let i = 0; i < len / 2; i++) {
  //     if (number[i] !== number[len - 1 - i]) {
  //       return false;
  //     }
  //     return true;
  //   }
  // }

  // Syntax Lebih baik atau singkat
  if (!num || typeof num !== "number") {
    return "Error";
  } else {
    let str = String(num);
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    // if (reverseStr === str) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }

    // shorthand
    return reverseStr === str;
  }
}

console.log(checkPalindrome(312));
