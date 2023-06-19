import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = ({ active }) => {
  return (
    <div>
      <Navbar variant="dark" collapseOnSelect expand="lg" bg="black">
        <Container>
          <Navbar.Brand href="/">
            <img
              style={{ width: "50px" }}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a0b71a4-d6c1-4653-ad4b-b8e8473bcbf0/dbzkbb5-b3da0b49-6c75-42fd-9863-22fba795ced4.png/v1/fill/w_988,h_809/computador_png_made_in_picsart__by_hanjorafael_dbzkbb5-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODM5IiwicGF0aCI6IlwvZlwvOGEwYjcxYTQtZDZjMS00NjUzLWFkNGItYjhlODQ3M2JjYmYwXC9kYnprYmI1LWIzZGEwYjQ5LTZjNzUtNDJmZC05ODYzLTIyZmJhNzk1Y2VkNC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.xQLRCRhFyuhlCB1Q6WkySO-4X1O3fMzUYx0cnhF-lq4"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link {...active} href="/clientes">
                Clientes
              </Nav.Link>
              <Nav.Link href="/computadores">Computadores</Nav.Link>
              <Nav.Link href="/funcionarios">Funcionarios</Nav.Link>
              <Nav.Link href="/provedores">Provedores</Nav.Link>
              <Nav.Link href="/perifericos">Perifericos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
