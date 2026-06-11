import {Outlet, Link} from "react-router-dom" ;

export default function Layout() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-1 border border-2 border-dark app-box mt-2 p-0">
                    <div className="title-box">
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
                </div>
            </div>
        </div>
    )
}