// src/SubmissionsList.js
import React, { useMemo } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const TableContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 1000px;
  background-color: #f9f9f9;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const SubmissionsList = () => {
  const getFeedbacks = () => {
    return JSON.parse(localStorage.getItem("feedback")) || [];
  };

  const data = useMemo(() => getFeedbacks(), []);
  const columns = useMemo(
    () => [
      { Header: "Customer Name", accessor: "customerName" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Service Quality", accessor: "serviceQuality" },
      { Header: "Beverage Quality", accessor: "beverageQuality" },
      { Header: "Cleanliness", accessor: "cleanliness" },
      { Header: "Dining Experience", accessor: "diningExperience" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <TableContainer>
      <h2>Feedback Submissions</h2>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps()}>{column.render("Header")}</Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SubmissionsList;
