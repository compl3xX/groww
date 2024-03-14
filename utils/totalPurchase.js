const totalPurchase = (orders) => {
    let totalCost = 0;
    for (let i = 0; i < orders.length; i++) {
        totalCost += (orders[i].price * orders[i].quantity)
    }
    return totalCost.toFixed(3);
}

export default totalPurchase

