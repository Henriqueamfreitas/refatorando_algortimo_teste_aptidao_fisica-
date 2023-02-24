// Implemente aqui as funções
// Height
function heightValidation(genderParameter, heightParameter){
    if(((genderParameter==="male") && (heightParameter>=1.70)) || ((genderParameter==="female") && (heightParameter>=1.60))){
        return "TRUE"
    }
    return "FALSE"
}

// Abs
function absValidation(absParameter){
    if((absParameter>=41)){
        return "TRUE"
    }
    return "FALSE"
}

// Swim
function swimValidation(swimDistanceParameter, swimTimeParameter, diveTimeParameter){
    if((((swimDistanceParameter>=100 && swimTimeParameter<=60) || diveTimeParameter<=30))){
        return "TRUE"
    }
    return "FALSE"
}

// BarTest
function barTestValidation(genderParameter, barRepsParameter, barSecondsParameter){
    if(((genderParameter==="male") && (barRepsParameter>=6 || barSecondsParameter<=15)) || ((genderParameter==="female") && (barRepsParameter>=5 || barSecondsParameter<=12))){
        return "TRUE"
    }
    return "FALSE"
}

// Run
function runValidation(genderParameter, runDistanceParameter, runTimeParameter){
    if(
        (((genderParameter === "male") && ((runDistanceParameter>=3000 && runTimeParameter<=720))) || ((genderParameter === "male") && (runDistanceParameter>=5000 && runTimeParameter<=1200))) ||
        (((genderParameter === "female") && ((runDistanceParameter>=4000 && runTimeParameter<=900))) || ((genderParameter === "female") && (runDistanceParameter>=6000 && runTimeParameter<=1320)))
    ){
        return "TRUE"
    } 
    return "FALSE"
}


function areCandidateResultsValid(genderParameter2, heightParameter2, barRepsParameter2, barSecondsParameter2, absParameter2, runDistanceParameter2, runTimeParameter2, swimDistanceParameter2, swimTimeParameter2, diveTimeParameter2) {
    if( 
    (heightValidation(genderParameter2, heightParameter2) == "TRUE") &&
    (absValidation(absParameter2) == "TRUE") && 
    (swimValidation(swimDistanceParameter2, swimTimeParameter2, diveTimeParameter2) == "TRUE") &&
    (runValidation(genderParameter2, runDistanceParameter2, runTimeParameter2) == "TRUE") &&
    (barTestValidation(genderParameter2, barRepsParameter2, barSecondsParameter2) == "TRUE") 
    ){
    return "TRUE"} else{
        return "FALSE"
    }
}

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
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
// function showMessage(message){
//     console.log(message)
// }

console.log(areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime))
