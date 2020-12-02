import React from "react";
import styled from "@emotion/styled";
import DashboardContainer from '../components/DashboardContainer';
import DashboardCard from '../components/reuseables/DashboardCards';
import CustomTable from '../components/reuseables/CustomTable';
import PieChart from '../components/reuseables/chart/PieChart';
const columns = [
  {
    title: "Date",
    dataIndex: "date"
  },
  {
    title: "Inspection Area",
    dataIndex: "area"

  },
  {
    title: "Inspection State",
    render: (value, record) => {
      if (record.state === 'Successful') {
        return <div className="alert alert-success mb-0">
        {record.state}
      </div>
      } else if (record.state === 'Fail') {
        return  (
          <div className="alert alert-danger mb-0">
            {record.state}
          </div>
        )
      }
      else{
        return (
          <div className="alert alert-secondary mb-0">
            {record.state}
          </div>
        )
      }
    }
    
  },
]
const dataSource = [
  {
    date: "Mar 25, 2010",
    area: "All Lightings PLC",
    state: "Successful",
  },
  {
    date: "Mar 25, 2010",
    area: "All Lightings PLC",
    state: "Fail",
  },
  {
    date: "Mar 25, 2010",
    area: "All Lightings PLC",
    state: "Pending",
  },
  {
    date: "Mar 25, 2010",
    area: "All Lightings PLC",
    state: "Pending",
  },
  {
    date: "Mar 25, 2010",
    area: "All Lightings PLC",
    state: "Fail",
  },
  {
    date: "Mar 25, 2010",
    area: "All Lightings PLC",
    state: "Successful",
  },
];

const Dashboard = () => {
  return (
    <DashboardContainer>
        <Dashboard.Wrapper>
            <input className='search' type="text" placeholder='Search' name=""/>
            <div className="card-container">
                <DashboardCard title='Inspections' value='458' icon='fa-edit'/>
                <DashboardCard title='Approved Forms' value='1,256' icon='fa-check'/>
                <DashboardCard title='Users' value='1,256' icon='fa-user'/>
                <DashboardCard title='Certificate Issued' value='123' icon='fa-check'/>
            </div>
            <div className="main-lower">
              <div className="table-container">
                <div className="text">
                  <h3>Recent Inspections</h3>
                  <h4>See All</h4>
                </div> 
                <CustomTable columns={columns} dataSource={dataSource} />
              </div>
              <div className="chart-container">
                <h3>Inspection By Status</h3>
                <div>
                  <PieChart/>
                </div>
              </div>
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
        padding: 15px 20px;
        width: 330px;
        color: #C4C4C4;
        :focus{
          outline: none;
        }
    }
    
    .card-container{
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .main-lower{
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      .table-container{
        width: 60%;
        .text{
          display: flex;
          justify-content: space-between;
          h3{
            font-family: Mulish;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            line-height: 19px;
            color: #292929;
          }
          h4{
            font-family: Mulish;
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 16px;
            cursor: pointer;
            color: #00CF92;
            float: right;
          }
        }
        
      }
      .chart-container{
        width: 37%;
        margin-left: 3%;
        h3{
          font-family: Mulish;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 19px;
          color: #292929;
        }
        div{
          background: #ffffff;  
          height: 400px;
          margin-top: 50px;
          box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
          border-radius: 20px;
        }
      }
    }
    

`;
export default Dashboard;
