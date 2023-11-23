import PropTypes from 'prop-types';
import useProduct from "../../hooks/useProduct"

const Guitar = ({ info }) => {
    const { getProduct, handleModal } = useProduct();
    const { id, name, price, image } = info;

    return (
        <>
            <div className="flex flex-col items-center bg-secondary rounded-xl text-white border-2 border-secondary">
                <img src={image} className="p-0.5 rounded-t-xl h-auto" alt={`${name} image`} />
                <div className="flex flex-col gap-2 text-center px-5 py-8">
                    <p className="font-heading text-3xl">{name}</p>
                    <span className="text-primary font-bold text-xl">$ {price}</span>
                    <button
                        className="w-full bg-primary rounded-lg text-secondary font-bold py-3 mt-8 hover:opacity-95 transition-colors duration-100 text-lg"
                        onClick={() => {
                            getProduct(id)
                            handleModal()
                        }}
                    >
                        View
                    </button>
                </div>
            </div>


        </>
    )
}

Guitar.propTypes = {
    info: PropTypes.object,
};

export default Guitar