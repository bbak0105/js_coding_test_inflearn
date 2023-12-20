/************ 내 풀이 ************/
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

const n = 7;
const arr = [128, 460, 603, 40, 521, 137, 123]
console.log(solution(n, arr));

/************ 강사님 풀이 ************/
function solution2(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=x.toString().split('').reduce((a, b)=>a+Number(b), 0);
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}

let arr2=[128, 460, 603, 40, 521, 137, 123];
console.log(solution2(7, arr2));