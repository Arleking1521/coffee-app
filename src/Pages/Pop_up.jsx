import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function Pop_up(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <style type='text/css'>
                {`
                    .fade{
                        transition: opacity .15s linear;
                    }
                    .modal-backdrop.show {
                        opacity: var(--bs-backdrop-opacity);
                      }
                    .modal-backdrop {
                        --bs-backdrop-zindex: 1050;
                        --bs-backdrop-bg: #000;
                        --bs-backdrop-opacity: 0.5;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: var(--bs-backdrop-zindex);
                        width: 100vw;
                        height: 100vh;
                        background-color: var(--bs-backdrop-bg);
                      }
                    .modal{
                        padding-right: 17px;
                        display: block;
                        --bs-modal-margin: 1.75rem;
                        --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                        --bs-modal-zindex: 1055;
                        --bs-modal-width: 500px;
                        --bs-modal-padding: 1rem;
                        --bs-modal-margin: 0.5rem;
                        --bs-modal-color: ;
                        --bs-modal-bg: #fff;
                        --bs-modal-border-color: var(--bs-border-color-translucent);
                        --bs-modal-border-width: 1px;
                        --bs-modal-border-radius: 0.5rem;
                        --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
                        --bs-modal-inner-border-radius: calc(0.5rem - 1px);
                        --bs-modal-header-padding-x: 1rem;
                        --bs-modal-header-padding-y: 1rem;
                        --bs-modal-header-padding: 1rem 1rem;
                        --bs-modal-header-border-color: var(--bs-border-color);
                        --bs-modal-header-border-width: 1px;
                        --bs-modal-title-line-height: 1.5;
                        --bs-modal-footer-gap: 0.5rem;
                        --bs-modal-footer-bg: ;
                        --bs-modal-footer-border-color: var(--bs-border-color);
                        --bs-modal-footer-border-width: 1px;
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: var(--bs-modal-zindex);
                        display: none;
                        width: 100%;
                        height: 100%;
                        overflow-x: hidden;
                        overflow-y: auto;
                        outline: 0;
                        margin: 0;
                        padding: 0;
                        padding-right: 0px;
                        box-sizing: border-box;
                        outline: none;
                        border: none;
                        text-decoration: none;
                        text-transform: capitalize;
                      }
                `}
            </style>
            <button className="btn" onClick={handleShow}>Read More</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration to game {props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Form.Label>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Pop_up;