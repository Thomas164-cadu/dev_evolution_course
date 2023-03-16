/**
 * Leitura de arquiv com Node
 */

fs.readFile();

//nvm wich 16.18.0 mostra o caminho da instalação da versão do node

/**
 * Módulos
 */

module.exports();

//IXC utiliza o seguinte formato

module.exports(
    class Function {
        constructor(){

        }

        soma(a,b){
            return a+ b;
        }
    }
)

/**
 * O callback pode gerar um callback hell, com muitos aninhamentos, para isso: Promises
 */

function soAceitaPares(numero){
    return new Promise( (resolve, reject) =>{
        if(numero % 2 == 0){
            resolve(true);
        }else{
            reject(new Error("Deu ruim"))
        }
    })
}

soAceitaPares(2).then((result)=>console.log(result)).catch((error)=>console.log(error));

//Também tem a função de Promise.finally

soAceitaPares(2).then((result)=>console.log(result)).catch((error)=>console.log(error)).finally(()=>console.log("Sempre executado"))

//E um muito importante Promisse.all promises independentes

Promise.all([
    soAceitaPares(2),
    soAceitaPares(4),
    soAceitaPares(6)
]).then(([res1,res2,res3])=>{

}).catch(err =>{

})

/**
 * async await, a resolução para aninhamentos de Promises e o promise hell
 */

async function soAceitaPares(num){
    if(num % 2 === 0)
        return true
    else
        throw "err"
}

async function testaPares(){
    try{
        const resultado = await soAceitaPares(2)

        console.log(resultado)
    }catch(error){

        console.log(error);
    }
}


