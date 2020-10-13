import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from 'axios';


class Home extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            STREET: "",
            STATE: "",
            COUNTRY: "",
            PIN: "",
            LATI: "",
            LONGI: "",

            count: "",
        }
    }

    nameChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    streettypeChangeHandler = (e) => {
        this.setState({
            STREET: e.target.value
        });
    }
    statetypeChangeHandler = (e) => {
        this.setState({
            STATE: e.target.value

        });
    }
    countrytypeChangeHandler = (e) => {
        this.setState({
            COUNTRY: e.target.value
        });
    }
    pintypeChangeHandler = (e) => {
        this.setState({
            PIN: e.target.value
        });
    }
    latitypeChangeHandler = (e) => {
        this.setState({
            LATI: e.target.value
        });
    }
    longitypeChangeHandler = (e) => {
        this.setState({
            LONGI: e.target.value
        });
    }

    noofvehiclesperlocationChangeHandler = (e) => {
        this.setState({
            count: e.target.value
        });
    }
    addLocationHandler = () => {
        if (this.state.name === "" || this.state.capacity === ""
            || this.state.count === "") {
            this.setState({
                errMsg: "Required fields are empty",
                successMsg: ""
            })
        } else {
            const data = {
                NAME: this.state.name,
                ADDRESS: {
                    STREET: this.state.STREET,
                    STATE: this.state.STATE,
                    COUNTRY: this.state.COUNTRY,
                    PIN: this.state.PIN,
                    LATITUDE: this.state.LATI,
                    LONGITUDE: this.state.LONGI
                },

                CURRENT_CAPACITY: 0,
                VEHICLE_CAPACITY: this.state.count

            }
            console.log("Data is ", data)
            
                
        }

    }
    render() {

        return (
            <div>
                <div className='createOptions'>
                    <h3> Github Issues </h3>


                    <br>
                    </br>


                    </div>
            </div>

        );
    }
}


class Landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = () => {

    }

    render() {
        return (

            <div className="form">
                <Home />
            </div>


        );
    }
}




export default Landingpage;