import styled from '@emotion/styled';
import React from 'react'


 export const Input = styled.input`
  width : 95%;
  height: 56px;
  padding-left: 1rem;
  border-radius: .5rem;
  border: 1px solid #E5E5E5;
 `
 export const Labels = styled.div`
 color : #7C7C89;
 font-size: 14px;
 line-height: 18px;
 margin-bottom: 1.1rem;
 `

export const WrapperDiv = styled.div`
width : ${props => props.width};
margin : 1rem auto;
`