import React, { Component } from 'react';
import './Banner.css';
import axios from '../request/axios';

export class Banner extends Component {
    constructor() {
        super();

        this.state = {
            movie: ''
        }
    }

    componentDidMount() {
        const { fetchUrl } = this.props;
        const getData = async () => {
            const req = await axios.get(fetchUrl);
            const movies = req.data.results;
            const randomMovie = movies[Math.round(Math.random() * movies.length )];
            this.setState({
                movie: randomMovie
            })
            return req;
        }
        getData()
    }

    render() {
        const BASE_URL_IMG = 'https://image.tmdb.org/t/p/original';
        const { movie } = this.state;

        return (
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("${BASE_URL_IMG}${this.state.movie?.backdrop_path}")`
            }}>

                <div className="banner__content">
                    <h1 className="banner__title">{
                        (movie?.title || movie?.name || movie?.original_name)
                    }</h1>
                    <button className="banner__btn">Watch Movie</button>
                    <h4 className="banner__overview">{movie?.overview}</h4>
                </div>
            </header>
        )
    }
}

export default Banner
