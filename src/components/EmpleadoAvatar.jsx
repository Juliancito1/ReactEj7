import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
const EmpleadoAvatar = ({pic}) => {
    return (
        <div className='col-10 mt-3 mt-md-2 col-md-5'>
            <img src={pic} alt="" className='col-4 col-md-4 rounded-circle' />
        </div>
    );
};

export default EmpleadoAvatar;