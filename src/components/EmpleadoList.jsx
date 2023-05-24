import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';
import '../Listado.css'
const EmpleadoList = () => {
    let empleados = [
        { id: 1, fullName: "Perez Carolina", title: "CEO", department: "Business", pic: "https://static.vecteezy.com/system/resources/thumbnails/000/422/676/small/Multimedia__28177_29.jpg" },
        { id: 2, fullName: "Alvarez Matias", title: "CMO", department: "Marketing", pic: "https://www.shutterstock.com/image-vector/young-men-head-avatar-icon-260nw-1848738313.jpg" },
        { id: 3, fullName: "Martinez Pedro", title: "CFO", department: "Business", pic: "https://www.shutterstock.com/image-vector/young-men-head-avatar-icon-260nw-1848738313.jpg" }
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