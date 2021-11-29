import React, { useState } from "react";
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import SearchList from "./SearchList";
const Container = styled.div`
  width: ${(props) => (props.show ? "30%" : "0%")};
  height: 100%;
  background-color: #ffffff;
  border-right: 2px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  transition: ${(props) => (props.show ? "0.1s ease-in" : "0.1s ease-in-out")};
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 0.5rem;
  border-radius: 16px;
  background-color: #ffffff;
  border: 2px solid #d4d4d4;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #303030;

  &::placeholder {
    color: #c4c4c4;
  }

  &:focus {
    outline: none;
    border: 2px solid #0023eb;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  width: 1rem;
  height: 1rem;
  top: 50%;
  right: 2.2rem;
  cursor: pointer;
`;

const Search = ({ showSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const list = [
    {
      id: 1,
      title: "네모빔 주유소",
      address: "서울특별시 네모구 세모동 동그라미34",
      operatingTime: "매일 24시간",
      phoneNum: "010-1234-1234",
      stock: "1200",
    },
    {
      id: 2,
      title: "세모빔 주유소",
      address: "서울특별시 네모구 세모동 동그라미34",
      operatingTime: "매일 24시간",
      phoneNum: "010-1234-1234",
      stock: "1200",
    },
  ];
  return (
    <Container show={showSearch}>
      <SearchWrapper>
        <SearchInput
          placeholder="지역 이름으로 장소를 검색해보세요!"
          onChange={onChangeSearch}
          value={searchTerm}
        />
        <SearchButton>
          <CgSearch color="#C4C4C4" />
        </SearchButton>
      </SearchWrapper>

      <SearchList list={list} />
    </Container>
  );
};

export default Search;