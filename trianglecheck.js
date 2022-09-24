
let submitBtn = (document.getElementById("fbtn").onclick = function () {
  let left = document.getElementById("left-value").value;
  let right = document.getElementById("right-value").value;
  let height = document.getElementById("height").value;

  console.log(left, right, height);
  isTriangle(Number(left), Number(right), Number(height));
});

function isTriangle(a, b, c) {
  let triangle = a + b > c && a + c > b && c + b > a;

  if (triangle) {
    document.getElementById(
      "triangle-representation"
    ).style.borderWidth = `0 ${b}rem ${c}rem ${a}rem`;
  } else {
    document.getElementById("text").innerHTML =
      "Sorry, a triangle cannot be built with the sides of given length";
  }
}

