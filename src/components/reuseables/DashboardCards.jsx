import styled from '@emotion/styled';
import React from 'react';

const DashboardCard = () => {

    return (
        <DashboardCard.Wrapper>
            <div className='card-icon'>
                <span className='fa fa-edit'></span>
            </div>
            <div className='card-text'>
                <h2>458</h2>
                <p>Inspections</p>
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
        margin-left: 10px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        /* identical to box height */


        color: #292929;
    }
    p{
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */


        color: #C4C4C4;
    }
`
export default DashboardCard;