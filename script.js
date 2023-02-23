// Implemente aqui as funções

// if(( //Vamos fazer primeiro a restrição do sexo masculino
//     (gender==="male" && height>=1.70 && abs>=41) //Homem, pelo menos 1,70m E pelo menos 41 abdominais
//     && (barReps>=6 || barSeconds<=15)  //pelo menos 6 repetições na barra OU no máximo 15 segundos
//     && ((runDistance>=3000 && runTime<=720) || (runDistance>=5000 && runTime<=1200)) //pelo menos 3000m em no máximo 720s OU pelo menos 5000 metros em no máximo 1200s
//     && ((swimDistance>=100 && swimTime<=60) || diveTime<=30) //nadou no mínimo 100 metros em no máximo 60s OU no máximo 30 segundos de mergulho
//     )
//      || ( //Agora, vamos fazer a restrição do sexo feminino
//         (gender==="female" && height>=1.60 && abs>=41) //Mulher, pelo menos 1,60m E pelo menos 41 abdominais 
//         && (barReps>=5 || barSeconds<=12) //pelo menos 5 repetições na barra OU no máximo 12 segundos
//         && ((runDistance>=4000 && runTime<=900) || (runDistance>=6000 && runTime<=1320)) //pelo menos 4000m em no máximo 900s OU pelo menos 6000 metros em no máximo 1320s
//         && ((swimDistance>=100 && swimTime<=60) || diveTime<=30) //nadou no mínimo 100 metros em no máximo 60s OU no máximo 30 segundos de mergulho
//         )){
//     passed=true;
// }else{

// }

// Height
function heightValidation(gender, height){
    if(((gender==="male") && (height>=1.70)) || ((gender==="female") && (height>=1.60))){
        return "TRUE"
    }
    return "FALSE"
}

// Abs
function absValidation(abs){
    if((abs>=41)){
        return "TRUE"
    }
    return "FALSE"
}

// Swim
function swimValidation(swimDistance, swimTime, diveTime){
    if((((swimDistance>=100 && swimTime<=60) || diveTime<=30))){
        return "TRUE"
    }
    return "FALSE"
}

// BarTest
function barTestValidation(gender, barReps, barSeconds){
    if(((gender==="male") && (barReps>=6 || barSeconds<=15)) || ((gender==="female") && (barReps>=5 || barSeconds<=12))){
        return "TRUE"
    }
    return "FALSE"
}

// Run
function runValidation(gender, runDistance, runTime){
    if(((gender="male") && ((runDistance>=3000 && runTime<=720) || (runDistance>=5000 && runTime<=1200))) || ((gender="female") && ((runDistance>=4000 && runTime<=900) || (runDistance>=6000 && runTime<=1320)))){
        return "TRUE"
    } 
    return "FALSE"
}


// gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime
function areCandidateResultsValid(gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime) {
    if( 
    (heightValidation(gender, height) === "TRUE") &&
    (absValidation(abs) === "TRUE") && 
    (swimValidation(swimDistance, swimTime, diveTime) === "TRUE") &&
    (runValidation(gender, runDistance, runTime) === "TRUE") &&
    (barTestValidation(gender, barReps, barSeconds) === "TRUE") 
    ){
    return "TRUE"} else{
        return "FALSE"
    }
}

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


console.log(areCandidateResultsValid())