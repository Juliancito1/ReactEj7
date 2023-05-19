import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';
import '../Listado.css'
const EmpleadoList = () => {
    return (
        <section className='container border border-1 border-secondary listado'>
            <ListGroup>
                <EmpleadoRow></EmpleadoRow>
                <EmpleadoRow></EmpleadoRow>
                <EmpleadoRow></EmpleadoRow>
            </ListGroup>
        </section>
    );
};

export default EmpleadoList;