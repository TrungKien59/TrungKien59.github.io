// Viết chương trình in ra màn hình nếu số chia hết cho 3 thì in “Fizz”, số chia hết cho 5 thì in ra “Buzz”, nếu chia hết cho cả 3 và 5 thì in “FizzBuzz”, nếu không chia hết cho cả 2 thì in “BuzzFizz” trong khoảng từ 0 đến 100

//   for (let i = 0; i <= 100; i++) {
//     document.write(`Số ${i}: `);
//     if (i % 3 == 0 && i % 5 == 0) {
//       document.writeln("FizzBuzz");
//     } else {
//       if (i % 3 == 0) {
//         document.writeln("Fizz");
//       } else {
//         if (i % 5 == 0) {
//           document.writeln("Buzz");
//         } else {
//           document.writeln("BuzzFizz");
//         }
//       }
//     }
//   }

//  Viết chương trình tính tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000

//   let tong = 0;
//   for (let i = 15; i <= 1000; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       tong += i;
//     }
//   }

//   alert(
//     `Tổng tất cả bội chung của 3 và 5 trong khoảng từ 0 đến 1000 là: ${tong}`
//   );

//  Viết chương cho phép nhập một số, kiểm tra số đó có phải số nguyên tố hay không

//   let a = +prompt("Nhập số :", "");
//   let check = 0;
//   if (a < 2) {
//     alert("Số này không phải số nguyên tố");
//   } else {
//     for (let i = 2; i <= Math.sqrt(a); i++) {
//       if (a % i == 0) {
//         check = 1;
//         break;
//       }
//     }
//   }
//   if (check == 1) {
//     alert("Số này không phải số nguyên tố");
//   } else {
//     alert("Số này là số nguyên tố");
//   }

//    Viết chương trình cho phép nhập một số “n”, in ra tất cả số nguyên tố trong khoảng từ 0 đến “n”

//   let a = +prompt("Nhập số :", "");
//   alert("Tất cả số nguyên tố trong khoảng từ 0 đến “n” là: ");
//   for (let i = 2; i <= a; i++) {
//     let check = 0;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j == 0) {
//         check = 1;
//         break;
//       }
//     }
//     if (check == 0) {
//       alert(` ${i}`);
//     }
//   }

//    Viết chương trình cho phép nhập một hai số a b, tính tổng tất cả số nguyên tố trong khoảng từ a đến b

//   let a = +prompt("Nhập số a :", "");
//   let b = +prompt("Nhập số b :", "");
//   let tong = 0;
//   for (let i = a; i <= b; i++) {
//     if (i == 1) {
//       continue;
//     }
//     let check = 0;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j == 0) {
//         check = 1;
//         break;
//       }
//     }
//     if (check == 0) {
//       tong += i;
//     }
//   }
//   alert(`Tổng tất cả số nguyên tố trong khoảng từ a đến b la: ${tong}`);

//   Viết chương trình in ra bảng cửu chương ngược (từ 10 về 1)

//   for (let i = 10; i >= 1; i--) {
//     for (let j = 10; j >= 1; j--) {
//       document.writeln(`${i} * ${j} = ${i * j}`);
//     }
//   }

// Viết chương trình cho phép nhập vào một số, in ra số đầu tiên và cuối cùng của số đó

//   let a = prompt("Nhập số :", "");
//   let ln = a.length;
//   alert(`Số đầu tiên là: ${a[0]}`);
//   alert(`Số cuối cùng là: ${a[ln - 1]}`);

//   Viết chương trình cho phép nhập một số, kiểm tra xem số đó có phải là số Palindrome hay không (Số Palindrome là số đối xứng) (VD: 141 => true, 123 => false)

//   let a = prompt("Nhập số :", "");
//   let ln = a.length;
//   let b = 1;
//   let check = 0;
//   for (let i = 0; i < ln / 2; i++) {
//     if (i == ln - b) {
//       break;
//     }
//     if (a[i] != a[ln - b]) {
//       check = 1;
//       break;
//     }
//     b++;
//   }
//   if (check == 0) {
//     alert("Số đó là số Palindrome");
//   } else {
//     alert("Số đó không là số Palindrome");
//   }

//   Viết chương trình cho phép nhập một số, tính giai thừa của số đó

//   let a = +prompt("Nhập số :", "");
//   let giaithua = 1;
//   for (let j = 1; j <= a; j++) {
//     giaithua *= j;
//   }
//   alert(`Giai thừa của số đó la: ${giaithua}`);

//   Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Armstrong hay không (Số Armstrong là số bằng tổng lập phương của tất cả các chữ số của nó) (VD: 371 = 3*3 + 7*3 + 1*3 => true, 123 != 1*3 + 2*3 + 3*3 => false)

//   let a = prompt("Nhập số :", "");
//   let ln = a.length;
//   let tong = 0;
//   for (let i = 0; i < ln; i++) {
//     tong += a[i] * a[i] * a[i];
//   }
//   if (a == tong) {
//     alert("Số đó là số Armstrong ");
//   } else {
//     alert("Số đó không là số Armstrong ");
//   }

