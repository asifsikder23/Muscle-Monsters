import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Workout from './component/Workout/Workout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Workout></Workout>
      <Footer></Footer>

    </div>
  );
}

export default App;