import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useProduct from "../../hooks/useProduct";

const ModalGuitar = () => {
    const { modal, handleModal, guitar, addItemToCart } = useProduct();

    return (
        <Transition.Root show={modal} as={Fragment}>
            <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={handleModal}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">


                            <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                                <button
                                    type="button"
                                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleModal}
                                >
                                    <span className="sr-only">Cerrar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>


                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 sm:mt-0 sm:ml-4 w-full">
                                    <Dialog.Title as="h2" className="text-lg leading-6 font-bold text-gray-900">
                                        {guitar.name}
                                    </Dialog.Title>

                                    <p className="text-gray-500">{guitar.category}</p>

                                    <div className="flex flex-col mt-10 items-center">
                                        <img src={guitar.image} alt={`${guitar.name} image`} className="w-[250px]" />
                                        <p className="mt-10 text-lg text-center">{guitar.description} </p>
                                        <div className="w-full flex gap-2 justify-between">
                                            <p className="mt-10 text-2xl text-primary font-bold">$ {guitar.price} </p>
                                            <button
                                                className="w-auto px-7 bg-primary rounded-lg text-secondary font-bold py-3 mt-8 hover:opacity-95 transition-colors duration-100 text-lg"
                                                onClick={() => addItemToCart(guitar)}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default ModalGuitar