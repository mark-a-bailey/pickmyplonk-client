import React, { Component } from "react";
import { ControlLabel, FormGroup, FormControl, PageHeader } from "react-bootstrap";
import LoaderButton from "../../components/LoaderButton";
import config from "../../config";
import "./NewWineProducer.css";

export default class NewWineBottle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: null,
            producerName: ""
        };
    }

    validateForm() {
        return this.state.producerName.length > config.validation.newWineProducer.NAME_MIN_LENGTH;
    }

    getValidationState() {
        const length = this.state.producerName.length;
        if (this.validateForm()) return 'success';
        else if (length > 0) return 'error';
        return null;
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
                        <FormControl
                            type="text"
                            value={this.state.producerName}
                            onChange={this.handleChange}
                            placeholder="Look for Producer"
                        />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Create"
                        loadingText="Creating…"
                    />
                </form>
            </div>
        );
    }
}
