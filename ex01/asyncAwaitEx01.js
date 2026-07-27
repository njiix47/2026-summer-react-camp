async function orderProduct() {
  try {
    const product = await checkStock('키보드');
    const paymentResult = await makePayment(product);
    const deliveryResult = await prepareDelivery(paymentResult);

    console.log(deliveryResult);

  } catch (error) {
    console.log(`주문 실패: ${error.message}`);
    
  }
}
orderProduct();