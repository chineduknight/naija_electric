import styled from '@emotion/styled'
import React from 'react'
import {Input, Labels, WrapperDiv} from '../Input';

const Inspection = () => {
    const data = [
        {
          label : "Executing Body",
          placeholder: "Enter Body",
          type: "text",
          width : "50%",
          inputWidth : "95%"
        },
        {
         label : "Executing Contractor",
         placeholder: "Enter Contractor",
         type: "text",
         width : "50%",
         inputWidth : "95%"
       },
       {
         label : "Competency Certificate No",
         placeholder: "Enter Certificate No",
         type: "text",
         width : "50%",
         inputWidth : "95%"
       },
       {
        label : "Expiry Date",
        placeholder: "Enter Expiry Date",
        type: "text",
        width : "50%",
        inputWidth : "95%"
      },
       {
        label : "Inspection Team",
        placeholder: "Enter Capacity",
        type: "text",
        width : "50%",
        inputWidth : "95%"
      },
      {
        label : "Date of Inspection",
        placeholder: "Enter Inspection Date",
        type: "text",
        width : "50%",
        inputWidth : "95%"
      },
    ]
    return (
        <Inspection.Wrapper>     
            <h1>Materials & Equipment Used</h1>
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
       
        </Inspection.Wrapper>
    )
}

export default Inspection

Inspection.Wrapper = styled.div`
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