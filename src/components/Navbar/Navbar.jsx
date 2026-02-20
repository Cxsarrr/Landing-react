import React from 'react'
import Logo from '../../assets/Logo.png'

const navbarLinks = [
    {
        id:1,
        title:"Inicio",
        link: "/"
    },
    {
        id:2,
        title:"About us",
        link: "#"
    },
    {
        id:3,
        title:"Concact",
        link: "#"
    },
    {
        id:4,
        title:"Support",
        link: "#"
    }
]

const navbarNetworks = [
    {
        id:1,
        title:"Instagram",
        link:"https://www.instagram.com",
        icon:'bi bi-instagram'
    },
    {
        id:1,
        title:"Tiktok",
        link:"https://www.tiktok.com",
        icon:'bi bi-tiktok'
    },
    {
        id:1,
        title:"Facebook",
        link:"https://www.facebook.com",
        icon:'bi bi-facebook'
    },
    {
        id:1,
        title:"X",
        link:"https://www.x.com",
        icon:'bi bi-x'
    },
]
const Navbar = () => {
    return (
    <nav>
        <div className='flex justify-between items-center sm:px-12 sm:px-4 py-3'>
            <div>
                <img src={Logo} alt='Logo' className='w-[100px]'/>
            </div>
                <div>
                    <ul>
                        {/* Recorrer la lista de navbarlinks para renderizar por ID, mostrando el titulo y redireccionando a link */}
                        {navbarLinks.map((link)=>(
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul>
                        {navbarNetworks.map((link)=>(
                            <li key={link.id}>
                                <a href={link.link}>
                                    <i className={`${link.icon}`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
        </div>
    </nav>
    )
}

export default Navbar
