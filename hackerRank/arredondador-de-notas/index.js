
const arr = [73, 94, 38, 33];

function arredondaNota(arr) {
    const isMulti = arr.map((num) => {
        if ((num + 1) % 5 === 0 && num >= 35 && num <= 100) {
            return num + 1
        }
        if ((num + 2) % 5 === 0 && num >= 35 && num <= 100) {
            return num + 2
        }
        return num;
    })
    return isMulti;
}


console.log(arredondaNota(arr));

