// William Wang

let combinedString = ""
process.argv.slice(2).forEach((element,index) => {
    Array.from(element).forEach(letter => {
        switch (letter) {
            case '0':
                combinedString +='Zero'
                break;
            case '1':
                combinedString +='One'
                break;
            case '2':
                combinedString +='Two'
                break;
            case '3':
                combinedString +='Three'
                break;
            case '4':
                combinedString +='Four'
                break;
            case '5':
                combinedString +='Five'
                break;
            case '6':
                combinedString +='Six'
                break;
            case '7':
                combinedString +='Seven'
                break;
            case '8':
                combinedString +='Eight'
                break;
            case '9':
                combinedString +='Nine'
                break;            
        }
    })
    if (index != process.argv.length-3)
        combinedString +=','
});
console.log(combinedString)