import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav className="main-header-menu">
                <h1 className="title">Mario Bruno Portfolio</h1>
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout;