import React, {Component, Fragment} from "react";
import SearchComponent from "./search";
import "jquery"
import "bootstrap";
import MovieListComponent from "./movieList";

export default class MovieApp extends Component {


    constructor() {
        this.state = {
            movies: []
        };

        this.styles = {
            padding: 10
        };
    }

    searchMovies(searchTerm) {
        fetch("https://api.themoviedb.org/3/search/movie?api_key=d2f3e3c3c35f70eb7d6e51b00585b083&language=en-US&query="+searchTerm)
        .then(res => res.json())
        .then(
        (response) => {
            this.setState({
                isLoaded: true,
                movies: response.results
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }

    componentDidMount() {
        let getMyFavMovies = localStorage.getItem("myfavmovies");
        let favData = {"results": JSON.parse(getMyFavMovies)};

        if (favData.results !== null) {
            this.setState({
                isLoaded: true,
                movies: favData.results
            });

        }
    }

    render() {
        return (
            <Fragment>
                <SearchComponent onSearch={this.searchMovies.bind(this)} />
                <div className="containerInner" style={this.styles}>
                    <div className="row">
                        <MovieListComponent movies={this.state.movies} />
                    </div>
                </div>
            </Fragment>
        )
    }
}
