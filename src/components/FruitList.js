function FruitList(props) {
    return (
      <div>
        <ul>
            {/* map give a new copy that does not modify the original array 
            for each modifies the orginal array */}
          {props.fruits.map((fruit) => {
            return <li>{fruit}</li>
          })}
        </ul>
      </div>
    )
  }
  export default FruitList;