import React from "react";
import styled from "@emotion/styled";
import DashboardContainer from '../components/DashboardContainer';
import DashboardCard from '../components/reuseables/DashboardCards';


const Dashboard = () => {
  return (
    <DashboardContainer>
        <Dashboard.Wrapper>
            <input className='search' type="text" placeholder='Search' name=""/>
            <div className="card-container">
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
            </div>
      </Dashboard.Wrapper>
    </DashboardContainer>
  );
};
Dashboard.Wrapper = styled.div`
    .search{
        background: #ffffff;
        border: 0;
        border-radius: 3px;
        font-family: Mulish;
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        padding: 10px 15px;
        width: 330px;
        color: #C4C4C4;
    }
    .card-container{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    

`;
export default Dashboard;
