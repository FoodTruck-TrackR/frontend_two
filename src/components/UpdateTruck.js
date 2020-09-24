import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import { putData } from '../actions';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FormGroup = styled.div`
	width: 100%;
	max-width: 350px;
	padding: 15px;
	margin: 10% auto;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
  `;

  const Button = styled.button`
  width: 100%;
  cursor: pointer;
	border: none;
	padding: 15px;
	font-size: 14px;
	border-radius: 3px;
	background-color: #0077CC;
	color: white;
  appearance: none;
  margin-top: 10%;
  &:hover {
    background-color: #006dcc;
  }
  `;

  const Input = styled.input`
	box-sizing: border-box;
	font-size: 14px;
	padding: 15px;
	border-radius: 3px;
	border: none;
	box-shadow: inset 0 0 0 1px #dee1e3;
	width: 100%;
	outline: none;
  transition: all 200ms;
  margin-top: 10%;
`;


const initialItem = {
    truckName:"",
    foodType: "",
    location: "",
}

const UpdateTruck = props => {

  const  [ item, setItem ]  = useState(initialItem);

  useEffect(() => {
    const selectedItem = props.trucks.find(item => {
        return `${item.id}` === props.match.params.id;
    });
    console.log("rd: UpdateTruck, selectedItem", selectedItem);
    if (selectedItem) {
        setItem(selectedItem)
    }
  }, [props.trucks, props.match.params.id])

  const handleChanges = e => {
    setItem({ 
      ...item,
      [e.target.name] : e.target.value 
    });
  }

  const handleUpdateTruck = e => {
    e.preventDefault();
    axiosWithAuth()
    props.putData(item);
  }

  return (
      <div>
        <FormGroup>
          <Input
            type="text"
            name="truckName"
            value={item.truckName}
            onChange={handleChanges}
            placeholder="Your Truck's name"
          />
          <Input 
            type="text"
            name="foodType"
            value={item.foodType}
            onChange={handleChanges}
            placeholder="Type of food"
          />
          <Input 
            type="text"
            name="location"
            value={item.location}
            onChange={handleChanges}
            placeholder="Current location"
          />

          <Button onClick={handleUpdateTruck}>Update Truck</Button>
        </FormGroup>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks
  }
}

export default connect(
  mapStateToProps,
  { putData }
)(UpdateTruck);