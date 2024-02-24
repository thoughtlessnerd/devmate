import React, { useState, useEffect } from 'react';
import './SpotifyController.css';

// Import Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons';

const CLIENT_ID = '56992cf24e7043a4ae32d4adca88c3e3';
const REDIRECT_URI = 'http://localhost:3000/basicspotifycontroller';
const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

const SpotifyController = () => {
  const [accessToken, setAccessToken] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [songInfo, setSongInfo] = useState({
    name: '',
    artist: '',
    thumbnail: '',
    duration: ''
  });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    handleAuthorizationCallback();
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      const interval = setInterval(updateSongInfo, 5000);
      return () => clearInterval(interval);
    }
  }, [isAuthorized]);

  const authorizeSpotify = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=user-read-playback-state%20user-modify-playback-state`;
  }

  const handleAuthorizationCallback = () => {
    const params = new URLSearchParams(window.location.hash.substring(1));

    if (params.has('access_token')) {
      setAccessToken(params.get('access_token'));
      setIsAuthorized(true);
    } else {
      console.error('Access token not found in URL');
    }
  }

  const playPauseToggle = () => {
    setIsPlaying(prevState => !prevState);
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  }

  const play = () => {
    fetch(`${SPOTIFY_API_BASE_URL}/me/player/play`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  }

  const pause = () => {
    fetch(`${SPOTIFY_API_BASE_URL}/me/player/pause`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  }

  const nextTrack = () => {
    fetch(`${SPOTIFY_API_BASE_URL}/me/player/next`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  }

  const prevTrack = () => {
    fetch(`${SPOTIFY_API_BASE_URL}/me/player/previous`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
  }

  const updateSongInfo = () => {
    fetch(`${SPOTIFY_API_BASE_URL}/me/player`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.item) {
          setSongInfo({
            name: data.item.name,
            artist: data.item.artists.map(artist => artist.name).join(', '),
            thumbnail: data.item.album.images[0].url,
            duration: data.item.duration_ms
          });
        } else {
          setSongInfo({
            name: 'No song currently playing.',
            artist: '',
            thumbnail: '',
            duration: ''
          });
        }
      })
      .catch(error => console.error('Error fetching current playback state:', error));
  }

  return (
    <div id="spotify" style={{ width: '800px', height: '200px' }}>
      {isAuthorized ? (
        <>
          <div id="songInfo">
            <img id="thumbnail" src={songInfo.thumbnail} alt="Album Thumbnail" />
          </div>
          <div id="system">
            <div id="details">
              <p id="songName">{songInfo.name}</p>
              <p id="artist">{songInfo.artist}</p>
            </div>
            <div id="controls">
              <button onClick={prevTrack} id="step"><FontAwesomeIcon icon={faStepBackward} /></button>
              <button onClick={playPauseToggle} id="play">{isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</button>
              <button onClick={nextTrack} id="step"><FontAwesomeIcon icon={faStepForward} /></button>
            </div>
          </div>
        </>
      ) : (
        <button onClick={authorizeSpotify} id="auth">Authorize Spotify</button>
      )}
    </div>
  );
}

export default SpotifyController;
