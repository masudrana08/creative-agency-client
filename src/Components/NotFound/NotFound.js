import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const history=useHistory()
    {document.title='Volunteer Network | Not found'}
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Button className='btn-info btn-sm text-white' onClick={()=>history.goBack()}>Go back</Button>
        </div>
    );
};

export default NotFound;