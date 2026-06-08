import {Link} from "react-router-dom";

export default function Home(){
    return(
        <>
            <h1>Welcome to the trails App.</h1>
            <p>
                Find a list of exciting trails under {" "}
                 <Link to="/trails">Trails</Link>
            </p>
        </>
    )
}