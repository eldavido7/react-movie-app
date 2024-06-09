import React, { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/Img';

const HeroBanner = () => {
    const [background, setBackground] = useState('');
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);

    const { data, loading } = useFetch('/movie/upcoming');

    useEffect(() => {
        if (url && data?.results) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const bg = url.backdrop + data.results[randomIndex]?.backdrop_path;
            setBackground(bg);
        }
    }, [url, data]);

    const searchQueryHandler = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && background && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}
            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title"></span>
                    <br />
                    <span className="subTitle">
                        Welcome to The Movie Recommendation App. Search your Favourites Movies, TV Shows and Discover New Ones
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Enter Movie or Series Name..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button onClick={() => navigate(`/search/${query}`)}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
