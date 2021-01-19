import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ItemCard(props) {
    const { urlImage, carName, carDescription, carCategory } = props;
    return (
        <Card style={{ width: "20%" }}>
            <Card.Img variant="top" src={urlImage} />
            <Card.Body>
                <Card.Title>{carName}</Card.Title>
                <Card.Text>
                    {carDescription}
                </Card.Text>
                <Button variant="primary">{carCategory}</Button>
            </Card.Body>
        </Card>
    );
}