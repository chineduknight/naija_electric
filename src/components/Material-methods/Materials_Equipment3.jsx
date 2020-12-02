import React from 'react';
import styled from '@emotion/styled';
import {Input, Labels, Button, Back} from '../Input';
import Plus from "../../assets/images/Vector.svg"

const Materials_Equipment2 = (props) => {
    const data = [
        {
          placeholder: "Enter  Resistance",
          type: "text",
          inputWidth : "100%"
        },
        {

         placeholder: "Enter  Remark",
         type: "text",
         inputWidth : "100%"
       },
       {
        placeholder: "Enter  Resistance",
        type: "text",
        inputWidth : "100%"
      },
      {

       placeholder: "Enter  Remark",
       type: "text",
       inputWidth : "100%"
     },
     {
        placeholder: "Enter  Resistance",
        type: "text",
        inputWidth : "100%"
      },
      {

       placeholder: "Enter  Remark",
       type: "text",
       inputWidth : "100%"
     },
     {
        placeholder: "Enter  Resistance",
        type: "text",
        inputWidth : "100%"
      },
      {

       placeholder: "Enter  Remark",
       type: "text",
       inputWidth : "100%"
     },
     {
        placeholder: "Enter  Resistance",
        type: "text",
        inputWidth : "100%"
      },
      {

       placeholder: "Enter  Remark",
       type: "text",
       inputWidth : "100%"
     },
]
    return ( 
        <Materials_Equipment2.Wrapper>
             <h1>Materials & Equipment Used</h1>
         <div className="header">
         <p>Unit  Under Test</p>
            <p>Resistance (OHMS)</p>
            <p>Remark</p>
       </div>
       <div className="overall-container">
          <div className="type">
            <p>Transformer Body</p>
            <p>Feeder Pillar Body</p>
            <p>Neutral/Earth Bar</p>
            <p>Lightning Arrestors </p>
            <p>Channel Irons</p>
          </div>
       
        <div className="container">
        {
         data.map((input,index) => {
    return(
        <div className="container_div" key={index}>
        <Labels>{input.label}</Labels>
        <Input
         type={input.type}
         placeholder={input.placeholder}
         width={input.inputWidth}
        />  
       </div>  
    )  
         })
        }
       </div>
       </div>
       <p className="add"> <img src={Plus} alt="plus"/>  Add New Unit Under Test</p>
       <Button  onClick={() => console.log("sadasd")}>CONTINUE</Button>
        </Materials_Equipment2.Wrapper>
     );
}
 
export default Materials_Equipment2;

Materials_Equipment2.Wrapper = styled.div`
  margin : 0 auto;
 width : 50%;
 position: relative;
 h1{
  color: #013A29;
  font-size: 17px;
}
 .header{
  display : flex;
 justify-content : space-between;
 color : #626262;
 font-size: 14px;
 margin-top: 1rem;
 p:first-child {
       width: 50%;
    }
    p:nth-child(2){
        width: 25%;
    }
    p:nth-child(3){
        width: 25%;
    }
 }
 .overall-container{
   display: flex;
   width: 100%;
   .type{
   display: flex;
   flex-direction: column;
   width: 50%;
   p{
    height: 56px;
     padding: 1rem;
     border-radius: .5rem;
     border: 1px solid #E5E5E5;
    margin-top: 1.2rem;
    width: 95%;
    color : #626262;
    font-size: 13px;
   }
  
 }
 }
.container{
 width : 50%;
 display : flex;
 flex-wrap: wrap;
 justify-content : space-between;
 margin : 0 auto;
 .container_div{
  width: 48%;
   height: 20%;
 }
}
.add{
    background-color: #F5F5F5;
    border-radius : 6px;
    padding : 1rem 1.6rem;
    border-style: none;
    font-size: 12px;
    margin-top: 1.4rem;
    cursor: pointer;
    width: 34%;
}
`
