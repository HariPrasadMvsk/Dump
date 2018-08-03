import React, {Component} from "react";
import NoDataComponent from './noResponse';
import SerchMoiveList from './searchList';

export default class MovieListComponent extends Component {
    constructor() {
        this.styles = {
            marginTop: 15
        };
    }
    render() {
        const dataLength = this.props.movies;
        if (dataLength !== undefined) {
            return <SerchMoiveList movies={this.props.movies} />
        }
        return <NoDataComponent />;
    }
}
