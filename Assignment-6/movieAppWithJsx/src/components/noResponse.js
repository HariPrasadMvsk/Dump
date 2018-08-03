import React, {Component} from "react";

export default class NoDataComponent extends Component {
    constructor() {
        this.styles = {
            paddingLeft: 10
        };
    }
    render() {
        return <p style={this.styles}>No data available. Please search again!!!</p>;
    }
}
