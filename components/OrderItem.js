import Image from 'next/image'

const OrderItem = ({ order }) => {
    return (
        <div className="flex flex-row mt-4 gap-5  p-5">
            <Image
                src={order.image}
                width={50}
                height={50}
                alt="Product Img"
                style={{ width: 'auto', height: 'auto' }}
            />
            <div className="flex gap-1">
                <div>
                    <div className="sm:w-[10rem] lg:w-[20rem]">{order.title}</div>
                    <div className="font-bold">Rs.{order.price * order.quantity}</div>
                </div>
                <div className="font-bold p-1">{order.quantity}</div>
            </div>
        </div>
    )
}

export default OrderItem