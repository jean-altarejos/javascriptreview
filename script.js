
//BMI Calculator
function bmiCalculator (weight, height){
    let bmi = weight / Math.pow(height, 2);
    document.getElementById('bmi').innerHTML = Math.round(bmi);
}

//Random Number
function random (){
    let n = Math.random();
    n = n * 6;
    n = Math.floor(n) + 1;
    document.getElementById('random').innerHTML = n;
}

//Love Calculator
function randomNumber(){
    let num = Math.random();
    num = num * 100;
    num = Math.floor(num) + 1;
    alert("Love Calculator: " + num + "%");

    if (num >= 85)
    {
        alert("Wow you are so inlove!!");
    } 
    else 
    {
        alert("You got work to do mate!");
    }
}