import { IconShoppingCart } from "@tabler/icons-react"
import useProduct from "../../hooks/useProduct"
import { disableBodyScroll } from 'body-scroll-lock';

const Header = () => {
    const { setOpen, open} = useProduct();

    return (
        <>
            <header className="px-20 bg-banner bg-center bg-cover bg-no-repeat">
                <div className="max-w-screen-xl flex flex-col gap-6 md:flex-row md:gap-0 justify-between items-center mx-auto py-14 text-white">
                    <h3 className="text-7xl font-heading"><span className="text-primary">Guitar</span>Shop</h3>
                    <button
                        className="flex items-center gap-2 font-bold text-xl hover:border-b-4 hover:border-primary"
                        onClick={() => {
                            setOpen(!open)
                            disableBodyScroll(document.body);
                        }}
                    >
                        <IconShoppingCart size={30} />
                        Cart
                    </button>
                </div>
            </header>

        </>
    )
}

export default Header