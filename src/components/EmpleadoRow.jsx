import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge';
import EmpleadoAvatar from './EmpleadoAvatar';
const EmpleadoRow = ({empleados}) => {
    return (
        empleados.map(empleado => (
        <section className='container bg-light text-dark border border-1 border-dark' key={empleado.id}>
            <article className='row'>
            <EmpleadoAvatar pic={empleado.pic}></EmpleadoAvatar>
            <div className='col-12 col-md-6'>
                <h5>{empleado.fullName}</h5>
                <h6 className='mt-4'>{empleado.title} <Badge bg="info">{empleado.department}</Badge></h6>
            </div>
            </article>
        </section>
        ))
    );
};

export default EmpleadoRow;