//   Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Perfect hay không (Số n là số Perfect nếu n bằng tổng tất cả các số từ 1 đến n / 2) (VD: 6 = 1 + 2 + 3 => true)

//   let a = prompt("Nhập số :", "");
//   let tong = 0;
//   for (let i = 1; i <= a / 2; i++) {
//     tong += i;
//   }
//   if (a == tong) {
//     alert("Số đó là số Perfect ");
//   } else {
//     alert("Số đó không là số Perfect ");
//   }

//   Viết chương trình cho phép nhập một số, kiểm tra số đó có phải số Strong hay không (Số Strong là số bằng tổng giai thừa các chữ số của nó) (VD: 145 = 1! + 4! + 5! => true)

//   let a = prompt("Nhập số :", "");
//   let ln = a.length;
//   let tong = 0;
//   for (let i = 0; i < ln; i++) {
//     let giaithua = 1;
//     for (let j = 2; j <= a[i]; j++) {
//       giaithua *= j;
//     }
//     tong += giaithua;
//   }
//   if (a == tong) {
//     alert("Số đó là số Strong ");
//   } else {
//     alert("Số đó không là số Strong ");
//   }

//   Viết chương trình cho phép nhập một số n, in ra dãy số Fibonacci trong khoảng từ 0 đến n (Dãy Fibonacci có số bắt đầu là 0, 1 hoặc 1, 1 và các số sau có tổng bằng 2 số trước đó cộng lại)

//   let n = +prompt("Nhập số :", "");
//   if (n == 0) {
//     console.log(0);
//   } else {
//     if (n == 1) {
//       console.log(0, 1);
//     } else {
//       let truoc = 0;
//       let sau = 1;
//       console.log(0, 1);
//       for (let i = 2; i <= n; i++) {
//         let tg = sau;
//         sau = truoc + sau;
//         truoc = tg;
//         console.log(`, ${sau} `);
//       }
//     }
//   }

// Viết chương trình cho phép nhập 2 số, tìm bội chung nhỏ nhất của 2 số đó

//   let a = +prompt("Nhập số a:", "");
//   let b = +prompt("Nhập số b:", "");
//   if (a > b) {
//     let c = a;
//   } else {
//     c = b;
//   }
//   for (let i = c; i <= a * b; i += c) {
//     if (i % a == 0 && i % b == 0) {
//       alert(`BCNN la: ${i}`);
//       break;
//     }
//   }

//   Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

//   let a = +prompt("Nhập số a:", "");
//   for (let i = 0; i < a; i++) {
//     for (let j = 0; j < a; j++) {
//       console.log(1);
//     }
//   }

//   Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

//   let a = +prompt("Nhập số a:", "");
//   let b = 1;
//   for (let i = 0; i < a; i++) {
//     for (let j = 0; j < a; j++) {
//       console.log(b);
//       if (b == 0) {
//         b = 1;
//       } else {
//         b = 0;
//       }
//     }
//   }

//   Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n, n lẻ)

//   let a = +prompt("Nhập số a:", "");
//   let dau = 0;
//   let duoi = a - 1;
//   for (let i = 0; i < a; i++) {
//     for (let j = 0; j < a; j++) {
//       if (j == dau || j == duoi) {
//         console.log(" " + 1);
//       } else {
//         console.log(" " + 0);
//       }
//     }
//     dau++;
//     duoi--;
//   }

//   Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (số hàng và cột = n)

//   let a = +prompt("Nhập số a:", "");
//   for (let i = 1; i <= a; i++) {
//     let b = 1;
//     let truoc = i;
//     for (let j = 1; j <= i; j++) {
//       if (j == 1) {
//         console.log(" " + i);
//       } else {
//         console.log(` ${truoc + a - b}`);
//         truoc = truoc + a - b;
//         b++;
//       }
//     }
//   }

//   Viết chương trình cho phép nhập một số n, in ra theo mẫu sau (n lẻ)

//   let a = +prompt("Nhập số a:", "");
//   let dau = 1;
//   let duoi = a;
//   for (let i = 1; i <= a; i++) {
//     for (let j = 1; j <= a; j++) {
//       if (j == dau || j == duoi) {
//         console.log(i);
//       } else {
//         console.log(" ");
//       }
//     }
//     dau++;
//     duoi--;
//   }

//   Viết hàm tính lập phương của một số

//   function tinh_lap_phuong(a) {
//     return a * a * a;
//   }
//   let a = +prompt("Nhập số a:", "");
//   let b = tinh_lap_phuong(a);
//   alert(`Lap phuong cua a la: ${b}`);

//  Viết hàm tìm chu vi, diện tích hình tròn

//   const PI = 3.14;
//   function chuvi_hinhtron(r) {
//     return r * 2 * PI;
//   }
//   function dientich_hinhtron(r) {
//     return r * r * PI;
//   }
//   let r = +prompt("Nhập ban kinh r:", "");
//   let cv = chuvi_hinhtron(r);
//   let dt = dientich_hinhtron(r);
//   alert(`Chu vi hinh tron la: ${cv}, dien tich hinh tron la ${dt}`);

//   Viết hàm tìm số lớn nhất giữa 2 số

