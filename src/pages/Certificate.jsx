import React from 'react';
import styled from '@emotion/styled';
import {useHistory} from 'react-router-dom';
import certLogo from '../assets/images/cert-logo.png';
import leftImg from '../assets/images/Group1.png';

const Certificate = () => {
    const history = useHistory();
  return (
    <Certificate.Wrapper>
        <div className="certificate">
            <div className="left">
                <img src={leftImg} alt=""/>
            </div>
            <div className="right">
                <img className='logo' src={certLogo} alt="logo"/>
                <h1>Certificate</h1>
                <h3>Of Excellence</h3>
                <div className="content">
                    <p>This certificate is presented to</p>
                    <h2>MTN Solar Panel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nulla tempora aliquam  Eos praesentium eligendi laborum est voluptates facilis eius ut nostrum.</p>
                </div>
                <div className="footer-btn">
                    <button className='btn-pry1'>Download Certificate</button>
                    <button className='btn-light' onClick={()=> history.push('/dashboard')}>Goto Dashboard</button>
                </div>
            </div>
        </div>
    </Certificate.Wrapper>
  )
}

Certificate.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .certificate {
    width: 900px;
    padding: 20px;
    padding-top: 10px;
    background-color: #EEFFF9;
    height: 550px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    .left{
        width: 25%;
        img{
            width: 90%;
            margin-top: -10px;  
        }
    }
    .right{
        margin-top: 40px;
        width: 75%;
        .logo{
            width: 170px;
            height: 53px;
            margin-bottom: 10px;
        }
        h1{
            font-family: Axiforma;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 82px;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }
        h3{
            font-family: Mulish;
            font-style: normal;
            font-weight: 600;
            font-size: 17px;
            line-height: 26px;
            letter-spacing: 0.385em;
            text-transform: uppercase;
            margin-top: -15px;
        }
        .content{
            margin-top: 30px;
            p{
                font-family: Mulish;
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 25px;
                color: #636363;
                width: 400px;
            }
            h2{
                font-family: Axiforma;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 49px;
                color: #00CF92;
                margin-top: 10px;
            }
        }
        .footer-btn{
            margin-top: 30px;
            .btn-pry1{
                background: #000D56;
                border-radius: 3px;
                font-family: Axiforma;
                font-style: normal;
                font-weight: 500;
                font-size: 11px;
                line-height: 21px;
                text-transform: uppercase;
                padding: 10px 15px;
                color: #FFFFFF;
                border: 0;
                margin-right: 10px;
                cursor: pointer;
            }
            .btn-light{
                cursor: pointer;
                background: inherit;
                border-radius: 3px;
                font-family: Axiforma;
                font-style: normal;
                font-weight: 500;
                font-size: 11px;
                line-height: 21px;
                text-transform: uppercase;
                padding: 10px 15px;
                color: #636363;
                border: 0;
                margin-right: 10px;
            }
        }
    }
  }

  // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  .certificate{
      height: auto;
      .left{
          display: none;
      }
      .right{
          .content{
              p{
                  width: auto;
              }
          }
      }
  }
}
`
export default Certificate;
