import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { getData } from '../actions';

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
  background: #CF3E4D;
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

const Trucklist = ({getData, trucks, error}) => {

   useEffect(() => {
     getData();
  }, [getData]);


  return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (trucks.map((truck) => {
          return <Main key={truck.id}>
              <Header>{truck.name}</Header>
              <SubText>{truck.location}</SubText>
              <SubText>{truck.vendor_id}</SubText>
              </Main>
        }))
        }
      </div>
  )
}

const mapStateToProps = state => {
  return {
    trucks: state.trucks,
    error: state.error
  }
}

export default connect(mapStateToProps,{ getData })(Trucklist);