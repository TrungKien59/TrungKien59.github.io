let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

// 1, Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
function changeColor() {
  p1.style.color = "blue";
  p2.style.color = "yellow";
  p3.style.color = "red";
}

// 2, Thay đổi màu nền của trang thành màu color.
function changeBgColor() {
  document.body.style.background = "orange";
}

// 3, Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung của đoạn văn paragraph2 (tham số truyền vào là id của 2 đoạn văn hoặc thứ tự của đoạn văn).
function copyContent(paragraph1, paragraph2) {
  let content = document.getElementById(paragraph2).innerText;
  document.getElementById(paragraph1).innerText = content;
}

// 4, Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels (x là một số nguyên).
function changeFontSize() {
  let x = document.getElementById("number").value;
  let p = document.getElementsByTagName("p");

  for (let i = 0; i < p.length; i++) {
    p[i].style.fontSize = x + "px";
  }
}

// 5, Tăng kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) lên 1 pixel so với kích thước hiện tại, kích thước tăng lên không được vượt quá 30 pixels (Sử dụng sau khi gọi hàm changeFontSize() hoặc dùng window.getComputedStyle).
function increaseFontSize(paragraph) {
  let x = document.getElementById(paragraph).style.fontSize;
  let num = x.replace("px", "");

  if (num < 30) {
    x = Number(num) + 1 + "px";
    // console.log(x);
    document.getElementById(paragraph).style.fontSize = x;
  }
}

// 6, Giảm kích thước font chữ của đoạn văn mong muốn (tham số truyền vào là id đoạn văn hoặc thứ tự đoạn văn) xuống 1 pixels so với kích thước hiện tại, kích thước giảm xuống không vượt quá 10 pixels.
function decreaseFontSize(paragraph) {
  let x = document.getElementById(paragraph).style.fontSize;
  let num = x.replace("px", "");

  if (num > 10) {
    x = Number(num) - 1 + "px";
    // console.log(x);
    document.getElementById(paragraph).style.fontSize = x;
  }
}
