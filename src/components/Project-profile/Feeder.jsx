import React from 'react'
import styled from '@emotion/styled';
import {Input, Labels, WrapperDiv, Button, Back} from '../Input';
import { useHistory } from "react-router-dom";

 const Feeder = (props) => {
    let history = useHistory();
    const data = [
        {
          label : "Name of the Feeder Line ",
          placeholder: "Enter Name",
          type: "text",
          width : "50%",
          inputWidth : "95%"
        },
        {
         label : "Peak Load of the Feeder line",
         placeholder: "Enter Peak Load",
         type: "text",
         width : "50%",
         inputWidth : "95%"
       },
       {
         label : "Nature of the Feeder Line",
         placeholder: "Enter Nature",
         type: "text",
         width : "50%",
         inputWidth : "95%"
       },
       {
         label : "Status of the Feeder Line",
         placeholder: "Select Status",
         type: "text",
         width : "50%",
         inputWidth : "95%"
       },
       {
        label : "Feeder Capacity",
        placeholder: "Enter Capacity",
        type: "text",
        width : "100%",
        inputWidth : "100%"
      },
    ]
    return (
        <Feeder.Wrapper>     
            <h1>Feeder Information</h1>
        <div className="container">
        {
         data.map((input,index) => {
    return(
        <WrapperDiv width={input.width} key={index}>
        <Labels>{input.label}</Labels>
        <Input
         type={input.type}
         placeholder={input.placeholder}
         width={input.inputWidth}
        />  
       </WrapperDiv>  
    )  
         })
        }
       </div>
       
        </Feeder.Wrapper>
    )
 }

 export default Feeder;

 Feeder.Wrapper = styled.div`
  /* margin : 0 auto;
 width : 40%; */
 position: relative;
.container{
 width : 100%;
 display : flex;
 flex-wrap: wrap;
 justify-content : space-between;
 margin : 0 auto;
}
 `