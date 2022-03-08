import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import NavbarComponent from './components/NavbarComponent'
import HeaderComponent from "./components/HeaderComponent"
import ProgramParser from "./components/programParser"
import 'bootstrap/dist/css/bootstrap.min.css';

  if (window.location.pathname === '/') {
      ReactDOM.render(
        <div>
          <NavbarComponent />
          <HeaderComponent />
          <Container>
            
          </Container>
        </div>,

        document.getElementById("root")
      );
  }
  else if(window.location.pathname === '/pages/program-parser/'){
    ReactDOM.render(
      <div>
        <NavbarComponent />
        <HeaderComponent />
        <Container>
            <Container>
              <ProgramParser />
            </Container>
        </Container>
      </div>,

      document.getElementById("root")
    );
  }