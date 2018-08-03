import React, {Component, Fragment} from "react";

let results = [];

export default class SerchMoiveList extends Component {
    constructor() {
        this.minCardWidth = {
            "minWidth": "265px"
        };
        this.cardStyle = {
            "padding": "20px",
            "min-height": "350px",
            "marginBottom": "20px"
        };
        this.titleStyle = {
            "maxHeight": "80px",
        };
        this.textStyle = {
            "maxHeight": "100px",
            "textOverflow": "ellipsis",
            "overflow": "hidden"
        };
        this.imgStyle = {
            "maxHeight": "150px"
        };
        this.deleteStyle = {
            "marginLeft":"10px"
        };
    }
    addToFav(id) {
        results.push(this.props.movies[id]);
        localStorage.setItem('myfavmovies', JSON.stringify(results));
    }

    deleteMovie(movieId, event) {
        event.preventDefault();
        document.querySelectorAll('.'+movieId)[0].remove();
    }

    render() {
        return (
            <Fragment>
                {this.props.movies.map((movie, index) => (
                    <div className={"col-4 movie" +index} key={movie.id} style={this.minCardWidth}>
                        <div className="card" style={this.cardStyle}>
                            <img className="card-img-top" style={this.imgStyle} src={'http://image.tmdb.org/t/p/w185/' + movie.poster_path} alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title" title={movie.title} style={this.titleStyle}>{movie.title}</h5>
                                <p className="card-text" style={this.textStyle}>{movie.overview}</p>
                                <button type="submit" onClick={this.addToFav.bind(this, index)} className="btn btn-primary mb-2">Add to Fav</button>
                                <button type="submit" onClick={this.deleteMovie.bind(this, "movie"+index)} className="btn btn-danger mb-2" style={this.deleteStyle}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}
