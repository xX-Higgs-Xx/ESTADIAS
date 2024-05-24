import * as React from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const Navbar = ({ onSelectSection }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const Segmentos = [
        {
            name: "DAMA",
            content: [
                { name: "Vestidos", url: "/sales" },
                { name: "Caminas", url: "/sales" },
                { name: "Ceremonia", url: "/sales" },
                { name: "Gran Gala", url: "/sales" },
            ]
        },
        {
            name: "CABALLEROS",
            content: [
                { name: "Camisas", url: "/sales" },
                { name: "Polos y Playeras", url: "/sales" },
                { name: "Chamarras", url: "/sales" },
                { name: "Ropa Interior", url: "/sales" },
                { name: "Trajes", url: "/sales" },
                { name: "Ceremonias", url: "/sales" },
                { name: "Pantalones", url: "/sales" },
                { name: "Shorts", url: "/sales" },
                { name: "Looks Completos", url: "/sales" },
                { name: "Blazer", url: "/sales" },
            ]
        },
        {
            name: "UNISEX",
            content: [
                { name: "Camisas", url: "/sales" },
                { name: "Chamarras", url: "/sales" },
            ]
        },
        {
            name: "HOGAR Y ESTILO DE VIDA",
            content: [
                { name: "Accesorios", url: "/sales" },
                { name: "Snacks", url: "/sales" },
                { name: "Bebidas", url: "/sales" },
                { name: "Ropa de Cama", url: "/sales" },
            ]
        },
        {
            name: "BOOKS",
            content: [
                { name: "COLECCIÓN 2023", url: "/sales" },
                { name: "COLECCIÓN 2022", url: "/sales" },
                { name: "COLECCIÓN 2021", url: "/sales" },
                { name: "COLECCIÓN 2020", url: "/sales" },
            ]
        },
        {
            name: "UNIFORMES EMPRESARIALES",
            content: [
                { name: "Camisas", url: "/sales" },
            ]
        },
    ];

    return (
        <div className="bg-black bg-opacity-75 hover:bg-opacity-100 duration-500 shadow-md w-full z-20 fixed top-0 left-0">
            <div className="w-11/12 block items-center py-4 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white md:block hidden">
                        <a className="text-xs mr-3 flex items-center duration-500 hover:text-orange-400 hover:border-orange-400 border-b-2 hover:pb-1 border-transparent " href="#">
                            Antonio Figueroa
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </a>
                    </div>
                    <div className="cursor-pointer flex justify-center items-center pb-4">
                        <a href="/">
                            <img src="../../src/assets/img/logo.png" alt="logo" className="h-12 ml-4 md:h-20 md:ml-0" />
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white mr-4" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <line x1="4" y1="6" x2="20" y2="6" />
                                    <line x1="4" y1="12" x2="20" y2="12" />
                                    <line x1="4" y1="18" x2="20" y2="18" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className={`md:flex flex-wrap md:space-x-4 hidden ${menuOpen ? 'block' : 'hidden'}`}>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-bag hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" />
                                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle hover:stroke-orange-400 duration-500" width="26" height="26" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </a>
                    </div>
                </div>

                <ul className={`md:flex flex-wrap md:justify-center text-center whitespace-nowrap ${menuOpen ? 'block' : 'hidden'}`}>
                    {Segmentos.map((segmento) => (
                        <li key={segmento.name} className="text-x1 px-4 py-2 md:w-auto md:whitespace-nowrap md:flex-1">
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={`${open ? 'text-orange-400 border-orange-400 border-b-2' : 'text-white'
                                                } hover:text-orange-400 hover:border-orange-400 duration-500 border-b-2 border-transparent w-full`}
                                        >
                                            {segmento.name}
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 w-full">
                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                                                    <div className="py-4">
                                                        <ul>
                                                            {segmento.content.map((contenido, index) => (
                                                                <li key={index} className="mb-2 border-b-2 pb-1 border-transparent hover:border-zinc-300 duration-500">
                                                                    <a className="px-12" href={contenido.url} onClick={() => onSelectSection(contenido.name, segmento.name)}>{contenido.name}</a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
