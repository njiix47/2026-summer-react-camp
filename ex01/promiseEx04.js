function getGameScore() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(80);
        }, 1000);
    });
}

getGameScore()
    .then((score) => {
        console.log(`기본 점수 : ${score}점`);

        const bounsScore = score + 20;
        console.log(`보너스 점수 적용 : ${bounsScore}점`);

        return bounsScore;

    })
    .then((bounsScore) => {
        const lastScore = bounsScore * 2;
        return lastScore;

    })
    .then((lastScore) => {
        console.log(`최종 점수 : ${lastScore}`);

    })
    .catch((error) => {
        console.log(`오류 : ${error.message}`);
        
    });