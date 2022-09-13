function showVerticalMessage(str) {
    if(!str) return str;

    str = str.substring(0, 7);

    for (let char of str) {
        if (char === 's') {
            console.log(char.toUpperCase());
            continue;
        }
        console.log(char);
    }
}


showVerticalMessage('stradaaaaaaaaaaaa')