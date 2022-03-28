
import './App.css';
import FruitList from './components/FruitList';
import fruitList from './components/Data';
import FruitContainer from './components/FruitContainer';

//component list the fruit, it will need an array of fruits to display
//an input to capture the filter value from the user. This will need one piece of data, the current value of the filter

//State
// The filtered list of fruits
//the value of the filter


function App() {
  return (
    <div className="App">
      <FruitList />
      <Data />
      <FruitContainer fruits={fruitList} />
    </div>
  );
}

export default App;
