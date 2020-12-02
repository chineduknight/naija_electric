import React from "react";
import {useHistory} from 'react-router-dom';
import logo from '../assets/images/cert-logo.png';
import styled from "@emotion/styled";


const nav = [
    {
        name: 'Home',
        route: '/dashboard',
        icon: 'fa fa-home'
    },
    {
        name: 'Application',
        route: '/',
        icon: 'fa fa-edit'
    },
    {
        name: 'Certificate Verification',
        route: '/certificate',
        icon: 'fa fa-trash'
    },
    {
        name: 'Settings',
        route: '/',
        icon: 'fa fa-cog'
    },
    {
        name: 'My Account',
        route: '/',
        icon: 'fa fa-user'
    },
]
const DashboardContainer = ({children}) => {
    const history = useHistory();
    const isActive = (route) => {
        return history.location.pathname === route;
    }
    console.log(history.location);
  return (
    <DashboardContainer.Wrapper>
      <div className="left-panel">
        <img className='logo' src={logo} alt="logo"/>
        <div className="nav-container">
            <ul>
                {nav.map(nv => (
                    <li key={nv.name}>
                    <a href={nv.route} className={`${isActive(nv.route) && 'active' }`}><span className={`mr-3 ${nv.icon}`}></span> {nv.name}</a>
                </li>
                ))}
            </ul>
        </div>
      </div>
      <div className="right-panel">
        {children}
      </div>
    </DashboardContainer.Wrapper>
  );
};
DashboardContainer.Wrapper = styled.div`
    display: flex;
    .left-panel{
        width: 300px;
        background: #FFFFFF;
        padding: 37px;
        .logo{
            width: 274.34px;
            height: 76.39px;
        }
        .nav-container{
            margin-top: 40px;
            ul{
                list-style-type: none;
                li{
                    background: #FFFFFF;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
                    border-radius: 20px;
                    padding: 15px 25px;
                    margin-bottom: 20px;
                    a{
                        color: #7C7C89;
                        text-decoration: none;
                        font-family: Mulish;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 13px;
                        line-height: 16px;
                    }
                    .active{
                        color: #00CF92;
                    }
                }
            }
        }
    }
    .right-panel{
        background: #E5E5E5;
        min-height: 100vh;
        width: 100%;
        padding: 40px;
    }
`;
export default DashboardContainer;
