import React from 'react'
import './Header.css';
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
                <Link to="/DashboardAdmin">MyShoeShop Admin</Link>
            </a>
            <div class="header-right">
                <a><Link to="/profile">Profile</Link></a>
            </div>
        </div>
    )
}


