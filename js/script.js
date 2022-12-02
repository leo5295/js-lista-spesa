const spesa = ['mele', 'pere', 'albicocche', 'pomodori']
let container = document.querySelector('li')

let i = 0;

while (i < spesa.length) {
    console.log(spesa[i])
    i++;

    let lista = document.createElement('li')
    lista.innerText = lista[i];
    
}
