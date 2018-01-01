import React, { Component } from "react";
import { ControlLabel, FormGroup, PageHeader } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import LoaderButton from "../../components/LoaderButton";
import config from "../../config";
import "./NewWineProducer.css";

export default class NewWineBottle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: null,
            producer: {
                id: "",
                name: "",
            }
        };
        //temp
        this.producerOptions = [{id:"f925d0a0-eef6-11e7-8715-af61aad3c605",name:"Barefoot"},{id:"f925d0a1-eef6-11e7-8715-af61aad3c605",name:"Blossom Hill"},{id:"f925d0a2-eef6-11e7-8715-af61aad3c605",name:"Blue Nun"},{id:"f925d0a3-eef6-11e7-8715-af61aad3c605",name:"Brancott Estate"},{id:"f925d0a4-eef6-11e7-8715-af61aad3c605",name:"Camel Valley"}]
    }

    validateForm() {
        return this.state.producer.name.length > config.validation.newWineProducer.NAME_MIN_LENGTH;
    }

    getValidationState() {
        const length = this.state.producer.name.length;
        if (this.validateForm()) return 'success';
        else if (length > 0) return 'error';
        return null;
    }

    handleTypeAheadProducerChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    }

    render() {
        return (
            <div className="NewWineBottle">
                <PageHeader>Add New Bottle</PageHeader>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="producerName" validationState={this.getValidationState()}>
                        <ControlLabel>Producer Name</ControlLabel>
                        <Typeahead
                            value={this.state.producer.name}
                            labelKey="name"
                            options={this.producerOptions}
                            placeholder="Choose a Producer..."
                            minLength={2}
                            onChange={this.handleTypeAheadProducerChange}
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Search"
                        loadingText="Searching…"
                    />
                </form>
            </div>
        );
    }
}
