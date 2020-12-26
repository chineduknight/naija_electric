import React from "react";
import styled from '@emotion/styled';
import { Input } from "../Input";

const data = [
    {
      placeholder: "Enter value",
      type: "text",
      inputWidth: "16%",
    },
    {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "16%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "16%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "12%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "12%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "12%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "12%",
      },
]

const data2 = [
    {
      placeholder: "Enter value",
      type: "text",
      inputWidth: "16%",
    },
    {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "16%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "16%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "8%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "8%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "8%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "8%",
      },
      {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "8%",
      },  {
        placeholder: "Enter value",
        type: "text",
        inputWidth: "8%",
      },
]

const InsulationTest = () => {
    return ( 
        <InsulationTest.Wrapper>
        <div className="overall-container">
          <h1>Transformer Windings:</h1>
          <div className="header">
            <p>HV Side Vtest = 5000Volts</p>
            <p>LV Side Vtest = 1000Volts</p>
        </div>
   
           <Header >
             <TableBodyBig>RED-EARTH(ohms)</TableBodyBig>
             <TableBodyBig>YELLOW-EARTH(ohms)</TableBodyBig>
             <TableBodyBig>BLUE-EARTH(ohms)</TableBodyBig>
             <TableBodySmall>r-e(ohms)</TableBodySmall>
             <TableBodySmall>y-e(ohms)</TableBodySmall>
             <TableBodySmall>b-e(ohms)</TableBodySmall>
             <TableBodySmall>n-e(ohms)</TableBodySmall>
         </Header>
         <Header>
            {data.map((input, index) => {
            return (
                <Input
                  type={input.type}
                  placeholder={input.placeholder}
                  width={input.inputWidth}
                  key={index}
                />
            );
          })} 
         </Header>
         <div className="remark">
                <Input
           type="text"
           placeholder="Remark"
           width="100%"
          />  
         </div>
     
         </div>   

         <div className="overall-container">
          <h1>Transformer Windings Continuity Test</h1>
          <div className="header">
            <p>HV Side </p>
            <p>LV Side </p>
        </div>
   
           <Header >
             <TableBodyBig>R-E</TableBodyBig>
             <TableBodyBig>Y-B</TableBodyBig>
             <TableBodyBig>B-R</TableBodyBig>
             <TableBodyMedium>r-y</TableBodyMedium>
             <TableBodyMedium>y-b</TableBodyMedium>
             <TableBodyMedium>b-r</TableBodyMedium>
             <TableBodyMedium>r-n</TableBodyMedium>
             <TableBodyMedium>y-n</TableBodyMedium>
             <TableBodyMedium>b-n</TableBodyMedium>
         </Header>
         <Header>
            {data2.map((input, index) => {
            return (
                <Input
                  type={input.type}
                  placeholder={input.placeholder}
                  width={input.inputWidth}
                  key={index}
                />
            );
          })} 
         </Header>
         <div className="remark">
                <Input
           type="text"
           placeholder="Remark"
           width="100%"
          />  
         </div>
     
         </div>    


     <div className="overall-container">
          <h1>Low Voltage Cables :</h1>
          <div className="header">
            <p>HV Side Vtest = 5000Volts</p>
            <p>LV Side Vtest = 1000Volts</p>
        </div>
   
           <Header >
             <TableBodyBig>RED-EARTH(ohms)</TableBodyBig>
             <TableBodyBig>YELLOW-EARTH(ohms)</TableBodyBig>
             <TableBodyBig>BLUE-EARTH(ohms)</TableBodyBig>
             <TableBodySmall>r-e</TableBodySmall>
             <TableBodySmall>y-e</TableBodySmall>
             <TableBodySmall>b-e</TableBodySmall>
             <TableBodySmall>n-e</TableBodySmall>
         </Header>
         <Header>
            {data.map((input, index) => {
            return (
                <Input
                  type={input.type}
                  placeholder={input.placeholder}
                  width={input.inputWidth}
                  key={index}
                />
            );
          })} 
         </Header>
         <div className="remark">
                <Input
           type="text"
           placeholder="Remark"
           width="100%"
          />  
         </div>
     
         </div>    




        </InsulationTest.Wrapper>
     );
}
 
export default InsulationTest;

InsulationTest.Wrapper = styled.div`
 .header{
  display : flex;
 justify-content : space-between;
 color : #626262;
 font-size: 14px;
 margin-top: 1rem;
 & > * {
     width: 50%;
 }

 }
 .overall-container{
     margin: 2rem auto;
 }
 .remark{
    margin: 1rem auto;
}
`
const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;


const TableBodyBig = styled.p`
font-weight: bold;
width : 16%;
font-size: 11px;
`
  const TableBodySmall = styled.p`
  font-weight: bold;
  width : 12%;

  `
    const TableBodyMedium = styled.p`
    font-weight: bold;
    width : 8%;
    `
