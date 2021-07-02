var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
var res = document.querySelector('#res')


function calcular(){

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){//verificando se todos os dados foram colocados
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'contando... <br>'
        let i = Number(inicio.value)//transformando as strings em Numbers 
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO = 1  ")
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}  \u{1F449}` // pra colocar o emoji no JS tira o U+ do codigo do emote e coloca \u{1F923} e o codigo dentro.	Só funciona entre crases}
         }
        
        }else {
            //Contagem regressiva
            for(let c = i; c >= f ; c-= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}


