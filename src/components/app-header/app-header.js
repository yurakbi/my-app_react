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

const AppHeader = ({liked, allPosts}) => {
    return (
        <AppHeaderBlock>
            <h1>Yura Khaburskyi</h1>
            <h2>{allPosts} записів, із них сподобалось {liked}</h2>
        </AppHeaderBlock>
    )
}

export default AppHeader;