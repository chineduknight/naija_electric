import styled from '@emotion/styled';
import React from 'react'
import {Input, Labels, WrapperDiv} from '../Input';


const Materials = (props) => {
  
   const data = [
       {
         label : "Project Type",
         placeholder: "Select Project Type",
         type: "text",
         width : "50%",
         inputWidth : "95%"
       },
       {
        label : "Source of Supply",
        placeholder: "Select Source of Supply",
        type: "text",
        width : "50%",
        inputWidth : "95%"
      },
      {
        label : "Location",
        placeholder: "Select Location",
        type: "text",
        width : "100%",
        inputWidth : "100%"
      },
      {
        label : "Brief Description",
        placeholder: "Enter brief description of the project here",
        type: "text",
        width : "100%",
        inputWidth : "100%"
      }
   ]

    return ( 
        <Materials.Wrapper>
            <h1>Project Basic Info </h1>
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
        </Materials.Wrapper>
     );
}
 
export default Materials;

Materials.Wrapper = styled.div`
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