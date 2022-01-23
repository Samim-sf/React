import React, {Component, useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, DropdownButton, Dropdown} from "react-bootstrap";

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
    const [tasks, setTask] = useState([]);
    const title = useRef(null);
    const description = useRef(null);

    const addTasks = () => {
        const tt = (title.current.value);
        const desc = (description.current.value);
        console.log(tt);
        console.log(desc);
        setTask((prevState) => {
            prevState.push(new Task(tt, desc));
            console.log(prevState)
            return prevState;
        })
    }
    return (
        <>
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
            {console.log("just for test")}
            {
                tasks.map((task, i) => {
                    return <AllTasks key={i} task={task}/>
                })
            }

        </>
    );
}

function AllTasks(props) {
    return (
        <>{console.log("all task")}
                <Card className={"m-4"} style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.task.title}</Card.Subtitle>
                        <Card.Text>
                            {props.task.description}
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
        </>
    );
}

export default AddNewTask;