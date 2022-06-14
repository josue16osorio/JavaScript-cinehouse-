var catalogo=[

{

    codigo: 1,
    titulo: "O carro", 
    duracao:2, 
    atores:"Carlos",
    anoDeLancamento:1980,
    emCartaz:false },

 {
        codigo: 2,
        titulo: "A Casa", 
        duracao:2, 
        atores:"Amanda",
        anoDeLancamento:1983,
        emCartaz:true }
    
]

/* Filme para ser adicionado */

var filme ={
    codigo: 3,
    titulo: "O muro", 
    duracao:2.3, 
    atores:"Helena",
    anoDeLancamento:1973,
    emCartaz:true 
}


/* Função Adicionar Filme*/

function adicionaFilme(filme){
    
    catalogo.push(filme)
    
    console.log("Filme adicionado com sucesso!")
    console.log(catalogo)
}

/* Função Buscar Filme */

function buscarFilme(codigo){

   for(var i =0; i<catalogo.length;i++){

    if(catalogo[i].codigo===codigo){
        console.log( catalogo[i])
        console.log("filme encontrado!")
    }else{
        console.log("filme não encontrado!")
    }
} 
}

/* Função Alterar Status em Caartaz*/

function alterarStatusEmCartaz(codigo){

    for(var i =0; i<catalogo.length;i++){
 
     if(catalogo[i].codigo==codigo && catalogo[i].emCartaz==true){
        catalogo[i].emCartaz=false
        console.log("Alterado para indisponível")
     }else if(catalogo[i].codigo==codigo && catalogo[i].emCartaz==false){
        catalogo[i].emCartaz=true
        console.log("Alterado para disponível")
     }
    }
}