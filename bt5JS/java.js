// Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
// function bai1 ( str ){
//     // tách chuỗi thành mảng
//     let arr = str.split( '' );

//     // Viết hoa phần tử đầu tiên trong mảng
//     arr[ 0 ] = arr[ 0 ].toUpperCase();
//     // Duyệt mảng từ phần tử thứ 2
//     for ( let i = 0; i < arr.length; i++ ){
//         // nếu phần tử ngay phía trước là dấu cách
//         if ( arr[ i - 1 ] === '' ){
//             // thì biến đổi phần tử hiện tại thành viết hoa
//             arr[ i ] = arr[ i ].toUpperCase();
//         }
//         // nếu không
//         else{
//             // thì biến đổi phần tử hiện tại thành viết thường
//             arr[i] = arr[i].toLowerCase();
//         }
//     }
//     // gộp mảng biến đổi thành chuỗi
//     return arr.join('')
// }

// Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
// function bai2 ( str ){
//     // tách chuỗi thành mảng
//     let arr = str.split( '' );
//     for ( let i = 0; i < arr.length; i++ ){
//         if ( arr[ i ] == '' ){
//             arr[ i ] = "-";
//         }
//         eles{
//             arr[ i ] = arr[ i ].toLowerCase();
//         }
//     }
//     return arr.join('')
// }

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không( đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường ), kết quả trả về true hoặc false.Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
// function symmetry(str) {
//   let newStr = str.toLowerCase().split(" ").join(" ");
//   let reverseStr = "";

//   for (let i = newStr.length - 1; i >= 0; i--) {
//     reverseStr += newStr[i];
//   }

//   if (newStr === reverseStr) {
//     return true;
//   } else {
//     return false;
//   }
// }
