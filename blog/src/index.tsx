import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from './components/FirstComponent'
import UserComponent from './components/UserComponent'
import Container from 'react-bootstrap/Container'
import NavbarComponent from './components/NavbarComponent'
import HeaderComponent from "./components/HeaderComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <NavbarComponent />
    <HeaderComponent />
    <Container>
      {/* <FirstComponent />
      <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} /> */}
    </Container>
  </div>,

  document.getElementById("root")
);
//commit