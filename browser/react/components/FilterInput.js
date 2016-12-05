import React from 'react';


const FilterInput = (props) => {

const inputValue = props.inputValue;
const handleChange = props.handleChange;
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input
        className="form-control"
        placeholder="Enter artist name"
        onChange = {handleChange}  
        value = {inputValue}
      />
    </form>
  );
}

export default FilterInput;