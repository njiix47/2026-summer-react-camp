function getLunchMenu(day) {
    
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if (day == '월요일') {
                const menu = '돈가스'
                resolve(menu);
                return;
            
            } else if (day == '화요일') {
                const menu = '비빔밥';
                resolve(menu);
                return;
            
            } else {
                reject(new Error('등록된 급식 정보가 없습니다'));
            
            }
        }, 1000);
    });
    
}


getLunchMenu('월요일')
    .then((day) => {
        console.log(`오늘의 급식 메뉴는 ${menu}입니다`);
    })
    .catch((error) => {
        console.log(`조회 실패 : ${error.message}`)
    })