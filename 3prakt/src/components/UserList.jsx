import React, { useEffect, useState, useCallback, useMemo } from "react";
import UserCard from "./UserCard";
import Search from "./Search";
import styled, { createGlobalStyle } from "styled-components";


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://dummyjson.com/users?limit=110");
                const data = await res.json();

                const formattedUsers = data.users.map(user => ({
                    id: user.id,
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    city: user.address.city
                }));

                setUsers(formattedUsers);
                setLoading(false);
            } catch (error) {
                console.error("failed to fetch ", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleSearch = useCallback((value) => {
        setSearchQuery(value);
    }, []);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [users, searchQuery]);

    if (loading) return <p>Loading users...</p>;


    return (
        <div>
            <GlobalStyle />

                <Search onSearch={handleSearch} />
                {filteredUsers.length > 0 ? (
                    <UserCard user={filteredUsers} />
                ) : (
                    <Message>No users found.</Message>
                )}
        </div>
    );
}
export default UserList;

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #6a11cb, #331652);
    font-family: sans-serif;
    color: white;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
`;


