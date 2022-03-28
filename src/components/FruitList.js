function FruitList(props) {
  

    return (
      <div>
        <ul>
          {props.fruits.map((fruit) => {
            return <li>{fruit}</li>
          })}
        </ul>
      </div>
    )
  }
  export default FruitList;