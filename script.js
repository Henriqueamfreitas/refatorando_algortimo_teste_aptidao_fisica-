function heightValidation(genderParameter, heightParameter) {
    if ((
            (genderParameter === "male" && heightParameter >= 1.70) || 
            (genderParameter === "female" && heightParameter >= 1.60)
    )) {
        return true;
    }
    return false;
}

function absValidation(absParameter) {
    if (absParameter >= 41) {
        return true;
    }
    return false;
}

function swimValidation(swimDistanceParameter, swimTimeParameter, diveTimeParameter) {
    if (((swimDistanceParameter >= 100 && swimTimeParameter <= 60) || diveTimeParameter <= 30)) {
        return true;
    }
    return false;
}

function barTestValidation(genderParameter, barRepsParameter, barSecondsParameter){
    if(
        ((genderParameter==="male") && (barRepsParameter>=6 || barSecondsParameter<=15)) || 
        ((genderParameter==="female") && (barRepsParameter>=5 || barSecondsParameter<=12))
    ){
        return true
    }
    return false
}

function runValidation(genderParameter, runDistanceParameter, runTimeParameter) {
    if (
        (genderParameter === "male" && ((runDistanceParameter >= 3000 && runTimeParameter <= 720) || 
                                       (runDistanceParameter >= 5000 && runTimeParameter <= 1200))) ||
        (genderParameter === "female" && ((runDistanceParameter >= 4000 && runTimeParameter <= 900) || 
                                         (runDistanceParameter >= 6000 && runTimeParameter <= 1320)))
    ) {
        return true;
    }
    return false;
}

function areCandidateResultsValid(
    genderParameter2, heightParameter2, barRepsParameter2, barSecondsParameter2, absParameter2,
    runDistanceParameter2, runTimeParameter2, swimDistanceParameter2, swimTimeParameter2, diveTimeParameter2
) {
    if (
        heightValidation(genderParameter2, heightParameter2) &&
        absValidation(absParameter2) &&
        swimValidation(swimDistanceParameter2, swimTimeParameter2, diveTimeParameter2) &&
        runValidation(genderParameter2, runDistanceParameter2, runTimeParameter2) &&
        barTestValidation(genderParameter2, barRepsParameter2, barSecondsParameter2)
    ) {
        return true;
    } else {
        return false;
    }
}

let gender = process.argv[2] 
let height = process.argv[3] 
let barReps = process.argv[4]  
let barSeconds = process.argv[5]
let abs = process.argv[6] 
let runDistance = process.argv[7]
let runTime = process.argv[8]  
let swimDistance = process.argv[9]
let swimTime = process.argv[10]  
let diveTime = process.argv[11]  

const areCandidateValid = areCandidateResultsValid(
    gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime
);

let results = areCandidateResultsValid(
    gender, height, barReps, barSeconds, abs, runDistance, runTime, swimDistance, swimTime, diveTime
)
let stringedResults = results.toString()
console.log(stringedResults.toUpperCase())


