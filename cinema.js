const fs=require('fs')
let catalogo=require('./database/catalogo.json')
//const fs=require('fs')
//fs.writeFileSync('./database/catalogo.json'.json)
//const catalogos = JSON.stringify(catalogo)
//let catalogos =JSON.parse(catalogo)
//console.log(catalogo)

var filme ={
    codigo: 3,
    titulo: "O muro", 
    duracao:2.3, 
    atores:"Helena", 
    anoDeLancamento:1973,
    emCartaz:true 
}


/* Função Adicionar Filme */

function adicionaFilme(filme){
    
    catalogo.catalogo.push(filme)
    
    console.log("Filme adicionado com sucesso!")
    
    //console.log(catalogo.catalogo)
    const json= JSON.stringify( catalogo)
   
fs.writeFileSync('./database/catalogo.json',json)
}

/* Função Buscar Filme */


function buscarFilme(codigo){

   for(var i =0; i<catalogo.catalogo.length;i++){

    if(catalogo.catalogo[i].codigo===codigo){
        console.log( catalogo.catalogo[i])
        console.log("filme encontrado!")
    }
}
}
/* Função Alterar Status em Cartaz*/

function alterarStatusEmCartaz(codigo){

    for(var i =0; i<catalogo.catalogo.length;i++){
 
     if(catalogo.catalogo[i].codigo==codigo && catalogo.catalogo[i].emCartaz==true){
        catalogo.catalogo[i].emCartaz=false
        console.log("Alterado para indisponível")
     }else if(catalogo.catalogo[i].codigo==codigo && catalogo.catalogo[i].emCartaz==false){
       catalogo.catalogo[i].emCartaz=true
        console.log("Alterado para disponível")
     }
    }
}

