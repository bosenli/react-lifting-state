//handle state logic
import { useState, useEffect } from 'react';
import FruitFilter from './FruitFilter';
import FruitList from './FruitList';

function FruitContainer(props) {
  //initialize the fruit list to the full list passed in props
const [fruitsToDisplay, setFruitsToDisplay] = useState(props.fruits)

  //to update state, we will need a function that updates when
  //the filter value changes
  // This function will store the filter `state`, and filter
  // the list of fruits to display

  const handleFilterChange = (event) => {
    event.preventDefault(); //wont load everytime, prevent default behavior

    const filterValue = event.target.value;
    //prevState => previous state/past state
    // _prevState, the underline is to take off the flag so
    // prevState can be used without being directly
    // written in the function block
    setFruitsToDisplay((_prevState) => { //flag, compare previous state
      //remove the fruits that don't contain the filter value
    const filteredFruitList = props.fruits.filter((fruit) => {
        //include values that match the user input(event.target.value)
        return fruit.toLowerCase().includes(filterValue.toLowerCase());
      })
      return filteredFruitList
    })
    }

  useEffect(() => {
    console.log('do something', fruitsToDisplay)
  }, [fruitsToDisplay])


  return (
    <div>
      <FruitFilter onChange={(e) => handleFilterChange(e)}  />
      <FruitList fruits={fruitsToDisplay} /> 
      
  </div>
)
}


export default FruitContainer