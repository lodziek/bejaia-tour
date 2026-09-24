import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Icon from '../components/Icon';
import film from '../assets/video/bej.mp4';
import poster from '../assets/img/hero-sea.webp';
import './Videos.css';

const Videos = () => {
    const videoRef = useRef(null);
    const [started, setStarted] = useState(false);

    // The film weighs ~15 MB: it is only downloaded once the visitor presses play.
    const start = () => {
        setStarted(true);
        videoRef.current?.play();
    };

    return (
        <Page title="The film" className="page">
            <section className="container section videos-page">
                <div className="section-head center">
                    <span className="eyebrow">The film</span>
                    <h1>See Béjaïa from above</h1>
                    <p>A few minutes over the capes, the beaches and the rooftops of the city.</p>
                </div>

                <div className="player">
                    <video
                        ref={videoRef}
                        src={film}
                        poster={poster}
                        preload="none"
                        playsInline
                        controls={started}
                        onPlay={() => setStarted(true)}
                    >
                        Your browser cannot play this video.
                    </video>
                    {!started && (
                        <button type="button" className="player-start" onClick={start} aria-label="Play the film">
                            <span className="player-btn">
                                <Icon name="play" size={28} />
                            </span>
                            <span className="player-label">Play the film</span>
                        </button>
                    )}
                </div>

                <p className="videos-next">
                    Seen something you like? <Link to="/places">Find it on the places page →</Link>
                </p>
            </section>
        </Page>
    );
};

export default Videos;
