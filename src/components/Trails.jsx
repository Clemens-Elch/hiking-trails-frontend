import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


export default function Trails() {

    const [trails, settrails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("http://localhost:8080/trails")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                settrails(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    if (loading) return "Loading...";
    if (error) return "Error!";

    return (
        <div className="container-fluid">
            <div className="offset-1">
                <h3 className="fw-bold">Trails:</h3>
            </div>
            <ul className="offset-1">
                {trails.map((trail) => (
                    <li key={trail.id}>
                        <div className="row">
                            <div className="col-6">
                                {trail.name} - {trail.region} - ({trail.intensity})
                            </div>
                            <div className="offset-3 col-2">
                                <Link to={`/trails/${trail.id}/trailsDetails`}>Show Details</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}