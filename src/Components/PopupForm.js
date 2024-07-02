import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{color: '#121212'}}>Join the Data Science & Analytics Revolution Now
            <p style={{fontSize: '14px'}}>Get 100 % Paid Internship Opportunity With Brainalyst Data Science 360 Course</p>
        </Modal.Title> <hr />
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="formName">
              <Form.Label style={{color: '#121212'}}>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label style={{color: '#121212'}}>Whatsapp No.</Form.Label>
              <Form.Control
                type="phone"
                name="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label style={{color: '#121212'}}>Email address</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
          
          <Button variant="primary" type="submit" style={{background: '#121212', border: '2px solid black',color: '#fff',marginTop: '10px'}}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PopupForm;
