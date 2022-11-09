
const buttonShowAnswer = document.querySelector('.button__answer');
const buttonShowAnswer1 = document.querySelector('.btn');
const buttonShowAnswer2 = document.querySelector('.btn1');

const showAnswer = document.querySelector('.text__answer');
const showAnswer1 = document.querySelector('.text__answer1');
const showAnswer2 = document.querySelector('.text__answer2');


buttonShowAnswer.addEventListener("click", () => {
    showAnswer.classList.toggle('_active'); 
}) 



buttonShowAnswer1.onclick = () => {
    showAnswer1.classList.toggle('_active'); 
}



buttonShowAnswer2.onclick = () => {
    showAnswer2.classList.toggle('_active'); 
}


// -----ANSWER----------

// import turtle *
// k = 15
// left(90)
// speed(10)
// for i in range(6):
//     forward(10 * k)
//     right(60)
// up()
// for x in range(19, -10, - 1):
//     for y in range(20, -10, - 1):
//         goto(x * k, y * k)
//         dot(4)
// done() 