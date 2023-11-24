import './video.css';
import ReactPlayer from 'react-player'
import { useState } from 'react';

const Video = () => {
  const [adresa, setadresa] = useState('https://www.youtube.com/watch?v=YNMkADpvO4w');
  const onClick = () => {
    const val = document.querySelector('input').value;
    setadresa(val);
  }
  return (
    <div className="App-video">
        <h1>Search your favorite youtube video here</h1>
        <div className='wrapper2'>
          <div className='url'>
            <label for="input">Enter the Url: </label>
            <input type="text" name="input" />
            <button id="buton" onClick={onClick}>Search</button>
          </div>
          <ReactPlayer controls className='react-player' url={adresa}/>
        </div>
    </div>
  );

}
export default Video