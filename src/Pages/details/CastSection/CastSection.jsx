import React from 'react';
import './CastSection.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import noPoster from '../../../assets/no-poster.png'

const CastSection = ({ data = [], loading }) => {
    const imgUrl = "https://image.tmdb.org/t/p/original";

    const Loader = ({ src, className = "" }) => (
        <LazyLoadImage className={className} alt="" effect="blur" src={src} />
    );

    return (
        <>
        <div className="Title-tex">Top Cast</div>
        <div className='Cast-component'>
            {loading ? (
                "loading"
            ) : (
                <>
                    {data.map((castItem, key) => {
                        let imgLink = castItem.profile_path
                        ? imgUrl + castItem.profile_path
                        : noPoster;
                        return(
                        <div className="cast-box" key={key}>
                            <div className="cast-img">
                                <Loader className="caspic" src={imgLink} alt="" />
                            </div>
                            <div className="name-box">
                                <h4 className='cast-name'>{castItem.name}</h4>
                                <h4 className='cast-char'>{castItem.character}</h4>
                            </div>
                        </div>
                    )})}
                </>
            )}
        </div>
        </>
    );
};

export default CastSection;
