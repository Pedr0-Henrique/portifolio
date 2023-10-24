let bim1 = document.getElementById('bimestre1')
let bim2 = document.getElementById('bimestre2')
let bim3 = document.getElementById('bimestre3')
let bim4 = document.getElementById('bimestre4')

function entrar() {
    let nota = bim1.value


    if (bim1.value > 5) {
        document.querySelector('.status').innerHTML = 'você passou'
    }
    else {
        document.querySelector('.status').innerHTML = 'você esta reprovado'
    }
    let nota2 = bim2.value

    if (bim2.value > 5) {
        document.querySelector('.status2').innerHTML = 'você passou'
    }
    else {
        document.querySelector('.status2').innerHTML = 'você esta reprovado'
    }
    let nota3 = bim3.value

    if (bim3.value > 5) {
        document.querySelector('.status3').innerHTML = 'você passou'
    }
    else {
        document.querySelector('.status3').innerHTML = 'você esta reprovado'
    }
    let nota4 = bim4.value

    if (bim4.value > 5) {
        document.querySelector('.status4').innerHTML = 'você passou'
    }
    else {
        document.querySelector('.status4').innerHTML = 'você esta reprovado'
    }
}







