import React from 'react';
import {Input, Labels} from '../Input';
import styled from '@emotion/styled'


const MaterialsEquipmemt = () => {
    const data = [
        {
          placeholder: "Enter Size",
          type: "text",
          width : "25%",
          inputWidth : "100%"
        },
        {

         placeholder: "Enter Size/Rating",
         type: "text",
         width : "25%",
         inputWidth : "100%"
       },
       {

         placeholder: "Enter Remark",
         type: "text",
         width : "25%",
         inputWidth : "100%"
       },
       {
        placeholder: "Enter Size",
        type: "text",
        width : "25%",
        inputWidth : "100%"
      },
      {

       placeholder: "Enter Size/Rating",
       type: "text",
       width : "25%",
       inputWidth : "100%"
     },
     {

       placeholder: "Enter Remark",
       type: "text",
       width : "25%",
       inputWidth : "100%"
     },
     {
      placeholder: "Enter Size",
      type: "text",
      width : "25%",
      inputWidth : "100%"
    },
    {

     placeholder: "Enter Size/Rating",
     type: "text",
     width : "25%",
     inputWidth : "100%"
   },
   {

     placeholder: "Enter Remark",
     type: "text",
     width : "25%",
     inputWidth : "100%"
   },
   {
    placeholder: "Enter Size",
    type: "text",
    width : "25%",
    inputWidth : "100%"
  },
  {

   placeholder: "Enter Size/Rating",
   type: "text",
   width : "25%",
   inputWidth : "100%"
 },
 {

   placeholder: "Enter Remark",
   type: "text",
   width : "25%",
   inputWidth : "100%"
 },
 {
  placeholder: "Enter Size",
  type: "text",
  width : "25%",
  inputWidth : "100%"
},
{

 placeholder: "Enter Size/Rating",
 type: "text",
 width : "25%",
 inputWidth : "100%"
},
{

 placeholder: "Enter Remark",
 type: "text",
 width : "25%",
 inputWidth : "100%"
},
  
  
    ]
    return (
     <MaterialsEquipmemt.Wrapper>
       <h1>Materials & Equipment Used</h1>
       <div className="header">
         <p>Equipment Type</p>
         <p>Size/Rating</p>
         <p>Number of Cores</p>
         <p>Remark</p>
       </div>
       <div className="overall-container">
          <div className="type">
            <p>HV Cables</p>
            <p>LV Cables</p>
            <p>Earth Conductor</p>
            <p>Feeder Pillar</p>
            <p>O-H Line Conductor</p>
          </div>
       
        <div className="container">
        {
         data.map((input) => {
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
       
     </MaterialsEquipmemt.Wrapper>
    )
}
export default MaterialsEquipmemt;

MaterialsEquipmemt.Wrapper = styled.div`
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
 }
 .overall-container{
   display: flex;
   width: 100%;
   .type{
   display: flex;
   flex-direction: column;
   width: 25%;
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
 width : 75%;
 display : flex;
 flex-wrap: wrap;
 justify-content : space-between;
 margin : 0 auto;
 .container_div{
  width: 32%;
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
    width: 32%;
}
`