import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const UserCard = ({ user }) => {
    if (!user || user.length === 0) {
        return <p>No users found.</p>;
    }

    return (
        <Wrapper>
            <GlobalStyle />
            <Title>Users</Title>
            <Table>
                <thead>
                    <tr>
                        <Th>Name</Th>
                        <Th>Email</Th>
                        <Th>City</Th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(user => (
                        <tr key={user.id}>
                            <Td>{user.name}</Td>
                            <Td>{user.email}</Td>
                            <Td>{user.city}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Wrapper>
    );
};


export default React.memo(UserCard);

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(to right, #6a11cb, #331652);
    color: white;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;