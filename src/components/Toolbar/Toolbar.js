import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../sideDrawer/DrawerToggleButton";

const ToolbarHeader = styled.header`
background-color: lightseagreen;
position: fixed;
width: 100vw;
height: 56px;
left: 0;
top: 0;
`;

const ToolbarNavigation = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
height: 100%;
padding: 0 1rem;
box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
`;

const ToolbarNavigationItems = styled.div `
a {
    color: black;
    text-decoration: none;
    :hover {
        font-size: 18px;
    }
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  
}
li {
    padding: 10px;
    margin: 0 0.5rem;
}
`;

const ToolbarLogo = styled.div `
margin-left: 1rem;
a {
    color: #F6BD31;
    text-decoration: none;
    font-size: 1.5rem;
}
`;

const Spacer = styled.div`
flex: 1;
`;

const Toolbar = ({ drawerClickHandler }) => {

    return (
        <ToolbarHeader>
            <ToolbarNavigation>
                <div />
                <DrawerToggleButton drawerClickHandler={drawerClickHandler} />
                <ToolbarLogo>
                    <a href="/">FoodTruck Tracker</a>
                </ToolbarLogo>
                <Spacer />
            <ToolbarNavigationItems>
                <ul>
                    <li>
                        <NavLink to="/trucks">
                            Truck List
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/addtruck">
                            Add Truck
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/mytrucks">
                            My Trucks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">
                            Sign Up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            Log In
                        </NavLink>
                    </li>
                </ul>
            </ToolbarNavigationItems>
          </ToolbarNavigation>
        </ToolbarHeader>
    )
}


export default Toolbar;