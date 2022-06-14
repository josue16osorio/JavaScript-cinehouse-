function nota(x,y,z){
    var media=(x+y+z)/3
    if(media>=7){
        console.log("aprovado")
    }else if((media >=5||media<7)){
        console.log("recuperação")

    }else{
        console.log("reprovado")
    }
}
nota(5,6,7)