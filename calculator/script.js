let string = "";
let buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let value = e.target.innerHTML;

    if (value === '=') {
      try {
        string = eval(string);
      } catch (err) {
        string = "Error";
      }
    } else if (value === 'C') {
      string = "";
    } else {
      string += value;
    }

    document.querySelector('.input').value = string;
  });
});
