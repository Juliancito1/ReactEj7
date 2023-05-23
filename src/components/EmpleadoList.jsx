import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';
import '../Listado.css'
const EmpleadoList = () => {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.png" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado03.png" }
      ]  
    return (
        <section className='container border border-1 border-secondary listado'>
            <ListGroup>
            <EmpleadoRow empleados={empleados}></EmpleadoRow>   
            </ListGroup>
        </section>
    );
};

export default EmpleadoList;