import React, { useState } from 'react';
import styled from '@emotion/styled';
import shortid from 'shortid';
import NoData from './NoData';
const Pagination = (props) => {
  const { postsPerPage, totalPosts, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination.Wrapper>
      <ul>
        <button disabled={currentPage <= 1} className="first" onClick={() => paginate(currentPage - 1)}>&laquo;</button>
        {pageNumbers.map((number) => (
          <li key={shortid.generate()}>
            <button
              className={`${currentPage === number ? 'active' : ''}`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>

          </li>
        ))}
        <button
          className="last"
          disabled={currentPage >= pageNumbers.length}
          onClick={() => paginate(currentPage + 1)}
        >&raquo;
        </button>
      </ul>
    </Pagination.Wrapper>
  );
};

Pagination.Wrapper = styled.nav`
  display:flex;
  justify-content:center;
  margin-top:16px;
  margin-bottom: 30px;
  ul{
    display:flex;
    li{
      list-style-type: none;
    }
  }
  button{
    margin-left: 5px;
    margin-right: 5px;
    color: black;
    font-size: 14px;
    border-radius: 5px;
    background: inherit;
    padding: 10px 14px;
    text-decoration: none;
    border: 1px solid #ddd;
    &:hover:not(.active) {
      background-color: #ddd;
    }
    &:disabled,
    &[disabled]{
      border: 1px solid #999999;
      background-color: #f2f2f2;
      color: #666666;
      cursor:default;
      &:hover{
      background-color: #cccccc;
      }
}
  }
  .first{
      color: black;
      padding: 8px 16px;
      text-decoration: none;
      border: 1px solid #ddd;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-radius: 50%;
    }
    .last{
      color: black;
      padding: 8px 16px;
      text-decoration: none;
      border: 1px solid #ddd;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-radius: 50%;
    }
  .active {
  background-color: #002DCC;
  color: white;
  border: 1px solid #4CAF50;
}
`;
const CustomTable = (props) => {
  const { dataSource, columns, loading, pagination, handleRowClick } = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = pagination ? dataSource.slice(indexOfFirstPost, indexOfLastPost) : dataSource;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (

    <TableHolder>
      {loading ? (
        <TempHolder>
          {/* <Roller color="#fff" style={{ margin: 'auto' }} /> */}
          <div>Loading</div>
          <Spinner />
        </TempHolder>
      ) : <></>}

      <CustomTableItem>
        <thead>
          <tr>
            {columns.map((col) => (
              <TableHeader key={col.title}>{col.title}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            currentData.length > 0 ? currentData.map((record, index) => (
              <tr className='t-row' key={shortid.generate()} onClick={() => handleRowClick ? handleRowClick(record) : console.log(record)}>
                {
                  columns.map((column) => {
                    let nodeValue = record[column.dataIndex || ''];
                    nodeValue = column.render ? column.render(nodeValue, record, index) : nodeValue;
                    return (
                      <TableData key={column.title}>{nodeValue}</TableData>
                    );
                  })
                }
              </tr>
            )) : (


                <tr>
                  <td colSpan={columns.length}>
                    <NoData />
                  </td>
                </tr>
              )

          }
        </tbody>
      </CustomTableItem>
      {
        pagination && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={dataSource.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )
      }
    </TableHolder>
  );
};


const TableHolder = styled.div`
position: relative;
overflow-x: auto;
`;
const CustomTableItem = styled.table`
box-sizing: border-box;
border-collapse: separate;
border-spacing: 0 10px;
border-radius: 10px; 
box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
width:100%;
th, td {
  padding: 10px 15px;
  text-align: left;
}
.t-row{
  background: #FFFFFF;
}

tr:hover { background-color:#f2f2f2; }
`
const TableHeader = styled.th`
    font-family: Mulish;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */
    color: #C4C4C4;
`;
const TableData = styled.td`
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */


    color: #626262;

`;

const TempHolder = styled.div`
position: absolute;
background-color:rgba(0,0,0,.45);
width:100%;
height:100%;
top:0;
left:0;
right:0;
bottom:0;
display:flex;
align-content:center;
justify-content:center;
`;
export default CustomTable;

const Spinner = () => {
  return <Spinner.Wrapper></Spinner.Wrapper>;
};

Spinner.Wrapper = styled.div`
  border: 0.6rem solid #fff;
  border-top: 0.6rem solid #002DCC;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  /* margin:auto; */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
