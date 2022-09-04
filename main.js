
let text = document.getElementById("text");
let count = document.getElementById("count");

function count(){
    let charc = text.value;
    let charcleng = text.value.length;
    count.innerText = `${charcleng}`;
}