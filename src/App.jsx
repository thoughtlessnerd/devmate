import './App.css';
import CalendarComp from './components/Calendar/Calendar';
import Clock from './components/Clock/Clock';
import QuoteComponent from './components/Quote/Quote';
import SpotifyController from './components/Spotify/SpotifyController';

function App() {
  return (
    <div className="App">
      <SpotifyController />
      <Clock />
      <CalendarComp />
      <QuoteComponent />
    </div>
  );
}

export default App;
