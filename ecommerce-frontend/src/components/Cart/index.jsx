import useProduct from "../../hooks/useProduct"
import CartItem from "../CartItem"
import { enableBodyScroll } from 'body-scroll-lock';

const Cart = () => {
    const { setOpen, cart } = useProduct();

    return (
        <div className="min-h-screen max-h-screen flex w-full justify-between fixed top-0 left-0 z-50">
            <div
                className="w-1/4 md:w-1/3 lg:w-3/5 xl:w-[70%] bg-black opacity-50 z-50 hover:cursor-pointer"
                onClick={() => {
                    setOpen()
                    enableBodyScroll(document.body)
                }}
            ></div>

            <div className="flex flex-col items-start w-3/4 md:w-2/3 lg:w-2/5 xl:w-[30%] gap-8 bg-white p-4 overflow-y-auto">
                <button
                    className="text-4xl rounded-full hover:bg-gray-100"
                    onClick={() => {
                        setOpen()
                        enableBodyScroll(document.body)
                    }}
                >
                    &times;
                </button>

                <div className="flex flex-col gap-14 justify-center items-center [&>*:last-child]:border-none">
                    {
                        cart.length !== 0 ?
                            cart.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                />
                            ))
                            :
                            <p className="text-gray-600 text-xl">No items on the cart</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart