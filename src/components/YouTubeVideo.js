import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './YouTubeVideo.css'; 


const YouTubeVideo = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 1,
                key: 'AIzaSyBG5IYDJXHN7S46gCn8XFbgIB60EvlhjLM',
                channelId: 'UCzRkC3d30XsOb2MU44eA-9w'
            }
        })
        .then(response => {
            console.log(response.data.items);
            setVideos(response.data.items);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="youtube-video-container">
            {videos.map(video => (
                <div className="video-wrapper" key={video.id.videoId}>
                <div className="video-player">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/XsFMAq48qhc`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-text">
                    <p>
                        Are technical issues slowing down your business? Say goodbye to software and technical problems
                        with Smart Solutions - your one-stop-shop for all things IT. Our team of experts is dedicated
                        to providing top-notch support and innovative solutions to keep your business running smoothly.
                        From custom software development to network consulting, we have you covered. Don't let tech
                        issues hold you back any longer - partner with Smart Solutions today and experience the
                        difference that smart technology can make for your business.
                    </p>
                </div>
            </div>
            ))}
        </div>
    );
}

export default YouTubeVideo;