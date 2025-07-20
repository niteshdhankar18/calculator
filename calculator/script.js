let string = "";
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    let value = e.target.innerHTML;

    if (value === "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (value === "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string += value;
      document.querySelector("input").value = string;
    }
  });
});
