import React, {Component}  from "react";
import {Card, Button, Container, Col, Row} from "react-bootstrap" ;
//import "./App.css";
//import person from './samplePerson.json';

//export default class Person extends Component {
class Person extends Component {
    state = {
        isLoading: true,
        users: [],
        error: null
      }
      fetchUsers() {
        // Where we're fetching data from
        fetch(`https://jsonplaceholder.typicode.com/users`)
          // We get the API response and receive data in JSON format...
          .then(response => response.json())
          // ...then we update the users state
          .then(data =>
            this.setState({
              users: data,
              isLoading: false,
            })
          )
          // Catch any errors we hit and update the app
          .catch(error => this.setState({ error, isLoading: false }));
      }
      submitUser(e) {
        alert("Im going to add the record now");
      }
      
      componentDidMount() {
        this.fetchUsers();
        console.log("this is the user" + this.user)
      }
    render() {
        const { isLoading, users, error } = this.state;
        return (
          <React.Fragment>
            <h2>- Users -</h2>
            
            {error ? <p>{error.message}</p> : null}
            
            {!isLoading ? (
              users.map(user => {
                const { id, name, email, address } = user;
                
                return (
                  <Container className="container-fluid mt-4">


                    <Row  className="justify-content-md-center">

                    <Col sm>
                    
                    <Card style={{ minWidth: '18rem' }} key={id}>
                      <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                        <Card.Text>
                          Address: {address.suite + " " + address.street + " , " + address.city}
                        </Card.Text>
                        <Row>
                        <Col><Button onClick={this.submitUser} >Add User</Button></Col>
                        <Col><Button onClick="" >Another</Button></Col>
                        <Col><Button onClick="" >Another2</Button></Col>
                        </Row>

                      </Card.Body>
                    </Card>
                    </Col>
                    </Row>
                  </Container>
        
                )})
            ) : (
              <h3>Loading...</h3>
            )}
          </React.Fragment>
        );
      }}
export default Person
