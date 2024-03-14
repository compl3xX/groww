import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineSensorOccupied } from "react-icons/md";

const paymentIcon = (type) => {

    if (type == 'UPI') return <span><MdOutlineSensorOccupied /></span>
    else return <span><CiCreditCard1 /></span>
}

export default paymentIcon