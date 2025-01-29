let send = document.getElementById('btn-send');
let number_input = document.getElementById('num')
let h3 = document.querySelector('h3')

let count = 0
send.addEventListener('click', () =>{
count = number_input.value
h3.innerHTML = number_input.value
});


let plus = document.getElementById('plus')



plus.addEventListener('click', () => {
    count++;
    h3.innerHTML = count
})


let minus = document.getElementById('minus')

minus.addEventListener('click', () => {
    count--;
    h3.innerHTML = count
})
