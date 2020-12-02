import styled from '@emotion/styled';


 export const Input = styled.input`
  width : ${props => props.width};
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

export const Button = styled.button`
 background-color : #41DCAE;
 border-radius : 6px;
 padding : 1rem 2rem;
 border-style: none;
 color: white;
 position: absolute;
 right: 0;
 margin-top: 3rem;
 cursor: pointer;
`
export const Back = styled.button`
  position: absolute;
  left: 0;
  border-radius : 6px;
  padding : 1rem 3rem;
  border-style: none;
  color : #41DCAE;
  background-color : ${props => props.background};
  font-size: 14px;
  margin-top: 2rem;
  cursor: pointer;
  color : #6C6C6D;
  line-height: 19px;
`