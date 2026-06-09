import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import Comments from "./Comments.jsx";

export default function TrailsDetails() {

    const {trailId} = useParams();
    const [trail, setTrail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:8080/trails/${trailId}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setTrail(data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [trailId]);
    if (loading) return "Loading...";
    if (error) return "Error!";
    if (!trail) return "Trail not found!";


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="offset-1">
                    <h3>{trail.name}</h3>
                </div>
                <div className="offset-1">
                    <h4>{trail.region}</h4>
                </div>
                <div className="offset-1">
                    <img
                        src={`http://localhost:8080${trail.imageUrl}`}
                        alt={trail.name}
                        width="300"
                    />
                </div>
                <div className="offset-1 col-10">
                    {trail.description}
                </div>
                <div className="row">
                    <div className="offset-1 col-10">
                        <table className="table table-bordered mt-2">
                            <thead>
                            <tr>
                                <th>Duration (h)</th>
                                <th>Length (km)</th>
                                <th>Intensity (1-5)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{trail.duration}</td>
                                <td>{trail.lengthInKm}</td>
                                <td>{trail.intensity}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div>
                            <Comments trailId={trailId} showForm />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}