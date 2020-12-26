import React from 'react'
import styled from '@emotion/styled';
import { Input } from "../Input";

const data2 = [
    {
      placeholder: "Enter value",
      type: "text",
      inputWidth: "9%",
    },
    {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "9%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "9%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "7%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "7%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "7%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "7%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "7%",
      },  {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "7%",
      },
]

const VoltageTest = () => {
    return ( 
        <VoltageTest.Wrapper>
                <div className="header">
                 <p>TRANSFORMER CONNECTION: </p>
                 <p>HV SIDE (V)</p>
                 <p>LV SIDE (V)</p>
                </div>
                <Header >
            <p  className="sub-h">TAP 3</p>
             <TableBodyMedium>R-E</TableBodyMedium>
             <TableBodyMedium>Y-B</TableBodyMedium>
             <TableBodyMedium>B-R</TableBodyMedium>
             <TableBodySmall>r-y</TableBodySmall>
             <TableBodySmall>y-b</TableBodySmall>
             <TableBodySmall>r-n</TableBodySmall>
             <TableBodySmall>b-r</TableBodySmall>
             <TableBodySmall>y-n</TableBodySmall>
             <TableBodySmall>b-n</TableBodySmall>
         </Header>

         <Header>
         <TableBodyBig>Red – Yellow</TableBodyBig>
          {data2.map(input => (
              <Input
              type={input.type}
              width={input.inputWidth}
              placeholder={input.placeholder}
              />
          ))}
         </Header>

         <Header>
         <TableBodyBig>Yellow – Blue</TableBodyBig>
          {data2.map(input => (
              <Input
              type={input.type}
              width={input.inputWidth}
              placeholder={input.placeholder}
              />
          ))}
         </Header>

         <Header>
         <TableBodyBig> Blue – Red</TableBodyBig>
          {data2.map(input => (
              <Input
              type={input.type}
              width={input.inputWidth}
              placeholder={input.placeholder}
              />
          ))}
         </Header>
        </VoltageTest.Wrapper>
    
     );
}
 
export default VoltageTest;

VoltageTest.Wrapper = styled.div`
.header{
  display : flex;
 justify-content : space-between;
 color : #626262;
 font-size: 14px;
 margin: 1rem auto;
 text-align: center;
 p:first-child {
       width: 25%;
    }
    p:nth-child(2){
        width: 30%;
    }
    p:nth-child(3){
        width: 45%;
    }
 }
 .sub-h{
     width: 25%;
     text-align: center;
     margin-right: 30px;
 }
`
const TableBodyBig = styled.p`
font-weight: bold;
width : 25%;
text-align: center;
border-radius: .5rem;
border: 1px solid #E5E5E5;
font-size: 13px; 
padding: 1rem;
height: 55px;
margin-top: 1rem;
`
  const TableBodySmall = styled.p`
  font-weight: bold;
  width : 8%;
  

  `
    const TableBodyMedium = styled.p`
    font-weight: bold;
    width : 10%;
    `
    const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -15px;
     input:nth-child(4){
     margin-right: 1rem;
    }
    `;