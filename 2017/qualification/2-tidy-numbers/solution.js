/**
 * @param {string} N
 */
function solve(N) {
    let arr = N.split('').map(m => +m);

    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i - 1] > arr[i]) {
            for(let j = i; j < arr.length; j++) {
                arr[j] = 9;
            }

            if(arr[i] !== 0) {
                arr[i - 1]--;
            } else {
                if(i - 1 >= 0) {
                    let slice = false;

                    for(let j = i - 1; j >= 0; j--) {
                        if(arr[j] === 1) {
                            arr[j] = 9;
                            slice = true;
                        }  else {
                            arr[j]--;
                            slice = false;
                            break;
                        }
                    }

                    if(slice) {
                        arr.splice(i, 1);
                    }
                } else {
                    arr[i - 1]--;
                }
            }
        }
    }

    return arr.join('').replace(/^0+/, '');
}

module.exports = solve;