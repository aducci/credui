import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {firstname: "Anthony", lastname:"ducci", dob:"11/02/1084",income:"200"};
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(event) {
        alert('Hey ' + this.state.firstname + ' Are you sure you want to Register?');
        event.preventDefault();
    }

    render() {
        return (
            <Container >
                <Form onSubmit={this.handleSubmit}>
                    <Row >
                        <Col fluid>
                            <Form.Control className="mb-2" type="text" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} />
                        </Col>
                        <Col>
                        <Form.Control className="mb-2" type="text" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} />
                        </Col>
                    </Row>

                        
                        
                        <Form.Control className="mb-2" type="date" name="dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handleChange} />
                        <Form.Control className="mb-2" type="phone" name="phone" placeholder="Mobile Number" value={this.state.phone} onChange={this.handleChange} />
                    
                    <div></div>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}
export default RegisterForm
