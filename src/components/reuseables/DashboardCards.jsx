import styled from '@emotion/styled';
import React from 'react';

const DashboardCard = ({value, title, icon, theme}) => {

    return (
        <DashboardCard.Wrapper>
            <div className='card-icon'>
                <span className={`fa ${icon}`}></span>
            </div>
            <div className='card-text'>
                <h2>{value}</h2>
                <p>{title}</p>
            </div>
        </DashboardCard.Wrapper>
    )
}
DashboardCard.Wrapper = styled.div`
    width: 210px;
    height: 90px;
    background: #FFFFFF;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    margin-top: 20px;
    padding: 23px;
    display: flex;
    .card-icon{
        width: 45px;
        height: 45px;
        background: #EEFFF9;
        border-radius: 25px;
        color: #00CF92;
        padding: 9px 15px;
    }
    .card-text{
        h2{
            margin-left: 10px;
            font-family: Mulish;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;  
            color: #292929;
        }
        p{
            font-family: Mulish;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            padding-top: -15px;
            line-height: 15px;
            color: #C4C4C4;
        }
    }
`
export default DashboardCard;