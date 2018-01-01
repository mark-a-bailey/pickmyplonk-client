import React, { Component } from "react";
import { ControlLabel, FormGroup, PageHeader } from "react-bootstrap";
import { Typeahead } from 'react-bootstrap-typeahead';
import "./NewWineProducer.css";
import { invokeApig } from "../../libs/awsLib";

export default class NewWineBottle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            producer: {
                id: "",
                name: "",
            },
            producerOptions: [],
        };
    }

    async componentDidMount() {
        if (!this.props.isAuthenticated) {
            return;
        }
        try {
            const results = await this.loadProducers();
            this.setState({ producerOptions: results });
        } catch (e) {
            alert(e);
        }
        this.setState({ isLoading: false });
    }

    loadProducers() {
        return invokeApig({
            path: "/producer",
            method: "GET"
        });
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
                            options={this.state.producerOptions}
                            placeholder="Choose a Producer..."
                            minLength={1}
                            onChange={this.handleTypeAheadProducerChange}
                        />
                    </FormGroup>
                </form>
            </div>
        );
    }
}
