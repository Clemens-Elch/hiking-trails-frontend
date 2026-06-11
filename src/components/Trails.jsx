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

    const getIntensityColor = (intensity) => {
        switch (intensity) {
            case 3:
            case 4:
                return "warning";
            case 5:
                return "danger";
            default:
                return "white";
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="fw-bold">Trails:</h3>
                    <div className= "border border-2 border-dark">
                        <ul className="list-unstyled">
                            {trails.map((trail) => (
                                <li key={trail.id}
                                    className= {`bg-${getIntensityColor(trail.intensity)}`}
                                >
                                    <div className="row p-2">
                                        <div className="col-7">
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
                </div>
            </div>
        </div>
    )
}