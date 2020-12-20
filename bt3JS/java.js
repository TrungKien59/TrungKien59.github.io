// Bài 1: Viết hàm cho phép đổi đơn vị tiền tệ từ USD sang VND, biết 1 USD = 23000 VND.Tham số truyền vào là 1 số nguyên dương.
// function moneyChange(usd) {
//             return usd * 23000;
// }

// ví dụ:
//console.log(moneyChange(59));
//console.log(moneyChange(5.9));


// Bài 2: Viết hàm tính thể tích hình cầu, với tham số truyền vào là 1 số nguyên dương thể hiện bán kính của hình cầu, ( số PI sử dụng Math.PI).
// function volume(r) {
//             return (4 / 3) * Math.PI * Math.pow(r, 3);
//         }

//ví dụ:
//console.log(volume(9));
//console.log(volume(9.5));


// Bài 3: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.Ví dụ với tham số 3 và 8 ta có kết quả là 22( bằng 4 + 5 + 6 + 7 ).
// function sum(a, b) {
//             let sum = 0;
//             if (a == b) {
//                 return sum;
//             } else if (a < b) {
//                 for (let i = a + 1; i < b; i++) {
//                     sum += i;
//                 }
//             } else {
//                 for (let i = b + 1; i < a; i++) {
//                     sum += i;
//                 }
//             }
//             return sum;
//         }

//ví dụ:
//console.log(sum(3, 8));
//console.log(sum(5, 9));
//console.log(sum(9, 5));


// Bài 4: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
//  function result(n) {
//              let sum = n;
//              for(let i = 1; i <= (n / 2); i++) {
//                  if(n % i === 0) {
//                      sum += i;
//                  }
//              }
//              return sum;
//          }

//ví dụ:
//console.log(result(5));
//console.log(result(9));
//console.log( result(59));
//console.log(result(95));