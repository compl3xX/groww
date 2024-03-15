import OrderList from "@/components/OrderList";
import { OrderSummary } from "@/components/OrderSummary";
import Button from "@/components/Button";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import TotalAmt from "@/components/TotalAmt";

export default async function Home() {


  return (
    <div className="flex  justify-center items-center m-5 flex-col ">
      <div className="border-2 border-black-600 p-5 w-[21rem] lg:w-[30rem]">
        <h1 className="font-bold text-lg text-center">Checkout</h1>
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-gray-600 mt-5 text-lg ">Delivery Detail</h2>
          <div className="flex flex-row items-center gap-1 text-sm  bg-gray-200 w-[10rem] p-2 rounded-sm mt-5" ><IoLocationOutline />Kanpur,UttarPradesh</div>
          <div className="flex flex-row items-center gap-3 text-sm mt-5 border-2 border-gray-300 w-[100%] p-2 rounded-sm"><MdOutlineLocalPhone />8279637415</div>
          <OrderList />
          <OrderSummary />
          <TotalAmt />
          <Button route="payment">Payment</Button>
        </div>
      </div>
    </div>
  );
}
