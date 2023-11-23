import Guitar from "../Guitar";
import useProduct from "../../hooks/useProduct"
import { useEffect } from "react";

const ProductsList = () => {
    const { guitars, getProducts } = useProduct();

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
            {
                guitars?.length !== 0 ?
                    guitars.map(guitar => (
                        <Guitar
                            key={guitar.id}
                            info={guitar}
                        />
                    )) :
                    null
            }
        </div >
    )
}

export default ProductsList