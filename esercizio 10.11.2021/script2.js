const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const div = (numOne, numTwo) => numOne / numTwo;
const subtraction = (numOne, numTwo) => numOne - numTwo;
const squareRoot = (numOne) => Math.sqrt(numOne);
const powe = (numOne) => Math.pow(numOne);

try{
function calculator(operation, numbers) {

  let totOperation = 0;
  totOperation = operation(...numbers);
  return totOperation;
}


let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");

if (operationChoice === ""){
    throw `operazione vuota`;
    } else if (numbersChoiche ===""){
        throw `nessun numero`;
    }else if (operationChoice === "" && numbersChoiche === ""){
        throw `Non hai inserito nessun parametro`;
    }

const numbers = numbersChoiche.split(",");
const parsedNumbers = [];

for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}

switch(operationChoice) {

    case "somma": 
    console.log(calculator(sum, parsedNumbers));
    break;

    case "moltiplicazione": 
    console.log(calculator(mult, parsedNumbers));
    break;

    case "divisione": 
    console.log(calculator(div, parsedNumbers));
    break;

    case "sottrazione": 
    console.log(calculator(subtraction, parsedNumbers));
    break;

    case "radicequadrata": 
    console.log(calculator(squareRoot, parsedNumbers));
    break;

    case "potenza":
    console.log(calculator(powe, parsedNumbers));

    default: 
    console.log('Operazione non trovata');
}

} catch (err) {

     switch (err){
        case operazione `vuota`:
        console.error("Non hai inserito l'operazione");

        break;

        case nessun `numero`:
            console.error("Non hai inserito nessun numero");
            break;

            case `Non hai inserito nessun parametro`:
                console.error("Non hai inserito nessun parametro");
            break;
     }
    }