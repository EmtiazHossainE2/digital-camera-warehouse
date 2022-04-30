import React from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FcCameraAddon } from 'react-icons/fc';
import './StokeItem.css'

const StokeItem = () => {
    return (
        <div className=' py-5  stoke-container'>
            <h2 className='text-center pt-3 '> Stoke Item From Here</h2>
            <div className='hr-style mx-auto pt-1 '>
                <hr />
            </div>
            <div className="container w-75 mx-auto py-5 stoke-form">
                <Form noValidate >
                    <Row className="mb-3 fst-italic fw-bold">
                        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustomUsername">
                            {/* <Form.Label>Camera Name</Form.Label> */}
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name='name'
                                    placeholder="Camera Name"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustomUsername">
                            {/* <Form.Label>AF Points</Form.Label> */}
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name='afPoints'
                                    placeholder="AF Points"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustomUsername">
                            {/* <Form.Label>Camera Name</Form.Label> */}
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name='name'
                                    placeholder="Camera Name"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className='mb-3' as={Col} md="6" controlId="validationCustomUsername">
                            {/* <Form.Label>AF Points</Form.Label> */}
                            <InputGroup hasValidation>
                                <Form.Control
                                    type="text"
                                    name='afPoints'
                                    placeholder="AF Points"
                                    aria-describedby="inputGroupPrepend"
                                    required
                                />
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 mt-4 fst-italic">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} type="text" name='description' placeholder="Enter description" required />
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom04">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" name='img' placeholder="Image url" required />

                        </Form.Group>
                    </Row>
                    <Button variant="warning" type="submit" className=' fs-5'>
                        Submit <span className='ps-3 '><FcCameraAddon /></span>
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default StokeItem;