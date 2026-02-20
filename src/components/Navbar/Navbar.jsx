import React from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks = [
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
const Navbar = () => {
    return (
    <nav>
        <div>
            <div>
                <img src={Logo} alt='Logo' className='w-[100px]'/>
            </div>
                <div>
                    <ul>
                        {navbarlinks.map((link)=>(
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <ul>
                    
                    </ul>
                </div>
        </div>
    </nav>
    )
}

export default Navbar
