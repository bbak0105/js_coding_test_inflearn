/************ 내 풀이 ************/
const n = 7;
const arr = [128, 460, 603, 40, 521, 137, 123]

function solution(n, arr) {
    let sumArr = [];

    for(i=0; i<n; i++) {
        let sum = 0;
        let item = String(arr[i]).split("");
        item.forEach(eachNum => sum += Number(eachNum));
        sumArr[i] = {'sum': sum, 'origin': arr[i] };
    }

    let max = {'sum': 0, 'origin': 0};

    sumArr.forEach((sumObj) => {
        if(max['sum'] < sumObj['sum']) {
            max = sumObj;
        } else if(max['sum'] === sumObj['sum']) {
            if(max['origin'] < sumObj['origin']) max = sumObj;
        }
    });

    return max['origin']
}

console.log(solution(n, arr));


/************ 강사님 풀이 ************/

