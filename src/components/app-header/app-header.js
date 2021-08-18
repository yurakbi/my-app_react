import React from 'react';

import styled from 'styled-components';

import './app-header.css';

const AppHeaderBlock = styled.div `
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue;
            cursor: pointer;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }

`

const AppHeader = () => {
    return (
        <AppHeaderBlock>
            <h1>Yura Khaburskyi</h1>
            <h2>5 записів, із них сподобалось 2</h2>
        </AppHeaderBlock>
    )
}

export default AppHeader;