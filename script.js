console.log("Hello, DOM!");

//get element by id
const p = document.getElementById('message');
console.log(p);

//get element by Name
const btn = document.getElementById('btnRate');
console.log(btn);
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked){
             output.innerText = `You're selected: ${rate.value}`; 
        }
      
    });
});

//change background color button
const btn2 = document.getElementById("btnColor");
console.log(btn2);

function random(number) {
    return Math.floor(Math.random() * (number +1));
}

btn2.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});

//////