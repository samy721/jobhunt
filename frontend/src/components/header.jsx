
import styled from "styled-components"
import Navbar from "./navbar"
import Searchbar from "./searchbar"

const Hero = styled.div`
width: 1143px;
margin:auto;
padding-top: 37px;
`
const Maindiv = styled.div`
height: 364px;
background: linear-gradient(274.83deg, #5DB0DF 0.58%, #5D7ADF 74.3%);
`

const Tagline = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 72px;
margin-top: 78px;
color: #FFFFFF;
`
const Brief = styled.div`

font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;


`
const Header = () => {
    return (
        <Maindiv>
            <Hero>
                <Navbar />
                <Tagline>Find Your Dream Job</Tagline>
                <Brief>Browse through thousands of full-time or part-time jobs near you</Brief>
            </Hero>
            <Searchbar/>
        </Maindiv>
    )
}

export default Header
