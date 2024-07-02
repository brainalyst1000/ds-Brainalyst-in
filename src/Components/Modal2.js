import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CourseDetailsModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleShow = () => setShow(true);
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
    // Handle form submission, then trigger the PDF download
    // For example, validate and send the form data to the server

    // Simulate PDF download
    const link = document.createElement('a');
    link.href = 'path/to/your/curriculum-brochure.pdf';
    link.download = 'Curriculum-Brochure.pdf';
    link.click();

    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='fixed-button' style={{background: '#007bff',fontSize: '14px',fontWeight: '600',position: 'fixed',right: '20px',bottom: '80px',zIndex: '1000',borderRadius: '5px',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',padding: '10px 20px'}}>
        Download Course Details <i className="fa-solid fa-download"></i>
      </Button>

      <Modal show={show} onHide={handleClose} style={{marginTop: '65px'}}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: '#121212'}}>Fill the Form to Download the Course Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
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

            <Form.Group controlId="formEmail">
              <Form.Label style={{color: '#121212'}}>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{background: '#121212', border: 'none',marginTop: '10px'}}>
              Submit & Download
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CourseDetailsModal;
