import React from 'react';
import { Card, Button } from 'react-bootstrap';

import SetBgCar from '../Functions/SetBgCar';

export default function ItemCard(props) {
    const { urlImage, carName, carDescription, carCategory } = props;
    return (
        <Card className="text-center" style={{ height: '420px', backgroundColor: SetBgCar(carCategory) }}>
            <Card.Img variant="top" src={urlImage} style={{ height: '220px' }} />
            <Card.Body>
                <Card.Title><b>{carName}</b></Card.Title>
                <Card.Text>
                    {carDescription}
                </Card.Text>
                <Button variant="primary">{carCategory}</Button>
            </Card.Body>
        </Card>
    );
}