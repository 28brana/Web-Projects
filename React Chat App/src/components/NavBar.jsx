import React from 'react'
import { auth } from '../firebase'
import { useHistory } from 'react-router';

import "./Navbar.css"
function NavBar() {
    const history=useHistory();
    const logout=async()=>{
        await auth.signOut();
        history.push('/');
    }
    return (
        <div id="navbar">
            <div className="logo">ChatBox</div>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}

export default NavBar
