import { useEffect } from "react";
import Header from "./components/Header"
import ModalGuitar from "./components/ModalGuitar";
import ProductsList from "./components/ProductsList"
import useProduct from "./hooks/useProduct";
import Cart from "./components/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const { getCategories, categories, setCategory, category, open } = useProduct();

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>
            <Header />

            <main className="w-[90%] max-w-screen-xl mx-auto py-20">
                <h2 className="font-heading text-5xl text-center">Our products</h2>

                <div className="flex flex-row justify-between mt-10">

                    <div className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center md:justify-between gap-3">
                        <label className="font-bold text-lg">Categories:</label>
                        <select
                            className="w-full hover:cursor-pointer md:w-80 bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.name}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                </div>

                <ProductsList />
            </main>

            {
                open && <Cart />
            }

            <ModalGuitar />
            <ToastContainer />
        </>
    )
}

export default App
