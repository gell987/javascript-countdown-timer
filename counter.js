let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 10) {
    output.innerText = 0;
    console.log("javascript is faster than marco");
  } else {
    output.innerText = result;
  }
});

subtract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;
  if (result < 0) {
    output.innerText = 0;
  } else {
    output.innerText = result;
  }
});
