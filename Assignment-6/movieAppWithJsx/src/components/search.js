import React, {Component} from "react";
export default class SearchComponent extends Component {
    constructor() {
		this.state = {
            searchTerm: '',
            filterTerm: ''
        };
        this.styleContiner = {
            padding: 30
        };
    }
    handleSerach(e) {
        e.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }
    handleOnChange(e) {
        const searchTerm = e.target.value;
        this.setState({
            searchTerm: e.target.value || ''
        });
    }
    handleFilter(e) {
        e.preventDefault();
        this.setState({
            filterTerm: e.target.value || ''
        });
        Array.from(document.querySelectorAll(".card "), (elem) => {
            console.log(elem.parentElement);
            if (elem.querySelectorAll(".card-title")[0].textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                elem.parentElement.style.display = "block";
            } else {
                elem.parentElement.style.display = "none";
            }

        });
    }
    render() {
        return (
            <div style={this.styleContiner}>
                <form className="form-inline" onSubmit={this.handleSerach.bind(this)}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"
                            value={this.state.searchTerm}
                            className="form-control"
                            placeholder="Enter Movie Name"
                            onChange={this.handleOnChange.bind(this)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Search</button>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text"
                            value={this.state.filterTerm}
                            className="form-control"
                            placeholder="Filter"
                            onChange={this.handleFilter.bind(this)}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
