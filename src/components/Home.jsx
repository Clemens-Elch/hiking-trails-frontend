import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="">
                    <h3>Welcome to the <b>TrailsApp.</b></h3>
                    <p>
                        Find a list of exciting trails under {" "}
                        <Link to="/trails">Trails</Link>
                    </p>
                </div>
            </div>
        </div>

    )
}