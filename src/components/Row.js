import React, { Component } from 'react';
import axios from '../request/axios';
import './Row.css';

export class Row extends Component {
    constructor() {
        super()

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        const { fetchUrl } = this.props;
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            const movies = request.data.results;
            this.setState({
                movies
            })
            return request;
        }
        fetchData()
    }

    


    render() {
        const { title, isLarge } = this.props;
        const { movies } = this.state;
        const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original';

        return (
            <div className="row">
                <h2 className="row__title">{title}</h2>
                    <div className="row__imageContainer">
                {
                    movies.map(movie => {
                        return (
                            <img src={`${BASE_URL_IMG}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.title} key={movie.id} className={`row__image ${isLarge && "row__imageLarge"}`} />
                        )
                    })
                }
                    </div>
            </div>
        )
    }
}

export default Row

