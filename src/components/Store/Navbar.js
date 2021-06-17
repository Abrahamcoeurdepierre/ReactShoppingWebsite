import React from 'react'
import  './Header.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


export default function NavbarComponent() {
    return (
        <div class="header">
                <a class="logo">
                    <Link to = "/Dashboard">MyShoeShop</Link>
                </a>
                <div class="header-right">
                    <a>
                        <Link to = "/ListCart">List</Link>
                    </a>
                    <a>
                        <Link to = "/Dashboard">Home</Link>
                    </a>
                    <a><Link to = "/profile">Profile</Link></a>
            </div>
          </div>  
    )
}


