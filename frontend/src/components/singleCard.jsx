import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width: 560px;
height: 200px;
background: #FFFFFF;
box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
border-radius: 24px;
box-sizing: border-box;
`
const CardImg = styled.div`
width: 150px;
height: 150px;
background: #C4C4C4;
border-radius: 16px;
overflow: hidden;
margin-right: 20px;

`
const InnerCard = styled.div`
    padding: 25px 21px 25px 32px;
    display: flex;
    flex-direction: row;

`
const InfoCard = styled.div`
    display: flex;
    flex-direction: column;
 
`

const Designation = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #000000;
`
const Description = styled.div`
margin-top: 3px;
margin-bottom: 8px;
width: 336px;
height: 63px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
overflow: hidden;
text-overflow: ellipsis;
color: #7B7B7B;
`
const Button = styled.button`
width: 120px;
height: 40px;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 21px;
border: 2px solid #F07987;
box-sizing: border-box;
border-radius: 8px;
color: #F07987;
background: white;
margin-right: 23px;
`
const SingleCard = () => {
    return (
        <Card>
            <InnerCard>
                <CardImg>
                    <img style={{ width: "100%", height: "100%" }} src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80" alt="Not available" />
                </CardImg>
                <InfoCard>
                    <Designation>
                        Executive Producer
                    </Designation>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Description>
                    <div style={{display:"flex", justifyContent:"flex-end"}}>
                    <Button>
                        View Details
                    </Button>
                    </div>
                </InfoCard>
            </InnerCard>
        </Card>
    )
}

export default SingleCard
