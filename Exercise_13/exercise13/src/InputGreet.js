import React, { Component } from "react";


class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };


    render() {
        const { firstName, lastName } = this.state;
        return (
            <div>
                <input
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={this.handleChange}
                />
                <h1>Hello, {firstName} {lastName}!</h1>
            </div>
        );
    }
}
export default UserGreeting;
