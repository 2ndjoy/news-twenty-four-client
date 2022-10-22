import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profiles = () => {
    const { user } = useContext(AuthContext);

    const [name, setName] = useState(user.displayName);

    const photoURLref = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLref.current.value);

    }

    const handleChandgeName = event => {
        setName(event.target.value);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleChandgeName} defaultValue={name} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Picture</Form.Label>
                    <Form.Control ref={photoURLref} defaultValue={user?.photoURL} type="text" placeholder="photoURL" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='mb-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );
};

export default Profiles;