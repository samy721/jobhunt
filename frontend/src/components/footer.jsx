import React from 'react'
import { useLocation, useParams } from 'react-router'
import styled from 'styled-components'
import SingleCard from './singleCard'

const Box = styled.div`
margin: auto;
padding-top: 100px;
padding-bottom: 100px;
width: 1152px;
height: 100%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 34px;
grid-row-gap: 31px;
`
const Footer = () => {
    const query = useLocation()

    return (
        <Box>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
            <SingleCard/>
        </Box>
    )
}

export default Footer
