import {useEffect, useState} from "react";

export default function Comments({trailId, showForm}) {

    const [commentsList, setCommentsList] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        let url = "http://localhost:8080/comments";

        if (trailId) {
            url = `http://localhost:8080/trails/${trailId}/comments`;
        }

        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                setCommentsList(data);
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


    function addComment(event) {
        event.preventDefault();

        fetch(`http://localhost:8080/trails/${trailId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trailId: Number(trailId),
                name: name,
                message: message,
                timestamp: new Date().toISOString(),
            }),
        }).then(() => {
            setName("");
            setMessage("");
            window.location.reload();
        });
    }


    return (
        <div className="container-fluid">
            <div className="offset-1">
                <h3 className="fw-bold">Comments</h3>
            </div>
            <ul className="offset-1">
                {commentsList.map((comment, index) => (
                    <li key={index}>
                        <div className="row">
                            <div className="col-10">
                                On {comment.timestamp} user <b>{comment.name}</b> said: {comment.message}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {showForm && (
                <>
                    <p>Add a comment:</p>
                    <form onSubmit={addComment}>
                        <div className="mb-2">
                            <label>User:</label>
                            <br/>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label>Message:</label>
                            <br/>
                            <input
                                type="text"
                                placeholder="Comment"
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </>
            )}
        </div>
    )
}