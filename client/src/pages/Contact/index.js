import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Contact() {
    return (
        <Form className='m-3'>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label type="text">Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label type="text">Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label type="text">Phone Number</Form.Label>
                <Form.Control type="phone" placeholder="801-123-1234" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Message">
                <Form.Label type="textarea">Message</Form.Label>
                <Form.Control type="text" placeholder="Message" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Contact