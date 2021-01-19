import '../Styles/Catalog.css';

import { Container } from 'react-bootstrap';

import carDataBase from '../Data/carData';

import ItemCard from '../Components/ItemCard';

export default function Catalog() {
  return (
carDataBase.map((car, index) => (
  <Container className="py-3" >
    <ItemCard urlImage={car.urlImage}
      carName={car.carName}
      carDescription={car.carDescription}
      carCategory={car.carCategory} />
  </Container >
)));
}