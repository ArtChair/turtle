const test = document.querySelector('.form__control');
const button = document.querySelector('.button__test');
const result = document.querySelector('.fail');
// const buttonValue = document.querySelector('.button__test');

button.onclick = function () {
  console.log(test.value);
  if (test.value == 'up()') {
    test.style.border = '3px solid green';
    result.innerHTML = `
    <div>Верно!</div>
    `
    // result.style.margin = '-10px'
  } else {
    test.style.border = '3px solid red'
    result.innerHTML = `
    <div>Неверно! попробуй еще раз</div>
    `
  }
}
