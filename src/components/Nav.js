import React, {Component} from 'react' ; 
import {NavLink} from 'react-router-dom' ;

export default class Nav extends Component {
    render() {
        return(
            <div className="Nav">
                {/* <nav>
                    <ul className='nav-links'>
                        <li><NavLink to ="/"> Home </NavLink></li>
                        <li><NavLink to ="/register"> Register </NavLink></li>
                        <li><NavLink to ="/login"> Login </NavLink></li>
                        <li><NavLink to ="/loanapply"> Get Loan </NavLink></li>
                        <li><NavLink to ="/loanpools"> Loan Pools </NavLink></li>
                    </ul>
                </nav> */}

                <div className="btn-group, nav-links" >
                <NavLink to ="/"> Home | </NavLink>
                <NavLink to ="/register"> Register | </NavLink>
                <NavLink to ="/login"> Login | </NavLink>
                <NavLink to ="/loanapply"> Get Loan | </NavLink>
                <NavLink to ="/loanpools"> Loan Pools |</NavLink>
                </div>
            </div>
        )
    }    
}
// https://medium.com/@mendes.develop/setting-up-routes-in-your-react-application-with-react-router-dom-part-2-2-545a58de6b85