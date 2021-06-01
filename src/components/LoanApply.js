import { Component } from "react";
import React from "react";
import { Container, Form } from 'react-bootstrap';

// const [ value, setValue ] = React.useState(25);

class LoanApply extends Component {
   constructor(props) {
      super(props);
      this.state = {
         requestedAmount: "",
         value: 10
      };

   }


   render() {
      return (
         <Container>
            <Form>
               <Form.Group>
                  {/* xs={5} */}
                  <Form.Label>Amount Requested</Form.Label>
                  <Form.Control placeholder="Required Amount" />
               </Form.Group>

               <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Loan Pool</Form.Label>
                  <Form.Control as="select" custom>
                     <option>LP1</option>
                     <option>LP2</option>
                     <option>LP3</option>
                     <option>LP4</option>
                     <option>LP5</option>
                  </Form.Control>
               </Form.Group>

               <Form.Group>
                  <Form.Label>Activation Date</Form.Label>
                  <Form.Control type="date" name='loan_request_date' />
               </Form.Group>
               <Form.Check label="I Consent to Credit Check" />
            </Form>


         </Container>
      );
   }
}

export default LoanApply;