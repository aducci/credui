
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
//import Content from './components/Content';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import LoanApply from './components/LoanApply';
import LoanPools from './components/LoanPools';



function App() {

  return (
    // <div className="App">
    //   <Header />
    //   <Content />
    // </div>
    <main>
      <Nav />

      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/loanapply" component={LoanApply} />
          <Route path="/loanpools" component={LoanPools} />
      </Switch>
    </main>
  );
}

export default App;
