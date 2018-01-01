import React, { Component } from "react";
import { ControlLabel, FormGroup, PageHeader } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
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

    handleTypeAheadProducerChange = event => {
        const formProducer = event[0];
        this.setState({
            producer: {
                id: formProducer.id,
                name: formProducer.name
            }
        });
    }

    render() {
        return (
            <div className="NewWineBottle">
                <PageHeader>Add New Bottle</PageHeader>

                <form>
                    <FormGroup controlId="producerName">
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
                </form>
            </div>
        );
    }
}
