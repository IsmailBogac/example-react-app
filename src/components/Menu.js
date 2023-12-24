import React from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import "../App.css";

function Menu() {
    const navigate = useNavigate();
    return (
    <div  >
      <ul className='list'>

        <li>
            <a href="#/" onClick={() => navigate(-1 )}  >Geri</a>
        </li>

        <li>
            <NavLink to="/" activeClassName = "active"  >Anasayfa</NavLink>
        </li>
        <li>
            <NavLink to="users" activeClassName = "active">Kullanıcılar</NavLink>
        </li>
        <li>
            <NavLink to="contact" activeClassName = "active">İletişim</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
