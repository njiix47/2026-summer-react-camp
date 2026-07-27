const calculateSquare = new Promise((resolve) => {
    
    const number = 7;

    console.log("계산을 시작합니다");

    setTimeout(() => {
        const result = number * number;
        resolve(result); 
    }, 1000);
    
});

calculateSquare.then((result) => {
    console.log(`계산결과 : ${result}`);
});