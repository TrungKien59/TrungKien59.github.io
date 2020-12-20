// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C.Ví dụ tham số truyền vào là - 30 thì kết quả trả về là - 22.

// function convertCtoF ( c )
// {
//   return (9 / 5) * c + 32;
// }

// ví dụ:
// console.log( convertCtoF( 36.5 ));
// console.log(convertCtoF(29));
// console.log(convertCtoF(-30));


// Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
// function sortNumber(arr) {
//   arr.sort((a, b) => a - b);
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//       break;
//     }
//   }

//   return max;
// }

// ví dụ:
// console.log(sortNumber([-5, 9, 7, 1]));
// console.log(sortNumber([10, 5.9, 9, -3]));
// console.log(sortNumber([10, 8, 6, -4, -7]));


// Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
// function stringMax(arr) {
//     let newArr = [];

//     arr.sort(function (a, b) {
//         let n1 = a.length;
//         let n2 = b.length;
//         return n2 - n1;
//     });
//     newArr.push(arr[0]);

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[0].length === arr[i].length) {
//             newArr.push(arr[i]);
//         } else {
//             break;
//         }
//     }

//     return newArr;
// }

// ví dụ:
// console.log(stringMax(["12345", "nam", "chin", "muoi", "56789"]));
// console.log(stringMax([" ", ""]));


// Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
// function check(arr, target) {
//     let stringEnd = arr.slice(arr.length - target.length, arr.length);

//     if (stringEnd === target) {
//         return true;
//     }
//     return false;
// }

// ví dụ:
// console.log(check("123gfhgfhgf", "gfhgfcgfcg"));
// console.log(check("rsdresr", "tdtyfh"));
// console.log(check(" ", "rsrdrtd "));
// console.log(check("uiyuhbgjg ", "    "));


// Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp) hoặc false (nếu không lặp).
// function duplicate(arr) {
//     let checked = arr.some(function (element, index) {
//         return arr.indexOf(element) != index;
//     });

//     return checked;
// }

// ví dụ:
// console.log(duplicate([false, "dsdrsr", 456, false]));
// console.log(duplicate([true, "dgfdgf", 595, 356, false]));
// console.log(duplicate([true, " ", 789, " ", false]));