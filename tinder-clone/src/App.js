import './App.css';
import { Header } from './components/Header/Header';
import SwipeButton from './components/SwipeButton/SwipeButton';
import TinderCard from './components/TinderCard./TinderCard';


function App() {
  return (
    <div className="app">
      <Header />
      <TinderCard />
      <SwipeButton />
    </div>
  );
}

export default App;
