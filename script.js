// Implemente aqui as funções
// Height
function heightValidation(genderParameter, heightParameter){
    if(((genderParameter==="male") && (heightParameter>=1.70)) || ((genderParameter==="female") && (heightParameter>=1.60))){
        return true
    }
    return false
}

// Abs
function absValidation(absParameter){
    if((absParameter>=41)){
        return true
    }
    return false
}

// Swim
function swimValidation(swimDistanceParameter, swimTimeParameter, diveTimeParameter){
    if((((swimDistanceParameter>=100 && swimTimeParameter<=60) || diveTimeParameter<=30))){
        return true
    }
    return false
}

// BarTest
function barTestValidation(genderParameter, barRepsParameter, barSecondsParameter){
    if(((genderParameter==="male") && (barRepsParameter>=6 || barSecondsParameter<=15)) || ((genderParameter==="female") && (barRepsParameter>=5 || barSecondsParameter<=12))){
        return true
    }
    return false
}

// Run
function runValidation(genderParameter, runDistanceParameter, runTimeParameter){
    if(
        ((genderParameter === "male") && (((runDistanceParameter>=3000 && runTimeParameter<=720)) || ((runDistanceParameter>=5000 && runTimeParameter<=1200)))) ||
        ((genderParameter === "female") && (((runDistanceParameter>=4000 && runTimeParameter<=900)) || ((runDistanceParameter>=6000 && runTimeParameter<=1320))))
    ){
        return true
    } 
    return false
}


function areCandidateResultsValid(genderParameter2, heightParameter2, barRepsParameter2, barSecondsParameter2, absParameter2, runDistanceParameter2, runTimeParameter2, swimDistanceParameter2, swimTimeParameter2, diveTimeParameter2) {
    if( 
    (heightValidation(genderParameter2, heightParameter2) == true) &&
    (absValidation(absParameter2) == true) && 
    (swimValidation(swimDistanceParameter2, swimTimeParameter2, diveTimeParameter2) == true) &&
    (runValidation(genderParameter2, runDistanceParameter2, runTimeParameter2) == true) &&
    (barTestValidation(genderParameter2, barRepsParameter2, barSecondsParameter2) == true) 
    ){
    return true} else{
        return false
    }
}

// Nomeando as Variáveis    
let gender = process.argv[2] // Genero
let height = process.argv[3] // Altura
let barReps = process.argv[4] // Repetições de barra
let barSeconds = process.argv[5] // Tempo de barra em segundos
let abs = process.argv[6] // Abdominais
let runDistance = process.argv[7] // Distancia percorrida em metros
let runTime = process.argv[8] // Tempo total da corrida em segundos
let swimDistance = process.argv[9] // Distancia do nado em metros
let swimTime = process.argv[10] // Tempo total de nado em segundos
let diveTime = process.argv[11] // Tempo total de mergulho em segundos


// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
    gender = process.argv[2], // Genero
    height = process.argv[3], // Altura
    barReps = process.argv[4], // Repetições de barra
    barSeconds = process.argv[5], // Tempo de barra em segundos
    abs = process.argv[6], // Abdominais
    runDistance = process.argv[7], // Distancia percorrida em metros
    runTime = process.argv[8], // Tempo total da corrida em segundos
    swimDistance = process.argv[9], // Distancia do nado em metros
    swimTime = process.argv[10], // Tempo total de nado em segundos
    diveTime = process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
let results = areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime)
let resultss = results.toString()
console.log(resultss.toUpperCase())


