import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { connect } from "react-redux";
import { getMyTrucks, delTruck } from '../actions';
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Main = styled.div`
  background: white;
  padding: 25px;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  margin: 10% auto;
  max-width: 350px;
`;

const Header = styled.div`
  position: absolute;
  background: #FE9B86;
  font-size: 22px;
  top: 0;
  left: 0;
  right: 0;
  border-radius: 0.4rem 0.4rem 0 0;
`;

const SubText = styled.div`
  font-size: 18px;
  padding: 20px;
  color: gray;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Button = styled.button`
  width: 25%;
  cursor: pointer;
	border: none;
	padding: 15px;
	font-size: 14px;
	border-radius: 3px;
	background-color: #E9FE86;
	color: black;
  appearance: none;
  margin-top: 2%;
  &:hover {
    background-color: #006dcc;
  }
  `;

  const DeleteButton = styled.button`
  width: 25%;
  cursor: pointer;
	border: none;
	padding: 15px;
	font-size: 14px;
	border-radius: 3px;
	background-color: #FE9B86;
	color: black;
  appearance: none;
  margin-top: 2%;
  &:hover {
    background-color: grey;
  }
  `;


const MyTrucks = props => {

  const { push } = useHistory();
  const deleteTruck = item => {
    props.delTruck(item);
  }

  const updateTruck = item => {
    axiosWithAuth()
    push(`/api/users/:id/${item.id}`)
  }
  // /update-truck/${item.id}

   useEffect(() => {
     props.getMyTrucks();
  }, [props.getMyTrucks]);


  return (
      <div>
        {props.error ? (
          <div>{props.error}</div>
        ) : (props.trucks.map((truck) => {
          return <Main key={truck.id}>
            <Header>{truck.truckName}</Header>
            <SubText>{truck.foodType}</SubText>
            <SubText>{truck.location}</SubText>
            <BtnContainer>
              <Button onClick={e => {
                e.stopPropagation();
                updateTruck(truck)}
              }>
                  Edit
              </Button>
              <DeleteButton onClick={e => {
                  e.stopPropagation();
                  deleteTruck(truck);
              }}>
                  Delete
              </DeleteButton>
            </BtnContainer>
            </Main>
        }))}
      </div>
  )
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks,
    error: state.error
  }
}

export default connect(mapStateToProps,{ getMyTrucks, delTruck })(MyTrucks);