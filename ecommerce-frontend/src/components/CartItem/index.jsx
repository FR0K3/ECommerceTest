import { IconTrash } from "@tabler/icons-react";
import PropTypes from "prop-types"
import useProduct from "../../hooks/useProduct";

const CartItem = ({ item }) => {
    const { deleteItem } = useProduct();

    return (
        <div className="flex flex-row justify-center items-center gap-3 border-b border-gray-300 pb-6">
            <img src={item.image} alt="Cart Image" className="w-[175px]" />
            <div className="flex flex-col justify-start items-start">
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-lg">{item.name}</p>
                <p className="text-2xl font-heading text-primary">$ {item.price}</p>
            </div>
            <button
                className="hover:bg-gray-200 rounded-full p-2"
                onClick={() => deleteItem(item.id)}
            >
                <IconTrash />
            </button>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
};

export default CartItem