const questionsInput = document.querySelectorAll('input');
const checkAnswer = document.querySelectorAll('.result');
const result = document.querySelector('.quiz__results');
const resultActive = document.querySelector('.result__active');
const buttonAll = document.querySelectorAll('button');
const inputStr = document.querySelectorAll('#answ_str');
const xinputStr = document.querySelectorAll('#Xansw_str');

const mistake = document.querySelector('.mistake');
const mistakeOne = document.querySelector('.mistake1');
const mistakeTwo = document.querySelector('.mistake2');
const mistakeThree = document.querySelector('.mistake3');
const mistakeFour = document.querySelector('.mistake4');
const mistakeFive = document.querySelector('.mistake5');
const mistakeSix = document.querySelector('.mistake6');


const inputOne = document.getElementById('answ_1');
const inputTwo = document.getElementById('answ_2');
const inputThree = document.getElementById('answ_3');
const inputFour = document.getElementById('answ_4');
const inputFive = document.getElementById('answ_5');
const inputSix = document.getElementById('answ_6');
const inputSeven = document.getElementById('answ_7');

const button = document.querySelector('.btn');
const buttonOne = document.querySelector('.zero');
const buttonTwo = document.querySelector('.one');
const buttonThree = document.querySelector('.two');
const buttonFour = document.querySelector('.three');
const buttonFive = document.querySelector('.four');
const buttonSix = document.querySelector('.five');


const answ0 = document.querySelector('.str0');
const answ1 = document.querySelector('.str1');
const answ2 = document.querySelector('.str2');
const answ3 = document.querySelector('.str3');
const answ4 = document.querySelector('.str4');
const answ5 = document.querySelector('.str5');
const answ6 = document.querySelector('.str6');
const answ7 = document.querySelector('.str7');

const xstr0 = document.querySelector('.Xstr0');
const xstr1 = document.querySelector('.Xstr1');
const xstr2 = document.querySelector('.Xstr2');
const xstr3 = document.querySelector('.Xstr3');
const xstr4 = document.querySelector('.Xstr4');
const xstr5 = document.querySelector('.Xstr5');


const mistakeStr = document.querySelector('.mistakeStr');
const mistakeStr1 = document.querySelector('.mistakeStr1');

const buttonStr = document.querySelector('.strcheck');
const buttonStr1 = document.querySelector('.strcheck1');

const answerTwo = document.querySelector('.q1');
const answerThree = document.querySelector('.q2');
const answerFour = document.querySelector('.q3');
const answerFive = document.querySelector('.q4');
const answerSix = document.querySelector('.q5');
const answerSeven = document.querySelector('.q6');
const answerEight = document.querySelector('.q7');


