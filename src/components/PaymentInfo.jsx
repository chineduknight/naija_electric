import React from 'react';
import styled from '@emotion/styled';
import { Input } from "./Input";

const PaymentInfo = () => {
    return ( 
        <PaymentInfo.Wrapper>
            <h1>Payment Info</h1>
            <div className="header">
                <div>
                   <h5>Enter Amount</h5> 
                <Input
              type="text"
              placeholder="Enter Amount"
              width="100%"
              />  
                </div>
            <div>
               <h5> Remita Code</h5>
                <Input
              type="text"
              placeholder="Enter RRR Code"
              width="100%"
              />  
            </div>
             
            </div>
            <h5 className="payment">Payment Remark</h5>
            <textarea placeholder="Enter Remark"></textarea>
        </PaymentInfo.Wrapper>
     );
}
 
export default PaymentInfo;

PaymentInfo.Wrapper = styled.div`
.header{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
 & > * {
   width: 47%;  
 }
}
textarea{
    width: 100%;
    margin-top: 2rem;
    height: 140px;
    border-radius: .5rem;
    padding: 1rem;
    border: 1px solid #E5E5E5;
    margin: 0 auto;
}
.payment{
    margin-top: 2rem;
}
`