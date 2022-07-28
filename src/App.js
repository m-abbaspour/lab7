// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
  Link
} from "react-router-dom";

// Import other React Component
import CreateStudent from 
	'./Components/Create-student.component';
import EditStudent from
	"./Components/Edit-student.component";
import StudentList from
	"./Components/Student-list.component";

// App Component
// const App = () => {
function App() {
return (
	<Router>
	<div className="App">
		<header className="App-header">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          <Link to={"/Create-student"} className="nav-link">
          React MERN Stack App
          </Link>
        </Navbar.Brand>

        <Nav className="justify-content-end">
          <Nav>
          <Link to={"/Create-student"} className="nav-link">
            Create Student
          </Link>
          </Nav>

          <Nav>        
            <Link to={"/Student-list"} className="nav-link">
              Student List
            </Link>
          </Nav>
        </Nav>
        </Container>
      </Navbar>
		</header>
		 <Container> 
		<Row> 
			 <Col md={12}> 
			 <div className="wrapper"> 
				<Routes>
        				<Route exact path="/" element={<CreateStudent />} />
          				<Route path="/Create-student" element={<CreateStudent />} />
          				<Route path="/Edit-student/:id" element={<EditStudent />} />
          				<Route path="/Student-list" element={<StudentList />} />
				</Routes>
			</div>
			</Col>
		</Row> 
		 </Container> 
	</div>
	</Router>
);
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
