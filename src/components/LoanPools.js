import { Component } from "react";
import React from "react" ;
import {Container} from 'react-bootstrap';
import PoolPerformance from './PoolPerformance' ; 

class LoanPools extends Component {
    render() {
       return (
          <div>
             <h2>Loan Performance</h2>
             <p>Here are the Loan Pools and Performance</p>

             ----------------
            <Container>
               <PoolPerformance />
            </Container>
             
          </div>
       );
    }
 }

 export default LoanPools;