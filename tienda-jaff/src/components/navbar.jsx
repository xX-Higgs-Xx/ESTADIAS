import * as React from 'react'
import '../output.css'
import Button from './Button';


const navbar = () => {
    let Segmentos = [
        { name: "DAMA", link: "/" },
        { name: "CABALLEROS", link: "/" },
        { name: "HOGAR Y ESTILO DE VIDA", link: "/" },
        { name: "BOOKS", link: "/" },
        { name: "ANTONIO FIGUEROA", link: "/" },
        { name: "UNIFORMES EMPRESARIALES", link: "/" },
    ];

    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-black py-4 p-3">
                <div className="cursor-pointer flex items-center">
                    <span className="text-3x1">
                        <img src="../../src/assets/img/logo.png" alt="logo" className="h-20" />
                    </span>
                </div>
                <ul className="md:flex md:items-center">
                    {
                        Segmentos.map((Link) => (
                            <li key={Link.name} className="md:ml-8 text-x1">
                                <a href={Link.link} className="text-gray-100 hover:text-gray-800 duration-500">{Link.name}</a>
                            </li>
                        ))
                    }
                    <Button />
                </ul>
            </div>
        </div>
    )
}

export default navbar;