//   function tim_max(a, b) {
//     if (a > b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   let a = +prompt("Nhập số a:", "");
//   let b = +prompt("Nhập số b:", "");
//   let so_max = tim_max(a, b);
//   alert(`So lon hon la: ${so_max}`);

//    Viết hàm kiểm tra số Prime

//   function tim_snt(a) {
//     let check = 0;
//     if (a < 2) {
//       check = 1;
//       return check;
//     } else {
//       for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i == 0) {
//           check = 1;
//           break;
//         }
//       }
//     }
//     if (check == 1) {
//       return check;
//     } else {
//       return check;
//     }
//   }
//   let a = +prompt("Nhập số :", "");
//   let kq = tim_snt(a);
//   if (kq == 1) {
//     alert("Số này không phải số nguyên tố");
//   } else {
//     alert("Số này la số nguyên tố");
//   }

//   Viết hàm kiểm tra số Armstrong

//   function armstrong(a) {
//     let ln = a.length;
//     let tong = 0;
//     for (let i = 0; i < ln; i++) {
//       tong += a[i] * a[i] * a[i];
//     }
//     if (a == tong) {
//       alert("Số đó là số Armstrong ");
//     } else {
//       alert("Số đó không là số Armstrong ");
//     }
//   }
//   let a = prompt("Nhập số :", "");
//   armstrong(a);

//   Viết hàm kiểm tra số Perfect

//   function Perfect(a) {
//     let tong = 0;
//     for (let i = 1; i <= a / 2; i++) {
//       tong += i;
//     }
//     if (a == tong) {
//       alert("Số đó là số Perfect ");
//     } else {
//       alert("Số đó không là số Perfect ");
//     }
//   }
//   let a = prompt("Nhập số :", "");
//   Perfect(a);

//  Viết hàm kiểm tra số Strong

//   function Strong(a) {
//     let ln = a.length;
//     let tong = 0;
//     for (let i = 0; i < ln; i++) {
//       let giaithua = 1;
//       for (let j = 2; j <= a[i]; j++) {
//         giaithua *= j;
//       }
//       tong += giaithua;
//     }
//     if (a == tong) {
//       alert("Số đó là số Strong ");
//     } else {
//       alert("Số đó không là số Strong ");
//     }
//   }
//   let a = prompt("Nhập số :", "");
//   Strong(a);

//   Viết hàm kiểm tra số Palindrome

//   function Palindrome(a) {
//     let ln = a.length;
//     let b = 1;
//     let check = 0;
//     for (let i = 0; i < ln / 2; i++) {
//       if (i == ln - b) {
//         break;
//       }
//       if (a[i] != a[ln - b]) {
//         check = 1;
//         break;
//       }
//       b++;
//     }
//     if (check == 0) {
//       alert("Số đó là số Palindrome");
//     } else {
//       alert("Số đó không là số Palindrome");
//     }
//   }
//   let a = prompt("Nhập số :", "");
//   Palindrome(a);

//   Viết hàm tính số Fibonacci

//   function Fibonacci(n) {
//     if (n == 0) {
//       console.log(0);
//     } else {
//       if (n == 1) {
//         console.log(0, 1);
//       } else {
//         let truoc = 0;
//         let sau = 1;
//         console.log(0, 1);
//         for (let i = 2; i <= n; i++) {
//           let tg = sau;
//           sau = truoc + sau;
//           truoc = tg;
//           console.log(`, ${sau} `);
//         }
//       }
//     }
//   }
//   let n = +prompt("Nhập số :", "");
//   Fibonacci(n);

//   Viết hàm tính giai thừa

//   function gt(a) {
//     let giaithua = 1;
//     for (let j = 1; j <= a; j++) {
//       giaithua *= j;
//     }
//     alert(`Giai thừa của số đó la: ${giaithua}`);
//   }
//   let a = +prompt("Nhập số :", "");
//   gt(a);

//   Viết hàm kiểm tra một số có phải là số nguyên tố hay không, kết quả trả về true hoặc false

//   function tim_snt(a) {
//     let check = 0;
//     if (a < 2) {
//       check = 1;
//       return false;
//     } else {
//       for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i == 0) {
//           check = 1;
//           break;
//         }
//       }
//     }
//     if (check == 1) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   let a = +prompt("Nhập số :", "");
//   if (tim_snt(a) == false) {
//     alert("Số này không phải số nguyên tố");
//   } else {
//     alert("Số này la số nguyên tố");
//   }

//   Viết hàm tính tổng tất cả số lẻ trong khoảng từ 0 đến n (n là tham số truyền vào) và trả về giá trị đó

//    function tinh(n) {
//    let tong = 0;
//    if (n % 2 == 0) {
//    for (let i = 1; i < n; i += 2) {
//    tong += i;
//  }
// }
//  else {
//  for (let i = 1; i <= n; i += 2) {
//    tong += i;
// }
//   }
//   return tong;
// }
// let n = +prompt("Nhập số :", "");
// let tongle = tinh(n);
// alert(`Tổng tất cả số lẻ trong khoảng từ 0 đến ${n}  la: ${tongle}`);
