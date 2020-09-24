import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const Backdrop = ({drawerClose}) => {
    return (
        <StyledBackdrop onClick={drawerClose}></StyledBackdrop>
    )
}

export default Backdrop