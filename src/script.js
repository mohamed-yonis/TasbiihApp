let result = document.querySelector('.result');

function Tasbih(){
    result.textContent= parseInt(result.textContent)+1
    return
}

function reset(){
    result.textContent=0
}