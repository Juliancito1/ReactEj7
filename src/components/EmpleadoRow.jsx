import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from 'react-bootstrap/Badge';
import EmpleadoAvatar from './EmpleadoAvatar';
const EmpleadoRow = () => {
    return (
        <section className='container bg-dark text-light border border-3 border-light'>
            <article className='row'>
            <EmpleadoAvatar/>
            <div className='col-12 col-md-6'>
                <h5>Laya Dueñas</h5>
                <h6 className='mt-4'>CEO <Badge bg="info">Business</Badge></h6>
            </div>
            </article>
        </section>
    );
};

export default EmpleadoRow;