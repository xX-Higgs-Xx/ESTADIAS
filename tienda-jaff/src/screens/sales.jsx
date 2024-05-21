import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const products = [
    {
        id: 1,
        name: 'Basic Tee 6-Pack',
        href: '#',
        images: [
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: '$192',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee 6-Pack',
        href: '#',
        images: [
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: '$192',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee 6-Pack',
        href: '#',
        images: [
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: '$192',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee 6-Pack',
        href: '#',
        images: [
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: '$192',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee 6-Pack',
        href: '#',
        images: [
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
            'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        ],
        imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
        price: '$192',
        color: 'Black',
    },
];

const Sales = () => {
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [currentImageIndices, setCurrentImageIndices] = useState({});
    const [selectedSection, setSelectedSection] = useState('');
    const [selectedSegment, setSelectedSegment] = useState('');

    useEffect(() => {
        const storedSection = localStorage.getItem('selectedSection');
        const storedSegment = localStorage.getItem('selectedSegment');
        if (storedSection) setSelectedSection(storedSection);
        if (storedSegment) setSelectedSegment(storedSegment);
    }, []);

    const handleNextImage = (product) => {
        setCurrentImageIndices((prevState) => {
            const newIndex = ((prevState[product.id] || 0) + 1) % product.images.length;
            return {
                ...prevState,
                [product.id]: newIndex,
            };
        });
    };

    const handlePrevImage = (product) => {
        setCurrentImageIndices((prevState) => {
            const newIndex = ((prevState[product.id] || 0) - 1 + product.images.length) % product.images.length;
            return {
                ...prevState,
                [product.id]: newIndex,
            };
        });
    };

    const getCurrentImageIndex = (product) => {
        return currentImageIndices[product.id];
    };

    const handleSelectSection = (sectionName, segmentName) => {
        setSelectedSection(sectionName);
        setSelectedSegment(segmentName);
        localStorage.setItem('selectedSection', sectionName);
        localStorage.setItem('selectedSegment', segmentName);
    };

    return (
        <>
            <Navbar onSelectSection={handleSelectSection} />
            <div className="bg-white mt-28 mx-10 lg:mx-0">
                <div className="py-16 sm:py-24">
                    <div className="text-center mb-10">
                        <h3 className="text-sm font-bold">{selectedSegment}</h3>
                        <h1 className="text-3xl font-bold">{selectedSection}</h1>
                    </div>
                    <div className="flex flex-wrap">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className={`group relative w-full h-full sm:w-1/2 lg:w-1/4 transition-all duration-300 ${hoveredProductId === product.id ? 'border border-black' : ''
                                    }`}
                                onMouseEnter={() => {
                                    setHoveredProductId(product.id);
                                    setCurrentImageIndices((prevState) => ({
                                        ...prevState,
                                        [product.id]: 1,
                                    }));
                                }}
                                onMouseLeave={() => setHoveredProductId(null)}
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 lg:aspect-none lg:h-full relative">
                                    <img
                                        src={
                                            hoveredProductId === product.id
                                                ? product.images[getCurrentImageIndex(product)]
                                                : product.images[0]
                                        }
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-opacity duration-500"
                                    />
                                    {hoveredProductId === product.id && (
                                        <>
                                            <button
                                                onClick={() => handlePrevImage(product)}
                                                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-full p-2 z-10"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M15 6l-6 6l6 6" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleNextImage(product)}
                                                className="absolute right-0 top-1/2 transform -translate-y-1/2 h-full p-2 z-10"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M9 6l6 6l-6 6" />
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                </div>
                                <div className="flex justify-around">
                                    <div>
                                        <h3 className="text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </>
    );
};

export default Sales;
