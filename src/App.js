
import { Component } from 'react'
import './App.css';
import shusherOgg from './assets/audio/shusher.ogg';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="app-label">Shusher App</div>
        <div>

          <audio ref="audio_tag" src={shusherOgg} controls loop />

        </div>
      </div>
    );
  }
}

export default App;
