let submitBtn = (document.getElementById("fbtn").onclick = function () {
  let left = document.getElementById("left-value").value;
  let right = document.getElementById("right-value").value;
  let side = document.getElementById("height").value;

  isTriangle(Number(left), Number(right), Number(side));
});

function isTriangle(a, b, c) {
  let triangle = a + b > c && a + c > b && c + b > a;

  if (triangle) {
      let p = (a + b + c) / 2;
    let height = (a * Math.sqrt(p * (p - a) * (p - b) * (p - c))) / a;
    console.log(height)
    document.getElementById("text").innerHTML = "Here's your triangle:";
    document.getElementById(
      "triangle-representation"
    ).style.borderWidth = `0 ${b}rem ${height}rem ${a}rem`;
    document.getElementById("triangle-representation").style.borderColor =
      "transparent transparent red transparent";
  } else {
    document.getElementById("text").innerHTML =
      "Sorry, a triangle cannot be built with the sides of given length";
    document.getElementById("triangle-representation").style.borderColor =
      "transparent";
  }
}
