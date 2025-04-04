import React, { useState } from "react";
import styled from "styled-components";

const Search = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value);
    };

    const clearValue = () => {
        setSearchValue("");
        onSearch("");
    };

    return (
        <Wrapper>
            <Input
                type="text"
                placeholder="Search Name"
                value={searchValue}
                onChange={handleChange}
            />
            <Button onClick={clearValue}>Clear</Button>
        </Wrapper>
    );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  width: 250px;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background: #6a11cb;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #9076db;
  }
`;


