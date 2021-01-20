import React, { useState } from 'react';
import '../Styles/Catalog.css';
import { Container, CardColumns, Form } from 'react-bootstrap';

import carDataBase from '../Data/carData';

import ItemCard from '../Components/ItemCard';

export default function Catalog() {

    const [searchCar, setSearchCar] = useState("");

    return (
        <Container className="my-3" >
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><h4>Filtre um Carro</h4></Form.Label>
                    <Form.Control type="email"
                        placeholder="Pesquise um Modelo"
                        value={searchCar}
                        onChange={(i) => { setSearchCar(i.target.value) }}
                    />
                    <Form.Text className="text-muted">
                        Se não encontrar o seu modelo <a rel="noreferrer" target="_blank" href="https://react-bootstrap.netlify.app">clique aqui</a>.
                </Form.Text>
                </Form.Group>
            </Form>
            <CardColumns>
                {carDataBase.filter((carSearch) => (
                    carSearch.carName.toUpperCase().indexOf(searchCar.toUpperCase()) !== -1 ||
                    carSearch.carCategory.toUpperCase().indexOf(searchCar.toUpperCase()) !== -1
                ))
                    .map((car, index) => (
                        <ItemCard
                            urlImage={car.urlImage}
                            carName={car.carName}
                            carDescription={car.carDescription}
                            carCategory={car.carCategory} />
                    ))}
            </CardColumns>
        </Container >
    );
}