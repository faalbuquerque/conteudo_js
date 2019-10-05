const visor = document.querySelector('.visor');

let v1 = 0;
let v2 = 0;
let operacao;


function capturaValor(numero){

    // if(numero == 'AC'){
    //     visor.textContent = '';
    // } else{
        
    //     // visor.innerHTML = visor.innerHTML + numero;
    //     // visor.innerText += numero; 
    //     visor.textContent += numero;
    // }

    switch(numero){
        case '+':
            operacao = 'mais';
            (visor.textContent == 0) ? visor.textContent = numero : visor.textContent += numero;

            break;
        

        case '-':
            operacao = 'menos';
            (visor.textContent == 0) ? visor.textContent = numero : visor.textContent += numero;

        break;

        case '*':
            operacao = 'produto';
            (visor.textContent == 0) ? visor.textContent = numero : visor.textContent += numero;

            break;

        case '/':
            operacao = 'divisao';
            (visor.textContent == 0) ? visor.textContent = numero : visor.textContent += numero;

        break;

        case 'AC':
            visor.textContent = 0;
            break;

        case 'DEL':
            
            let valor = visor.textContent;

            // console.log(valor[valor.length - 1], valor.length);
            // valor[valor.length - 1].replace();

            (visor.textContent == '') ? visor.textContent = 0 : visor.textContent = valor.substr(0, valor.length -1);

            break;

        default:
            // if(visor.textContent == 0){
            //     visor.textContent = numero;
            // } else{
            //     visor.textContent += numero;
            // }
            
            (visor.textContent == 0) ? visor.textContent = numero : visor.textContent += numero;

            break;
    }

}


function function_operacao(){
    // v1 operacao v2;
    
    // visor.textContent

    switch(operacao){
        case 'mais':
            let valoresMais = visor.textContent.split('+')

            let soma = valoresMais.reduce(function( total ,element){
                return Number(total) + Number(element);
            });
            
            visor.textContent = soma; 
            
            break;
        
        case 'menos':
            let valoresMenos = visor.textContent.split('-')

            let subtracao = valoresMenos.reduce(function( total ,element){
                return Number(total) - Number(element);
            });
            
            visor.textContent = subtracao; 
            
            break;

        case 'produto':
            let valoresProduto = visor.textContent.split('*')

            let produto = valoresProduto.reduce(function( total ,element){
                return Number(total) * Number(element);
            });
            
            visor.textContent = produto; 
            
            break;

        case 'divisao':
            let valoresDivisao = visor.textContent.split('/')

            let divisao = valoresDivisao.reduce(function( total ,element){
                return Number(total) / Number(element);
            });
            
            visor.textContent = divisao; 
            
            break;

    }


    // console.log(visor.textContent.split('+'));
}
