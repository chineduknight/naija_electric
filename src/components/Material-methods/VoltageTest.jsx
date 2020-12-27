import React from 'react'
import styled from '@emotion/styled';
import { Input } from "../Input";

const data1 = [
    {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "13%",
      },
      {
          placeholder: "Enter value",
          type: "text",
          inputWidth: "13%",
        },
        {
          placeholder: "Enter value",
          type: "text",
          inputWidth: "13%",
        },
        {
            placeholder: "Enter value",
            type: "text",
            inputWidth: "25%",
          },
]

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
            <h1>Voltage Ratio Test Results</h1>
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
         <div className="remark">
                <Input
           type="text"
           placeholder="Remark"
           width="100%"
          />  
         </div>
         <div className="excitation_test">
             <h1>Excitation Test</h1>
             <p>Transformer Excitation Test Results</p>
             <div className="header2">
                 <p>TRANSFORMER CONNECTION: </p>
                 <p>L.V MEASURED VALUE (V)</p>
                 <p>EXCITATION CURRENT MEASURED</p> 
                </div>
               <Header>
               <p  className="sub-h">TAP 3</p> 
                <Table2Medium>r-n</Table2Medium>
                <Table2Medium>y-n</Table2Medium>
                <Table2Medium>b-n</Table2Medium>
                <p  className="sub-h">(A)</p> 
              
               </Header> 
        <Header>
         <Table2Big>r-n</Table2Big>
          {data1.map(input => (
              <Input
              type={input.type}
              width={input.inputWidth}
              placeholder={input.placeholder}
              />
          ))}
         </Header>

         <Header>
         <Table2Big>r-n</Table2Big>
          {data1.map(input => (
              <Input
              type={input.type}
              width={input.inputWidth}
              placeholder={input.placeholder}
              />
          ))}
         </Header>
         <Header>
         <Table2Big>r-n</Table2Big>
          {data1.map(input => (
              <Input
              type={input.type}
              width={input.inputWidth}
              placeholder={input.placeholder}
              />
          ))}
         </Header>
         <div className="remark">
                <Input
           type="text"
           placeholder="Remark"
           width="100%"
          />  
         </div>
         </div>

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
 .excitation_test{
     margin: 2rem auto;
 }
 .header2{
  display : flex;
 justify-content : space-between;
 color : #626262;
 font-size: 14px;
 margin: 1rem auto;
 text-align: center;
 p:first-child {
       width: 30%;
    }
    p:nth-child(2){
        width: 40%;
    }
    p:nth-child(3){
        width: 30%;
    }
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
    const Table2Big = styled.p`
    width: 25%;
    font-weight: bold;
    text-align: center;
    border-radius: .5rem;
    border: 1px solid #E5E5E5;
    font-size: 17px; 
    padding: 1rem;
    height: 55px;
    margin-top: 1rem;
    `
      const Table2Medium = styled.p`
      width: 13%;
      font-weight: bold;
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