let sum = 0;
button.onclick = function() {
    const answerTwo = document.querySelector('.q1');
    // console.log(answerTwo.value);
    if (answerTwo.value == 'up()') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        inputOne.setAttribute('disabled', true);
        button.setAttribute('disabled', true);
        inputOne.style.opacity = '0.5';
        button.style.opacity = '0.5';
        mistake.innerHTML = '<div>Все верно!</div> ';
        mistake.style.color = 'green';
        mistake.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно');
        mistake.innerHTML = '<div>неверно</div> ';
        mistake.style.color = 'red';
        mistake.style.fontWeight = '600';
    }
    if (answerTwo.value == ''){
        console.log('Введите что-нибудь')
        mistake.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistake.style.color = 'red';
        mistake.style.fontWeight = '600';
    }
}
buttonOne.onclick = function() {
    const answerThree = document.querySelector('.q2');
    // console.log(answerTwo.value);
    if (answerThree.value == 'down()') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        inputTwo.setAttribute('disabled', true);
        buttonOne.setAttribute('disabled', true);
        inputTwo.style.opacity = '0.5';
        buttonOne.style.opacity = '0.5';
        mistakeOne.innerHTML = '<div>Все верно!</div> ';
        mistakeOne.style.color = 'green';
        mistakeOne.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно');
        mistakeOne.innerHTML = '<div>неверно</div> ';
        mistakeOne.style.color = 'red';
        mistakeOne.style.fontWeight = '600';
    }
    if (answerThree.value == ''){
        console.log('Введите что-нибудь');
        mistakeOne.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeOne.style.color = 'red';
        mistakeOne.style.fontWeight = '600';
    }
}
buttonTwo.onclick = function() {
    const answerFour = document.querySelector('.q3');
    // console.log(answerTwo.value);
    if (answerFour.value == 'goto(100,200)' || answerFour.value == 'goto(100, 200)') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        inputThree.setAttribute('disabled', true);
        buttonTwo.setAttribute('disabled', true);
        inputThree.style.opacity = '0.5';
        buttonTwo.style.opacity = '0.5';
        mistakeTwo.innerHTML = '<div>Все верно!</div> ';
        mistakeTwo.style.color = 'green';
        mistakeTwo.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно');
        mistakeTwo.innerHTML = '<div>неверно</div> ';
        mistakeTwo.style.color = 'red';
        mistakeTwo.style.fontWeight = '600';
    }
    if (answerFour.value == ''){
        console.log('Введите что-нибудь');
        mistakeTwo.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeTwo.style.color = 'red';
    }
}
buttonThree.onclick = function() {
    const answerFive = document.querySelector('.q4');
    // console.log(answerTwo.value);
    if (answerFive.value == 'begin_fill()') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        buttonThree.setAttribute('disabled', true);
        inputFour.setAttribute('disabled', true);
        inputFour.style.opacity = '0.5';
        buttonThree.style.opacity = '0.5';
        mistakeThree.innerHTML = '<div>Все верно!</div> ';
        mistakeThree.style.color = 'green';
        mistakeThree.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно');
        mistakeThree.innerHTML = '<div>неверно</div> ';
        mistakeThree.style.color = 'red';
        mistakeThree.style.fontWeight = '600';
    }
    if (answerFive.value == ''){
        console.log('Введите что-нибудь');
        mistakeThree.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeThree.style.color = 'red';
        mistakeThree.style.fontWeight = '600';
    }
}
buttonFour.onclick = function() {
    const answerSix = document.querySelector('.q5');
    // console.log(answerTwo.value);
    if (answerSix.value == 'circle(20)') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        buttonFour.setAttribute('disabled', true);
        inputFive.setAttribute('disabled', true);
        inputFive.style.opacity = '0.5';
        buttonFour.style.opacity = '0.5';
        mistakeFour.innerHTML = '<div>Все верно!</div> ';
        mistakeFour.style.color = 'green';
        mistakeFour.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно');
        mistakeFour.innerHTML = '<div>неверно</div> ';
        mistakeFour.style.color = 'red';
        mistakeFour.style.fontWeight = '600';
    }
    if (answerSix.value == ''){
        console.log('Введите что-нибудь')
        mistakeFour.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeFour.style.color = 'red';
        mistakeFour.style.fontWeight = '600';
    }
}
buttonFive.onclick = function() {
    const answerSeven = document.querySelector('.q6');
    // console.log(answerTwo.value);
    if (answerSeven.value == 'forward()') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        buttonFive.setAttribute('disabled', true);
        inputSix.setAttribute('disabled', true);
        inputSix.style.opacity = '0.5';
        buttonFive.style.opacity = '0.5';
        mistakeFive.innerHTML = '<div>Все верно!</div> ';
        mistakeFive.style.color = 'green';
        mistakeFive.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно')
        mistakeFive.innerHTML = '<div>неверно</div> ';
        mistakeFive.style.color = 'red';
        mistakeFive.style.fontWeight = '600';
    }
    if (answerSeven.value == ''){
        console.log('Введите что-нибудь')
        mistakeFive.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeFive.style.color = 'red';
        mistakeFive.style.fontWeight = '600';
    }
}
buttonSix.onclick = function() {
    const answerEight = document.querySelector('.q7');
    // console.log(answerTwo.value);
    if (answerEight.value == 'tracer(0)') {
        console.log('верно');
        sum += 0.42857142857;
        console.log(sum);
        resultActive.innerHTML = sum;
        buttonSix.setAttribute('disabled', true);
        inputSeven.setAttribute('disabled', true);
        inputSeven.style.opacity = '0.5';
        buttonSix.style.opacity = '0.5';
        mistakeSix.innerHTML = '<div>Все верно!</div> ';
        mistakeSix.style.color = 'green';
        mistakeSix.style.fontWeight = '600';
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('неверно');
        mistakeSix.innerHTML = '<div>неверно</div> ';
        mistakeSix.style.color = 'red';
        mistakeSix.style.fontWeight = '600';
    }
    if (answerEight.value == ''){
        console.log('Введите что-нибудь')
        mistakeSix.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeSix.style.color = 'red';
        mistakeSix.style.fontWeight = '600';
    }
}
buttonStr.onclick = () => {
    if(answ0.value == 'from turtle import *' && (answ1.value == 'color("red")' || answ1.value == 'tracer(0)') && (answ2.value == 'begin_fill()' || answ2.value == 'color("red")')  && (answ3.value == 'circle(11)' || answ3.value == 'begin_fill()') && (answ4.value == 'end_fill()' || answ4.value == 'circle(11)') && (answ5.value == 'tracer(0)' || answ5.value == 'end_fill()')) {
        console.log('Ввели верно')
        // inputOne.setAttribute('disabled', true);
        buttonStr.setAttribute('disabled', true);
        buttonStr.style.opacity = '0.5';
        mistakeStr.innerHTML = '<div>Все верно!</div> ';
        mistakeStr.style.color = 'green';
        mistakeStr.style.fontWeight = '600';
        for (let a = 0; a < inputStr.length; a++) {
            inputStr[a].setAttribute('disabled', true);
            inputStr[a].style.opacity = '0.5';
            console.log(inputStr[a])
        }
        sum += 1;
        console.log(sum);
        resultActive.innerHTML = sum;
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    }
    else {
        console.log('Ввели неверно')
        mistakeStr.innerHTML = '<div>неверно</div> ';
        mistakeStr.style.color = 'red';
        mistakeStr.style.fontWeight = '600';
    }
    if(answ0.value == '' && answ1.value == '' && answ2.value == '' && answ3.value == '' && answ4.value == '' && answ5.value == '' ){
        console.log('Введите что-нибудь')
        mistakeStr.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeStr.style.color = 'red';
        mistakeStr.style.fontWeight = '600';
    }
}

