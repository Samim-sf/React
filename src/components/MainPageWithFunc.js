import React, {Component, useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, NavItem, NavLink, Navbar, Container, Card} from "react-bootstrap";
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {render} from "@testing-library/react";
import ReactDOM from 'react-dom';


class MainPage extends Component {
    render() {
        return (
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className={"text-danger"}>To DO LIST</Navbar.Brand>
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#home"><Link className={"text-decoration-none text-white"} to={"/"}>All*/}
                            {/*    task</Link></Nav.Link>*/}
                            {/*<Nav.Link href="#features"><Link className={"text-decoration-none text-white"}*/}
                            {/*                                 to={"/adding-task"}>Adding task</Link></Nav.Link>*/}


                            <Nav.Link as={Link} className={"text-decoration-none text-white"} to={"/"}>All
                                task</Nav.Link>
                            <Nav.Link as={Link} className={"text-decoration-none text-white"}
                                      to="/adding-task">Adding task</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    {/*<Route exact path={"/"} element={<AllTasks/>}/>*/}
                    <Route path={"/adding-task"} element={<AddNewTask/>}/>
                </Routes>
            </Router>

        );
    }
}

class Task {
    constructor(title, desc) {
        this._title = title;
        this._desc = desc;
    }

    get title() {
        return this._title;
    }

    get desc() {
        return this._desc;
    }

    set title(value) {
        this._title = value;
    }

    set desc(value) {
        this._desc = value;
    }
}

function AddNewTask() {
    const [task, setTask] = useState({
    tempTask:{
        title: "",
        description: ""
    }
    });
    const title = useRef(null);
    const description = useRef(null);


    const addTasks = () => {
        const tt = (title.current.value);
        const desc = (description.current.value);
        console.log(tt);
        console.log(desc);
        // const task = new Task(tt, desc);
        let res;
        setTask((prevState) => {
           res= {...prevState, title: {title}, description: {description}}
        })
        const temp =()=>{
            <AddCards task={task}/>
            console.log("Add cards1")
        }
        temp();
        return res;

    }
    return (
        <div className={"d-flex flex-column container justify-content-center align-content-center"}>
            <div className={"navbar bg-primary text-white ps-3 m-3 d-flex justify-content-start"}>
                <a className={"text-white text-decoration-none "} href="">Task Management </a>
                > Home
            </div>
            <h3 className={"m-3"}>Add a new task</h3>
            <form className={"d-flex flex-column container justify-content-center align-content-center"}>
                <input name="title" ref={title} className={"m-3 bg-light"} type="text " placeholder={"Title"}/>
                <textarea ref={description} className={"m-3  bg-light"} name="description" cols="30" rows="10"
                          placeholder={"Description"}/>
                <button className={"m-3 btn-primary"} type="button" onClick={addTasks}>+ Add</button>
            </form>
        </div>
    );


}

function AddCards(props) {
    const [tasks, setTasks] = useState([{
        title: "",
        description: ""
    }]);
    // const val=[this.props.task, ...this.tasks];
    console.log("Add cards2");
    setTasks([...tasks,props.task]);

    console.log(`task ${tasks}`);
    return (
        <div>
            {

                // this.state.tasks.map((task) => {
                //     console.log(task);
                //     <AllTasks task={task}/>
                // })

            }
        </div>
    );

}

class AllTasks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className={"m-4"} style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.task.title}</Card.Subtitle>
                    <Card.Text>
                        {this.props.task.description}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }
}

export default MainPage;