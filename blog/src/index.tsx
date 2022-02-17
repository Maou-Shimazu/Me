import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import NavbarComponent from './components/NavbarComponent'
import HeaderComponent from "./components/HeaderComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <NavbarComponent />
    <HeaderComponent />
    <Container>
      
    </Container>
  </div>,

  document.getElementById("root")
);
//commit