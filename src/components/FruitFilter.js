function FruitFilter(props) {
    return (
      <div>
        <label htmlFor="fruit-filter">Filter these Fruits:</label>
        <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter"   />
      </div>
    )
  }
  
  
  export default FruitFilter