buttonStr1.onclick = () => {
    if(xstr0.value == 'from turtle import *' && xstr1.value == 'k=15' && xstr2.value == `for x in range(6):` && xstr3.value == '      forward(10 * k)' &&  xstr4.value == '      right(60)' && xstr5.value == 'tracer(0)') {
        console.log('Ввели верно')
        // inputOne.setAttribute('disabled', true);
        buttonStr1.setAttribute('disabled', true);
        buttonStr1.style.opacity = '0.5';
        mistakeStr1.innerHTML = '<div>Все верно!</div> ';
        mistakeStr1.style.color = 'green';
        mistakeStr1.style.fontWeight = '600';
        for (let a = 0; a < xinputStr.length; a++) {
            xinputStr[a].setAttribute('disabled', true);
            console.log(xinputStr[a])        
            xinputStr[a].style.opacity = '0.5';
        }
        sum += 1;
        console.log(sum);
        resultActive.innerHTML = sum;
        if (sum == 8) {
            alert(`Ты ответил на все вопросы!!
            Твой результат: ${sum} /10`);
        }
    } 
    else {
        console.log('Ввели неверно')
        mistakeStr1.innerHTML = '<div>неверно</div> ';
        mistakeStr1.style.color = 'red';
        mistakeStr1.style.fontWeight = '600';
    }
    if(xstr0.value == '' && xstr1.value == '' && xstr2.value == '' && xstr3.value == '' &&  xstr4.value == '' && xstr5.value == ''){
        console.log('Введите что-нибудь')
        mistakeStr1.innerHTML = '<div>Ты ничего не ввел</div> ';
        mistakeStr1.style.color = 'red';
        mistakeStr1.style.fontWeight = '600';
    }
}

// for (let a = 0; a < inputStr.length; a++) {
//     // checkAnswer.onclick = function() {
//     // };
//     buttonStr.onclick = () => {
//         inputStr[a].setAttribute('disabled', true);
//     }
//     console.log(inputStr[a])
// }

// if(answ0.value == '1' && answ1.value == '2' && answ2.value == '3' && answ3.value == '4' && answ4.value == '5' && answ5.value == '6' ) {
// тестинг



// for (let i = 0; i < questionsInput.length; i++) {
//     checkAnswer.onclick = function() {
//         const a = questionsInput[i];
//         console.log(a)
//         const newValue = a;
//         console.log(newValue)
//     };
// }


// checkAnswer.onclick = function() {
//     const a = document.querySelectorAll('input').value;
//     console.log(a)
// };



// for (let b = 0; b < checkAnswer.length; b++) {
//     checkAnswer[b].onclick = () => {
//         let sum = 0;
//         resultActive.innerHTML = sum;
//         console.log(sum);
//     }
// };    // получить все элементы + событие при нажатий
