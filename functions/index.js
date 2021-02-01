let table = (studentScore, totalScore) => {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error(401)
    } 

    let studentPercent = (studentScore / totalScore) * 100;
        let letter = ''
    
        if (studentPercent >= 90) {
            letter = 'A'
        } else if (studentPercent >= 80) {
            letter = 'B'
        } else if (studentPercent >= 70) {
            letter = 'C'
        } else if (studentPercent >= 60) {
            letter = 'D'
        } else {
            letter = 'F'
        }
    
        return `You got a ${letter} (${studentPercent}%)!`
}

try {
    let result = table(34, 4);
    console.log(result);
} catch (e) {
    console.log(e.message);
}