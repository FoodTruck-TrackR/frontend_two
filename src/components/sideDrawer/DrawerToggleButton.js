import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    height: 24px;
    width: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0;
    box-sizing: border-box;
    :focus {
        outline-color: transparent;
      }
`;

const ToggleButtonLine = styled.div`
      background-color: black;
      height: 2px;
      width: 30px;
`;

const DrawerToggleButton = ({drawerClickHandler}) => {

    return (
        <Button onClick={drawerClickHandler}>
            <ToggleButtonLine />
            <ToggleButtonLine />
            <ToggleButtonLine />
        </Button>
    )
}

export default DrawerToggleButton