let a = `import turtle *
k = 15
left(90)
speed(10)
for i in range(6):
    forward(10 * k)
    right(60)
up()
for x in range(19, -10, - 1):
    for y in range(20, -10, - 1):
        goto(x * k, y * k)
        dot(4)
done()`;
console.log(a)
console.log(a.replaceAll('   ',' '))
console.log(a.replaceAll('   ','  '))

const text = document.querySelector('.test__textarea');
const buttonTextarea = document.querySelector('.submit__textarea');
buttonTextarea.onclick = function () {
    // console.log(text.value);
    if (text.value == a || text.value == a.toUpperCase() || text.value == a.toLowerCase() || text.value == a.replaceAll('   ',' ') || text.value == a.replaceAll('   ','  ') ) {
        console.log('Верно')
    }
    else {
        console.log('Неверно')
    }
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