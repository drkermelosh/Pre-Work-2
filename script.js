const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click",function(){
    const cost = document.querySelector(".bill");
    const tip = document.querySelector(".tip");
    console.log(cost.value * tip.value/100);
    let tip_final = (cost.value * tip.value/100).toFixed(2);
    let temp = `<h1>You should tip $${tip_final} on $${cost.value}</h1>`;
    output.innerHTML = temp;
})