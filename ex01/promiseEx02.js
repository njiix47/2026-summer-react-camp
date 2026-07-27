function getProductPrice(productName) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productName === '') {
                reject(new Error('상품명을 입력하세요'));
                return;
            } 

            if (productName !== '노트북') {
                reject(new Error('상품을 찾을 수 없습니다'))
                return;
            }

            resolve(120000);
        }, 1000);
    });
    
}

getProductPrice('스마트폰') 
    .then((price) => {
        console.log(`상품 가격은 ${price}원 입니다`);
        
    })
    .catch((error) => {
        console.log(`오류 : ${error.message}`);
    });