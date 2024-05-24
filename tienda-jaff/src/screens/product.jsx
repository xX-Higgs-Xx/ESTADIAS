import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import Navbar from "../components/navbar";

const Product = () => {
    const location = useLocation();
    const { product } = location.state;
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Navbar />
            <Navbar />
            <div className="container mt-40 mx-auto p-4">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-4">
                            <div className="product-images sticky top-0 lg:top-4 lg:h-screen flex flex-col items-center justify-center overflow-y-auto">
                                {product.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${product.name} image ${index + 1}`}
                                        className="w-full object-cover rounded-lg mb-4"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 p-6">
                            <div className="flex items-center justify-between">
                                <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-700">
                                    <ArrowLeftIcon className="h-6 w-6" />
                                </button>
                                <HeartIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 mt-4">{product.name}</h1>
                            <p className="text-xl text-gray-600 mt-4">{product.price}</p>
                            <p className="text-lg text-gray-500 mt-2">{product.color}</p>
                            <div className="mt-6 flex items-center space-x-4">
                                <div className="text-lg text-gray-500">Marfil</div>
                                <img src={product.images[0]} alt="color" className="h-8 w-8 rounded-full" />
                            </div>
                            <div className="mt-6">
                                <p className="text-lg text-gray-500 mb-2">Size (IT)</p>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-lg">44</button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-lg">46</button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-lg">48</button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-lg">50</button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-lg">52</button>
                                    <button className="px-4 py-2 bg-gray-200 text-gray-700 text-base font-semibold rounded-lg">54</button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button className="w-full px-4 py-2 bg-black text-white text-base font-semibold rounded-lg hover:bg-gray-800 transition duration-300">Añadir a la cesta</button>
                            </div>
                            <div className="mt-4 text-gray-500">
                                <p>Entrega estimada 28 may - 29 may</p>
                            </div>
                            <div className="mt-6">
                                <p className="text-lg text-gray-500 mb-2">Detalles del producto</p>
                                <p className="text-base text-gray-500">...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
