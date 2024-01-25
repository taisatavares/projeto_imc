


function calcular() {
    const nome1= document.querySelector("#nome1")
    const altura1=document.querySelector("#altura1")
    const peso1=document.querySelector("#peso1")
    const res=document.querySelector("#res")

    if (nome1.value !== '' && altura1.value !== '' && peso1.value !== '') {
        const valor = (peso1.value / (altura1.value * altura1.value)).toFixed(1)

        let classification = ''

        if (valor < 18.5) {
            classification = 'Abaixo do peso'
        } else if (valor < 25) {
            classification = 'Peso normal'
        } else if (valor > 25) {
            classification = 'Acima do peso'
        }

        
        res.value = `Seu IMC é: ${valor} (${classification})`
        }else {
        res.value = 'Preencha os campos'
        }
}



    
