import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { invokeApig } from '../../libs/awsLib';

export default class Producers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            producers: []
        };
    }

    async componentDidMount() {
        if (!this.props.isAuthenticated) {
            return;
        }

        try {
            const results = await this.loadProducers();
            this.setState({ producers: results });
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

    renderProducersList(producers) {
        return [{}].concat(producers).map(
            (producer, i) =>
                i !== 0
                    ? <ListGroupItem
                        key={producer.uuid}
                        href={`/producer/${producer.uuid}`}
                        onClick={this.handleProducerClick}
                        header={producer.name}
                    >
                        {"Created: " + producer.name}
                    </ListGroupItem>
                    : <ListGroupItem
                        key="new"
                        href="/producer/new"
                        onClick={this.handleProducerClick}
                    >
                        <h4>
                            <b>{"\uFF0B"}</b> Create a new producer
                        </h4>
                    </ListGroupItem>
        );
    }

    handleProducerClick = event => {
        event.preventDefault();
        this.props.history.push(event.currentTarget.getAttribute("href"));
    }

    renderUnathorised() {
        return (
            <div className="unathorised">
                <h1>n/a</h1>
                <p>You are unathorised to view this page</p>
            </div>
        );
    }

    renderProducers() {
        return (
            <div className="producers">
                <PageHeader>Producers</PageHeader>
                <ListGroup>
                    {!this.state.isLoading && this.renderProducersList(this.state.producers)}
                </ListGroup>
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ? this.renderProducers() : this.renderUnathorised()}
            </div>
        );
    }
}
