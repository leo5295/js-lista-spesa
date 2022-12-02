const spesa = ('mele, pere, albicocche, pomodori')

let i = 0;

while (i < spesa.length) {
    console.log(spesa)
    i++;
    document.getElementById("list").innerHTML = spesa;
}
