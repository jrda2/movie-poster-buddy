import React from "react"
import Card from "react-bootstrap/Card"


function Moviecard (props) {

    return (
    <Card>
        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.img} />
        <Card.Body>
            <Card.Title>{ props.title }</Card.Title>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{ props.release_date }</small>
        </Card.Footer>
    </Card>
    )
}

export default Moviecard