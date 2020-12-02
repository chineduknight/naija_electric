import React from 'react';
import styled from '@emotion/styled';
import {Input, Labels} from '../Input';
import Plus from "../../assets/images/Vector.svg"

const Materials_Equipment2 = () => {
    const data = [
        {
          placeholder: "Enter Specification",
          type: "text",
          inputWidth : "100%"
        },
        {

         placeholder: "Enter Specification",
         type: "text",
         inputWidth : "100%"
       },
       {
         placeholder: "Enter Specification",
         type: "text",
         inputWidth : "100%"
       },
       {
        placeholder: "Enter Specification",
        type: "text",
        inputWidth : "100%"
      },
      {
       placeholder: "Enter Specification",
       type: "text",
       inputWidth : "100%"
     },
     
]
    return ( 
        <Materials_Equipment2.Wrapper>
             <h1>Materials & Equipment Used</h1>
         <div className="header">
            <p className="data">Data</p>
            <p>Specification</p>
       </div>
       <div className="overall-container">
          <div className="type">
            <p>Make</p>
            <p>Capacity</p>
            <p>Voltage Rating</p>
            <p>Current Rating</p>
            <p>Mode of Cooling</p>
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
       <p className="add"> <img src={Plus} alt="plus"/>  Add New Data</p>
        </Materials_Equipment2.Wrapper>
     );
}
 
export default Materials_Equipment2;

Materials_Equipment2.Wrapper = styled.div`
  /* margin : 0 auto;
 width : 50%; */
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
       width: 30%;
    }
    p:nth-child(2){
        width: 65%;
    }
 }
 .overall-container{
   display: flex;
   width: 100%;
   .type{
   display: flex;
   flex-direction: column;
   width: 30%;
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
 width : 65%;
 display : flex;
 flex-wrap: wrap;
 justify-content : space-between;
 margin : 0 auto;
 .container_div{
  width: 100%;
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
    width: 24%;
}
`
