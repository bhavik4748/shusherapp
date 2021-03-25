
import { Component } from 'react'
import './App.css';
import shusherOgg from './assets/audio/shusher.ogg';
import mummasvoice from './assets/audio/MummasVoice2.ogg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-label">Shusher App</div>
        <div>
          <audio src={shusherOgg} controls loop />
        </div>

        <br></br>
        <br></br>

        <h2> Mumma's Voice</h2>
        <div>

          <audio src={mummasvoice} controls loop />
        </div>
      </div>
    );
  }
}

export default App;
