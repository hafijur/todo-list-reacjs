import { Button, Input } from '@material-ui/core';
import React, { Component } from 'react';



class AddTodo extends Component {

    state = {
        name: "",
        description: ""
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.description === "") {
            alert("Please fill out the form");
            return;
        } else {

            this.props.addTodoHandler(this.state);
            this.setState({ name: "", description: "" });
        }
    }
    render() {
        return (
            <div>
                <h3>Add Todo</h3>
                <form >
                    <Input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} inputProps={{ 'aria-label': 'name', 'placeholder': 'Enter Name' }} />
                    <br /><br />
                    <Input value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} inputProps={{ 'aria-label': 'description', 'placeholder': 'Enter Description' }} />
                    <br /><br />
                    <Button variant="contained" color="primary" disableElevation onClick={this.add}>Add</Button>
                </form>

            </div>
        );
    }
}

export default AddTodo;