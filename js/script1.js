const test = document.querySelector('.form__control');
const button = document.querySelector('.button__test');
// const buttonValue = document.querySelector('.button__test');

button.onclick = function () {
  console.log(test.value);
  if (test.value == 'turtle.up()') {
    test.style.border = '3px solid green';
    alert('Все верно! Молодец')
  } else {
    test.style.border = '3px solid red'
    alert('Попробуй еще раз(')
  }
}
