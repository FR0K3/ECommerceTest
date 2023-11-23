import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'
import projectServices from '../services/projectServices';
import categoryServices from '../services/categoryServices';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [guitars, setGuitars] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("Guitarras Eléctricas");
    const [guitar, setGuitar] = useState({});
    const [modal, setModal] = useState(false);
    const [open, setOpen] = useState(false);
    const [cart, setCart] = useLocalStorage([], 'cart');

    useEffect(() => {
        getProducts(category);
    }, [category]);

    const getProducts = async () => {
        const guitarsTemp = await projectServices.fetchProducts(category);
        setGuitars(guitarsTemp);
    }

    const getProduct = async (id) => {
        const guitarTemp = await projectServices.fetchProduct(id);
        setGuitar(guitarTemp);
    }

    const getCategories = async () => {
        const categoriesTemp = await categoryServices.fetchCategories();
        setCategories(categoriesTemp);
    }

    const addItemToCart = (item) => {
        setCart(cart => [...cart, item]);
        handleModal();
        toast.success("Product added to cart");
    }

    const deleteItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
    }

    const handleGuitar = (guitar) => {
        setGuitar(guitar);
    }

    const handleModal = () => {
        setModal(!modal);
    }

    return (
        <ProductContext.Provider
            value={{
                guitars,
                guitar,
                handleGuitar,
                modal,
                handleModal,
                getProducts,
                getProduct,
                getCategories,
                category,
                categories,
                setCategory,
                cart,
                open,
                setOpen,
                addItemToCart,
                deleteItem
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export {
    ProductProvider
}

ProductProvider.propTypes = {
    children: PropTypes.element.isRequired
};

export default ProductContext 