dia = 1
mes =12
ano = 2003
anoAtual = 2023 
if(ano <= anoAtual){
    if(mes>= 1 && mes <= 12){
        if(dia>= 1 && dia <=31) {
            console.log("data de aniversaria valida")
        }else{
            console.log("dia invalido, deve estar entre 1 e 31")
        }
    }else {
    console.log(" mês invalido, deve estar entre 1 e 12 ")
    }
}