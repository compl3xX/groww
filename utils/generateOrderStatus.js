const randomNumber = Math.floor(Math.random() * 3);

const orderStatus = [{ code: 0, status: 'Pending!! There is some issue' }, { code: 1, status: "Failed!! Retry after some time" }, { code: 2, status: "Success!! Your order is placed" }]

const generateOrderStatus = () => {
    return orderStatus[randomNumber];
}


export default generateOrderStatus
