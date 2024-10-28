
function printPatternWithC() {
    console.log('C');
    console.log('-----------------');
    const maxStars = 6;
    for (let i = maxStars; i >= 1; i--) {
        let line = ' '.repeat((maxStars - i) * 2);
     
        line += '* '.repeat(i).trimEnd();
        console.log(line);
    }
}
printPatternWithC();