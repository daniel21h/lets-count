function count() {
    let start = document.getElementById('txtstart')
    let end = document.getElementById('txtend')
    let step = document.getElementById('txtstep')
    let res = document.getElementById('res')

    // Informando o usuário para escolher valores diferente de 0
    if (start.value.lenght == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //alert('[ERRO] Faltam dados!')

    } else {
        res.innerHTML = 'Contando: <br>'

        //Convertendo lets(= string) em numbers
        let nstart = Number(start.value)
        let nend = Number(end.value)
        let nstep = Number(step.value)

        if (nstep <= 0) {
            alert('Passo inválido! Considerando PASSO = 1')
            nstep = 1
        }

        /* 
        ps.: Teaching Dev
        A contagem mais simples, é contar do início para o fim somando o passo,
        Neste caso podendo utilizar o while, do while ou o for
        */

        if (nstart < nend) {

            //Contagem crescente
            for (let counter = nstart; counter <= nend; counter += nstep) {
                res.innerHTML += `${counter} \u{1F449}`
            }
        } else {

            //Contagem Regressiva
            for (let counter = nstart; counter >= nend; counter -= nstep) {
                res.innerHTML += `${counter} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}