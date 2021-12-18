import styled from "styled-components";
export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  position: relative;
`;

export const ListButton = styled.button`
  width: 80px;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 16px;
  background-color: #99a7f7;
  color: #ffffff;
  font-size: 0.7rem;
  position: absolute;
  z-index: 100;
  bottom: 40px;
  left: 40%;
`;