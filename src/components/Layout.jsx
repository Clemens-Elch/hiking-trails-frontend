import {Outlet, Link} from "react-router-dom" ;

export default function Layout() {
    return (
        <>
            <div>
                <h1> TrailsApp </h1>
                <h2>Beautiful and exciting hikes</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/trails">Trails</Link>
                    </li>
                    <li>
                        <Link to="/comments">Comments</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}